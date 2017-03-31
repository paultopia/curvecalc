// Compiled by ClojureScript 1.9.229 {}
goog.provide('clojure.math.combinatorics');
goog.require('cljs.core');
clojure.math.combinatorics._STAR__SINGLEQUOTE_ = cljs.core._STAR_;
clojure.math.combinatorics._PLUS__SINGLEQUOTE_ = cljs.core._PLUS_;
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 * to write our own version that considers the empty-list to be distinct
 */
clojure.math.combinatorics.all_different_QMARK_ = (function clojure$math$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,s);
} else {
return true;
}
});
clojure.math.combinatorics.index_combinations = (function clojure$math$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__25581__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__38237(s__38238){
return (new cljs.core.LazySeq(null,(function (){
var s__38238__$1 = s__38238;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38238__$1);
if(temp__4657__auto__){
var s__38238__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38238__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38238__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38240 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38239 = (0);
while(true){
if((i__38239 < size__25580__auto__)){
var j = cljs.core._nth.call(null,c__25579__auto__,i__38239);
cljs.core.chunk_append.call(null,b__38240,((j + cnt) + (- (n + (1)))));

var G__38241 = (i__38239 + (1));
i__38239 = G__38241;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38240),clojure$math$combinatorics$index_combinations_$_iter__38237.call(null,cljs.core.chunk_rest.call(null,s__38238__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38240),null);
}
} else {
var j = cljs.core.first.call(null,s__38238__$2);
return cljs.core.cons.call(null,((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__38237.call(null,cljs.core.rest.call(null,s__38238__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25581__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})()));
var iter_comb = ((function (c){
return (function clojure$math$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,j,(c__$1.call(null,j) - (1)));
if((c__$2.call(null,j) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.call(null,j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__38242 = cljs.core.assoc.call(null,c__$3,(j__$1 - (1)),(c__$3.call(null,j__$1) - (1)));
var G__38243 = (j__$1 - (1));
c__$3 = G__38242;
j__$1 = G__38243;
continue;
}
break;
}
}
}
});})(c))
;
var step = ((function (c,iter_comb){
return (function clojure$math$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons.call(null,cljs.core.rseq.call(null,cljs.core.subvec.call(null,c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,((function (c,iter_comb){
return (function (){
var next_step = iter_comb.call(null,c__$1,j);
if(cljs.core.truth_(next_step)){
return clojure$math$combinatorics$index_combinations_$_step.call(null,next_step.call(null,(0)),next_step.call(null,(1)));
} else {
return null;
}
});})(c,iter_comb))
,null,null)));
});})(c,iter_comb))
;
return step.call(null,c,(1));
}),null,null));
});
clojure.math.combinatorics.distribute = (function clojure$math$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count.call(null,m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = m.call(null,index__$1);
if((quantity_to_distribute <= mi)){
return cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__38244 = cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__38245 = (index__$1 + (1));
var G__38246 = (already_distributed__$1 + mi);
distribution__$1 = G__38244;
index__$1 = G__38245;
already_distributed__$1 = G__38246;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__38253 = cljs.core.peek.call(null,distribution);
var index = cljs.core.nth.call(null,vec__38253,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__38253,(1),null);
var this_and_to_the_left = cljs.core.nth.call(null,vec__38253,(2),null);
if((index < (cljs.core.count.call(null,m) - (1)))){
if(cljs.core._EQ_.call(null,this_bucket,(1))){
return cljs.core.conj.call(null,cljs.core.pop.call(null,distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.call(null,cljs.core.pop.call(null,distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
}
} else {
if(cljs.core._EQ_.call(null,this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop.call(null,distribution);
while(true){
var vec__38256 = cljs.core.peek.call(null,distribution__$1);
var index__$1 = cljs.core.nth.call(null,vec__38256,(0),null);
var this_bucket__$1 = cljs.core.nth.call(null,vec__38256,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.call(null,vec__38256,(2),null);
var distribution__$2 = ((cljs.core._EQ_.call(null,this_bucket__$1,(1)))?cljs.core.pop.call(null,distribution__$1):cljs.core.conj.call(null,cljs.core.pop.call(null,distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.subvec.call(null,m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute.call(null,m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq.call(null,distribution__$2)){
var G__38259 = distribution__$2;
distribution__$1 = G__38259;
continue;
} else {
return null;

}
}
break;
}

}
}
});
clojure.math.combinatorics.bounded_distributions = (function clojure$math$combinatorics$bounded_distributions(m,t){
var step = (function clojure$math$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons.call(null,distribution,(new cljs.core.LazySeq(null,(function (){
var temp__4657__auto__ = clojure.math.combinatorics.next_distribution.call(null,m,t,distribution);
if(cljs.core.truth_(temp__4657__auto__)){
var next_step = temp__4657__auto__;
return clojure$math$combinatorics$bounded_distributions_$_step.call(null,next_step);
} else {
return null;
}
}),null,null)));
});
return step.call(null,clojure.math.combinatorics.distribute.call(null,m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
});
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_comb = (function clojure$math$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies.call(null,l);
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,l));
var domain = cljs.core.range.call(null,cljs.core.count.call(null,v));
var m = cljs.core.vec.call(null,(function (){var iter__25581__auto__ = ((function (f,v,domain){
return (function clojure$math$combinatorics$multi_comb_$_iter__38332(s__38333){
return (new cljs.core.LazySeq(null,((function (f,v,domain){
return (function (){
var s__38333__$1 = s__38333;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38333__$1);
if(temp__4657__auto__){
var s__38333__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38333__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38333__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38335 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38334 = (0);
while(true){
if((i__38334 < size__25580__auto__)){
var i = cljs.core._nth.call(null,c__25579__auto__,i__38334);
cljs.core.chunk_append.call(null,b__38335,f.call(null,v.call(null,i)));

var G__38404 = (i__38334 + (1));
i__38334 = G__38404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38335),clojure$math$combinatorics$multi_comb_$_iter__38332.call(null,cljs.core.chunk_rest.call(null,s__38333__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38335),null);
}
} else {
var i = cljs.core.first.call(null,s__38333__$2);
return cljs.core.cons.call(null,f.call(null,v.call(null,i)),clojure$math$combinatorics$multi_comb_$_iter__38332.call(null,cljs.core.rest.call(null,s__38333__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain))
,null,null));
});})(f,v,domain))
;
return iter__25581__auto__.call(null,domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions.call(null,m,t);
var iter__25581__auto__ = ((function (f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__38336(s__38337){
return (new cljs.core.LazySeq(null,((function (f,v,domain,m,qs){
return (function (){
var s__38337__$1 = s__38337;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38337__$1);
if(temp__4657__auto__){
var s__38337__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38337__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38337__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38339 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38338 = (0);
while(true){
if((i__38338 < size__25580__auto__)){
var q = cljs.core._nth.call(null,c__25579__auto__,i__38338);
cljs.core.chunk_append.call(null,b__38339,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__25581__auto__ = ((function (i__38338,q,c__25579__auto__,size__25580__auto__,b__38339,s__38337__$2,temp__4657__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__38336_$_iter__38372(s__38373){
return (new cljs.core.LazySeq(null,((function (i__38338,q,c__25579__auto__,size__25580__auto__,b__38339,s__38337__$2,temp__4657__auto__,f,v,domain,m,qs){
return (function (){
var s__38373__$1 = s__38373;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__38373__$1);
if(temp__4657__auto____$1){
var s__38373__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38373__$2)){
var c__25579__auto____$1 = cljs.core.chunk_first.call(null,s__38373__$2);
var size__25580__auto____$1 = cljs.core.count.call(null,c__25579__auto____$1);
var b__38375 = cljs.core.chunk_buffer.call(null,size__25580__auto____$1);
if((function (){var i__38374 = (0);
while(true){
if((i__38374 < size__25580__auto____$1)){
var vec__38382 = cljs.core._nth.call(null,c__25579__auto____$1,i__38374);
var index = cljs.core.nth.call(null,vec__38382,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__38382,(1),null);
var _ = cljs.core.nth.call(null,vec__38382,(2),null);
cljs.core.chunk_append.call(null,b__38375,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__38405 = (i__38374 + (1));
i__38374 = G__38405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38375),clojure$math$combinatorics$multi_comb_$_iter__38336_$_iter__38372.call(null,cljs.core.chunk_rest.call(null,s__38373__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38375),null);
}
} else {
var vec__38385 = cljs.core.first.call(null,s__38373__$2);
var index = cljs.core.nth.call(null,vec__38385,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__38385,(1),null);
var _ = cljs.core.nth.call(null,vec__38385,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__38336_$_iter__38372.call(null,cljs.core.rest.call(null,s__38373__$2)));
}
} else {
return null;
}
break;
}
});})(i__38338,q,c__25579__auto__,size__25580__auto__,b__38339,s__38337__$2,temp__4657__auto__,f,v,domain,m,qs))
,null,null));
});})(i__38338,q,c__25579__auto__,size__25580__auto__,b__38339,s__38337__$2,temp__4657__auto__,f,v,domain,m,qs))
;
return iter__25581__auto__.call(null,q);
})()));

var G__38406 = (i__38338 + (1));
i__38338 = G__38406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38339),clojure$math$combinatorics$multi_comb_$_iter__38336.call(null,cljs.core.chunk_rest.call(null,s__38337__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38339),null);
}
} else {
var q = cljs.core.first.call(null,s__38337__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__25581__auto__ = ((function (q,s__38337__$2,temp__4657__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__38336_$_iter__38388(s__38389){
return (new cljs.core.LazySeq(null,((function (q,s__38337__$2,temp__4657__auto__,f,v,domain,m,qs){
return (function (){
var s__38389__$1 = s__38389;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__38389__$1);
if(temp__4657__auto____$1){
var s__38389__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38389__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38389__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38391 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38390 = (0);
while(true){
if((i__38390 < size__25580__auto__)){
var vec__38398 = cljs.core._nth.call(null,c__25579__auto__,i__38390);
var index = cljs.core.nth.call(null,vec__38398,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__38398,(1),null);
var _ = cljs.core.nth.call(null,vec__38398,(2),null);
cljs.core.chunk_append.call(null,b__38391,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__38407 = (i__38390 + (1));
i__38390 = G__38407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38391),clojure$math$combinatorics$multi_comb_$_iter__38336_$_iter__38388.call(null,cljs.core.chunk_rest.call(null,s__38389__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38391),null);
}
} else {
var vec__38401 = cljs.core.first.call(null,s__38389__$2);
var index = cljs.core.nth.call(null,vec__38401,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__38401,(1),null);
var _ = cljs.core.nth.call(null,vec__38401,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__38336_$_iter__38388.call(null,cljs.core.rest.call(null,s__38389__$2)));
}
} else {
return null;
}
break;
}
});})(q,s__38337__$2,temp__4657__auto__,f,v,domain,m,qs))
,null,null));
});})(q,s__38337__$2,temp__4657__auto__,f,v,domain,m,qs))
;
return iter__25581__auto__.call(null,q);
})()),clojure$math$combinatorics$multi_comb_$_iter__38336.call(null,cljs.core.rest.call(null,s__38337__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain,m,qs))
,null,null));
});})(f,v,domain,m,qs))
;
return iter__25581__auto__.call(null,qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec.call(null,cljs.core.reverse.call(null,items));
if((t === (0))){
var x__25635__auto__ = cljs.core.List.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25635__auto__);
} else {
var cnt = cljs.core.count.call(null,items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.call(null,t,(1))){
var iter__25581__auto__ = ((function (cnt,v_items){
return (function clojure$math$combinatorics$combinations_$_iter__38413(s__38414){
return (new cljs.core.LazySeq(null,((function (cnt,v_items){
return (function (){
var s__38414__$1 = s__38414;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38414__$1);
if(temp__4657__auto__){
var s__38414__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38414__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38414__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38416 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38415 = (0);
while(true){
if((i__38415 < size__25580__auto__)){
var item = cljs.core._nth.call(null,c__25579__auto__,i__38415);
cljs.core.chunk_append.call(null,b__38416,(function (){var x__25635__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25635__auto__);
})());

var G__38417 = (i__38415 + (1));
i__38415 = G__38417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38416),clojure$math$combinatorics$combinations_$_iter__38413.call(null,cljs.core.chunk_rest.call(null,s__38414__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38416),null);
}
} else {
var item = cljs.core.first.call(null,s__38414__$2);
return cljs.core.cons.call(null,(function (){var x__25635__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25635__auto__);
})(),clojure$math$combinatorics$combinations_$_iter__38413.call(null,cljs.core.rest.call(null,s__38414__$2)));
}
} else {
return null;
}
break;
}
});})(cnt,v_items))
,null,null));
});})(cnt,v_items))
;
return iter__25581__auto__.call(null,cljs.core.distinct.call(null,items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
if(cljs.core._EQ_.call(null,t,cnt)){
var x__25635__auto__ = cljs.core.seq.call(null,items);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25635__auto__);
} else {
return cljs.core.map.call(null,((function (cnt,v_items){
return (function (p1__38408_SHARP_){
return cljs.core.map.call(null,v_items,p1__38408_SHARP_);
});})(cnt,v_items))
,clojure.math.combinatorics.index_combinations.call(null,t,cnt));
}
} else {
return clojure.math.combinatorics.multi_comb.call(null,items,t);

}
}
}
}
});
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
clojure.math.combinatorics.unchunk = (function clojure$math$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),clojure$math$combinatorics$unchunk.call(null,cljs.core.rest.call(null,s)));
} else {
return null;
}
}),null,null));
});
/**
 * All the subsets of items
 */
