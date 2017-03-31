// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__32192__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__32189 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__32190 = cljs.core.seq.call(null,vec__32189);
var first__32191 = cljs.core.first.call(null,seq__32190);
var seq__32190__$1 = cljs.core.next.call(null,seq__32190);
var tag = first__32191;
var body = seq__32190__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__32192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32193__i = 0, G__32193__a = new Array(arguments.length -  0);
while (G__32193__i < G__32193__a.length) {G__32193__a[G__32193__i] = arguments[G__32193__i + 0]; ++G__32193__i;}
  args = new cljs.core.IndexedSeq(G__32193__a,0);
} 
return G__32192__delegate.call(this,args);};
G__32192.cljs$lang$maxFixedArity = 0;
G__32192.cljs$lang$applyTo = (function (arglist__32194){
var args = cljs.core.seq(arglist__32194);
return G__32192__delegate(args);
});
G__32192.cljs$core$IFn$_invoke$arity$variadic = G__32192__delegate;
return G__32192;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25581__auto__ = (function sablono$core$update_arglists_$_iter__32199(s__32200){
return (new cljs.core.LazySeq(null,(function (){
var s__32200__$1 = s__32200;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32200__$1);
if(temp__4657__auto__){
var s__32200__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32200__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__32200__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__32202 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__32201 = (0);
while(true){
if((i__32201 < size__25580__auto__)){
var args = cljs.core._nth.call(null,c__25579__auto__,i__32201);
cljs.core.chunk_append.call(null,b__32202,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32203 = (i__32201 + (1));
i__32201 = G__32203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32202),sablono$core$update_arglists_$_iter__32199.call(null,cljs.core.chunk_rest.call(null,s__32200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32202),null);
}
} else {
var args = cljs.core.first.call(null,s__32200__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__32199.call(null,cljs.core.rest.call(null,s__32200__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25581__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32209 = arguments.length;
var i__25877__auto___32210 = (0);
while(true){
if((i__25877__auto___32210 < len__25876__auto___32209)){
args__25883__auto__.push((arguments[i__25877__auto___32210]));

var G__32211 = (i__25877__auto___32210 + (1));
i__25877__auto___32210 = G__32211;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25581__auto__ = (function sablono$core$iter__32205(s__32206){
return (new cljs.core.LazySeq(null,(function (){
var s__32206__$1 = s__32206;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32206__$1);
if(temp__4657__auto__){
var s__32206__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32206__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__32206__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__32208 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__32207 = (0);
while(true){
if((i__32207 < size__25580__auto__)){
var style = cljs.core._nth.call(null,c__25579__auto__,i__32207);
cljs.core.chunk_append.call(null,b__32208,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32212 = (i__32207 + (1));
i__32207 = G__32212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32208),sablono$core$iter__32205.call(null,cljs.core.chunk_rest.call(null,s__32206__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32208),null);
}
} else {
var style = cljs.core.first.call(null,s__32206__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__32205.call(null,cljs.core.rest.call(null,s__32206__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25581__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq32204){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32204));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to32213 = (function sablono$core$link_to32213(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32216 = arguments.length;
var i__25877__auto___32217 = (0);
while(true){
if((i__25877__auto___32217 < len__25876__auto___32216)){
args__25883__auto__.push((arguments[i__25877__auto___32217]));

var G__32218 = (i__25877__auto___32217 + (1));
i__25877__auto___32217 = G__32218;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32213.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

sablono.core.link_to32213.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to32213.cljs$lang$maxFixedArity = (1);

sablono.core.link_to32213.cljs$lang$applyTo = (function (seq32214){
var G__32215 = cljs.core.first.call(null,seq32214);
var seq32214__$1 = cljs.core.next.call(null,seq32214);
return sablono.core.link_to32213.cljs$core$IFn$_invoke$arity$variadic(G__32215,seq32214__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32213);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32219 = (function sablono$core$mail_to32219(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32226 = arguments.length;
var i__25877__auto___32227 = (0);
while(true){
if((i__25877__auto___32227 < len__25876__auto___32226)){
args__25883__auto__.push((arguments[i__25877__auto___32227]));

var G__32228 = (i__25877__auto___32227 + (1));
i__25877__auto___32227 = G__32228;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32219.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

sablono.core.mail_to32219.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32222){
var vec__32223 = p__32222;
var content = cljs.core.nth.call(null,vec__32223,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24801__auto__ = content;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to32219.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to32219.cljs$lang$applyTo = (function (seq32220){
var G__32221 = cljs.core.first.call(null,seq32220);
var seq32220__$1 = cljs.core.next.call(null,seq32220);
return sablono.core.mail_to32219.cljs$core$IFn$_invoke$arity$variadic(G__32221,seq32220__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32219);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32229 = (function sablono$core$unordered_list32229(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25581__auto__ = (function sablono$core$unordered_list32229_$_iter__32234(s__32235){
return (new cljs.core.LazySeq(null,(function (){
var s__32235__$1 = s__32235;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32235__$1);
if(temp__4657__auto__){
var s__32235__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32235__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__32235__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__32237 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__32236 = (0);
while(true){
if((i__32236 < size__25580__auto__)){
var x = cljs.core._nth.call(null,c__25579__auto__,i__32236);
cljs.core.chunk_append.call(null,b__32237,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32238 = (i__32236 + (1));
i__32236 = G__32238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32237),sablono$core$unordered_list32229_$_iter__32234.call(null,cljs.core.chunk_rest.call(null,s__32235__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32237),null);
}
} else {
var x = cljs.core.first.call(null,s__32235__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32229_$_iter__32234.call(null,cljs.core.rest.call(null,s__32235__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25581__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32229);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32239 = (function sablono$core$ordered_list32239(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25581__auto__ = (function sablono$core$ordered_list32239_$_iter__32244(s__32245){
return (new cljs.core.LazySeq(null,(function (){
var s__32245__$1 = s__32245;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32245__$1);
if(temp__4657__auto__){
var s__32245__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32245__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__32245__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__32247 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__32246 = (0);
while(true){
if((i__32246 < size__25580__auto__)){
var x = cljs.core._nth.call(null,c__25579__auto__,i__32246);
cljs.core.chunk_append.call(null,b__32247,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32248 = (i__32246 + (1));
i__32246 = G__32248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32247),sablono$core$ordered_list32239_$_iter__32244.call(null,cljs.core.chunk_rest.call(null,s__32245__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32247),null);
}
} else {
var x = cljs.core.first.call(null,s__32245__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32239_$_iter__32244.call(null,cljs.core.rest.call(null,s__32245__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25581__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32239);
/**
 * Create an image element.
 */
sablono.core.image32249 = (function sablono$core$image32249(var_args){
var args32250 = [];
var len__25876__auto___32253 = arguments.length;
var i__25877__auto___32254 = (0);
while(true){
if((i__25877__auto___32254 < len__25876__auto___32253)){
args32250.push((arguments[i__25877__auto___32254]));

var G__32255 = (i__25877__auto___32254 + (1));
i__25877__auto___32254 = G__32255;
continue;
} else {
}
break;
}

var G__32252 = args32250.length;
switch (G__32252) {
case 1:
return sablono.core.image32249.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32249.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32250.length)].join('')));

}
});

sablono.core.image32249.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image32249.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image32249.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32249);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32257_SHARP_,p2__32258_SHARP_){
return [cljs.core.str(p1__32257_SHARP_),cljs.core.str("["),cljs.core.str(p2__32258_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32259_SHARP_,p2__32260_SHARP_){
return [cljs.core.str(p1__32259_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32260_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24801__auto__ = value;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field32261 = (function sablono$core$color_field32261(var_args){
var args32262 = [];
var len__25876__auto___32329 = arguments.length;
var i__25877__auto___32330 = (0);
while(true){
if((i__25877__auto___32330 < len__25876__auto___32329)){
args32262.push((arguments[i__25877__auto___32330]));

var G__32331 = (i__25877__auto___32330 + (1));
i__25877__auto___32330 = G__32331;
continue;
} else {
}
break;
}

var G__32264 = args32262.length;
switch (G__32264) {
case 1:
return sablono.core.color_field32261.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32261.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32262.length)].join('')));

}
});

sablono.core.color_field32261.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.color_field32261.call(null,name__32176__auto__,null);
});

sablono.core.color_field32261.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.color_field32261.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32261);

/**
 * Creates a date input field.
 */
sablono.core.date_field32265 = (function sablono$core$date_field32265(var_args){
var args32266 = [];
var len__25876__auto___32333 = arguments.length;
var i__25877__auto___32334 = (0);
while(true){
if((i__25877__auto___32334 < len__25876__auto___32333)){
args32266.push((arguments[i__25877__auto___32334]));

var G__32335 = (i__25877__auto___32334 + (1));
i__25877__auto___32334 = G__32335;
continue;
} else {
}
break;
}

var G__32268 = args32266.length;
switch (G__32268) {
case 1:
return sablono.core.date_field32265.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32265.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32266.length)].join('')));

}
});

sablono.core.date_field32265.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.date_field32265.call(null,name__32176__auto__,null);
});

sablono.core.date_field32265.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.date_field32265.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32265);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32269 = (function sablono$core$datetime_field32269(var_args){
var args32270 = [];
var len__25876__auto___32337 = arguments.length;
var i__25877__auto___32338 = (0);
while(true){
if((i__25877__auto___32338 < len__25876__auto___32337)){
args32270.push((arguments[i__25877__auto___32338]));

var G__32339 = (i__25877__auto___32338 + (1));
i__25877__auto___32338 = G__32339;
continue;
} else {
}
break;
}

var G__32272 = args32270.length;
switch (G__32272) {
case 1:
return sablono.core.datetime_field32269.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32269.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32270.length)].join('')));

}
});

sablono.core.datetime_field32269.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.datetime_field32269.call(null,name__32176__auto__,null);
});

sablono.core.datetime_field32269.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.datetime_field32269.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32269);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32273 = (function sablono$core$datetime_local_field32273(var_args){
var args32274 = [];
var len__25876__auto___32341 = arguments.length;
var i__25877__auto___32342 = (0);
while(true){
if((i__25877__auto___32342 < len__25876__auto___32341)){
args32274.push((arguments[i__25877__auto___32342]));

var G__32343 = (i__25877__auto___32342 + (1));
i__25877__auto___32342 = G__32343;
continue;
} else {
}
break;
}

var G__32276 = args32274.length;
switch (G__32276) {
case 1:
return sablono.core.datetime_local_field32273.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32273.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32274.length)].join('')));

}
});

sablono.core.datetime_local_field32273.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.datetime_local_field32273.call(null,name__32176__auto__,null);
});

sablono.core.datetime_local_field32273.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.datetime_local_field32273.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32273);

/**
 * Creates a email input field.
 */
sablono.core.email_field32277 = (function sablono$core$email_field32277(var_args){
var args32278 = [];
var len__25876__auto___32345 = arguments.length;
var i__25877__auto___32346 = (0);
while(true){
if((i__25877__auto___32346 < len__25876__auto___32345)){
args32278.push((arguments[i__25877__auto___32346]));

var G__32347 = (i__25877__auto___32346 + (1));
i__25877__auto___32346 = G__32347;
continue;
} else {
}
break;
}

var G__32280 = args32278.length;
switch (G__32280) {
case 1:
return sablono.core.email_field32277.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32277.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32278.length)].join('')));

}
});

sablono.core.email_field32277.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.email_field32277.call(null,name__32176__auto__,null);
});

sablono.core.email_field32277.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.email_field32277.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32277);

/**
 * Creates a file input field.
 */
sablono.core.file_field32281 = (function sablono$core$file_field32281(var_args){
var args32282 = [];
var len__25876__auto___32349 = arguments.length;
var i__25877__auto___32350 = (0);
while(true){
if((i__25877__auto___32350 < len__25876__auto___32349)){
args32282.push((arguments[i__25877__auto___32350]));

var G__32351 = (i__25877__auto___32350 + (1));
i__25877__auto___32350 = G__32351;
continue;
} else {
}
break;
}

var G__32284 = args32282.length;
switch (G__32284) {
case 1:
return sablono.core.file_field32281.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32281.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32282.length)].join('')));

}
});

sablono.core.file_field32281.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.file_field32281.call(null,name__32176__auto__,null);
});

sablono.core.file_field32281.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.file_field32281.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32281);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32285 = (function sablono$core$hidden_field32285(var_args){
var args32286 = [];
var len__25876__auto___32353 = arguments.length;
var i__25877__auto___32354 = (0);
while(true){
if((i__25877__auto___32354 < len__25876__auto___32353)){
args32286.push((arguments[i__25877__auto___32354]));

var G__32355 = (i__25877__auto___32354 + (1));
i__25877__auto___32354 = G__32355;
continue;
} else {
}
break;
}

var G__32288 = args32286.length;
switch (G__32288) {
case 1:
return sablono.core.hidden_field32285.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32285.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32286.length)].join('')));

}
});

sablono.core.hidden_field32285.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.hidden_field32285.call(null,name__32176__auto__,null);
});

sablono.core.hidden_field32285.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.hidden_field32285.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32285);

/**
 * Creates a month input field.
 */
sablono.core.month_field32289 = (function sablono$core$month_field32289(var_args){
var args32290 = [];
var len__25876__auto___32357 = arguments.length;
var i__25877__auto___32358 = (0);
while(true){
if((i__25877__auto___32358 < len__25876__auto___32357)){
args32290.push((arguments[i__25877__auto___32358]));

var G__32359 = (i__25877__auto___32358 + (1));
i__25877__auto___32358 = G__32359;
continue;
} else {
}
break;
}

var G__32292 = args32290.length;
switch (G__32292) {
case 1:
return sablono.core.month_field32289.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32289.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32290.length)].join('')));

}
});

sablono.core.month_field32289.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.month_field32289.call(null,name__32176__auto__,null);
});

