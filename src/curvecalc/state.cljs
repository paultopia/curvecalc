(ns curvecalc.state
  (:require [reagent.core :refer [atom]]))

(defonce numstuds (atom 0))
(defonce distribution (atom :complex))
(defonce rounding (atom :none))
(defonce file-data (atom " "))
