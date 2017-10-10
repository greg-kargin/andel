(ns andel.noria
  (:require [andel.render :as render]
            [andel.theme :as theme])
  (:import [andel.render LineInfo]))

(defn should-subtree-update [pred]
  (fn [r-f]
    (fn
      ([] {:s (r-f)
           :args nil})
      ([state & args]
       (if (or (nil? (:args state)) (pred args (:args state)))
         {:s (apply r-f (:s state) args)
          :args args}
         state))
      ([state] (r-f (:s state))))))

(defn stateless [render-fn]
  (fn [r-f]
    (fn
      ([] (r-f))
      ([state & args]
       (r-f state (apply render-fn args)))
      ([state] state))))

(defn pure []
  (should-subtree-update not=))

(def scroll
  (stateless
   (fn [{:keys [on-wheel child]}]
     [:div {:style (render/style {:display  "flex"
                                  :flex     "1"
                                  :overflow :hidden})
            :on-wheel on-wheel}
      child])))

(def render-line
  (comp
   (should-subtree-update
    (fn [[props metrics] [props' metrics']]
      (or (not= metrics metrics')
          (not (render/line-props-equiv? props props')))))
   (stateless
    (fn [props metrics]
      (let [^LineInfo line-info (render/build-line-info props)
            selection (.-selection line-info)
            caret (.-caret line-info)
            text (.-text line-info)
            fg-markup (.-foreground line-info)
            bg-markup (.-background line-info)]
        [:div {:class "render-line"}
         (when (some? selection)
           [:div {:key :selection
                  :style (render/style (render/selection-style selection metrics))}])
         [:raw-line {:key :line
                     :text text
                     :fg-markup fg-markup
                     :bg-markup bg-markup
                     :metrics metrics}]
         (when (some? caret)
           [:div {:key :active-line
                  :style (render/style (render/active-line-style metrics))}])
         (when (some? caret)
           [:div {:key :caret
                  :style (render/style (render/caret-style caret metrics))}])])))))

(def style-cmp
  (comp
   (should-subtree-update (constantly false))
   (stateless
    (fn [name style]
      [:style {:name name
               :style (render/style style)}]))))

(def styles-container
  (comp
   (should-subtree-update not=)
   (stateless
    (fn [s]
      (into
       [:div]
       (map (fn [[n s]] ^{:key n} [style-cmp n s]))
       s)))))

(def scroller-
  (stateless
   (fn [{:keys [top height px->idx on-wheel child-cmp child-props] :as props}]
     (let [childs-children (:children child-props)
           child-props' (-> child-props
                            (assoc :from (px->idx top)
                                   :to   (px->idx (+ top height)))
                            (dissoc :children))]
       [:div {:component "scroller"
              :on-wheel on-wheel}
        (into [child-cmp child-props'] childs-children)]))))

(def list-
  (stateless
   (fn [{:keys [height from to map-fn]} & children]
     (into [:div {:component "list"
                  :style (render/style {:flex     "1"
                                        :overflow :hidden
                                        :height   height})}]
           (comp (drop from)
                 (take (- to from))
                 (map map-fn))
           children))))

(def rainbow
  (comp
   (should-subtree-update
    (constantly true))
   (stateless
    (fn [top height cb]
      (let [children (apply concat
                            (repeat 100 [[:div {:style (render/style {:height "50px"
                                                                      :width "100%"
                                                                      :background "red"})}]
                                         [:div {:style (render/style {:height "50px"
                                                                      :width "100%"
                                                                      :background "orange"})}]
                                         [:div {:style (render/style {:height "50px"
                                                                      :width "100%"
                                                                      :background "yellow"})}]
                                         [:div {:style (render/style {:height "50px"
                                                                      :width "100%"
                                                                      :background "green"})}]
                                         [:div {:style (render/style {:height "50px"
                                                                      :width "100%"
                                                                      :background "cyan"})}]
                                         [:div {:style (render/style {:height "50px"
                                                                      :width "100%"
                                                                      :background "blue"})}]
                                         [:div {:style (render/style {:height "50px"
                                                                      :width "100%"
                                                                      :background "purple"})}]]))
            px->idx (fn [px]
                      (quot px 50))
            y-shift (rem top 50)
            add-translate3d (fn [child]
                              (update-in child [1 :style]
                                         #(str %
                                               "transform: "
                                               "translate3d(0px,"
                                               (- y-shift)
                                               "px,0px);")))]
        [scroller- {:top top
                    :height height
                    :px->idx px->idx
                    :on-wheel cb
                    :child-cmp list-
                    :child-props {:children children
                                  :map-fn add-translate3d
                                  :height height}}])))))

(def editor-component
  (comp
   (should-subtree-update
    (fn [[state callbacks] [state' callbacks']]
      (or (not (identical? state state'))
          (not= callbacks callbacks'))))
   (stateless
    (fn [state {:keys [on-input on-mouse-down on-drag-selection on-resize on-scroll on-focus]} styles-map]
      (let [viewport (:viewport state)
            metrics (:metrics viewport)
            {:keys [y-shift] :as viewport-info} (render/viewport-info viewport)]
        [:div {:style (render/style {:display "flex"
                                     :flex    "1"
                                     :cursor  "text"
                                     :outline "transparent"})}
         [scroll
          {:on-wheel on-scroll
           :child (into
                   [:div {:style (render/style {:background theme/background
                                                :width      "100%"
                                                :overflow   "hidden"})
                          :on-mouse-down on-mouse-down}]
                   (map (fn [props]
                          [:div {:key (:line-number props)
                                 :style (render/style {:transform (str "translate3d(0px, " y-shift "px, 0px)")})}
                           [render-line props metrics]]))
                   (render/viewport-lines state viewport-info))}]
         [:hidden-text-area {:on-input on-input
                             :focused? (get-in state [:viewport :focused?])}]
         [styles-container styles-map]])))))

(comment

  (def map-view
    (stateless
     (fn [f coll]
       (into [:div {:component "map-view"}]
             (map f coll)))))

  [scroller {:on-scroll (fn [dx dy])
             :height height}
   (let [top-item (px->idx (constantly 19) top)
         bottom-item (px->idx (constantly 19) (+ top height))]
     [map-view
      (fn [i]
        ^{:key (key-fn i)}
        [translate3d {:y y-shift}
         (render-fn i)])
      (range top-item bottom-item)])]

  )
