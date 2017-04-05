// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24801__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24801__auto__){
return or__24801__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24801__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33948_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33948_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33953 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33954 = null;
var count__33955 = (0);
var i__33956 = (0);
while(true){
if((i__33956 < count__33955)){
var n = cljs.core._nth.call(null,chunk__33954,i__33956);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33957 = seq__33953;
var G__33958 = chunk__33954;
var G__33959 = count__33955;
var G__33960 = (i__33956 + (1));
seq__33953 = G__33957;
chunk__33954 = G__33958;
count__33955 = G__33959;
i__33956 = G__33960;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33953);
if(temp__4657__auto__){
var seq__33953__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33953__$1)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,seq__33953__$1);
var G__33961 = cljs.core.chunk_rest.call(null,seq__33953__$1);
var G__33962 = c__25612__auto__;
var G__33963 = cljs.core.count.call(null,c__25612__auto__);
var G__33964 = (0);
seq__33953 = G__33961;
chunk__33954 = G__33962;
count__33955 = G__33963;
i__33956 = G__33964;
continue;
} else {
var n = cljs.core.first.call(null,seq__33953__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33965 = cljs.core.next.call(null,seq__33953__$1);
var G__33966 = null;
var G__33967 = (0);
var G__33968 = (0);
seq__33953 = G__33965;
chunk__33954 = G__33966;
count__33955 = G__33967;
i__33956 = G__33968;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34019_34030 = cljs.core.seq.call(null,deps);
var chunk__34020_34031 = null;
var count__34021_34032 = (0);
var i__34022_34033 = (0);
while(true){
if((i__34022_34033 < count__34021_34032)){
var dep_34034 = cljs.core._nth.call(null,chunk__34020_34031,i__34022_34033);
topo_sort_helper_STAR_.call(null,dep_34034,(depth + (1)),state);

var G__34035 = seq__34019_34030;
var G__34036 = chunk__34020_34031;
var G__34037 = count__34021_34032;
var G__34038 = (i__34022_34033 + (1));
seq__34019_34030 = G__34035;
chunk__34020_34031 = G__34036;
count__34021_34032 = G__34037;
i__34022_34033 = G__34038;
continue;
} else {
var temp__4657__auto___34039 = cljs.core.seq.call(null,seq__34019_34030);
if(temp__4657__auto___34039){
var seq__34019_34040__$1 = temp__4657__auto___34039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34019_34040__$1)){
var c__25612__auto___34041 = cljs.core.chunk_first.call(null,seq__34019_34040__$1);
var G__34042 = cljs.core.chunk_rest.call(null,seq__34019_34040__$1);
var G__34043 = c__25612__auto___34041;
var G__34044 = cljs.core.count.call(null,c__25612__auto___34041);
var G__34045 = (0);
seq__34019_34030 = G__34042;
chunk__34020_34031 = G__34043;
count__34021_34032 = G__34044;
i__34022_34033 = G__34045;
continue;
} else {
var dep_34046 = cljs.core.first.call(null,seq__34019_34040__$1);
topo_sort_helper_STAR_.call(null,dep_34046,(depth + (1)),state);

var G__34047 = cljs.core.next.call(null,seq__34019_34040__$1);
var G__34048 = null;
var G__34049 = (0);
var G__34050 = (0);
seq__34019_34030 = G__34047;
chunk__34020_34031 = G__34048;
count__34021_34032 = G__34049;
i__34022_34033 = G__34050;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34023){
var vec__34027 = p__34023;
var seq__34028 = cljs.core.seq.call(null,vec__34027);
var first__34029 = cljs.core.first.call(null,seq__34028);
var seq__34028__$1 = cljs.core.next.call(null,seq__34028);
var x = first__34029;
var xs = seq__34028__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34027,seq__34028,first__34029,seq__34028__$1,x,xs,get_deps__$1){
return (function (p1__33969_SHARP_){
return clojure.set.difference.call(null,p1__33969_SHARP_,x);
});})(vec__34027,seq__34028,first__34029,seq__34028__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34063 = cljs.core.seq.call(null,provides);
var chunk__34064 = null;
var count__34065 = (0);
var i__34066 = (0);
while(true){
if((i__34066 < count__34065)){
var prov = cljs.core._nth.call(null,chunk__34064,i__34066);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34067_34075 = cljs.core.seq.call(null,requires);
var chunk__34068_34076 = null;
var count__34069_34077 = (0);
var i__34070_34078 = (0);
while(true){
if((i__34070_34078 < count__34069_34077)){
var req_34079 = cljs.core._nth.call(null,chunk__34068_34076,i__34070_34078);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34079,prov);

var G__34080 = seq__34067_34075;
var G__34081 = chunk__34068_34076;
var G__34082 = count__34069_34077;
var G__34083 = (i__34070_34078 + (1));
seq__34067_34075 = G__34080;
chunk__34068_34076 = G__34081;
count__34069_34077 = G__34082;
i__34070_34078 = G__34083;
continue;
} else {
var temp__4657__auto___34084 = cljs.core.seq.call(null,seq__34067_34075);
if(temp__4657__auto___34084){
var seq__34067_34085__$1 = temp__4657__auto___34084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34067_34085__$1)){
var c__25612__auto___34086 = cljs.core.chunk_first.call(null,seq__34067_34085__$1);
var G__34087 = cljs.core.chunk_rest.call(null,seq__34067_34085__$1);
var G__34088 = c__25612__auto___34086;
var G__34089 = cljs.core.count.call(null,c__25612__auto___34086);
var G__34090 = (0);
seq__34067_34075 = G__34087;
chunk__34068_34076 = G__34088;
count__34069_34077 = G__34089;
i__34070_34078 = G__34090;
continue;
} else {
var req_34091 = cljs.core.first.call(null,seq__34067_34085__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34091,prov);

var G__34092 = cljs.core.next.call(null,seq__34067_34085__$1);
var G__34093 = null;
var G__34094 = (0);
var G__34095 = (0);
seq__34067_34075 = G__34092;
chunk__34068_34076 = G__34093;
count__34069_34077 = G__34094;
i__34070_34078 = G__34095;
continue;
}
} else {
}
}
break;
}

var G__34096 = seq__34063;
var G__34097 = chunk__34064;
var G__34098 = count__34065;
var G__34099 = (i__34066 + (1));
seq__34063 = G__34096;
chunk__34064 = G__34097;
count__34065 = G__34098;
i__34066 = G__34099;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34063);
if(temp__4657__auto__){
var seq__34063__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34063__$1)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,seq__34063__$1);
var G__34100 = cljs.core.chunk_rest.call(null,seq__34063__$1);
var G__34101 = c__25612__auto__;
var G__34102 = cljs.core.count.call(null,c__25612__auto__);
var G__34103 = (0);
seq__34063 = G__34100;
chunk__34064 = G__34101;
count__34065 = G__34102;
i__34066 = G__34103;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34063__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34071_34104 = cljs.core.seq.call(null,requires);
var chunk__34072_34105 = null;
var count__34073_34106 = (0);
var i__34074_34107 = (0);
while(true){
if((i__34074_34107 < count__34073_34106)){
var req_34108 = cljs.core._nth.call(null,chunk__34072_34105,i__34074_34107);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34108,prov);

var G__34109 = seq__34071_34104;
var G__34110 = chunk__34072_34105;
var G__34111 = count__34073_34106;
var G__34112 = (i__34074_34107 + (1));
seq__34071_34104 = G__34109;
chunk__34072_34105 = G__34110;
count__34073_34106 = G__34111;
i__34074_34107 = G__34112;
continue;
} else {
var temp__4657__auto___34113__$1 = cljs.core.seq.call(null,seq__34071_34104);
if(temp__4657__auto___34113__$1){
var seq__34071_34114__$1 = temp__4657__auto___34113__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34071_34114__$1)){
var c__25612__auto___34115 = cljs.core.chunk_first.call(null,seq__34071_34114__$1);
var G__34116 = cljs.core.chunk_rest.call(null,seq__34071_34114__$1);
var G__34117 = c__25612__auto___34115;
var G__34118 = cljs.core.count.call(null,c__25612__auto___34115);
var G__34119 = (0);
seq__34071_34104 = G__34116;
chunk__34072_34105 = G__34117;
count__34073_34106 = G__34118;
i__34074_34107 = G__34119;
continue;
} else {
var req_34120 = cljs.core.first.call(null,seq__34071_34114__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34120,prov);

var G__34121 = cljs.core.next.call(null,seq__34071_34114__$1);
var G__34122 = null;
var G__34123 = (0);
var G__34124 = (0);
seq__34071_34104 = G__34121;
chunk__34072_34105 = G__34122;
count__34073_34106 = G__34123;
i__34074_34107 = G__34124;
continue;
}
} else {
}
}
break;
}