sablono.core.month_field32289.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.month_field32289.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32289);

/**
 * Creates a number input field.
 */
sablono.core.number_field32293 = (function sablono$core$number_field32293(var_args){
var args32294 = [];
var len__25876__auto___32361 = arguments.length;
var i__25877__auto___32362 = (0);
while(true){
if((i__25877__auto___32362 < len__25876__auto___32361)){
args32294.push((arguments[i__25877__auto___32362]));

var G__32363 = (i__25877__auto___32362 + (1));
i__25877__auto___32362 = G__32363;
continue;
} else {
}
break;
}

var G__32296 = args32294.length;
switch (G__32296) {
case 1:
return sablono.core.number_field32293.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32293.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32294.length)].join('')));

}
});

sablono.core.number_field32293.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.number_field32293.call(null,name__32176__auto__,null);
});

sablono.core.number_field32293.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.number_field32293.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32293);

/**
 * Creates a password input field.
 */
sablono.core.password_field32297 = (function sablono$core$password_field32297(var_args){
var args32298 = [];
var len__25876__auto___32365 = arguments.length;
var i__25877__auto___32366 = (0);
while(true){
if((i__25877__auto___32366 < len__25876__auto___32365)){
args32298.push((arguments[i__25877__auto___32366]));

var G__32367 = (i__25877__auto___32366 + (1));
i__25877__auto___32366 = G__32367;
continue;
} else {
}
break;
}

var G__32300 = args32298.length;
switch (G__32300) {
case 1:
return sablono.core.password_field32297.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32297.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32298.length)].join('')));

}
});