clojure.math.combinatorics.subsets = (function clojure$math$combinatorics$subsets(items){
return cljs.core.mapcat.call(null,(function (n){
return clojure.math.combinatorics.combinations.call(null,items,n);
}),clojure.math.combinatorics.unchunk.call(null,cljs.core.range.call(null,(cljs.core.count.call(null,items) + (1)))));
});
/**
 * All the ways to take one item from each sequence
 */
clojure.math.combinatorics.cartesian_product = (function clojure$math$combinatorics$cartesian_product(var_args){
var args__25883__auto__ = [];
var len__25876__auto___38419 = arguments.length;
var i__25877__auto___38420 = (0);
while(true){
if((i__25877__auto___38420 < len__25876__auto___38419)){
args__25883__auto__.push((arguments[i__25877__auto___38420]));

var G__38421 = (i__25877__auto___38420 + (1));
i__25877__auto___38420 = G__38421;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});

clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function clojure$math$combinatorics$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__4655__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__4655__auto__){
var rst = temp__4655__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__38422 = (i - (1));
var G__38423 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__38422;
v_seqs__$2 = G__38423;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return clojure$math$combinatorics$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0);

clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq38418){
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38418));
});

/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
clojure.math.combinatorics.selections = (function clojure$math$combinatorics$selections(items,n){
return cljs.core.apply.call(null,clojure.math.combinatorics.cartesian_product,cljs.core.take.call(null,n,cljs.core.repeat.call(null,items)));
});
clojure.math.combinatorics.iter_perm = (function clojure$math$combinatorics$iter_perm(v){
var len = cljs.core.count.call(null,v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
if((v.call(null,i) < v.call(null,(i + (1))))){
return i;
} else {
var G__38424 = (i - (1));
i = G__38424;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = v.call(null,j);
var l = (function (){var i = (len - (1));
while(true){
if((vj < v.call(null,i))){
return i;
} else {
var G__38425 = (i - (1));
i = G__38425;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__38426 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__38427 = (k + (1));
var G__38428 = (l__$1 - (1));
v__$1 = G__38426;
k = G__38427;
l__$1 = G__38428;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
});
clojure.math.combinatorics.vec_lex_permutations = (function clojure$math$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,(function (){
return clojure$math$combinatorics$vec_lex_permutations.call(null,clojure.math.combinatorics.iter_perm.call(null,v));
}),null,null)));
} else {
return null;
}
});
/**
 * DEPRECATED as a public function.
 * 
 * In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
 */
clojure.math.combinatorics.lex_permutations = (function clojure$math$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec.call(null,cljs.core.sort.call(null,c));
if((cljs.core.count.call(null,vec_sorted) === (0))){
var x__25635__auto__ = cljs.core.PersistentVector.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25635__auto__);
} else {
return clojure.math.combinatorics.vec_lex_permutations.call(null,vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
var and__24789__auto__ = cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,s);
if(and__24789__auto__){
var or__24801__auto__ = cljs.core.empty_QMARK_.call(null,s);
if(or__24801__auto__){
return or__24801__auto__;
} else {
return cljs.core.apply.call(null,cljs.core._LT__EQ_,s);
}
} else {
return and__24789__auto__;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies.call(null,l);
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,l));
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__25581__auto__ = ((function (f,v){
return (function clojure$math$combinatorics$multi_perm_$_iter__38433(s__38434){
return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){
var s__38434__$1 = s__38434;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38434__$1);
if(temp__4657__auto__){
var s__38434__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38434__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38434__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38436 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38435 = (0);
while(true){
if((i__38435 < size__25580__auto__)){
var i = cljs.core._nth.call(null,c__25579__auto__,i__38435);
cljs.core.chunk_append.call(null,b__38436,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__38437 = (i__38435 + (1));
i__38435 = G__38437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38436),clojure$math$combinatorics$multi_perm_$_iter__38433.call(null,cljs.core.chunk_rest.call(null,s__38434__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38436),null);
}
} else {
var i = cljs.core.first.call(null,s__38434__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$multi_perm_$_iter__38433.call(null,cljs.core.rest.call(null,s__38434__$2)));
}
} else {
return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;
return iter__25581__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.lex_permutations.call(null,indices));
});
/**
 * All the distinct permutations of items, lexicographic by index 
 * (special handling for duplicate items).
 */
clojure.math.combinatorics.permutations = (function clojure$math$combinatorics$permutations(items){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
return clojure.math.combinatorics.lex_permutations.call(null,items);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
return cljs.core.map.call(null,((function (v){
return (function (p1__38438_SHARP_){
return cljs.core.map.call(null,v,p1__38438_SHARP_);
});})(v))
,clojure.math.combinatorics.lex_permutations.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v))));
} else {
return clojure.math.combinatorics.multi_perm.call(null,items);

}
}
});
clojure.math.combinatorics.factorial = (function clojure$math$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if(!((n < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__38439 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1);
var G__38440 = (n__$1 - (1));
acc = G__38439;
n__$1 = G__38440;
continue;
}
break;
}
});
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
clojure.math.combinatorics.factorial_numbers = (function clojure$math$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if(!((n < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot.call(null,n__$1,divisor);
var r = cljs.core.rem.call(null,n__$1,divisor);
var G__38441 = q;
var G__38442 = cljs.core.cons.call(null,r,digits);
var G__38443 = (divisor + (1));
n__$1 = G__38441;
digits = G__38442;
divisor = G__38443;
continue;
}
break;
}
});
clojure.math.combinatorics.remove_nth = (function clojure$math$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.call(null,acc,cljs.core.rest.call(null,l__$1));
} else {
var G__38444 = cljs.core.conj.call(null,acc,cljs.core.first.call(null,l__$1));
var G__38445 = cljs.core.rest.call(null,l__$1);
var G__38446 = (n__$1 - (1));
acc = G__38444;
l__$1 = G__38445;
n__$1 = G__38446;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_distinct = (function clojure$math$combinatorics$nth_permutation_distinct(l,n){
if((n < clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l)),"permutations.")),cljs.core.str("\n"),cljs.core.str("(< n (factorial (count l)))")].join('')));
}

