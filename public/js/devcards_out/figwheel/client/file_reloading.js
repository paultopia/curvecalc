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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33946_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33946_SHARP_));
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
var seq__33951 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33952 = null;
var count__33953 = (0);
var i__33954 = (0);
while(true){
if((i__33954 < count__33953)){
var n = cljs.core._nth.call(null,chunk__33952,i__33954);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33955 = seq__33951;
var G__33956 = chunk__33952;
var G__33957 = count__33953;
var G__33958 = (i__33954 + (1));
seq__33951 = G__33955;
chunk__33952 = G__33956;
count__33953 = G__33957;
i__33954 = G__33958;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33951);
if(temp__4657__auto__){
var seq__33951__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33951__$1)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,seq__33951__$1);
var G__33959 = cljs.core.chunk_rest.call(null,seq__33951__$1);
var G__33960 = c__25612__auto__;
var G__33961 = cljs.core.count.call(null,c__25612__auto__);
var G__33962 = (0);
seq__33951 = G__33959;
chunk__33952 = G__33960;
count__33953 = G__33961;
i__33954 = G__33962;
continue;
} else {
var n = cljs.core.first.call(null,seq__33951__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33963 = cljs.core.next.call(null,seq__33951__$1);
var G__33964 = null;
var G__33965 = (0);
var G__33966 = (0);
seq__33951 = G__33963;
chunk__33952 = G__33964;
count__33953 = G__33965;
i__33954 = G__33966;
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

var seq__34017_34028 = cljs.core.seq.call(null,deps);
var chunk__34018_34029 = null;
var count__34019_34030 = (0);
var i__34020_34031 = (0);
while(true){
if((i__34020_34031 < count__34019_34030)){
var dep_34032 = cljs.core._nth.call(null,chunk__34018_34029,i__34020_34031);
topo_sort_helper_STAR_.call(null,dep_34032,(depth + (1)),state);

var G__34033 = seq__34017_34028;
var G__34034 = chunk__34018_34029;
var G__34035 = count__34019_34030;
var G__34036 = (i__34020_34031 + (1));
seq__34017_34028 = G__34033;
chunk__34018_34029 = G__34034;
count__34019_34030 = G__34035;
i__34020_34031 = G__34036;
continue;
} else {
var temp__4657__auto___34037 = cljs.core.seq.call(null,seq__34017_34028);
if(temp__4657__auto___34037){
var seq__34017_34038__$1 = temp__4657__auto___34037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34017_34038__$1)){
var c__25612__auto___34039 = cljs.core.chunk_first.call(null,seq__34017_34038__$1);
var G__34040 = cljs.core.chunk_rest.call(null,seq__34017_34038__$1);
var G__34041 = c__25612__auto___34039;
var G__34042 = cljs.core.count.call(null,c__25612__auto___34039);
var G__34043 = (0);
seq__34017_34028 = G__34040;
chunk__34018_34029 = G__34041;
count__34019_34030 = G__34042;
i__34020_34031 = G__34043;
continue;
} else {
var dep_34044 = cljs.core.first.call(null,seq__34017_34038__$1);
topo_sort_helper_STAR_.call(null,dep_34044,(depth + (1)),state);

var G__34045 = cljs.core.next.call(null,seq__34017_34038__$1);
var G__34046 = null;
var G__34047 = (0);
var G__34048 = (0);
seq__34017_34028 = G__34045;
chunk__34018_34029 = G__34046;
count__34019_34030 = G__34047;
i__34020_34031 = G__34048;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34021){
var vec__34025 = p__34021;
var seq__34026 = cljs.core.seq.call(null,vec__34025);
var first__34027 = cljs.core.first.call(null,seq__34026);
var seq__34026__$1 = cljs.core.next.call(null,seq__34026);
var x = first__34027;
var xs = seq__34026__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34025,seq__34026,first__34027,seq__34026__$1,x,xs,get_deps__$1){
return (function (p1__33967_SHARP_){
return clojure.set.difference.call(null,p1__33967_SHARP_,x);
});})(vec__34025,seq__34026,first__34027,seq__34026__$1,x,xs,get_deps__$1))
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
var seq__34061 = cljs.core.seq.call(null,provides);
var chunk__34062 = null;
var count__34063 = (0);
var i__34064 = (0);
while(true){
if((i__34064 < count__34063)){
var prov = cljs.core._nth.call(null,chunk__34062,i__34064);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34065_34073 = cljs.core.seq.call(null,requires);
var chunk__34066_34074 = null;
var count__34067_34075 = (0);
var i__34068_34076 = (0);
while(true){
if((i__34068_34076 < count__34067_34075)){
var req_34077 = cljs.core._nth.call(null,chunk__34066_34074,i__34068_34076);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34077,prov);

var G__34078 = seq__34065_34073;
var G__34079 = chunk__34066_34074;
var G__34080 = count__34067_34075;
var G__34081 = (i__34068_34076 + (1));
seq__34065_34073 = G__34078;
chunk__34066_34074 = G__34079;
count__34067_34075 = G__34080;
i__34068_34076 = G__34081;
continue;
} else {
var temp__4657__auto___34082 = cljs.core.seq.call(null,seq__34065_34073);
if(temp__4657__auto___34082){
var seq__34065_34083__$1 = temp__4657__auto___34082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34065_34083__$1)){
var c__25612__auto___34084 = cljs.core.chunk_first.call(null,seq__34065_34083__$1);
var G__34085 = cljs.core.chunk_rest.call(null,seq__34065_34083__$1);
var G__34086 = c__25612__auto___34084;
var G__34087 = cljs.core.count.call(null,c__25612__auto___34084);
var G__34088 = (0);
seq__34065_34073 = G__34085;
chunk__34066_34074 = G__34086;
count__34067_34075 = G__34087;
i__34068_34076 = G__34088;
continue;
} else {
var req_34089 = cljs.core.first.call(null,seq__34065_34083__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34089,prov);

var G__34090 = cljs.core.next.call(null,seq__34065_34083__$1);
var G__34091 = null;
var G__34092 = (0);
var G__34093 = (0);
seq__34065_34073 = G__34090;
chunk__34066_34074 = G__34091;
count__34067_34075 = G__34092;
i__34068_34076 = G__34093;
continue;
}
} else {
}
}
break;
}

