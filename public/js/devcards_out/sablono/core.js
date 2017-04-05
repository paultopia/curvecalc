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
var G__32194__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__32191 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__32192 = cljs.core.seq.call(null,vec__32191);
var first__32193 = cljs.core.first.call(null,seq__32192);
var seq__32192__$1 = cljs.core.next.call(null,seq__32192);
var tag = first__32193;
var body = seq__32192__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__32194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32195__i = 0, G__32195__a = new Array(arguments.length -  0);
while (G__32195__i < G__32195__a.length) {G__32195__a[G__32195__i] = arguments[G__32195__i + 0]; ++G__32195__i;}
  args = new cljs.core.IndexedSeq(G__32195__a,0);
} 
return G__32194__delegate.call(this,args);};
G__32194.cljs$lang$maxFixedArity = 0;
G__32194.cljs$lang$applyTo = (function (arglist__32196){
var args = cljs.core.seq(arglist__32196);
return G__32194__delegate(args);
});
G__32194.cljs$core$IFn$_invoke$arity$variadic = G__32194__delegate;
return G__32194;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25581__auto__ = (function sablono$core$update_arglists_$_iter__32201(s__32202){
return (new cljs.core.LazySeq(null,(function (){
var s__32202__$1 = s__32202;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32202__$1);
if(temp__4657__auto__){
var s__32202__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32202__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__32202__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__32204 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__32203 = (0);
while(true){
if((i__32203 < size__25580__auto__)){
var args = cljs.core._nth.call(null,c__25579__auto__,i__32203);
cljs.core.chunk_append.call(null,b__32204,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32205 = (i__32203 + (1));
i__32203 = G__32205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32204),sablono$core$update_arglists_$_iter__32201.call(null,cljs.core.chunk_rest.call(null,s__32202__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32204),null);
}
} else {
var args = cljs.core.first.call(null,s__32202__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__32201.call(null,cljs.core.rest.call(null,s__32202__$2)));
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
var len__25876__auto___32211 = arguments.length;
var i__25877__auto___32212 = (0);
while(true){
if((i__25877__auto___32212 < len__25876__auto___32211)){
args__25883__auto__.push((arguments[i__25877__auto___32212]));

var G__32213 = (i__25877__auto___32212 + (1));
i__25877__auto___32212 = G__32213;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25581__auto__ = (function sablono$core$iter__32207(s__32208){
return (new cljs.core.LazySeq(null,(function (){
var s__32208__$1 = s__32208;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32208__$1);
if(temp__4657__auto__){
var s__32208__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32208__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__32208__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__32210 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__32209 = (0);
while(true){
if((i__32209 < size__25580__auto__)){
var style = cljs.core._nth.call(null,c__25579__auto__,i__32209);
cljs.core.chunk_append.call(null,b__32210,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32214 = (i__32209 + (1));
i__32209 = G__32214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32210),sablono$core$iter__32207.call(null,cljs.core.chunk_rest.call(null,s__32208__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32210),null);
}
} else {
var style = cljs.core.first.call(null,s__32208__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__32207.call(null,cljs.core.rest.call(null,s__32208__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq32206){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32206));
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
sablono.core.link_to32215 = (function sablono$core$link_to32215(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32218 = arguments.length;
var i__25877__auto___32219 = (0);
while(true){
if((i__25877__auto___32219 < len__25876__auto___32218)){
args__25883__auto__.push((arguments[i__25877__auto___32219]));

var G__32220 = (i__25877__auto___32219 + (1));
i__25877__auto___32219 = G__32220;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32215.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

sablono.core.link_to32215.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to32215.cljs$lang$maxFixedArity = (1);

sablono.core.link_to32215.cljs$lang$applyTo = (function (seq32216){
var G__32217 = cljs.core.first.call(null,seq32216);
var seq32216__$1 = cljs.core.next.call(null,seq32216);
return sablono.core.link_to32215.cljs$core$IFn$_invoke$arity$variadic(G__32217,seq32216__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32215);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32221 = (function sablono$core$mail_to32221(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32228 = arguments.length;
var i__25877__auto___32229 = (0);
while(true){
if((i__25877__auto___32229 < len__25876__auto___32228)){
args__25883__auto__.push((arguments[i__25877__auto___32229]));

var G__32230 = (i__25877__auto___32229 + (1));
i__25877__auto___32229 = G__32230;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32221.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

sablono.core.mail_to32221.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32224){
var vec__32225 = p__32224;
var content = cljs.core.nth.call(null,vec__32225,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24801__auto__ = content;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to32221.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to32221.cljs$lang$applyTo = (function (seq32222){
var G__32223 = cljs.core.first.call(null,seq32222);
var seq32222__$1 = cljs.core.next.call(null,seq32222);
return sablono.core.mail_to32221.cljs$core$IFn$_invoke$arity$variadic(G__32223,seq32222__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32221);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32231 = (function sablono$core$unordered_list32231(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25581__auto__ = (function sablono$core$unordered_list32231_$_iter__32236(s__32237){
return (new cljs.core.LazySeq(null,(function (){
var s__32237__$1 = s__32237;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32237__$1);
if(temp__4657__auto__){
var s__32237__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32237__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__32237__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__32239 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__32238 = (0);
while(true){
if((i__32238 < size__25580__auto__)){
var x = cljs.core._nth.call(null,c__25579__auto__,i__32238);
cljs.core.chunk_append.call(null,b__32239,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32240 = (i__32238 + (1));
i__32238 = G__32240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32239),sablono$core$unordered_list32231_$_iter__32236.call(null,cljs.core.chunk_rest.call(null,s__32237__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32239),null);
}
} else {
var x = cljs.core.first.call(null,s__32237__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32231_$_iter__32236.call(null,cljs.core.rest.call(null,s__32237__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32231);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32241 = (function sablono$core$ordered_list32241(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25581__auto__ = (function sablono$core$ordered_list32241_$_iter__32246(s__32247){
return (new cljs.core.LazySeq(null,(function (){
var s__32247__$1 = s__32247;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32247__$1);
if(temp__4657__auto__){
var s__32247__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32247__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__32247__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__32249 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__32248 = (0);
while(true){
if((i__32248 < size__25580__auto__)){
var x = cljs.core._nth.call(null,c__25579__auto__,i__32248);
cljs.core.chunk_append.call(null,b__32249,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32250 = (i__32248 + (1));
i__32248 = G__32250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32249),sablono$core$ordered_list32241_$_iter__32246.call(null,cljs.core.chunk_rest.call(null,s__32247__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32249),null);
}
} else {
var x = cljs.core.first.call(null,s__32247__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32241_$_iter__32246.call(null,cljs.core.rest.call(null,s__32247__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32241);
/**
 * Create an image element.
 */
sablono.core.image32251 = (function sablono$core$image32251(var_args){
var args32252 = [];
var len__25876__auto___32255 = arguments.length;
var i__25877__auto___32256 = (0);
while(true){
if((i__25877__auto___32256 < len__25876__auto___32255)){
args32252.push((arguments[i__25877__auto___32256]));

var G__32257 = (i__25877__auto___32256 + (1));
i__25877__auto___32256 = G__32257;
continue;
} else {
}
break;
}

var G__32254 = args32252.length;
switch (G__32254) {
case 1:
return sablono.core.image32251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32252.length)].join('')));

}
});

sablono.core.image32251.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image32251.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image32251.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32251);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32259_SHARP_,p2__32260_SHARP_){
return [cljs.core.str(p1__32259_SHARP_),cljs.core.str("["),cljs.core.str(p2__32260_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32261_SHARP_,p2__32262_SHARP_){
return [cljs.core.str(p1__32261_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32262_SHARP_)].join('');
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
sablono.core.color_field32263 = (function sablono$core$color_field32263(var_args){
var args32264 = [];
var len__25876__auto___32331 = arguments.length;
var i__25877__auto___32332 = (0);
while(true){
if((i__25877__auto___32332 < len__25876__auto___32331)){
args32264.push((arguments[i__25877__auto___32332]));

var G__32333 = (i__25877__auto___32332 + (1));
i__25877__auto___32332 = G__32333;
continue;
} else {
}
break;
}

var G__32266 = args32264.length;
switch (G__32266) {
case 1:
return sablono.core.color_field32263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32264.length)].join('')));

}
});

sablono.core.color_field32263.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.color_field32263.call(null,name__32178__auto__,null);
});

sablono.core.color_field32263.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.color_field32263.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32263);

/**
 * Creates a date input field.
 */
sablono.core.date_field32267 = (function sablono$core$date_field32267(var_args){
var args32268 = [];
var len__25876__auto___32335 = arguments.length;
var i__25877__auto___32336 = (0);
while(true){
if((i__25877__auto___32336 < len__25876__auto___32335)){
args32268.push((arguments[i__25877__auto___32336]));

var G__32337 = (i__25877__auto___32336 + (1));
i__25877__auto___32336 = G__32337;
continue;
} else {
}
break;
}

var G__32270 = args32268.length;
switch (G__32270) {
case 1:
return sablono.core.date_field32267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32268.length)].join('')));

}
});

sablono.core.date_field32267.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.date_field32267.call(null,name__32178__auto__,null);
});

sablono.core.date_field32267.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.date_field32267.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32267);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32271 = (function sablono$core$datetime_field32271(var_args){
var args32272 = [];
var len__25876__auto___32339 = arguments.length;
var i__25877__auto___32340 = (0);
while(true){
if((i__25877__auto___32340 < len__25876__auto___32339)){
args32272.push((arguments[i__25877__auto___32340]));

var G__32341 = (i__25877__auto___32340 + (1));
i__25877__auto___32340 = G__32341;
continue;
} else {
}
break;
}

var G__32274 = args32272.length;
switch (G__32274) {
case 1:
return sablono.core.datetime_field32271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32272.length)].join('')));

}
});

sablono.core.datetime_field32271.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.datetime_field32271.call(null,name__32178__auto__,null);
});

sablono.core.datetime_field32271.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.datetime_field32271.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32271);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32275 = (function sablono$core$datetime_local_field32275(var_args){
var args32276 = [];
var len__25876__auto___32343 = arguments.length;
var i__25877__auto___32344 = (0);
while(true){
if((i__25877__auto___32344 < len__25876__auto___32343)){
args32276.push((arguments[i__25877__auto___32344]));

var G__32345 = (i__25877__auto___32344 + (1));
i__25877__auto___32344 = G__32345;
continue;
} else {
}
break;
}

var G__32278 = args32276.length;
switch (G__32278) {
case 1:
return sablono.core.datetime_local_field32275.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32275.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32276.length)].join('')));

}
});

sablono.core.datetime_local_field32275.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.datetime_local_field32275.call(null,name__32178__auto__,null);
});

sablono.core.datetime_local_field32275.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.datetime_local_field32275.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32275);

/**
 * Creates a email input field.
 */
sablono.core.email_field32279 = (function sablono$core$email_field32279(var_args){
var args32280 = [];
var len__25876__auto___32347 = arguments.length;
var i__25877__auto___32348 = (0);
while(true){
if((i__25877__auto___32348 < len__25876__auto___32347)){
args32280.push((arguments[i__25877__auto___32348]));

var G__32349 = (i__25877__auto___32348 + (1));
i__25877__auto___32348 = G__32349;
continue;
} else {
}
break;
}

var G__32282 = args32280.length;
switch (G__32282) {
case 1:
return sablono.core.email_field32279.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32280.length)].join('')));

}
});

sablono.core.email_field32279.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.email_field32279.call(null,name__32178__auto__,null);
});

sablono.core.email_field32279.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.email_field32279.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32279);

/**
 * Creates a file input field.
 */
sablono.core.file_field32283 = (function sablono$core$file_field32283(var_args){
var args32284 = [];
var len__25876__auto___32351 = arguments.length;
var i__25877__auto___32352 = (0);
while(true){
if((i__25877__auto___32352 < len__25876__auto___32351)){
args32284.push((arguments[i__25877__auto___32352]));

var G__32353 = (i__25877__auto___32352 + (1));
i__25877__auto___32352 = G__32353;
continue;
} else {
}
break;
}

var G__32286 = args32284.length;
switch (G__32286) {
case 1:
return sablono.core.file_field32283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32284.length)].join('')));

}
});

sablono.core.file_field32283.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.file_field32283.call(null,name__32178__auto__,null);
});

sablono.core.file_field32283.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.file_field32283.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32283);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32287 = (function sablono$core$hidden_field32287(var_args){
var args32288 = [];
var len__25876__auto___32355 = arguments.length;
var i__25877__auto___32356 = (0);
while(true){
if((i__25877__auto___32356 < len__25876__auto___32355)){
args32288.push((arguments[i__25877__auto___32356]));

var G__32357 = (i__25877__auto___32356 + (1));
i__25877__auto___32356 = G__32357;
continue;
} else {
}
break;
}

var G__32290 = args32288.length;
switch (G__32290) {
case 1:
return sablono.core.hidden_field32287.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32287.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32288.length)].join('')));

}
});

sablono.core.hidden_field32287.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.hidden_field32287.call(null,name__32178__auto__,null);
});

sablono.core.hidden_field32287.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.hidden_field32287.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32287);

