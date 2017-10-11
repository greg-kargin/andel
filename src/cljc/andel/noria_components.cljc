(ns andel.noria-components
  (:require [andel.render :as render]
            [andel.theme :as theme]
            [andel.utils :as utils]
            [noria.components :as components])
  (:import [andel.render LineInfo]))

(def scroll
  (components/render
   (fn [{:keys [on-wheel child]}]
     [:div {:style (render/style {:display  "flex"
                                  :flex     "1"
                                  :overflow :hidden})
            :on-wheel on-wheel}
      child])))

(def render-line
  (comp
   (components/should-subtree-update
    (fn [[props metrics] [props' metrics']]
      (or (not= metrics metrics')
          (not (render/line-props-equiv? props props')))))
   (components/render
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
   (components/should-subtree-update (constantly false))
   (components/render
    (fn [name style]
      [:style {:name name
               :style (render/style style)}]))))

(def styles-container
  (comp
   (components/should-subtree-update not=)
   (components/render
    (fn [s]
      (into
       [:div]
       (map (fn [[n s]] ^{:key n} [style-cmp n s]))
       s)))))

(def scroller-
  (components/render
   (fn [{:keys [point lengths set-child-range on-wheel child-cmp child-props] :as props}]
     (let [child-children (:children child-props)
           child-props' (-> child-props
                            (set-child-range point lengths)
                            (dissoc :children))]
       [:div {:style (render/style {:display  "flex"
                                    :flex     "1"
                                    :overflow :hidden})
              :on-wheel on-wheel}
        (into [child-cmp child-props'] child-children)]))))

(def list-
  (components/render
   (fn [{:keys [from to attrs xform]} & children]
     (into [:div attrs]
           (comp (if (and from to)
                   (comp
                    (drop from)
                    (take (- to from)))
                   identity)
                 xform)
           children))))

(def rainbow
  (comp
   (components/render
    (fn [point lengths cb]
      (let [children (apply concat (repeat 10 [:red :orange :yellow :green :cyan :blue :purple]))
            set-child-range (fn [child-props [_ y-cord _ :as point] [_ y-length _ :as lengths]]
                              (assoc child-props
                                     :from (quot y-cord 50)
                                     :to   (quot (+ y-cord y-length) 50)))
            y-shift (rem (second point) 50)
            into-div (fn [color]
                       [:div {:style (render/style {:height "50px"
                                                    :width "100%"
                                                    :background color})}])
            add-translate3d (fn [child]
                              (update-in child [1 :style]
                                         #(str %
                                               "transform: "
                                               "translate3d(0px,"
                                               (- y-shift)
                                               "px,0px);")))]
        [scroller- {:point point
                    :lengths lengths
                    :set-child-range set-child-range
                    :on-wheel cb
                    :child-cmp list-
                    :child-props {:attrs {:style (render/style {:flex     "1"
                                                                :overflow :hidden})}
                                  :children children
                                  :xform (map (comp add-translate3d into-div))}}])))))

(def editor-component-
  (comp
   (components/should-subtree-update
    (fn [[state callbacks] [state' callbacks']]
      (or (not (identical? state state'))
          (not= callbacks callbacks'))))
   (components/render
    (fn [state {:keys [on-input on-mouse-down on-drag-selection on-resize on-scroll on-focus]} styles-map]
      (let [viewport (:viewport state)
            metrics (:metrics viewport)
            {:keys [y-shift] :as viewport-info} (render/viewport-info viewport)]
        [:div {:style (render/style {:display "flex"
                                     :flex "1"
                                     :cursor "text"
                                     :outline "transparent"})}
         [scroller- {:set-child-range (fn [c _ _] c)
                     :on-wheel on-scroll
                     :child-cmp list-
                     :child-props {:attrs {:style (render/style {:background theme/background
                                                                 :width      "100%"
                                                                 :overflow   "hidden"})
                                           :on-mouse-down on-mouse-down}
                                   :children (render/viewport-lines state viewport-info)
                                   :xform (map (fn [props]
                                                 [:div {:key (:line-number props)
                                                        :style (render/style {:transform (str "translate3d(0px, " y-shift "px, 0px)")})}
                                                  [render-line props metrics]]))}}]
         [:hidden-text-area {:on-input on-input
                             :focused? (get-in state [:viewport :focused?])}]
         [styles-container styles-map]])))))

(def editor-component
  (comp
   (components/should-subtree-update
    (fn [[state callbacks] [state' callbacks']]
      (or (not (identical? state state'))
          (not= callbacks callbacks'))))
   (components/render
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