var length = cljs.core.count.call(null,l);
var fact_nums = clojure.math.combinatorics.factorial_numbers.call(null,n);
var indices = cljs.core.concat.call(null,cljs.core.repeat.call(null,(length - cljs.core.count.call(null,fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,indices)){
return perm;
} else {
var i = cljs.core.first.call(null,indices);
var item = cljs.core.nth.call(null,l__$1,i);
var G__38447 = cljs.core.rest.call(null,indices);
var G__38448 = clojure.math.combinatorics.remove_nth.call(null,l__$1,i);
var G__38449 = cljs.core.conj.call(null,perm,item);
indices = G__38447;
l__$1 = G__38448;
perm = G__38449;
continue;
}
break;
}
});
clojure.math.combinatorics.count_permutations_from_frequencies = (function clojure$math$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals.call(null,freqs);
return cljs.core.reduce.call(null,cljs.core._SLASH_,clojure.math.combinatorics.factorial.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,counts)),cljs.core.map.call(null,clojure.math.combinatorics.factorial,counts));
});
/**
 * Counts the number of distinct permutations of l
 */
clojure.math.combinatorics.count_permutations = (function clojure$math$combinatorics$count_permutations(l){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,l))){
return clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l));
} else {
return clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.frequencies.call(null,l));
}
});
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
clojure.math.combinatorics.initial_perm_numbers = (function clojure$math$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__25581__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__38466(s__38467){
return (new cljs.core.LazySeq(null,(function (){
var s__38467__$1 = s__38467;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38467__$1);
if(temp__4657__auto__){
var s__38467__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38467__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38467__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38469 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38468 = (0);
while(true){
if((i__38468 < size__25580__auto__)){
var vec__38476 = cljs.core._nth.call(null,c__25579__auto__,i__38468);
var k = cljs.core.nth.call(null,vec__38476,(0),null);
var v = cljs.core.nth.call(null,vec__38476,(1),null);
cljs.core.chunk_append.call(null,b__38469,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))));

var G__38482 = (i__38468 + (1));
i__38468 = G__38482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38469),clojure$math$combinatorics$initial_perm_numbers_$_iter__38466.call(null,cljs.core.chunk_rest.call(null,s__38467__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38469),null);
}
} else {
var vec__38479 = cljs.core.first.call(null,s__38467__$2);
var k = cljs.core.nth.call(null,vec__38479,(0),null);
var v = cljs.core.nth.call(null,vec__38479,(1),null);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__38466.call(null,cljs.core.rest.call(null,s__38467__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25581__auto__.call(null,freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if(((cljs.core.first.call(null,perm_numbers__$1) <= n)) && ((n < cljs.core.second.call(null,perm_numbers__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first.call(null,perm_numbers__$1))], null);
} else {
var G__38483 = cljs.core.rest.call(null,perm_numbers__$1);
var G__38484 = (index + (1));
perm_numbers__$1 = G__38483;
index = G__38484;
continue;
}
break;
}
});
clojure.math.combinatorics.dec_key = (function clojure$math$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.call(null,(1),m.call(null,k))){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
});
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
clojure.math.combinatorics.factorial_numbers_with_duplicates = (function clojure$math$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.call(null,digits,cljs.core.repeat.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,freqs__$1)),(0)));
} else {
var vec__38488 = clojure.math.combinatorics.index_remainder.call(null,clojure.math.combinatorics.initial_perm_numbers.call(null,freqs__$1),n__$1);
var index = cljs.core.nth.call(null,vec__38488,(0),null);
var remainder = cljs.core.nth.call(null,vec__38488,(1),null);
var G__38491 = remainder;
var G__38492 = cljs.core.conj.call(null,digits,index);
var G__38493 = (function (){var nth_key = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs__$1),index);
return clojure.math.combinatorics.dec_key.call(null,freqs__$1,nth_key);
})();
n__$1 = G__38491;
digits = G__38492;
freqs__$1 = G__38493;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_duplicates = (function clojure$math$combinatorics$nth_permutation_duplicates(l,n){
if((n < clojure.math.combinatorics.count_permutations.call(null,l))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.count_permutations.call(null,l),"permutations.")),cljs.core.str("\n"),cljs.core.str("(< n (count-permutations l))")].join('')));
}

var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,l));
var indices = clojure.math.combinatorics.factorial_numbers_with_duplicates.call(null,n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,indices)){
return perm;
} else {
var i = cljs.core.first.call(null,indices);
var item = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs),i);
var G__38494 = clojure.math.combinatorics.dec_key.call(null,freqs,item);
var G__38495 = cljs.core.rest.call(null,indices);
var G__38496 = cljs.core.conj.call(null,perm,item);
freqs = G__38494;
indices = G__38495;
perm = G__38496;
continue;
}
break;
}
});
/**
 * (nth (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.nth_permutation = (function clojure$math$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.nth_permutation_distinct.call(null,items,n);
} else {
return clojure.math.combinatorics.nth_permutation_duplicates.call(null,items,n);
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct.call(null,cljs.core.range.call(null,cljs.core.count.call(null,items)),n);
return cljs.core.vec.call(null,cljs.core.map.call(null,v,perm_indices));
} else {
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__25581__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$nth_permutation_$_iter__38501(s__38502){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__38502__$1 = s__38502;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38502__$1);
if(temp__4657__auto__){
var s__38502__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38502__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38502__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38504 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38503 = (0);
while(true){
if((i__38503 < size__25580__auto__)){
var i = cljs.core._nth.call(null,c__25579__auto__,i__38503);
cljs.core.chunk_append.call(null,b__38504,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__38505 = (i__38503 + (1));
i__38503 = G__38505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38504),clojure$math$combinatorics$nth_permutation_$_iter__38501.call(null,cljs.core.chunk_rest.call(null,s__38502__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38504),null);
}
} else {
var i = cljs.core.first.call(null,s__38502__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_permutation_$_iter__38501.call(null,cljs.core.rest.call(null,s__38502__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__25581__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.vec.call(null,cljs.core.map.call(null,v,clojure.math.combinatorics.nth_permutation_duplicates.call(null,indices,n)));
}
}
});
/**
 * (drop n (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.drop_permutations = (function clojure$math$combinatorics$drop_permutations(items,n){
if((n === (0))){
return clojure.math.combinatorics.permutations.call(null,items);
} else {
if(cljs.core._EQ_.call(null,n,clojure.math.combinatorics.count_permutations.call(null,items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_distinct.call(null,items,n));
} else {
return clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_duplicates.call(null,items,n));
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct.call(null,cljs.core.range.call(null,cljs.core.count.call(null,items)),n);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations.call(null,perm_indices));
} else {
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__25581__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$drop_permutations_$_iter__38510(s__38511){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__38511__$1 = s__38511;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38511__$1);
if(temp__4657__auto__){
var s__38511__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38511__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38511__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38513 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38512 = (0);
while(true){
if((i__38512 < size__25580__auto__)){
var i = cljs.core._nth.call(null,c__25579__auto__,i__38512);
cljs.core.chunk_append.call(null,b__38513,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__38514 = (i__38512 + (1));
i__38512 = G__38514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38513),clojure$math$combinatorics$drop_permutations_$_iter__38510.call(null,cljs.core.chunk_rest.call(null,s__38511__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38513),null);
}
} else {
var i = cljs.core.first.call(null,s__38511__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$drop_permutations_$_iter__38510.call(null,cljs.core.rest.call(null,s__38511__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__25581__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_duplicates.call(null,indices,n)));
}
}

}
}
});
clojure.math.combinatorics.n_take_k = (function clojure$math$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.call(null,k,(1))){
return n;
} else {
if((k > cljs.core.quot.call(null,n,(2)))){
var G__38515 = n;
var G__38516 = (n - k);
n = G__38515;
k = G__38516;
continue;
} else {
return (cljs.core.apply.call(null,clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.call(null,((n - k) + (1)),(n + (1)))) / cljs.core.apply.call(null,clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.call(null,(1),(k + (1)))));

}
}
}
}
}
break;
}
});
clojure.math.combinatorics.count_combinations_from_frequencies = (function clojure$math$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals.call(null,freqs);
var sum = cljs.core.apply.call(null,cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.call(null,t,(1))){
return cljs.core.count.call(null,freqs);
} else {
if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return clojure.math.combinatorics.n_take_k.call(null,cljs.core.count.call(null,freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.call(null,t,sum)){
return (1);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,freqs),(1))){
return (1);
} else {
var new_freqs = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,cljs.core.keys.call(null,freqs)));
return clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,clojure$math$combinatorics$count_combinations_from_frequencies.call(null,new_freqs,(t - (1))),clojure$math$combinatorics$count_combinations_from_frequencies.call(null,cljs.core.dissoc.call(null,freqs,cljs.core.first.call(null,cljs.core.keys.call(null,freqs))),t));

}
}
}
}
}
}
});
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
clojure.math.combinatorics.count_combinations_unmemoized = (function clojure$math$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.n_take_k.call(null,cljs.core.count.call(null,items),t);
} else {
return clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies.call(null,items),t);
}
});
/**
 * (count (combinations items t)) but computed more directly
 */
