// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36316){
var map__36341 = p__36316;
var map__36341__$1 = ((((!((map__36341 == null)))?((((map__36341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36341):map__36341);
var m = map__36341__$1;
var n = cljs.core.get.call(null,map__36341__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36341__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36343_36365 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36344_36366 = null;
var count__36345_36367 = (0);
var i__36346_36368 = (0);
while(true){
if((i__36346_36368 < count__36345_36367)){
var f_36369 = cljs.core._nth.call(null,chunk__36344_36366,i__36346_36368);
cljs.core.println.call(null,"  ",f_36369);

var G__36370 = seq__36343_36365;
var G__36371 = chunk__36344_36366;
var G__36372 = count__36345_36367;
var G__36373 = (i__36346_36368 + (1));
seq__36343_36365 = G__36370;
chunk__36344_36366 = G__36371;
count__36345_36367 = G__36372;
i__36346_36368 = G__36373;
continue;
} else {
var temp__4657__auto___36374 = cljs.core.seq.call(null,seq__36343_36365);
if(temp__4657__auto___36374){
var seq__36343_36375__$1 = temp__4657__auto___36374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36343_36375__$1)){
var c__25612__auto___36376 = cljs.core.chunk_first.call(null,seq__36343_36375__$1);
var G__36377 = cljs.core.chunk_rest.call(null,seq__36343_36375__$1);
var G__36378 = c__25612__auto___36376;
var G__36379 = cljs.core.count.call(null,c__25612__auto___36376);
var G__36380 = (0);
seq__36343_36365 = G__36377;
chunk__36344_36366 = G__36378;
count__36345_36367 = G__36379;
i__36346_36368 = G__36380;
continue;
} else {
var f_36381 = cljs.core.first.call(null,seq__36343_36375__$1);
cljs.core.println.call(null,"  ",f_36381);

var G__36382 = cljs.core.next.call(null,seq__36343_36375__$1);
var G__36383 = null;
var G__36384 = (0);
var G__36385 = (0);
seq__36343_36365 = G__36382;
chunk__36344_36366 = G__36383;
count__36345_36367 = G__36384;
i__36346_36368 = G__36385;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36386 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24801__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36386);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36386)))?cljs.core.second.call(null,arglists_36386):arglists_36386));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36347_36387 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36348_36388 = null;
var count__36349_36389 = (0);
var i__36350_36390 = (0);
while(true){
if((i__36350_36390 < count__36349_36389)){
var vec__36351_36391 = cljs.core._nth.call(null,chunk__36348_36388,i__36350_36390);
var name_36392 = cljs.core.nth.call(null,vec__36351_36391,(0),null);
var map__36354_36393 = cljs.core.nth.call(null,vec__36351_36391,(1),null);
var map__36354_36394__$1 = ((((!((map__36354_36393 == null)))?((((map__36354_36393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36354_36393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36354_36393):map__36354_36393);
var doc_36395 = cljs.core.get.call(null,map__36354_36394__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36396 = cljs.core.get.call(null,map__36354_36394__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36392);

cljs.core.println.call(null," ",arglists_36396);

if(cljs.core.truth_(doc_36395)){
cljs.core.println.call(null," ",doc_36395);
} else {
}

var G__36397 = seq__36347_36387;
var G__36398 = chunk__36348_36388;
var G__36399 = count__36349_36389;
var G__36400 = (i__36350_36390 + (1));
seq__36347_36387 = G__36397;
chunk__36348_36388 = G__36398;
count__36349_36389 = G__36399;
i__36350_36390 = G__36400;
continue;
} else {
var temp__4657__auto___36401 = cljs.core.seq.call(null,seq__36347_36387);
if(temp__4657__auto___36401){
var seq__36347_36402__$1 = temp__4657__auto___36401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36347_36402__$1)){
var c__25612__auto___36403 = cljs.core.chunk_first.call(null,seq__36347_36402__$1);
var G__36404 = cljs.core.chunk_rest.call(null,seq__36347_36402__$1);
var G__36405 = c__25612__auto___36403;
var G__36406 = cljs.core.count.call(null,c__25612__auto___36403);
var G__36407 = (0);
seq__36347_36387 = G__36404;
chunk__36348_36388 = G__36405;
count__36349_36389 = G__36406;
i__36350_36390 = G__36407;
continue;
} else {
var vec__36356_36408 = cljs.core.first.call(null,seq__36347_36402__$1);
var name_36409 = cljs.core.nth.call(null,vec__36356_36408,(0),null);
var map__36359_36410 = cljs.core.nth.call(null,vec__36356_36408,(1),null);
var map__36359_36411__$1 = ((((!((map__36359_36410 == null)))?((((map__36359_36410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36359_36410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36359_36410):map__36359_36410);
var doc_36412 = cljs.core.get.call(null,map__36359_36411__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36413 = cljs.core.get.call(null,map__36359_36411__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36409);

cljs.core.println.call(null," ",arglists_36413);

if(cljs.core.truth_(doc_36412)){
cljs.core.println.call(null," ",doc_36412);
} else {
}

var G__36414 = cljs.core.next.call(null,seq__36347_36402__$1);
var G__36415 = null;
var G__36416 = (0);
var G__36417 = (0);
seq__36347_36387 = G__36414;
chunk__36348_36388 = G__36415;
count__36349_36389 = G__36416;
i__36350_36390 = G__36417;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36361 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36362 = null;
var count__36363 = (0);
var i__36364 = (0);
while(true){
if((i__36364 < count__36363)){
var role = cljs.core._nth.call(null,chunk__36362,i__36364);
var temp__4657__auto___36418__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36418__$1)){
var spec_36419 = temp__4657__auto___36418__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36419));
} else {
}

var G__36420 = seq__36361;
var G__36421 = chunk__36362;
var G__36422 = count__36363;
var G__36423 = (i__36364 + (1));
seq__36361 = G__36420;
chunk__36362 = G__36421;
count__36363 = G__36422;
i__36364 = G__36423;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36361);
if(temp__4657__auto____$1){
var seq__36361__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36361__$1)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,seq__36361__$1);
var G__36424 = cljs.core.chunk_rest.call(null,seq__36361__$1);
var G__36425 = c__25612__auto__;
var G__36426 = cljs.core.count.call(null,c__25612__auto__);
var G__36427 = (0);
seq__36361 = G__36424;
chunk__36362 = G__36425;
count__36363 = G__36426;
i__36364 = G__36427;
continue;
} else {
var role = cljs.core.first.call(null,seq__36361__$1);
var temp__4657__auto___36428__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36428__$2)){
var spec_36429 = temp__4657__auto___36428__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36429));
} else {
}

var G__36430 = cljs.core.next.call(null,seq__36361__$1);
var G__36431 = null;
var G__36432 = (0);
var G__36433 = (0);
seq__36361 = G__36430;
chunk__36362 = G__36431;
count__36363 = G__36432;
i__36364 = G__36433;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1490992386850