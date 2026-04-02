(ns andel.tui.metrics)

(def tui-metrics
  "Metrics where 1 unit = 1 character cell.
   Makes the pixel-based viewport math in controller.cljc
   work correctly for terminal character grids."
  {:width 1
   :height 1
   :spacing 0})

(defn make-viewport
  "Create a viewport sized to the terminal dimensions [cols rows]."
  [cols rows]
  {:pos [0 0]
   :view-size [cols rows]
   :metrics tui-metrics})