var G__34094 = seq__34061;
var G__34095 = chunk__34062;
var G__34096 = count__34063;
var G__34097 = (i__34064 + (1));
seq__34061 = G__34094;
chunk__34062 = G__34095;
count__34063 = G__34096;
i__34064 = G__34097;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34061);
if(temp__4657__auto__){
var seq__34061__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34061__$1)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,seq__34061__$1);
var G__34098 = cljs.core.chunk_rest.call(null,seq__34061__$1);
var G__34099 = c__25612__auto__;
var G__34100 = cljs.core.count.call(null,c__25612__auto__);
var G__34101 = (0);
seq__34061 = G__34098;
chunk__34062 = G__34099;
count__34063 = G__34100;
i__34064 = G__34101;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34061__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34069_34102 = cljs.core.seq.call(null,requires);
var chunk__34070_34103 = null;
var count__34071_34104 = (0);
var i__34072_34105 = (0);
while(true){
if((i__34072_34105 < count__34071_34104)){
var req_34106 = cljs.core._nth.call(null,chunk__34070_34103,i__34072_34105);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34106,prov);

var G__34107 = seq__34069_34102;
var G__34108 = chunk__34070_34103;
var G__34109 = count__34071_34104;
var G__34110 = (i__34072_34105 + (1));
seq__34069_34102 = G__34107;
chunk__34070_34103 = G__34108;
count__34071_34104 = G__34109;
i__34072_34105 = G__34110;
continue;
} else {
var temp__4657__auto___34111__$1 = cljs.core.seq.call(null,seq__34069_34102);
if(temp__4657__auto___34111__$1){
var seq__34069_34112__$1 = temp__4657__auto___34111__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34069_34112__$1)){
var c__25612__auto___34113 = cljs.core.chunk_first.call(null,seq__34069_34112__$1);
var G__34114 = cljs.core.chunk_rest.call(null,seq__34069_34112__$1);
var G__34115 = c__25612__auto___34113;
var G__34116 = cljs.core.count.call(null,c__25612__auto___34113);
var G__34117 = (0);
seq__34069_34102 = G__34114;
chunk__34070_34103 = G__34115;
count__34071_34104 = G__34116;
i__34072_34105 = G__34117;
continue;
} else {
var req_34118 = cljs.core.first.call(null,seq__34069_34112__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34118,prov);

var G__34119 = cljs.core.next.call(null,seq__34069_34112__$1);
var G__34120 = null;
var G__34121 = (0);
var G__34122 = (0);
seq__34069_34102 = G__34119;
chunk__34070_34103 = G__34120;
count__34071_34104 = G__34121;
i__34072_34105 = G__34122;
continue;
}
} else {
}
}
break;
}

