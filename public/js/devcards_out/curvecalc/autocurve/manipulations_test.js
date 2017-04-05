// Compiled by ClojureScript 1.9.229 {}
goog.provide('curvecalc.autocurve.manipulations_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('curvecalc.autocurve.manipulations');
goog.require('curvecalc.autocurve.filtering');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"curvecalc.autocurve.manipulations_test","curvecalc.autocurve.manipulations_test",1298464883),new cljs.core.Keyword(null,"nb","nb",1313629270)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"nb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"This is going to have the test material for both the partitioning and the testing so I don't have to shove too much data around.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
curvecalc.autocurve.manipulations_test.test_data = cljs.core.PersistentVector.fromArray([4.2,4.0,3.9,3.9,3.9,3.8,3.8,3.7,2.9,2.9,2.8,2.8,2.8,2.7,2.7,2.7,2.6,2.6,3.4,3.4,3.4,3.3,3.3,3.3,3.3,3.3,3.2,3.2,3.2,3.2,3.2,3.2,3.1,3.1,3.1,3.0,3.0,3.0,2.9,2.9,2.8,2.8,2.8,2.7,2.7,2.7,2.6,2.6,2.4,2.4,2.3], true);
curvecalc.autocurve.manipulations_test.sample_partition = cljs.core.take.call(null,(5),cljs.core.shuffle.call(null,curvecalc.autocurve.manipulations.generate_partitions.call(null,curvecalc.autocurve.manipulations_test.test_data,new cljs.core.Keyword(null,"simple","simple",-581868663))));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"curvecalc.autocurve.manipulations_test","curvecalc.autocurve.manipulations_test",1298464883),new cljs.core.Keyword(null,"simple-partition","simple-partition",1698963001)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"simple-partition",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),curvecalc.autocurve.manipulations_test.sample_partition,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=manipulations_test.js.map?rel=1491432116565