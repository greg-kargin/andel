(ns andel.tui.render
  (:require [lanterna.screen :as s]
            [andel.text :as text]
            [andel.tree :as tree]
            [andel.utils :as utils]
            [andel.controller :as controller]))

(defn render-gutter [screen y line-number gutter-width]
  (let [num-str (format (str "%" (dec gutter-width) "d ") (inc line-number))]
    (s/put-string screen 0 y num-str {:fg :yellow :bg :default})))

(defn render-line [screen y line-text line-offset selection gutter-width max-cols]
  (let [[sel-from sel-to] selection
        usable-cols (- max-cols gutter-width)
        line-len (count line-text)
        render-len (min line-len usable-cols)]
    ;; Clear remaining columns
    (when (< render-len usable-cols)
      (s/put-string screen (+ gutter-width render-len) y
                    (apply str (repeat (- usable-cols render-len) \space))))
    ;; Render characters
    (doseq [col (range render-len)]
      (let [ch (nth line-text col)
            abs-offset (+ line-offset col)
            selected? (and (< sel-from sel-to)
                           (<= sel-from abs-offset)
                           (< abs-offset sel-to))
            opts (if selected?
                   {:fg :black :bg :cyan}
                   {:fg :white :bg :default})]
        (s/put-string screen (+ gutter-width col) y (str ch) opts)))))

(defn render-status-bar [screen row cols filename line col]
  (let [bg-str (apply str (repeat cols \space))
        left (str " " (or filename "[No File]"))
        right (str "Ln " (inc line) ", Col " (inc col) "  Ctrl+S save | Ctrl+Q quit ")]
    (s/put-string screen 0 row bg-str {:fg :black :bg :white})
    (s/put-string screen 0 row left {:fg :black :bg :white})
    (let [right-start (max (count left) (- cols (count right)))]
      (s/put-string screen right-start row right {:fg :black :bg :white}))))

(defn render! [screen state filename]
  (let [[cols rows] (s/get-size screen)
        {:keys [document editor viewport]} state
        {:keys [text]} document
        {:keys [caret selection]} editor
        {:keys [metrics]} viewport
        status-row (dec rows)
        text-rows (dec rows)
        total-lines (text/lines-count text)
        gutter-width (+ 2 (count (str total-lines)))
        [from-line to-line] (controller/get-view-in-lines viewport metrics)
        to-line (min to-line (+ from-line text-rows))
        caret-offset (:offset caret)
        {:keys [line col]} (utils/offset->line-col caret-offset text)]

    (s/clear screen)

    ;; Render visible lines
    (loop [line-idx from-line
           screen-row 0]
      (when (and (< screen-row text-rows)
                 (< line-idx total-lines))
        (let [loc (text/scan-to-line (text/zipper text) line-idx)
              line-length (text/line-length loc)
              line-text (text/text loc line-length)
              line-offset (text/offset loc)]
          (render-gutter screen screen-row line-idx gutter-width)
          (render-line screen screen-row line-text line-offset
                       selection gutter-width cols)
          (recur (inc line-idx) (inc screen-row)))))

    ;; Fill empty rows with ~
    (let [rendered-lines (min (- to-line from-line) total-lines)]
      (doseq [row (range (- rendered-lines from-line) text-rows)]
        (when (>= row rendered-lines)
          (s/put-string screen 0 row "~" {:fg :blue :bg :default}))))

    ;; Status bar
    (render-status-bar screen status-row cols filename line col)

    ;; Cursor
    (let [cursor-row (- line from-line)
          cursor-col (+ gutter-width col)]
      (when (and (>= cursor-row 0) (< cursor-row text-rows))
        (s/move-cursor screen cursor-col cursor-row)))

    (s/redraw screen)))