/**
 * Creates a month input field.
 */
sablono.core.month_field32291 = (function sablono$core$month_field32291(var_args){
var args32292 = [];
var len__25876__auto___32359 = arguments.length;
var i__25877__auto___32360 = (0);
while(true){
if((i__25877__auto___32360 < len__25876__auto___32359)){
args32292.push((arguments[i__25877__auto___32360]));

var G__32361 = (i__25877__auto___32360 + (1));
i__25877__auto___32360 = G__32361;
continue;
} else {
}
break;
}

var G__32294 = args32292.length;
switch (G__32294) {
case 1:
return sablono.core.month_field32291.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32292.length)].join('')));

}
});

sablono.core.month_field32291.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.month_field32291.call(null,name__32178__auto__,null);
});

sablono.core.month_field32291.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.month_field32291.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32291);

/**
 * Creates a number input field.
 */
sablono.core.number_field32295 = (function sablono$core$number_field32295(var_args){
var args32296 = [];
var len__25876__auto___32363 = arguments.length;
var i__25877__auto___32364 = (0);
while(true){
if((i__25877__auto___32364 < len__25876__auto___32363)){
args32296.push((arguments[i__25877__auto___32364]));

var G__32365 = (i__25877__auto___32364 + (1));
i__25877__auto___32364 = G__32365;
continue;
} else {
}
break;
}

var G__32298 = args32296.length;
switch (G__32298) {
case 1:
return sablono.core.number_field32295.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32295.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32296.length)].join('')));

}
});

