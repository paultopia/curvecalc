(ns curvecalc.core
  (:require [reagent.core :refer [atom render]]
            [cljs.pprint :refer [cl-format]]
            [curvecalc.upload.core :refer [file-upload-component]]
            [curvecalc.calc :refer [simple-distributions complex-distributions]]))

(defonce numstuds (atom 0))
(defonce distribution (atom :complex))

(defn distroset [distro-key]
  (if (= distro-key :complex)
    :simple
    :complex))

(defn permissible-distributions [num-students distro-key]
  (if (= distro-key :complex)
    (complex-distributions num-students)
    (simple-distributions num-students)))

;; all this distro-key manipulation is ugly and I hate it. need to refactor.

(defn input-field [val-atom]
  [:input {:type "text"
           :value @val-atom
           :on-change #(reset! val-atom (-> % .-target .-value))}])

(defn trunc [somenum]
  (cl-format nil "~,2f" somenum))

(defn simple-row-component [grange distros distro-key]
  (let [this-grade (grange distros)]
    (if (= distro-key :complex)
      [:tr {:key (random-uuid)}
       [:td (str (name grange))]
       [:td (:range this-grade)]
       [:td (trunc (:norm this-grade))]
       [:td (trunc (:min this-grade))]
       [:td (trunc (:max this-grade))]]
      [:tr {:key (random-uuid)}
       [:td (str (name grange))]
       [:td (:range this-grade)]
       [:td (trunc (:min this-grade))]
       [:td (trunc (:max this-grade))]]
      )))

(defn order-of-keys [distro-key]
  (if (= distro-key :complex)
    [:A+ :A :A- :B+ :B :B- :C+ :C-F]
    [:A+_to_A- :B+ :B :B-_to_F]))

(defn body-component [num-students distro-key]
  (let [distros (permissible-distributions num-students distro-key)
        rows (for [x (order-of-keys distro-key)] (simple-row-component x distros distro-key))]
    [:tbody rows]))

(defn table-component [num-students distro-key]
  [:table.u-full-width
   [:thead
    [:tr
     [:th "Grade"]
     [:th "Score Range"]
     (if (= distro-key :complex ) [:th "Norm"] nil)
     [:th "Min"]
     [:th "Max"]]]
   [body-component num-students distro-key]])


;; -------------------------
;; Views

(defn home-page []
  [:div.container [:h3 "Iowa Law Grade Curve Calculator"]
   [:p "Enter the number of students: " [input-field numstuds]]
   [:div [table-component @numstuds @distribution]]
   [:p "Note: this table automatically displays the curve that applies to classes of 30 students or more, per Student Handbook III.B.2."]
   [:p "There is an alternative simpler curve for class sizes under 30 students, per Student Handbook III.B.3.  I'm pretty suspicious of this curve (for one thing, it appears to technically forbid a grade of 3.6), but if you want to see it, select it below."]
   [:p [:button {:on-click #(swap! distribution distroset @distribution)} "Swap distributions."] (str @distribution)]
   [:hr]
   [:h4 "Experimental Stuff"]
   [file-upload-component]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
