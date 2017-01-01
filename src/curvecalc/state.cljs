(ns curvecalc.state
  (:require [reagent.core :refer [atom]]))

(defonce numstuds (atom 0))
(defonce distribution (atom :complex))
