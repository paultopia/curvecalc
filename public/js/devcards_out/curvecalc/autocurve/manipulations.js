// Compiled by ClojureScript 1.9.229 {}
goog.provide('curvecalc.autocurve.manipulations');
goog.require('cljs.core');
goog.require('clojure.math.combinatorics');
curvecalc.autocurve.manipulations.breaks__GT_partition = (function curvecalc$autocurve$manipulations$breaks__GT_partition(var_args){
var args38880 = [];
var len__25876__auto___38883 = arguments.length;
var i__25877__auto___38884 = (0);
while(true){
if((i__25877__auto___38884 < len__25876__auto___38883)){
args38880.push((arguments[i__25877__auto___38884]));

var G__38885 = (i__25877__auto___38884 + (1));
i__25877__auto___38884 = G__38885;
continue;
} else {
}
break;
}

var G__38882 = args38880.length;
switch (G__38882) {
case 2:
return curvecalc.autocurve.manipulations.breaks__GT_partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return curvecalc.autocurve.manipulations.breaks__GT_partition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38880.length)].join('')));

}
});

curvecalc.autocurve.manipulations.breaks__GT_partition.cljs$core$IFn$_invoke$arity$2 = (function (v,brks){
return curvecalc.autocurve.manipulations.breaks__GT_partition.call(null,(0),cljs.core.PersistentVector.EMPTY,v,brks);
});

curvecalc.autocurve.manipulations.breaks__GT_partition.cljs$core$IFn$_invoke$arity$4 = (function (start,pars,v,brks){
while(true){
if(cljs.core.empty_QMARK_.call(null,brks)){
return cljs.core.conj.call(null,pars,cljs.core.subvec.call(null,v,start,cljs.core.count.call(null,v)));
} else {
var this_part = cljs.core.subvec.call(null,v,start,cljs.core.first.call(null,brks));
var G__38887 = cljs.core.first.call(null,brks);
var G__38888 = cljs.core.conj.call(null,pars,this_part);
var G__38889 = v;
var G__38890 = cljs.core.rest.call(null,brks);
start = G__38887;
pars = G__38888;
v = G__38889;
brks = G__38890;
continue;
}
break;
}
});

curvecalc.autocurve.manipulations.breaks__GT_partition.cljs$lang$maxFixedArity = 4;

curvecalc.autocurve.manipulations.min_parts = (function curvecalc$autocurve$manipulations$min_parts(min,splits){
return (cljs.core.count.call(null,splits) >= (min - (1)));
});
curvecalc.autocurve.manipulations.max_parts = (function curvecalc$autocurve$manipulations$max_parts(max,splits){
return (cljs.core.count.call(null,splits) <= (max - (1)));
});
curvecalc.autocurve.manipulations.ordered_partitions = (function curvecalc$autocurve$manipulations$ordered_partitions(var_args){
var args__25883__auto__ = [];
var len__25876__auto___38896 = arguments.length;
var i__25877__auto___38897 = (0);
while(true){
if((i__25877__auto___38897 < len__25876__auto___38896)){
args__25883__auto__.push((arguments[i__25877__auto___38897]));

var G__38898 = (i__25877__auto___38897 + (1));
i__25877__auto___38897 = G__38898;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return curvecalc.autocurve.manipulations.ordered_partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

curvecalc.autocurve.manipulations.ordered_partitions.cljs$core$IFn$_invoke$arity$variadic = (function (v,p__38893){
var map__38894 = p__38893;
var map__38894__$1 = ((((!((map__38894 == null)))?((((map__38894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38894):map__38894);
var max = cljs.core.get.call(null,map__38894__$1,new cljs.core.Keyword(null,"max","max",61366548));
var min = cljs.core.get.call(null,map__38894__$1,new cljs.core.Keyword(null,"min","min",444991522));
var s = clojure.math.combinatorics.subsets.call(null,cljs.core.range.call(null,(1),cljs.core.count.call(null,v)));
var fs = (cljs.core.truth_((function (){var and__24789__auto__ = max;
if(cljs.core.truth_(and__24789__auto__)){
return min;
} else {
return and__24789__auto__;
}
})())?cljs.core.filter.call(null,cljs.core.partial.call(null,curvecalc.autocurve.manipulations.max_parts,max),cljs.core.filter.call(null,cljs.core.partial.call(null,curvecalc.autocurve.manipulations.min_parts,min),s)):(cljs.core.truth_(max)?cljs.core.filter.call(null,cljs.core.partial.call(null,curvecalc.autocurve.manipulations.max_parts,max),s):(cljs.core.truth_(min)?cljs.core.filter.call(null,cljs.core.partial.call(null,curvecalc.autocurve.manipulations.min_parts,min),s):s
)));
return cljs.core.map.call(null,cljs.core.partial.call(null,curvecalc.autocurve.manipulations.breaks__GT_partition,v),fs);
});

curvecalc.autocurve.manipulations.ordered_partitions.cljs$lang$maxFixedArity = (1);

curvecalc.autocurve.manipulations.ordered_partitions.cljs$lang$applyTo = (function (seq38891){
var G__38892 = cljs.core.first.call(null,seq38891);
var seq38891__$1 = cljs.core.next.call(null,seq38891);
return curvecalc.autocurve.manipulations.ordered_partitions.cljs$core$IFn$_invoke$arity$variadic(G__38892,seq38891__$1);
});

curvecalc.autocurve.manipulations.descending_order = (function curvecalc$autocurve$manipulations$descending_order(v){
return cljs.core.sort.call(null,(function (p1__38900_SHARP_,p2__38899_SHARP_){
return cljs.core.compare.call(null,p2__38899_SHARP_,p1__38900_SHARP_);
}),v);
});
curvecalc.autocurve.manipulations.generate_partitions = (function curvecalc$autocurve$manipulations$generate_partitions(column,distro_key){
var v = curvecalc.autocurve.manipulations.descending_order.call(null,cljs.core.distinct.call(null,column));
if(cljs.core._EQ_.call(null,distro_key,new cljs.core.Keyword(null,"simple","simple",-581868663))){
return curvecalc.autocurve.manipulations.ordered_partitions.call(null,v,new cljs.core.Keyword(null,"min","min",444991522),(4),new cljs.core.Keyword(null,"max","max",61366548),(4));
} else {
return curvecalc.autocurve.manipulations.ordered_partitions.call(null,v,new cljs.core.Keyword(null,"min","min",444991522),(6),new cljs.core.Keyword(null,"max","max",61366548),(8));
}
});
curvecalc.autocurve.manipulations.test_data = cljs.core.PersistentVector.fromArray([4.2,4.0,3.9,3.9,3.9,3.8,3.8,3.7,2.9,2.9,2.8,2.8,2.8,2.7,2.7,2.7,2.6,2.6,3.4,3.4,3.4,3.3,3.3,3.3,3.3,3.3,3.2,3.2,3.2,3.2,3.2,3.2,3.1,3.1,3.1,3.0,3.0,3.0,2.9,2.9,2.8,2.8,2.8,2.7,2.7,2.7,2.6,2.6,2.4,2.4,2.3], true);

//# sourceMappingURL=manipulations.js.map?rel=1490992389971