sablono.core.password_field32297.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.password_field32297.call(null,name__32176__auto__,null);
});

sablono.core.password_field32297.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.password_field32297.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32297);

/**
 * Creates a range input field.
 */
sablono.core.range_field32301 = (function sablono$core$range_field32301(var_args){
var args32302 = [];
var len__25876__auto___32369 = arguments.length;
var i__25877__auto___32370 = (0);
while(true){
if((i__25877__auto___32370 < len__25876__auto___32369)){
args32302.push((arguments[i__25877__auto___32370]));

var G__32371 = (i__25877__auto___32370 + (1));
i__25877__auto___32370 = G__32371;
continue;
} else {
}
break;
}

var G__32304 = args32302.length;
switch (G__32304) {
case 1:
return sablono.core.range_field32301.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32301.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32302.length)].join('')));

}
});

sablono.core.range_field32301.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.range_field32301.call(null,name__32176__auto__,null);
});

sablono.core.range_field32301.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.range_field32301.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32301);

/**
 * Creates a search input field.
 */
sablono.core.search_field32305 = (function sablono$core$search_field32305(var_args){
var args32306 = [];
var len__25876__auto___32373 = arguments.length;
var i__25877__auto___32374 = (0);
while(true){
if((i__25877__auto___32374 < len__25876__auto___32373)){
args32306.push((arguments[i__25877__auto___32374]));

var G__32375 = (i__25877__auto___32374 + (1));
i__25877__auto___32374 = G__32375;
continue;
} else {
}
break;
}

var G__32308 = args32306.length;
switch (G__32308) {
case 1:
return sablono.core.search_field32305.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32305.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32306.length)].join('')));

}
});

