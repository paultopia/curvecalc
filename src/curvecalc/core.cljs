(ns curvecalc.core
  (:require [reagent.core :refer [atom render]]
            [cljs.pprint :refer [cl-format]]
            [curvecalc.upload.core :refer [file-upload-component]]
            [curvecalc.calc :refer [simple-distributions complex-distributions]]))

(defonce numstuds (atom 0))
(defonce distribution (atom :complex))

(defn distroset [distro]
  (if (= distro :complex)
    :simple
    :complex))

(defn permissible-distributions [num-students distro]
  (if (= distro :complex)
    (complex-distributions num-students)
    (simple-distributions num-students)))

(defn old-permissible-distributions [num-students]
  {:A+ {
        :min 0
        :norm (* .025 num-students)
        :max (* .05 num-students)
        :range "4.2-4.3"}
   :A {
       :min (* .05 num-students)
       :norm (* .075 num-students)
       :max (* .1 num-students)
       :range "3.9-4.1"}
   :A- {
        :min (* .1 num-students)
        :norm (* .15 num-students)
        :max (* .2 num-students)
        :range "3.6-3.8"}
   :B+ {
        :min (* .2 num-students)
        :norm (* .25 num-students)
        :max (* .3 num-students)
        :range "3.3-3.5"}
   :B {
        :min (* .2 num-students)
        :norm (* .25 num-students)
       :max (* .3 num-students)
       :range "3.0-3.2"}
   :B- {
        :min (* .1 num-students)
        :norm (* .15 num-students)
        :max (* .2 num-students)
        :range "2.7-2.9"}
   :C+ {
        :min (* .05 num-students)
        :norm (* .075 num-students)
        :max (* .1 num-students)
        :range "2.4-2.6"}
   :C-F {
         :min 0
         :norm (* .025 num-students)
         :max (* .05 num-students)
         :range "2.3 or below"}})

(defn input-field [val-atom]
  [:input {:type "text"
           :value @val-atom
           :on-change #(reset! val-atom (-> % .-target .-value))}])

(defn trunc [somenum]
  (cl-format nil "~,2f" somenum))

(defn simple-row-component [grange distros]
  (let [this-grade (grange distros)]
    [:tr {:key (random-uuid)}
     [:td (str (name grange))]
     [:td (:range this-grade)]
     [:td (trunc (:norm this-grade))]
     [:td (trunc (:min this-grade))]
     [:td (trunc (:max this-grade))]]))

(defn order-of-keys [distro]
  (if (= distro :complex)
    [:A+ :A :A- :B+ :B :B- :C+ :C-F]
    [:A+_to_A- :B+ :B :B-_to_F]))

(defn body-component [num-students distro]
  (let [distros (permissible-distributions num-students distro)
        rows (for [x (order-of-keys distro)] (simple-row-component x distros))]
    [:tbody rows]))

(defn table-component [num-students distro]
  [:table.u-full-width
   [:thead
    [:tr
     [:th "Grade"]
     [:th "Score Range"]
     [:th "Norm"]
     [:th "Min"]
     [:th "Max"]]]
   [body-component num-students distro]])


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