sablono.core.number_field32295.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.number_field32295.call(null,name__32178__auto__,null);
});

sablono.core.number_field32295.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.number_field32295.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32295);

/**
 * Creates a password input field.
 */
sablono.core.password_field32299 = (function sablono$core$password_field32299(var_args){
var args32300 = [];
var len__25876__auto___32367 = arguments.length;
var i__25877__auto___32368 = (0);
while(true){
if((i__25877__auto___32368 < len__25876__auto___32367)){
args32300.push((arguments[i__25877__auto___32368]));

var G__32369 = (i__25877__auto___32368 + (1));
i__25877__auto___32368 = G__32369;
continue;
} else {
}
break;
}

var G__32302 = args32300.length;
switch (G__32302) {
case 1:
return sablono.core.password_field32299.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32299.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32300.length)].join('')));

}
});

sablono.core.password_field32299.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.password_field32299.call(null,name__32178__auto__,null);
});

sablono.core.password_field32299.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.password_field32299.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32299);

/**
 * Creates a range input field.
 */
sablono.core.range_field32303 = (function sablono$core$range_field32303(var_args){
var args32304 = [];
var len__25876__auto___32371 = arguments.length;
var i__25877__auto___32372 = (0);
while(true){
if((i__25877__auto___32372 < len__25876__auto___32371)){
args32304.push((arguments[i__25877__auto___32372]));

var G__32373 = (i__25877__auto___32372 + (1));
i__25877__auto___32372 = G__32373;
continue;
} else {
}
break;
}

var G__32306 = args32304.length;
switch (G__32306) {
case 1:
return sablono.core.range_field32303.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32303.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32304.length)].join('')));

}
});

