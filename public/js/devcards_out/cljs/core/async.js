// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28801 = [];
var len__25876__auto___28807 = arguments.length;
var i__25877__auto___28808 = (0);
while(true){
if((i__25877__auto___28808 < len__25876__auto___28807)){
args28801.push((arguments[i__25877__auto___28808]));

var G__28809 = (i__25877__auto___28808 + (1));
i__25877__auto___28808 = G__28809;
continue;
} else {
}
break;
}

var G__28803 = args28801.length;
switch (G__28803) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28801.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28804 = (function (f,blockable,meta28805){
this.f = f;
this.blockable = blockable;
this.meta28805 = meta28805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28806,meta28805__$1){
var self__ = this;
var _28806__$1 = this;
return (new cljs.core.async.t_cljs$core$async28804(self__.f,self__.blockable,meta28805__$1));
});

cljs.core.async.t_cljs$core$async28804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28806){
var self__ = this;
var _28806__$1 = this;
return self__.meta28805;
});

cljs.core.async.t_cljs$core$async28804.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28804.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28805","meta28805",-562272878,null)], null);
});

cljs.core.async.t_cljs$core$async28804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28804";

cljs.core.async.t_cljs$core$async28804.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async28804");
});

cljs.core.async.__GT_t_cljs$core$async28804 = (function cljs$core$async$__GT_t_cljs$core$async28804(f__$1,blockable__$1,meta28805){
return (new cljs.core.async.t_cljs$core$async28804(f__$1,blockable__$1,meta28805));
});

}

return (new cljs.core.async.t_cljs$core$async28804(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28813 = [];
var len__25876__auto___28816 = arguments.length;
var i__25877__auto___28817 = (0);
while(true){
if((i__25877__auto___28817 < len__25876__auto___28816)){
args28813.push((arguments[i__25877__auto___28817]));

var G__28818 = (i__25877__auto___28817 + (1));
i__25877__auto___28817 = G__28818;
continue;
} else {
}
break;
}

var G__28815 = args28813.length;
switch (G__28815) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28813.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28820 = [];
var len__25876__auto___28823 = arguments.length;
var i__25877__auto___28824 = (0);
while(true){
if((i__25877__auto___28824 < len__25876__auto___28823)){
args28820.push((arguments[i__25877__auto___28824]));

var G__28825 = (i__25877__auto___28824 + (1));
i__25877__auto___28824 = G__28825;
continue;
} else {
}
break;
}

var G__28822 = args28820.length;
switch (G__28822) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28820.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28827 = [];
var len__25876__auto___28830 = arguments.length;
var i__25877__auto___28831 = (0);
while(true){
if((i__25877__auto___28831 < len__25876__auto___28830)){
args28827.push((arguments[i__25877__auto___28831]));

var G__28832 = (i__25877__auto___28831 + (1));
i__25877__auto___28831 = G__28832;
continue;
} else {
}
break;
}

var G__28829 = args28827.length;
switch (G__28829) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28827.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28834 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28834);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28834,ret){
return (function (){
return fn1.call(null,val_28834);
});})(val_28834,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28835 = [];
var len__25876__auto___28838 = arguments.length;
var i__25877__auto___28839 = (0);
while(true){
if((i__25877__auto___28839 < len__25876__auto___28838)){
args28835.push((arguments[i__25877__auto___28839]));

var G__28840 = (i__25877__auto___28839 + (1));
i__25877__auto___28839 = G__28840;
continue;
} else {
}
break;
}

var G__28837 = args28835.length;
switch (G__28837) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28835.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25716__auto___28842 = n;
var x_28843 = (0);
while(true){
if((x_28843 < n__25716__auto___28842)){
(a[x_28843] = (0));

var G__28844 = (x_28843 + (1));
x_28843 = G__28844;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28845 = (i + (1));
i = G__28845;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28849 = (function (alt_flag,flag,meta28850){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28850 = meta28850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28851,meta28850__$1){
var self__ = this;
var _28851__$1 = this;
return (new cljs.core.async.t_cljs$core$async28849(self__.alt_flag,self__.flag,meta28850__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28851){
var self__ = this;
var _28851__$1 = this;
return self__.meta28850;
});})(flag))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28849.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28850","meta28850",1053644918,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28849";

cljs.core.async.t_cljs$core$async28849.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async28849");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28849 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28849(alt_flag__$1,flag__$1,meta28850){
return (new cljs.core.async.t_cljs$core$async28849(alt_flag__$1,flag__$1,meta28850));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28849(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28855 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28855 = (function (alt_handler,flag,cb,meta28856){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28856 = meta28856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28857,meta28856__$1){
var self__ = this;
var _28857__$1 = this;
return (new cljs.core.async.t_cljs$core$async28855(self__.alt_handler,self__.flag,self__.cb,meta28856__$1));
});

cljs.core.async.t_cljs$core$async28855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28857){
var self__ = this;
var _28857__$1 = this;
return self__.meta28856;
});

cljs.core.async.t_cljs$core$async28855.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28855.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28856","meta28856",1833345089,null)], null);
});

cljs.core.async.t_cljs$core$async28855.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28855";

cljs.core.async.t_cljs$core$async28855.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async28855");
});

cljs.core.async.__GT_t_cljs$core$async28855 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28855(alt_handler__$1,flag__$1,cb__$1,meta28856){
return (new cljs.core.async.t_cljs$core$async28855(alt_handler__$1,flag__$1,cb__$1,meta28856));
});

}