var G__34125 = cljs.core.next.call(null,seq__34063__$1);
var G__34126 = null;
var G__34127 = (0);
var G__34128 = (0);
seq__34063 = G__34125;
chunk__34064 = G__34126;
count__34065 = G__34127;
i__34066 = G__34128;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34133_34137 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34134_34138 = null;
var count__34135_34139 = (0);
var i__34136_34140 = (0);
while(true){
if((i__34136_34140 < count__34135_34139)){
var ns_34141 = cljs.core._nth.call(null,chunk__34134_34138,i__34136_34140);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34141);

var G__34142 = seq__34133_34137;
var G__34143 = chunk__34134_34138;
var G__34144 = count__34135_34139;
var G__34145 = (i__34136_34140 + (1));
seq__34133_34137 = G__34142;
chunk__34134_34138 = G__34143;
count__34135_34139 = G__34144;
i__34136_34140 = G__34145;
continue;
} else {
var temp__4657__auto___34146 = cljs.core.seq.call(null,seq__34133_34137);
if(temp__4657__auto___34146){
var seq__34133_34147__$1 = temp__4657__auto___34146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34133_34147__$1)){
var c__25612__auto___34148 = cljs.core.chunk_first.call(null,seq__34133_34147__$1);
var G__34149 = cljs.core.chunk_rest.call(null,seq__34133_34147__$1);
var G__34150 = c__25612__auto___34148;
var G__34151 = cljs.core.count.call(null,c__25612__auto___34148);
var G__34152 = (0);
seq__34133_34137 = G__34149;
chunk__34134_34138 = G__34150;
count__34135_34139 = G__34151;
i__34136_34140 = G__34152;
continue;
} else {
var ns_34153 = cljs.core.first.call(null,seq__34133_34147__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34153);

var G__34154 = cljs.core.next.call(null,seq__34133_34147__$1);
var G__34155 = null;
var G__34156 = (0);
var G__34157 = (0);
seq__34133_34137 = G__34154;
chunk__34134_34138 = G__34155;
count__34135_34139 = G__34156;
i__34136_34140 = G__34157;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24801__auto__ = goog.require__;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34158__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34159__i = 0, G__34159__a = new Array(arguments.length -  0);
while (G__34159__i < G__34159__a.length) {G__34159__a[G__34159__i] = arguments[G__34159__i + 0]; ++G__34159__i;}
  args = new cljs.core.IndexedSeq(G__34159__a,0);
} 
return G__34158__delegate.call(this,args);};
G__34158.cljs$lang$maxFixedArity = 0;
G__34158.cljs$lang$applyTo = (function (arglist__34160){
var args = cljs.core.seq(arglist__34160);
return G__34158__delegate(args);
});
G__34158.cljs$core$IFn$_invoke$arity$variadic = G__34158__delegate;
return G__34158;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34162 = cljs.core._EQ_;
var expr__34163 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34162.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34163))){
var path_parts = ((function (pred__34162,expr__34163){
return (function (p1__34161_SHARP_){
return clojure.string.split.call(null,p1__34161_SHARP_,/[\/\\]/);
});})(pred__34162,expr__34163))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34162,expr__34163){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34165){if((e34165 instanceof Error)){
var e = e34165;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34165;

}
}})());
});
;})(path_parts,sep,root,pred__34162,expr__34163))
} else {
if(cljs.core.truth_(pred__34162.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34163))){
return ((function (pred__34162,expr__34163){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34162,expr__34163){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34162,expr__34163))
);

return deferred.addErrback(((function (deferred,pred__34162,expr__34163){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34162,expr__34163))
);
});
;})(pred__34162,expr__34163))
} else {
return ((function (pred__34162,expr__34163){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34162,expr__34163))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34166,callback){
var map__34169 = p__34166;
var map__34169__$1 = ((((!((map__34169 == null)))?((((map__34169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34169):map__34169);
var file_msg = map__34169__$1;
var request_url = cljs.core.get.call(null,map__34169__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34169,map__34169__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34169,map__34169__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto__){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto__){
return (function (state_34193){
var state_val_34194 = (state_34193[(1)]);
if((state_val_34194 === (7))){
var inst_34189 = (state_34193[(2)]);
var state_34193__$1 = state_34193;
var statearr_34195_34215 = state_34193__$1;
(statearr_34195_34215[(2)] = inst_34189);

(statearr_34195_34215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34194 === (1))){
var state_34193__$1 = state_34193;
var statearr_34196_34216 = state_34193__$1;
(statearr_34196_34216[(2)] = null);

(statearr_34196_34216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34194 === (4))){
var inst_34173 = (state_34193[(7)]);
var inst_34173__$1 = (state_34193[(2)]);
var state_34193__$1 = (function (){var statearr_34197 = state_34193;
(statearr_34197[(7)] = inst_34173__$1);

return statearr_34197;
})();
if(cljs.core.truth_(inst_34173__$1)){
var statearr_34198_34217 = state_34193__$1;
(statearr_34198_34217[(1)] = (5));

} else {
var statearr_34199_34218 = state_34193__$1;
(statearr_34199_34218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34194 === (6))){
var state_34193__$1 = state_34193;
var statearr_34200_34219 = state_34193__$1;
(statearr_34200_34219[(2)] = null);

(statearr_34200_34219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34194 === (3))){
var inst_34191 = (state_34193[(2)]);
var state_34193__$1 = state_34193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34193__$1,inst_34191);
} else {
if((state_val_34194 === (2))){
var state_34193__$1 = state_34193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34193__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34194 === (11))){
var inst_34185 = (state_34193[(2)]);
var state_34193__$1 = (function (){var statearr_34201 = state_34193;
(statearr_34201[(8)] = inst_34185);

return statearr_34201;
})();
var statearr_34202_34220 = state_34193__$1;
(statearr_34202_34220[(2)] = null);

(statearr_34202_34220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34194 === (9))){
var inst_34179 = (state_34193[(9)]);
var inst_34177 = (state_34193[(10)]);
var inst_34181 = inst_34179.call(null,inst_34177);
var state_34193__$1 = state_34193;
var statearr_34203_34221 = state_34193__$1;
(statearr_34203_34221[(2)] = inst_34181);

(statearr_34203_34221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34194 === (5))){
var inst_34173 = (state_34193[(7)]);
var inst_34175 = figwheel.client.file_reloading.blocking_load.call(null,inst_34173);
var state_34193__$1 = state_34193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34193__$1,(8),inst_34175);
} else {
if((state_val_34194 === (10))){
var inst_34177 = (state_34193[(10)]);
var inst_34183 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34177);
var state_34193__$1 = state_34193;
var statearr_34204_34222 = state_34193__$1;
(statearr_34204_34222[(2)] = inst_34183);

(statearr_34204_34222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34194 === (8))){
var inst_34179 = (state_34193[(9)]);
var inst_34173 = (state_34193[(7)]);
var inst_34177 = (state_34193[(2)]);
var inst_34178 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34179__$1 = cljs.core.get.call(null,inst_34178,inst_34173);
var state_34193__$1 = (function (){var statearr_34205 = state_34193;
(statearr_34205[(9)] = inst_34179__$1);

(statearr_34205[(10)] = inst_34177);

return statearr_34205;
})();
if(cljs.core.truth_(inst_34179__$1)){
var statearr_34206_34223 = state_34193__$1;
(statearr_34206_34223[(1)] = (9));

} else {
var statearr_34207_34224 = state_34193__$1;
(statearr_34207_34224[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28756__auto__))
;
return ((function (switch__28644__auto__,c__28756__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28645__auto__ = null;
var figwheel$client$file_reloading$state_machine__28645__auto____0 = (function (){
var statearr_34211 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34211[(0)] = figwheel$client$file_reloading$state_machine__28645__auto__);

(statearr_34211[(1)] = (1));

return statearr_34211;
});
var figwheel$client$file_reloading$state_machine__28645__auto____1 = (function (state_34193){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_34193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e34212){if((e34212 instanceof Object)){
var ex__28648__auto__ = e34212;
var statearr_34213_34225 = state_34193;
(statearr_34213_34225[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34226 = state_34193;
state_34193 = G__34226;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28645__auto__ = function(state_34193){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28645__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28645__auto____1.call(this,state_34193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28645__auto____0;
figwheel$client$file_reloading$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28645__auto____1;
return figwheel$client$file_reloading$state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto__))
})();
var state__28758__auto__ = (function (){var statearr_34214 = f__28757__auto__.call(null);
(statearr_34214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto__);

return statearr_34214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto__))
);

return c__28756__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34227,callback){
var map__34230 = p__34227;
var map__34230__$1 = ((((!((map__34230 == null)))?((((map__34230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34230):map__34230);
var file_msg = map__34230__$1;
var namespace = cljs.core.get.call(null,map__34230__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34230,map__34230__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34230,map__34230__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34232){
var map__34235 = p__34232;
var map__34235__$1 = ((((!((map__34235 == null)))?((((map__34235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34235):map__34235);
var file_msg = map__34235__$1;
var namespace = cljs.core.get.call(null,map__34235__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24789__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24789__auto__){
var or__24801__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
var or__24801__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24801__auto____$1)){
return or__24801__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24789__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34237,callback){
var map__34240 = p__34237;
var map__34240__$1 = ((((!((map__34240 == null)))?((((map__34240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34240):map__34240);
var file_msg = map__34240__$1;
var request_url = cljs.core.get.call(null,map__34240__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34240__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28756__auto___34344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___34344,out){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___34344,out){
return (function (state_34326){
var state_val_34327 = (state_34326[(1)]);
if((state_val_34327 === (1))){
var inst_34300 = cljs.core.seq.call(null,files);
var inst_34301 = cljs.core.first.call(null,inst_34300);
var inst_34302 = cljs.core.next.call(null,inst_34300);
var inst_34303 = files;
var state_34326__$1 = (function (){var statearr_34328 = state_34326;
(statearr_34328[(7)] = inst_34301);

(statearr_34328[(8)] = inst_34302);

(statearr_34328[(9)] = inst_34303);

return statearr_34328;
})();
var statearr_34329_34345 = state_34326__$1;
(statearr_34329_34345[(2)] = null);

(statearr_34329_34345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (2))){
var inst_34303 = (state_34326[(9)]);
var inst_34309 = (state_34326[(10)]);
var inst_34308 = cljs.core.seq.call(null,inst_34303);
var inst_34309__$1 = cljs.core.first.call(null,inst_34308);
var inst_34310 = cljs.core.next.call(null,inst_34308);
var inst_34311 = (inst_34309__$1 == null);
var inst_34312 = cljs.core.not.call(null,inst_34311);
var state_34326__$1 = (function (){var statearr_34330 = state_34326;
(statearr_34330[(11)] = inst_34310);

(statearr_34330[(10)] = inst_34309__$1);

return statearr_34330;
})();
if(inst_34312){
var statearr_34331_34346 = state_34326__$1;
(statearr_34331_34346[(1)] = (4));

} else {
var statearr_34332_34347 = state_34326__$1;
(statearr_34332_34347[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (3))){
var inst_34324 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34326__$1,inst_34324);
} else {
if((state_val_34327 === (4))){
var inst_34309 = (state_34326[(10)]);
var inst_34314 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34309);
var state_34326__$1 = state_34326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34326__$1,(7),inst_34314);
} else {
if((state_val_34327 === (5))){
var inst_34320 = cljs.core.async.close_BANG_.call(null,out);
var state_34326__$1 = state_34326;
var statearr_34333_34348 = state_34326__$1;
(statearr_34333_34348[(2)] = inst_34320);

(statearr_34333_34348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (6))){
var inst_34322 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
var statearr_34334_34349 = state_34326__$1;
(statearr_34334_34349[(2)] = inst_34322);

(statearr_34334_34349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (7))){
var inst_34310 = (state_34326[(11)]);
var inst_34316 = (state_34326[(2)]);
var inst_34317 = cljs.core.async.put_BANG_.call(null,out,inst_34316);
var inst_34303 = inst_34310;
var state_34326__$1 = (function (){var statearr_34335 = state_34326;
(statearr_34335[(12)] = inst_34317);

(statearr_34335[(9)] = inst_34303);

return statearr_34335;
})();
var statearr_34336_34350 = state_34326__$1;
(statearr_34336_34350[(2)] = null);

(statearr_34336_34350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28756__auto___34344,out))
;
return ((function (switch__28644__auto__,c__28756__auto___34344,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28645__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28645__auto____0 = (function (){
var statearr_34340 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34340[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28645__auto__);

(statearr_34340[(1)] = (1));

return statearr_34340;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28645__auto____1 = (function (state_34326){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_34326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e34341){if((e34341 instanceof Object)){
var ex__28648__auto__ = e34341;
var statearr_34342_34351 = state_34326;
(statearr_34342_34351[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34352 = state_34326;
state_34326 = G__34352;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28645__auto__ = function(state_34326){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28645__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28645__auto____1.call(this,state_34326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28645__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28645__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___34344,out))
})();
var state__28758__auto__ = (function (){var statearr_34343 = f__28757__auto__.call(null);
(statearr_34343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___34344);

return statearr_34343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___34344,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34353,opts){
var map__34357 = p__34353;
var map__34357__$1 = ((((!((map__34357 == null)))?((((map__34357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34357):map__34357);
var eval_body__$1 = cljs.core.get.call(null,map__34357__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34357__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24789__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24789__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24789__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34359){var e = e34359;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34360_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34360_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34369){
var vec__34370 = p__34369;
var k = cljs.core.nth.call(null,vec__34370,(0),null);
var v = cljs.core.nth.call(null,vec__34370,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34373){
var vec__34374 = p__34373;
var k = cljs.core.nth.call(null,vec__34374,(0),null);
var v = cljs.core.nth.call(null,vec__34374,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34380,p__34381){
var map__34628 = p__34380;
var map__34628__$1 = ((((!((map__34628 == null)))?((((map__34628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34628):map__34628);
var opts = map__34628__$1;
var before_jsload = cljs.core.get.call(null,map__34628__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34628__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34628__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34629 = p__34381;
var map__34629__$1 = ((((!((map__34629 == null)))?((((map__34629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34629):map__34629);
var msg = map__34629__$1;
var files = cljs.core.get.call(null,map__34629__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34629__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34629__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34782){
var state_val_34783 = (state_34782[(1)]);
if((state_val_34783 === (7))){
var inst_34646 = (state_34782[(7)]);
var inst_34643 = (state_34782[(8)]);
var inst_34644 = (state_34782[(9)]);
var inst_34645 = (state_34782[(10)]);
var inst_34651 = cljs.core._nth.call(null,inst_34644,inst_34646);
var inst_34652 = figwheel.client.file_reloading.eval_body.call(null,inst_34651,opts);
var inst_34653 = (inst_34646 + (1));
var tmp34784 = inst_34643;
var tmp34785 = inst_34644;
var tmp34786 = inst_34645;
var inst_34643__$1 = tmp34784;
var inst_34644__$1 = tmp34785;
var inst_34645__$1 = tmp34786;
var inst_34646__$1 = inst_34653;
var state_34782__$1 = (function (){var statearr_34787 = state_34782;
(statearr_34787[(7)] = inst_34646__$1);

(statearr_34787[(8)] = inst_34643__$1);

(statearr_34787[(9)] = inst_34644__$1);

(statearr_34787[(10)] = inst_34645__$1);

(statearr_34787[(11)] = inst_34652);

return statearr_34787;
})();
var statearr_34788_34874 = state_34782__$1;
(statearr_34788_34874[(2)] = null);

(statearr_34788_34874[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (20))){
var inst_34686 = (state_34782[(12)]);
var inst_34694 = figwheel.client.file_reloading.sort_files.call(null,inst_34686);
var state_34782__$1 = state_34782;
var statearr_34789_34875 = state_34782__$1;
(statearr_34789_34875[(2)] = inst_34694);

(statearr_34789_34875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (27))){
var state_34782__$1 = state_34782;
var statearr_34790_34876 = state_34782__$1;
(statearr_34790_34876[(2)] = null);

(statearr_34790_34876[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (1))){
var inst_34635 = (state_34782[(13)]);
var inst_34632 = before_jsload.call(null,files);
var inst_34633 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34634 = (function (){return ((function (inst_34635,inst_34632,inst_34633,state_val_34783,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34377_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34377_SHARP_);
});
;})(inst_34635,inst_34632,inst_34633,state_val_34783,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34635__$1 = cljs.core.filter.call(null,inst_34634,files);
var inst_34636 = cljs.core.not_empty.call(null,inst_34635__$1);
var state_34782__$1 = (function (){var statearr_34791 = state_34782;
(statearr_34791[(14)] = inst_34632);

(statearr_34791[(13)] = inst_34635__$1);

(statearr_34791[(15)] = inst_34633);

return statearr_34791;
})();
if(cljs.core.truth_(inst_34636)){
var statearr_34792_34877 = state_34782__$1;
(statearr_34792_34877[(1)] = (2));

} else {
var statearr_34793_34878 = state_34782__$1;
(statearr_34793_34878[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (24))){
var state_34782__$1 = state_34782;
var statearr_34794_34879 = state_34782__$1;
(statearr_34794_34879[(2)] = null);

(statearr_34794_34879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (39))){
var inst_34736 = (state_34782[(16)]);
var state_34782__$1 = state_34782;
var statearr_34795_34880 = state_34782__$1;
(statearr_34795_34880[(2)] = inst_34736);

(statearr_34795_34880[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (46))){
var inst_34777 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34796_34881 = state_34782__$1;
(statearr_34796_34881[(2)] = inst_34777);

(statearr_34796_34881[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (4))){
var inst_34680 = (state_34782[(2)]);
var inst_34681 = cljs.core.List.EMPTY;
var inst_34682 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34681);
var inst_34683 = (function (){return ((function (inst_34680,inst_34681,inst_34682,state_val_34783,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34378_SHARP_){
var and__24789__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34378_SHARP_);
if(cljs.core.truth_(and__24789__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34378_SHARP_));
} else {
return and__24789__auto__;
}
});
;})(inst_34680,inst_34681,inst_34682,state_val_34783,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34684 = cljs.core.filter.call(null,inst_34683,files);
var inst_34685 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34686 = cljs.core.concat.call(null,inst_34684,inst_34685);
var state_34782__$1 = (function (){var statearr_34797 = state_34782;
(statearr_34797[(17)] = inst_34680);

(statearr_34797[(18)] = inst_34682);

(statearr_34797[(12)] = inst_34686);

return statearr_34797;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34798_34882 = state_34782__$1;
(statearr_34798_34882[(1)] = (16));

} else {
var statearr_34799_34883 = state_34782__$1;
(statearr_34799_34883[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (15))){
var inst_34670 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34800_34884 = state_34782__$1;
(statearr_34800_34884[(2)] = inst_34670);

(statearr_34800_34884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (21))){
var inst_34696 = (state_34782[(19)]);
var inst_34696__$1 = (state_34782[(2)]);
var inst_34697 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34696__$1);
var state_34782__$1 = (function (){var statearr_34801 = state_34782;
(statearr_34801[(19)] = inst_34696__$1);

return statearr_34801;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34782__$1,(22),inst_34697);
} else {
if((state_val_34783 === (31))){
var inst_34780 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34782__$1,inst_34780);
} else {
if((state_val_34783 === (32))){
var inst_34736 = (state_34782[(16)]);
var inst_34741 = inst_34736.cljs$lang$protocol_mask$partition0$;
var inst_34742 = (inst_34741 & (64));
var inst_34743 = inst_34736.cljs$core$ISeq$;
var inst_34744 = (inst_34742) || (inst_34743);
var state_34782__$1 = state_34782;
if(cljs.core.truth_(inst_34744)){
var statearr_34802_34885 = state_34782__$1;
(statearr_34802_34885[(1)] = (35));

} else {
var statearr_34803_34886 = state_34782__$1;
(statearr_34803_34886[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (40))){
var inst_34757 = (state_34782[(20)]);
var inst_34756 = (state_34782[(2)]);
var inst_34757__$1 = cljs.core.get.call(null,inst_34756,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34758 = cljs.core.get.call(null,inst_34756,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34759 = cljs.core.not_empty.call(null,inst_34757__$1);
var state_34782__$1 = (function (){var statearr_34804 = state_34782;
(statearr_34804[(21)] = inst_34758);

(statearr_34804[(20)] = inst_34757__$1);

return statearr_34804;
})();
if(cljs.core.truth_(inst_34759)){
var statearr_34805_34887 = state_34782__$1;
(statearr_34805_34887[(1)] = (41));

} else {
var statearr_34806_34888 = state_34782__$1;
(statearr_34806_34888[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (33))){
var state_34782__$1 = state_34782;
var statearr_34807_34889 = state_34782__$1;
(statearr_34807_34889[(2)] = false);

(statearr_34807_34889[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (13))){
var inst_34656 = (state_34782[(22)]);
var inst_34660 = cljs.core.chunk_first.call(null,inst_34656);
var inst_34661 = cljs.core.chunk_rest.call(null,inst_34656);
var inst_34662 = cljs.core.count.call(null,inst_34660);
var inst_34643 = inst_34661;
var inst_34644 = inst_34660;
var inst_34645 = inst_34662;
var inst_34646 = (0);
var state_34782__$1 = (function (){var statearr_34808 = state_34782;
(statearr_34808[(7)] = inst_34646);

(statearr_34808[(8)] = inst_34643);

(statearr_34808[(9)] = inst_34644);

(statearr_34808[(10)] = inst_34645);

return statearr_34808;
})();
var statearr_34809_34890 = state_34782__$1;
(statearr_34809_34890[(2)] = null);

(statearr_34809_34890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (22))){
var inst_34696 = (state_34782[(19)]);
var inst_34700 = (state_34782[(23)]);
var inst_34704 = (state_34782[(24)]);
var inst_34699 = (state_34782[(25)]);
var inst_34699__$1 = (state_34782[(2)]);
var inst_34700__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34699__$1);
var inst_34701 = (function (){var all_files = inst_34696;
var res_SINGLEQUOTE_ = inst_34699__$1;
var res = inst_34700__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34696,inst_34700,inst_34704,inst_34699,inst_34699__$1,inst_34700__$1,state_val_34783,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34379_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34379_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34696,inst_34700,inst_34704,inst_34699,inst_34699__$1,inst_34700__$1,state_val_34783,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34702 = cljs.core.filter.call(null,inst_34701,inst_34699__$1);
var inst_34703 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34704__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34703);
var inst_34705 = cljs.core.not_empty.call(null,inst_34704__$1);
var state_34782__$1 = (function (){var statearr_34810 = state_34782;
(statearr_34810[(23)] = inst_34700__$1);

(statearr_34810[(24)] = inst_34704__$1);

(statearr_34810[(25)] = inst_34699__$1);

(statearr_34810[(26)] = inst_34702);

return statearr_34810;
})();
if(cljs.core.truth_(inst_34705)){
var statearr_34811_34891 = state_34782__$1;
(statearr_34811_34891[(1)] = (23));

} else {
var statearr_34812_34892 = state_34782__$1;
(statearr_34812_34892[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (36))){
var state_34782__$1 = state_34782;
var statearr_34813_34893 = state_34782__$1;
(statearr_34813_34893[(2)] = false);

(statearr_34813_34893[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (41))){
var inst_34757 = (state_34782[(20)]);
var inst_34761 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34762 = cljs.core.map.call(null,inst_34761,inst_34757);
var inst_34763 = cljs.core.pr_str.call(null,inst_34762);
var inst_34764 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34763)].join('');
var inst_34765 = figwheel.client.utils.log.call(null,inst_34764);
var state_34782__$1 = state_34782;
var statearr_34814_34894 = state_34782__$1;
(statearr_34814_34894[(2)] = inst_34765);

(statearr_34814_34894[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (43))){
var inst_34758 = (state_34782[(21)]);
var inst_34768 = (state_34782[(2)]);
var inst_34769 = cljs.core.not_empty.call(null,inst_34758);
var state_34782__$1 = (function (){var statearr_34815 = state_34782;
(statearr_34815[(27)] = inst_34768);

return statearr_34815;
})();
if(cljs.core.truth_(inst_34769)){
var statearr_34816_34895 = state_34782__$1;
(statearr_34816_34895[(1)] = (44));

} else {
var statearr_34817_34896 = state_34782__$1;
(statearr_34817_34896[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (29))){
var inst_34696 = (state_34782[(19)]);
var inst_34700 = (state_34782[(23)]);
var inst_34704 = (state_34782[(24)]);
var inst_34699 = (state_34782[(25)]);
var inst_34702 = (state_34782[(26)]);
var inst_34736 = (state_34782[(16)]);
var inst_34732 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34735 = (function (){var all_files = inst_34696;
var res_SINGLEQUOTE_ = inst_34699;
var res = inst_34700;
var files_not_loaded = inst_34702;
var dependencies_that_loaded = inst_34704;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34696,inst_34700,inst_34704,inst_34699,inst_34702,inst_34736,inst_34732,state_val_34783,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34734){
var map__34818 = p__34734;
var map__34818__$1 = ((((!((map__34818 == null)))?((((map__34818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34818):map__34818);
var namespace = cljs.core.get.call(null,map__34818__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34696,inst_34700,inst_34704,inst_34699,inst_34702,inst_34736,inst_34732,state_val_34783,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34736__$1 = cljs.core.group_by.call(null,inst_34735,inst_34702);
var inst_34738 = (inst_34736__$1 == null);
var inst_34739 = cljs.core.not.call(null,inst_34738);
var state_34782__$1 = (function (){var statearr_34820 = state_34782;
(statearr_34820[(28)] = inst_34732);

(statearr_34820[(16)] = inst_34736__$1);

return statearr_34820;
})();
if(inst_34739){
var statearr_34821_34897 = state_34782__$1;
(statearr_34821_34897[(1)] = (32));

} else {
var statearr_34822_34898 = state_34782__$1;
(statearr_34822_34898[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (44))){
var inst_34758 = (state_34782[(21)]);
var inst_34771 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34758);
var inst_34772 = cljs.core.pr_str.call(null,inst_34771);
var inst_34773 = [cljs.core.str("not required: "),cljs.core.str(inst_34772)].join('');
var inst_34774 = figwheel.client.utils.log.call(null,inst_34773);
var state_34782__$1 = state_34782;
var statearr_34823_34899 = state_34782__$1;
(statearr_34823_34899[(2)] = inst_34774);

(statearr_34823_34899[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (6))){
var inst_34677 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34824_34900 = state_34782__$1;
(statearr_34824_34900[(2)] = inst_34677);

(statearr_34824_34900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (28))){
var inst_34702 = (state_34782[(26)]);
var inst_34729 = (state_34782[(2)]);
var inst_34730 = cljs.core.not_empty.call(null,inst_34702);
var state_34782__$1 = (function (){var statearr_34825 = state_34782;
(statearr_34825[(29)] = inst_34729);

return statearr_34825;
})();
if(cljs.core.truth_(inst_34730)){
var statearr_34826_34901 = state_34782__$1;
(statearr_34826_34901[(1)] = (29));

} else {
var statearr_34827_34902 = state_34782__$1;
(statearr_34827_34902[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (25))){
var inst_34700 = (state_34782[(23)]);
var inst_34716 = (state_34782[(2)]);
var inst_34717 = cljs.core.not_empty.call(null,inst_34700);
var state_34782__$1 = (function (){var statearr_34828 = state_34782;
(statearr_34828[(30)] = inst_34716);

return statearr_34828;
})();
if(cljs.core.truth_(inst_34717)){
var statearr_34829_34903 = state_34782__$1;
(statearr_34829_34903[(1)] = (26));

} else {
var statearr_34830_34904 = state_34782__$1;
(statearr_34830_34904[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (34))){
var inst_34751 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
if(cljs.core.truth_(inst_34751)){
var statearr_34831_34905 = state_34782__$1;
(statearr_34831_34905[(1)] = (38));

} else {
var statearr_34832_34906 = state_34782__$1;
(statearr_34832_34906[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (17))){
var state_34782__$1 = state_34782;
var statearr_34833_34907 = state_34782__$1;
(statearr_34833_34907[(2)] = recompile_dependents);

(statearr_34833_34907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (3))){
var state_34782__$1 = state_34782;
var statearr_34834_34908 = state_34782__$1;
(statearr_34834_34908[(2)] = null);

(statearr_34834_34908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (12))){
var inst_34673 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34835_34909 = state_34782__$1;
(statearr_34835_34909[(2)] = inst_34673);

(statearr_34835_34909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (2))){
var inst_34635 = (state_34782[(13)]);
var inst_34642 = cljs.core.seq.call(null,inst_34635);
var inst_34643 = inst_34642;
var inst_34644 = null;
var inst_34645 = (0);
var inst_34646 = (0);
var state_34782__$1 = (function (){var statearr_34836 = state_34782;
(statearr_34836[(7)] = inst_34646);

(statearr_34836[(8)] = inst_34643);

(statearr_34836[(9)] = inst_34644);

(statearr_34836[(10)] = inst_34645);

return statearr_34836;
})();
var statearr_34837_34910 = state_34782__$1;
(statearr_34837_34910[(2)] = null);

(statearr_34837_34910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (23))){
var inst_34696 = (state_34782[(19)]);
var inst_34700 = (state_34782[(23)]);
var inst_34704 = (state_34782[(24)]);
var inst_34699 = (state_34782[(25)]);
var inst_34702 = (state_34782[(26)]);
var inst_34707 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34709 = (function (){var all_files = inst_34696;
var res_SINGLEQUOTE_ = inst_34699;
var res = inst_34700;
var files_not_loaded = inst_34702;
var dependencies_that_loaded = inst_34704;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34696,inst_34700,inst_34704,inst_34699,inst_34702,inst_34707,state_val_34783,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34708){
var map__34838 = p__34708;
var map__34838__$1 = ((((!((map__34838 == null)))?((((map__34838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34838):map__34838);
var request_url = cljs.core.get.call(null,map__34838__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34696,inst_34700,inst_34704,inst_34699,inst_34702,inst_34707,state_val_34783,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34710 = cljs.core.reverse.call(null,inst_34704);
var inst_34711 = cljs.core.map.call(null,inst_34709,inst_34710);
var inst_34712 = cljs.core.pr_str.call(null,inst_34711);
var inst_34713 = figwheel.client.utils.log.call(null,inst_34712);
var state_34782__$1 = (function (){var statearr_34840 = state_34782;
(statearr_34840[(31)] = inst_34707);

return statearr_34840;
})();
var statearr_34841_34911 = state_34782__$1;
(statearr_34841_34911[(2)] = inst_34713);

(statearr_34841_34911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (35))){
var state_34782__$1 = state_34782;
var statearr_34842_34912 = state_34782__$1;
(statearr_34842_34912[(2)] = true);

(statearr_34842_34912[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (19))){
var inst_34686 = (state_34782[(12)]);
var inst_34692 = figwheel.client.file_reloading.expand_files.call(null,inst_34686);
var state_34782__$1 = state_34782;
var statearr_34843_34913 = state_34782__$1;
(statearr_34843_34913[(2)] = inst_34692);

(statearr_34843_34913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (11))){
var state_34782__$1 = state_34782;
var statearr_34844_34914 = state_34782__$1;
(statearr_34844_34914[(2)] = null);

(statearr_34844_34914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (9))){
var inst_34675 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34845_34915 = state_34782__$1;
(statearr_34845_34915[(2)] = inst_34675);

(statearr_34845_34915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (5))){
var inst_34646 = (state_34782[(7)]);
var inst_34645 = (state_34782[(10)]);
var inst_34648 = (inst_34646 < inst_34645);
var inst_34649 = inst_34648;
var state_34782__$1 = state_34782;
if(cljs.core.truth_(inst_34649)){
var statearr_34846_34916 = state_34782__$1;
(statearr_34846_34916[(1)] = (7));

} else {
var statearr_34847_34917 = state_34782__$1;
(statearr_34847_34917[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (14))){
var inst_34656 = (state_34782[(22)]);
var inst_34665 = cljs.core.first.call(null,inst_34656);
var inst_34666 = figwheel.client.file_reloading.eval_body.call(null,inst_34665,opts);
var inst_34667 = cljs.core.next.call(null,inst_34656);
var inst_34643 = inst_34667;
var inst_34644 = null;
var inst_34645 = (0);
var inst_34646 = (0);
var state_34782__$1 = (function (){var statearr_34848 = state_34782;
(statearr_34848[(7)] = inst_34646);

(statearr_34848[(32)] = inst_34666);

(statearr_34848[(8)] = inst_34643);

(statearr_34848[(9)] = inst_34644);

(statearr_34848[(10)] = inst_34645);

return statearr_34848;
})();
var statearr_34849_34918 = state_34782__$1;
(statearr_34849_34918[(2)] = null);

(statearr_34849_34918[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (45))){
var state_34782__$1 = state_34782;
var statearr_34850_34919 = state_34782__$1;
(statearr_34850_34919[(2)] = null);

(statearr_34850_34919[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (26))){
var inst_34696 = (state_34782[(19)]);
var inst_34700 = (state_34782[(23)]);
var inst_34704 = (state_34782[(24)]);
var inst_34699 = (state_34782[(25)]);
var inst_34702 = (state_34782[(26)]);
var inst_34719 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34721 = (function (){var all_files = inst_34696;
var res_SINGLEQUOTE_ = inst_34699;
var res = inst_34700;
var files_not_loaded = inst_34702;
var dependencies_that_loaded = inst_34704;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34696,inst_34700,inst_34704,inst_34699,inst_34702,inst_34719,state_val_34783,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34720){
var map__34851 = p__34720;
var map__34851__$1 = ((((!((map__34851 == null)))?((((map__34851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34851):map__34851);
var namespace = cljs.core.get.call(null,map__34851__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34851__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34696,inst_34700,inst_34704,inst_34699,inst_34702,inst_34719,state_val_34783,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34722 = cljs.core.map.call(null,inst_34721,inst_34700);
var inst_34723 = cljs.core.pr_str.call(null,inst_34722);
var inst_34724 = figwheel.client.utils.log.call(null,inst_34723);
var inst_34725 = (function (){var all_files = inst_34696;
var res_SINGLEQUOTE_ = inst_34699;
var res = inst_34700;
var files_not_loaded = inst_34702;
var dependencies_that_loaded = inst_34704;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34696,inst_34700,inst_34704,inst_34699,inst_34702,inst_34719,inst_34721,inst_34722,inst_34723,inst_34724,state_val_34783,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34696,inst_34700,inst_34704,inst_34699,inst_34702,inst_34719,inst_34721,inst_34722,inst_34723,inst_34724,state_val_34783,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34726 = setTimeout(inst_34725,(10));
var state_34782__$1 = (function (){var statearr_34853 = state_34782;
(statearr_34853[(33)] = inst_34724);

(statearr_34853[(34)] = inst_34719);

return statearr_34853;
})();
var statearr_34854_34920 = state_34782__$1;
(statearr_34854_34920[(2)] = inst_34726);

(statearr_34854_34920[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (16))){
var state_34782__$1 = state_34782;
var statearr_34855_34921 = state_34782__$1;
(statearr_34855_34921[(2)] = reload_dependents);

(statearr_34855_34921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (38))){
var inst_34736 = (state_34782[(16)]);
var inst_34753 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34736);
var state_34782__$1 = state_34782;
var statearr_34856_34922 = state_34782__$1;
(statearr_34856_34922[(2)] = inst_34753);

(statearr_34856_34922[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (30))){
var state_34782__$1 = state_34782;
var statearr_34857_34923 = state_34782__$1;
(statearr_34857_34923[(2)] = null);

(statearr_34857_34923[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (10))){
var inst_34656 = (state_34782[(22)]);
var inst_34658 = cljs.core.chunked_seq_QMARK_.call(null,inst_34656);
var state_34782__$1 = state_34782;
if(inst_34658){
var statearr_34858_34924 = state_34782__$1;
(statearr_34858_34924[(1)] = (13));

} else {
var statearr_34859_34925 = state_34782__$1;
(statearr_34859_34925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (18))){
var inst_34690 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
if(cljs.core.truth_(inst_34690)){
var statearr_34860_34926 = state_34782__$1;
(statearr_34860_34926[(1)] = (19));

} else {
var statearr_34861_34927 = state_34782__$1;
(statearr_34861_34927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (42))){
var state_34782__$1 = state_34782;
var statearr_34862_34928 = state_34782__$1;
(statearr_34862_34928[(2)] = null);

(statearr_34862_34928[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (37))){
var inst_34748 = (state_34782[(2)]);
var state_34782__$1 = state_34782;
var statearr_34863_34929 = state_34782__$1;
(statearr_34863_34929[(2)] = inst_34748);

(statearr_34863_34929[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34783 === (8))){
var inst_34643 = (state_34782[(8)]);
var inst_34656 = (state_34782[(22)]);
var inst_34656__$1 = cljs.core.seq.call(null,inst_34643);
var state_34782__$1 = (function (){var statearr_34864 = state_34782;
(statearr_34864[(22)] = inst_34656__$1);

return statearr_34864;
})();
if(inst_34656__$1){
var statearr_34865_34930 = state_34782__$1;
(statearr_34865_34930[(1)] = (10));

} else {
var statearr_34866_34931 = state_34782__$1;
(statearr_34866_34931[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28644__auto__,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28645__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28645__auto____0 = (function (){
var statearr_34870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34870[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28645__auto__);

(statearr_34870[(1)] = (1));

return statearr_34870;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28645__auto____1 = (function (state_34782){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_34782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e34871){if((e34871 instanceof Object)){
var ex__28648__auto__ = e34871;
var statearr_34872_34932 = state_34782;
(statearr_34872_34932[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34933 = state_34782;
state_34782 = G__34933;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28645__auto__ = function(state_34782){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28645__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28645__auto____1.call(this,state_34782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28645__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28645__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28758__auto__ = (function (){var statearr_34873 = f__28757__auto__.call(null);
(statearr_34873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto__);

return statearr_34873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto__,map__34628,map__34628__$1,opts,before_jsload,on_jsload,reload_dependents,map__34629,map__34629__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28756__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34936,link){
var map__34939 = p__34936;
var map__34939__$1 = ((((!((map__34939 == null)))?((((map__34939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34939):map__34939);
var file = cljs.core.get.call(null,map__34939__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34939,map__34939__$1,file){
return (function (p1__34934_SHARP_,p2__34935_SHARP_){
if(cljs.core._EQ_.call(null,p1__34934_SHARP_,p2__34935_SHARP_)){
return p1__34934_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34939,map__34939__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34945){
var map__34946 = p__34945;
var map__34946__$1 = ((((!((map__34946 == null)))?((((map__34946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34946):map__34946);
var match_length = cljs.core.get.call(null,map__34946__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34946__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34941_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34941_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args34948 = [];
var len__25876__auto___34951 = arguments.length;
var i__25877__auto___34952 = (0);
while(true){
if((i__25877__auto___34952 < len__25876__auto___34951)){
args34948.push((arguments[i__25877__auto___34952]));

var G__34953 = (i__25877__auto___34952 + (1));
i__25877__auto___34952 = G__34953;
continue;
} else {
}
break;
}

var G__34950 = args34948.length;
switch (G__34950) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34948.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34955_SHARP_,p2__34956_SHARP_){
return cljs.core.assoc.call(null,p1__34955_SHARP_,cljs.core.get.call(null,p2__34956_SHARP_,key),p2__34956_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34957){
var map__34960 = p__34957;
var map__34960__$1 = ((((!((map__34960 == null)))?((((map__34960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34960):map__34960);
var f_data = map__34960__$1;
var file = cljs.core.get.call(null,map__34960__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34962,p__34963){
var map__34972 = p__34962;
var map__34972__$1 = ((((!((map__34972 == null)))?((((map__34972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34972):map__34972);
var opts = map__34972__$1;
var on_cssload = cljs.core.get.call(null,map__34972__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34973 = p__34963;
var map__34973__$1 = ((((!((map__34973 == null)))?((((map__34973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34973):map__34973);
var files_msg = map__34973__$1;
var files = cljs.core.get.call(null,map__34973__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34976_34980 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__34977_34981 = null;
var count__34978_34982 = (0);
var i__34979_34983 = (0);
while(true){
if((i__34979_34983 < count__34978_34982)){
var f_34984 = cljs.core._nth.call(null,chunk__34977_34981,i__34979_34983);
figwheel.client.file_reloading.reload_css_file.call(null,f_34984);

var G__34985 = seq__34976_34980;
var G__34986 = chunk__34977_34981;
var G__34987 = count__34978_34982;
var G__34988 = (i__34979_34983 + (1));
seq__34976_34980 = G__34985;
chunk__34977_34981 = G__34986;
count__34978_34982 = G__34987;
i__34979_34983 = G__34988;
continue;
} else {
var temp__4657__auto___34989 = cljs.core.seq.call(null,seq__34976_34980);
if(temp__4657__auto___34989){
var seq__34976_34990__$1 = temp__4657__auto___34989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34976_34990__$1)){
var c__25612__auto___34991 = cljs.core.chunk_first.call(null,seq__34976_34990__$1);
var G__34992 = cljs.core.chunk_rest.call(null,seq__34976_34990__$1);
var G__34993 = c__25612__auto___34991;
var G__34994 = cljs.core.count.call(null,c__25612__auto___34991);
var G__34995 = (0);
seq__34976_34980 = G__34992;
chunk__34977_34981 = G__34993;
count__34978_34982 = G__34994;
i__34979_34983 = G__34995;
continue;
} else {
var f_34996 = cljs.core.first.call(null,seq__34976_34990__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34996);

var G__34997 = cljs.core.next.call(null,seq__34976_34990__$1);
var G__34998 = null;
var G__34999 = (0);
var G__35000 = (0);
seq__34976_34980 = G__34997;
chunk__34977_34981 = G__34998;
count__34978_34982 = G__34999;
i__34979_34983 = G__35000;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__34972,map__34972__$1,opts,on_cssload,map__34973,map__34973__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__34972,map__34972__$1,opts,on_cssload,map__34973,map__34973__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1491429248486