sablono.core.search_field32305.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.search_field32305.call(null,name__32176__auto__,null);
});

sablono.core.search_field32305.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.search_field32305.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32305);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32309 = (function sablono$core$tel_field32309(var_args){
var args32310 = [];
var len__25876__auto___32377 = arguments.length;
var i__25877__auto___32378 = (0);
while(true){
if((i__25877__auto___32378 < len__25876__auto___32377)){
args32310.push((arguments[i__25877__auto___32378]));

var G__32379 = (i__25877__auto___32378 + (1));
i__25877__auto___32378 = G__32379;
continue;
} else {
}
break;
}

var G__32312 = args32310.length;
switch (G__32312) {
case 1:
return sablono.core.tel_field32309.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32309.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32310.length)].join('')));

}
});

sablono.core.tel_field32309.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.tel_field32309.call(null,name__32176__auto__,null);
});

sablono.core.tel_field32309.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.tel_field32309.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32309);

/**
 * Creates a text input field.
 */
sablono.core.text_field32313 = (function sablono$core$text_field32313(var_args){
var args32314 = [];
var len__25876__auto___32381 = arguments.length;
var i__25877__auto___32382 = (0);
while(true){
if((i__25877__auto___32382 < len__25876__auto___32381)){
args32314.push((arguments[i__25877__auto___32382]));

var G__32383 = (i__25877__auto___32382 + (1));
i__25877__auto___32382 = G__32383;
continue;
} else {
}
break;
}

var G__32316 = args32314.length;
switch (G__32316) {
case 1:
return sablono.core.text_field32313.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32313.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32314.length)].join('')));

}
});

