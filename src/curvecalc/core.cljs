(ns curvecalc.core
  (:require [reagent.core :refer [atom render]]
            [cljs.pprint :refer [cl-format]]
            [curvecalc.upload.core :refer [file-upload-component]]))

(defonce numstuds (atom 0))

(defn permissible-distributions [num-students]
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

(def order-of-keys [:A+ :A :A- :B+ :B :B- :C+ :C-F])

(defn body-component [num-students]
  (let [distros (permissible-distributions num-students)
        rows (for [x order-of-keys] (simple-row-component x distros))]
    [:tbody rows]))

(defn table-component [num-students]
  [:table.u-full-width
   [:thead
    [:tr
     [:th "Grade"]
     [:th "Score Range"]
     [:th "Norm"]
     [:th "Min"]
     [:th "Max"]]]
   [body-component num-students]])


;; -------------------------
;; Views

(defn home-page []
  [:div.container [:h3 "Iowa Law Grade Curve Calculator"]
   [:p "Enter the number of students: " [input-field numstuds]]
   [:div [table-component @numstuds]]
   [file-upload-component]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