var G__34123 = cljs.core.next.call(null,seq__34061__$1);
var G__34124 = null;
var G__34125 = (0);
var G__34126 = (0);
seq__34061 = G__34123;
chunk__34062 = G__34124;
count__34063 = G__34125;
i__34064 = G__34126;
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
var seq__34131_34135 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34132_34136 = null;
var count__34133_34137 = (0);
var i__34134_34138 = (0);
while(true){
if((i__34134_34138 < count__34133_34137)){
var ns_34139 = cljs.core._nth.call(null,chunk__34132_34136,i__34134_34138);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34139);

var G__34140 = seq__34131_34135;
var G__34141 = chunk__34132_34136;
var G__34142 = count__34133_34137;
var G__34143 = (i__34134_34138 + (1));
seq__34131_34135 = G__34140;
chunk__34132_34136 = G__34141;
count__34133_34137 = G__34142;
i__34134_34138 = G__34143;
continue;
} else {
var temp__4657__auto___34144 = cljs.core.seq.call(null,seq__34131_34135);
if(temp__4657__auto___34144){
var seq__34131_34145__$1 = temp__4657__auto___34144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34131_34145__$1)){
var c__25612__auto___34146 = cljs.core.chunk_first.call(null,seq__34131_34145__$1);
var G__34147 = cljs.core.chunk_rest.call(null,seq__34131_34145__$1);
var G__34148 = c__25612__auto___34146;
var G__34149 = cljs.core.count.call(null,c__25612__auto___34146);
var G__34150 = (0);
seq__34131_34135 = G__34147;
chunk__34132_34136 = G__34148;
count__34133_34137 = G__34149;
i__34134_34138 = G__34150;
continue;
} else {
var ns_34151 = cljs.core.first.call(null,seq__34131_34145__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34151);

var G__34152 = cljs.core.next.call(null,seq__34131_34145__$1);
var G__34153 = null;
var G__34154 = (0);
var G__34155 = (0);
seq__34131_34135 = G__34152;
chunk__34132_34136 = G__34153;
count__34133_34137 = G__34154;
i__34134_34138 = G__34155;
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
var G__34156__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34157__i = 0, G__34157__a = new Array(arguments.length -  0);
while (G__34157__i < G__34157__a.length) {G__34157__a[G__34157__i] = arguments[G__34157__i + 0]; ++G__34157__i;}
  args = new cljs.core.IndexedSeq(G__34157__a,0);
} 
return G__34156__delegate.call(this,args);};
G__34156.cljs$lang$maxFixedArity = 0;
G__34156.cljs$lang$applyTo = (function (arglist__34158){
var args = cljs.core.seq(arglist__34158);
return G__34156__delegate(args);
});
G__34156.cljs$core$IFn$_invoke$arity$variadic = G__34156__delegate;
return G__34156;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34160 = cljs.core._EQ_;
var expr__34161 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34160.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34161))){
var path_parts = ((function (pred__34160,expr__34161){
return (function (p1__34159_SHARP_){
return clojure.string.split.call(null,p1__34159_SHARP_,/[\/\\]/);
});})(pred__34160,expr__34161))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34160,expr__34161){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34163){if((e34163 instanceof Error)){
var e = e34163;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34163;

}
}})());
});
;})(path_parts,sep,root,pred__34160,expr__34161))
} else {
if(cljs.core.truth_(pred__34160.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34161))){
return ((function (pred__34160,expr__34161){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34160,expr__34161){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34160,expr__34161))
);

return deferred.addErrback(((function (deferred,pred__34160,expr__34161){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34160,expr__34161))
);
});
;})(pred__34160,expr__34161))
} else {
return ((function (pred__34160,expr__34161){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34160,expr__34161))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34164,callback){
var map__34167 = p__34164;
var map__34167__$1 = ((((!((map__34167 == null)))?((((map__34167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34167):map__34167);
var file_msg = map__34167__$1;
var request_url = cljs.core.get.call(null,map__34167__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34167,map__34167__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34167,map__34167__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__){
return (function (state_34191){
var state_val_34192 = (state_34191[(1)]);
if((state_val_34192 === (7))){
var inst_34187 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34193_34213 = state_34191__$1;
(statearr_34193_34213[(2)] = inst_34187);

(statearr_34193_34213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (1))){
var state_34191__$1 = state_34191;
var statearr_34194_34214 = state_34191__$1;
(statearr_34194_34214[(2)] = null);

(statearr_34194_34214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (4))){
var inst_34171 = (state_34191[(7)]);
var inst_34171__$1 = (state_34191[(2)]);
var state_34191__$1 = (function (){var statearr_34195 = state_34191;
(statearr_34195[(7)] = inst_34171__$1);

return statearr_34195;
})();
if(cljs.core.truth_(inst_34171__$1)){
var statearr_34196_34215 = state_34191__$1;
(statearr_34196_34215[(1)] = (5));

} else {
var statearr_34197_34216 = state_34191__$1;
(statearr_34197_34216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (6))){
var state_34191__$1 = state_34191;
var statearr_34198_34217 = state_34191__$1;
(statearr_34198_34217[(2)] = null);

(statearr_34198_34217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (3))){
var inst_34189 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34191__$1,inst_34189);
} else {
if((state_val_34192 === (2))){
var state_34191__$1 = state_34191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34191__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34192 === (11))){
var inst_34183 = (state_34191[(2)]);
var state_34191__$1 = (function (){var statearr_34199 = state_34191;
(statearr_34199[(8)] = inst_34183);

return statearr_34199;
})();
var statearr_34200_34218 = state_34191__$1;
(statearr_34200_34218[(2)] = null);

(statearr_34200_34218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (9))){
var inst_34175 = (state_34191[(9)]);
var inst_34177 = (state_34191[(10)]);
var inst_34179 = inst_34177.call(null,inst_34175);
var state_34191__$1 = state_34191;
var statearr_34201_34219 = state_34191__$1;
(statearr_34201_34219[(2)] = inst_34179);

(statearr_34201_34219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (5))){
var inst_34171 = (state_34191[(7)]);
var inst_34173 = figwheel.client.file_reloading.blocking_load.call(null,inst_34171);
var state_34191__$1 = state_34191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34191__$1,(8),inst_34173);
} else {
if((state_val_34192 === (10))){
var inst_34175 = (state_34191[(9)]);
var inst_34181 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34175);
var state_34191__$1 = state_34191;
var statearr_34202_34220 = state_34191__$1;
(statearr_34202_34220[(2)] = inst_34181);

(statearr_34202_34220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (8))){
var inst_34171 = (state_34191[(7)]);
var inst_34177 = (state_34191[(10)]);
var inst_34175 = (state_34191[(2)]);
var inst_34176 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34177__$1 = cljs.core.get.call(null,inst_34176,inst_34171);
var state_34191__$1 = (function (){var statearr_34203 = state_34191;
(statearr_34203[(9)] = inst_34175);

(statearr_34203[(10)] = inst_34177__$1);

return statearr_34203;
})();
if(cljs.core.truth_(inst_34177__$1)){
var statearr_34204_34221 = state_34191__$1;
(statearr_34204_34221[(1)] = (9));

} else {
var statearr_34205_34222 = state_34191__$1;
(statearr_34205_34222[(1)] = (10));

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
});})(c__26973__auto__))
;
return ((function (switch__26861__auto__,c__26973__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26862__auto__ = null;
var figwheel$client$file_reloading$state_machine__26862__auto____0 = (function (){
var statearr_34209 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34209[(0)] = figwheel$client$file_reloading$state_machine__26862__auto__);

(statearr_34209[(1)] = (1));

return statearr_34209;
});
var figwheel$client$file_reloading$state_machine__26862__auto____1 = (function (state_34191){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_34191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e34210){if((e34210 instanceof Object)){
var ex__26865__auto__ = e34210;
var statearr_34211_34223 = state_34191;
(statearr_34211_34223[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34224 = state_34191;
state_34191 = G__34224;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26862__auto__ = function(state_34191){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26862__auto____1.call(this,state_34191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26862__auto____0;
figwheel$client$file_reloading$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26862__auto____1;
return figwheel$client$file_reloading$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__))
})();
var state__26975__auto__ = (function (){var statearr_34212 = f__26974__auto__.call(null);
(statearr_34212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_34212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__))
);

return c__26973__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34225,callback){
var map__34228 = p__34225;
var map__34228__$1 = ((((!((map__34228 == null)))?((((map__34228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34228):map__34228);
var file_msg = map__34228__$1;
var namespace = cljs.core.get.call(null,map__34228__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34228,map__34228__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34228,map__34228__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34230){
var map__34233 = p__34230;
var map__34233__$1 = ((((!((map__34233 == null)))?((((map__34233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34233):map__34233);
var file_msg = map__34233__$1;
var namespace = cljs.core.get.call(null,map__34233__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34235,callback){
var map__34238 = p__34235;
var map__34238__$1 = ((((!((map__34238 == null)))?((((map__34238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34238):map__34238);
var file_msg = map__34238__$1;
var request_url = cljs.core.get.call(null,map__34238__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34238__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26973__auto___34342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___34342,out){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___34342,out){
return (function (state_34324){
var state_val_34325 = (state_34324[(1)]);
if((state_val_34325 === (1))){
var inst_34298 = cljs.core.seq.call(null,files);
var inst_34299 = cljs.core.first.call(null,inst_34298);
var inst_34300 = cljs.core.next.call(null,inst_34298);
var inst_34301 = files;
var state_34324__$1 = (function (){var statearr_34326 = state_34324;
(statearr_34326[(7)] = inst_34301);

(statearr_34326[(8)] = inst_34299);

(statearr_34326[(9)] = inst_34300);

return statearr_34326;
})();
var statearr_34327_34343 = state_34324__$1;
(statearr_34327_34343[(2)] = null);

(statearr_34327_34343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (2))){
var inst_34301 = (state_34324[(7)]);
var inst_34307 = (state_34324[(10)]);
var inst_34306 = cljs.core.seq.call(null,inst_34301);
var inst_34307__$1 = cljs.core.first.call(null,inst_34306);
var inst_34308 = cljs.core.next.call(null,inst_34306);
var inst_34309 = (inst_34307__$1 == null);
var inst_34310 = cljs.core.not.call(null,inst_34309);
var state_34324__$1 = (function (){var statearr_34328 = state_34324;
(statearr_34328[(11)] = inst_34308);

(statearr_34328[(10)] = inst_34307__$1);

return statearr_34328;
})();
if(inst_34310){
var statearr_34329_34344 = state_34324__$1;
(statearr_34329_34344[(1)] = (4));

} else {
var statearr_34330_34345 = state_34324__$1;
(statearr_34330_34345[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (3))){
var inst_34322 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34324__$1,inst_34322);
} else {
if((state_val_34325 === (4))){
var inst_34307 = (state_34324[(10)]);
var inst_34312 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34307);
var state_34324__$1 = state_34324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34324__$1,(7),inst_34312);
} else {
if((state_val_34325 === (5))){
var inst_34318 = cljs.core.async.close_BANG_.call(null,out);
var state_34324__$1 = state_34324;
var statearr_34331_34346 = state_34324__$1;
(statearr_34331_34346[(2)] = inst_34318);

(statearr_34331_34346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (6))){
var inst_34320 = (state_34324[(2)]);
var state_34324__$1 = state_34324;
var statearr_34332_34347 = state_34324__$1;
(statearr_34332_34347[(2)] = inst_34320);

(statearr_34332_34347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34325 === (7))){
var inst_34308 = (state_34324[(11)]);
var inst_34314 = (state_34324[(2)]);
var inst_34315 = cljs.core.async.put_BANG_.call(null,out,inst_34314);
var inst_34301 = inst_34308;
var state_34324__$1 = (function (){var statearr_34333 = state_34324;
(statearr_34333[(12)] = inst_34315);

(statearr_34333[(7)] = inst_34301);

return statearr_34333;
})();
var statearr_34334_34348 = state_34324__$1;
(statearr_34334_34348[(2)] = null);

(statearr_34334_34348[(1)] = (2));


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
});})(c__26973__auto___34342,out))
;
return ((function (switch__26861__auto__,c__26973__auto___34342,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto____0 = (function (){
var statearr_34338 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34338[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto__);

(statearr_34338[(1)] = (1));

return statearr_34338;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto____1 = (function (state_34324){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_34324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e34339){if((e34339 instanceof Object)){
var ex__26865__auto__ = e34339;
var statearr_34340_34349 = state_34324;
(statearr_34340_34349[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34350 = state_34324;
state_34324 = G__34350;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto__ = function(state_34324){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto____1.call(this,state_34324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___34342,out))
})();
var state__26975__auto__ = (function (){var statearr_34341 = f__26974__auto__.call(null);
(statearr_34341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___34342);

return statearr_34341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___34342,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34351,opts){
var map__34355 = p__34351;
var map__34355__$1 = ((((!((map__34355 == null)))?((((map__34355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34355):map__34355);
var eval_body__$1 = cljs.core.get.call(null,map__34355__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34355__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34357){var e = e34357;
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
return (function (p1__34358_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34358_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34367){
var vec__34368 = p__34367;
var k = cljs.core.nth.call(null,vec__34368,(0),null);
var v = cljs.core.nth.call(null,vec__34368,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34371){
var vec__34372 = p__34371;
var k = cljs.core.nth.call(null,vec__34372,(0),null);
var v = cljs.core.nth.call(null,vec__34372,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34378,p__34379){
var map__34626 = p__34378;
var map__34626__$1 = ((((!((map__34626 == null)))?((((map__34626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34626):map__34626);
var opts = map__34626__$1;
var before_jsload = cljs.core.get.call(null,map__34626__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34626__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34626__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34627 = p__34379;
var map__34627__$1 = ((((!((map__34627 == null)))?((((map__34627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34627):map__34627);
var msg = map__34627__$1;
var files = cljs.core.get.call(null,map__34627__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34627__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34627__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34780){
var state_val_34781 = (state_34780[(1)]);
if((state_val_34781 === (7))){
var inst_34643 = (state_34780[(7)]);
var inst_34642 = (state_34780[(8)]);
var inst_34644 = (state_34780[(9)]);
var inst_34641 = (state_34780[(10)]);
var inst_34649 = cljs.core._nth.call(null,inst_34642,inst_34644);
var inst_34650 = figwheel.client.file_reloading.eval_body.call(null,inst_34649,opts);
var inst_34651 = (inst_34644 + (1));
var tmp34782 = inst_34643;
var tmp34783 = inst_34642;
var tmp34784 = inst_34641;
var inst_34641__$1 = tmp34784;
var inst_34642__$1 = tmp34783;
var inst_34643__$1 = tmp34782;
var inst_34644__$1 = inst_34651;
var state_34780__$1 = (function (){var statearr_34785 = state_34780;
(statearr_34785[(7)] = inst_34643__$1);

(statearr_34785[(11)] = inst_34650);

(statearr_34785[(8)] = inst_34642__$1);

(statearr_34785[(9)] = inst_34644__$1);

(statearr_34785[(10)] = inst_34641__$1);

return statearr_34785;
})();
var statearr_34786_34872 = state_34780__$1;
(statearr_34786_34872[(2)] = null);

(statearr_34786_34872[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (20))){
var inst_34684 = (state_34780[(12)]);
var inst_34692 = figwheel.client.file_reloading.sort_files.call(null,inst_34684);
var state_34780__$1 = state_34780;
var statearr_34787_34873 = state_34780__$1;
(statearr_34787_34873[(2)] = inst_34692);

(statearr_34787_34873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (27))){
var state_34780__$1 = state_34780;
var statearr_34788_34874 = state_34780__$1;
(statearr_34788_34874[(2)] = null);

(statearr_34788_34874[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (1))){
var inst_34633 = (state_34780[(13)]);
var inst_34630 = before_jsload.call(null,files);
var inst_34631 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34632 = (function (){return ((function (inst_34633,inst_34630,inst_34631,state_val_34781,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34375_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34375_SHARP_);
});
;})(inst_34633,inst_34630,inst_34631,state_val_34781,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34633__$1 = cljs.core.filter.call(null,inst_34632,files);
var inst_34634 = cljs.core.not_empty.call(null,inst_34633__$1);
var state_34780__$1 = (function (){var statearr_34789 = state_34780;
(statearr_34789[(14)] = inst_34631);

(statearr_34789[(13)] = inst_34633__$1);

(statearr_34789[(15)] = inst_34630);

return statearr_34789;
})();
if(cljs.core.truth_(inst_34634)){
var statearr_34790_34875 = state_34780__$1;
(statearr_34790_34875[(1)] = (2));

} else {
var statearr_34791_34876 = state_34780__$1;
(statearr_34791_34876[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (24))){
var state_34780__$1 = state_34780;
var statearr_34792_34877 = state_34780__$1;
(statearr_34792_34877[(2)] = null);

(statearr_34792_34877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (39))){
var inst_34734 = (state_34780[(16)]);
var state_34780__$1 = state_34780;
var statearr_34793_34878 = state_34780__$1;
(statearr_34793_34878[(2)] = inst_34734);

(statearr_34793_34878[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (46))){
var inst_34775 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
var statearr_34794_34879 = state_34780__$1;
(statearr_34794_34879[(2)] = inst_34775);

(statearr_34794_34879[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (4))){
var inst_34678 = (state_34780[(2)]);
var inst_34679 = cljs.core.List.EMPTY;
var inst_34680 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34679);
var inst_34681 = (function (){return ((function (inst_34678,inst_34679,inst_34680,state_val_34781,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34376_SHARP_){
var and__24789__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34376_SHARP_);
if(cljs.core.truth_(and__24789__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34376_SHARP_));
} else {
return and__24789__auto__;
}
});
;})(inst_34678,inst_34679,inst_34680,state_val_34781,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34682 = cljs.core.filter.call(null,inst_34681,files);
var inst_34683 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34684 = cljs.core.concat.call(null,inst_34682,inst_34683);
var state_34780__$1 = (function (){var statearr_34795 = state_34780;
(statearr_34795[(12)] = inst_34684);

(statearr_34795[(17)] = inst_34678);

(statearr_34795[(18)] = inst_34680);

return statearr_34795;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34796_34880 = state_34780__$1;
(statearr_34796_34880[(1)] = (16));

} else {
var statearr_34797_34881 = state_34780__$1;
(statearr_34797_34881[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (15))){
var inst_34668 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
var statearr_34798_34882 = state_34780__$1;
(statearr_34798_34882[(2)] = inst_34668);

(statearr_34798_34882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (21))){
var inst_34694 = (state_34780[(19)]);
var inst_34694__$1 = (state_34780[(2)]);
var inst_34695 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34694__$1);
var state_34780__$1 = (function (){var statearr_34799 = state_34780;
(statearr_34799[(19)] = inst_34694__$1);

return statearr_34799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34780__$1,(22),inst_34695);
} else {
if((state_val_34781 === (31))){
var inst_34778 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34780__$1,inst_34778);
} else {
if((state_val_34781 === (32))){
var inst_34734 = (state_34780[(16)]);
var inst_34739 = inst_34734.cljs$lang$protocol_mask$partition0$;
var inst_34740 = (inst_34739 & (64));
var inst_34741 = inst_34734.cljs$core$ISeq$;
var inst_34742 = (inst_34740) || (inst_34741);
var state_34780__$1 = state_34780;
if(cljs.core.truth_(inst_34742)){
var statearr_34800_34883 = state_34780__$1;
(statearr_34800_34883[(1)] = (35));

} else {
var statearr_34801_34884 = state_34780__$1;
(statearr_34801_34884[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (40))){
var inst_34755 = (state_34780[(20)]);
var inst_34754 = (state_34780[(2)]);
var inst_34755__$1 = cljs.core.get.call(null,inst_34754,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34756 = cljs.core.get.call(null,inst_34754,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34757 = cljs.core.not_empty.call(null,inst_34755__$1);
var state_34780__$1 = (function (){var statearr_34802 = state_34780;
(statearr_34802[(20)] = inst_34755__$1);

(statearr_34802[(21)] = inst_34756);

return statearr_34802;
})();
if(cljs.core.truth_(inst_34757)){
var statearr_34803_34885 = state_34780__$1;
(statearr_34803_34885[(1)] = (41));

} else {
var statearr_34804_34886 = state_34780__$1;
(statearr_34804_34886[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (33))){
var state_34780__$1 = state_34780;
var statearr_34805_34887 = state_34780__$1;
(statearr_34805_34887[(2)] = false);

(statearr_34805_34887[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (13))){
var inst_34654 = (state_34780[(22)]);
var inst_34658 = cljs.core.chunk_first.call(null,inst_34654);
var inst_34659 = cljs.core.chunk_rest.call(null,inst_34654);
var inst_34660 = cljs.core.count.call(null,inst_34658);
var inst_34641 = inst_34659;
var inst_34642 = inst_34658;
var inst_34643 = inst_34660;
var inst_34644 = (0);
var state_34780__$1 = (function (){var statearr_34806 = state_34780;
(statearr_34806[(7)] = inst_34643);

(statearr_34806[(8)] = inst_34642);

(statearr_34806[(9)] = inst_34644);

(statearr_34806[(10)] = inst_34641);

return statearr_34806;
})();
var statearr_34807_34888 = state_34780__$1;
(statearr_34807_34888[(2)] = null);

(statearr_34807_34888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (22))){
var inst_34698 = (state_34780[(23)]);
var inst_34694 = (state_34780[(19)]);
var inst_34697 = (state_34780[(24)]);
var inst_34702 = (state_34780[(25)]);
var inst_34697__$1 = (state_34780[(2)]);
var inst_34698__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34697__$1);
var inst_34699 = (function (){var all_files = inst_34694;
var res_SINGLEQUOTE_ = inst_34697__$1;
var res = inst_34698__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34698,inst_34694,inst_34697,inst_34702,inst_34697__$1,inst_34698__$1,state_val_34781,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34377_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34377_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34698,inst_34694,inst_34697,inst_34702,inst_34697__$1,inst_34698__$1,state_val_34781,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34700 = cljs.core.filter.call(null,inst_34699,inst_34697__$1);
var inst_34701 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34702__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34701);
var inst_34703 = cljs.core.not_empty.call(null,inst_34702__$1);
var state_34780__$1 = (function (){var statearr_34808 = state_34780;
(statearr_34808[(23)] = inst_34698__$1);

(statearr_34808[(26)] = inst_34700);

(statearr_34808[(24)] = inst_34697__$1);

(statearr_34808[(25)] = inst_34702__$1);

return statearr_34808;
})();
if(cljs.core.truth_(inst_34703)){
var statearr_34809_34889 = state_34780__$1;
(statearr_34809_34889[(1)] = (23));

} else {
var statearr_34810_34890 = state_34780__$1;
(statearr_34810_34890[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (36))){
var state_34780__$1 = state_34780;
var statearr_34811_34891 = state_34780__$1;
(statearr_34811_34891[(2)] = false);

(statearr_34811_34891[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (41))){
var inst_34755 = (state_34780[(20)]);
var inst_34759 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34760 = cljs.core.map.call(null,inst_34759,inst_34755);
var inst_34761 = cljs.core.pr_str.call(null,inst_34760);
var inst_34762 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34761)].join('');
var inst_34763 = figwheel.client.utils.log.call(null,inst_34762);
var state_34780__$1 = state_34780;
var statearr_34812_34892 = state_34780__$1;
(statearr_34812_34892[(2)] = inst_34763);

(statearr_34812_34892[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (43))){
var inst_34756 = (state_34780[(21)]);
var inst_34766 = (state_34780[(2)]);
var inst_34767 = cljs.core.not_empty.call(null,inst_34756);
var state_34780__$1 = (function (){var statearr_34813 = state_34780;
(statearr_34813[(27)] = inst_34766);

return statearr_34813;
})();
if(cljs.core.truth_(inst_34767)){
var statearr_34814_34893 = state_34780__$1;
(statearr_34814_34893[(1)] = (44));

} else {
var statearr_34815_34894 = state_34780__$1;
(statearr_34815_34894[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (29))){
var inst_34698 = (state_34780[(23)]);
var inst_34700 = (state_34780[(26)]);
var inst_34734 = (state_34780[(16)]);
var inst_34694 = (state_34780[(19)]);
var inst_34697 = (state_34780[(24)]);
var inst_34702 = (state_34780[(25)]);
var inst_34730 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34733 = (function (){var all_files = inst_34694;
var res_SINGLEQUOTE_ = inst_34697;
var res = inst_34698;
var files_not_loaded = inst_34700;
var dependencies_that_loaded = inst_34702;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34698,inst_34700,inst_34734,inst_34694,inst_34697,inst_34702,inst_34730,state_val_34781,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34732){
var map__34816 = p__34732;
var map__34816__$1 = ((((!((map__34816 == null)))?((((map__34816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34816):map__34816);
var namespace = cljs.core.get.call(null,map__34816__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34698,inst_34700,inst_34734,inst_34694,inst_34697,inst_34702,inst_34730,state_val_34781,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34734__$1 = cljs.core.group_by.call(null,inst_34733,inst_34700);
var inst_34736 = (inst_34734__$1 == null);
var inst_34737 = cljs.core.not.call(null,inst_34736);
var state_34780__$1 = (function (){var statearr_34818 = state_34780;
(statearr_34818[(28)] = inst_34730);

(statearr_34818[(16)] = inst_34734__$1);

return statearr_34818;
})();
if(inst_34737){
var statearr_34819_34895 = state_34780__$1;
(statearr_34819_34895[(1)] = (32));

} else {
var statearr_34820_34896 = state_34780__$1;
(statearr_34820_34896[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (44))){
var inst_34756 = (state_34780[(21)]);
var inst_34769 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34756);
var inst_34770 = cljs.core.pr_str.call(null,inst_34769);
var inst_34771 = [cljs.core.str("not required: "),cljs.core.str(inst_34770)].join('');
var inst_34772 = figwheel.client.utils.log.call(null,inst_34771);
var state_34780__$1 = state_34780;
var statearr_34821_34897 = state_34780__$1;
(statearr_34821_34897[(2)] = inst_34772);

(statearr_34821_34897[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (6))){
var inst_34675 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
var statearr_34822_34898 = state_34780__$1;
(statearr_34822_34898[(2)] = inst_34675);

(statearr_34822_34898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (28))){
var inst_34700 = (state_34780[(26)]);
var inst_34727 = (state_34780[(2)]);
var inst_34728 = cljs.core.not_empty.call(null,inst_34700);
var state_34780__$1 = (function (){var statearr_34823 = state_34780;
(statearr_34823[(29)] = inst_34727);

return statearr_34823;
})();
if(cljs.core.truth_(inst_34728)){
var statearr_34824_34899 = state_34780__$1;
(statearr_34824_34899[(1)] = (29));

} else {
var statearr_34825_34900 = state_34780__$1;
(statearr_34825_34900[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (25))){
var inst_34698 = (state_34780[(23)]);
var inst_34714 = (state_34780[(2)]);
var inst_34715 = cljs.core.not_empty.call(null,inst_34698);
var state_34780__$1 = (function (){var statearr_34826 = state_34780;
(statearr_34826[(30)] = inst_34714);

return statearr_34826;
})();
if(cljs.core.truth_(inst_34715)){
var statearr_34827_34901 = state_34780__$1;
(statearr_34827_34901[(1)] = (26));

} else {
var statearr_34828_34902 = state_34780__$1;
(statearr_34828_34902[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (34))){
var inst_34749 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
if(cljs.core.truth_(inst_34749)){
var statearr_34829_34903 = state_34780__$1;
(statearr_34829_34903[(1)] = (38));

} else {
var statearr_34830_34904 = state_34780__$1;
(statearr_34830_34904[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (17))){
var state_34780__$1 = state_34780;
var statearr_34831_34905 = state_34780__$1;
(statearr_34831_34905[(2)] = recompile_dependents);

(statearr_34831_34905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (3))){
var state_34780__$1 = state_34780;
var statearr_34832_34906 = state_34780__$1;
(statearr_34832_34906[(2)] = null);

(statearr_34832_34906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (12))){
var inst_34671 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
var statearr_34833_34907 = state_34780__$1;
(statearr_34833_34907[(2)] = inst_34671);

(statearr_34833_34907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (2))){
var inst_34633 = (state_34780[(13)]);
var inst_34640 = cljs.core.seq.call(null,inst_34633);
var inst_34641 = inst_34640;
var inst_34642 = null;
var inst_34643 = (0);
var inst_34644 = (0);
var state_34780__$1 = (function (){var statearr_34834 = state_34780;
(statearr_34834[(7)] = inst_34643);

(statearr_34834[(8)] = inst_34642);

(statearr_34834[(9)] = inst_34644);

(statearr_34834[(10)] = inst_34641);

return statearr_34834;
})();
var statearr_34835_34908 = state_34780__$1;
(statearr_34835_34908[(2)] = null);

(statearr_34835_34908[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (23))){
var inst_34698 = (state_34780[(23)]);
var inst_34700 = (state_34780[(26)]);
var inst_34694 = (state_34780[(19)]);
var inst_34697 = (state_34780[(24)]);
var inst_34702 = (state_34780[(25)]);
var inst_34705 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34707 = (function (){var all_files = inst_34694;
var res_SINGLEQUOTE_ = inst_34697;
var res = inst_34698;
var files_not_loaded = inst_34700;
var dependencies_that_loaded = inst_34702;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34698,inst_34700,inst_34694,inst_34697,inst_34702,inst_34705,state_val_34781,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34706){
var map__34836 = p__34706;
var map__34836__$1 = ((((!((map__34836 == null)))?((((map__34836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34836):map__34836);
var request_url = cljs.core.get.call(null,map__34836__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34698,inst_34700,inst_34694,inst_34697,inst_34702,inst_34705,state_val_34781,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34708 = cljs.core.reverse.call(null,inst_34702);
var inst_34709 = cljs.core.map.call(null,inst_34707,inst_34708);
var inst_34710 = cljs.core.pr_str.call(null,inst_34709);
var inst_34711 = figwheel.client.utils.log.call(null,inst_34710);
var state_34780__$1 = (function (){var statearr_34838 = state_34780;
(statearr_34838[(31)] = inst_34705);

return statearr_34838;
})();
var statearr_34839_34909 = state_34780__$1;
(statearr_34839_34909[(2)] = inst_34711);

(statearr_34839_34909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (35))){
var state_34780__$1 = state_34780;
var statearr_34840_34910 = state_34780__$1;
(statearr_34840_34910[(2)] = true);

(statearr_34840_34910[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (19))){
var inst_34684 = (state_34780[(12)]);
var inst_34690 = figwheel.client.file_reloading.expand_files.call(null,inst_34684);
var state_34780__$1 = state_34780;
var statearr_34841_34911 = state_34780__$1;
(statearr_34841_34911[(2)] = inst_34690);

(statearr_34841_34911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (11))){
var state_34780__$1 = state_34780;
var statearr_34842_34912 = state_34780__$1;
(statearr_34842_34912[(2)] = null);

(statearr_34842_34912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (9))){
var inst_34673 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
var statearr_34843_34913 = state_34780__$1;
(statearr_34843_34913[(2)] = inst_34673);

(statearr_34843_34913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (5))){
var inst_34643 = (state_34780[(7)]);
var inst_34644 = (state_34780[(9)]);
var inst_34646 = (inst_34644 < inst_34643);
var inst_34647 = inst_34646;
var state_34780__$1 = state_34780;
if(cljs.core.truth_(inst_34647)){
var statearr_34844_34914 = state_34780__$1;
(statearr_34844_34914[(1)] = (7));

} else {
var statearr_34845_34915 = state_34780__$1;
(statearr_34845_34915[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (14))){
var inst_34654 = (state_34780[(22)]);
var inst_34663 = cljs.core.first.call(null,inst_34654);
var inst_34664 = figwheel.client.file_reloading.eval_body.call(null,inst_34663,opts);
var inst_34665 = cljs.core.next.call(null,inst_34654);
var inst_34641 = inst_34665;
var inst_34642 = null;
var inst_34643 = (0);
var inst_34644 = (0);
var state_34780__$1 = (function (){var statearr_34846 = state_34780;
(statearr_34846[(7)] = inst_34643);

(statearr_34846[(32)] = inst_34664);

(statearr_34846[(8)] = inst_34642);

(statearr_34846[(9)] = inst_34644);

(statearr_34846[(10)] = inst_34641);

return statearr_34846;
})();
var statearr_34847_34916 = state_34780__$1;
(statearr_34847_34916[(2)] = null);

(statearr_34847_34916[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (45))){
var state_34780__$1 = state_34780;
var statearr_34848_34917 = state_34780__$1;
(statearr_34848_34917[(2)] = null);

(statearr_34848_34917[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (26))){
var inst_34698 = (state_34780[(23)]);
var inst_34700 = (state_34780[(26)]);
var inst_34694 = (state_34780[(19)]);
var inst_34697 = (state_34780[(24)]);
var inst_34702 = (state_34780[(25)]);
var inst_34717 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34719 = (function (){var all_files = inst_34694;
var res_SINGLEQUOTE_ = inst_34697;
var res = inst_34698;
var files_not_loaded = inst_34700;
var dependencies_that_loaded = inst_34702;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34698,inst_34700,inst_34694,inst_34697,inst_34702,inst_34717,state_val_34781,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34718){
var map__34849 = p__34718;
var map__34849__$1 = ((((!((map__34849 == null)))?((((map__34849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34849):map__34849);
var namespace = cljs.core.get.call(null,map__34849__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34849__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34698,inst_34700,inst_34694,inst_34697,inst_34702,inst_34717,state_val_34781,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34720 = cljs.core.map.call(null,inst_34719,inst_34698);
var inst_34721 = cljs.core.pr_str.call(null,inst_34720);
var inst_34722 = figwheel.client.utils.log.call(null,inst_34721);
var inst_34723 = (function (){var all_files = inst_34694;
var res_SINGLEQUOTE_ = inst_34697;
var res = inst_34698;
var files_not_loaded = inst_34700;
var dependencies_that_loaded = inst_34702;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34698,inst_34700,inst_34694,inst_34697,inst_34702,inst_34717,inst_34719,inst_34720,inst_34721,inst_34722,state_val_34781,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34698,inst_34700,inst_34694,inst_34697,inst_34702,inst_34717,inst_34719,inst_34720,inst_34721,inst_34722,state_val_34781,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34724 = setTimeout(inst_34723,(10));
var state_34780__$1 = (function (){var statearr_34851 = state_34780;
(statearr_34851[(33)] = inst_34717);

(statearr_34851[(34)] = inst_34722);

return statearr_34851;
})();
var statearr_34852_34918 = state_34780__$1;
(statearr_34852_34918[(2)] = inst_34724);

(statearr_34852_34918[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (16))){
var state_34780__$1 = state_34780;
var statearr_34853_34919 = state_34780__$1;
(statearr_34853_34919[(2)] = reload_dependents);

(statearr_34853_34919[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (38))){
var inst_34734 = (state_34780[(16)]);
var inst_34751 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34734);
var state_34780__$1 = state_34780;
var statearr_34854_34920 = state_34780__$1;
(statearr_34854_34920[(2)] = inst_34751);

(statearr_34854_34920[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (30))){
var state_34780__$1 = state_34780;
var statearr_34855_34921 = state_34780__$1;
(statearr_34855_34921[(2)] = null);

(statearr_34855_34921[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (10))){
var inst_34654 = (state_34780[(22)]);
var inst_34656 = cljs.core.chunked_seq_QMARK_.call(null,inst_34654);
var state_34780__$1 = state_34780;
if(inst_34656){
var statearr_34856_34922 = state_34780__$1;
(statearr_34856_34922[(1)] = (13));

} else {
var statearr_34857_34923 = state_34780__$1;
(statearr_34857_34923[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (18))){
var inst_34688 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
if(cljs.core.truth_(inst_34688)){
var statearr_34858_34924 = state_34780__$1;
(statearr_34858_34924[(1)] = (19));

} else {
var statearr_34859_34925 = state_34780__$1;
(statearr_34859_34925[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (42))){
var state_34780__$1 = state_34780;
var statearr_34860_34926 = state_34780__$1;
(statearr_34860_34926[(2)] = null);

(statearr_34860_34926[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (37))){
var inst_34746 = (state_34780[(2)]);
var state_34780__$1 = state_34780;
var statearr_34861_34927 = state_34780__$1;
(statearr_34861_34927[(2)] = inst_34746);

(statearr_34861_34927[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34781 === (8))){
var inst_34654 = (state_34780[(22)]);
var inst_34641 = (state_34780[(10)]);
var inst_34654__$1 = cljs.core.seq.call(null,inst_34641);
var state_34780__$1 = (function (){var statearr_34862 = state_34780;
(statearr_34862[(22)] = inst_34654__$1);

return statearr_34862;
})();
if(inst_34654__$1){
var statearr_34863_34928 = state_34780__$1;
(statearr_34863_34928[(1)] = (10));

} else {
var statearr_34864_34929 = state_34780__$1;
(statearr_34864_34929[(1)] = (11));

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
});})(c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26861__auto__,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto____0 = (function (){
var statearr_34868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34868[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto__);

(statearr_34868[(1)] = (1));

return statearr_34868;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto____1 = (function (state_34780){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_34780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e34869){if((e34869 instanceof Object)){
var ex__26865__auto__ = e34869;
var statearr_34870_34930 = state_34780;
(statearr_34870_34930[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34931 = state_34780;
state_34780 = G__34931;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto__ = function(state_34780){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto____1.call(this,state_34780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26975__auto__ = (function (){var statearr_34871 = f__26974__auto__.call(null);
(statearr_34871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_34871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__,map__34626,map__34626__$1,opts,before_jsload,on_jsload,reload_dependents,map__34627,map__34627__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26973__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34934,link){
var map__34937 = p__34934;
var map__34937__$1 = ((((!((map__34937 == null)))?((((map__34937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34937):map__34937);
var file = cljs.core.get.call(null,map__34937__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34937,map__34937__$1,file){
return (function (p1__34932_SHARP_,p2__34933_SHARP_){
if(cljs.core._EQ_.call(null,p1__34932_SHARP_,p2__34933_SHARP_)){
return p1__34932_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34937,map__34937__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34943){
var map__34944 = p__34943;
var map__34944__$1 = ((((!((map__34944 == null)))?((((map__34944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34944):map__34944);
var match_length = cljs.core.get.call(null,map__34944__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34944__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34939_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34939_SHARP_);
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
var args34946 = [];
var len__25876__auto___34949 = arguments.length;
var i__25877__auto___34950 = (0);
while(true){
if((i__25877__auto___34950 < len__25876__auto___34949)){
args34946.push((arguments[i__25877__auto___34950]));

var G__34951 = (i__25877__auto___34950 + (1));
i__25877__auto___34950 = G__34951;
continue;
} else {
}
break;
}

var G__34948 = args34946.length;
switch (G__34948) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34946.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34953_SHARP_,p2__34954_SHARP_){
return cljs.core.assoc.call(null,p1__34953_SHARP_,cljs.core.get.call(null,p2__34954_SHARP_,key),p2__34954_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34955){
var map__34958 = p__34955;
var map__34958__$1 = ((((!((map__34958 == null)))?((((map__34958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34958):map__34958);
var f_data = map__34958__$1;
var file = cljs.core.get.call(null,map__34958__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34960,p__34961){
var map__34970 = p__34960;
var map__34970__$1 = ((((!((map__34970 == null)))?((((map__34970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34970):map__34970);
var opts = map__34970__$1;
var on_cssload = cljs.core.get.call(null,map__34970__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34971 = p__34961;
var map__34971__$1 = ((((!((map__34971 == null)))?((((map__34971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34971):map__34971);
var files_msg = map__34971__$1;
var files = cljs.core.get.call(null,map__34971__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34974_34978 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__34975_34979 = null;
var count__34976_34980 = (0);
var i__34977_34981 = (0);
while(true){
if((i__34977_34981 < count__34976_34980)){
var f_34982 = cljs.core._nth.call(null,chunk__34975_34979,i__34977_34981);
figwheel.client.file_reloading.reload_css_file.call(null,f_34982);

var G__34983 = seq__34974_34978;
var G__34984 = chunk__34975_34979;
var G__34985 = count__34976_34980;
var G__34986 = (i__34977_34981 + (1));
seq__34974_34978 = G__34983;
chunk__34975_34979 = G__34984;
count__34976_34980 = G__34985;
i__34977_34981 = G__34986;
continue;
} else {
var temp__4657__auto___34987 = cljs.core.seq.call(null,seq__34974_34978);
if(temp__4657__auto___34987){
var seq__34974_34988__$1 = temp__4657__auto___34987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34974_34988__$1)){
var c__25612__auto___34989 = cljs.core.chunk_first.call(null,seq__34974_34988__$1);
var G__34990 = cljs.core.chunk_rest.call(null,seq__34974_34988__$1);
var G__34991 = c__25612__auto___34989;
var G__34992 = cljs.core.count.call(null,c__25612__auto___34989);
var G__34993 = (0);
seq__34974_34978 = G__34990;
chunk__34975_34979 = G__34991;
count__34976_34980 = G__34992;
i__34977_34981 = G__34993;
continue;
} else {
var f_34994 = cljs.core.first.call(null,seq__34974_34988__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34994);

var G__34995 = cljs.core.next.call(null,seq__34974_34988__$1);
var G__34996 = null;
var G__34997 = (0);
var G__34998 = (0);
seq__34974_34978 = G__34995;
chunk__34975_34979 = G__34996;
count__34976_34980 = G__34997;
i__34977_34981 = G__34998;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__34970,map__34970__$1,opts,on_cssload,map__34971,map__34971__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__34970,map__34970__$1,opts,on_cssload,map__34971,map__34971__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1490992385096