sablono.core.text_field32313.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.text_field32313.call(null,name__32176__auto__,null);
});

sablono.core.text_field32313.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.text_field32313.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32313);

/**
 * Creates a time input field.
 */
sablono.core.time_field32317 = (function sablono$core$time_field32317(var_args){
var args32318 = [];
var len__25876__auto___32385 = arguments.length;
var i__25877__auto___32386 = (0);
while(true){
if((i__25877__auto___32386 < len__25876__auto___32385)){
args32318.push((arguments[i__25877__auto___32386]));

var G__32387 = (i__25877__auto___32386 + (1));
i__25877__auto___32386 = G__32387;
continue;
} else {
}
break;
}

var G__32320 = args32318.length;
switch (G__32320) {
case 1:
return sablono.core.time_field32317.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32317.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32318.length)].join('')));

}
});

sablono.core.time_field32317.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.time_field32317.call(null,name__32176__auto__,null);
});

sablono.core.time_field32317.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.time_field32317.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32317);

/**
 * Creates a url input field.
 */
sablono.core.url_field32321 = (function sablono$core$url_field32321(var_args){
var args32322 = [];
var len__25876__auto___32389 = arguments.length;
var i__25877__auto___32390 = (0);
while(true){
if((i__25877__auto___32390 < len__25876__auto___32389)){
args32322.push((arguments[i__25877__auto___32390]));

var G__32391 = (i__25877__auto___32390 + (1));
i__25877__auto___32390 = G__32391;
continue;
} else {
}
break;
}

var G__32324 = args32322.length;
switch (G__32324) {
case 1:
return sablono.core.url_field32321.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32321.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32322.length)].join('')));

}
});

