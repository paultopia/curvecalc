(ns curvecalc.autocurve.datastructure
  (:require [linked.core :as l]))

(def node-sets
  {:big [:root :A+ :A :A- :B+ :B :B- :C+ :C-F]
   :little [:root :A+_to_A- :B+ :B :B-_to_F]})

;; tree is an ordered (linked) set (https://github.com/frankiesardo/linked), good-paths-atom is a regular set.

(def tree-atom (l/set {:node-level :root :top-val nil :bottom-val :nil})) ; may not be necessary, if I write a walker function that just recursively goes over a tree l/set and adds and removes as necessary.

(def good-paths-atom #{})

;; id contains {:node-level node-level :top-val top-val :bottom-val bottom-val} where node-level is, e.g., :A+, :A etc.

(defn make-node
  [id node-set score-list parent child-maker]
  (let [children (child-maker score-list id)
        node-level [:node-level id]
        path (if
                 (= node-level :root)
               #{}
               (conj (:path parent) id))
        terminus (= (last node-set) node-level)
        live-route (or terminus (seq children)) ;; if we're at terminus or children has anything in it, then this path is worth pursuing.
        node (if live-route {id path children} nil)]
    (swap! good-paths-atom conj node)
    node)) ;; returns node to be put in tree.  if I keep tree as atom then I can just swap here instead of returning.

;; need to write:
;; child-maker: just lays out id of possible children by testing various cut-points against permissibility function.

;; function to walk the tree and append more nodes as necessary.

;; maybe just store the tree in some piece of mutable state, and walk down it every run of make-node to find a node to make?


;; Yeah, then I can do the equivalent of breadth-first search by just looking at the last node of tree, grabbing its children, and calling make-node on each child that isn't already in tree.  That will be how I walk the tree. 

;; might not have to do tree as atom, but will have to figure that out later. 