sablono.core.range_field32303.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.range_field32303.call(null,name__32178__auto__,null);
});

sablono.core.range_field32303.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.range_field32303.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32303);

/**
 * Creates a search input field.
 */
sablono.core.search_field32307 = (function sablono$core$search_field32307(var_args){
var args32308 = [];
var len__25876__auto___32375 = arguments.length;
var i__25877__auto___32376 = (0);
while(true){
if((i__25877__auto___32376 < len__25876__auto___32375)){
args32308.push((arguments[i__25877__auto___32376]));

var G__32377 = (i__25877__auto___32376 + (1));
i__25877__auto___32376 = G__32377;
continue;
} else {
}
break;
}

var G__32310 = args32308.length;
switch (G__32310) {
case 1:
return sablono.core.search_field32307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32308.length)].join('')));

}
});

sablono.core.search_field32307.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.search_field32307.call(null,name__32178__auto__,null);
});

sablono.core.search_field32307.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.search_field32307.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32307);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32311 = (function sablono$core$tel_field32311(var_args){
var args32312 = [];
var len__25876__auto___32379 = arguments.length;
var i__25877__auto___32380 = (0);
while(true){
if((i__25877__auto___32380 < len__25876__auto___32379)){
args32312.push((arguments[i__25877__auto___32380]));

var G__32381 = (i__25877__auto___32380 + (1));
i__25877__auto___32380 = G__32381;
continue;
} else {
}
break;
}

var G__32314 = args32312.length;
switch (G__32314) {
case 1:
return sablono.core.tel_field32311.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32311.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32312.length)].join('')));

}
});

