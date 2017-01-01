(ns curvecalc.calc)

(defn complex-distributions [num-students]
  {:A+ {
        :min 0
        :norm (* .025 num-students)
        :max (* .05 num-students)
        :range {:low 4.2 :high 4.3}}
   :A {
       :min (* .05 num-students)
       :norm (* .075 num-students)
       :max (* .1 num-students)
       :range {:low 3.9 :high 4.1}}
   :A- {
        :min (* .1 num-students)
        :norm (* .15 num-students)
        :max (* .2 num-students)
        :range {:low 3.6 :high 3.8}}
   :B+ {
        :min (* .2 num-students)
        :norm (* .25 num-students)
        :max (* .3 num-students)
        :range {:low 3.3 :high 3.5}}
   :B {
        :min (* .2 num-students)
        :norm (* .25 num-students)
       :max (* .3 num-students)
       :range {:low 3.0 :high 3.2}}
   :B- {
        :min (* .1 num-students)
        :norm (* .15 num-students)
        :max (* .2 num-students)
        :range {:low 2.7 :high 2.9}}
   :C+ {
        :min (* .05 num-students)
        :norm (* .075 num-students)
        :max (* .1 num-students)
        :range {:low 2.4 :high 2.6}}
   :C-F {
         :min 0
         :norm (* .025 num-students)
         :max (* .05 num-students)
         :range {:high 2.3 :low 0}}})


(defn simple-distributions [num-students]
  {:A+_to_A- {
        :min (* .15 num-students)
        :norm "N/A"
        :max (* .35 num-students)
        :range {:low 3.6 :high 4.3}}
   :B+ {
       :min (* .2 num-students)
       :norm "N/A"
       :max (* .3 num-students)
        :range {:low 3.3 :high 3.5}}
   :B {
        :min (* .2 num-students)
        :norm "N/A"
        :max (* .3 num-students)
       :range {:low 3.0 :high 3.2}}

   :B-_to_F {
              :min (* .15 num-students)
              :norm "N/A"
              :max (* .35 num-students)
              :range {:low 0 :high 2.9}}})

(defn distroset [distro-key]
  (if (= distro-key :complex)
    :simple
    :complex))

(defn permissible-distributions [num-students distro-key]
  (if (= distro-key :complex)
    (complex-distributions num-students)
    (simple-distributions num-students)))

(defn order-of-keys [distro-key]
  (if (= distro-key :complex)
    [:A+ :A :A- :B+ :B :B- :C+ :C-F]
    [:A+_to_A- :B+ :B :B-_to_F]))

