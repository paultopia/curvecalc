(ns curvecalc.autocurve.buildtree
  (:require [linked.core :as l]
  			[curvecalc.autocurve.datastructure :as ds))

; {:node-level :root :top-val nil :bottom-val :nil}

(defn make-tree [score-list node-set child-maker]
	(add-nodes (l/set {:node-level :root :parent nil :top-val nil :bottom-val :nil}) score-list node-set child-maker))

(defn add-nodes [tree score-list node-set child-maker] 
	(let [curnode (last tree)
		parent
	]
	))
  
  ;; ON HOLD PENDING RETHINK.