sablono.core.tel_field32311.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.tel_field32311.call(null,name__32178__auto__,null);
});

sablono.core.tel_field32311.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.tel_field32311.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32311);

/**
 * Creates a text input field.
 */
sablono.core.text_field32315 = (function sablono$core$text_field32315(var_args){
var args32316 = [];
var len__25876__auto___32383 = arguments.length;
var i__25877__auto___32384 = (0);
while(true){
if((i__25877__auto___32384 < len__25876__auto___32383)){
args32316.push((arguments[i__25877__auto___32384]));

var G__32385 = (i__25877__auto___32384 + (1));
i__25877__auto___32384 = G__32385;
continue;
} else {
}
break;
}

var G__32318 = args32316.length;
switch (G__32318) {
case 1:
return sablono.core.text_field32315.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32315.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32316.length)].join('')));

}
});

sablono.core.text_field32315.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.text_field32315.call(null,name__32178__auto__,null);
});

sablono.core.text_field32315.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.text_field32315.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32315);

/**
 * Creates a time input field.
 */
sablono.core.time_field32319 = (function sablono$core$time_field32319(var_args){
var args32320 = [];
var len__25876__auto___32387 = arguments.length;
var i__25877__auto___32388 = (0);
while(true){
if((i__25877__auto___32388 < len__25876__auto___32387)){
args32320.push((arguments[i__25877__auto___32388]));

var G__32389 = (i__25877__auto___32388 + (1));
i__25877__auto___32388 = G__32389;
continue;
} else {
}
break;
}

var G__32322 = args32320.length;
switch (G__32322) {
case 1:
return sablono.core.time_field32319.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32319.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32320.length)].join('')));

}
});