clojure.math.combinatorics.count_combinations = (function clojure$math$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies38518 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies38518;
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_.call(null,n);
var n__$1 = cljs.core.quot.call(null,n,(2));
if(t){
var G__38519 = n__$1;
var G__38520 = y;
var G__38521 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__38519;
y = G__38520;
z = G__38521;
continue;
} else {
if((n__$1 === (0))){
return clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
} else {
var G__38522 = n__$1;
var G__38523 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
var G__38524 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__38522;
y = G__38523;
z = G__38524;
continue;

}
}
break;
}
});
clojure.math.combinatorics.count_subsets_unmemoized = (function clojure$math$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_.call(null,items)){
return (1);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.expt_int.call(null,(2),cljs.core.count.call(null,items));
} else {
return cljs.core.apply.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__25581__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__38529(s__38530){
return (new cljs.core.LazySeq(null,(function (){
var s__38530__$1 = s__38530;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38530__$1);
if(temp__4657__auto__){
var s__38530__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38530__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38530__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38532 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38531 = (0);
while(true){
if((i__38531 < size__25580__auto__)){
var i = cljs.core._nth.call(null,c__25579__auto__,i__38531);
cljs.core.chunk_append.call(null,b__38532,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i));

var G__38533 = (i__38531 + (1));
i__38531 = G__38533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38532),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__38529.call(null,cljs.core.chunk_rest.call(null,s__38530__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38532),null);
}
} else {
var i = cljs.core.first.call(null,s__38530__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__38529.call(null,cljs.core.rest.call(null,s__38530__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25581__auto__.call(null,cljs.core.range.call(null,(0),(cljs.core.count.call(null,items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies38535 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_subsets_unmemoized.call(null,items);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies38535;
}});
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
clojure.math.combinatorics.nth_combination_distinct = (function clojure$math$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if(((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,items__$1))){
return cljs.core.into.call(null,comb,cljs.core.take.call(null,t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k.call(null,(cljs.core.count.call(null,items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__38536 = cljs.core.conj.call(null,comb,cljs.core.first.call(null,items__$1));
var G__38537 = cljs.core.rest.call(null,items__$1);
var G__38538 = (t__$1 - (1));
var G__38539 = n__$1;
comb = G__38536;
items__$1 = G__38537;
t__$1 = G__38538;
n__$1 = G__38539;
continue;
} else {
var G__38540 = comb;
var G__38541 = cljs.core.rest.call(null,items__$1);
var G__38542 = t__$1;
var G__38543 = (n__$1 - dc_dt);
comb = G__38540;
items__$1 = G__38541;
t__$1 = G__38542;
n__$1 = G__38543;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
clojure.math.combinatorics.nth_combination_freqs = (function clojure$math$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if(((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,freqs__$1))){
return cljs.core.into.call(null,comb,cljs.core.take.call(null,t__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__25581__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__38560(s__38561){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__38561__$1 = s__38561;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38561__$1);
if(temp__4657__auto__){
var s__38561__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38561__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38561__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38563 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38562 = (0);
while(true){
if((i__38562 < size__25580__auto__)){
var vec__38570 = cljs.core._nth.call(null,c__25579__auto__,i__38562);
var k = cljs.core.nth.call(null,vec__38570,(0),null);
var v = cljs.core.nth.call(null,vec__38570,(1),null);
cljs.core.chunk_append.call(null,b__38563,cljs.core.repeat.call(null,v,k));

var G__38576 = (i__38562 + (1));
i__38562 = G__38576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38563),clojure$math$combinatorics$nth_combination_freqs_$_iter__38560.call(null,cljs.core.chunk_rest.call(null,s__38561__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38563),null);
}
} else {
var vec__38573 = cljs.core.first.call(null,s__38561__$2);
var k = cljs.core.nth.call(null,vec__38573,(0),null);
var v = cljs.core.nth.call(null,vec__38573,(1),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__38560.call(null,cljs.core.rest.call(null,s__38561__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__25581__auto__.call(null,freqs__$1);
})())));
} else {
var first_key = cljs.core.first.call(null,cljs.core.keys.call(null,freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key.call(null,freqs__$1,first_key);
var dc_dt = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__38577 = cljs.core.conj.call(null,comb,first_key);
var G__38578 = remove_one_key;
var G__38579 = (t__$1 - (1));
var G__38580 = n__$1;
comb = G__38577;
freqs__$1 = G__38578;
t__$1 = G__38579;
n__$1 = G__38580;
continue;
} else {
var G__38581 = comb;
var G__38582 = cljs.core.dissoc.call(null,freqs__$1,first_key);
var G__38583 = t__$1;
var G__38584 = (n__$1 - dc_dt);
comb = G__38581;
freqs__$1 = G__38582;
t__$1 = G__38583;
n__$1 = G__38584;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of items
 */
clojure.math.combinatorics.nth_combination = (function clojure$math$combinatorics$nth_combination(items,t,n){
if((n < clojure.math.combinatorics.count_combinations.call(null,items,t))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t),"combinations.")),cljs.core.str("\n"),cljs.core.str("(< n (count-combinations items t))")].join('')));
}

if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.nth_combination_distinct.call(null,items,t,n);
} else {
var count_combinations_from_frequencies38590 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__25581__auto__ = ((function (v,f,count_combinations_from_frequencies38590){
return (function clojure$math$combinatorics$nth_combination_$_iter__38591(s__38592){
return (new cljs.core.LazySeq(null,((function (v,f,count_combinations_from_frequencies38590){
return (function (){
var s__38592__$1 = s__38592;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38592__$1);
if(temp__4657__auto__){
var s__38592__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38592__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38592__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38594 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38593 = (0);
while(true){
if((i__38593 < size__25580__auto__)){
var i = cljs.core._nth.call(null,c__25579__auto__,i__38593);
cljs.core.chunk_append.call(null,b__38594,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__38595 = (i__38593 + (1));
i__38593 = G__38595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38594),clojure$math$combinatorics$nth_combination_$_iter__38591.call(null,cljs.core.chunk_rest.call(null,s__38592__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38594),null);
}
} else {
var i = cljs.core.first.call(null,s__38592__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_combination_$_iter__38591.call(null,cljs.core.rest.call(null,s__38592__$2)));
}
} else {
return null;
}
break;
}
});})(v,f,count_combinations_from_frequencies38590))
,null,null));
});})(v,f,count_combinations_from_frequencies38590))
;
return iter__25581__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
var indices_freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,indices));
return cljs.core.vec.call(null,cljs.core.map.call(null,v,clojure.math.combinatorics.nth_combination_freqs.call(null,indices_freqs,t,n)));
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies38590;
}}
});
clojure.math.combinatorics.nth_subset = (function clojure$math$combinatorics$nth_subset(items,n){
if((n < clojure.math.combinatorics.count_subsets.call(null,items))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.count_subsets.call(null,items),"subsets.")),cljs.core.str("\n"),cljs.core.str("(< n (count-subsets items))")].join('')));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = clojure.math.combinatorics.count_combinations.call(null,items,size);
if((n__$1 < num_combinations)){
return clojure.math.combinatorics.nth_combination.call(null,items,size,n__$1);
} else {
var G__38596 = (size + (1));
var G__38597 = (n__$1 - num_combinations);
size = G__38596;
n__$1 = G__38597;
continue;
}
break;
}
});
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
clojure.math.combinatorics.list_index = (function clojure$math$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq.call(null,l__$1)){
} else {
throw (new Error("Assert failed: (seq l)"));
}

if(cljs.core._EQ_.call(null,item,cljs.core.first.call(null,l__$1))){
return n;
} else {
var G__38598 = cljs.core.rest.call(null,l__$1);
var G__38599 = (n + (1));
l__$1 = G__38598;
n = G__38599;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_distinct = (function clojure$math$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = (0);
var n = (cljs.core.count.call(null,l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_.call(null,l__$1)){
return index;
} else {
var G__38600 = cljs.core.rest.call(null,l__$1);
var G__38601 = clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,index,clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,clojure.math.combinatorics.factorial.call(null,n),clojure.math.combinatorics.list_index.call(null,cljs.core.sort.call(null,l__$1),cljs.core.first.call(null,l__$1))));
var G__38602 = (n - (1));
l__$1 = G__38600;
index = G__38601;
n = G__38602;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_duplicates = (function clojure$math$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = (0);
var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,l__$1));
while(true){
if(cljs.core.empty_QMARK_.call(null,l__$1)){
return index;
} else {
var G__38612 = cljs.core.rest.call(null,l__$1);
var G__38613 = cljs.core.reduce.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__25581__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__38608(s__38609){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__38609__$1 = s__38609;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38609__$1);
if(temp__4657__auto__){
var s__38609__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38609__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38609__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38611 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38610 = (0);
while(true){
if((i__38610 < size__25580__auto__)){
var k = cljs.core._nth.call(null,c__25579__auto__,i__38610);
cljs.core.chunk_append.call(null,b__38611,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)));

var G__38615 = (i__38610 + (1));
i__38610 = G__38615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38611),clojure$math$combinatorics$permutation_index_duplicates_$_iter__38608.call(null,cljs.core.chunk_rest.call(null,s__38609__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38611),null);
}
} else {
var k = cljs.core.first.call(null,s__38609__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__38608.call(null,cljs.core.rest.call(null,s__38609__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__25581__auto__.call(null,cljs.core.take_while.call(null,((function (l__$1,index,freqs,iter__25581__auto__){
return (function (p1__38603_SHARP_){
return (cljs.core.compare.call(null,p1__38603_SHARP_,cljs.core.first.call(null,l__$1)) < (0));
});})(l__$1,index,freqs,iter__25581__auto__))
,cljs.core.keys.call(null,freqs)));
})());
var G__38614 = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,l__$1));
l__$1 = G__38612;
index = G__38613;
freqs = G__38614;
continue;
}
break;
}
});
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
clojure.math.combinatorics.permutation_index = (function clojure$math$combinatorics$permutation_index(items){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.permutation_index_distinct.call(null,items);
} else {
return clojure.math.combinatorics.permutation_index_duplicates.call(null,items);
}
});
clojure.math.combinatorics.update = (function clojure$math$combinatorics$update(vec,index,f){
var item = vec.call(null,index);
return cljs.core.assoc.call(null,vec,index,f.call(null,item));
});
clojure.math.combinatorics.reify_bool = (function clojure$math$combinatorics$reify_bool(statement){
if(cljs.core.truth_(statement)){
return (1);
} else {
return (0);
}
});
clojure.math.combinatorics.init = (function clojure$math$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec.call(null,(function (){var iter__25581__auto__ = (function clojure$math$combinatorics$init_$_iter__38620(s__38621){
return (new cljs.core.LazySeq(null,(function (){
var s__38621__$1 = s__38621;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38621__$1);
if(temp__4657__auto__){
var s__38621__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38621__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38621__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38623 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38622 = (0);
while(true){
if((i__38622 < size__25580__auto__)){
var i = cljs.core._nth.call(null,c__25579__auto__,i__38622);
cljs.core.chunk_append.call(null,b__38623,(function (){var x__25132__auto__ = (0);
var y__25133__auto__ = (i - ((n - s) - (-1)));
return ((x__25132__auto__ > y__25133__auto__) ? x__25132__auto__ : y__25133__auto__);
})());

var G__38624 = (i__38622 + (1));
i__38622 = G__38624;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38623),clojure$math$combinatorics$init_$_iter__38620.call(null,cljs.core.chunk_rest.call(null,s__38621__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38623),null);
}
} else {
var i = cljs.core.first.call(null,s__38621__$2);
return cljs.core.cons.call(null,(function (){var x__25132__auto__ = (0);
var y__25133__auto__ = (i - ((n - s) - (-1)));
return ((x__25132__auto__ > y__25133__auto__) ? x__25132__auto__ : y__25133__auto__);
})(),clojure$math$combinatorics$init_$_iter__38620.call(null,cljs.core.rest.call(null,s__38621__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25581__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})());
} else {
return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var args38625 = [];
var len__25876__auto___38631 = arguments.length;
var i__25877__auto___38632 = (0);
while(true){
if((i__25877__auto___38632 < len__25876__auto___38631)){
args38625.push((arguments[i__25877__auto___38632]));

var G__38633 = (i__25877__auto___38632 + (1));
i__25877__auto___38632 = G__38633;
continue;
} else {
}
break;
}

var G__38627 = args38625.length;
switch (G__38627) {
case 3:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38625.length)].join('')));

}
});

clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return clojure.math.combinatorics.growth_strings_H.call(null,n,clojure.math.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(1))),r,s);
});

clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){
if((function (){var and__24789__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));
if(and__24789__auto__){
if(cljs.core.truth_(r)){
return (cljs.core.peek.call(null,a) < (r - (1)));
} else {
return true;
}
} else {
return and__24789__auto__;
}
})()){
return clojure.math.combinatorics.growth_strings_H.call(null,n,clojure.math.combinatorics.update.call(null,a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if((function (){var and__24789__auto__ = (a.call(null,j) < b.call(null,j));
if(and__24789__auto__){
var and__24789__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - (1))):true);
if(and__24789__auto____$1){
if(cljs.core.truth_(s)){
return (((s - b.call(null,j)) - clojure.math.combinatorics.reify_bool.call(null,((a.call(null,j) + (1)) === b.call(null,j)))) <= (n - j));
} else {
return true;
}
} else {
return and__24789__auto____$1;
}
} else {
return and__24789__auto__;
}
})()){
return j;
} else {
var G__38635 = (j - (1));
j = G__38635;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = clojure.math.combinatorics.update.call(null,a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + clojure.math.combinatorics.reify_bool.call(null,cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j))))):null);
var vec__38628 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = (b__$1.call(null,j) + clojure.math.combinatorics.reify_bool.call(null,(b__$1.call(null,j) === a__$2.call(null,j))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__24789__auto__ = s;
if(cljs.core.truth_(and__24789__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__24789__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__38636 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__38637 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__38638 = (i + (1));
var G__38639 = (function (){var x__25132__auto__ = current_max;
var y__25133__auto__ = (new_a_i + (1));
return ((x__25132__auto__ > y__25133__auto__) ? x__25132__auto__ : y__25133__auto__);
})();
a__$2 = G__38636;
b__$1 = G__38637;
i = G__38638;
current_max = G__38639;
continue;
} else {
var G__38640 = cljs.core.assoc.call(null,a__$2,i,(0));
var G__38641 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__38642 = (i + (1));
var G__38643 = current_max;
a__$2 = G__38640;
b__$1 = G__38641;
i = G__38642;
current_max = G__38643;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.call(null,vec__38628,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__38628,(1),null);
return clojure.math.combinatorics.growth_strings_H.call(null,n,a__$2,b__$1,r,s);
}
}
}),null,null)));
});

clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5;

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__25883__auto__ = [];
var len__25876__auto___38653 = arguments.length;
var i__25877__auto___38654 = (0);
while(true){
if((i__25877__auto___38654 < len__25876__auto___38653)){
args__25883__auto__.push((arguments[i__25877__auto___38654]));

var G__38655 = (i__25877__auto___38654 + (1));
i__25877__auto___38654 = G__38655;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__38646){
var map__38647 = p__38646;
var map__38647__$1 = ((((!((map__38647 == null)))?((((map__38647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38647):map__38647);
var from = cljs.core.get.call(null,map__38647__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__38647__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.call(null,N,(0))){
if((((function (){var or__24801__auto__ = from;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__24801__auto__ = to;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return (0);
}
})()))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__24789__auto__ = from;
if(cljs.core.truth_(and__24789__auto__)){
return (from <= (1));
} else {
return and__24789__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__24789__auto__ = to;
if(cljs.core.truth_(and__24789__auto__)){
return (to >= N);
} else {
return and__24789__auto__;
}
})())?null:to);
if(!((((1) <= (function (){var or__24801__auto__ = from__$1;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return (1);
}
})())) && ((((function (){var or__24801__auto__ = from__$1;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return (1);
}
})() <= (function (){var or__24801__auto__ = to__$1;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return N;
}
})())) && (((function (){var or__24801__auto__ = to__$1;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return N;
}
})() <= N))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.call(null,N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.call(null,to__$1,(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25635__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25635__auto__ = cljs.core.range.call(null,N);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25635__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25635__auto__);
})())));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);
var iter__25581__auto__ = ((function (growth_strings,from__$1,to__$1,map__38647,map__38647__$1,from,to){
return (function clojure$math$combinatorics$iter__38649(s__38650){
return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__38647,map__38647__$1,from,to){
return (function (){
var s__38650__$1 = s__38650;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38650__$1);
if(temp__4657__auto__){
var s__38650__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38650__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38650__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38652 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38651 = (0);
while(true){
if((i__38651 < size__25580__auto__)){
var growth_string = cljs.core._nth.call(null,c__25579__auto__,i__38651);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
cljs.core.chunk_append.call(null,b__38652,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));

var G__38656 = (i__38651 + (1));
i__38651 = G__38656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38652),clojure$math$combinatorics$iter__38649.call(null,cljs.core.chunk_rest.call(null,s__38650__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38652),null);
}
} else {
var growth_string = cljs.core.first.call(null,s__38650__$2);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),clojure$math$combinatorics$iter__38649.call(null,cljs.core.rest.call(null,s__38650__$2)));
}
} else {
return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__38647,map__38647__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__38647,map__38647__$1,from,to))
;
return iter__25581__auto__.call(null,growth_strings);

}
}
}
}
}
});

clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq38644){
var G__38645 = cljs.core.first.call(null,seq38644);
var seq38644__$1 = cljs.core.next.call(null,seq38644);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__38645,seq38644__$1);
});

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__25883__auto__ = [];
var len__25876__auto___38679 = arguments.length;
var i__25877__auto___38680 = (0);
while(true){
if((i__25877__auto___38680 < len__25876__auto___38679)){
args__25883__auto__.push((arguments[i__25877__auto___38680]));

var G__38681 = (i__25877__auto___38680 + (1));
i__25877__auto___38680 = G__38681;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec.call(null,items);
var N = cljs.core.count.call(null,items__$1);
var lex = cljs.core.apply.call(null,clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__25581__auto__ = ((function (items__$1,N,lex){
return (function clojure$math$combinatorics$iter__38659(s__38660){
return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){
var s__38660__$1 = s__38660;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38660__$1);
if(temp__4657__auto__){
var s__38660__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38660__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38660__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38662 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38661 = (0);
while(true){
if((i__38661 < size__25580__auto__)){
var parts = cljs.core._nth.call(null,c__25579__auto__,i__38661);
cljs.core.chunk_append.call(null,b__38662,(function (){var iter__25581__auto__ = ((function (i__38661,parts,c__25579__auto__,size__25580__auto__,b__38662,s__38660__$2,temp__4657__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__38659_$_iter__38671(s__38672){
return (new cljs.core.LazySeq(null,((function (i__38661,parts,c__25579__auto__,size__25580__auto__,b__38662,s__38660__$2,temp__4657__auto__,items__$1,N,lex){
return (function (){
var s__38672__$1 = s__38672;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__38672__$1);
if(temp__4657__auto____$1){
var s__38672__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38672__$2)){
var c__25579__auto____$1 = cljs.core.chunk_first.call(null,s__38672__$2);
var size__25580__auto____$1 = cljs.core.count.call(null,c__25579__auto____$1);
var b__38674 = cljs.core.chunk_buffer.call(null,size__25580__auto____$1);
if((function (){var i__38673 = (0);
while(true){
if((i__38673 < size__25580__auto____$1)){
var part = cljs.core._nth.call(null,c__25579__auto____$1,i__38673);
cljs.core.chunk_append.call(null,b__38674,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__38673,i__38661,part,c__25579__auto____$1,size__25580__auto____$1,b__38674,s__38672__$2,temp__4657__auto____$1,parts,c__25579__auto__,size__25580__auto__,b__38662,s__38660__$2,temp__4657__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__38673,i__38661,part,c__25579__auto____$1,size__25580__auto____$1,b__38674,s__38672__$2,temp__4657__auto____$1,parts,c__25579__auto__,size__25580__auto__,b__38662,s__38660__$2,temp__4657__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__38682 = (i__38673 + (1));
i__38673 = G__38682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38674),clojure$math$combinatorics$iter__38659_$_iter__38671.call(null,cljs.core.chunk_rest.call(null,s__38672__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38674),null);
}
} else {
var part = cljs.core.first.call(null,s__38672__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__38661,part,s__38672__$2,temp__4657__auto____$1,parts,c__25579__auto__,size__25580__auto__,b__38662,s__38660__$2,temp__4657__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__38661,part,s__38672__$2,temp__4657__auto____$1,parts,c__25579__auto__,size__25580__auto__,b__38662,s__38660__$2,temp__4657__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__38659_$_iter__38671.call(null,cljs.core.rest.call(null,s__38672__$2)));
}
} else {
return null;
}
break;
}
});})(i__38661,parts,c__25579__auto__,size__25580__auto__,b__38662,s__38660__$2,temp__4657__auto__,items__$1,N,lex))
,null,null));
});})(i__38661,parts,c__25579__auto__,size__25580__auto__,b__38662,s__38660__$2,temp__4657__auto__,items__$1,N,lex))
;
return iter__25581__auto__.call(null,parts);
})());

var G__38683 = (i__38661 + (1));
i__38661 = G__38683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38662),clojure$math$combinatorics$iter__38659.call(null,cljs.core.chunk_rest.call(null,s__38660__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38662),null);
}
} else {
var parts = cljs.core.first.call(null,s__38660__$2);
return cljs.core.cons.call(null,(function (){var iter__25581__auto__ = ((function (parts,s__38660__$2,temp__4657__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__38659_$_iter__38675(s__38676){
return (new cljs.core.LazySeq(null,((function (parts,s__38660__$2,temp__4657__auto__,items__$1,N,lex){
return (function (){
var s__38676__$1 = s__38676;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__38676__$1);
if(temp__4657__auto____$1){
var s__38676__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38676__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38676__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38678 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38677 = (0);
while(true){
if((i__38677 < size__25580__auto__)){
var part = cljs.core._nth.call(null,c__25579__auto__,i__38677);
cljs.core.chunk_append.call(null,b__38678,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__38677,part,c__25579__auto__,size__25580__auto__,b__38678,s__38676__$2,temp__4657__auto____$1,parts,s__38660__$2,temp__4657__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__38677,part,c__25579__auto__,size__25580__auto__,b__38678,s__38676__$2,temp__4657__auto____$1,parts,s__38660__$2,temp__4657__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__38684 = (i__38677 + (1));
i__38677 = G__38684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38678),clojure$math$combinatorics$iter__38659_$_iter__38675.call(null,cljs.core.chunk_rest.call(null,s__38676__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38678),null);
}
} else {
var part = cljs.core.first.call(null,s__38676__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__38676__$2,temp__4657__auto____$1,parts,s__38660__$2,temp__4657__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__38676__$2,temp__4657__auto____$1,parts,s__38660__$2,temp__4657__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__38659_$_iter__38675.call(null,cljs.core.rest.call(null,s__38676__$2)));
}
} else {
return null;
}
break;
}
});})(parts,s__38660__$2,temp__4657__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__38660__$2,temp__4657__auto__,items__$1,N,lex))
;
return iter__25581__auto__.call(null,parts);
})(),clojure$math$combinatorics$iter__38659.call(null,cljs.core.rest.call(null,s__38660__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,N,lex))
,null,null));
});})(items__$1,N,lex))
;
return iter__25581__auto__.call(null,lex);
});

clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq38657){
var G__38658 = cljs.core.first.call(null,seq38657);
var seq38657__$1 = cljs.core.next.call(null,seq38657);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__38658,seq38657__$1);
});


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var args38685 = [];
var len__25876__auto___38714 = arguments.length;
var i__25877__auto___38715 = (0);
while(true){
if((i__25877__auto___38715 < len__25876__auto___38714)){
args38685.push((arguments[i__25877__auto___38715]));

var G__38716 = (i__25877__auto___38715 + (1));
i__25877__auto___38715 = G__38716;
continue;
} else {
}
break;
}

