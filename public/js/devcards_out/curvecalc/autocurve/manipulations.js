// Compiled by ClojureScript 1.9.229 {}
goog.provide('curvecalc.autocurve.manipulations');
goog.require('cljs.core');
goog.require('clojure.math.combinatorics');
curvecalc.autocurve.manipulations.breaks__GT_partition = (function curvecalc$autocurve$manipulations$breaks__GT_partition(var_args){
var args39411 = [];
var len__25876__auto___39414 = arguments.length;
var i__25877__auto___39415 = (0);
while(true){
if((i__25877__auto___39415 < len__25876__auto___39414)){
args39411.push((arguments[i__25877__auto___39415]));

var G__39416 = (i__25877__auto___39415 + (1));
i__25877__auto___39415 = G__39416;
continue;
} else {
}
break;
}

var G__39413 = args39411.length;
switch (G__39413) {
case 2:
return curvecalc.autocurve.manipulations.breaks__GT_partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return curvecalc.autocurve.manipulations.breaks__GT_partition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39411.length)].join('')));

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
var G__39418 = cljs.core.first.call(null,brks);
var G__39419 = cljs.core.conj.call(null,pars,this_part);
var G__39420 = v;
var G__39421 = cljs.core.rest.call(null,brks);
start = G__39418;
pars = G__39419;
v = G__39420;
brks = G__39421;
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
var len__25876__auto___39427 = arguments.length;
var i__25877__auto___39428 = (0);
while(true){
if((i__25877__auto___39428 < len__25876__auto___39427)){
args__25883__auto__.push((arguments[i__25877__auto___39428]));

var G__39429 = (i__25877__auto___39428 + (1));
i__25877__auto___39428 = G__39429;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return curvecalc.autocurve.manipulations.ordered_partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

curvecalc.autocurve.manipulations.ordered_partitions.cljs$core$IFn$_invoke$arity$variadic = (function (v,p__39424){
var map__39425 = p__39424;
var map__39425__$1 = ((((!((map__39425 == null)))?((((map__39425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39425):map__39425);
var max = cljs.core.get.call(null,map__39425__$1,new cljs.core.Keyword(null,"max","max",61366548));
var min = cljs.core.get.call(null,map__39425__$1,new cljs.core.Keyword(null,"min","min",444991522));
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

curvecalc.autocurve.manipulations.ordered_partitions.cljs$lang$applyTo = (function (seq39422){
var G__39423 = cljs.core.first.call(null,seq39422);
var seq39422__$1 = cljs.core.next.call(null,seq39422);
return curvecalc.autocurve.manipulations.ordered_partitions.cljs$core$IFn$_invoke$arity$variadic(G__39423,seq39422__$1);
});

curvecalc.autocurve.manipulations.descending_order = (function curvecalc$autocurve$manipulations$descending_order(v){
return cljs.core.sort.call(null,(function (p1__39431_SHARP_,p2__39430_SHARP_){
return cljs.core.compare.call(null,p2__39430_SHARP_,p1__39431_SHARP_);
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

//# sourceMappingURL=manipulations.js.map?rel=1491430805191