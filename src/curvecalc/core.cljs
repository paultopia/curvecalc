(ns curvecalc.core
  (:require [reagent.core :refer [atom render]]
            [cljs.pprint :refer [cl-format]]))


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
         :range "=<2.3"}})

(defn input-field [val-atom]
  [:input {:type "text"
           :value @val-atom
           :on-change #(reset! val-atom (-> % .-target .-value))}])


(defn trunc [somenum]
  (cl-format nil "~,2f" somenum))


(defn format-grade [grange num-students]
  (str (name grange)
       " ("
       (:range (grange (permissible-distributions num-students)))
       ")\n norm: "
       (trunc (:norm (grange (permissible-distributions num-students))))
       "\n min: "
       (trunc (:min (grange (permissible-distributions num-students))))
       "\n max: "
       (trunc (:max (grange (permissible-distributions num-students))))
       "\n"
       ))

(defn one-range-component [num-students]
  [:tr
   [:td (format-grade :A num-students)]]
  )

(defn row-component [grange num-students]
  (let [distros (permissible-distributions num-students)]
   [:tr
    [:td (str (name grange))]
    [:td (trunc (:norm (grange distros)))]]))

(defn table-component [num-students]
  [:table
   [:tbody
    [one-range-component num-students]
   [row-component :B num-students]]
   ])



;; -------------------------
;; Views

(defn home-page []
  [:div [:h2 "Iowa Law Grade Curve Calculator"]
   [:p "num studs: " @numstuds :foo]
   [:div "test: " [table-component @numstuds]]
   [:p "Enter the number of students: " [input-field numstuds]]
   ])

;; -------------------------
;; Initialize app

(defn mount-root []
  (render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