sablono.core.url_field32321.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.url_field32321.call(null,name__32176__auto__,null);
});

sablono.core.url_field32321.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.url_field32321.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32321);

/**
 * Creates a week input field.
 */
sablono.core.week_field32325 = (function sablono$core$week_field32325(var_args){
var args32326 = [];
var len__25876__auto___32393 = arguments.length;
var i__25877__auto___32394 = (0);
while(true){
if((i__25877__auto___32394 < len__25876__auto___32393)){
args32326.push((arguments[i__25877__auto___32394]));

var G__32395 = (i__25877__auto___32394 + (1));
i__25877__auto___32394 = G__32395;
continue;
} else {
}
break;
}

var G__32328 = args32326.length;
switch (G__32328) {
case 1:
return sablono.core.week_field32325.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32325.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32326.length)].join('')));

}
});

sablono.core.week_field32325.cljs$core$IFn$_invoke$arity$1 = (function (name__32176__auto__){
return sablono.core.week_field32325.call(null,name__32176__auto__,null);
});

sablono.core.week_field32325.cljs$core$IFn$_invoke$arity$2 = (function (name__32176__auto__,value__32177__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__32176__auto__,value__32177__auto__);
});

sablono.core.week_field32325.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32325);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32397 = (function sablono$core$check_box32397(var_args){
var args32398 = [];
var len__25876__auto___32401 = arguments.length;
var i__25877__auto___32402 = (0);
while(true){
if((i__25877__auto___32402 < len__25876__auto___32401)){
args32398.push((arguments[i__25877__auto___32402]));

var G__32403 = (i__25877__auto___32402 + (1));
i__25877__auto___32402 = G__32403;
continue;
} else {
}
break;
}

var G__32400 = args32398.length;
switch (G__32400) {
case 1:
return sablono.core.check_box32397.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32397.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32397.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32398.length)].join('')));

}
});

sablono.core.check_box32397.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box32397.call(null,name,null);
});

sablono.core.check_box32397.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box32397.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box32397.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24801__auto__ = value;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box32397.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32397);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32405 = (function sablono$core$radio_button32405(var_args){
var args32406 = [];
var len__25876__auto___32409 = arguments.length;
var i__25877__auto___32410 = (0);
while(true){
if((i__25877__auto___32410 < len__25876__auto___32409)){
args32406.push((arguments[i__25877__auto___32410]));

var G__32411 = (i__25877__auto___32410 + (1));
i__25877__auto___32410 = G__32411;
continue;
} else {
}
break;
}

var G__32408 = args32406.length;
switch (G__32408) {
case 1:
return sablono.core.radio_button32405.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32405.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32405.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32406.length)].join('')));

}
});

sablono.core.radio_button32405.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button32405.call(null,group,null);
});

