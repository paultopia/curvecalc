(ns curvecalc.upload.core
  "experimental functionality to read user-supplied CSV file and test it against grade curve. Needs refactor into better namespaces. also needs tests, better display.

  future functionality:
  1.  let users choose how to round fractional grades (right now no rounding is equivalent to rounding down)
  2.  more attractive display.
  3.  give users option re permissible medians in two-value cases.
  4.  one day: suggest grades."
  (:require [curvecalc.state :refer [file-data]]
            [cljs.core.async :refer [put! chan <! >!]]
            [goog.labs.format.csv :refer [parse]]
            [curvecalc.upload.display :as d]
            [curvecalc.footer :refer [footer-component]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(def calculate #(curvecalc.core.load-calculation))


(def first-file
  (map (fn [e]
         (let [target (.-currentTarget e)
               file (-> target .-files (aget 0))]
           file))))

(defn transpose [m]
  (apply mapv vector m))

(def extract-result
  (map #(-> % .-target .-result parse js->clj transpose second)))

(def upload-reqs (chan 1 first-file))
(def file-reads (chan 1 extract-result))

(defn put-upload [e]
  (put! upload-reqs e))

(go-loop []
  (let [reader (js/FileReader.)
        file (<! upload-reqs)]
    (set! (.-onload reader) #(put! file-reads %))
    (.readAsText reader file)
    (recur)))

(go-loop []
  (reset! file-data (<! file-reads))
  (recur))

(defn input-component []
    [:input
     {:type "file" :id "file" :title "upload" :accept ".csv" :name "file" :on-change put-upload}])


(defn explanation-component []
  [:div
   [:p "Experimental functionality to validate existing grade lists.  Right now, you can select a csv file (Excel will export a worksheet as csv) with the grades in the " [:b "second column"] " (mandatory) and the program will compare the grade distribution to the rules and tell you if it matches, or, if it doesn't match, what went wrong."]
   [:p "Supply your file below. Note that this file doesn't actually send it to any server---it just analyzes the file within your browser, so student privacy is preserved."]])

(defn disclaimer-component []
  [:div
   [:h5 "Notes and disclaimers"]
   [:p "This functionality is "[:b "experimental"] ": I have tested it against a couple known-correct distributions, but have not done so exhaustively. For now, you should make your own count."]
   [:p "For the median in the case of even-numbered grade counts, this currently gives the two central numbers rather than averaging them. Also, when there are at least 30 students, in addition to accepting 3.3-3.3 and 3.2-3.4, the validator accepts 3.2-3.3 and 3.3-3.4 (medians 3.25 and 3.35, respectively)."]
   [:p "Currently, fractional numbers of students within a grade bucket are not rounded, which for validation is the functional equivalent of rounding down."]
   [:h5 "Future Enhancements:"]
   [:ul
    [:li "More testing and confidence about the correctness of the validation"]
    [:li "An option to choose how to handle medians in even-numbered grade lists"]
    [:li "An option to round fractional numbers of students up, down, or to nearest whole number."]
    [:li "Suggested curved grades from a csv of raw grades (eventually, maybe, if I can figure out a good heuristic)."]]])

(defn file-upload-component []
  [:div
   [explanation-component]
   [input-component]
   [d/validation-component @file-data]
   [d/buckets-component @file-data]])

(defn validation-page []
  [:div.container [:h3 "Iowa Law Grade Curve Validator (Experimental)"]
   [file-upload-component]
   [disclaimer-component]
   [footer-component calculate "calculate a curve"]
  ])
