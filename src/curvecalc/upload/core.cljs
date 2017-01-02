(ns curvecalc.upload.core
  "experimental functionality to read user-supplied CSV file and test it against grade curve.  Right now, just has functionality to grab csv, take the second column, and display it in the UI.  In another namespace, I will create the functionality to take that second column (which is assumed to have the grades), and:

  1.  detect header row or not (because of empty rows, I should probably just filter for parsing string as number )
  2.  identify median (one or two numbers, depending on even or odd count)
  3.  test it against mandatory grade curve.
File upload functionality derived (basically wholesale) from https://mrmcc3.github.io/post/csv-with-clojurescript/

  The only thing this namespace should expose to the rest of the app is file-upload-component, which will be a full renderable reagent page that will handle upload and download.  (This page will also need to go back to previous page using dirty circular namespace dependency tricks.) (Alternatively, I may offer it as a component that renders below the table...)"
  (:require [curvecalc.state :refer [file-data]]
            [cljs.core.async :refer [put! chan <! >!]]
            [goog.labs.format.csv :refer [parse]]
            [curvecalc.upload.display :as d])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(def first-file
  (map (fn [e]
         (let [target (.-currentTarget e)
               file (-> target .-files (aget 0))]
        ;;   (set! (.-value target) "")
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
  [:input {:type "file" :id "file" :title "upload" :accept ".csv" :name "file" :on-change put-upload}])

;;; SECOND COLUMN OF CSV MUST BE GRADES.  (And will need to parse them to floats in processing.)

;; ONLY PUBLIC NAME
(defn file-upload-component []
  [:div
   [:p "Experimental functionality to upload and validate files.  Right now, you can select a csv file (Excel will export a worksheet as csv) with the grades in the " [:b "second column"] " (mandatory) and the program will tell you what the median grade is. Down the road (time and laziness permitting), it may also validate your grades against the curve and maybe even suggest corrections. Maybe."]
   [:p "Supply your file below. Note that this file doesn't actually send it to any server---it just analyzes the file within your browser, so student privacy is preserved."]
   [input-component]
   [d/validation-component @file-data]
   [d/buckets-component @file-data]])

(defn validation-page []
  [:div.container [:h3 "Iowa Law Grade Curve Validator (Experimental)"]
   [file-upload-component]
   [:hr]
   [:p "In case you're really curious, you can see "
    [:a {:href "https://github.com/paultopia/curvecalc"} "the source code for this stuff."] " Source for requirements: " [:a {:href "https://law.uiowa.edu/sites/law.uiowa.edu/files/wysiwyg_uploads/student_handbook-16-17.pdf"} "2016-7 Student handbook."]]])