return (new cljs.core.async.t_cljs$core$async28855(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28858_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28858_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28859_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28859_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24801__auto__ = wport;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28860 = (i + (1));
i = G__28860;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24801__auto__ = ret;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24789__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24789__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24789__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___28866 = arguments.length;
var i__25877__auto___28867 = (0);
while(true){
if((i__25877__auto___28867 < len__25876__auto___28866)){
args__25883__auto__.push((arguments[i__25877__auto___28867]));

var G__28868 = (i__25877__auto___28867 + (1));
i__25877__auto___28867 = G__28868;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28863){
var map__28864 = p__28863;
var map__28864__$1 = ((((!((map__28864 == null)))?((((map__28864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28864):map__28864);
var opts = map__28864__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28861){
var G__28862 = cljs.core.first.call(null,seq28861);
var seq28861__$1 = cljs.core.next.call(null,seq28861);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28862,seq28861__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28869 = [];
var len__25876__auto___28919 = arguments.length;
var i__25877__auto___28920 = (0);
while(true){
if((i__25877__auto___28920 < len__25876__auto___28919)){
args28869.push((arguments[i__25877__auto___28920]));

var G__28921 = (i__25877__auto___28920 + (1));
i__25877__auto___28920 = G__28921;
continue;
} else {
}
break;
}

var G__28871 = args28869.length;
switch (G__28871) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28869.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28756__auto___28923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___28923){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___28923){
return (function (state_28895){
var state_val_28896 = (state_28895[(1)]);
if((state_val_28896 === (7))){
var inst_28891 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28897_28924 = state_28895__$1;
(statearr_28897_28924[(2)] = inst_28891);

(statearr_28897_28924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (1))){
var state_28895__$1 = state_28895;
var statearr_28898_28925 = state_28895__$1;
(statearr_28898_28925[(2)] = null);

(statearr_28898_28925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (4))){
var inst_28874 = (state_28895[(7)]);
var inst_28874__$1 = (state_28895[(2)]);
var inst_28875 = (inst_28874__$1 == null);
var state_28895__$1 = (function (){var statearr_28899 = state_28895;
(statearr_28899[(7)] = inst_28874__$1);

return statearr_28899;
})();
if(cljs.core.truth_(inst_28875)){
var statearr_28900_28926 = state_28895__$1;
(statearr_28900_28926[(1)] = (5));

} else {
var statearr_28901_28927 = state_28895__$1;
(statearr_28901_28927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (13))){
var state_28895__$1 = state_28895;
var statearr_28902_28928 = state_28895__$1;
(statearr_28902_28928[(2)] = null);

(statearr_28902_28928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (6))){
var inst_28874 = (state_28895[(7)]);
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28895__$1,(11),to,inst_28874);
} else {
if((state_val_28896 === (3))){
var inst_28893 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28895__$1,inst_28893);
} else {
if((state_val_28896 === (12))){
var state_28895__$1 = state_28895;
var statearr_28903_28929 = state_28895__$1;
(statearr_28903_28929[(2)] = null);

(statearr_28903_28929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (2))){
var state_28895__$1 = state_28895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28895__$1,(4),from);
} else {
if((state_val_28896 === (11))){
var inst_28884 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
if(cljs.core.truth_(inst_28884)){
var statearr_28904_28930 = state_28895__$1;
(statearr_28904_28930[(1)] = (12));

} else {
var statearr_28905_28931 = state_28895__$1;
(statearr_28905_28931[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (9))){
var state_28895__$1 = state_28895;
var statearr_28906_28932 = state_28895__$1;
(statearr_28906_28932[(2)] = null);

(statearr_28906_28932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (5))){
var state_28895__$1 = state_28895;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28907_28933 = state_28895__$1;
(statearr_28907_28933[(1)] = (8));

} else {
var statearr_28908_28934 = state_28895__$1;
(statearr_28908_28934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (14))){
var inst_28889 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28909_28935 = state_28895__$1;
(statearr_28909_28935[(2)] = inst_28889);

(statearr_28909_28935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (10))){
var inst_28881 = (state_28895[(2)]);
var state_28895__$1 = state_28895;
var statearr_28910_28936 = state_28895__$1;
(statearr_28910_28936[(2)] = inst_28881);

(statearr_28910_28936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28896 === (8))){
var inst_28878 = cljs.core.async.close_BANG_.call(null,to);
var state_28895__$1 = state_28895;
var statearr_28911_28937 = state_28895__$1;
(statearr_28911_28937[(2)] = inst_28878);

(statearr_28911_28937[(1)] = (10));


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
});})(c__28756__auto___28923))
;
return ((function (switch__28644__auto__,c__28756__auto___28923){
return (function() {
var cljs$core$async$state_machine__28645__auto__ = null;
var cljs$core$async$state_machine__28645__auto____0 = (function (){
var statearr_28915 = [null,null,null,null,null,null,null,null];
(statearr_28915[(0)] = cljs$core$async$state_machine__28645__auto__);

(statearr_28915[(1)] = (1));

return statearr_28915;
});
var cljs$core$async$state_machine__28645__auto____1 = (function (state_28895){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_28895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e28916){if((e28916 instanceof Object)){
var ex__28648__auto__ = e28916;
var statearr_28917_28938 = state_28895;
(statearr_28917_28938[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28939 = state_28895;
state_28895 = G__28939;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$state_machine__28645__auto__ = function(state_28895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28645__auto____1.call(this,state_28895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28645__auto____0;
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28645__auto____1;
return cljs$core$async$state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___28923))
})();
var state__28758__auto__ = (function (){var statearr_28918 = f__28757__auto__.call(null);
(statearr_28918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___28923);

return statearr_28918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___28923))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29127){
var vec__29128 = p__29127;
var v = cljs.core.nth.call(null,vec__29128,(0),null);
var p = cljs.core.nth.call(null,vec__29128,(1),null);
var job = vec__29128;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28756__auto___29314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___29314,res,vec__29128,v,p,job,jobs,results){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___29314,res,vec__29128,v,p,job,jobs,results){
return (function (state_29135){
var state_val_29136 = (state_29135[(1)]);
if((state_val_29136 === (1))){
var state_29135__$1 = state_29135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29135__$1,(2),res,v);
} else {
if((state_val_29136 === (2))){
var inst_29132 = (state_29135[(2)]);
var inst_29133 = cljs.core.async.close_BANG_.call(null,res);
var state_29135__$1 = (function (){var statearr_29137 = state_29135;
(statearr_29137[(7)] = inst_29132);

return statearr_29137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29135__$1,inst_29133);
} else {
return null;
}
}
});})(c__28756__auto___29314,res,vec__29128,v,p,job,jobs,results))
;
return ((function (switch__28644__auto__,c__28756__auto___29314,res,vec__29128,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0 = (function (){
var statearr_29141 = [null,null,null,null,null,null,null,null];
(statearr_29141[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__);

(statearr_29141[(1)] = (1));

return statearr_29141;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1 = (function (state_29135){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_29135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e29142){if((e29142 instanceof Object)){
var ex__28648__auto__ = e29142;
var statearr_29143_29315 = state_29135;
(statearr_29143_29315[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29316 = state_29135;
state_29135 = G__29316;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__ = function(state_29135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1.call(this,state_29135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___29314,res,vec__29128,v,p,job,jobs,results))
})();
var state__28758__auto__ = (function (){var statearr_29144 = f__28757__auto__.call(null);
(statearr_29144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___29314);

return statearr_29144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___29314,res,vec__29128,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29145){
var vec__29146 = p__29145;
var v = cljs.core.nth.call(null,vec__29146,(0),null);
var p = cljs.core.nth.call(null,vec__29146,(1),null);
var job = vec__29146;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25716__auto___29317 = n;
var __29318 = (0);
while(true){
if((__29318 < n__25716__auto___29317)){
var G__29149_29319 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29149_29319) {
case "compute":
var c__28756__auto___29321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29318,c__28756__auto___29321,G__29149_29319,n__25716__auto___29317,jobs,results,process,async){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (__29318,c__28756__auto___29321,G__29149_29319,n__25716__auto___29317,jobs,results,process,async){
return (function (state_29162){
var state_val_29163 = (state_29162[(1)]);
if((state_val_29163 === (1))){
var state_29162__$1 = state_29162;
var statearr_29164_29322 = state_29162__$1;
(statearr_29164_29322[(2)] = null);

(statearr_29164_29322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (2))){
var state_29162__$1 = state_29162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29162__$1,(4),jobs);
} else {
if((state_val_29163 === (3))){
var inst_29160 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29162__$1,inst_29160);
} else {
if((state_val_29163 === (4))){
var inst_29152 = (state_29162[(2)]);
var inst_29153 = process.call(null,inst_29152);
var state_29162__$1 = state_29162;
if(cljs.core.truth_(inst_29153)){
var statearr_29165_29323 = state_29162__$1;
(statearr_29165_29323[(1)] = (5));

} else {
var statearr_29166_29324 = state_29162__$1;
(statearr_29166_29324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (5))){
var state_29162__$1 = state_29162;
var statearr_29167_29325 = state_29162__$1;
(statearr_29167_29325[(2)] = null);

(statearr_29167_29325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (6))){
var state_29162__$1 = state_29162;
var statearr_29168_29326 = state_29162__$1;
(statearr_29168_29326[(2)] = null);

(statearr_29168_29326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (7))){
var inst_29158 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
var statearr_29169_29327 = state_29162__$1;
(statearr_29169_29327[(2)] = inst_29158);

(statearr_29169_29327[(1)] = (3));


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
});})(__29318,c__28756__auto___29321,G__29149_29319,n__25716__auto___29317,jobs,results,process,async))
;
return ((function (__29318,switch__28644__auto__,c__28756__auto___29321,G__29149_29319,n__25716__auto___29317,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0 = (function (){
var statearr_29173 = [null,null,null,null,null,null,null];
(statearr_29173[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__);

(statearr_29173[(1)] = (1));

return statearr_29173;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1 = (function (state_29162){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_29162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e29174){if((e29174 instanceof Object)){
var ex__28648__auto__ = e29174;
var statearr_29175_29328 = state_29162;
(statearr_29175_29328[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29329 = state_29162;
state_29162 = G__29329;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__ = function(state_29162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1.call(this,state_29162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__;
})()
;})(__29318,switch__28644__auto__,c__28756__auto___29321,G__29149_29319,n__25716__auto___29317,jobs,results,process,async))
})();
var state__28758__auto__ = (function (){var statearr_29176 = f__28757__auto__.call(null);
(statearr_29176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___29321);

return statearr_29176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(__29318,c__28756__auto___29321,G__29149_29319,n__25716__auto___29317,jobs,results,process,async))
);


break;
case "async":
var c__28756__auto___29330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29318,c__28756__auto___29330,G__29149_29319,n__25716__auto___29317,jobs,results,process,async){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (__29318,c__28756__auto___29330,G__29149_29319,n__25716__auto___29317,jobs,results,process,async){
return (function (state_29189){
var state_val_29190 = (state_29189[(1)]);
if((state_val_29190 === (1))){
var state_29189__$1 = state_29189;
var statearr_29191_29331 = state_29189__$1;
(statearr_29191_29331[(2)] = null);

(statearr_29191_29331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29190 === (2))){
var state_29189__$1 = state_29189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29189__$1,(4),jobs);
} else {
if((state_val_29190 === (3))){
var inst_29187 = (state_29189[(2)]);
var state_29189__$1 = state_29189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29189__$1,inst_29187);
} else {
if((state_val_29190 === (4))){
var inst_29179 = (state_29189[(2)]);
var inst_29180 = async.call(null,inst_29179);
var state_29189__$1 = state_29189;
if(cljs.core.truth_(inst_29180)){
var statearr_29192_29332 = state_29189__$1;
(statearr_29192_29332[(1)] = (5));

} else {
var statearr_29193_29333 = state_29189__$1;
(statearr_29193_29333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29190 === (5))){
var state_29189__$1 = state_29189;
var statearr_29194_29334 = state_29189__$1;
(statearr_29194_29334[(2)] = null);

(statearr_29194_29334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29190 === (6))){
var state_29189__$1 = state_29189;
var statearr_29195_29335 = state_29189__$1;
(statearr_29195_29335[(2)] = null);

(statearr_29195_29335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29190 === (7))){
var inst_29185 = (state_29189[(2)]);
var state_29189__$1 = state_29189;
var statearr_29196_29336 = state_29189__$1;
(statearr_29196_29336[(2)] = inst_29185);

(statearr_29196_29336[(1)] = (3));


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
});})(__29318,c__28756__auto___29330,G__29149_29319,n__25716__auto___29317,jobs,results,process,async))
;
return ((function (__29318,switch__28644__auto__,c__28756__auto___29330,G__29149_29319,n__25716__auto___29317,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0 = (function (){
var statearr_29200 = [null,null,null,null,null,null,null];
(statearr_29200[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__);

(statearr_29200[(1)] = (1));

return statearr_29200;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1 = (function (state_29189){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_29189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e29201){if((e29201 instanceof Object)){
var ex__28648__auto__ = e29201;
var statearr_29202_29337 = state_29189;
(statearr_29202_29337[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29338 = state_29189;
state_29189 = G__29338;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__ = function(state_29189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1.call(this,state_29189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__;
})()
;})(__29318,switch__28644__auto__,c__28756__auto___29330,G__29149_29319,n__25716__auto___29317,jobs,results,process,async))
})();
var state__28758__auto__ = (function (){var statearr_29203 = f__28757__auto__.call(null);
(statearr_29203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___29330);

return statearr_29203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(__29318,c__28756__auto___29330,G__29149_29319,n__25716__auto___29317,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29339 = (__29318 + (1));
__29318 = G__29339;
continue;
} else {
}
break;
}

var c__28756__auto___29340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___29340,jobs,results,process,async){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___29340,jobs,results,process,async){
return (function (state_29225){
var state_val_29226 = (state_29225[(1)]);
if((state_val_29226 === (1))){
var state_29225__$1 = state_29225;
var statearr_29227_29341 = state_29225__$1;
(statearr_29227_29341[(2)] = null);

(statearr_29227_29341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (2))){
var state_29225__$1 = state_29225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29225__$1,(4),from);
} else {
if((state_val_29226 === (3))){
var inst_29223 = (state_29225[(2)]);
var state_29225__$1 = state_29225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29225__$1,inst_29223);
} else {
if((state_val_29226 === (4))){
var inst_29206 = (state_29225[(7)]);
var inst_29206__$1 = (state_29225[(2)]);
var inst_29207 = (inst_29206__$1 == null);
var state_29225__$1 = (function (){var statearr_29228 = state_29225;
(statearr_29228[(7)] = inst_29206__$1);

return statearr_29228;
})();
if(cljs.core.truth_(inst_29207)){
var statearr_29229_29342 = state_29225__$1;
(statearr_29229_29342[(1)] = (5));

} else {
var statearr_29230_29343 = state_29225__$1;
(statearr_29230_29343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (5))){
var inst_29209 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29225__$1 = state_29225;
var statearr_29231_29344 = state_29225__$1;
(statearr_29231_29344[(2)] = inst_29209);

(statearr_29231_29344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (6))){
var inst_29206 = (state_29225[(7)]);
var inst_29211 = (state_29225[(8)]);
var inst_29211__$1 = cljs.core.async.chan.call(null,(1));
var inst_29212 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29213 = [inst_29206,inst_29211__$1];
var inst_29214 = (new cljs.core.PersistentVector(null,2,(5),inst_29212,inst_29213,null));
var state_29225__$1 = (function (){var statearr_29232 = state_29225;
(statearr_29232[(8)] = inst_29211__$1);

return statearr_29232;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29225__$1,(8),jobs,inst_29214);
} else {
if((state_val_29226 === (7))){
var inst_29221 = (state_29225[(2)]);
var state_29225__$1 = state_29225;
var statearr_29233_29345 = state_29225__$1;
(statearr_29233_29345[(2)] = inst_29221);

(statearr_29233_29345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29226 === (8))){
var inst_29211 = (state_29225[(8)]);
var inst_29216 = (state_29225[(2)]);
var state_29225__$1 = (function (){var statearr_29234 = state_29225;
(statearr_29234[(9)] = inst_29216);

return statearr_29234;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29225__$1,(9),results,inst_29211);
} else {
if((state_val_29226 === (9))){
var inst_29218 = (state_29225[(2)]);
var state_29225__$1 = (function (){var statearr_29235 = state_29225;
(statearr_29235[(10)] = inst_29218);

return statearr_29235;
})();
var statearr_29236_29346 = state_29225__$1;
(statearr_29236_29346[(2)] = null);

(statearr_29236_29346[(1)] = (2));


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
});})(c__28756__auto___29340,jobs,results,process,async))
;
return ((function (switch__28644__auto__,c__28756__auto___29340,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0 = (function (){
var statearr_29240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__);

(statearr_29240[(1)] = (1));

return statearr_29240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1 = (function (state_29225){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_29225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e29241){if((e29241 instanceof Object)){
var ex__28648__auto__ = e29241;
var statearr_29242_29347 = state_29225;
(statearr_29242_29347[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29348 = state_29225;
state_29225 = G__29348;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__ = function(state_29225){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1.call(this,state_29225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___29340,jobs,results,process,async))
})();
var state__28758__auto__ = (function (){var statearr_29243 = f__28757__auto__.call(null);
(statearr_29243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___29340);

return statearr_29243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___29340,jobs,results,process,async))
);


var c__28756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto__,jobs,results,process,async){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto__,jobs,results,process,async){
return (function (state_29281){
var state_val_29282 = (state_29281[(1)]);
if((state_val_29282 === (7))){
var inst_29277 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
var statearr_29283_29349 = state_29281__$1;
(statearr_29283_29349[(2)] = inst_29277);

(statearr_29283_29349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (20))){
var state_29281__$1 = state_29281;
var statearr_29284_29350 = state_29281__$1;
(statearr_29284_29350[(2)] = null);

(statearr_29284_29350[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (1))){
var state_29281__$1 = state_29281;
var statearr_29285_29351 = state_29281__$1;
(statearr_29285_29351[(2)] = null);

(statearr_29285_29351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (4))){
var inst_29246 = (state_29281[(7)]);
var inst_29246__$1 = (state_29281[(2)]);
var inst_29247 = (inst_29246__$1 == null);
var state_29281__$1 = (function (){var statearr_29286 = state_29281;
(statearr_29286[(7)] = inst_29246__$1);

return statearr_29286;
})();
if(cljs.core.truth_(inst_29247)){
var statearr_29287_29352 = state_29281__$1;
(statearr_29287_29352[(1)] = (5));

} else {
var statearr_29288_29353 = state_29281__$1;
(statearr_29288_29353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (15))){
var inst_29259 = (state_29281[(8)]);
var state_29281__$1 = state_29281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29281__$1,(18),to,inst_29259);
} else {
if((state_val_29282 === (21))){
var inst_29272 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
var statearr_29289_29354 = state_29281__$1;
(statearr_29289_29354[(2)] = inst_29272);

(statearr_29289_29354[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (13))){
var inst_29274 = (state_29281[(2)]);
var state_29281__$1 = (function (){var statearr_29290 = state_29281;
(statearr_29290[(9)] = inst_29274);

return statearr_29290;
})();
var statearr_29291_29355 = state_29281__$1;
(statearr_29291_29355[(2)] = null);

(statearr_29291_29355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (6))){
var inst_29246 = (state_29281[(7)]);
var state_29281__$1 = state_29281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29281__$1,(11),inst_29246);
} else {
if((state_val_29282 === (17))){
var inst_29267 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
if(cljs.core.truth_(inst_29267)){
var statearr_29292_29356 = state_29281__$1;
(statearr_29292_29356[(1)] = (19));

} else {
var statearr_29293_29357 = state_29281__$1;
(statearr_29293_29357[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (3))){
var inst_29279 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29281__$1,inst_29279);
} else {
if((state_val_29282 === (12))){
var inst_29256 = (state_29281[(10)]);
var state_29281__$1 = state_29281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29281__$1,(14),inst_29256);
} else {
if((state_val_29282 === (2))){
var state_29281__$1 = state_29281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29281__$1,(4),results);
} else {
if((state_val_29282 === (19))){
var state_29281__$1 = state_29281;
var statearr_29294_29358 = state_29281__$1;
(statearr_29294_29358[(2)] = null);

(statearr_29294_29358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (11))){
var inst_29256 = (state_29281[(2)]);
var state_29281__$1 = (function (){var statearr_29295 = state_29281;
(statearr_29295[(10)] = inst_29256);

return statearr_29295;
})();
var statearr_29296_29359 = state_29281__$1;
(statearr_29296_29359[(2)] = null);

(statearr_29296_29359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (9))){
var state_29281__$1 = state_29281;
var statearr_29297_29360 = state_29281__$1;
(statearr_29297_29360[(2)] = null);

(statearr_29297_29360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (5))){
var state_29281__$1 = state_29281;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29298_29361 = state_29281__$1;
(statearr_29298_29361[(1)] = (8));

} else {
var statearr_29299_29362 = state_29281__$1;
(statearr_29299_29362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (14))){
var inst_29259 = (state_29281[(8)]);
var inst_29261 = (state_29281[(11)]);
var inst_29259__$1 = (state_29281[(2)]);
var inst_29260 = (inst_29259__$1 == null);
var inst_29261__$1 = cljs.core.not.call(null,inst_29260);
var state_29281__$1 = (function (){var statearr_29300 = state_29281;
(statearr_29300[(8)] = inst_29259__$1);

(statearr_29300[(11)] = inst_29261__$1);

return statearr_29300;
})();
if(inst_29261__$1){
var statearr_29301_29363 = state_29281__$1;
(statearr_29301_29363[(1)] = (15));

} else {
var statearr_29302_29364 = state_29281__$1;
(statearr_29302_29364[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (16))){
var inst_29261 = (state_29281[(11)]);
var state_29281__$1 = state_29281;
var statearr_29303_29365 = state_29281__$1;
(statearr_29303_29365[(2)] = inst_29261);

(statearr_29303_29365[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (10))){
var inst_29253 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
var statearr_29304_29366 = state_29281__$1;
(statearr_29304_29366[(2)] = inst_29253);

(statearr_29304_29366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (18))){
var inst_29264 = (state_29281[(2)]);
var state_29281__$1 = state_29281;
var statearr_29305_29367 = state_29281__$1;
(statearr_29305_29367[(2)] = inst_29264);

(statearr_29305_29367[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29282 === (8))){
var inst_29250 = cljs.core.async.close_BANG_.call(null,to);
var state_29281__$1 = state_29281;
var statearr_29306_29368 = state_29281__$1;
(statearr_29306_29368[(2)] = inst_29250);

(statearr_29306_29368[(1)] = (10));


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
});})(c__28756__auto__,jobs,results,process,async))
;
return ((function (switch__28644__auto__,c__28756__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0 = (function (){
var statearr_29310 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__);

(statearr_29310[(1)] = (1));

return statearr_29310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1 = (function (state_29281){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_29281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e29311){if((e29311 instanceof Object)){
var ex__28648__auto__ = e29311;
var statearr_29312_29369 = state_29281;
(statearr_29312_29369[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29370 = state_29281;
state_29281 = G__29370;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__ = function(state_29281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1.call(this,state_29281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28645__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto__,jobs,results,process,async))
})();
var state__28758__auto__ = (function (){var statearr_29313 = f__28757__auto__.call(null);
(statearr_29313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto__);

return statearr_29313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto__,jobs,results,process,async))
);

return c__28756__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29371 = [];
var len__25876__auto___29374 = arguments.length;
var i__25877__auto___29375 = (0);
while(true){
if((i__25877__auto___29375 < len__25876__auto___29374)){
args29371.push((arguments[i__25877__auto___29375]));

var G__29376 = (i__25877__auto___29375 + (1));
i__25877__auto___29375 = G__29376;
continue;
} else {
}
break;
}

var G__29373 = args29371.length;
switch (G__29373) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29371.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29378 = [];
var len__25876__auto___29381 = arguments.length;
var i__25877__auto___29382 = (0);
while(true){
if((i__25877__auto___29382 < len__25876__auto___29381)){
args29378.push((arguments[i__25877__auto___29382]));

var G__29383 = (i__25877__auto___29382 + (1));
i__25877__auto___29382 = G__29383;
continue;
} else {
}
break;
}

var G__29380 = args29378.length;
switch (G__29380) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29378.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29385 = [];
var len__25876__auto___29438 = arguments.length;
var i__25877__auto___29439 = (0);
while(true){
if((i__25877__auto___29439 < len__25876__auto___29438)){
args29385.push((arguments[i__25877__auto___29439]));

var G__29440 = (i__25877__auto___29439 + (1));
i__25877__auto___29439 = G__29440;
continue;
} else {
}
break;
}

var G__29387 = args29385.length;
switch (G__29387) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29385.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28756__auto___29442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___29442,tc,fc){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___29442,tc,fc){
return (function (state_29413){
var state_val_29414 = (state_29413[(1)]);
if((state_val_29414 === (7))){
var inst_29409 = (state_29413[(2)]);
var state_29413__$1 = state_29413;
var statearr_29415_29443 = state_29413__$1;
(statearr_29415_29443[(2)] = inst_29409);

(statearr_29415_29443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (1))){
var state_29413__$1 = state_29413;
var statearr_29416_29444 = state_29413__$1;
(statearr_29416_29444[(2)] = null);

(statearr_29416_29444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (4))){
var inst_29390 = (state_29413[(7)]);
var inst_29390__$1 = (state_29413[(2)]);
var inst_29391 = (inst_29390__$1 == null);
var state_29413__$1 = (function (){var statearr_29417 = state_29413;
(statearr_29417[(7)] = inst_29390__$1);

return statearr_29417;
})();
if(cljs.core.truth_(inst_29391)){
var statearr_29418_29445 = state_29413__$1;
(statearr_29418_29445[(1)] = (5));

} else {
var statearr_29419_29446 = state_29413__$1;
(statearr_29419_29446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (13))){
var state_29413__$1 = state_29413;
var statearr_29420_29447 = state_29413__$1;
(statearr_29420_29447[(2)] = null);

(statearr_29420_29447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (6))){
var inst_29390 = (state_29413[(7)]);
var inst_29396 = p.call(null,inst_29390);
var state_29413__$1 = state_29413;
if(cljs.core.truth_(inst_29396)){
var statearr_29421_29448 = state_29413__$1;
(statearr_29421_29448[(1)] = (9));

} else {
var statearr_29422_29449 = state_29413__$1;
(statearr_29422_29449[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (3))){
var inst_29411 = (state_29413[(2)]);
var state_29413__$1 = state_29413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29413__$1,inst_29411);
} else {
if((state_val_29414 === (12))){
var state_29413__$1 = state_29413;
var statearr_29423_29450 = state_29413__$1;
(statearr_29423_29450[(2)] = null);

(statearr_29423_29450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (2))){
var state_29413__$1 = state_29413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29413__$1,(4),ch);
} else {
if((state_val_29414 === (11))){
var inst_29390 = (state_29413[(7)]);
var inst_29400 = (state_29413[(2)]);
var state_29413__$1 = state_29413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29413__$1,(8),inst_29400,inst_29390);
} else {
if((state_val_29414 === (9))){
var state_29413__$1 = state_29413;
var statearr_29424_29451 = state_29413__$1;
(statearr_29424_29451[(2)] = tc);

(statearr_29424_29451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (5))){
var inst_29393 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29394 = cljs.core.async.close_BANG_.call(null,fc);
var state_29413__$1 = (function (){var statearr_29425 = state_29413;
(statearr_29425[(8)] = inst_29393);

return statearr_29425;
})();
var statearr_29426_29452 = state_29413__$1;
(statearr_29426_29452[(2)] = inst_29394);

(statearr_29426_29452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (14))){
var inst_29407 = (state_29413[(2)]);
var state_29413__$1 = state_29413;
var statearr_29427_29453 = state_29413__$1;
(statearr_29427_29453[(2)] = inst_29407);

(statearr_29427_29453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (10))){
var state_29413__$1 = state_29413;
var statearr_29428_29454 = state_29413__$1;
(statearr_29428_29454[(2)] = fc);

(statearr_29428_29454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29414 === (8))){
var inst_29402 = (state_29413[(2)]);
var state_29413__$1 = state_29413;
if(cljs.core.truth_(inst_29402)){
var statearr_29429_29455 = state_29413__$1;
(statearr_29429_29455[(1)] = (12));

} else {
var statearr_29430_29456 = state_29413__$1;
(statearr_29430_29456[(1)] = (13));

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
});})(c__28756__auto___29442,tc,fc))
;
return ((function (switch__28644__auto__,c__28756__auto___29442,tc,fc){
return (function() {
var cljs$core$async$state_machine__28645__auto__ = null;
var cljs$core$async$state_machine__28645__auto____0 = (function (){
var statearr_29434 = [null,null,null,null,null,null,null,null,null];
(statearr_29434[(0)] = cljs$core$async$state_machine__28645__auto__);

(statearr_29434[(1)] = (1));

return statearr_29434;
});
var cljs$core$async$state_machine__28645__auto____1 = (function (state_29413){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_29413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e29435){if((e29435 instanceof Object)){
var ex__28648__auto__ = e29435;
var statearr_29436_29457 = state_29413;
(statearr_29436_29457[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29458 = state_29413;
state_29413 = G__29458;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$state_machine__28645__auto__ = function(state_29413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28645__auto____1.call(this,state_29413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28645__auto____0;
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28645__auto____1;
return cljs$core$async$state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___29442,tc,fc))
})();
var state__28758__auto__ = (function (){var statearr_29437 = f__28757__auto__.call(null);
(statearr_29437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___29442);

return statearr_29437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___29442,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto__){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto__){
return (function (state_29522){
var state_val_29523 = (state_29522[(1)]);
if((state_val_29523 === (7))){
var inst_29518 = (state_29522[(2)]);
var state_29522__$1 = state_29522;
var statearr_29524_29545 = state_29522__$1;
(statearr_29524_29545[(2)] = inst_29518);

(statearr_29524_29545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29523 === (1))){
var inst_29502 = init;
var state_29522__$1 = (function (){var statearr_29525 = state_29522;
(statearr_29525[(7)] = inst_29502);

return statearr_29525;
})();
var statearr_29526_29546 = state_29522__$1;
(statearr_29526_29546[(2)] = null);

(statearr_29526_29546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29523 === (4))){
var inst_29505 = (state_29522[(8)]);
var inst_29505__$1 = (state_29522[(2)]);
var inst_29506 = (inst_29505__$1 == null);
var state_29522__$1 = (function (){var statearr_29527 = state_29522;
(statearr_29527[(8)] = inst_29505__$1);

return statearr_29527;
})();
if(cljs.core.truth_(inst_29506)){
var statearr_29528_29547 = state_29522__$1;
(statearr_29528_29547[(1)] = (5));

} else {
var statearr_29529_29548 = state_29522__$1;
(statearr_29529_29548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29523 === (6))){
var inst_29505 = (state_29522[(8)]);
var inst_29502 = (state_29522[(7)]);
var inst_29509 = (state_29522[(9)]);
var inst_29509__$1 = f.call(null,inst_29502,inst_29505);
var inst_29510 = cljs.core.reduced_QMARK_.call(null,inst_29509__$1);
var state_29522__$1 = (function (){var statearr_29530 = state_29522;
(statearr_29530[(9)] = inst_29509__$1);

return statearr_29530;
})();
if(inst_29510){
var statearr_29531_29549 = state_29522__$1;
(statearr_29531_29549[(1)] = (8));

} else {
var statearr_29532_29550 = state_29522__$1;
(statearr_29532_29550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29523 === (3))){
var inst_29520 = (state_29522[(2)]);
var state_29522__$1 = state_29522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29522__$1,inst_29520);
} else {
if((state_val_29523 === (2))){
var state_29522__$1 = state_29522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29522__$1,(4),ch);
} else {
if((state_val_29523 === (9))){
var inst_29509 = (state_29522[(9)]);
var inst_29502 = inst_29509;
var state_29522__$1 = (function (){var statearr_29533 = state_29522;
(statearr_29533[(7)] = inst_29502);

return statearr_29533;
})();
var statearr_29534_29551 = state_29522__$1;
(statearr_29534_29551[(2)] = null);

(statearr_29534_29551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29523 === (5))){
var inst_29502 = (state_29522[(7)]);
var state_29522__$1 = state_29522;
var statearr_29535_29552 = state_29522__$1;
(statearr_29535_29552[(2)] = inst_29502);

(statearr_29535_29552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29523 === (10))){
var inst_29516 = (state_29522[(2)]);
var state_29522__$1 = state_29522;
var statearr_29536_29553 = state_29522__$1;
(statearr_29536_29553[(2)] = inst_29516);

(statearr_29536_29553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29523 === (8))){
var inst_29509 = (state_29522[(9)]);
var inst_29512 = cljs.core.deref.call(null,inst_29509);
var state_29522__$1 = state_29522;
var statearr_29537_29554 = state_29522__$1;
(statearr_29537_29554[(2)] = inst_29512);

(statearr_29537_29554[(1)] = (10));


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
});})(c__28756__auto__))
;
return ((function (switch__28644__auto__,c__28756__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28645__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28645__auto____0 = (function (){
var statearr_29541 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29541[(0)] = cljs$core$async$reduce_$_state_machine__28645__auto__);

(statearr_29541[(1)] = (1));

return statearr_29541;
});
var cljs$core$async$reduce_$_state_machine__28645__auto____1 = (function (state_29522){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_29522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e29542){if((e29542 instanceof Object)){
var ex__28648__auto__ = e29542;
var statearr_29543_29555 = state_29522;
(statearr_29543_29555[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29556 = state_29522;
state_29522 = G__29556;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28645__auto__ = function(state_29522){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28645__auto____1.call(this,state_29522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28645__auto____0;
cljs$core$async$reduce_$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28645__auto____1;
return cljs$core$async$reduce_$_state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto__))
})();
var state__28758__auto__ = (function (){var statearr_29544 = f__28757__auto__.call(null);
(statearr_29544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto__);

return statearr_29544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto__))
);

return c__28756__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto__,f__$1){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto__,f__$1){
return (function (state_29576){
var state_val_29577 = (state_29576[(1)]);
if((state_val_29577 === (1))){
var inst_29571 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29576__$1 = state_29576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29576__$1,(2),inst_29571);
} else {
if((state_val_29577 === (2))){
var inst_29573 = (state_29576[(2)]);
var inst_29574 = f__$1.call(null,inst_29573);
var state_29576__$1 = state_29576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29576__$1,inst_29574);
} else {
return null;
}
}
});})(c__28756__auto__,f__$1))
;
return ((function (switch__28644__auto__,c__28756__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28645__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28645__auto____0 = (function (){
var statearr_29581 = [null,null,null,null,null,null,null];
(statearr_29581[(0)] = cljs$core$async$transduce_$_state_machine__28645__auto__);

(statearr_29581[(1)] = (1));

return statearr_29581;
});
var cljs$core$async$transduce_$_state_machine__28645__auto____1 = (function (state_29576){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_29576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e29582){if((e29582 instanceof Object)){
var ex__28648__auto__ = e29582;
var statearr_29583_29585 = state_29576;
(statearr_29583_29585[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29586 = state_29576;
state_29576 = G__29586;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28645__auto__ = function(state_29576){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28645__auto____1.call(this,state_29576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28645__auto____0;
cljs$core$async$transduce_$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28645__auto____1;
return cljs$core$async$transduce_$_state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto__,f__$1))
})();
var state__28758__auto__ = (function (){var statearr_29584 = f__28757__auto__.call(null);
(statearr_29584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto__);

return statearr_29584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto__,f__$1))
);

return c__28756__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29587 = [];
var len__25876__auto___29639 = arguments.length;
var i__25877__auto___29640 = (0);
while(true){
if((i__25877__auto___29640 < len__25876__auto___29639)){
args29587.push((arguments[i__25877__auto___29640]));

var G__29641 = (i__25877__auto___29640 + (1));
i__25877__auto___29640 = G__29641;
continue;
} else {
}
break;
}

var G__29589 = args29587.length;
switch (G__29589) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29587.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto__){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto__){
return (function (state_29614){
var state_val_29615 = (state_29614[(1)]);
if((state_val_29615 === (7))){
var inst_29596 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29616_29643 = state_29614__$1;
(statearr_29616_29643[(2)] = inst_29596);

(statearr_29616_29643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (1))){
var inst_29590 = cljs.core.seq.call(null,coll);
var inst_29591 = inst_29590;
var state_29614__$1 = (function (){var statearr_29617 = state_29614;
(statearr_29617[(7)] = inst_29591);

return statearr_29617;
})();
var statearr_29618_29644 = state_29614__$1;
(statearr_29618_29644[(2)] = null);

(statearr_29618_29644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (4))){
var inst_29591 = (state_29614[(7)]);
var inst_29594 = cljs.core.first.call(null,inst_29591);
var state_29614__$1 = state_29614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29614__$1,(7),ch,inst_29594);
} else {
if((state_val_29615 === (13))){
var inst_29608 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29619_29645 = state_29614__$1;
(statearr_29619_29645[(2)] = inst_29608);

(statearr_29619_29645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (6))){
var inst_29599 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
if(cljs.core.truth_(inst_29599)){
var statearr_29620_29646 = state_29614__$1;
(statearr_29620_29646[(1)] = (8));

} else {
var statearr_29621_29647 = state_29614__$1;
(statearr_29621_29647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (3))){
var inst_29612 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29614__$1,inst_29612);
} else {
if((state_val_29615 === (12))){
var state_29614__$1 = state_29614;
var statearr_29622_29648 = state_29614__$1;
(statearr_29622_29648[(2)] = null);

(statearr_29622_29648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (2))){
var inst_29591 = (state_29614[(7)]);
var state_29614__$1 = state_29614;
if(cljs.core.truth_(inst_29591)){
var statearr_29623_29649 = state_29614__$1;
(statearr_29623_29649[(1)] = (4));

} else {
var statearr_29624_29650 = state_29614__$1;
(statearr_29624_29650[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (11))){
var inst_29605 = cljs.core.async.close_BANG_.call(null,ch);
var state_29614__$1 = state_29614;
var statearr_29625_29651 = state_29614__$1;
(statearr_29625_29651[(2)] = inst_29605);

(statearr_29625_29651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (9))){
var state_29614__$1 = state_29614;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29626_29652 = state_29614__$1;
(statearr_29626_29652[(1)] = (11));

} else {
var statearr_29627_29653 = state_29614__$1;
(statearr_29627_29653[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (5))){
var inst_29591 = (state_29614[(7)]);
var state_29614__$1 = state_29614;
var statearr_29628_29654 = state_29614__$1;
(statearr_29628_29654[(2)] = inst_29591);

(statearr_29628_29654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (10))){
var inst_29610 = (state_29614[(2)]);
var state_29614__$1 = state_29614;
var statearr_29629_29655 = state_29614__$1;
(statearr_29629_29655[(2)] = inst_29610);

(statearr_29629_29655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29615 === (8))){
var inst_29591 = (state_29614[(7)]);
var inst_29601 = cljs.core.next.call(null,inst_29591);
var inst_29591__$1 = inst_29601;
var state_29614__$1 = (function (){var statearr_29630 = state_29614;
(statearr_29630[(7)] = inst_29591__$1);

return statearr_29630;
})();
var statearr_29631_29656 = state_29614__$1;
(statearr_29631_29656[(2)] = null);

(statearr_29631_29656[(1)] = (2));


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
});})(c__28756__auto__))
;
return ((function (switch__28644__auto__,c__28756__auto__){
return (function() {
var cljs$core$async$state_machine__28645__auto__ = null;
var cljs$core$async$state_machine__28645__auto____0 = (function (){
var statearr_29635 = [null,null,null,null,null,null,null,null];
(statearr_29635[(0)] = cljs$core$async$state_machine__28645__auto__);

(statearr_29635[(1)] = (1));

return statearr_29635;
});
var cljs$core$async$state_machine__28645__auto____1 = (function (state_29614){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_29614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e29636){if((e29636 instanceof Object)){
var ex__28648__auto__ = e29636;
var statearr_29637_29657 = state_29614;
(statearr_29637_29657[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29658 = state_29614;
state_29614 = G__29658;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$state_machine__28645__auto__ = function(state_29614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28645__auto____1.call(this,state_29614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28645__auto____0;
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28645__auto____1;
return cljs$core$async$state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto__))
})();
var state__28758__auto__ = (function (){var statearr_29638 = f__28757__auto__.call(null);
(statearr_29638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto__);

return statearr_29638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto__))
);

return c__28756__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25464__auto__ = (((_ == null))?null:_);
var m__25465__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,_);
} else {
var m__25465__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25465__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m,ch);
} else {
var m__25465__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m);
} else {
var m__25465__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29884 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29884 = (function (mult,ch,cs,meta29885){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29885 = meta29885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29886,meta29885__$1){
var self__ = this;
var _29886__$1 = this;
return (new cljs.core.async.t_cljs$core$async29884(self__.mult,self__.ch,self__.cs,meta29885__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29884.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29886){
var self__ = this;
var _29886__$1 = this;
return self__.meta29885;
});})(cs))
;

cljs.core.async.t_cljs$core$async29884.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29884.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29884.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29884.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29884.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29884.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29884.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29885","meta29885",-275924149,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29884.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29884";

cljs.core.async.t_cljs$core$async29884.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async29884");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29884 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29884(mult__$1,ch__$1,cs__$1,meta29885){
return (new cljs.core.async.t_cljs$core$async29884(mult__$1,ch__$1,cs__$1,meta29885));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29884(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28756__auto___30109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___30109,cs,m,dchan,dctr,done){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___30109,cs,m,dchan,dctr,done){
return (function (state_30021){
var state_val_30022 = (state_30021[(1)]);
if((state_val_30022 === (7))){
var inst_30017 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30023_30110 = state_30021__$1;
(statearr_30023_30110[(2)] = inst_30017);

(statearr_30023_30110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (20))){
var inst_29920 = (state_30021[(7)]);
var inst_29932 = cljs.core.first.call(null,inst_29920);
var inst_29933 = cljs.core.nth.call(null,inst_29932,(0),null);
var inst_29934 = cljs.core.nth.call(null,inst_29932,(1),null);
var state_30021__$1 = (function (){var statearr_30024 = state_30021;
(statearr_30024[(8)] = inst_29933);

return statearr_30024;
})();
if(cljs.core.truth_(inst_29934)){
var statearr_30025_30111 = state_30021__$1;
(statearr_30025_30111[(1)] = (22));

} else {
var statearr_30026_30112 = state_30021__$1;
(statearr_30026_30112[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (27))){
var inst_29964 = (state_30021[(9)]);
var inst_29969 = (state_30021[(10)]);
var inst_29889 = (state_30021[(11)]);
var inst_29962 = (state_30021[(12)]);
var inst_29969__$1 = cljs.core._nth.call(null,inst_29962,inst_29964);
var inst_29970 = cljs.core.async.put_BANG_.call(null,inst_29969__$1,inst_29889,done);
var state_30021__$1 = (function (){var statearr_30027 = state_30021;
(statearr_30027[(10)] = inst_29969__$1);

return statearr_30027;
})();
if(cljs.core.truth_(inst_29970)){
var statearr_30028_30113 = state_30021__$1;
(statearr_30028_30113[(1)] = (30));

} else {
var statearr_30029_30114 = state_30021__$1;
(statearr_30029_30114[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (1))){
var state_30021__$1 = state_30021;
var statearr_30030_30115 = state_30021__$1;
(statearr_30030_30115[(2)] = null);

(statearr_30030_30115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (24))){
var inst_29920 = (state_30021[(7)]);
var inst_29939 = (state_30021[(2)]);
var inst_29940 = cljs.core.next.call(null,inst_29920);
var inst_29898 = inst_29940;
var inst_29899 = null;
var inst_29900 = (0);
var inst_29901 = (0);
var state_30021__$1 = (function (){var statearr_30031 = state_30021;
(statearr_30031[(13)] = inst_29939);

(statearr_30031[(14)] = inst_29901);

(statearr_30031[(15)] = inst_29900);

(statearr_30031[(16)] = inst_29899);

(statearr_30031[(17)] = inst_29898);

return statearr_30031;
})();
var statearr_30032_30116 = state_30021__$1;
(statearr_30032_30116[(2)] = null);

(statearr_30032_30116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (39))){
var state_30021__$1 = state_30021;
var statearr_30036_30117 = state_30021__$1;
(statearr_30036_30117[(2)] = null);

(statearr_30036_30117[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (4))){
var inst_29889 = (state_30021[(11)]);
var inst_29889__$1 = (state_30021[(2)]);
var inst_29890 = (inst_29889__$1 == null);
var state_30021__$1 = (function (){var statearr_30037 = state_30021;
(statearr_30037[(11)] = inst_29889__$1);

return statearr_30037;
})();
if(cljs.core.truth_(inst_29890)){
var statearr_30038_30118 = state_30021__$1;
(statearr_30038_30118[(1)] = (5));

} else {
var statearr_30039_30119 = state_30021__$1;
(statearr_30039_30119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (15))){
var inst_29901 = (state_30021[(14)]);
var inst_29900 = (state_30021[(15)]);
var inst_29899 = (state_30021[(16)]);
var inst_29898 = (state_30021[(17)]);
var inst_29916 = (state_30021[(2)]);
var inst_29917 = (inst_29901 + (1));
var tmp30033 = inst_29900;
var tmp30034 = inst_29899;
var tmp30035 = inst_29898;
var inst_29898__$1 = tmp30035;
var inst_29899__$1 = tmp30034;
var inst_29900__$1 = tmp30033;
var inst_29901__$1 = inst_29917;
var state_30021__$1 = (function (){var statearr_30040 = state_30021;
(statearr_30040[(14)] = inst_29901__$1);

(statearr_30040[(15)] = inst_29900__$1);

(statearr_30040[(18)] = inst_29916);

(statearr_30040[(16)] = inst_29899__$1);

(statearr_30040[(17)] = inst_29898__$1);

return statearr_30040;
})();
var statearr_30041_30120 = state_30021__$1;
(statearr_30041_30120[(2)] = null);

(statearr_30041_30120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (21))){
var inst_29943 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30045_30121 = state_30021__$1;
(statearr_30045_30121[(2)] = inst_29943);

(statearr_30045_30121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (31))){
var inst_29969 = (state_30021[(10)]);
var inst_29973 = done.call(null,null);
var inst_29974 = cljs.core.async.untap_STAR_.call(null,m,inst_29969);
var state_30021__$1 = (function (){var statearr_30046 = state_30021;
(statearr_30046[(19)] = inst_29973);

return statearr_30046;
})();
var statearr_30047_30122 = state_30021__$1;
(statearr_30047_30122[(2)] = inst_29974);

(statearr_30047_30122[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (32))){
var inst_29964 = (state_30021[(9)]);
var inst_29962 = (state_30021[(12)]);
var inst_29963 = (state_30021[(20)]);
var inst_29961 = (state_30021[(21)]);
var inst_29976 = (state_30021[(2)]);
var inst_29977 = (inst_29964 + (1));
var tmp30042 = inst_29962;
var tmp30043 = inst_29963;
var tmp30044 = inst_29961;
var inst_29961__$1 = tmp30044;
var inst_29962__$1 = tmp30042;
var inst_29963__$1 = tmp30043;
var inst_29964__$1 = inst_29977;
var state_30021__$1 = (function (){var statearr_30048 = state_30021;
(statearr_30048[(22)] = inst_29976);

(statearr_30048[(9)] = inst_29964__$1);

(statearr_30048[(12)] = inst_29962__$1);

(statearr_30048[(20)] = inst_29963__$1);

(statearr_30048[(21)] = inst_29961__$1);

return statearr_30048;
})();
var statearr_30049_30123 = state_30021__$1;
(statearr_30049_30123[(2)] = null);

(statearr_30049_30123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (40))){
var inst_29989 = (state_30021[(23)]);
var inst_29993 = done.call(null,null);
var inst_29994 = cljs.core.async.untap_STAR_.call(null,m,inst_29989);
var state_30021__$1 = (function (){var statearr_30050 = state_30021;
(statearr_30050[(24)] = inst_29993);

return statearr_30050;
})();
var statearr_30051_30124 = state_30021__$1;
(statearr_30051_30124[(2)] = inst_29994);

(statearr_30051_30124[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (33))){
var inst_29980 = (state_30021[(25)]);
var inst_29982 = cljs.core.chunked_seq_QMARK_.call(null,inst_29980);
var state_30021__$1 = state_30021;
if(inst_29982){
var statearr_30052_30125 = state_30021__$1;
(statearr_30052_30125[(1)] = (36));

} else {
var statearr_30053_30126 = state_30021__$1;
(statearr_30053_30126[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (13))){
var inst_29910 = (state_30021[(26)]);
var inst_29913 = cljs.core.async.close_BANG_.call(null,inst_29910);
var state_30021__$1 = state_30021;
var statearr_30054_30127 = state_30021__$1;
(statearr_30054_30127[(2)] = inst_29913);

(statearr_30054_30127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (22))){
var inst_29933 = (state_30021[(8)]);
var inst_29936 = cljs.core.async.close_BANG_.call(null,inst_29933);
var state_30021__$1 = state_30021;
var statearr_30055_30128 = state_30021__$1;
(statearr_30055_30128[(2)] = inst_29936);

(statearr_30055_30128[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (36))){
var inst_29980 = (state_30021[(25)]);
var inst_29984 = cljs.core.chunk_first.call(null,inst_29980);
var inst_29985 = cljs.core.chunk_rest.call(null,inst_29980);
var inst_29986 = cljs.core.count.call(null,inst_29984);
var inst_29961 = inst_29985;
var inst_29962 = inst_29984;
var inst_29963 = inst_29986;
var inst_29964 = (0);
var state_30021__$1 = (function (){var statearr_30056 = state_30021;
(statearr_30056[(9)] = inst_29964);

(statearr_30056[(12)] = inst_29962);

(statearr_30056[(20)] = inst_29963);

(statearr_30056[(21)] = inst_29961);

return statearr_30056;
})();
var statearr_30057_30129 = state_30021__$1;
(statearr_30057_30129[(2)] = null);

(statearr_30057_30129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (41))){
var inst_29980 = (state_30021[(25)]);
var inst_29996 = (state_30021[(2)]);
var inst_29997 = cljs.core.next.call(null,inst_29980);
var inst_29961 = inst_29997;
var inst_29962 = null;
var inst_29963 = (0);
var inst_29964 = (0);
var state_30021__$1 = (function (){var statearr_30058 = state_30021;
(statearr_30058[(9)] = inst_29964);

(statearr_30058[(27)] = inst_29996);

(statearr_30058[(12)] = inst_29962);

(statearr_30058[(20)] = inst_29963);

(statearr_30058[(21)] = inst_29961);

return statearr_30058;
})();
var statearr_30059_30130 = state_30021__$1;
(statearr_30059_30130[(2)] = null);

(statearr_30059_30130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (43))){
var state_30021__$1 = state_30021;
var statearr_30060_30131 = state_30021__$1;
(statearr_30060_30131[(2)] = null);

(statearr_30060_30131[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (29))){
var inst_30005 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30061_30132 = state_30021__$1;
(statearr_30061_30132[(2)] = inst_30005);

(statearr_30061_30132[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (44))){
var inst_30014 = (state_30021[(2)]);
var state_30021__$1 = (function (){var statearr_30062 = state_30021;
(statearr_30062[(28)] = inst_30014);

return statearr_30062;
})();
var statearr_30063_30133 = state_30021__$1;
(statearr_30063_30133[(2)] = null);

(statearr_30063_30133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (6))){
var inst_29953 = (state_30021[(29)]);
var inst_29952 = cljs.core.deref.call(null,cs);
var inst_29953__$1 = cljs.core.keys.call(null,inst_29952);
var inst_29954 = cljs.core.count.call(null,inst_29953__$1);
var inst_29955 = cljs.core.reset_BANG_.call(null,dctr,inst_29954);
var inst_29960 = cljs.core.seq.call(null,inst_29953__$1);
var inst_29961 = inst_29960;
var inst_29962 = null;
var inst_29963 = (0);
var inst_29964 = (0);
var state_30021__$1 = (function (){var statearr_30064 = state_30021;
(statearr_30064[(30)] = inst_29955);

(statearr_30064[(29)] = inst_29953__$1);

(statearr_30064[(9)] = inst_29964);

(statearr_30064[(12)] = inst_29962);

(statearr_30064[(20)] = inst_29963);

(statearr_30064[(21)] = inst_29961);

return statearr_30064;
})();
var statearr_30065_30134 = state_30021__$1;
(statearr_30065_30134[(2)] = null);

(statearr_30065_30134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (28))){
var inst_29980 = (state_30021[(25)]);
var inst_29961 = (state_30021[(21)]);
var inst_29980__$1 = cljs.core.seq.call(null,inst_29961);
var state_30021__$1 = (function (){var statearr_30066 = state_30021;
(statearr_30066[(25)] = inst_29980__$1);

return statearr_30066;
})();
if(inst_29980__$1){
var statearr_30067_30135 = state_30021__$1;
(statearr_30067_30135[(1)] = (33));

} else {
var statearr_30068_30136 = state_30021__$1;
(statearr_30068_30136[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (25))){
var inst_29964 = (state_30021[(9)]);
var inst_29963 = (state_30021[(20)]);
var inst_29966 = (inst_29964 < inst_29963);
var inst_29967 = inst_29966;
var state_30021__$1 = state_30021;
if(cljs.core.truth_(inst_29967)){
var statearr_30069_30137 = state_30021__$1;
(statearr_30069_30137[(1)] = (27));

} else {
var statearr_30070_30138 = state_30021__$1;
(statearr_30070_30138[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (34))){
var state_30021__$1 = state_30021;
var statearr_30071_30139 = state_30021__$1;
(statearr_30071_30139[(2)] = null);

(statearr_30071_30139[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (17))){
var state_30021__$1 = state_30021;
var statearr_30072_30140 = state_30021__$1;
(statearr_30072_30140[(2)] = null);

(statearr_30072_30140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (3))){
var inst_30019 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30021__$1,inst_30019);
} else {
if((state_val_30022 === (12))){
var inst_29948 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30073_30141 = state_30021__$1;
(statearr_30073_30141[(2)] = inst_29948);

(statearr_30073_30141[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (2))){
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30021__$1,(4),ch);
} else {
if((state_val_30022 === (23))){
var state_30021__$1 = state_30021;
var statearr_30074_30142 = state_30021__$1;
(statearr_30074_30142[(2)] = null);

(statearr_30074_30142[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (35))){
var inst_30003 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30075_30143 = state_30021__$1;
(statearr_30075_30143[(2)] = inst_30003);

(statearr_30075_30143[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (19))){
var inst_29920 = (state_30021[(7)]);
var inst_29924 = cljs.core.chunk_first.call(null,inst_29920);
var inst_29925 = cljs.core.chunk_rest.call(null,inst_29920);
var inst_29926 = cljs.core.count.call(null,inst_29924);
var inst_29898 = inst_29925;
var inst_29899 = inst_29924;
var inst_29900 = inst_29926;
var inst_29901 = (0);
var state_30021__$1 = (function (){var statearr_30076 = state_30021;
(statearr_30076[(14)] = inst_29901);

(statearr_30076[(15)] = inst_29900);

(statearr_30076[(16)] = inst_29899);

(statearr_30076[(17)] = inst_29898);

return statearr_30076;
})();
var statearr_30077_30144 = state_30021__$1;
(statearr_30077_30144[(2)] = null);

(statearr_30077_30144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (11))){
var inst_29920 = (state_30021[(7)]);
var inst_29898 = (state_30021[(17)]);
var inst_29920__$1 = cljs.core.seq.call(null,inst_29898);
var state_30021__$1 = (function (){var statearr_30078 = state_30021;
(statearr_30078[(7)] = inst_29920__$1);

return statearr_30078;
})();
if(inst_29920__$1){
var statearr_30079_30145 = state_30021__$1;
(statearr_30079_30145[(1)] = (16));

} else {
var statearr_30080_30146 = state_30021__$1;
(statearr_30080_30146[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (9))){
var inst_29950 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30081_30147 = state_30021__$1;
(statearr_30081_30147[(2)] = inst_29950);

(statearr_30081_30147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (5))){
var inst_29896 = cljs.core.deref.call(null,cs);
var inst_29897 = cljs.core.seq.call(null,inst_29896);
var inst_29898 = inst_29897;
var inst_29899 = null;
var inst_29900 = (0);
var inst_29901 = (0);
var state_30021__$1 = (function (){var statearr_30082 = state_30021;
(statearr_30082[(14)] = inst_29901);

(statearr_30082[(15)] = inst_29900);

(statearr_30082[(16)] = inst_29899);

(statearr_30082[(17)] = inst_29898);

return statearr_30082;
})();
var statearr_30083_30148 = state_30021__$1;
(statearr_30083_30148[(2)] = null);

(statearr_30083_30148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (14))){
var state_30021__$1 = state_30021;
var statearr_30084_30149 = state_30021__$1;
(statearr_30084_30149[(2)] = null);

(statearr_30084_30149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (45))){
var inst_30011 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30085_30150 = state_30021__$1;
(statearr_30085_30150[(2)] = inst_30011);

(statearr_30085_30150[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (26))){
var inst_29953 = (state_30021[(29)]);
var inst_30007 = (state_30021[(2)]);
var inst_30008 = cljs.core.seq.call(null,inst_29953);
var state_30021__$1 = (function (){var statearr_30086 = state_30021;
(statearr_30086[(31)] = inst_30007);

return statearr_30086;
})();
if(inst_30008){
var statearr_30087_30151 = state_30021__$1;
(statearr_30087_30151[(1)] = (42));

} else {
var statearr_30088_30152 = state_30021__$1;
(statearr_30088_30152[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (16))){
var inst_29920 = (state_30021[(7)]);
var inst_29922 = cljs.core.chunked_seq_QMARK_.call(null,inst_29920);
var state_30021__$1 = state_30021;
if(inst_29922){
var statearr_30089_30153 = state_30021__$1;
(statearr_30089_30153[(1)] = (19));

} else {
var statearr_30090_30154 = state_30021__$1;
(statearr_30090_30154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (38))){
var inst_30000 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30091_30155 = state_30021__$1;
(statearr_30091_30155[(2)] = inst_30000);

(statearr_30091_30155[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (30))){
var state_30021__$1 = state_30021;
var statearr_30092_30156 = state_30021__$1;
(statearr_30092_30156[(2)] = null);

(statearr_30092_30156[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (10))){
var inst_29901 = (state_30021[(14)]);
var inst_29899 = (state_30021[(16)]);
var inst_29909 = cljs.core._nth.call(null,inst_29899,inst_29901);
var inst_29910 = cljs.core.nth.call(null,inst_29909,(0),null);
var inst_29911 = cljs.core.nth.call(null,inst_29909,(1),null);
var state_30021__$1 = (function (){var statearr_30093 = state_30021;
(statearr_30093[(26)] = inst_29910);

return statearr_30093;
})();
if(cljs.core.truth_(inst_29911)){
var statearr_30094_30157 = state_30021__$1;
(statearr_30094_30157[(1)] = (13));

} else {
var statearr_30095_30158 = state_30021__$1;
(statearr_30095_30158[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (18))){
var inst_29946 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30096_30159 = state_30021__$1;
(statearr_30096_30159[(2)] = inst_29946);

(statearr_30096_30159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (42))){
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30021__$1,(45),dchan);
} else {
if((state_val_30022 === (37))){
var inst_29980 = (state_30021[(25)]);
var inst_29989 = (state_30021[(23)]);
var inst_29889 = (state_30021[(11)]);
var inst_29989__$1 = cljs.core.first.call(null,inst_29980);
var inst_29990 = cljs.core.async.put_BANG_.call(null,inst_29989__$1,inst_29889,done);
var state_30021__$1 = (function (){var statearr_30097 = state_30021;
(statearr_30097[(23)] = inst_29989__$1);

return statearr_30097;
})();
if(cljs.core.truth_(inst_29990)){
var statearr_30098_30160 = state_30021__$1;
(statearr_30098_30160[(1)] = (39));

} else {
var statearr_30099_30161 = state_30021__$1;
(statearr_30099_30161[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (8))){
var inst_29901 = (state_30021[(14)]);
var inst_29900 = (state_30021[(15)]);
var inst_29903 = (inst_29901 < inst_29900);
var inst_29904 = inst_29903;
var state_30021__$1 = state_30021;
if(cljs.core.truth_(inst_29904)){
var statearr_30100_30162 = state_30021__$1;
(statearr_30100_30162[(1)] = (10));

} else {
var statearr_30101_30163 = state_30021__$1;
(statearr_30101_30163[(1)] = (11));

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
});})(c__28756__auto___30109,cs,m,dchan,dctr,done))
;
return ((function (switch__28644__auto__,c__28756__auto___30109,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28645__auto__ = null;
var cljs$core$async$mult_$_state_machine__28645__auto____0 = (function (){
var statearr_30105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30105[(0)] = cljs$core$async$mult_$_state_machine__28645__auto__);

(statearr_30105[(1)] = (1));

return statearr_30105;
});
var cljs$core$async$mult_$_state_machine__28645__auto____1 = (function (state_30021){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_30021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e30106){if((e30106 instanceof Object)){
var ex__28648__auto__ = e30106;
var statearr_30107_30164 = state_30021;
(statearr_30107_30164[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30165 = state_30021;
state_30021 = G__30165;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28645__auto__ = function(state_30021){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28645__auto____1.call(this,state_30021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28645__auto____0;
cljs$core$async$mult_$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28645__auto____1;
return cljs$core$async$mult_$_state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___30109,cs,m,dchan,dctr,done))
})();
var state__28758__auto__ = (function (){var statearr_30108 = f__28757__auto__.call(null);
(statearr_30108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___30109);

return statearr_30108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___30109,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30166 = [];
var len__25876__auto___30169 = arguments.length;
var i__25877__auto___30170 = (0);
while(true){
if((i__25877__auto___30170 < len__25876__auto___30169)){
args30166.push((arguments[i__25877__auto___30170]));

var G__30171 = (i__25877__auto___30170 + (1));
i__25877__auto___30170 = G__30171;
continue;
} else {
}
break;
}

var G__30168 = args30166.length;
switch (G__30168) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30166.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m,ch);
} else {
var m__25465__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m,ch);
} else {
var m__25465__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m);
} else {
var m__25465__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m,state_map);
} else {
var m__25465__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m,mode);
} else {
var m__25465__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___30183 = arguments.length;
var i__25877__auto___30184 = (0);
while(true){
if((i__25877__auto___30184 < len__25876__auto___30183)){
args__25883__auto__.push((arguments[i__25877__auto___30184]));

var G__30185 = (i__25877__auto___30184 + (1));
i__25877__auto___30184 = G__30185;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((3) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25884__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30177){
var map__30178 = p__30177;
var map__30178__$1 = ((((!((map__30178 == null)))?((((map__30178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30178):map__30178);
var opts = map__30178__$1;
var statearr_30180_30186 = state;
(statearr_30180_30186[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30178,map__30178__$1,opts){
return (function (val){
var statearr_30181_30187 = state;
(statearr_30181_30187[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30178,map__30178__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30182_30188 = state;
(statearr_30182_30188[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30173){
var G__30174 = cljs.core.first.call(null,seq30173);
var seq30173__$1 = cljs.core.next.call(null,seq30173);
var G__30175 = cljs.core.first.call(null,seq30173__$1);
var seq30173__$2 = cljs.core.next.call(null,seq30173__$1);
var G__30176 = cljs.core.first.call(null,seq30173__$2);
var seq30173__$3 = cljs.core.next.call(null,seq30173__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30174,G__30175,G__30176,seq30173__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30354 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30355){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30355 = meta30355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30356,meta30355__$1){
var self__ = this;
var _30356__$1 = this;
return (new cljs.core.async.t_cljs$core$async30354(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30355__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30356){
var self__ = this;
var _30356__$1 = this;
return self__.meta30355;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30354.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30355","meta30355",2012759973,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30354";

cljs.core.async.t_cljs$core$async30354.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async30354");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30354 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30354(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30355){
return (new cljs.core.async.t_cljs$core$async30354(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30355));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30354(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28756__auto___30519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___30519,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___30519,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30456){
var state_val_30457 = (state_30456[(1)]);
if((state_val_30457 === (7))){
var inst_30372 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
var statearr_30458_30520 = state_30456__$1;
(statearr_30458_30520[(2)] = inst_30372);

(statearr_30458_30520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (20))){
var inst_30384 = (state_30456[(7)]);
var state_30456__$1 = state_30456;
var statearr_30459_30521 = state_30456__$1;
(statearr_30459_30521[(2)] = inst_30384);

(statearr_30459_30521[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (27))){
var state_30456__$1 = state_30456;
var statearr_30460_30522 = state_30456__$1;
(statearr_30460_30522[(2)] = null);

(statearr_30460_30522[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (1))){
var inst_30360 = (state_30456[(8)]);
var inst_30360__$1 = calc_state.call(null);
var inst_30362 = (inst_30360__$1 == null);
var inst_30363 = cljs.core.not.call(null,inst_30362);
var state_30456__$1 = (function (){var statearr_30461 = state_30456;
(statearr_30461[(8)] = inst_30360__$1);

return statearr_30461;
})();
if(inst_30363){
var statearr_30462_30523 = state_30456__$1;
(statearr_30462_30523[(1)] = (2));

} else {
var statearr_30463_30524 = state_30456__$1;
(statearr_30463_30524[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (24))){
var inst_30416 = (state_30456[(9)]);
var inst_30407 = (state_30456[(10)]);
var inst_30430 = (state_30456[(11)]);
var inst_30430__$1 = inst_30407.call(null,inst_30416);
var state_30456__$1 = (function (){var statearr_30464 = state_30456;
(statearr_30464[(11)] = inst_30430__$1);

return statearr_30464;
})();
if(cljs.core.truth_(inst_30430__$1)){
var statearr_30465_30525 = state_30456__$1;
(statearr_30465_30525[(1)] = (29));

} else {
var statearr_30466_30526 = state_30456__$1;
(statearr_30466_30526[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (4))){
var inst_30375 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
if(cljs.core.truth_(inst_30375)){
var statearr_30467_30527 = state_30456__$1;
(statearr_30467_30527[(1)] = (8));

} else {
var statearr_30468_30528 = state_30456__$1;
(statearr_30468_30528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (15))){
var inst_30401 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
if(cljs.core.truth_(inst_30401)){
var statearr_30469_30529 = state_30456__$1;
(statearr_30469_30529[(1)] = (19));

} else {
var statearr_30470_30530 = state_30456__$1;
(statearr_30470_30530[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (21))){
var inst_30406 = (state_30456[(12)]);
var inst_30406__$1 = (state_30456[(2)]);
var inst_30407 = cljs.core.get.call(null,inst_30406__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30408 = cljs.core.get.call(null,inst_30406__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30409 = cljs.core.get.call(null,inst_30406__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30456__$1 = (function (){var statearr_30471 = state_30456;
(statearr_30471[(10)] = inst_30407);

(statearr_30471[(12)] = inst_30406__$1);

(statearr_30471[(13)] = inst_30408);

return statearr_30471;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30456__$1,(22),inst_30409);
} else {
if((state_val_30457 === (31))){
var inst_30438 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
if(cljs.core.truth_(inst_30438)){
var statearr_30472_30531 = state_30456__$1;
(statearr_30472_30531[(1)] = (32));

} else {
var statearr_30473_30532 = state_30456__$1;
(statearr_30473_30532[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (32))){
var inst_30415 = (state_30456[(14)]);
var state_30456__$1 = state_30456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30456__$1,(35),out,inst_30415);
} else {
if((state_val_30457 === (33))){
var inst_30406 = (state_30456[(12)]);
var inst_30384 = inst_30406;
var state_30456__$1 = (function (){var statearr_30474 = state_30456;
(statearr_30474[(7)] = inst_30384);

return statearr_30474;
})();
var statearr_30475_30533 = state_30456__$1;
(statearr_30475_30533[(2)] = null);

(statearr_30475_30533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (13))){
var inst_30384 = (state_30456[(7)]);
var inst_30391 = inst_30384.cljs$lang$protocol_mask$partition0$;
var inst_30392 = (inst_30391 & (64));
var inst_30393 = inst_30384.cljs$core$ISeq$;
var inst_30394 = (inst_30392) || (inst_30393);
var state_30456__$1 = state_30456;
if(cljs.core.truth_(inst_30394)){
var statearr_30476_30534 = state_30456__$1;
(statearr_30476_30534[(1)] = (16));

} else {
var statearr_30477_30535 = state_30456__$1;
(statearr_30477_30535[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (22))){
var inst_30416 = (state_30456[(9)]);
var inst_30415 = (state_30456[(14)]);
var inst_30414 = (state_30456[(2)]);
var inst_30415__$1 = cljs.core.nth.call(null,inst_30414,(0),null);
var inst_30416__$1 = cljs.core.nth.call(null,inst_30414,(1),null);
var inst_30417 = (inst_30415__$1 == null);
var inst_30418 = cljs.core._EQ_.call(null,inst_30416__$1,change);
var inst_30419 = (inst_30417) || (inst_30418);
var state_30456__$1 = (function (){var statearr_30478 = state_30456;
(statearr_30478[(9)] = inst_30416__$1);

(statearr_30478[(14)] = inst_30415__$1);

return statearr_30478;
})();
if(cljs.core.truth_(inst_30419)){
var statearr_30479_30536 = state_30456__$1;
(statearr_30479_30536[(1)] = (23));

} else {
var statearr_30480_30537 = state_30456__$1;
(statearr_30480_30537[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (36))){
var inst_30406 = (state_30456[(12)]);
var inst_30384 = inst_30406;
var state_30456__$1 = (function (){var statearr_30481 = state_30456;
(statearr_30481[(7)] = inst_30384);

return statearr_30481;
})();
var statearr_30482_30538 = state_30456__$1;
(statearr_30482_30538[(2)] = null);

(statearr_30482_30538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (29))){
var inst_30430 = (state_30456[(11)]);
var state_30456__$1 = state_30456;
var statearr_30483_30539 = state_30456__$1;
(statearr_30483_30539[(2)] = inst_30430);

(statearr_30483_30539[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (6))){
var state_30456__$1 = state_30456;
var statearr_30484_30540 = state_30456__$1;
(statearr_30484_30540[(2)] = false);

(statearr_30484_30540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (28))){
var inst_30426 = (state_30456[(2)]);
var inst_30427 = calc_state.call(null);
var inst_30384 = inst_30427;
var state_30456__$1 = (function (){var statearr_30485 = state_30456;
(statearr_30485[(15)] = inst_30426);

(statearr_30485[(7)] = inst_30384);

return statearr_30485;
})();
var statearr_30486_30541 = state_30456__$1;
(statearr_30486_30541[(2)] = null);

(statearr_30486_30541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (25))){
var inst_30452 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
var statearr_30487_30542 = state_30456__$1;
(statearr_30487_30542[(2)] = inst_30452);

(statearr_30487_30542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (34))){
var inst_30450 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
var statearr_30488_30543 = state_30456__$1;
(statearr_30488_30543[(2)] = inst_30450);

(statearr_30488_30543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (17))){
var state_30456__$1 = state_30456;
var statearr_30489_30544 = state_30456__$1;
(statearr_30489_30544[(2)] = false);

(statearr_30489_30544[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (3))){
var state_30456__$1 = state_30456;
var statearr_30490_30545 = state_30456__$1;
(statearr_30490_30545[(2)] = false);

(statearr_30490_30545[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (12))){
var inst_30454 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30456__$1,inst_30454);
} else {
if((state_val_30457 === (2))){
var inst_30360 = (state_30456[(8)]);
var inst_30365 = inst_30360.cljs$lang$protocol_mask$partition0$;
var inst_30366 = (inst_30365 & (64));
var inst_30367 = inst_30360.cljs$core$ISeq$;
var inst_30368 = (inst_30366) || (inst_30367);
var state_30456__$1 = state_30456;
if(cljs.core.truth_(inst_30368)){
var statearr_30491_30546 = state_30456__$1;
(statearr_30491_30546[(1)] = (5));

} else {
var statearr_30492_30547 = state_30456__$1;
(statearr_30492_30547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (23))){
var inst_30415 = (state_30456[(14)]);
var inst_30421 = (inst_30415 == null);
var state_30456__$1 = state_30456;
if(cljs.core.truth_(inst_30421)){
var statearr_30493_30548 = state_30456__$1;
(statearr_30493_30548[(1)] = (26));

} else {
var statearr_30494_30549 = state_30456__$1;
(statearr_30494_30549[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (35))){
var inst_30441 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
if(cljs.core.truth_(inst_30441)){
var statearr_30495_30550 = state_30456__$1;
(statearr_30495_30550[(1)] = (36));

} else {
var statearr_30496_30551 = state_30456__$1;
(statearr_30496_30551[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (19))){
var inst_30384 = (state_30456[(7)]);
var inst_30403 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30384);
var state_30456__$1 = state_30456;
var statearr_30497_30552 = state_30456__$1;
(statearr_30497_30552[(2)] = inst_30403);

(statearr_30497_30552[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (11))){
var inst_30384 = (state_30456[(7)]);
var inst_30388 = (inst_30384 == null);
var inst_30389 = cljs.core.not.call(null,inst_30388);
var state_30456__$1 = state_30456;
if(inst_30389){
var statearr_30498_30553 = state_30456__$1;
(statearr_30498_30553[(1)] = (13));

} else {
var statearr_30499_30554 = state_30456__$1;
(statearr_30499_30554[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (9))){
var inst_30360 = (state_30456[(8)]);
var state_30456__$1 = state_30456;
var statearr_30500_30555 = state_30456__$1;
(statearr_30500_30555[(2)] = inst_30360);

(statearr_30500_30555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (5))){
var state_30456__$1 = state_30456;
var statearr_30501_30556 = state_30456__$1;
(statearr_30501_30556[(2)] = true);

(statearr_30501_30556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (14))){
var state_30456__$1 = state_30456;
var statearr_30502_30557 = state_30456__$1;
(statearr_30502_30557[(2)] = false);

(statearr_30502_30557[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (26))){
var inst_30416 = (state_30456[(9)]);
var inst_30423 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30416);
var state_30456__$1 = state_30456;
var statearr_30503_30558 = state_30456__$1;
(statearr_30503_30558[(2)] = inst_30423);

(statearr_30503_30558[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (16))){
var state_30456__$1 = state_30456;
var statearr_30504_30559 = state_30456__$1;
(statearr_30504_30559[(2)] = true);

(statearr_30504_30559[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (38))){
var inst_30446 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
var statearr_30505_30560 = state_30456__$1;
(statearr_30505_30560[(2)] = inst_30446);

(statearr_30505_30560[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (30))){
var inst_30416 = (state_30456[(9)]);
var inst_30407 = (state_30456[(10)]);
var inst_30408 = (state_30456[(13)]);
var inst_30433 = cljs.core.empty_QMARK_.call(null,inst_30407);
var inst_30434 = inst_30408.call(null,inst_30416);
var inst_30435 = cljs.core.not.call(null,inst_30434);
var inst_30436 = (inst_30433) && (inst_30435);
var state_30456__$1 = state_30456;
var statearr_30506_30561 = state_30456__$1;
(statearr_30506_30561[(2)] = inst_30436);

(statearr_30506_30561[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (10))){
var inst_30360 = (state_30456[(8)]);
var inst_30380 = (state_30456[(2)]);
var inst_30381 = cljs.core.get.call(null,inst_30380,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30382 = cljs.core.get.call(null,inst_30380,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30383 = cljs.core.get.call(null,inst_30380,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30384 = inst_30360;
var state_30456__$1 = (function (){var statearr_30507 = state_30456;
(statearr_30507[(16)] = inst_30382);

(statearr_30507[(17)] = inst_30381);

(statearr_30507[(7)] = inst_30384);

(statearr_30507[(18)] = inst_30383);

return statearr_30507;
})();
var statearr_30508_30562 = state_30456__$1;
(statearr_30508_30562[(2)] = null);

(statearr_30508_30562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (18))){
var inst_30398 = (state_30456[(2)]);
var state_30456__$1 = state_30456;
var statearr_30509_30563 = state_30456__$1;
(statearr_30509_30563[(2)] = inst_30398);

(statearr_30509_30563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (37))){
var state_30456__$1 = state_30456;
var statearr_30510_30564 = state_30456__$1;
(statearr_30510_30564[(2)] = null);

(statearr_30510_30564[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30457 === (8))){
var inst_30360 = (state_30456[(8)]);
var inst_30377 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30360);
var state_30456__$1 = state_30456;
var statearr_30511_30565 = state_30456__$1;
(statearr_30511_30565[(2)] = inst_30377);

(statearr_30511_30565[(1)] = (10));


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
});})(c__28756__auto___30519,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28644__auto__,c__28756__auto___30519,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28645__auto__ = null;
var cljs$core$async$mix_$_state_machine__28645__auto____0 = (function (){
var statearr_30515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30515[(0)] = cljs$core$async$mix_$_state_machine__28645__auto__);

(statearr_30515[(1)] = (1));

return statearr_30515;
});
var cljs$core$async$mix_$_state_machine__28645__auto____1 = (function (state_30456){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_30456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e30516){if((e30516 instanceof Object)){
var ex__28648__auto__ = e30516;
var statearr_30517_30566 = state_30456;
(statearr_30517_30566[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30567 = state_30456;
state_30456 = G__30567;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28645__auto__ = function(state_30456){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28645__auto____1.call(this,state_30456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28645__auto____0;
cljs$core$async$mix_$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28645__auto____1;
return cljs$core$async$mix_$_state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___30519,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28758__auto__ = (function (){var statearr_30518 = f__28757__auto__.call(null);
(statearr_30518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___30519);

return statearr_30518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___30519,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25464__auto__ = (((p == null))?null:p);
var m__25465__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25465__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25464__auto__ = (((p == null))?null:p);
var m__25465__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,p,v,ch);
} else {
var m__25465__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30568 = [];
var len__25876__auto___30571 = arguments.length;
var i__25877__auto___30572 = (0);
while(true){
if((i__25877__auto___30572 < len__25876__auto___30571)){
args30568.push((arguments[i__25877__auto___30572]));

var G__30573 = (i__25877__auto___30572 + (1));
i__25877__auto___30572 = G__30573;
continue;
} else {
}
break;
}

var G__30570 = args30568.length;
switch (G__30570) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30568.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25464__auto__ = (((p == null))?null:p);
var m__25465__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,p);
} else {
var m__25465__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25464__auto__ = (((p == null))?null:p);
var m__25465__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,p,v);
} else {
var m__25465__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30576 = [];
var len__25876__auto___30701 = arguments.length;
var i__25877__auto___30702 = (0);
while(true){
if((i__25877__auto___30702 < len__25876__auto___30701)){
args30576.push((arguments[i__25877__auto___30702]));

var G__30703 = (i__25877__auto___30702 + (1));
i__25877__auto___30702 = G__30703;
continue;
} else {
}
break;
}

var G__30578 = args30576.length;
switch (G__30578) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30576.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24801__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24801__auto__,mults){
return (function (p1__30575_SHARP_){
if(cljs.core.truth_(p1__30575_SHARP_.call(null,topic))){
return p1__30575_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30575_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24801__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30579 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30580){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30580 = meta30580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30581,meta30580__$1){
var self__ = this;
var _30581__$1 = this;
return (new cljs.core.async.t_cljs$core$async30579(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30580__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30581){
var self__ = this;
var _30581__$1 = this;
return self__.meta30580;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30579.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30580","meta30580",688390027,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30579";

cljs.core.async.t_cljs$core$async30579.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async30579");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30579 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30580){
return (new cljs.core.async.t_cljs$core$async30579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30580));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30579(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28756__auto___30705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___30705,mults,ensure_mult,p){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___30705,mults,ensure_mult,p){
return (function (state_30653){
var state_val_30654 = (state_30653[(1)]);
if((state_val_30654 === (7))){
var inst_30649 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
var statearr_30655_30706 = state_30653__$1;
(statearr_30655_30706[(2)] = inst_30649);

(statearr_30655_30706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (20))){
var state_30653__$1 = state_30653;
var statearr_30656_30707 = state_30653__$1;
(statearr_30656_30707[(2)] = null);

(statearr_30656_30707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (1))){
var state_30653__$1 = state_30653;
var statearr_30657_30708 = state_30653__$1;
(statearr_30657_30708[(2)] = null);

(statearr_30657_30708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (24))){
var inst_30632 = (state_30653[(7)]);
var inst_30641 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30632);
var state_30653__$1 = state_30653;
var statearr_30658_30709 = state_30653__$1;
(statearr_30658_30709[(2)] = inst_30641);

(statearr_30658_30709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (4))){
var inst_30584 = (state_30653[(8)]);
var inst_30584__$1 = (state_30653[(2)]);
var inst_30585 = (inst_30584__$1 == null);
var state_30653__$1 = (function (){var statearr_30659 = state_30653;
(statearr_30659[(8)] = inst_30584__$1);

return statearr_30659;
})();
if(cljs.core.truth_(inst_30585)){
var statearr_30660_30710 = state_30653__$1;
(statearr_30660_30710[(1)] = (5));

} else {
var statearr_30661_30711 = state_30653__$1;
(statearr_30661_30711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (15))){
var inst_30626 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
var statearr_30662_30712 = state_30653__$1;
(statearr_30662_30712[(2)] = inst_30626);

(statearr_30662_30712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (21))){
var inst_30646 = (state_30653[(2)]);
var state_30653__$1 = (function (){var statearr_30663 = state_30653;
(statearr_30663[(9)] = inst_30646);

return statearr_30663;
})();
var statearr_30664_30713 = state_30653__$1;
(statearr_30664_30713[(2)] = null);

(statearr_30664_30713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (13))){
var inst_30608 = (state_30653[(10)]);
var inst_30610 = cljs.core.chunked_seq_QMARK_.call(null,inst_30608);
var state_30653__$1 = state_30653;
if(inst_30610){
var statearr_30665_30714 = state_30653__$1;
(statearr_30665_30714[(1)] = (16));

} else {
var statearr_30666_30715 = state_30653__$1;
(statearr_30666_30715[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (22))){
var inst_30638 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
if(cljs.core.truth_(inst_30638)){
var statearr_30667_30716 = state_30653__$1;
(statearr_30667_30716[(1)] = (23));

} else {
var statearr_30668_30717 = state_30653__$1;
(statearr_30668_30717[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (6))){
var inst_30632 = (state_30653[(7)]);
var inst_30584 = (state_30653[(8)]);
var inst_30634 = (state_30653[(11)]);
var inst_30632__$1 = topic_fn.call(null,inst_30584);
var inst_30633 = cljs.core.deref.call(null,mults);
var inst_30634__$1 = cljs.core.get.call(null,inst_30633,inst_30632__$1);
var state_30653__$1 = (function (){var statearr_30669 = state_30653;
(statearr_30669[(7)] = inst_30632__$1);

(statearr_30669[(11)] = inst_30634__$1);

return statearr_30669;
})();
if(cljs.core.truth_(inst_30634__$1)){
var statearr_30670_30718 = state_30653__$1;
(statearr_30670_30718[(1)] = (19));

} else {
var statearr_30671_30719 = state_30653__$1;
(statearr_30671_30719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (25))){
var inst_30643 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
var statearr_30672_30720 = state_30653__$1;
(statearr_30672_30720[(2)] = inst_30643);

(statearr_30672_30720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (17))){
var inst_30608 = (state_30653[(10)]);
var inst_30617 = cljs.core.first.call(null,inst_30608);
var inst_30618 = cljs.core.async.muxch_STAR_.call(null,inst_30617);
var inst_30619 = cljs.core.async.close_BANG_.call(null,inst_30618);
var inst_30620 = cljs.core.next.call(null,inst_30608);
var inst_30594 = inst_30620;
var inst_30595 = null;
var inst_30596 = (0);
var inst_30597 = (0);
var state_30653__$1 = (function (){var statearr_30673 = state_30653;
(statearr_30673[(12)] = inst_30619);

(statearr_30673[(13)] = inst_30596);

(statearr_30673[(14)] = inst_30597);

(statearr_30673[(15)] = inst_30594);

(statearr_30673[(16)] = inst_30595);

return statearr_30673;
})();
var statearr_30674_30721 = state_30653__$1;
(statearr_30674_30721[(2)] = null);

(statearr_30674_30721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (3))){
var inst_30651 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30653__$1,inst_30651);
} else {
if((state_val_30654 === (12))){
var inst_30628 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
var statearr_30675_30722 = state_30653__$1;
(statearr_30675_30722[(2)] = inst_30628);

(statearr_30675_30722[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (2))){
var state_30653__$1 = state_30653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30653__$1,(4),ch);
} else {
if((state_val_30654 === (23))){
var state_30653__$1 = state_30653;
var statearr_30676_30723 = state_30653__$1;
(statearr_30676_30723[(2)] = null);

(statearr_30676_30723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (19))){
var inst_30584 = (state_30653[(8)]);
var inst_30634 = (state_30653[(11)]);
var inst_30636 = cljs.core.async.muxch_STAR_.call(null,inst_30634);
var state_30653__$1 = state_30653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30653__$1,(22),inst_30636,inst_30584);
} else {
if((state_val_30654 === (11))){
var inst_30594 = (state_30653[(15)]);
var inst_30608 = (state_30653[(10)]);
var inst_30608__$1 = cljs.core.seq.call(null,inst_30594);
var state_30653__$1 = (function (){var statearr_30677 = state_30653;
(statearr_30677[(10)] = inst_30608__$1);

return statearr_30677;
})();
if(inst_30608__$1){
var statearr_30678_30724 = state_30653__$1;
(statearr_30678_30724[(1)] = (13));

} else {
var statearr_30679_30725 = state_30653__$1;
(statearr_30679_30725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (9))){
var inst_30630 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
var statearr_30680_30726 = state_30653__$1;
(statearr_30680_30726[(2)] = inst_30630);

(statearr_30680_30726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (5))){
var inst_30591 = cljs.core.deref.call(null,mults);
var inst_30592 = cljs.core.vals.call(null,inst_30591);
var inst_30593 = cljs.core.seq.call(null,inst_30592);
var inst_30594 = inst_30593;
var inst_30595 = null;
var inst_30596 = (0);
var inst_30597 = (0);
var state_30653__$1 = (function (){var statearr_30681 = state_30653;
(statearr_30681[(13)] = inst_30596);

(statearr_30681[(14)] = inst_30597);

(statearr_30681[(15)] = inst_30594);

(statearr_30681[(16)] = inst_30595);

return statearr_30681;
})();
var statearr_30682_30727 = state_30653__$1;
(statearr_30682_30727[(2)] = null);

(statearr_30682_30727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (14))){
var state_30653__$1 = state_30653;
var statearr_30686_30728 = state_30653__$1;
(statearr_30686_30728[(2)] = null);

(statearr_30686_30728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (16))){
var inst_30608 = (state_30653[(10)]);
var inst_30612 = cljs.core.chunk_first.call(null,inst_30608);
var inst_30613 = cljs.core.chunk_rest.call(null,inst_30608);
var inst_30614 = cljs.core.count.call(null,inst_30612);
var inst_30594 = inst_30613;
var inst_30595 = inst_30612;
var inst_30596 = inst_30614;
var inst_30597 = (0);
var state_30653__$1 = (function (){var statearr_30687 = state_30653;
(statearr_30687[(13)] = inst_30596);

(statearr_30687[(14)] = inst_30597);

(statearr_30687[(15)] = inst_30594);

(statearr_30687[(16)] = inst_30595);

return statearr_30687;
})();
var statearr_30688_30729 = state_30653__$1;
(statearr_30688_30729[(2)] = null);

(statearr_30688_30729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (10))){
var inst_30596 = (state_30653[(13)]);
var inst_30597 = (state_30653[(14)]);
var inst_30594 = (state_30653[(15)]);
var inst_30595 = (state_30653[(16)]);
var inst_30602 = cljs.core._nth.call(null,inst_30595,inst_30597);
var inst_30603 = cljs.core.async.muxch_STAR_.call(null,inst_30602);
var inst_30604 = cljs.core.async.close_BANG_.call(null,inst_30603);
var inst_30605 = (inst_30597 + (1));
var tmp30683 = inst_30596;
var tmp30684 = inst_30594;
var tmp30685 = inst_30595;
var inst_30594__$1 = tmp30684;
var inst_30595__$1 = tmp30685;
var inst_30596__$1 = tmp30683;
var inst_30597__$1 = inst_30605;
var state_30653__$1 = (function (){var statearr_30689 = state_30653;
(statearr_30689[(13)] = inst_30596__$1);

(statearr_30689[(14)] = inst_30597__$1);

(statearr_30689[(17)] = inst_30604);

(statearr_30689[(15)] = inst_30594__$1);

(statearr_30689[(16)] = inst_30595__$1);

return statearr_30689;
})();
var statearr_30690_30730 = state_30653__$1;
(statearr_30690_30730[(2)] = null);

(statearr_30690_30730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (18))){
var inst_30623 = (state_30653[(2)]);
var state_30653__$1 = state_30653;
var statearr_30691_30731 = state_30653__$1;
(statearr_30691_30731[(2)] = inst_30623);

(statearr_30691_30731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30654 === (8))){
var inst_30596 = (state_30653[(13)]);
var inst_30597 = (state_30653[(14)]);
var inst_30599 = (inst_30597 < inst_30596);
var inst_30600 = inst_30599;
var state_30653__$1 = state_30653;
if(cljs.core.truth_(inst_30600)){
var statearr_30692_30732 = state_30653__$1;
(statearr_30692_30732[(1)] = (10));

} else {
var statearr_30693_30733 = state_30653__$1;
(statearr_30693_30733[(1)] = (11));

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
});})(c__28756__auto___30705,mults,ensure_mult,p))
;
return ((function (switch__28644__auto__,c__28756__auto___30705,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28645__auto__ = null;
var cljs$core$async$state_machine__28645__auto____0 = (function (){
var statearr_30697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30697[(0)] = cljs$core$async$state_machine__28645__auto__);

(statearr_30697[(1)] = (1));

return statearr_30697;
});
var cljs$core$async$state_machine__28645__auto____1 = (function (state_30653){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_30653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e30698){if((e30698 instanceof Object)){
var ex__28648__auto__ = e30698;
var statearr_30699_30734 = state_30653;
(statearr_30699_30734[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30735 = state_30653;
state_30653 = G__30735;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$state_machine__28645__auto__ = function(state_30653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28645__auto____1.call(this,state_30653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28645__auto____0;
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28645__auto____1;
return cljs$core$async$state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___30705,mults,ensure_mult,p))
})();
var state__28758__auto__ = (function (){var statearr_30700 = f__28757__auto__.call(null);
(statearr_30700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___30705);

return statearr_30700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___30705,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30736 = [];
var len__25876__auto___30739 = arguments.length;
var i__25877__auto___30740 = (0);
while(true){
if((i__25877__auto___30740 < len__25876__auto___30739)){
args30736.push((arguments[i__25877__auto___30740]));

var G__30741 = (i__25877__auto___30740 + (1));
i__25877__auto___30740 = G__30741;
continue;
} else {
}
break;
}

var G__30738 = args30736.length;
switch (G__30738) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30736.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30743 = [];
var len__25876__auto___30746 = arguments.length;
var i__25877__auto___30747 = (0);
while(true){
if((i__25877__auto___30747 < len__25876__auto___30746)){
args30743.push((arguments[i__25877__auto___30747]));

var G__30748 = (i__25877__auto___30747 + (1));
i__25877__auto___30747 = G__30748;
continue;
} else {
}
break;
}

var G__30745 = args30743.length;
switch (G__30745) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30743.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30750 = [];
var len__25876__auto___30821 = arguments.length;
var i__25877__auto___30822 = (0);
while(true){
if((i__25877__auto___30822 < len__25876__auto___30821)){
args30750.push((arguments[i__25877__auto___30822]));

var G__30823 = (i__25877__auto___30822 + (1));
i__25877__auto___30822 = G__30823;
continue;
} else {
}
break;
}

var G__30752 = args30750.length;
switch (G__30752) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30750.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28756__auto___30825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___30825,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___30825,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30791){
var state_val_30792 = (state_30791[(1)]);
if((state_val_30792 === (7))){
var state_30791__$1 = state_30791;
var statearr_30793_30826 = state_30791__$1;
(statearr_30793_30826[(2)] = null);

(statearr_30793_30826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (1))){
var state_30791__$1 = state_30791;
var statearr_30794_30827 = state_30791__$1;
(statearr_30794_30827[(2)] = null);

(statearr_30794_30827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (4))){
var inst_30755 = (state_30791[(7)]);
var inst_30757 = (inst_30755 < cnt);
var state_30791__$1 = state_30791;
if(cljs.core.truth_(inst_30757)){
var statearr_30795_30828 = state_30791__$1;
(statearr_30795_30828[(1)] = (6));

} else {
var statearr_30796_30829 = state_30791__$1;
(statearr_30796_30829[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (15))){
var inst_30787 = (state_30791[(2)]);
var state_30791__$1 = state_30791;
var statearr_30797_30830 = state_30791__$1;
(statearr_30797_30830[(2)] = inst_30787);

(statearr_30797_30830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (13))){
var inst_30780 = cljs.core.async.close_BANG_.call(null,out);
var state_30791__$1 = state_30791;
var statearr_30798_30831 = state_30791__$1;
(statearr_30798_30831[(2)] = inst_30780);

(statearr_30798_30831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (6))){
var state_30791__$1 = state_30791;
var statearr_30799_30832 = state_30791__$1;
(statearr_30799_30832[(2)] = null);

(statearr_30799_30832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (3))){
var inst_30789 = (state_30791[(2)]);
var state_30791__$1 = state_30791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30791__$1,inst_30789);
} else {
if((state_val_30792 === (12))){
var inst_30777 = (state_30791[(8)]);
var inst_30777__$1 = (state_30791[(2)]);
var inst_30778 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30777__$1);
var state_30791__$1 = (function (){var statearr_30800 = state_30791;
(statearr_30800[(8)] = inst_30777__$1);

return statearr_30800;
})();
if(cljs.core.truth_(inst_30778)){
var statearr_30801_30833 = state_30791__$1;
(statearr_30801_30833[(1)] = (13));

} else {
var statearr_30802_30834 = state_30791__$1;
(statearr_30802_30834[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (2))){
var inst_30754 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30755 = (0);
var state_30791__$1 = (function (){var statearr_30803 = state_30791;
(statearr_30803[(9)] = inst_30754);

(statearr_30803[(7)] = inst_30755);

return statearr_30803;
})();
var statearr_30804_30835 = state_30791__$1;
(statearr_30804_30835[(2)] = null);

(statearr_30804_30835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (11))){
var inst_30755 = (state_30791[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30791,(10),Object,null,(9));
var inst_30764 = chs__$1.call(null,inst_30755);
var inst_30765 = done.call(null,inst_30755);
var inst_30766 = cljs.core.async.take_BANG_.call(null,inst_30764,inst_30765);
var state_30791__$1 = state_30791;
var statearr_30805_30836 = state_30791__$1;
(statearr_30805_30836[(2)] = inst_30766);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30791__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (9))){
var inst_30755 = (state_30791[(7)]);
var inst_30768 = (state_30791[(2)]);
var inst_30769 = (inst_30755 + (1));
var inst_30755__$1 = inst_30769;
var state_30791__$1 = (function (){var statearr_30806 = state_30791;
(statearr_30806[(7)] = inst_30755__$1);

(statearr_30806[(10)] = inst_30768);

return statearr_30806;
})();
var statearr_30807_30837 = state_30791__$1;
(statearr_30807_30837[(2)] = null);

(statearr_30807_30837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (5))){
var inst_30775 = (state_30791[(2)]);
var state_30791__$1 = (function (){var statearr_30808 = state_30791;
(statearr_30808[(11)] = inst_30775);

return statearr_30808;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30791__$1,(12),dchan);
} else {
if((state_val_30792 === (14))){
var inst_30777 = (state_30791[(8)]);
var inst_30782 = cljs.core.apply.call(null,f,inst_30777);
var state_30791__$1 = state_30791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30791__$1,(16),out,inst_30782);
} else {
if((state_val_30792 === (16))){
var inst_30784 = (state_30791[(2)]);
var state_30791__$1 = (function (){var statearr_30809 = state_30791;
(statearr_30809[(12)] = inst_30784);

return statearr_30809;
})();
var statearr_30810_30838 = state_30791__$1;
(statearr_30810_30838[(2)] = null);

(statearr_30810_30838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (10))){
var inst_30759 = (state_30791[(2)]);
var inst_30760 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30791__$1 = (function (){var statearr_30811 = state_30791;
(statearr_30811[(13)] = inst_30759);

return statearr_30811;
})();
var statearr_30812_30839 = state_30791__$1;
(statearr_30812_30839[(2)] = inst_30760);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30791__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (8))){
var inst_30773 = (state_30791[(2)]);
var state_30791__$1 = state_30791;
var statearr_30813_30840 = state_30791__$1;
(statearr_30813_30840[(2)] = inst_30773);

(statearr_30813_30840[(1)] = (5));


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
});})(c__28756__auto___30825,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28644__auto__,c__28756__auto___30825,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28645__auto__ = null;
var cljs$core$async$state_machine__28645__auto____0 = (function (){
var statearr_30817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30817[(0)] = cljs$core$async$state_machine__28645__auto__);

(statearr_30817[(1)] = (1));

return statearr_30817;
});
var cljs$core$async$state_machine__28645__auto____1 = (function (state_30791){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_30791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e30818){if((e30818 instanceof Object)){
var ex__28648__auto__ = e30818;
var statearr_30819_30841 = state_30791;
(statearr_30819_30841[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30842 = state_30791;
state_30791 = G__30842;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$state_machine__28645__auto__ = function(state_30791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28645__auto____1.call(this,state_30791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28645__auto____0;
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28645__auto____1;
return cljs$core$async$state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___30825,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28758__auto__ = (function (){var statearr_30820 = f__28757__auto__.call(null);
(statearr_30820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___30825);

return statearr_30820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___30825,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30844 = [];
var len__25876__auto___30902 = arguments.length;
var i__25877__auto___30903 = (0);
while(true){
if((i__25877__auto___30903 < len__25876__auto___30902)){
args30844.push((arguments[i__25877__auto___30903]));

var G__30904 = (i__25877__auto___30903 + (1));
i__25877__auto___30903 = G__30904;
continue;
} else {
}
break;
}

var G__30846 = args30844.length;
switch (G__30846) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30844.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28756__auto___30906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___30906,out){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___30906,out){
return (function (state_30878){
var state_val_30879 = (state_30878[(1)]);
if((state_val_30879 === (7))){
var inst_30857 = (state_30878[(7)]);
var inst_30858 = (state_30878[(8)]);
var inst_30857__$1 = (state_30878[(2)]);
var inst_30858__$1 = cljs.core.nth.call(null,inst_30857__$1,(0),null);
var inst_30859 = cljs.core.nth.call(null,inst_30857__$1,(1),null);
var inst_30860 = (inst_30858__$1 == null);
var state_30878__$1 = (function (){var statearr_30880 = state_30878;
(statearr_30880[(7)] = inst_30857__$1);

(statearr_30880[(8)] = inst_30858__$1);

(statearr_30880[(9)] = inst_30859);

return statearr_30880;
})();
if(cljs.core.truth_(inst_30860)){
var statearr_30881_30907 = state_30878__$1;
(statearr_30881_30907[(1)] = (8));

} else {
var statearr_30882_30908 = state_30878__$1;
(statearr_30882_30908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (1))){
var inst_30847 = cljs.core.vec.call(null,chs);
var inst_30848 = inst_30847;
var state_30878__$1 = (function (){var statearr_30883 = state_30878;
(statearr_30883[(10)] = inst_30848);

return statearr_30883;
})();
var statearr_30884_30909 = state_30878__$1;
(statearr_30884_30909[(2)] = null);

(statearr_30884_30909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (4))){
var inst_30848 = (state_30878[(10)]);
var state_30878__$1 = state_30878;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30878__$1,(7),inst_30848);
} else {
if((state_val_30879 === (6))){
var inst_30874 = (state_30878[(2)]);
var state_30878__$1 = state_30878;
var statearr_30885_30910 = state_30878__$1;
(statearr_30885_30910[(2)] = inst_30874);

(statearr_30885_30910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (3))){
var inst_30876 = (state_30878[(2)]);
var state_30878__$1 = state_30878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30878__$1,inst_30876);
} else {
if((state_val_30879 === (2))){
var inst_30848 = (state_30878[(10)]);
var inst_30850 = cljs.core.count.call(null,inst_30848);
var inst_30851 = (inst_30850 > (0));
var state_30878__$1 = state_30878;
if(cljs.core.truth_(inst_30851)){
var statearr_30887_30911 = state_30878__$1;
(statearr_30887_30911[(1)] = (4));

} else {
var statearr_30888_30912 = state_30878__$1;
(statearr_30888_30912[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (11))){
var inst_30848 = (state_30878[(10)]);
var inst_30867 = (state_30878[(2)]);
var tmp30886 = inst_30848;
var inst_30848__$1 = tmp30886;
var state_30878__$1 = (function (){var statearr_30889 = state_30878;
(statearr_30889[(10)] = inst_30848__$1);

(statearr_30889[(11)] = inst_30867);

return statearr_30889;
})();
var statearr_30890_30913 = state_30878__$1;
(statearr_30890_30913[(2)] = null);

(statearr_30890_30913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (9))){
var inst_30858 = (state_30878[(8)]);
var state_30878__$1 = state_30878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30878__$1,(11),out,inst_30858);
} else {
if((state_val_30879 === (5))){
var inst_30872 = cljs.core.async.close_BANG_.call(null,out);
var state_30878__$1 = state_30878;
var statearr_30891_30914 = state_30878__$1;
(statearr_30891_30914[(2)] = inst_30872);

(statearr_30891_30914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (10))){
var inst_30870 = (state_30878[(2)]);
var state_30878__$1 = state_30878;
var statearr_30892_30915 = state_30878__$1;
(statearr_30892_30915[(2)] = inst_30870);

(statearr_30892_30915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30879 === (8))){
var inst_30857 = (state_30878[(7)]);
var inst_30848 = (state_30878[(10)]);
var inst_30858 = (state_30878[(8)]);
var inst_30859 = (state_30878[(9)]);
var inst_30862 = (function (){var cs = inst_30848;
var vec__30853 = inst_30857;
var v = inst_30858;
var c = inst_30859;
return ((function (cs,vec__30853,v,c,inst_30857,inst_30848,inst_30858,inst_30859,state_val_30879,c__28756__auto___30906,out){
return (function (p1__30843_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30843_SHARP_);
});
;})(cs,vec__30853,v,c,inst_30857,inst_30848,inst_30858,inst_30859,state_val_30879,c__28756__auto___30906,out))
})();
var inst_30863 = cljs.core.filterv.call(null,inst_30862,inst_30848);
var inst_30848__$1 = inst_30863;
var state_30878__$1 = (function (){var statearr_30893 = state_30878;
(statearr_30893[(10)] = inst_30848__$1);

return statearr_30893;
})();
var statearr_30894_30916 = state_30878__$1;
(statearr_30894_30916[(2)] = null);

(statearr_30894_30916[(1)] = (2));


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
});})(c__28756__auto___30906,out))
;
return ((function (switch__28644__auto__,c__28756__auto___30906,out){
return (function() {
var cljs$core$async$state_machine__28645__auto__ = null;
var cljs$core$async$state_machine__28645__auto____0 = (function (){
var statearr_30898 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30898[(0)] = cljs$core$async$state_machine__28645__auto__);

(statearr_30898[(1)] = (1));

return statearr_30898;
});
var cljs$core$async$state_machine__28645__auto____1 = (function (state_30878){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_30878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e30899){if((e30899 instanceof Object)){
var ex__28648__auto__ = e30899;
var statearr_30900_30917 = state_30878;
(statearr_30900_30917[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30918 = state_30878;
state_30878 = G__30918;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$state_machine__28645__auto__ = function(state_30878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28645__auto____1.call(this,state_30878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28645__auto____0;
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28645__auto____1;
return cljs$core$async$state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___30906,out))
})();
var state__28758__auto__ = (function (){var statearr_30901 = f__28757__auto__.call(null);
(statearr_30901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___30906);

return statearr_30901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___30906,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30919 = [];
var len__25876__auto___30968 = arguments.length;
var i__25877__auto___30969 = (0);
while(true){
if((i__25877__auto___30969 < len__25876__auto___30968)){
args30919.push((arguments[i__25877__auto___30969]));

var G__30970 = (i__25877__auto___30969 + (1));
i__25877__auto___30969 = G__30970;
continue;
} else {
}
break;
}

var G__30921 = args30919.length;
switch (G__30921) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30919.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28756__auto___30972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___30972,out){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___30972,out){
return (function (state_30945){
var state_val_30946 = (state_30945[(1)]);
if((state_val_30946 === (7))){
var inst_30927 = (state_30945[(7)]);
var inst_30927__$1 = (state_30945[(2)]);
var inst_30928 = (inst_30927__$1 == null);
var inst_30929 = cljs.core.not.call(null,inst_30928);
var state_30945__$1 = (function (){var statearr_30947 = state_30945;
(statearr_30947[(7)] = inst_30927__$1);

return statearr_30947;
})();
if(inst_30929){
var statearr_30948_30973 = state_30945__$1;
(statearr_30948_30973[(1)] = (8));

} else {
var statearr_30949_30974 = state_30945__$1;
(statearr_30949_30974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (1))){
var inst_30922 = (0);
var state_30945__$1 = (function (){var statearr_30950 = state_30945;
(statearr_30950[(8)] = inst_30922);

return statearr_30950;
})();
var statearr_30951_30975 = state_30945__$1;
(statearr_30951_30975[(2)] = null);

(statearr_30951_30975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (4))){
var state_30945__$1 = state_30945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30945__$1,(7),ch);
} else {
if((state_val_30946 === (6))){
var inst_30940 = (state_30945[(2)]);
var state_30945__$1 = state_30945;
var statearr_30952_30976 = state_30945__$1;
(statearr_30952_30976[(2)] = inst_30940);

(statearr_30952_30976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (3))){
var inst_30942 = (state_30945[(2)]);
var inst_30943 = cljs.core.async.close_BANG_.call(null,out);
var state_30945__$1 = (function (){var statearr_30953 = state_30945;
(statearr_30953[(9)] = inst_30942);

return statearr_30953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30945__$1,inst_30943);
} else {
if((state_val_30946 === (2))){
var inst_30922 = (state_30945[(8)]);
var inst_30924 = (inst_30922 < n);
var state_30945__$1 = state_30945;
if(cljs.core.truth_(inst_30924)){
var statearr_30954_30977 = state_30945__$1;
(statearr_30954_30977[(1)] = (4));

} else {
var statearr_30955_30978 = state_30945__$1;
(statearr_30955_30978[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (11))){
var inst_30922 = (state_30945[(8)]);
var inst_30932 = (state_30945[(2)]);
var inst_30933 = (inst_30922 + (1));
var inst_30922__$1 = inst_30933;
var state_30945__$1 = (function (){var statearr_30956 = state_30945;
(statearr_30956[(8)] = inst_30922__$1);

(statearr_30956[(10)] = inst_30932);

return statearr_30956;
})();
var statearr_30957_30979 = state_30945__$1;
(statearr_30957_30979[(2)] = null);

(statearr_30957_30979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (9))){
var state_30945__$1 = state_30945;
var statearr_30958_30980 = state_30945__$1;
(statearr_30958_30980[(2)] = null);

(statearr_30958_30980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (5))){
var state_30945__$1 = state_30945;
var statearr_30959_30981 = state_30945__$1;
(statearr_30959_30981[(2)] = null);

(statearr_30959_30981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (10))){
var inst_30937 = (state_30945[(2)]);
var state_30945__$1 = state_30945;
var statearr_30960_30982 = state_30945__$1;
(statearr_30960_30982[(2)] = inst_30937);

(statearr_30960_30982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30946 === (8))){
var inst_30927 = (state_30945[(7)]);
var state_30945__$1 = state_30945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30945__$1,(11),out,inst_30927);
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
});})(c__28756__auto___30972,out))
;
return ((function (switch__28644__auto__,c__28756__auto___30972,out){
return (function() {
var cljs$core$async$state_machine__28645__auto__ = null;
var cljs$core$async$state_machine__28645__auto____0 = (function (){
var statearr_30964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30964[(0)] = cljs$core$async$state_machine__28645__auto__);

(statearr_30964[(1)] = (1));

return statearr_30964;
});
var cljs$core$async$state_machine__28645__auto____1 = (function (state_30945){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_30945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e30965){if((e30965 instanceof Object)){
var ex__28648__auto__ = e30965;
var statearr_30966_30983 = state_30945;
(statearr_30966_30983[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30984 = state_30945;
state_30945 = G__30984;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$state_machine__28645__auto__ = function(state_30945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28645__auto____1.call(this,state_30945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28645__auto____0;
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28645__auto____1;
return cljs$core$async$state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___30972,out))
})();
var state__28758__auto__ = (function (){var statearr_30967 = f__28757__auto__.call(null);
(statearr_30967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___30972);

return statearr_30967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___30972,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30992 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30992 = (function (map_LT_,f,ch,meta30993){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30993 = meta30993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30994,meta30993__$1){
var self__ = this;
var _30994__$1 = this;
return (new cljs.core.async.t_cljs$core$async30992(self__.map_LT_,self__.f,self__.ch,meta30993__$1));
});

cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30994){
var self__ = this;
var _30994__$1 = this;
return self__.meta30993;
});

cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30995 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30995 = (function (map_LT_,f,ch,meta30993,_,fn1,meta30996){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30993 = meta30993;
this._ = _;
this.fn1 = fn1;
this.meta30996 = meta30996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30997,meta30996__$1){
var self__ = this;
var _30997__$1 = this;
return (new cljs.core.async.t_cljs$core$async30995(self__.map_LT_,self__.f,self__.ch,self__.meta30993,self__._,self__.fn1,meta30996__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30997){
var self__ = this;
var _30997__$1 = this;
return self__.meta30996;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30985_SHARP_){
return f1.call(null,(((p1__30985_SHARP_ == null))?null:self__.f.call(null,p1__30985_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30995.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30993","meta30993",640975888,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30992","cljs.core.async/t_cljs$core$async30992",1484895054,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30996","meta30996",-263680622,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30995";

cljs.core.async.t_cljs$core$async30995.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async30995");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30995 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30995(map_LT___$1,f__$1,ch__$1,meta30993__$1,___$2,fn1__$1,meta30996){
return (new cljs.core.async.t_cljs$core$async30995(map_LT___$1,f__$1,ch__$1,meta30993__$1,___$2,fn1__$1,meta30996));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30995(self__.map_LT_,self__.f,self__.ch,self__.meta30993,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24789__auto__ = ret;
if(cljs.core.truth_(and__24789__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24789__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30992.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30993","meta30993",640975888,null)], null);
});

cljs.core.async.t_cljs$core$async30992.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30992";

cljs.core.async.t_cljs$core$async30992.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async30992");
});

cljs.core.async.__GT_t_cljs$core$async30992 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30992(map_LT___$1,f__$1,ch__$1,meta30993){
return (new cljs.core.async.t_cljs$core$async30992(map_LT___$1,f__$1,ch__$1,meta30993));
});

}

return (new cljs.core.async.t_cljs$core$async30992(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31001 = (function (map_GT_,f,ch,meta31002){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31002 = meta31002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31003,meta31002__$1){
var self__ = this;
var _31003__$1 = this;
return (new cljs.core.async.t_cljs$core$async31001(self__.map_GT_,self__.f,self__.ch,meta31002__$1));
});

cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31003){
var self__ = this;
var _31003__$1 = this;
return self__.meta31002;
});

cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31002","meta31002",2011600893,null)], null);
});

cljs.core.async.t_cljs$core$async31001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31001";

cljs.core.async.t_cljs$core$async31001.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async31001");
});

cljs.core.async.__GT_t_cljs$core$async31001 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31001(map_GT___$1,f__$1,ch__$1,meta31002){
return (new cljs.core.async.t_cljs$core$async31001(map_GT___$1,f__$1,ch__$1,meta31002));
});

}

return (new cljs.core.async.t_cljs$core$async31001(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31007 = (function (filter_GT_,p,ch,meta31008){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31008 = meta31008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31009,meta31008__$1){
var self__ = this;
var _31009__$1 = this;
return (new cljs.core.async.t_cljs$core$async31007(self__.filter_GT_,self__.p,self__.ch,meta31008__$1));
});

cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31009){
var self__ = this;
var _31009__$1 = this;
return self__.meta31008;
});

cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31007.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31008","meta31008",999500153,null)], null);
});

cljs.core.async.t_cljs$core$async31007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31007";

cljs.core.async.t_cljs$core$async31007.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async31007");
});

cljs.core.async.__GT_t_cljs$core$async31007 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31007(filter_GT___$1,p__$1,ch__$1,meta31008){
return (new cljs.core.async.t_cljs$core$async31007(filter_GT___$1,p__$1,ch__$1,meta31008));
});

}

return (new cljs.core.async.t_cljs$core$async31007(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31010 = [];
var len__25876__auto___31054 = arguments.length;
var i__25877__auto___31055 = (0);
while(true){
if((i__25877__auto___31055 < len__25876__auto___31054)){
args31010.push((arguments[i__25877__auto___31055]));

var G__31056 = (i__25877__auto___31055 + (1));
i__25877__auto___31055 = G__31056;
continue;
} else {
}
break;
}

var G__31012 = args31010.length;
switch (G__31012) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31010.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28756__auto___31058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___31058,out){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___31058,out){
return (function (state_31033){
var state_val_31034 = (state_31033[(1)]);
if((state_val_31034 === (7))){
var inst_31029 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
var statearr_31035_31059 = state_31033__$1;
(statearr_31035_31059[(2)] = inst_31029);

(statearr_31035_31059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (1))){
var state_31033__$1 = state_31033;
var statearr_31036_31060 = state_31033__$1;
(statearr_31036_31060[(2)] = null);

(statearr_31036_31060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (4))){
var inst_31015 = (state_31033[(7)]);
var inst_31015__$1 = (state_31033[(2)]);
var inst_31016 = (inst_31015__$1 == null);
var state_31033__$1 = (function (){var statearr_31037 = state_31033;
(statearr_31037[(7)] = inst_31015__$1);

return statearr_31037;
})();
if(cljs.core.truth_(inst_31016)){
var statearr_31038_31061 = state_31033__$1;
(statearr_31038_31061[(1)] = (5));

} else {
var statearr_31039_31062 = state_31033__$1;
(statearr_31039_31062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (6))){
var inst_31015 = (state_31033[(7)]);
var inst_31020 = p.call(null,inst_31015);
var state_31033__$1 = state_31033;
if(cljs.core.truth_(inst_31020)){
var statearr_31040_31063 = state_31033__$1;
(statearr_31040_31063[(1)] = (8));

} else {
var statearr_31041_31064 = state_31033__$1;
(statearr_31041_31064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (3))){
var inst_31031 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31033__$1,inst_31031);
} else {
if((state_val_31034 === (2))){
var state_31033__$1 = state_31033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31033__$1,(4),ch);
} else {
if((state_val_31034 === (11))){
var inst_31023 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
var statearr_31042_31065 = state_31033__$1;
(statearr_31042_31065[(2)] = inst_31023);

(statearr_31042_31065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (9))){
var state_31033__$1 = state_31033;
var statearr_31043_31066 = state_31033__$1;
(statearr_31043_31066[(2)] = null);

(statearr_31043_31066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (5))){
var inst_31018 = cljs.core.async.close_BANG_.call(null,out);
var state_31033__$1 = state_31033;
var statearr_31044_31067 = state_31033__$1;
(statearr_31044_31067[(2)] = inst_31018);

(statearr_31044_31067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (10))){
var inst_31026 = (state_31033[(2)]);
var state_31033__$1 = (function (){var statearr_31045 = state_31033;
(statearr_31045[(8)] = inst_31026);

return statearr_31045;
})();
var statearr_31046_31068 = state_31033__$1;
(statearr_31046_31068[(2)] = null);

(statearr_31046_31068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (8))){
var inst_31015 = (state_31033[(7)]);
var state_31033__$1 = state_31033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31033__$1,(11),out,inst_31015);
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
});})(c__28756__auto___31058,out))
;
return ((function (switch__28644__auto__,c__28756__auto___31058,out){
return (function() {
var cljs$core$async$state_machine__28645__auto__ = null;
var cljs$core$async$state_machine__28645__auto____0 = (function (){
var statearr_31050 = [null,null,null,null,null,null,null,null,null];
(statearr_31050[(0)] = cljs$core$async$state_machine__28645__auto__);

(statearr_31050[(1)] = (1));

return statearr_31050;
});
var cljs$core$async$state_machine__28645__auto____1 = (function (state_31033){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_31033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e31051){if((e31051 instanceof Object)){
var ex__28648__auto__ = e31051;
var statearr_31052_31069 = state_31033;
(statearr_31052_31069[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31070 = state_31033;
state_31033 = G__31070;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$state_machine__28645__auto__ = function(state_31033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28645__auto____1.call(this,state_31033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28645__auto____0;
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28645__auto____1;
return cljs$core$async$state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___31058,out))
})();
var state__28758__auto__ = (function (){var statearr_31053 = f__28757__auto__.call(null);
(statearr_31053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___31058);

return statearr_31053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___31058,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31071 = [];
var len__25876__auto___31074 = arguments.length;
var i__25877__auto___31075 = (0);
while(true){
if((i__25877__auto___31075 < len__25876__auto___31074)){
args31071.push((arguments[i__25877__auto___31075]));

var G__31076 = (i__25877__auto___31075 + (1));
i__25877__auto___31075 = G__31076;
continue;
} else {
}
break;
}

var G__31073 = args31071.length;
switch (G__31073) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31071.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto__){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto__){
return (function (state_31243){
var state_val_31244 = (state_31243[(1)]);
if((state_val_31244 === (7))){
var inst_31239 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31245_31286 = state_31243__$1;
(statearr_31245_31286[(2)] = inst_31239);

(statearr_31245_31286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (20))){
var inst_31209 = (state_31243[(7)]);
var inst_31220 = (state_31243[(2)]);
var inst_31221 = cljs.core.next.call(null,inst_31209);
var inst_31195 = inst_31221;
var inst_31196 = null;
var inst_31197 = (0);
var inst_31198 = (0);
var state_31243__$1 = (function (){var statearr_31246 = state_31243;
(statearr_31246[(8)] = inst_31220);

(statearr_31246[(9)] = inst_31195);

(statearr_31246[(10)] = inst_31198);

(statearr_31246[(11)] = inst_31197);

(statearr_31246[(12)] = inst_31196);

return statearr_31246;
})();
var statearr_31247_31287 = state_31243__$1;
(statearr_31247_31287[(2)] = null);

(statearr_31247_31287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (1))){
var state_31243__$1 = state_31243;
var statearr_31248_31288 = state_31243__$1;
(statearr_31248_31288[(2)] = null);

(statearr_31248_31288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (4))){
var inst_31184 = (state_31243[(13)]);
var inst_31184__$1 = (state_31243[(2)]);
var inst_31185 = (inst_31184__$1 == null);
var state_31243__$1 = (function (){var statearr_31249 = state_31243;
(statearr_31249[(13)] = inst_31184__$1);

return statearr_31249;
})();
if(cljs.core.truth_(inst_31185)){
var statearr_31250_31289 = state_31243__$1;
(statearr_31250_31289[(1)] = (5));

} else {
var statearr_31251_31290 = state_31243__$1;
(statearr_31251_31290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (15))){
var state_31243__$1 = state_31243;
var statearr_31255_31291 = state_31243__$1;
(statearr_31255_31291[(2)] = null);

(statearr_31255_31291[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (21))){
var state_31243__$1 = state_31243;
var statearr_31256_31292 = state_31243__$1;
(statearr_31256_31292[(2)] = null);

(statearr_31256_31292[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (13))){
var inst_31195 = (state_31243[(9)]);
var inst_31198 = (state_31243[(10)]);
var inst_31197 = (state_31243[(11)]);
var inst_31196 = (state_31243[(12)]);
var inst_31205 = (state_31243[(2)]);
var inst_31206 = (inst_31198 + (1));
var tmp31252 = inst_31195;
var tmp31253 = inst_31197;
var tmp31254 = inst_31196;
var inst_31195__$1 = tmp31252;
var inst_31196__$1 = tmp31254;
var inst_31197__$1 = tmp31253;
var inst_31198__$1 = inst_31206;
var state_31243__$1 = (function (){var statearr_31257 = state_31243;
(statearr_31257[(9)] = inst_31195__$1);

(statearr_31257[(10)] = inst_31198__$1);

(statearr_31257[(11)] = inst_31197__$1);

(statearr_31257[(14)] = inst_31205);

(statearr_31257[(12)] = inst_31196__$1);

return statearr_31257;
})();
var statearr_31258_31293 = state_31243__$1;
(statearr_31258_31293[(2)] = null);

(statearr_31258_31293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (22))){
var state_31243__$1 = state_31243;
var statearr_31259_31294 = state_31243__$1;
(statearr_31259_31294[(2)] = null);

(statearr_31259_31294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (6))){
var inst_31184 = (state_31243[(13)]);
var inst_31193 = f.call(null,inst_31184);
var inst_31194 = cljs.core.seq.call(null,inst_31193);
var inst_31195 = inst_31194;
var inst_31196 = null;
var inst_31197 = (0);
var inst_31198 = (0);
var state_31243__$1 = (function (){var statearr_31260 = state_31243;
(statearr_31260[(9)] = inst_31195);

(statearr_31260[(10)] = inst_31198);

(statearr_31260[(11)] = inst_31197);

(statearr_31260[(12)] = inst_31196);

return statearr_31260;
})();
var statearr_31261_31295 = state_31243__$1;
(statearr_31261_31295[(2)] = null);

(statearr_31261_31295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (17))){
var inst_31209 = (state_31243[(7)]);
var inst_31213 = cljs.core.chunk_first.call(null,inst_31209);
var inst_31214 = cljs.core.chunk_rest.call(null,inst_31209);
var inst_31215 = cljs.core.count.call(null,inst_31213);
var inst_31195 = inst_31214;
var inst_31196 = inst_31213;
var inst_31197 = inst_31215;
var inst_31198 = (0);
var state_31243__$1 = (function (){var statearr_31262 = state_31243;
(statearr_31262[(9)] = inst_31195);

(statearr_31262[(10)] = inst_31198);

(statearr_31262[(11)] = inst_31197);

(statearr_31262[(12)] = inst_31196);

return statearr_31262;
})();
var statearr_31263_31296 = state_31243__$1;
(statearr_31263_31296[(2)] = null);

(statearr_31263_31296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (3))){
var inst_31241 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31243__$1,inst_31241);
} else {
if((state_val_31244 === (12))){
var inst_31229 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31264_31297 = state_31243__$1;
(statearr_31264_31297[(2)] = inst_31229);

(statearr_31264_31297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (2))){
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31243__$1,(4),in$);
} else {
if((state_val_31244 === (23))){
var inst_31237 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31265_31298 = state_31243__$1;
(statearr_31265_31298[(2)] = inst_31237);

(statearr_31265_31298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (19))){
var inst_31224 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31266_31299 = state_31243__$1;
(statearr_31266_31299[(2)] = inst_31224);

(statearr_31266_31299[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (11))){
var inst_31195 = (state_31243[(9)]);
var inst_31209 = (state_31243[(7)]);
var inst_31209__$1 = cljs.core.seq.call(null,inst_31195);
var state_31243__$1 = (function (){var statearr_31267 = state_31243;
(statearr_31267[(7)] = inst_31209__$1);

return statearr_31267;
})();
if(inst_31209__$1){
var statearr_31268_31300 = state_31243__$1;
(statearr_31268_31300[(1)] = (14));

} else {
var statearr_31269_31301 = state_31243__$1;
(statearr_31269_31301[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (9))){
var inst_31231 = (state_31243[(2)]);
var inst_31232 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31243__$1 = (function (){var statearr_31270 = state_31243;
(statearr_31270[(15)] = inst_31231);

return statearr_31270;
})();
if(cljs.core.truth_(inst_31232)){
var statearr_31271_31302 = state_31243__$1;
(statearr_31271_31302[(1)] = (21));

} else {
var statearr_31272_31303 = state_31243__$1;
(statearr_31272_31303[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (5))){
var inst_31187 = cljs.core.async.close_BANG_.call(null,out);
var state_31243__$1 = state_31243;
var statearr_31273_31304 = state_31243__$1;
(statearr_31273_31304[(2)] = inst_31187);

(statearr_31273_31304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (14))){
var inst_31209 = (state_31243[(7)]);
var inst_31211 = cljs.core.chunked_seq_QMARK_.call(null,inst_31209);
var state_31243__$1 = state_31243;
if(inst_31211){
var statearr_31274_31305 = state_31243__$1;
(statearr_31274_31305[(1)] = (17));

} else {
var statearr_31275_31306 = state_31243__$1;
(statearr_31275_31306[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (16))){
var inst_31227 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31276_31307 = state_31243__$1;
(statearr_31276_31307[(2)] = inst_31227);

(statearr_31276_31307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (10))){
var inst_31198 = (state_31243[(10)]);
var inst_31196 = (state_31243[(12)]);
var inst_31203 = cljs.core._nth.call(null,inst_31196,inst_31198);
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31243__$1,(13),out,inst_31203);
} else {
if((state_val_31244 === (18))){
var inst_31209 = (state_31243[(7)]);
var inst_31218 = cljs.core.first.call(null,inst_31209);
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31243__$1,(20),out,inst_31218);
} else {
if((state_val_31244 === (8))){
var inst_31198 = (state_31243[(10)]);
var inst_31197 = (state_31243[(11)]);
var inst_31200 = (inst_31198 < inst_31197);
var inst_31201 = inst_31200;
var state_31243__$1 = state_31243;
if(cljs.core.truth_(inst_31201)){
var statearr_31277_31308 = state_31243__$1;
(statearr_31277_31308[(1)] = (10));

} else {
var statearr_31278_31309 = state_31243__$1;
(statearr_31278_31309[(1)] = (11));

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
});})(c__28756__auto__))
;
return ((function (switch__28644__auto__,c__28756__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28645__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28645__auto____0 = (function (){
var statearr_31282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31282[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28645__auto__);

(statearr_31282[(1)] = (1));

return statearr_31282;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28645__auto____1 = (function (state_31243){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_31243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e31283){if((e31283 instanceof Object)){
var ex__28648__auto__ = e31283;
var statearr_31284_31310 = state_31243;
(statearr_31284_31310[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31311 = state_31243;
state_31243 = G__31311;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28645__auto__ = function(state_31243){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28645__auto____1.call(this,state_31243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28645__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28645__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto__))
})();
var state__28758__auto__ = (function (){var statearr_31285 = f__28757__auto__.call(null);
(statearr_31285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto__);

return statearr_31285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto__))
);

return c__28756__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31312 = [];
var len__25876__auto___31315 = arguments.length;
var i__25877__auto___31316 = (0);
while(true){
if((i__25877__auto___31316 < len__25876__auto___31315)){
args31312.push((arguments[i__25877__auto___31316]));

var G__31317 = (i__25877__auto___31316 + (1));
i__25877__auto___31316 = G__31317;
continue;
} else {
}
break;
}

var G__31314 = args31312.length;
switch (G__31314) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31312.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31319 = [];
var len__25876__auto___31322 = arguments.length;
var i__25877__auto___31323 = (0);
while(true){
if((i__25877__auto___31323 < len__25876__auto___31322)){
args31319.push((arguments[i__25877__auto___31323]));

var G__31324 = (i__25877__auto___31323 + (1));
i__25877__auto___31323 = G__31324;
continue;
} else {
}
break;
}

var G__31321 = args31319.length;
switch (G__31321) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31319.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31326 = [];
var len__25876__auto___31377 = arguments.length;
var i__25877__auto___31378 = (0);
while(true){
if((i__25877__auto___31378 < len__25876__auto___31377)){
args31326.push((arguments[i__25877__auto___31378]));

var G__31379 = (i__25877__auto___31378 + (1));
i__25877__auto___31378 = G__31379;
continue;
} else {
}
break;
}

var G__31328 = args31326.length;
switch (G__31328) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31326.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28756__auto___31381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___31381,out){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___31381,out){
return (function (state_31352){
var state_val_31353 = (state_31352[(1)]);
if((state_val_31353 === (7))){
var inst_31347 = (state_31352[(2)]);
var state_31352__$1 = state_31352;
var statearr_31354_31382 = state_31352__$1;
(statearr_31354_31382[(2)] = inst_31347);

(statearr_31354_31382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (1))){
var inst_31329 = null;
var state_31352__$1 = (function (){var statearr_31355 = state_31352;
(statearr_31355[(7)] = inst_31329);

return statearr_31355;
})();
var statearr_31356_31383 = state_31352__$1;
(statearr_31356_31383[(2)] = null);

(statearr_31356_31383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (4))){
var inst_31332 = (state_31352[(8)]);
var inst_31332__$1 = (state_31352[(2)]);
var inst_31333 = (inst_31332__$1 == null);
var inst_31334 = cljs.core.not.call(null,inst_31333);
var state_31352__$1 = (function (){var statearr_31357 = state_31352;
(statearr_31357[(8)] = inst_31332__$1);

return statearr_31357;
})();
if(inst_31334){
var statearr_31358_31384 = state_31352__$1;
(statearr_31358_31384[(1)] = (5));

} else {
var statearr_31359_31385 = state_31352__$1;
(statearr_31359_31385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (6))){
var state_31352__$1 = state_31352;
var statearr_31360_31386 = state_31352__$1;
(statearr_31360_31386[(2)] = null);

(statearr_31360_31386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (3))){
var inst_31349 = (state_31352[(2)]);
var inst_31350 = cljs.core.async.close_BANG_.call(null,out);
var state_31352__$1 = (function (){var statearr_31361 = state_31352;
(statearr_31361[(9)] = inst_31349);

return statearr_31361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31352__$1,inst_31350);
} else {
if((state_val_31353 === (2))){
var state_31352__$1 = state_31352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31352__$1,(4),ch);
} else {
if((state_val_31353 === (11))){
var inst_31332 = (state_31352[(8)]);
var inst_31341 = (state_31352[(2)]);
var inst_31329 = inst_31332;
var state_31352__$1 = (function (){var statearr_31362 = state_31352;
(statearr_31362[(10)] = inst_31341);

(statearr_31362[(7)] = inst_31329);

return statearr_31362;
})();
var statearr_31363_31387 = state_31352__$1;
(statearr_31363_31387[(2)] = null);

(statearr_31363_31387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (9))){
var inst_31332 = (state_31352[(8)]);
var state_31352__$1 = state_31352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31352__$1,(11),out,inst_31332);
} else {
if((state_val_31353 === (5))){
var inst_31332 = (state_31352[(8)]);
var inst_31329 = (state_31352[(7)]);
var inst_31336 = cljs.core._EQ_.call(null,inst_31332,inst_31329);
var state_31352__$1 = state_31352;
if(inst_31336){
var statearr_31365_31388 = state_31352__$1;
(statearr_31365_31388[(1)] = (8));

} else {
var statearr_31366_31389 = state_31352__$1;
(statearr_31366_31389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (10))){
var inst_31344 = (state_31352[(2)]);
var state_31352__$1 = state_31352;
var statearr_31367_31390 = state_31352__$1;
(statearr_31367_31390[(2)] = inst_31344);

(statearr_31367_31390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (8))){
var inst_31329 = (state_31352[(7)]);
var tmp31364 = inst_31329;
var inst_31329__$1 = tmp31364;
var state_31352__$1 = (function (){var statearr_31368 = state_31352;
(statearr_31368[(7)] = inst_31329__$1);

return statearr_31368;
})();
var statearr_31369_31391 = state_31352__$1;
(statearr_31369_31391[(2)] = null);

(statearr_31369_31391[(1)] = (2));


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
});})(c__28756__auto___31381,out))
;
return ((function (switch__28644__auto__,c__28756__auto___31381,out){
return (function() {
var cljs$core$async$state_machine__28645__auto__ = null;
var cljs$core$async$state_machine__28645__auto____0 = (function (){
var statearr_31373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31373[(0)] = cljs$core$async$state_machine__28645__auto__);

(statearr_31373[(1)] = (1));

return statearr_31373;
});
var cljs$core$async$state_machine__28645__auto____1 = (function (state_31352){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_31352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e31374){if((e31374 instanceof Object)){
var ex__28648__auto__ = e31374;
var statearr_31375_31392 = state_31352;
(statearr_31375_31392[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31393 = state_31352;
state_31352 = G__31393;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$state_machine__28645__auto__ = function(state_31352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28645__auto____1.call(this,state_31352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28645__auto____0;
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28645__auto____1;
return cljs$core$async$state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___31381,out))
})();
var state__28758__auto__ = (function (){var statearr_31376 = f__28757__auto__.call(null);
(statearr_31376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___31381);

return statearr_31376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___31381,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31394 = [];
var len__25876__auto___31464 = arguments.length;
var i__25877__auto___31465 = (0);
while(true){
if((i__25877__auto___31465 < len__25876__auto___31464)){
args31394.push((arguments[i__25877__auto___31465]));

var G__31466 = (i__25877__auto___31465 + (1));
i__25877__auto___31465 = G__31466;
continue;
} else {
}
break;
}

var G__31396 = args31394.length;
switch (G__31396) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31394.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28756__auto___31468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___31468,out){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___31468,out){
return (function (state_31434){
var state_val_31435 = (state_31434[(1)]);
if((state_val_31435 === (7))){
var inst_31430 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31436_31469 = state_31434__$1;
(statearr_31436_31469[(2)] = inst_31430);

(statearr_31436_31469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (1))){
var inst_31397 = (new Array(n));
var inst_31398 = inst_31397;
var inst_31399 = (0);
var state_31434__$1 = (function (){var statearr_31437 = state_31434;
(statearr_31437[(7)] = inst_31399);

(statearr_31437[(8)] = inst_31398);

return statearr_31437;
})();
var statearr_31438_31470 = state_31434__$1;
(statearr_31438_31470[(2)] = null);

(statearr_31438_31470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (4))){
var inst_31402 = (state_31434[(9)]);
var inst_31402__$1 = (state_31434[(2)]);
var inst_31403 = (inst_31402__$1 == null);
var inst_31404 = cljs.core.not.call(null,inst_31403);
var state_31434__$1 = (function (){var statearr_31439 = state_31434;
(statearr_31439[(9)] = inst_31402__$1);

return statearr_31439;
})();
if(inst_31404){
var statearr_31440_31471 = state_31434__$1;
(statearr_31440_31471[(1)] = (5));

} else {
var statearr_31441_31472 = state_31434__$1;
(statearr_31441_31472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (15))){
var inst_31424 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31442_31473 = state_31434__$1;
(statearr_31442_31473[(2)] = inst_31424);

(statearr_31442_31473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (13))){
var state_31434__$1 = state_31434;
var statearr_31443_31474 = state_31434__$1;
(statearr_31443_31474[(2)] = null);

(statearr_31443_31474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (6))){
var inst_31399 = (state_31434[(7)]);
var inst_31420 = (inst_31399 > (0));
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31420)){
var statearr_31444_31475 = state_31434__$1;
(statearr_31444_31475[(1)] = (12));

} else {
var statearr_31445_31476 = state_31434__$1;
(statearr_31445_31476[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (3))){
var inst_31432 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31434__$1,inst_31432);
} else {
if((state_val_31435 === (12))){
var inst_31398 = (state_31434[(8)]);
var inst_31422 = cljs.core.vec.call(null,inst_31398);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31434__$1,(15),out,inst_31422);
} else {
if((state_val_31435 === (2))){
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(4),ch);
} else {
if((state_val_31435 === (11))){
var inst_31414 = (state_31434[(2)]);
var inst_31415 = (new Array(n));
var inst_31398 = inst_31415;
var inst_31399 = (0);
var state_31434__$1 = (function (){var statearr_31446 = state_31434;
(statearr_31446[(7)] = inst_31399);

(statearr_31446[(10)] = inst_31414);

(statearr_31446[(8)] = inst_31398);

return statearr_31446;
})();
var statearr_31447_31477 = state_31434__$1;
(statearr_31447_31477[(2)] = null);

(statearr_31447_31477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (9))){
var inst_31398 = (state_31434[(8)]);
var inst_31412 = cljs.core.vec.call(null,inst_31398);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31434__$1,(11),out,inst_31412);
} else {
if((state_val_31435 === (5))){
var inst_31399 = (state_31434[(7)]);
var inst_31402 = (state_31434[(9)]);
var inst_31398 = (state_31434[(8)]);
var inst_31407 = (state_31434[(11)]);
var inst_31406 = (inst_31398[inst_31399] = inst_31402);
var inst_31407__$1 = (inst_31399 + (1));
var inst_31408 = (inst_31407__$1 < n);
var state_31434__$1 = (function (){var statearr_31448 = state_31434;
(statearr_31448[(12)] = inst_31406);

(statearr_31448[(11)] = inst_31407__$1);

return statearr_31448;
})();
if(cljs.core.truth_(inst_31408)){
var statearr_31449_31478 = state_31434__$1;
(statearr_31449_31478[(1)] = (8));

} else {
var statearr_31450_31479 = state_31434__$1;
(statearr_31450_31479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (14))){
var inst_31427 = (state_31434[(2)]);
var inst_31428 = cljs.core.async.close_BANG_.call(null,out);
var state_31434__$1 = (function (){var statearr_31452 = state_31434;
(statearr_31452[(13)] = inst_31427);

return statearr_31452;
})();
var statearr_31453_31480 = state_31434__$1;
(statearr_31453_31480[(2)] = inst_31428);

(statearr_31453_31480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (10))){
var inst_31418 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31454_31481 = state_31434__$1;
(statearr_31454_31481[(2)] = inst_31418);

(statearr_31454_31481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (8))){
var inst_31398 = (state_31434[(8)]);
var inst_31407 = (state_31434[(11)]);
var tmp31451 = inst_31398;
var inst_31398__$1 = tmp31451;
var inst_31399 = inst_31407;
var state_31434__$1 = (function (){var statearr_31455 = state_31434;
(statearr_31455[(7)] = inst_31399);

(statearr_31455[(8)] = inst_31398__$1);

return statearr_31455;
})();
var statearr_31456_31482 = state_31434__$1;
(statearr_31456_31482[(2)] = null);

(statearr_31456_31482[(1)] = (2));


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
});})(c__28756__auto___31468,out))
;
return ((function (switch__28644__auto__,c__28756__auto___31468,out){
return (function() {
var cljs$core$async$state_machine__28645__auto__ = null;
var cljs$core$async$state_machine__28645__auto____0 = (function (){
var statearr_31460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31460[(0)] = cljs$core$async$state_machine__28645__auto__);

(statearr_31460[(1)] = (1));

return statearr_31460;
});
var cljs$core$async$state_machine__28645__auto____1 = (function (state_31434){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_31434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e31461){if((e31461 instanceof Object)){
var ex__28648__auto__ = e31461;
var statearr_31462_31483 = state_31434;
(statearr_31462_31483[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31484 = state_31434;
state_31434 = G__31484;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$state_machine__28645__auto__ = function(state_31434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28645__auto____1.call(this,state_31434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28645__auto____0;
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28645__auto____1;
return cljs$core$async$state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___31468,out))
})();
var state__28758__auto__ = (function (){var statearr_31463 = f__28757__auto__.call(null);
(statearr_31463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___31468);

return statearr_31463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___31468,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31485 = [];
var len__25876__auto___31559 = arguments.length;
var i__25877__auto___31560 = (0);
while(true){
if((i__25877__auto___31560 < len__25876__auto___31559)){
args31485.push((arguments[i__25877__auto___31560]));

var G__31561 = (i__25877__auto___31560 + (1));
i__25877__auto___31560 = G__31561;
continue;
} else {
}
break;
}

var G__31487 = args31485.length;
switch (G__31487) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31485.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28756__auto___31563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28756__auto___31563,out){
return (function (){
var f__28757__auto__ = (function (){var switch__28644__auto__ = ((function (c__28756__auto___31563,out){
return (function (state_31529){
var state_val_31530 = (state_31529[(1)]);
if((state_val_31530 === (7))){
var inst_31525 = (state_31529[(2)]);
var state_31529__$1 = state_31529;
var statearr_31531_31564 = state_31529__$1;
(statearr_31531_31564[(2)] = inst_31525);

(statearr_31531_31564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31530 === (1))){
var inst_31488 = [];
var inst_31489 = inst_31488;
var inst_31490 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31529__$1 = (function (){var statearr_31532 = state_31529;
(statearr_31532[(7)] = inst_31490);

(statearr_31532[(8)] = inst_31489);

return statearr_31532;
})();
var statearr_31533_31565 = state_31529__$1;
(statearr_31533_31565[(2)] = null);

(statearr_31533_31565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31530 === (4))){
var inst_31493 = (state_31529[(9)]);
var inst_31493__$1 = (state_31529[(2)]);
var inst_31494 = (inst_31493__$1 == null);
var inst_31495 = cljs.core.not.call(null,inst_31494);
var state_31529__$1 = (function (){var statearr_31534 = state_31529;
(statearr_31534[(9)] = inst_31493__$1);

return statearr_31534;
})();
if(inst_31495){
var statearr_31535_31566 = state_31529__$1;
(statearr_31535_31566[(1)] = (5));

} else {
var statearr_31536_31567 = state_31529__$1;
(statearr_31536_31567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31530 === (15))){
var inst_31519 = (state_31529[(2)]);
var state_31529__$1 = state_31529;
var statearr_31537_31568 = state_31529__$1;
(statearr_31537_31568[(2)] = inst_31519);

(statearr_31537_31568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31530 === (13))){
var state_31529__$1 = state_31529;
var statearr_31538_31569 = state_31529__$1;
(statearr_31538_31569[(2)] = null);

(statearr_31538_31569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31530 === (6))){
var inst_31489 = (state_31529[(8)]);
var inst_31514 = inst_31489.length;
var inst_31515 = (inst_31514 > (0));
var state_31529__$1 = state_31529;
if(cljs.core.truth_(inst_31515)){
var statearr_31539_31570 = state_31529__$1;
(statearr_31539_31570[(1)] = (12));

} else {
var statearr_31540_31571 = state_31529__$1;
(statearr_31540_31571[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31530 === (3))){
var inst_31527 = (state_31529[(2)]);
var state_31529__$1 = state_31529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31529__$1,inst_31527);
} else {
if((state_val_31530 === (12))){
var inst_31489 = (state_31529[(8)]);
var inst_31517 = cljs.core.vec.call(null,inst_31489);
var state_31529__$1 = state_31529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31529__$1,(15),out,inst_31517);
} else {
if((state_val_31530 === (2))){
var state_31529__$1 = state_31529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31529__$1,(4),ch);
} else {
if((state_val_31530 === (11))){
var inst_31497 = (state_31529[(10)]);
var inst_31493 = (state_31529[(9)]);
var inst_31507 = (state_31529[(2)]);
var inst_31508 = [];
var inst_31509 = inst_31508.push(inst_31493);
var inst_31489 = inst_31508;
var inst_31490 = inst_31497;
var state_31529__$1 = (function (){var statearr_31541 = state_31529;
(statearr_31541[(11)] = inst_31507);

(statearr_31541[(7)] = inst_31490);

(statearr_31541[(8)] = inst_31489);

(statearr_31541[(12)] = inst_31509);

return statearr_31541;
})();
var statearr_31542_31572 = state_31529__$1;
(statearr_31542_31572[(2)] = null);

(statearr_31542_31572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31530 === (9))){
var inst_31489 = (state_31529[(8)]);
var inst_31505 = cljs.core.vec.call(null,inst_31489);
var state_31529__$1 = state_31529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31529__$1,(11),out,inst_31505);
} else {
if((state_val_31530 === (5))){
var inst_31490 = (state_31529[(7)]);
var inst_31497 = (state_31529[(10)]);
var inst_31493 = (state_31529[(9)]);
var inst_31497__$1 = f.call(null,inst_31493);
var inst_31498 = cljs.core._EQ_.call(null,inst_31497__$1,inst_31490);
var inst_31499 = cljs.core.keyword_identical_QMARK_.call(null,inst_31490,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31500 = (inst_31498) || (inst_31499);
var state_31529__$1 = (function (){var statearr_31543 = state_31529;
(statearr_31543[(10)] = inst_31497__$1);

return statearr_31543;
})();
if(cljs.core.truth_(inst_31500)){
var statearr_31544_31573 = state_31529__$1;
(statearr_31544_31573[(1)] = (8));

} else {
var statearr_31545_31574 = state_31529__$1;
(statearr_31545_31574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31530 === (14))){
var inst_31522 = (state_31529[(2)]);
var inst_31523 = cljs.core.async.close_BANG_.call(null,out);
var state_31529__$1 = (function (){var statearr_31547 = state_31529;
(statearr_31547[(13)] = inst_31522);

return statearr_31547;
})();
var statearr_31548_31575 = state_31529__$1;
(statearr_31548_31575[(2)] = inst_31523);

(statearr_31548_31575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31530 === (10))){
var inst_31512 = (state_31529[(2)]);
var state_31529__$1 = state_31529;
var statearr_31549_31576 = state_31529__$1;
(statearr_31549_31576[(2)] = inst_31512);

(statearr_31549_31576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31530 === (8))){
var inst_31489 = (state_31529[(8)]);
var inst_31497 = (state_31529[(10)]);
var inst_31493 = (state_31529[(9)]);
var inst_31502 = inst_31489.push(inst_31493);
var tmp31546 = inst_31489;
var inst_31489__$1 = tmp31546;
var inst_31490 = inst_31497;
var state_31529__$1 = (function (){var statearr_31550 = state_31529;
(statearr_31550[(14)] = inst_31502);

(statearr_31550[(7)] = inst_31490);

(statearr_31550[(8)] = inst_31489__$1);

return statearr_31550;
})();
var statearr_31551_31577 = state_31529__$1;
(statearr_31551_31577[(2)] = null);

(statearr_31551_31577[(1)] = (2));


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
});})(c__28756__auto___31563,out))
;
return ((function (switch__28644__auto__,c__28756__auto___31563,out){
return (function() {
var cljs$core$async$state_machine__28645__auto__ = null;
var cljs$core$async$state_machine__28645__auto____0 = (function (){
var statearr_31555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31555[(0)] = cljs$core$async$state_machine__28645__auto__);

(statearr_31555[(1)] = (1));

return statearr_31555;
});
var cljs$core$async$state_machine__28645__auto____1 = (function (state_31529){
while(true){
var ret_value__28646__auto__ = (function (){try{while(true){
var result__28647__auto__ = switch__28644__auto__.call(null,state_31529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28647__auto__;
}
break;
}
}catch (e31556){if((e31556 instanceof Object)){
var ex__28648__auto__ = e31556;
var statearr_31557_31578 = state_31529;
(statearr_31557_31578[(5)] = ex__28648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31579 = state_31529;
state_31529 = G__31579;
continue;
} else {
return ret_value__28646__auto__;
}
break;
}
});
cljs$core$async$state_machine__28645__auto__ = function(state_31529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28645__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28645__auto____1.call(this,state_31529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28645__auto____0;
cljs$core$async$state_machine__28645__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28645__auto____1;
return cljs$core$async$state_machine__28645__auto__;
})()
;})(switch__28644__auto__,c__28756__auto___31563,out))
})();
var state__28758__auto__ = (function (){var statearr_31558 = f__28757__auto__.call(null);
(statearr_31558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28756__auto___31563);

return statearr_31558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28758__auto__);
});})(c__28756__auto___31563,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1491429244324