sablono.core.radio_button32405.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button32405.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button32405.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24801__auto__ = value;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button32405.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32405);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32413 = (function sablono$core$select_options32413(coll){
var iter__25581__auto__ = (function sablono$core$select_options32413_$_iter__32430(s__32431){
return (new cljs.core.LazySeq(null,(function (){
var s__32431__$1 = s__32431;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32431__$1);
if(temp__4657__auto__){
var s__32431__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32431__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__32431__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__32433 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__32432 = (0);
while(true){
if((i__32432 < size__25580__auto__)){
var x = cljs.core._nth.call(null,c__25579__auto__,i__32432);
cljs.core.chunk_append.call(null,b__32433,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32440 = x;
var text = cljs.core.nth.call(null,vec__32440,(0),null);
var val = cljs.core.nth.call(null,vec__32440,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32440,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32413.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32446 = (i__32432 + (1));
i__32432 = G__32446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32433),sablono$core$select_options32413_$_iter__32430.call(null,cljs.core.chunk_rest.call(null,s__32431__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32433),null);
}
} else {
var x = cljs.core.first.call(null,s__32431__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32443 = x;
var text = cljs.core.nth.call(null,vec__32443,(0),null);
var val = cljs.core.nth.call(null,vec__32443,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32443,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32413.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32413_$_iter__32430.call(null,cljs.core.rest.call(null,s__32431__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25581__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32413);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32447 = (function sablono$core$drop_down32447(var_args){
var args32448 = [];
var len__25876__auto___32451 = arguments.length;
var i__25877__auto___32452 = (0);
while(true){
if((i__25877__auto___32452 < len__25876__auto___32451)){
args32448.push((arguments[i__25877__auto___32452]));

var G__32453 = (i__25877__auto___32452 + (1));
i__25877__auto___32452 = G__32453;
continue;
} else {
}
break;
}

var G__32450 = args32448.length;
switch (G__32450) {
case 2:
return sablono.core.drop_down32447.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32447.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32448.length)].join('')));

}
});

sablono.core.drop_down32447.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32447.call(null,name,options,null);
});

sablono.core.drop_down32447.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down32447.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32447);
/**
 * Creates a text area element.
 */
sablono.core.text_area32455 = (function sablono$core$text_area32455(var_args){
var args32456 = [];
var len__25876__auto___32459 = arguments.length;
var i__25877__auto___32460 = (0);
while(true){
if((i__25877__auto___32460 < len__25876__auto___32459)){
args32456.push((arguments[i__25877__auto___32460]));

var G__32461 = (i__25877__auto___32460 + (1));
i__25877__auto___32460 = G__32461;
continue;
} else {
}
break;
}

var G__32458 = args32456.length;
switch (G__32458) {
case 1:
return sablono.core.text_area32455.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32455.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32456.length)].join('')));

}
});

sablono.core.text_area32455.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area32455.call(null,name,null);
});

sablono.core.text_area32455.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24801__auto__ = value;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area32455.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32455);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32463 = (function sablono$core$label32463(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32463);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32464 = (function sablono$core$submit_button32464(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32464);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32465 = (function sablono$core$reset_button32465(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32465);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32466 = (function sablono$core$form_to32466(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32473 = arguments.length;
var i__25877__auto___32474 = (0);
while(true){
if((i__25877__auto___32474 < len__25876__auto___32473)){
args__25883__auto__.push((arguments[i__25877__auto___32474]));

var G__32475 = (i__25877__auto___32474 + (1));
i__25877__auto___32474 = G__32475;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32466.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

sablono.core.form_to32466.cljs$core$IFn$_invoke$arity$variadic = (function (p__32469,body){
var vec__32470 = p__32469;
var method = cljs.core.nth.call(null,vec__32470,(0),null);
var action = cljs.core.nth.call(null,vec__32470,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to32466.cljs$lang$maxFixedArity = (1);

sablono.core.form_to32466.cljs$lang$applyTo = (function (seq32467){
var G__32468 = cljs.core.first.call(null,seq32467);
var seq32467__$1 = cljs.core.next.call(null,seq32467);
return sablono.core.form_to32466.cljs$core$IFn$_invoke$arity$variadic(G__32468,seq32467__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32466);

//# sourceMappingURL=core.js.map?rel=1490992383116