(ns curvecalc.calc)

(defn complex-distributions [num-students]
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


(defn simple-distributions [num-students]
  {:A+_to_A- {
        :min (* .15 num-students)
        :norm "N/A"
        :max (* .35 num-students)
        :range "3.6-4.3"}
   :B+ {
       :min (* .2 num-students)
       :norm "N/A"
       :max (* .3 num-students)
        :range "3.3-3.5"}
   :B {
        :min (* .2 num-students)
        :norm "N/A"
        :max (* .3 num-students)
       :range "3.0-3.2"}

   :B-_to_F {
              :min (* .15 num-students)
              :norm "N/A"
              :max (* .35 num-students)
              :range "2.9 and below"}})