sablono.core.time_field32319.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.time_field32319.call(null,name__32178__auto__,null);
});

sablono.core.time_field32319.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.time_field32319.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32319);

/**
 * Creates a url input field.
 */
sablono.core.url_field32323 = (function sablono$core$url_field32323(var_args){
var args32324 = [];
var len__25876__auto___32391 = arguments.length;
var i__25877__auto___32392 = (0);
while(true){
if((i__25877__auto___32392 < len__25876__auto___32391)){
args32324.push((arguments[i__25877__auto___32392]));

var G__32393 = (i__25877__auto___32392 + (1));
i__25877__auto___32392 = G__32393;
continue;
} else {
}
break;
}

var G__32326 = args32324.length;
switch (G__32326) {
case 1:
return sablono.core.url_field32323.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32323.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32324.length)].join('')));

}
});

sablono.core.url_field32323.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.url_field32323.call(null,name__32178__auto__,null);
});

sablono.core.url_field32323.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.url_field32323.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32323);

/**
 * Creates a week input field.
 */
sablono.core.week_field32327 = (function sablono$core$week_field32327(var_args){
var args32328 = [];
var len__25876__auto___32395 = arguments.length;
var i__25877__auto___32396 = (0);
while(true){
if((i__25877__auto___32396 < len__25876__auto___32395)){
args32328.push((arguments[i__25877__auto___32396]));

var G__32397 = (i__25877__auto___32396 + (1));
i__25877__auto___32396 = G__32397;
continue;
} else {
}
break;
}

var G__32330 = args32328.length;
switch (G__32330) {
case 1:
return sablono.core.week_field32327.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32327.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32328.length)].join('')));

}
});

sablono.core.week_field32327.cljs$core$IFn$_invoke$arity$1 = (function (name__32178__auto__){
return sablono.core.week_field32327.call(null,name__32178__auto__,null);
});

sablono.core.week_field32327.cljs$core$IFn$_invoke$arity$2 = (function (name__32178__auto__,value__32179__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__32178__auto__,value__32179__auto__);
});

sablono.core.week_field32327.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32327);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32399 = (function sablono$core$check_box32399(var_args){
var args32400 = [];
var len__25876__auto___32403 = arguments.length;
var i__25877__auto___32404 = (0);
while(true){
if((i__25877__auto___32404 < len__25876__auto___32403)){
args32400.push((arguments[i__25877__auto___32404]));

var G__32405 = (i__25877__auto___32404 + (1));
i__25877__auto___32404 = G__32405;
continue;
} else {
}
break;
}

var G__32402 = args32400.length;
switch (G__32402) {
case 1:
return sablono.core.check_box32399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32399.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32400.length)].join('')));

}
});

sablono.core.check_box32399.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box32399.call(null,name,null);
});

sablono.core.check_box32399.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box32399.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box32399.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24801__auto__ = value;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box32399.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32399);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32407 = (function sablono$core$radio_button32407(var_args){
var args32408 = [];
var len__25876__auto___32411 = arguments.length;
var i__25877__auto___32412 = (0);
while(true){
if((i__25877__auto___32412 < len__25876__auto___32411)){
args32408.push((arguments[i__25877__auto___32412]));

var G__32413 = (i__25877__auto___32412 + (1));
i__25877__auto___32412 = G__32413;
continue;
} else {
}
break;
}

var G__32410 = args32408.length;
switch (G__32410) {
case 1:
return sablono.core.radio_button32407.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32407.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32407.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32408.length)].join('')));

}
});

sablono.core.radio_button32407.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button32407.call(null,group,null);
});

