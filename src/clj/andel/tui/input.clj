(ns andel.tui.input
  (:require [andel.controller :as controller]))

(defn ctrl-char?
  "Check if a character is a control character (Ctrl+letter)."
  [ch]
  (and (char? ch)
       (< (int ch) 27)
       (not= ch \newline)
       (not= ch \tab)
       (not= ch \return)))

(defn ctrl-letter
  "Convert control character to its lowercase letter."
  [ch]
  (char (+ (int ch) 96)))

(defn handle-key
  "Given a key from lanterna and the current state, return
   {:state new-state :quit? boolean :save? boolean}.

   The key is either a keyword (:left, :right, etc.)
   or a character (normal or control)."
  [state key]
  (cond
    ;; Ctrl+key combos (control characters)
    (and (char? key) (ctrl-char? key))
    (case (ctrl-letter key)
      \q {:state state :quit? true}
      \s {:state state :save? true}
      ;; Emacs navigation
      \f {:state (controller/move-caret state :right false)}
      \b {:state (controller/move-caret state :left false)}
      \n {:state (controller/move-caret state :down false)}
      \p {:state (controller/move-caret state :up false)}
      ;; Unknown ctrl combo — ignore
      {:state state})

    ;; Arrow keys
    (= key :left)      {:state (controller/move-caret state :left false)}
    (= key :right)     {:state (controller/move-caret state :right false)}
    (= key :up)        {:state (controller/move-caret state :up false)}
    (= key :down)      {:state (controller/move-caret state :down false)}

    ;; Editing
    (= key :backspace) {:state (controller/backspace state)}
    (= key :delete)    {:state (controller/delete state)}
    (= key :enter)     {:state (controller/on-enter state)}
    (= key :tab)       {:state (controller/type-in state "    ")}

    ;; Navigation
    (= key :home)      {:state (controller/home state false)}
    (= key :end)       {:state (controller/end state false)}
    (= key :page-up)   {:state (controller/pg-move state :up false)}
    (= key :page-down) {:state (controller/pg-move state :down false)}

    ;; Selection
    (= key :escape)    {:state (controller/drop-selection-on-esc state)}

    ;; Normal character input
    (char? key)        {:state (controller/type-in state (str key))}

    ;; Unknown — ignore
    :else              {:state state}))
