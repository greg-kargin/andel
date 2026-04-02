(ns andel.tui.core
  (:require [lanterna.screen :as s]
            [andel.text :as text]
            [andel.intervals :as intervals]
            [andel.controller :as controller]
            [andel.tui.metrics :as metrics]
            [andel.tui.render :as render]
            [andel.tui.input :as input])
  (:gen-class))

(defn make-initial-state [cols rows]
  {:document {:text (text/make-text "")
              :markup (intervals/make-interval-tree)
              :timestamp 0
              :lines []
              :first-invalid 0}
   :editor {:caret {:offset 0 :v-col 0}
            :selection [0 0]}
   :viewport (metrics/make-viewport cols rows)})

(defn resize-viewport [state cols rows]
  (-> state
      (assoc-in [:viewport :view-size] [cols rows])
      (assoc-in [:viewport :metrics] metrics/tui-metrics)))

(defn save-file! [state filename]
  (when filename
    (let [txt (-> state :document :text)
          len (text/text-length txt)
          content (text/text (text/zipper txt) len)]
      (spit filename content))))

(defn -main [& args]
  (let [filename (first args)
        screen (s/get-screen :unix)
        _ (s/start screen)
        [cols rows] (s/get-size screen)
        initial-state (cond-> (make-initial-state cols rows)
                        filename (controller/set-text (slurp filename)))
        *state (atom initial-state)]
    (try
      (s/add-resize-listener screen
        (fn [new-cols new-rows]
          (swap! *state resize-viewport new-cols new-rows)))

      (render/render! screen @*state filename)

      (loop []
        (let [key (s/get-key-blocking screen)
              {:keys [state quit? save?]} (input/handle-key @*state key)]
          (when save?
            (save-file! state filename))
          (reset! *state (controller/move-view-if-needed state))
          (render/render! screen @*state filename)
          (when-not quit?
            (recur))))

      (finally
        (s/stop screen)))))