sablono.core.radio_button32407.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button32407.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button32407.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24801__auto__ = value;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button32407.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32407);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32415 = (function sablono$core$select_options32415(coll){
var iter__25581__auto__ = (function sablono$core$select_options32415_$_iter__32432(s__32433){
return (new cljs.core.LazySeq(null,(function (){
var s__32433__$1 = s__32433;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32433__$1);
if(temp__4657__auto__){
var s__32433__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32433__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__32433__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__32435 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__32434 = (0);
while(true){
if((i__32434 < size__25580__auto__)){
var x = cljs.core._nth.call(null,c__25579__auto__,i__32434);
cljs.core.chunk_append.call(null,b__32435,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32442 = x;
var text = cljs.core.nth.call(null,vec__32442,(0),null);
var val = cljs.core.nth.call(null,vec__32442,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32442,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32415.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32448 = (i__32434 + (1));
i__32434 = G__32448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32435),sablono$core$select_options32415_$_iter__32432.call(null,cljs.core.chunk_rest.call(null,s__32433__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32435),null);
}
} else {
var x = cljs.core.first.call(null,s__32433__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32445 = x;
var text = cljs.core.nth.call(null,vec__32445,(0),null);
var val = cljs.core.nth.call(null,vec__32445,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32445,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32415.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32415_$_iter__32432.call(null,cljs.core.rest.call(null,s__32433__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32415);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32449 = (function sablono$core$drop_down32449(var_args){
var args32450 = [];
var len__25876__auto___32453 = arguments.length;
var i__25877__auto___32454 = (0);
while(true){
if((i__25877__auto___32454 < len__25876__auto___32453)){
args32450.push((arguments[i__25877__auto___32454]));

var G__32455 = (i__25877__auto___32454 + (1));
i__25877__auto___32454 = G__32455;
continue;
} else {
}
break;
}

var G__32452 = args32450.length;
switch (G__32452) {
case 2:
return sablono.core.drop_down32449.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32449.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32450.length)].join('')));

}
});

sablono.core.drop_down32449.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32449.call(null,name,options,null);
});

sablono.core.drop_down32449.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down32449.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32449);
/**
 * Creates a text area element.
 */
sablono.core.text_area32457 = (function sablono$core$text_area32457(var_args){
var args32458 = [];
var len__25876__auto___32461 = arguments.length;
var i__25877__auto___32462 = (0);
while(true){
if((i__25877__auto___32462 < len__25876__auto___32461)){
args32458.push((arguments[i__25877__auto___32462]));

var G__32463 = (i__25877__auto___32462 + (1));
i__25877__auto___32462 = G__32463;
continue;
} else {
}
break;
}

var G__32460 = args32458.length;
switch (G__32460) {
case 1:
return sablono.core.text_area32457.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32457.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32458.length)].join('')));

}
});

sablono.core.text_area32457.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area32457.call(null,name,null);
});

sablono.core.text_area32457.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24801__auto__ = value;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area32457.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32457);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32465 = (function sablono$core$label32465(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32465);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32466 = (function sablono$core$submit_button32466(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32466);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32467 = (function sablono$core$reset_button32467(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32467);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32468 = (function sablono$core$form_to32468(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32475 = arguments.length;
var i__25877__auto___32476 = (0);
while(true){
if((i__25877__auto___32476 < len__25876__auto___32475)){
args__25883__auto__.push((arguments[i__25877__auto___32476]));

var G__32477 = (i__25877__auto___32476 + (1));
i__25877__auto___32476 = G__32477;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32468.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

sablono.core.form_to32468.cljs$core$IFn$_invoke$arity$variadic = (function (p__32471,body){
var vec__32472 = p__32471;
var method = cljs.core.nth.call(null,vec__32472,(0),null);
var action = cljs.core.nth.call(null,vec__32472,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to32468.cljs$lang$maxFixedArity = (1);

sablono.core.form_to32468.cljs$lang$applyTo = (function (seq32469){
var G__32470 = cljs.core.first.call(null,seq32469);
var seq32469__$1 = cljs.core.next.call(null,seq32469);
return sablono.core.form_to32468.cljs$core$IFn$_invoke$arity$variadic(G__32470,seq32469__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32468);

//# sourceMappingURL=core.js.map?rel=1491429245729