var G__38687 = args38685.length;
switch (G__38687) {
case 3:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 11:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38685.length)].join('')));

}
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));
var m = cljs.core.count.call(null,multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__38688 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.call(null,j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__38718 = (j + (1));
var G__38719 = cljs.core.assoc.call(null,c__$1,j,(j + (1)));
var G__38720 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + (1))));
var G__38721 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + (1))));
j = G__38718;
c__$1 = G__38719;
u__$1 = G__38720;
v__$1 = G__38721;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.call(null,vec__38688,(0),null);
var u__$1 = cljs.core.nth.call(null,vec__38688,(1),null);
var v__$1 = cljs.core.nth.call(null,vec__38688,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.call(null,f,(0),(0),(1),m);
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__38691 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));
if(cljs.core._EQ_.call(null,u__$2.call(null,k),(0))){
var G__38722 = (j + (1));
var G__38723 = k;
var G__38724 = true;
var G__38725 = u__$2;
var G__38726 = v__$1;
var G__38727 = c__$1;
j = G__38722;
k = G__38723;
x = G__38724;
u__$1 = G__38725;
v__$1 = G__38726;
c__$1 = G__38727;
continue;
} else {
if(!(x)){
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__25139__auto__ = v__$1.call(null,j);
var y__25140__auto__ = u__$2.call(null,k);
return ((x__25139__auto__ < y__25140__auto__) ? x__25139__auto__ : y__25140__auto__);
})());
var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__38728 = j__$1;
var G__38729 = k__$1;
var G__38730 = x__$1;
var G__38731 = u__$2;
var G__38732 = v__$2;
var G__38733 = c__$2;
j = G__38728;
k = G__38729;
x = G__38730;
u__$1 = G__38731;
v__$1 = G__38732;
c__$1 = G__38733;
continue;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__38734 = j__$1;
var G__38735 = k__$1;
var G__38736 = x;
var G__38737 = u__$2;
var G__38738 = v__$2;
var G__38739 = c__$2;
j = G__38734;
k = G__38735;
x = G__38736;
u__$1 = G__38737;
v__$1 = G__38738;
c__$1 = G__38739;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.call(null,vec__38691,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__38691,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__38691,(2),null);
var j = cljs.core.nth.call(null,vec__38691,(3),null);
var k = cljs.core.nth.call(null,vec__38691,(4),null);
if(cljs.core.truth_((function (){var and__24789__auto__ = r;
if(cljs.core.truth_(and__24789__auto__)){
return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - (1))));
} else {
return and__24789__auto__;
}
})())){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else {
if(cljs.core.truth_((function (){var and__24789__auto__ = s;
if(cljs.core.truth_(and__24789__auto__)){
return ((k <= b)) && (((l + (1)) < s));
} else {
return and__24789__auto__;
}
})())){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + (1)),b__$1);
var G__38740 = n;
var G__38741 = m;
var G__38742 = f__$1;
var G__38743 = c__$1;
var G__38744 = u__$1;
var G__38745 = v__$1;
var G__38746 = a__$1;
var G__38747 = b__$1;
var G__38748 = l__$1;
var G__38749 = r;
var G__38750 = s;
n = G__38740;
m = G__38741;
f = G__38742;
c = G__38743;
u = G__38744;
v = G__38745;
a = G__38746;
b = G__38747;
l = G__38748;
r = G__38749;
s = G__38750;
continue;
} else {
var part = (function (){var iter__25581__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__38691,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__38694(s__38695){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__38691,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__38695__$1 = s__38695;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38695__$1);
if(temp__4657__auto__){
var s__38695__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38695__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38695__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38697 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38696 = (0);
while(true){
if((i__38696 < size__25580__auto__)){
var y = cljs.core._nth.call(null,c__25579__auto__,i__38696);
cljs.core.chunk_append.call(null,b__38697,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25581__auto__ = ((function (i__38696,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__25579__auto__,size__25580__auto__,b__38697,s__38695__$2,temp__4657__auto__,vec__38691,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__38694_$_iter__38706(s__38707){
return (new cljs.core.LazySeq(null,((function (i__38696,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__25579__auto__,size__25580__auto__,b__38697,s__38695__$2,temp__4657__auto__,vec__38691,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__38707__$1 = s__38707;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__38707__$1);
if(temp__4657__auto____$1){
var s__38707__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38707__$2)){
var c__25579__auto____$1 = cljs.core.chunk_first.call(null,s__38707__$2);
var size__25580__auto____$1 = cljs.core.count.call(null,c__25579__auto____$1);
var b__38709 = cljs.core.chunk_buffer.call(null,size__25580__auto____$1);
if((function (){var i__38708 = (0);
while(true){
if((i__38708 < size__25580__auto____$1)){
var z = cljs.core._nth.call(null,c__25579__auto____$1,i__38708);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__38709,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__38751 = (i__38708 + (1));
i__38708 = G__38751;
continue;
} else {
var G__38752 = (i__38708 + (1));
i__38708 = G__38752;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38709),clojure$math$combinatorics$iter__38694_$_iter__38706.call(null,cljs.core.chunk_rest.call(null,s__38707__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38709),null);
}
} else {
var z = cljs.core.first.call(null,s__38707__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__38694_$_iter__38706.call(null,cljs.core.rest.call(null,s__38707__$2)));
} else {
var G__38753 = cljs.core.rest.call(null,s__38707__$2);
s__38707__$1 = G__38753;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__38696,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__25579__auto__,size__25580__auto__,b__38697,s__38695__$2,temp__4657__auto__,vec__38691,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__38696,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__25579__auto__,size__25580__auto__,b__38697,s__38695__$2,temp__4657__auto__,vec__38691,u__$1,v__$1,c__$1,j,k))
;
return iter__25581__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})());

var G__38754 = (i__38696 + (1));
i__38696 = G__38754;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38697),clojure$math$combinatorics$iter__38694.call(null,cljs.core.chunk_rest.call(null,s__38695__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38697),null);
}
} else {
var y = cljs.core.first.call(null,s__38695__$2);
return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25581__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__38695__$2,temp__4657__auto__,vec__38691,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__38694_$_iter__38710(s__38711){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__38695__$2,temp__4657__auto__,vec__38691,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__38711__$1 = s__38711;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__38711__$1);
if(temp__4657__auto____$1){
var s__38711__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38711__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38711__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38713 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38712 = (0);
while(true){
if((i__38712 < size__25580__auto__)){
var z = cljs.core._nth.call(null,c__25579__auto__,i__38712);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__38713,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__38755 = (i__38712 + (1));
i__38712 = G__38755;
continue;
} else {
var G__38756 = (i__38712 + (1));
i__38712 = G__38756;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38713),clojure$math$combinatorics$iter__38694_$_iter__38710.call(null,cljs.core.chunk_rest.call(null,s__38711__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38713),null);
}
} else {
var z = cljs.core.first.call(null,s__38711__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__38694_$_iter__38710.call(null,cljs.core.rest.call(null,s__38711__$2)));
} else {
var G__38757 = cljs.core.rest.call(null,s__38711__$2);
s__38711__$1 = G__38757;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__38695__$2,temp__4657__auto__,vec__38691,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__38695__$2,temp__4657__auto__,vec__38691,u__$1,v__$1,c__$1,j,k))
;
return iter__25581__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__38694.call(null,cljs.core.rest.call(null,s__38695__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__38691,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__38691,u__$1,v__$1,c__$1,j,k))
;
return iter__25581__auto__.call(null,cljs.core.range.call(null,(l + (1))));
})();
return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__38691,u__$1,v__$1,c__$1,j,k){
return (function (){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__38691,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
});

clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11;

clojure.math.combinatorics.m5 = (function clojure$math$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.call(null,v.call(null,j),(0))){
return j;
} else {
var G__38766 = (j - (1));
j = G__38766;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__24789__auto__ = r;
if(cljs.core.truth_(and__24789__auto__)){
return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - (1)) * (r - l)) < u.call(null,j)));
} else {
return and__24789__auto__;
}
})())){
return clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else {
if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),(1)))){
return clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else {
var v__$1 = clojure.math.combinatorics.update.call(null,v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__25581__auto__ = ((function (v__$1,j){
return (function clojure$math$combinatorics$m5_$_iter__38762(s__38763){
return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){
var s__38763__$1 = s__38763;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38763__$1);
if(temp__4657__auto__){
var s__38763__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38763__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38763__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38765 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38764 = (0);
while(true){
if((i__38764 < size__25580__auto__)){
var i = cljs.core._nth.call(null,c__25579__auto__,i__38764);
cljs.core.chunk_append.call(null,b__38765,(u.call(null,i) - v__$1.call(null,i)));

var G__38767 = (i__38764 + (1));
i__38764 = G__38767;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38765),clojure$math$combinatorics$m5_$_iter__38762.call(null,cljs.core.chunk_rest.call(null,s__38763__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38765),null);
}
} else {
var i = cljs.core.first.call(null,s__38763__$2);
return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),clojure$math$combinatorics$m5_$_iter__38762.call(null,cljs.core.rest.call(null,s__38763__$2)));
}
} else {
return null;
}
break;
}
});})(v__$1,j))
,null,null));
});})(v__$1,j))
;
return iter__25581__auto__.call(null,cljs.core.range.call(null,a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_.call(null,ks)){
return v__$2;
} else {
var k = cljs.core.first.call(null,ks);
var G__38768 = cljs.core.rest.call(null,ks);
var G__38769 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__38768;
v__$2 = G__38769;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__25132__auto__ = (0);
var y__25133__auto__ = (min_partitions_after_this - diff_uv);
return ((x__25132__auto__ > y__25133__auto__) ? x__25132__auto__ : y__25133__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = v__$3.call(null,k_1);
if((amount > vk)){
var G__38770 = (k_1 - (1));
var G__38771 = cljs.core.assoc.call(null,v__$3,k_1,(0));
var G__38772 = (amount - vk);
k_1 = G__38770;
v__$3 = G__38771;
amount = G__38772;
continue;
} else {
return cljs.core.assoc.call(null,v__$3,k_1,(vk - amount));
}
break;
}
})());
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
});
clojure.math.combinatorics.m6 = (function clojure$math$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.call(null,l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = f.call(null,l__$1);
return clojure.math.combinatorics.m5.call(null,n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
clojure.math.combinatorics.partitions_M = (function clojure$math$combinatorics$partitions_M(var_args){
var args__25883__auto__ = [];
var len__25876__auto___38866 = arguments.length;
var i__25877__auto___38867 = (0);
while(true){
if((i__25877__auto___38867 < len__25876__auto___38866)){
args__25883__auto__.push((arguments[i__25877__auto___38867]));

var G__38868 = (i__25877__auto___38867 + (1));
i__25877__auto___38867 = G__38868;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__38775){
var map__38776 = p__38775;
var map__38776__$1 = ((((!((map__38776 == null)))?((((map__38776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38776):map__38776);
var from = cljs.core.get.call(null,map__38776__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__38776__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0))){
if((((function (){var or__24801__auto__ = from;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__24801__auto__ = to;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return (0);
}
})()))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec.call(null,items);
var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));
var freqs = cljs.core.frequencies.call(null,items__$1);
var N = cljs.core.count.call(null,items__$1);
var M = cljs.core.count.call(null,ditems);
var from__$1 = (cljs.core.truth_((function (){var and__24789__auto__ = from;
if(cljs.core.truth_(and__24789__auto__)){
return (from <= (1));
} else {
return and__24789__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__24789__auto__ = to;
if(cljs.core.truth_(and__24789__auto__)){
return (to >= N);
} else {
return and__24789__auto__;
}
})())?null:to);
if(!((((1) <= (function (){var or__24801__auto__ = from__$1;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return (1);
}
})())) && ((((function (){var or__24801__auto__ = from__$1;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return (1);
}
})() <= (function (){var or__24801__auto__ = to__$1;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return N;
}
})())) && (((function (){var or__24801__auto__ = to__$1;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return N;
}
})() <= N))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,N,(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25635__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25635__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25635__auto__ = cljs.core.first.call(null,items__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25635__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25635__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25635__auto__);
})())));
} else {
var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25581__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to){
return (function clojure$math$combinatorics$iter__38778(s__38779){
return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to){
return (function (){
var s__38779__$1 = s__38779;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38779__$1);
if(temp__4657__auto__){
var s__38779__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38779__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38779__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38781 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38780 = (0);
while(true){
if((i__38780 < size__25580__auto__)){
var i = cljs.core._nth.call(null,c__25579__auto__,i__38780);
var j = (i + (1));
cljs.core.chunk_append.call(null,b__38781,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));

var G__38869 = (i__38780 + (1));
i__38780 = G__38869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38781),clojure$math$combinatorics$iter__38778.call(null,cljs.core.chunk_rest.call(null,s__38779__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38781),null);
}
} else {
var i = cljs.core.first.call(null,s__38779__$2);
var j = (i + (1));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),clojure$math$combinatorics$iter__38778.call(null,cljs.core.rest.call(null,s__38779__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to))
;
return iter__25581__auto__.call(null,cljs.core.range.call(null,M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);
var iter__25581__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to){
return (function clojure$math$combinatorics$iter__38782(s__38783){
return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to){
return (function (){
var s__38783__$1 = s__38783;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38783__$1);
if(temp__4657__auto__){
var s__38783__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38783__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38783__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38785 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38784 = (0);
while(true){
if((i__38784 < size__25580__auto__)){
var part = cljs.core._nth.call(null,c__25579__auto__,i__38784);
cljs.core.chunk_append.call(null,b__38785,(function (){var iter__25581__auto__ = ((function (i__38784,part,c__25579__auto__,size__25580__auto__,b__38785,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to){
return (function clojure$math$combinatorics$iter__38782_$_iter__38826(s__38827){
return (new cljs.core.LazySeq(null,((function (i__38784,part,c__25579__auto__,size__25580__auto__,b__38785,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to){
return (function (){
var s__38827__$1 = s__38827;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__38827__$1);
if(temp__4657__auto____$1){
var s__38827__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38827__$2)){
var c__25579__auto____$1 = cljs.core.chunk_first.call(null,s__38827__$2);
var size__25580__auto____$1 = cljs.core.count.call(null,c__25579__auto____$1);
var b__38829 = cljs.core.chunk_buffer.call(null,size__25580__auto____$1);
if((function (){var i__38828 = (0);
while(true){
if((i__38828 < size__25580__auto____$1)){
var multiset = cljs.core._nth.call(null,c__25579__auto____$1,i__38828);
cljs.core.chunk_append.call(null,b__38829,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__38828,i__38784,multiset,c__25579__auto____$1,size__25580__auto____$1,b__38829,s__38827__$2,temp__4657__auto____$1,part,c__25579__auto__,size__25580__auto__,b__38785,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to){
return (function (p__38838){
var vec__38839 = p__38838;
var index = cljs.core.nth.call(null,vec__38839,(0),null);
var numtimes = cljs.core.nth.call(null,vec__38839,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__38828,i__38784,multiset,c__25579__auto____$1,size__25580__auto____$1,b__38829,s__38827__$2,temp__4657__auto____$1,part,c__25579__auto__,size__25580__auto__,b__38785,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to))
,multiset)));

var G__38870 = (i__38828 + (1));
i__38828 = G__38870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38829),clojure$math$combinatorics$iter__38782_$_iter__38826.call(null,cljs.core.chunk_rest.call(null,s__38827__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38829),null);
}
} else {
var multiset = cljs.core.first.call(null,s__38827__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__38784,multiset,s__38827__$2,temp__4657__auto____$1,part,c__25579__auto__,size__25580__auto__,b__38785,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to){
return (function (p__38842){
var vec__38843 = p__38842;
var index = cljs.core.nth.call(null,vec__38843,(0),null);
var numtimes = cljs.core.nth.call(null,vec__38843,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__38784,multiset,s__38827__$2,temp__4657__auto____$1,part,c__25579__auto__,size__25580__auto__,b__38785,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__38782_$_iter__38826.call(null,cljs.core.rest.call(null,s__38827__$2)));
}
} else {
return null;
}
break;
}
});})(i__38784,part,c__25579__auto__,size__25580__auto__,b__38785,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to))
,null,null));
});})(i__38784,part,c__25579__auto__,size__25580__auto__,b__38785,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to))
;
return iter__25581__auto__.call(null,part);
})());

var G__38871 = (i__38784 + (1));
i__38784 = G__38871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38785),clojure$math$combinatorics$iter__38782.call(null,cljs.core.chunk_rest.call(null,s__38783__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38785),null);
}
} else {
var part = cljs.core.first.call(null,s__38783__$2);
return cljs.core.cons.call(null,(function (){var iter__25581__auto__ = ((function (part,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to){
return (function clojure$math$combinatorics$iter__38782_$_iter__38846(s__38847){
return (new cljs.core.LazySeq(null,((function (part,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to){
return (function (){
var s__38847__$1 = s__38847;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__38847__$1);
if(temp__4657__auto____$1){
var s__38847__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38847__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__38847__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__38849 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__38848 = (0);
while(true){
if((i__38848 < size__25580__auto__)){
var multiset = cljs.core._nth.call(null,c__25579__auto__,i__38848);
cljs.core.chunk_append.call(null,b__38849,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__38848,multiset,c__25579__auto__,size__25580__auto__,b__38849,s__38847__$2,temp__4657__auto____$1,part,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to){
return (function (p__38858){
var vec__38859 = p__38858;
var index = cljs.core.nth.call(null,vec__38859,(0),null);
var numtimes = cljs.core.nth.call(null,vec__38859,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__38848,multiset,c__25579__auto__,size__25580__auto__,b__38849,s__38847__$2,temp__4657__auto____$1,part,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to))
,multiset)));

var G__38872 = (i__38848 + (1));
i__38848 = G__38872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38849),clojure$math$combinatorics$iter__38782_$_iter__38846.call(null,cljs.core.chunk_rest.call(null,s__38847__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38849),null);
}
} else {
var multiset = cljs.core.first.call(null,s__38847__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__38847__$2,temp__4657__auto____$1,part,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to){
return (function (p__38862){
var vec__38863 = p__38862;
var index = cljs.core.nth.call(null,vec__38863,(0),null);
var numtimes = cljs.core.nth.call(null,vec__38863,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(multiset,s__38847__$2,temp__4657__auto____$1,part,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__38782_$_iter__38846.call(null,cljs.core.rest.call(null,s__38847__$2)));
}
} else {
return null;
}
break;
}
});})(part,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to))
,null,null));
});})(part,s__38783__$2,temp__4657__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to))
;
return iter__25581__auto__.call(null,part);
})(),clojure$math$combinatorics$iter__38782.call(null,cljs.core.rest.call(null,s__38783__$2)));
}
} else {
return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__38776,map__38776__$1,from,to))
;
return iter__25581__auto__.call(null,parts);

}
}
}
});

clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq38773){
var G__38774 = cljs.core.first.call(null,seq38773);
var seq38773__$1 = cljs.core.next.call(null,seq38773);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic(G__38774,seq38773__$1);
});

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__25883__auto__ = [];
var len__25876__auto___38875 = arguments.length;
var i__25877__auto___38876 = (0);
while(true){
if((i__25877__auto___38876 < len__25876__auto___38875)){
args__25883__auto__.push((arguments[i__25877__auto___38876]));

var G__38877 = (i__25877__auto___38876 + (1));
i__25877__auto___38876 = G__38877;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0))){
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_M,items,args);

}
}
});

clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq38873){
var G__38874 = cljs.core.first.call(null,seq38873);
var seq38873__$1 = cljs.core.next.call(null,seq38873);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic(G__38874,seq38873__$1);
});


//# sourceMappingURL=combinatorics.js.map?rel=1490992389870