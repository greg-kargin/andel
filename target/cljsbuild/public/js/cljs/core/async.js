// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16351 = arguments.length;
switch (G__16351) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16352 = (function (f,blockable,meta16353){
this.f = f;
this.blockable = blockable;
this.meta16353 = meta16353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16354,meta16353__$1){
var self__ = this;
var _16354__$1 = this;
return (new cljs.core.async.t_cljs$core$async16352(self__.f,self__.blockable,meta16353__$1));
});

cljs.core.async.t_cljs$core$async16352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16354){
var self__ = this;
var _16354__$1 = this;
return self__.meta16353;
});

cljs.core.async.t_cljs$core$async16352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16353], null);
});

cljs.core.async.t_cljs$core$async16352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16352";

cljs.core.async.t_cljs$core$async16352.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async16352");
});

cljs.core.async.__GT_t_cljs$core$async16352 = (function cljs$core$async$__GT_t_cljs$core$async16352(f__$1,blockable__$1,meta16353){
return (new cljs.core.async.t_cljs$core$async16352(f__$1,blockable__$1,meta16353));
});

}

return (new cljs.core.async.t_cljs$core$async16352(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__16358 = arguments.length;
switch (G__16358) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__16361 = arguments.length;
switch (G__16361) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__16364 = arguments.length;
switch (G__16364) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16366 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16366) : fn1.call(null,val_16366));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16366,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16366) : fn1.call(null,val_16366));
});})(val_16366,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__16368 = arguments.length;
switch (G__16368) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5276__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8700__auto___16370 = n;
var x_16371 = (0);
while(true){
if((x_16371 < n__8700__auto___16370)){
(a[x_16371] = (0));

var G__16372 = (x_16371 + (1));
x_16371 = G__16372;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__16373 = (i + (1));
i = G__16373;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async16374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16374 = (function (flag,meta16375){
this.flag = flag;
this.meta16375 = meta16375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16376,meta16375__$1){
var self__ = this;
var _16376__$1 = this;
return (new cljs.core.async.t_cljs$core$async16374(self__.flag,meta16375__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16376){
var self__ = this;
var _16376__$1 = this;
return self__.meta16375;
});})(flag))
;

cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16374.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16375], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16374";

cljs.core.async.t_cljs$core$async16374.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async16374");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16374 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16374(flag__$1,meta16375){
return (new cljs.core.async.t_cljs$core$async16374(flag__$1,meta16375));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16374(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16377 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16377 = (function (flag,cb,meta16378){
this.flag = flag;
this.cb = cb;
this.meta16378 = meta16378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16379,meta16378__$1){
var self__ = this;
var _16379__$1 = this;
return (new cljs.core.async.t_cljs$core$async16377(self__.flag,self__.cb,meta16378__$1));
});

cljs.core.async.t_cljs$core$async16377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16379){
var self__ = this;
var _16379__$1 = this;
return self__.meta16378;
});

cljs.core.async.t_cljs$core$async16377.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16377.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16378], null);
});

cljs.core.async.t_cljs$core$async16377.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16377";

cljs.core.async.t_cljs$core$async16377.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async16377");
});

cljs.core.async.__GT_t_cljs$core$async16377 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16377(flag__$1,cb__$1,meta16378){
return (new cljs.core.async.t_cljs$core$async16377(flag__$1,cb__$1,meta16378));
});

}

return (new cljs.core.async.t_cljs$core$async16377(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16380_SHARP_){
var G__16382 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16380_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16382) : fret.call(null,G__16382));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16381_SHARP_){
var G__16383 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16381_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16383) : fret.call(null,G__16383));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__7678__auto__ = wport;
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16384 = (i + (1));
i = G__16384;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7678__auto__ = ret;
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5278__auto__ = (function (){var and__7666__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7666__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7666__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__8918__auto__ = [];
var len__8911__auto___16390 = arguments.length;
var i__8912__auto___16391 = (0);
while(true){
if((i__8912__auto___16391 < len__8911__auto___16390)){
args__8918__auto__.push((arguments[i__8912__auto___16391]));

var G__16392 = (i__8912__auto___16391 + (1));
i__8912__auto___16391 = G__16392;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16387){
var map__16388 = p__16387;
var map__16388__$1 = ((((!((map__16388 == null)))?((((map__16388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16388):map__16388);
var opts = map__16388__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16385){
var G__16386 = cljs.core.first(seq16385);
var seq16385__$1 = cljs.core.next(seq16385);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16386,seq16385__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__16394 = arguments.length;
switch (G__16394) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16291__auto___16440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___16440){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___16440){
return (function (state_16418){
var state_val_16419 = (state_16418[(1)]);
if((state_val_16419 === (7))){
var inst_16414 = (state_16418[(2)]);
var state_16418__$1 = state_16418;
var statearr_16420_16441 = state_16418__$1;
(statearr_16420_16441[(2)] = inst_16414);

(statearr_16420_16441[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16419 === (1))){
var state_16418__$1 = state_16418;
var statearr_16421_16442 = state_16418__$1;
(statearr_16421_16442[(2)] = null);

(statearr_16421_16442[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16419 === (4))){
var inst_16397 = (state_16418[(7)]);
var inst_16397__$1 = (state_16418[(2)]);
var inst_16398 = (inst_16397__$1 == null);
var state_16418__$1 = (function (){var statearr_16422 = state_16418;
(statearr_16422[(7)] = inst_16397__$1);

return statearr_16422;
})();
if(cljs.core.truth_(inst_16398)){
var statearr_16423_16443 = state_16418__$1;
(statearr_16423_16443[(1)] = (5));

} else {
var statearr_16424_16444 = state_16418__$1;
(statearr_16424_16444[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16419 === (13))){
var state_16418__$1 = state_16418;
var statearr_16425_16445 = state_16418__$1;
(statearr_16425_16445[(2)] = null);

(statearr_16425_16445[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16419 === (6))){
var inst_16397 = (state_16418[(7)]);
var state_16418__$1 = state_16418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16418__$1,(11),to,inst_16397);
} else {
if((state_val_16419 === (3))){
var inst_16416 = (state_16418[(2)]);
var state_16418__$1 = state_16418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16418__$1,inst_16416);
} else {
if((state_val_16419 === (12))){
var state_16418__$1 = state_16418;
var statearr_16426_16446 = state_16418__$1;
(statearr_16426_16446[(2)] = null);

(statearr_16426_16446[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16419 === (2))){
var state_16418__$1 = state_16418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16418__$1,(4),from);
} else {
if((state_val_16419 === (11))){
var inst_16407 = (state_16418[(2)]);
var state_16418__$1 = state_16418;
if(cljs.core.truth_(inst_16407)){
var statearr_16427_16447 = state_16418__$1;
(statearr_16427_16447[(1)] = (12));

} else {
var statearr_16428_16448 = state_16418__$1;
(statearr_16428_16448[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16419 === (9))){
var state_16418__$1 = state_16418;
var statearr_16429_16449 = state_16418__$1;
(statearr_16429_16449[(2)] = null);

(statearr_16429_16449[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16419 === (5))){
var state_16418__$1 = state_16418;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16430_16450 = state_16418__$1;
(statearr_16430_16450[(1)] = (8));

} else {
var statearr_16431_16451 = state_16418__$1;
(statearr_16431_16451[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16419 === (14))){
var inst_16412 = (state_16418[(2)]);
var state_16418__$1 = state_16418;
var statearr_16432_16452 = state_16418__$1;
(statearr_16432_16452[(2)] = inst_16412);

(statearr_16432_16452[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16419 === (10))){
var inst_16404 = (state_16418[(2)]);
var state_16418__$1 = state_16418;
var statearr_16433_16453 = state_16418__$1;
(statearr_16433_16453[(2)] = inst_16404);

(statearr_16433_16453[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16419 === (8))){
var inst_16401 = cljs.core.async.close_BANG_(to);
var state_16418__$1 = state_16418;
var statearr_16434_16454 = state_16418__$1;
(statearr_16434_16454[(2)] = inst_16401);

(statearr_16434_16454[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16291__auto___16440))
;
return ((function (switch__16189__auto__,c__16291__auto___16440){
return (function() {
var cljs$core$async$state_machine__16190__auto__ = null;
var cljs$core$async$state_machine__16190__auto____0 = (function (){
var statearr_16435 = [null,null,null,null,null,null,null,null];
(statearr_16435[(0)] = cljs$core$async$state_machine__16190__auto__);

(statearr_16435[(1)] = (1));

return statearr_16435;
});
var cljs$core$async$state_machine__16190__auto____1 = (function (state_16418){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_16418);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e16436){if((e16436 instanceof Object)){
var ex__16193__auto__ = e16436;
var statearr_16437_16455 = state_16418;
(statearr_16437_16455[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16418);

return cljs.core.cst$kw$recur;
} else {
throw e16436;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__16456 = state_16418;
state_16418 = G__16456;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$state_machine__16190__auto__ = function(state_16418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16190__auto____1.call(this,state_16418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16190__auto____0;
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16190__auto____1;
return cljs$core$async$state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___16440))
})();
var state__16293__auto__ = (function (){var statearr_16438 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_16438[(6)] = c__16291__auto___16440);

return statearr_16438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___16440))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__16457){
var vec__16458 = p__16457;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16458,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16458,(1),null);
var job = vec__16458;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16291__auto___16629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___16629,res,vec__16458,v,p,job,jobs,results){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___16629,res,vec__16458,v,p,job,jobs,results){
return (function (state_16465){
var state_val_16466 = (state_16465[(1)]);
if((state_val_16466 === (1))){
var state_16465__$1 = state_16465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16465__$1,(2),res,v);
} else {
if((state_val_16466 === (2))){
var inst_16462 = (state_16465[(2)]);
var inst_16463 = cljs.core.async.close_BANG_(res);
var state_16465__$1 = (function (){var statearr_16467 = state_16465;
(statearr_16467[(7)] = inst_16462);

return statearr_16467;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16465__$1,inst_16463);
} else {
return null;
}
}
});})(c__16291__auto___16629,res,vec__16458,v,p,job,jobs,results))
;
return ((function (switch__16189__auto__,c__16291__auto___16629,res,vec__16458,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0 = (function (){
var statearr_16468 = [null,null,null,null,null,null,null,null];
(statearr_16468[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__);

(statearr_16468[(1)] = (1));

return statearr_16468;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1 = (function (state_16465){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_16465);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e16469){if((e16469 instanceof Object)){
var ex__16193__auto__ = e16469;
var statearr_16470_16630 = state_16465;
(statearr_16470_16630[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16465);

return cljs.core.cst$kw$recur;
} else {
throw e16469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__16631 = state_16465;
state_16465 = G__16631;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__ = function(state_16465){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1.call(this,state_16465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___16629,res,vec__16458,v,p,job,jobs,results))
})();
var state__16293__auto__ = (function (){var statearr_16471 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_16471[(6)] = c__16291__auto___16629);

return statearr_16471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___16629,res,vec__16458,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16472){
var vec__16473 = p__16472;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16473,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16473,(1),null);
var job = vec__16473;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__8700__auto___16632 = n;
var __16633 = (0);
while(true){
if((__16633 < n__8700__auto___16632)){
var G__16476_16634 = type;
var G__16476_16635__$1 = (((G__16476_16634 instanceof cljs.core.Keyword))?G__16476_16634.fqn:null);
switch (G__16476_16635__$1) {
case "compute":
var c__16291__auto___16637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16633,c__16291__auto___16637,G__16476_16634,G__16476_16635__$1,n__8700__auto___16632,jobs,results,process,async){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (__16633,c__16291__auto___16637,G__16476_16634,G__16476_16635__$1,n__8700__auto___16632,jobs,results,process,async){
return (function (state_16489){
var state_val_16490 = (state_16489[(1)]);
if((state_val_16490 === (1))){
var state_16489__$1 = state_16489;
var statearr_16491_16638 = state_16489__$1;
(statearr_16491_16638[(2)] = null);

(statearr_16491_16638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16490 === (2))){
var state_16489__$1 = state_16489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16489__$1,(4),jobs);
} else {
if((state_val_16490 === (3))){
var inst_16487 = (state_16489[(2)]);
var state_16489__$1 = state_16489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16489__$1,inst_16487);
} else {
if((state_val_16490 === (4))){
var inst_16479 = (state_16489[(2)]);
var inst_16480 = process(inst_16479);
var state_16489__$1 = state_16489;
if(cljs.core.truth_(inst_16480)){
var statearr_16492_16639 = state_16489__$1;
(statearr_16492_16639[(1)] = (5));

} else {
var statearr_16493_16640 = state_16489__$1;
(statearr_16493_16640[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16490 === (5))){
var state_16489__$1 = state_16489;
var statearr_16494_16641 = state_16489__$1;
(statearr_16494_16641[(2)] = null);

(statearr_16494_16641[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16490 === (6))){
var state_16489__$1 = state_16489;
var statearr_16495_16642 = state_16489__$1;
(statearr_16495_16642[(2)] = null);

(statearr_16495_16642[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16490 === (7))){
var inst_16485 = (state_16489[(2)]);
var state_16489__$1 = state_16489;
var statearr_16496_16643 = state_16489__$1;
(statearr_16496_16643[(2)] = inst_16485);

(statearr_16496_16643[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16633,c__16291__auto___16637,G__16476_16634,G__16476_16635__$1,n__8700__auto___16632,jobs,results,process,async))
;
return ((function (__16633,switch__16189__auto__,c__16291__auto___16637,G__16476_16634,G__16476_16635__$1,n__8700__auto___16632,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0 = (function (){
var statearr_16497 = [null,null,null,null,null,null,null];
(statearr_16497[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__);

(statearr_16497[(1)] = (1));

return statearr_16497;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1 = (function (state_16489){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_16489);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e16498){if((e16498 instanceof Object)){
var ex__16193__auto__ = e16498;
var statearr_16499_16644 = state_16489;
(statearr_16499_16644[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16489);

return cljs.core.cst$kw$recur;
} else {
throw e16498;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__16645 = state_16489;
state_16489 = G__16645;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__ = function(state_16489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1.call(this,state_16489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__;
})()
;})(__16633,switch__16189__auto__,c__16291__auto___16637,G__16476_16634,G__16476_16635__$1,n__8700__auto___16632,jobs,results,process,async))
})();
var state__16293__auto__ = (function (){var statearr_16500 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_16500[(6)] = c__16291__auto___16637);

return statearr_16500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(__16633,c__16291__auto___16637,G__16476_16634,G__16476_16635__$1,n__8700__auto___16632,jobs,results,process,async))
);


break;
case "async":
var c__16291__auto___16646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16633,c__16291__auto___16646,G__16476_16634,G__16476_16635__$1,n__8700__auto___16632,jobs,results,process,async){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (__16633,c__16291__auto___16646,G__16476_16634,G__16476_16635__$1,n__8700__auto___16632,jobs,results,process,async){
return (function (state_16513){
var state_val_16514 = (state_16513[(1)]);
if((state_val_16514 === (1))){
var state_16513__$1 = state_16513;
var statearr_16515_16647 = state_16513__$1;
(statearr_16515_16647[(2)] = null);

(statearr_16515_16647[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16514 === (2))){
var state_16513__$1 = state_16513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16513__$1,(4),jobs);
} else {
if((state_val_16514 === (3))){
var inst_16511 = (state_16513[(2)]);
var state_16513__$1 = state_16513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16513__$1,inst_16511);
} else {
if((state_val_16514 === (4))){
var inst_16503 = (state_16513[(2)]);
var inst_16504 = async(inst_16503);
var state_16513__$1 = state_16513;
if(cljs.core.truth_(inst_16504)){
var statearr_16516_16648 = state_16513__$1;
(statearr_16516_16648[(1)] = (5));

} else {
var statearr_16517_16649 = state_16513__$1;
(statearr_16517_16649[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16514 === (5))){
var state_16513__$1 = state_16513;
var statearr_16518_16650 = state_16513__$1;
(statearr_16518_16650[(2)] = null);

(statearr_16518_16650[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16514 === (6))){
var state_16513__$1 = state_16513;
var statearr_16519_16651 = state_16513__$1;
(statearr_16519_16651[(2)] = null);

(statearr_16519_16651[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16514 === (7))){
var inst_16509 = (state_16513[(2)]);
var state_16513__$1 = state_16513;
var statearr_16520_16652 = state_16513__$1;
(statearr_16520_16652[(2)] = inst_16509);

(statearr_16520_16652[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16633,c__16291__auto___16646,G__16476_16634,G__16476_16635__$1,n__8700__auto___16632,jobs,results,process,async))
;
return ((function (__16633,switch__16189__auto__,c__16291__auto___16646,G__16476_16634,G__16476_16635__$1,n__8700__auto___16632,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0 = (function (){
var statearr_16521 = [null,null,null,null,null,null,null];
(statearr_16521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__);

(statearr_16521[(1)] = (1));

return statearr_16521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1 = (function (state_16513){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_16513);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e16522){if((e16522 instanceof Object)){
var ex__16193__auto__ = e16522;
var statearr_16523_16653 = state_16513;
(statearr_16523_16653[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16513);

return cljs.core.cst$kw$recur;
} else {
throw e16522;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__16654 = state_16513;
state_16513 = G__16654;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__ = function(state_16513){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1.call(this,state_16513);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__;
})()
;})(__16633,switch__16189__auto__,c__16291__auto___16646,G__16476_16634,G__16476_16635__$1,n__8700__auto___16632,jobs,results,process,async))
})();
var state__16293__auto__ = (function (){var statearr_16524 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_16524[(6)] = c__16291__auto___16646);

return statearr_16524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(__16633,c__16291__auto___16646,G__16476_16634,G__16476_16635__$1,n__8700__auto___16632,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16476_16635__$1)].join('')));

}

var G__16655 = (__16633 + (1));
__16633 = G__16655;
continue;
} else {
}
break;
}

var c__16291__auto___16656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___16656,jobs,results,process,async){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___16656,jobs,results,process,async){
return (function (state_16546){
var state_val_16547 = (state_16546[(1)]);
if((state_val_16547 === (1))){
var state_16546__$1 = state_16546;
var statearr_16548_16657 = state_16546__$1;
(statearr_16548_16657[(2)] = null);

(statearr_16548_16657[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16547 === (2))){
var state_16546__$1 = state_16546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16546__$1,(4),from);
} else {
if((state_val_16547 === (3))){
var inst_16544 = (state_16546[(2)]);
var state_16546__$1 = state_16546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16546__$1,inst_16544);
} else {
if((state_val_16547 === (4))){
var inst_16527 = (state_16546[(7)]);
var inst_16527__$1 = (state_16546[(2)]);
var inst_16528 = (inst_16527__$1 == null);
var state_16546__$1 = (function (){var statearr_16549 = state_16546;
(statearr_16549[(7)] = inst_16527__$1);

return statearr_16549;
})();
if(cljs.core.truth_(inst_16528)){
var statearr_16550_16658 = state_16546__$1;
(statearr_16550_16658[(1)] = (5));

} else {
var statearr_16551_16659 = state_16546__$1;
(statearr_16551_16659[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16547 === (5))){
var inst_16530 = cljs.core.async.close_BANG_(jobs);
var state_16546__$1 = state_16546;
var statearr_16552_16660 = state_16546__$1;
(statearr_16552_16660[(2)] = inst_16530);

(statearr_16552_16660[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16547 === (6))){
var inst_16527 = (state_16546[(7)]);
var inst_16532 = (state_16546[(8)]);
var inst_16532__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16533 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16534 = [inst_16527,inst_16532__$1];
var inst_16535 = (new cljs.core.PersistentVector(null,2,(5),inst_16533,inst_16534,null));
var state_16546__$1 = (function (){var statearr_16553 = state_16546;
(statearr_16553[(8)] = inst_16532__$1);

return statearr_16553;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16546__$1,(8),jobs,inst_16535);
} else {
if((state_val_16547 === (7))){
var inst_16542 = (state_16546[(2)]);
var state_16546__$1 = state_16546;
var statearr_16554_16661 = state_16546__$1;
(statearr_16554_16661[(2)] = inst_16542);

(statearr_16554_16661[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16547 === (8))){
var inst_16532 = (state_16546[(8)]);
var inst_16537 = (state_16546[(2)]);
var state_16546__$1 = (function (){var statearr_16555 = state_16546;
(statearr_16555[(9)] = inst_16537);

return statearr_16555;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16546__$1,(9),results,inst_16532);
} else {
if((state_val_16547 === (9))){
var inst_16539 = (state_16546[(2)]);
var state_16546__$1 = (function (){var statearr_16556 = state_16546;
(statearr_16556[(10)] = inst_16539);

return statearr_16556;
})();
var statearr_16557_16662 = state_16546__$1;
(statearr_16557_16662[(2)] = null);

(statearr_16557_16662[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16291__auto___16656,jobs,results,process,async))
;
return ((function (switch__16189__auto__,c__16291__auto___16656,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0 = (function (){
var statearr_16558 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16558[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__);

(statearr_16558[(1)] = (1));

return statearr_16558;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1 = (function (state_16546){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_16546);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e16559){if((e16559 instanceof Object)){
var ex__16193__auto__ = e16559;
var statearr_16560_16663 = state_16546;
(statearr_16560_16663[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16546);

return cljs.core.cst$kw$recur;
} else {
throw e16559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__16664 = state_16546;
state_16546 = G__16664;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__ = function(state_16546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1.call(this,state_16546);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___16656,jobs,results,process,async))
})();
var state__16293__auto__ = (function (){var statearr_16561 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_16561[(6)] = c__16291__auto___16656);

return statearr_16561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___16656,jobs,results,process,async))
);


var c__16291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto__,jobs,results,process,async){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto__,jobs,results,process,async){
return (function (state_16599){
var state_val_16600 = (state_16599[(1)]);
if((state_val_16600 === (7))){
var inst_16595 = (state_16599[(2)]);
var state_16599__$1 = state_16599;
var statearr_16601_16665 = state_16599__$1;
(statearr_16601_16665[(2)] = inst_16595);

(statearr_16601_16665[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (20))){
var state_16599__$1 = state_16599;
var statearr_16602_16666 = state_16599__$1;
(statearr_16602_16666[(2)] = null);

(statearr_16602_16666[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (1))){
var state_16599__$1 = state_16599;
var statearr_16603_16667 = state_16599__$1;
(statearr_16603_16667[(2)] = null);

(statearr_16603_16667[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (4))){
var inst_16564 = (state_16599[(7)]);
var inst_16564__$1 = (state_16599[(2)]);
var inst_16565 = (inst_16564__$1 == null);
var state_16599__$1 = (function (){var statearr_16604 = state_16599;
(statearr_16604[(7)] = inst_16564__$1);

return statearr_16604;
})();
if(cljs.core.truth_(inst_16565)){
var statearr_16605_16668 = state_16599__$1;
(statearr_16605_16668[(1)] = (5));

} else {
var statearr_16606_16669 = state_16599__$1;
(statearr_16606_16669[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (15))){
var inst_16577 = (state_16599[(8)]);
var state_16599__$1 = state_16599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16599__$1,(18),to,inst_16577);
} else {
if((state_val_16600 === (21))){
var inst_16590 = (state_16599[(2)]);
var state_16599__$1 = state_16599;
var statearr_16607_16670 = state_16599__$1;
(statearr_16607_16670[(2)] = inst_16590);

(statearr_16607_16670[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (13))){
var inst_16592 = (state_16599[(2)]);
var state_16599__$1 = (function (){var statearr_16608 = state_16599;
(statearr_16608[(9)] = inst_16592);

return statearr_16608;
})();
var statearr_16609_16671 = state_16599__$1;
(statearr_16609_16671[(2)] = null);

(statearr_16609_16671[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (6))){
var inst_16564 = (state_16599[(7)]);
var state_16599__$1 = state_16599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16599__$1,(11),inst_16564);
} else {
if((state_val_16600 === (17))){
var inst_16585 = (state_16599[(2)]);
var state_16599__$1 = state_16599;
if(cljs.core.truth_(inst_16585)){
var statearr_16610_16672 = state_16599__$1;
(statearr_16610_16672[(1)] = (19));

} else {
var statearr_16611_16673 = state_16599__$1;
(statearr_16611_16673[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (3))){
var inst_16597 = (state_16599[(2)]);
var state_16599__$1 = state_16599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16599__$1,inst_16597);
} else {
if((state_val_16600 === (12))){
var inst_16574 = (state_16599[(10)]);
var state_16599__$1 = state_16599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16599__$1,(14),inst_16574);
} else {
if((state_val_16600 === (2))){
var state_16599__$1 = state_16599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16599__$1,(4),results);
} else {
if((state_val_16600 === (19))){
var state_16599__$1 = state_16599;
var statearr_16612_16674 = state_16599__$1;
(statearr_16612_16674[(2)] = null);

(statearr_16612_16674[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (11))){
var inst_16574 = (state_16599[(2)]);
var state_16599__$1 = (function (){var statearr_16613 = state_16599;
(statearr_16613[(10)] = inst_16574);

return statearr_16613;
})();
var statearr_16614_16675 = state_16599__$1;
(statearr_16614_16675[(2)] = null);

(statearr_16614_16675[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (9))){
var state_16599__$1 = state_16599;
var statearr_16615_16676 = state_16599__$1;
(statearr_16615_16676[(2)] = null);

(statearr_16615_16676[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (5))){
var state_16599__$1 = state_16599;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16616_16677 = state_16599__$1;
(statearr_16616_16677[(1)] = (8));

} else {
var statearr_16617_16678 = state_16599__$1;
(statearr_16617_16678[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (14))){
var inst_16579 = (state_16599[(11)]);
var inst_16577 = (state_16599[(8)]);
var inst_16577__$1 = (state_16599[(2)]);
var inst_16578 = (inst_16577__$1 == null);
var inst_16579__$1 = cljs.core.not(inst_16578);
var state_16599__$1 = (function (){var statearr_16618 = state_16599;
(statearr_16618[(11)] = inst_16579__$1);

(statearr_16618[(8)] = inst_16577__$1);

return statearr_16618;
})();
if(inst_16579__$1){
var statearr_16619_16679 = state_16599__$1;
(statearr_16619_16679[(1)] = (15));

} else {
var statearr_16620_16680 = state_16599__$1;
(statearr_16620_16680[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (16))){
var inst_16579 = (state_16599[(11)]);
var state_16599__$1 = state_16599;
var statearr_16621_16681 = state_16599__$1;
(statearr_16621_16681[(2)] = inst_16579);

(statearr_16621_16681[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (10))){
var inst_16571 = (state_16599[(2)]);
var state_16599__$1 = state_16599;
var statearr_16622_16682 = state_16599__$1;
(statearr_16622_16682[(2)] = inst_16571);

(statearr_16622_16682[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (18))){
var inst_16582 = (state_16599[(2)]);
var state_16599__$1 = state_16599;
var statearr_16623_16683 = state_16599__$1;
(statearr_16623_16683[(2)] = inst_16582);

(statearr_16623_16683[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16600 === (8))){
var inst_16568 = cljs.core.async.close_BANG_(to);
var state_16599__$1 = state_16599;
var statearr_16624_16684 = state_16599__$1;
(statearr_16624_16684[(2)] = inst_16568);

(statearr_16624_16684[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16291__auto__,jobs,results,process,async))
;
return ((function (switch__16189__auto__,c__16291__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0 = (function (){
var statearr_16625 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__);

(statearr_16625[(1)] = (1));

return statearr_16625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1 = (function (state_16599){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_16599);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e16626){if((e16626 instanceof Object)){
var ex__16193__auto__ = e16626;
var statearr_16627_16685 = state_16599;
(statearr_16627_16685[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16599);

return cljs.core.cst$kw$recur;
} else {
throw e16626;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__16686 = state_16599;
state_16599 = G__16686;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__ = function(state_16599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1.call(this,state_16599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16190__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto__,jobs,results,process,async))
})();
var state__16293__auto__ = (function (){var statearr_16628 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_16628[(6)] = c__16291__auto__);

return statearr_16628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto__,jobs,results,process,async))
);

return c__16291__auto__;
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
var G__16688 = arguments.length;
switch (G__16688) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__16691 = arguments.length;
switch (G__16691) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__16694 = arguments.length;
switch (G__16694) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16291__auto___16743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___16743,tc,fc){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___16743,tc,fc){
return (function (state_16720){
var state_val_16721 = (state_16720[(1)]);
if((state_val_16721 === (7))){
var inst_16716 = (state_16720[(2)]);
var state_16720__$1 = state_16720;
var statearr_16722_16744 = state_16720__$1;
(statearr_16722_16744[(2)] = inst_16716);

(statearr_16722_16744[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16721 === (1))){
var state_16720__$1 = state_16720;
var statearr_16723_16745 = state_16720__$1;
(statearr_16723_16745[(2)] = null);

(statearr_16723_16745[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16721 === (4))){
var inst_16697 = (state_16720[(7)]);
var inst_16697__$1 = (state_16720[(2)]);
var inst_16698 = (inst_16697__$1 == null);
var state_16720__$1 = (function (){var statearr_16724 = state_16720;
(statearr_16724[(7)] = inst_16697__$1);

return statearr_16724;
})();
if(cljs.core.truth_(inst_16698)){
var statearr_16725_16746 = state_16720__$1;
(statearr_16725_16746[(1)] = (5));

} else {
var statearr_16726_16747 = state_16720__$1;
(statearr_16726_16747[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16721 === (13))){
var state_16720__$1 = state_16720;
var statearr_16727_16748 = state_16720__$1;
(statearr_16727_16748[(2)] = null);

(statearr_16727_16748[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16721 === (6))){
var inst_16697 = (state_16720[(7)]);
var inst_16703 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16697) : p.call(null,inst_16697));
var state_16720__$1 = state_16720;
if(cljs.core.truth_(inst_16703)){
var statearr_16728_16749 = state_16720__$1;
(statearr_16728_16749[(1)] = (9));

} else {
var statearr_16729_16750 = state_16720__$1;
(statearr_16729_16750[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16721 === (3))){
var inst_16718 = (state_16720[(2)]);
var state_16720__$1 = state_16720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16720__$1,inst_16718);
} else {
if((state_val_16721 === (12))){
var state_16720__$1 = state_16720;
var statearr_16730_16751 = state_16720__$1;
(statearr_16730_16751[(2)] = null);

(statearr_16730_16751[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16721 === (2))){
var state_16720__$1 = state_16720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16720__$1,(4),ch);
} else {
if((state_val_16721 === (11))){
var inst_16697 = (state_16720[(7)]);
var inst_16707 = (state_16720[(2)]);
var state_16720__$1 = state_16720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16720__$1,(8),inst_16707,inst_16697);
} else {
if((state_val_16721 === (9))){
var state_16720__$1 = state_16720;
var statearr_16731_16752 = state_16720__$1;
(statearr_16731_16752[(2)] = tc);

(statearr_16731_16752[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16721 === (5))){
var inst_16700 = cljs.core.async.close_BANG_(tc);
var inst_16701 = cljs.core.async.close_BANG_(fc);
var state_16720__$1 = (function (){var statearr_16732 = state_16720;
(statearr_16732[(8)] = inst_16700);

return statearr_16732;
})();
var statearr_16733_16753 = state_16720__$1;
(statearr_16733_16753[(2)] = inst_16701);

(statearr_16733_16753[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16721 === (14))){
var inst_16714 = (state_16720[(2)]);
var state_16720__$1 = state_16720;
var statearr_16734_16754 = state_16720__$1;
(statearr_16734_16754[(2)] = inst_16714);

(statearr_16734_16754[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16721 === (10))){
var state_16720__$1 = state_16720;
var statearr_16735_16755 = state_16720__$1;
(statearr_16735_16755[(2)] = fc);

(statearr_16735_16755[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16721 === (8))){
var inst_16709 = (state_16720[(2)]);
var state_16720__$1 = state_16720;
if(cljs.core.truth_(inst_16709)){
var statearr_16736_16756 = state_16720__$1;
(statearr_16736_16756[(1)] = (12));

} else {
var statearr_16737_16757 = state_16720__$1;
(statearr_16737_16757[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__16291__auto___16743,tc,fc))
;
return ((function (switch__16189__auto__,c__16291__auto___16743,tc,fc){
return (function() {
var cljs$core$async$state_machine__16190__auto__ = null;
var cljs$core$async$state_machine__16190__auto____0 = (function (){
var statearr_16738 = [null,null,null,null,null,null,null,null,null];
(statearr_16738[(0)] = cljs$core$async$state_machine__16190__auto__);

(statearr_16738[(1)] = (1));

return statearr_16738;
});
var cljs$core$async$state_machine__16190__auto____1 = (function (state_16720){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_16720);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e16739){if((e16739 instanceof Object)){
var ex__16193__auto__ = e16739;
var statearr_16740_16758 = state_16720;
(statearr_16740_16758[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16720);

return cljs.core.cst$kw$recur;
} else {
throw e16739;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__16759 = state_16720;
state_16720 = G__16759;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$state_machine__16190__auto__ = function(state_16720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16190__auto____1.call(this,state_16720);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16190__auto____0;
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16190__auto____1;
return cljs$core$async$state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___16743,tc,fc))
})();
var state__16293__auto__ = (function (){var statearr_16741 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_16741[(6)] = c__16291__auto___16743);

return statearr_16741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___16743,tc,fc))
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
var c__16291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto__){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto__){
return (function (state_16780){
var state_val_16781 = (state_16780[(1)]);
if((state_val_16781 === (7))){
var inst_16776 = (state_16780[(2)]);
var state_16780__$1 = state_16780;
var statearr_16782_16800 = state_16780__$1;
(statearr_16782_16800[(2)] = inst_16776);

(statearr_16782_16800[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16781 === (1))){
var inst_16760 = init;
var state_16780__$1 = (function (){var statearr_16783 = state_16780;
(statearr_16783[(7)] = inst_16760);

return statearr_16783;
})();
var statearr_16784_16801 = state_16780__$1;
(statearr_16784_16801[(2)] = null);

(statearr_16784_16801[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16781 === (4))){
var inst_16763 = (state_16780[(8)]);
var inst_16763__$1 = (state_16780[(2)]);
var inst_16764 = (inst_16763__$1 == null);
var state_16780__$1 = (function (){var statearr_16785 = state_16780;
(statearr_16785[(8)] = inst_16763__$1);

return statearr_16785;
})();
if(cljs.core.truth_(inst_16764)){
var statearr_16786_16802 = state_16780__$1;
(statearr_16786_16802[(1)] = (5));

} else {
var statearr_16787_16803 = state_16780__$1;
(statearr_16787_16803[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16781 === (6))){
var inst_16767 = (state_16780[(9)]);
var inst_16760 = (state_16780[(7)]);
var inst_16763 = (state_16780[(8)]);
var inst_16767__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16760,inst_16763) : f.call(null,inst_16760,inst_16763));
var inst_16768 = cljs.core.reduced_QMARK_(inst_16767__$1);
var state_16780__$1 = (function (){var statearr_16788 = state_16780;
(statearr_16788[(9)] = inst_16767__$1);

return statearr_16788;
})();
if(inst_16768){
var statearr_16789_16804 = state_16780__$1;
(statearr_16789_16804[(1)] = (8));

} else {
var statearr_16790_16805 = state_16780__$1;
(statearr_16790_16805[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16781 === (3))){
var inst_16778 = (state_16780[(2)]);
var state_16780__$1 = state_16780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16780__$1,inst_16778);
} else {
if((state_val_16781 === (2))){
var state_16780__$1 = state_16780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16780__$1,(4),ch);
} else {
if((state_val_16781 === (9))){
var inst_16767 = (state_16780[(9)]);
var inst_16760 = inst_16767;
var state_16780__$1 = (function (){var statearr_16791 = state_16780;
(statearr_16791[(7)] = inst_16760);

return statearr_16791;
})();
var statearr_16792_16806 = state_16780__$1;
(statearr_16792_16806[(2)] = null);

(statearr_16792_16806[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16781 === (5))){
var inst_16760 = (state_16780[(7)]);
var state_16780__$1 = state_16780;
var statearr_16793_16807 = state_16780__$1;
(statearr_16793_16807[(2)] = inst_16760);

(statearr_16793_16807[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16781 === (10))){
var inst_16774 = (state_16780[(2)]);
var state_16780__$1 = state_16780;
var statearr_16794_16808 = state_16780__$1;
(statearr_16794_16808[(2)] = inst_16774);

(statearr_16794_16808[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16781 === (8))){
var inst_16767 = (state_16780[(9)]);
var inst_16770 = cljs.core.deref(inst_16767);
var state_16780__$1 = state_16780;
var statearr_16795_16809 = state_16780__$1;
(statearr_16795_16809[(2)] = inst_16770);

(statearr_16795_16809[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16291__auto__))
;
return ((function (switch__16189__auto__,c__16291__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16190__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16190__auto____0 = (function (){
var statearr_16796 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16796[(0)] = cljs$core$async$reduce_$_state_machine__16190__auto__);

(statearr_16796[(1)] = (1));

return statearr_16796;
});
var cljs$core$async$reduce_$_state_machine__16190__auto____1 = (function (state_16780){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_16780);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e16797){if((e16797 instanceof Object)){
var ex__16193__auto__ = e16797;
var statearr_16798_16810 = state_16780;
(statearr_16798_16810[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16780);

return cljs.core.cst$kw$recur;
} else {
throw e16797;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__16811 = state_16780;
state_16780 = G__16811;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16190__auto__ = function(state_16780){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16190__auto____1.call(this,state_16780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16190__auto____0;
cljs$core$async$reduce_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16190__auto____1;
return cljs$core$async$reduce_$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto__))
})();
var state__16293__auto__ = (function (){var statearr_16799 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_16799[(6)] = c__16291__auto__);

return statearr_16799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto__))
);

return c__16291__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto__,f__$1){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto__,f__$1){
return (function (state_16817){
var state_val_16818 = (state_16817[(1)]);
if((state_val_16818 === (1))){
var inst_16812 = cljs.core.async.reduce(f__$1,init,ch);
var state_16817__$1 = state_16817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16817__$1,(2),inst_16812);
} else {
if((state_val_16818 === (2))){
var inst_16814 = (state_16817[(2)]);
var inst_16815 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16814) : f__$1.call(null,inst_16814));
var state_16817__$1 = state_16817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16817__$1,inst_16815);
} else {
return null;
}
}
});})(c__16291__auto__,f__$1))
;
return ((function (switch__16189__auto__,c__16291__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16190__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16190__auto____0 = (function (){
var statearr_16819 = [null,null,null,null,null,null,null];
(statearr_16819[(0)] = cljs$core$async$transduce_$_state_machine__16190__auto__);

(statearr_16819[(1)] = (1));

return statearr_16819;
});
var cljs$core$async$transduce_$_state_machine__16190__auto____1 = (function (state_16817){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_16817);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e16820){if((e16820 instanceof Object)){
var ex__16193__auto__ = e16820;
var statearr_16821_16823 = state_16817;
(statearr_16821_16823[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16817);

return cljs.core.cst$kw$recur;
} else {
throw e16820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__16824 = state_16817;
state_16817 = G__16824;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16190__auto__ = function(state_16817){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16190__auto____1.call(this,state_16817);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16190__auto____0;
cljs$core$async$transduce_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16190__auto____1;
return cljs$core$async$transduce_$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto__,f__$1))
})();
var state__16293__auto__ = (function (){var statearr_16822 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_16822[(6)] = c__16291__auto__);

return statearr_16822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto__,f__$1))
);

return c__16291__auto__;
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
var G__16826 = arguments.length;
switch (G__16826) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto__){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto__){
return (function (state_16851){
var state_val_16852 = (state_16851[(1)]);
if((state_val_16852 === (7))){
var inst_16833 = (state_16851[(2)]);
var state_16851__$1 = state_16851;
var statearr_16853_16874 = state_16851__$1;
(statearr_16853_16874[(2)] = inst_16833);

(statearr_16853_16874[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (1))){
var inst_16827 = cljs.core.seq(coll);
var inst_16828 = inst_16827;
var state_16851__$1 = (function (){var statearr_16854 = state_16851;
(statearr_16854[(7)] = inst_16828);

return statearr_16854;
})();
var statearr_16855_16875 = state_16851__$1;
(statearr_16855_16875[(2)] = null);

(statearr_16855_16875[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (4))){
var inst_16828 = (state_16851[(7)]);
var inst_16831 = cljs.core.first(inst_16828);
var state_16851__$1 = state_16851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16851__$1,(7),ch,inst_16831);
} else {
if((state_val_16852 === (13))){
var inst_16845 = (state_16851[(2)]);
var state_16851__$1 = state_16851;
var statearr_16856_16876 = state_16851__$1;
(statearr_16856_16876[(2)] = inst_16845);

(statearr_16856_16876[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (6))){
var inst_16836 = (state_16851[(2)]);
var state_16851__$1 = state_16851;
if(cljs.core.truth_(inst_16836)){
var statearr_16857_16877 = state_16851__$1;
(statearr_16857_16877[(1)] = (8));

} else {
var statearr_16858_16878 = state_16851__$1;
(statearr_16858_16878[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (3))){
var inst_16849 = (state_16851[(2)]);
var state_16851__$1 = state_16851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16851__$1,inst_16849);
} else {
if((state_val_16852 === (12))){
var state_16851__$1 = state_16851;
var statearr_16859_16879 = state_16851__$1;
(statearr_16859_16879[(2)] = null);

(statearr_16859_16879[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (2))){
var inst_16828 = (state_16851[(7)]);
var state_16851__$1 = state_16851;
if(cljs.core.truth_(inst_16828)){
var statearr_16860_16880 = state_16851__$1;
(statearr_16860_16880[(1)] = (4));

} else {
var statearr_16861_16881 = state_16851__$1;
(statearr_16861_16881[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (11))){
var inst_16842 = cljs.core.async.close_BANG_(ch);
var state_16851__$1 = state_16851;
var statearr_16862_16882 = state_16851__$1;
(statearr_16862_16882[(2)] = inst_16842);

(statearr_16862_16882[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (9))){
var state_16851__$1 = state_16851;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16863_16883 = state_16851__$1;
(statearr_16863_16883[(1)] = (11));

} else {
var statearr_16864_16884 = state_16851__$1;
(statearr_16864_16884[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (5))){
var inst_16828 = (state_16851[(7)]);
var state_16851__$1 = state_16851;
var statearr_16865_16885 = state_16851__$1;
(statearr_16865_16885[(2)] = inst_16828);

(statearr_16865_16885[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (10))){
var inst_16847 = (state_16851[(2)]);
var state_16851__$1 = state_16851;
var statearr_16866_16886 = state_16851__$1;
(statearr_16866_16886[(2)] = inst_16847);

(statearr_16866_16886[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16852 === (8))){
var inst_16828 = (state_16851[(7)]);
var inst_16838 = cljs.core.next(inst_16828);
var inst_16828__$1 = inst_16838;
var state_16851__$1 = (function (){var statearr_16867 = state_16851;
(statearr_16867[(7)] = inst_16828__$1);

return statearr_16867;
})();
var statearr_16868_16887 = state_16851__$1;
(statearr_16868_16887[(2)] = null);

(statearr_16868_16887[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16291__auto__))
;
return ((function (switch__16189__auto__,c__16291__auto__){
return (function() {
var cljs$core$async$state_machine__16190__auto__ = null;
var cljs$core$async$state_machine__16190__auto____0 = (function (){
var statearr_16869 = [null,null,null,null,null,null,null,null];
(statearr_16869[(0)] = cljs$core$async$state_machine__16190__auto__);

(statearr_16869[(1)] = (1));

return statearr_16869;
});
var cljs$core$async$state_machine__16190__auto____1 = (function (state_16851){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_16851);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e16870){if((e16870 instanceof Object)){
var ex__16193__auto__ = e16870;
var statearr_16871_16888 = state_16851;
(statearr_16871_16888[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16851);

return cljs.core.cst$kw$recur;
} else {
throw e16870;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__16889 = state_16851;
state_16851 = G__16889;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$state_machine__16190__auto__ = function(state_16851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16190__auto____1.call(this,state_16851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16190__auto____0;
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16190__auto____1;
return cljs$core$async$state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto__))
})();
var state__16293__auto__ = (function (){var statearr_16872 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_16872[(6)] = c__16291__auto__);

return statearr_16872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto__))
);

return c__16291__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
var x__8397__auto__ = (((_ == null))?null:_);
var m__8398__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8398__auto__.call(null,_));
} else {
var m__8398__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8398__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8398__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__8398__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8398__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8398__auto__.call(null,m,ch));
} else {
var m__8398__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8398__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8398__auto__.call(null,m));
} else {
var m__8398__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8398__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16890 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16890 = (function (ch,cs,meta16891){
this.ch = ch;
this.cs = cs;
this.meta16891 = meta16891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16892,meta16891__$1){
var self__ = this;
var _16892__$1 = this;
return (new cljs.core.async.t_cljs$core$async16890(self__.ch,self__.cs,meta16891__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16892){
var self__ = this;
var _16892__$1 = this;
return self__.meta16891;
});})(cs))
;

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16890.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16890.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16891], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16890.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16890";

cljs.core.async.t_cljs$core$async16890.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async16890");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16890 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16890(ch__$1,cs__$1,meta16891){
return (new cljs.core.async.t_cljs$core$async16890(ch__$1,cs__$1,meta16891));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16890(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16291__auto___17112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___17112,cs,m,dchan,dctr,done){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___17112,cs,m,dchan,dctr,done){
return (function (state_17027){
var state_val_17028 = (state_17027[(1)]);
if((state_val_17028 === (7))){
var inst_17023 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17029_17113 = state_17027__$1;
(statearr_17029_17113[(2)] = inst_17023);

(statearr_17029_17113[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (20))){
var inst_16926 = (state_17027[(7)]);
var inst_16938 = cljs.core.first(inst_16926);
var inst_16939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16938,(0),null);
var inst_16940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16938,(1),null);
var state_17027__$1 = (function (){var statearr_17030 = state_17027;
(statearr_17030[(8)] = inst_16939);

return statearr_17030;
})();
if(cljs.core.truth_(inst_16940)){
var statearr_17031_17114 = state_17027__$1;
(statearr_17031_17114[(1)] = (22));

} else {
var statearr_17032_17115 = state_17027__$1;
(statearr_17032_17115[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (27))){
var inst_16970 = (state_17027[(9)]);
var inst_16975 = (state_17027[(10)]);
var inst_16895 = (state_17027[(11)]);
var inst_16968 = (state_17027[(12)]);
var inst_16975__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16968,inst_16970);
var inst_16976 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16975__$1,inst_16895,done);
var state_17027__$1 = (function (){var statearr_17033 = state_17027;
(statearr_17033[(10)] = inst_16975__$1);

return statearr_17033;
})();
if(cljs.core.truth_(inst_16976)){
var statearr_17034_17116 = state_17027__$1;
(statearr_17034_17116[(1)] = (30));

} else {
var statearr_17035_17117 = state_17027__$1;
(statearr_17035_17117[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (1))){
var state_17027__$1 = state_17027;
var statearr_17036_17118 = state_17027__$1;
(statearr_17036_17118[(2)] = null);

(statearr_17036_17118[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (24))){
var inst_16926 = (state_17027[(7)]);
var inst_16945 = (state_17027[(2)]);
var inst_16946 = cljs.core.next(inst_16926);
var inst_16904 = inst_16946;
var inst_16905 = null;
var inst_16906 = (0);
var inst_16907 = (0);
var state_17027__$1 = (function (){var statearr_17037 = state_17027;
(statearr_17037[(13)] = inst_16907);

(statearr_17037[(14)] = inst_16906);

(statearr_17037[(15)] = inst_16905);

(statearr_17037[(16)] = inst_16945);

(statearr_17037[(17)] = inst_16904);

return statearr_17037;
})();
var statearr_17038_17119 = state_17027__$1;
(statearr_17038_17119[(2)] = null);

(statearr_17038_17119[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (39))){
var state_17027__$1 = state_17027;
var statearr_17042_17120 = state_17027__$1;
(statearr_17042_17120[(2)] = null);

(statearr_17042_17120[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (4))){
var inst_16895 = (state_17027[(11)]);
var inst_16895__$1 = (state_17027[(2)]);
var inst_16896 = (inst_16895__$1 == null);
var state_17027__$1 = (function (){var statearr_17043 = state_17027;
(statearr_17043[(11)] = inst_16895__$1);

return statearr_17043;
})();
if(cljs.core.truth_(inst_16896)){
var statearr_17044_17121 = state_17027__$1;
(statearr_17044_17121[(1)] = (5));

} else {
var statearr_17045_17122 = state_17027__$1;
(statearr_17045_17122[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (15))){
var inst_16907 = (state_17027[(13)]);
var inst_16906 = (state_17027[(14)]);
var inst_16905 = (state_17027[(15)]);
var inst_16904 = (state_17027[(17)]);
var inst_16922 = (state_17027[(2)]);
var inst_16923 = (inst_16907 + (1));
var tmp17039 = inst_16906;
var tmp17040 = inst_16905;
var tmp17041 = inst_16904;
var inst_16904__$1 = tmp17041;
var inst_16905__$1 = tmp17040;
var inst_16906__$1 = tmp17039;
var inst_16907__$1 = inst_16923;
var state_17027__$1 = (function (){var statearr_17046 = state_17027;
(statearr_17046[(13)] = inst_16907__$1);

(statearr_17046[(14)] = inst_16906__$1);

(statearr_17046[(15)] = inst_16905__$1);

(statearr_17046[(17)] = inst_16904__$1);

(statearr_17046[(18)] = inst_16922);

return statearr_17046;
})();
var statearr_17047_17123 = state_17027__$1;
(statearr_17047_17123[(2)] = null);

(statearr_17047_17123[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (21))){
var inst_16949 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17051_17124 = state_17027__$1;
(statearr_17051_17124[(2)] = inst_16949);

(statearr_17051_17124[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (31))){
var inst_16975 = (state_17027[(10)]);
var inst_16979 = done(null);
var inst_16980 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16975);
var state_17027__$1 = (function (){var statearr_17052 = state_17027;
(statearr_17052[(19)] = inst_16979);

return statearr_17052;
})();
var statearr_17053_17125 = state_17027__$1;
(statearr_17053_17125[(2)] = inst_16980);

(statearr_17053_17125[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (32))){
var inst_16969 = (state_17027[(20)]);
var inst_16967 = (state_17027[(21)]);
var inst_16970 = (state_17027[(9)]);
var inst_16968 = (state_17027[(12)]);
var inst_16982 = (state_17027[(2)]);
var inst_16983 = (inst_16970 + (1));
var tmp17048 = inst_16969;
var tmp17049 = inst_16967;
var tmp17050 = inst_16968;
var inst_16967__$1 = tmp17049;
var inst_16968__$1 = tmp17050;
var inst_16969__$1 = tmp17048;
var inst_16970__$1 = inst_16983;
var state_17027__$1 = (function (){var statearr_17054 = state_17027;
(statearr_17054[(20)] = inst_16969__$1);

(statearr_17054[(21)] = inst_16967__$1);

(statearr_17054[(9)] = inst_16970__$1);

(statearr_17054[(22)] = inst_16982);

(statearr_17054[(12)] = inst_16968__$1);

return statearr_17054;
})();
var statearr_17055_17126 = state_17027__$1;
(statearr_17055_17126[(2)] = null);

(statearr_17055_17126[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (40))){
var inst_16995 = (state_17027[(23)]);
var inst_16999 = done(null);
var inst_17000 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16995);
var state_17027__$1 = (function (){var statearr_17056 = state_17027;
(statearr_17056[(24)] = inst_16999);

return statearr_17056;
})();
var statearr_17057_17127 = state_17027__$1;
(statearr_17057_17127[(2)] = inst_17000);

(statearr_17057_17127[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (33))){
var inst_16986 = (state_17027[(25)]);
var inst_16988 = cljs.core.chunked_seq_QMARK_(inst_16986);
var state_17027__$1 = state_17027;
if(inst_16988){
var statearr_17058_17128 = state_17027__$1;
(statearr_17058_17128[(1)] = (36));

} else {
var statearr_17059_17129 = state_17027__$1;
(statearr_17059_17129[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (13))){
var inst_16916 = (state_17027[(26)]);
var inst_16919 = cljs.core.async.close_BANG_(inst_16916);
var state_17027__$1 = state_17027;
var statearr_17060_17130 = state_17027__$1;
(statearr_17060_17130[(2)] = inst_16919);

(statearr_17060_17130[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (22))){
var inst_16939 = (state_17027[(8)]);
var inst_16942 = cljs.core.async.close_BANG_(inst_16939);
var state_17027__$1 = state_17027;
var statearr_17061_17131 = state_17027__$1;
(statearr_17061_17131[(2)] = inst_16942);

(statearr_17061_17131[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (36))){
var inst_16986 = (state_17027[(25)]);
var inst_16990 = cljs.core.chunk_first(inst_16986);
var inst_16991 = cljs.core.chunk_rest(inst_16986);
var inst_16992 = cljs.core.count(inst_16990);
var inst_16967 = inst_16991;
var inst_16968 = inst_16990;
var inst_16969 = inst_16992;
var inst_16970 = (0);
var state_17027__$1 = (function (){var statearr_17062 = state_17027;
(statearr_17062[(20)] = inst_16969);

(statearr_17062[(21)] = inst_16967);

(statearr_17062[(9)] = inst_16970);

(statearr_17062[(12)] = inst_16968);

return statearr_17062;
})();
var statearr_17063_17132 = state_17027__$1;
(statearr_17063_17132[(2)] = null);

(statearr_17063_17132[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (41))){
var inst_16986 = (state_17027[(25)]);
var inst_17002 = (state_17027[(2)]);
var inst_17003 = cljs.core.next(inst_16986);
var inst_16967 = inst_17003;
var inst_16968 = null;
var inst_16969 = (0);
var inst_16970 = (0);
var state_17027__$1 = (function (){var statearr_17064 = state_17027;
(statearr_17064[(20)] = inst_16969);

(statearr_17064[(21)] = inst_16967);

(statearr_17064[(9)] = inst_16970);

(statearr_17064[(27)] = inst_17002);

(statearr_17064[(12)] = inst_16968);

return statearr_17064;
})();
var statearr_17065_17133 = state_17027__$1;
(statearr_17065_17133[(2)] = null);

(statearr_17065_17133[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (43))){
var state_17027__$1 = state_17027;
var statearr_17066_17134 = state_17027__$1;
(statearr_17066_17134[(2)] = null);

(statearr_17066_17134[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (29))){
var inst_17011 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17067_17135 = state_17027__$1;
(statearr_17067_17135[(2)] = inst_17011);

(statearr_17067_17135[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (44))){
var inst_17020 = (state_17027[(2)]);
var state_17027__$1 = (function (){var statearr_17068 = state_17027;
(statearr_17068[(28)] = inst_17020);

return statearr_17068;
})();
var statearr_17069_17136 = state_17027__$1;
(statearr_17069_17136[(2)] = null);

(statearr_17069_17136[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (6))){
var inst_16959 = (state_17027[(29)]);
var inst_16958 = cljs.core.deref(cs);
var inst_16959__$1 = cljs.core.keys(inst_16958);
var inst_16960 = cljs.core.count(inst_16959__$1);
var inst_16961 = cljs.core.reset_BANG_(dctr,inst_16960);
var inst_16966 = cljs.core.seq(inst_16959__$1);
var inst_16967 = inst_16966;
var inst_16968 = null;
var inst_16969 = (0);
var inst_16970 = (0);
var state_17027__$1 = (function (){var statearr_17070 = state_17027;
(statearr_17070[(30)] = inst_16961);

(statearr_17070[(20)] = inst_16969);

(statearr_17070[(21)] = inst_16967);

(statearr_17070[(9)] = inst_16970);

(statearr_17070[(29)] = inst_16959__$1);

(statearr_17070[(12)] = inst_16968);

return statearr_17070;
})();
var statearr_17071_17137 = state_17027__$1;
(statearr_17071_17137[(2)] = null);

(statearr_17071_17137[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (28))){
var inst_16967 = (state_17027[(21)]);
var inst_16986 = (state_17027[(25)]);
var inst_16986__$1 = cljs.core.seq(inst_16967);
var state_17027__$1 = (function (){var statearr_17072 = state_17027;
(statearr_17072[(25)] = inst_16986__$1);

return statearr_17072;
})();
if(inst_16986__$1){
var statearr_17073_17138 = state_17027__$1;
(statearr_17073_17138[(1)] = (33));

} else {
var statearr_17074_17139 = state_17027__$1;
(statearr_17074_17139[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (25))){
var inst_16969 = (state_17027[(20)]);
var inst_16970 = (state_17027[(9)]);
var inst_16972 = (inst_16970 < inst_16969);
var inst_16973 = inst_16972;
var state_17027__$1 = state_17027;
if(cljs.core.truth_(inst_16973)){
var statearr_17075_17140 = state_17027__$1;
(statearr_17075_17140[(1)] = (27));

} else {
var statearr_17076_17141 = state_17027__$1;
(statearr_17076_17141[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (34))){
var state_17027__$1 = state_17027;
var statearr_17077_17142 = state_17027__$1;
(statearr_17077_17142[(2)] = null);

(statearr_17077_17142[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (17))){
var state_17027__$1 = state_17027;
var statearr_17078_17143 = state_17027__$1;
(statearr_17078_17143[(2)] = null);

(statearr_17078_17143[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (3))){
var inst_17025 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17027__$1,inst_17025);
} else {
if((state_val_17028 === (12))){
var inst_16954 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17079_17144 = state_17027__$1;
(statearr_17079_17144[(2)] = inst_16954);

(statearr_17079_17144[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (2))){
var state_17027__$1 = state_17027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17027__$1,(4),ch);
} else {
if((state_val_17028 === (23))){
var state_17027__$1 = state_17027;
var statearr_17080_17145 = state_17027__$1;
(statearr_17080_17145[(2)] = null);

(statearr_17080_17145[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (35))){
var inst_17009 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17081_17146 = state_17027__$1;
(statearr_17081_17146[(2)] = inst_17009);

(statearr_17081_17146[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (19))){
var inst_16926 = (state_17027[(7)]);
var inst_16930 = cljs.core.chunk_first(inst_16926);
var inst_16931 = cljs.core.chunk_rest(inst_16926);
var inst_16932 = cljs.core.count(inst_16930);
var inst_16904 = inst_16931;
var inst_16905 = inst_16930;
var inst_16906 = inst_16932;
var inst_16907 = (0);
var state_17027__$1 = (function (){var statearr_17082 = state_17027;
(statearr_17082[(13)] = inst_16907);

(statearr_17082[(14)] = inst_16906);

(statearr_17082[(15)] = inst_16905);

(statearr_17082[(17)] = inst_16904);

return statearr_17082;
})();
var statearr_17083_17147 = state_17027__$1;
(statearr_17083_17147[(2)] = null);

(statearr_17083_17147[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (11))){
var inst_16926 = (state_17027[(7)]);
var inst_16904 = (state_17027[(17)]);
var inst_16926__$1 = cljs.core.seq(inst_16904);
var state_17027__$1 = (function (){var statearr_17084 = state_17027;
(statearr_17084[(7)] = inst_16926__$1);

return statearr_17084;
})();
if(inst_16926__$1){
var statearr_17085_17148 = state_17027__$1;
(statearr_17085_17148[(1)] = (16));

} else {
var statearr_17086_17149 = state_17027__$1;
(statearr_17086_17149[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (9))){
var inst_16956 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17087_17150 = state_17027__$1;
(statearr_17087_17150[(2)] = inst_16956);

(statearr_17087_17150[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (5))){
var inst_16902 = cljs.core.deref(cs);
var inst_16903 = cljs.core.seq(inst_16902);
var inst_16904 = inst_16903;
var inst_16905 = null;
var inst_16906 = (0);
var inst_16907 = (0);
var state_17027__$1 = (function (){var statearr_17088 = state_17027;
(statearr_17088[(13)] = inst_16907);

(statearr_17088[(14)] = inst_16906);

(statearr_17088[(15)] = inst_16905);

(statearr_17088[(17)] = inst_16904);

return statearr_17088;
})();
var statearr_17089_17151 = state_17027__$1;
(statearr_17089_17151[(2)] = null);

(statearr_17089_17151[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (14))){
var state_17027__$1 = state_17027;
var statearr_17090_17152 = state_17027__$1;
(statearr_17090_17152[(2)] = null);

(statearr_17090_17152[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (45))){
var inst_17017 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17091_17153 = state_17027__$1;
(statearr_17091_17153[(2)] = inst_17017);

(statearr_17091_17153[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (26))){
var inst_16959 = (state_17027[(29)]);
var inst_17013 = (state_17027[(2)]);
var inst_17014 = cljs.core.seq(inst_16959);
var state_17027__$1 = (function (){var statearr_17092 = state_17027;
(statearr_17092[(31)] = inst_17013);

return statearr_17092;
})();
if(inst_17014){
var statearr_17093_17154 = state_17027__$1;
(statearr_17093_17154[(1)] = (42));

} else {
var statearr_17094_17155 = state_17027__$1;
(statearr_17094_17155[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (16))){
var inst_16926 = (state_17027[(7)]);
var inst_16928 = cljs.core.chunked_seq_QMARK_(inst_16926);
var state_17027__$1 = state_17027;
if(inst_16928){
var statearr_17095_17156 = state_17027__$1;
(statearr_17095_17156[(1)] = (19));

} else {
var statearr_17096_17157 = state_17027__$1;
(statearr_17096_17157[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (38))){
var inst_17006 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17097_17158 = state_17027__$1;
(statearr_17097_17158[(2)] = inst_17006);

(statearr_17097_17158[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (30))){
var state_17027__$1 = state_17027;
var statearr_17098_17159 = state_17027__$1;
(statearr_17098_17159[(2)] = null);

(statearr_17098_17159[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (10))){
var inst_16907 = (state_17027[(13)]);
var inst_16905 = (state_17027[(15)]);
var inst_16915 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16905,inst_16907);
var inst_16916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16915,(0),null);
var inst_16917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16915,(1),null);
var state_17027__$1 = (function (){var statearr_17099 = state_17027;
(statearr_17099[(26)] = inst_16916);

return statearr_17099;
})();
if(cljs.core.truth_(inst_16917)){
var statearr_17100_17160 = state_17027__$1;
(statearr_17100_17160[(1)] = (13));

} else {
var statearr_17101_17161 = state_17027__$1;
(statearr_17101_17161[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (18))){
var inst_16952 = (state_17027[(2)]);
var state_17027__$1 = state_17027;
var statearr_17102_17162 = state_17027__$1;
(statearr_17102_17162[(2)] = inst_16952);

(statearr_17102_17162[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (42))){
var state_17027__$1 = state_17027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17027__$1,(45),dchan);
} else {
if((state_val_17028 === (37))){
var inst_16986 = (state_17027[(25)]);
var inst_16995 = (state_17027[(23)]);
var inst_16895 = (state_17027[(11)]);
var inst_16995__$1 = cljs.core.first(inst_16986);
var inst_16996 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16995__$1,inst_16895,done);
var state_17027__$1 = (function (){var statearr_17103 = state_17027;
(statearr_17103[(23)] = inst_16995__$1);

return statearr_17103;
})();
if(cljs.core.truth_(inst_16996)){
var statearr_17104_17163 = state_17027__$1;
(statearr_17104_17163[(1)] = (39));

} else {
var statearr_17105_17164 = state_17027__$1;
(statearr_17105_17164[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17028 === (8))){
var inst_16907 = (state_17027[(13)]);
var inst_16906 = (state_17027[(14)]);
var inst_16909 = (inst_16907 < inst_16906);
var inst_16910 = inst_16909;
var state_17027__$1 = state_17027;
if(cljs.core.truth_(inst_16910)){
var statearr_17106_17165 = state_17027__$1;
(statearr_17106_17165[(1)] = (10));

} else {
var statearr_17107_17166 = state_17027__$1;
(statearr_17107_17166[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16291__auto___17112,cs,m,dchan,dctr,done))
;
return ((function (switch__16189__auto__,c__16291__auto___17112,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16190__auto__ = null;
var cljs$core$async$mult_$_state_machine__16190__auto____0 = (function (){
var statearr_17108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17108[(0)] = cljs$core$async$mult_$_state_machine__16190__auto__);

(statearr_17108[(1)] = (1));

return statearr_17108;
});
var cljs$core$async$mult_$_state_machine__16190__auto____1 = (function (state_17027){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_17027);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e17109){if((e17109 instanceof Object)){
var ex__16193__auto__ = e17109;
var statearr_17110_17167 = state_17027;
(statearr_17110_17167[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17027);

return cljs.core.cst$kw$recur;
} else {
throw e17109;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__17168 = state_17027;
state_17027 = G__17168;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16190__auto__ = function(state_17027){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16190__auto____1.call(this,state_17027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16190__auto____0;
cljs$core$async$mult_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16190__auto____1;
return cljs$core$async$mult_$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___17112,cs,m,dchan,dctr,done))
})();
var state__16293__auto__ = (function (){var statearr_17111 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_17111[(6)] = c__16291__auto___17112);

return statearr_17111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___17112,cs,m,dchan,dctr,done))
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
var G__17170 = arguments.length;
switch (G__17170) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8398__auto__.call(null,m,ch));
} else {
var m__8398__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8398__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8398__auto__.call(null,m,ch));
} else {
var m__8398__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8398__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8398__auto__.call(null,m));
} else {
var m__8398__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8398__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8398__auto__.call(null,m,state_map));
} else {
var m__8398__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8398__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8398__auto__.call(null,m,mode));
} else {
var m__8398__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8398__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8918__auto__ = [];
var len__8911__auto___17182 = arguments.length;
var i__8912__auto___17183 = (0);
while(true){
if((i__8912__auto___17183 < len__8911__auto___17182)){
args__8918__auto__.push((arguments[i__8912__auto___17183]));

var G__17184 = (i__8912__auto___17183 + (1));
i__8912__auto___17183 = G__17184;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((3) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8919__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17176){
var map__17177 = p__17176;
var map__17177__$1 = ((((!((map__17177 == null)))?((((map__17177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17177):map__17177);
var opts = map__17177__$1;
var statearr_17179_17185 = state;
(statearr_17179_17185[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts(((function (map__17177,map__17177__$1,opts){
return (function (val){
var statearr_17180_17186 = state;
(statearr_17180_17186[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17177,map__17177__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_17181_17187 = state;
(statearr_17181_17187[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17172){
var G__17173 = cljs.core.first(seq17172);
var seq17172__$1 = cljs.core.next(seq17172);
var G__17174 = cljs.core.first(seq17172__$1);
var seq17172__$2 = cljs.core.next(seq17172__$1);
var G__17175 = cljs.core.first(seq17172__$2);
var seq17172__$3 = cljs.core.next(seq17172__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17173,G__17174,G__17175,seq17172__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17188 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17189){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17189 = meta17189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17190,meta17189__$1){
var self__ = this;
var _17190__$1 = this;
return (new cljs.core.async.t_cljs$core$async17188(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17189__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17190){
var self__ = this;
var _17190__$1 = this;
return self__.meta17189;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17188.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17188.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta17189], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17188";

cljs.core.async.t_cljs$core$async17188.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async17188");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17188 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17188(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17189){
return (new cljs.core.async.t_cljs$core$async17188(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17189));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17188(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16291__auto___17352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___17352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___17352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17292){
var state_val_17293 = (state_17292[(1)]);
if((state_val_17293 === (7))){
var inst_17207 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
var statearr_17294_17353 = state_17292__$1;
(statearr_17294_17353[(2)] = inst_17207);

(statearr_17294_17353[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (20))){
var inst_17219 = (state_17292[(7)]);
var state_17292__$1 = state_17292;
var statearr_17295_17354 = state_17292__$1;
(statearr_17295_17354[(2)] = inst_17219);

(statearr_17295_17354[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (27))){
var state_17292__$1 = state_17292;
var statearr_17296_17355 = state_17292__$1;
(statearr_17296_17355[(2)] = null);

(statearr_17296_17355[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (1))){
var inst_17194 = (state_17292[(8)]);
var inst_17194__$1 = calc_state();
var inst_17196 = (inst_17194__$1 == null);
var inst_17197 = cljs.core.not(inst_17196);
var state_17292__$1 = (function (){var statearr_17297 = state_17292;
(statearr_17297[(8)] = inst_17194__$1);

return statearr_17297;
})();
if(inst_17197){
var statearr_17298_17356 = state_17292__$1;
(statearr_17298_17356[(1)] = (2));

} else {
var statearr_17299_17357 = state_17292__$1;
(statearr_17299_17357[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (24))){
var inst_17266 = (state_17292[(9)]);
var inst_17243 = (state_17292[(10)]);
var inst_17252 = (state_17292[(11)]);
var inst_17266__$1 = (inst_17243.cljs$core$IFn$_invoke$arity$1 ? inst_17243.cljs$core$IFn$_invoke$arity$1(inst_17252) : inst_17243.call(null,inst_17252));
var state_17292__$1 = (function (){var statearr_17300 = state_17292;
(statearr_17300[(9)] = inst_17266__$1);

return statearr_17300;
})();
if(cljs.core.truth_(inst_17266__$1)){
var statearr_17301_17358 = state_17292__$1;
(statearr_17301_17358[(1)] = (29));

} else {
var statearr_17302_17359 = state_17292__$1;
(statearr_17302_17359[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (4))){
var inst_17210 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
if(cljs.core.truth_(inst_17210)){
var statearr_17303_17360 = state_17292__$1;
(statearr_17303_17360[(1)] = (8));

} else {
var statearr_17304_17361 = state_17292__$1;
(statearr_17304_17361[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (15))){
var inst_17237 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
if(cljs.core.truth_(inst_17237)){
var statearr_17305_17362 = state_17292__$1;
(statearr_17305_17362[(1)] = (19));

} else {
var statearr_17306_17363 = state_17292__$1;
(statearr_17306_17363[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (21))){
var inst_17242 = (state_17292[(12)]);
var inst_17242__$1 = (state_17292[(2)]);
var inst_17243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17242__$1,cljs.core.cst$kw$solos);
var inst_17244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17242__$1,cljs.core.cst$kw$mutes);
var inst_17245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17242__$1,cljs.core.cst$kw$reads);
var state_17292__$1 = (function (){var statearr_17307 = state_17292;
(statearr_17307[(10)] = inst_17243);

(statearr_17307[(12)] = inst_17242__$1);

(statearr_17307[(13)] = inst_17244);

return statearr_17307;
})();
return cljs.core.async.ioc_alts_BANG_(state_17292__$1,(22),inst_17245);
} else {
if((state_val_17293 === (31))){
var inst_17274 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
if(cljs.core.truth_(inst_17274)){
var statearr_17308_17364 = state_17292__$1;
(statearr_17308_17364[(1)] = (32));

} else {
var statearr_17309_17365 = state_17292__$1;
(statearr_17309_17365[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (32))){
var inst_17251 = (state_17292[(14)]);
var state_17292__$1 = state_17292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17292__$1,(35),out,inst_17251);
} else {
if((state_val_17293 === (33))){
var inst_17242 = (state_17292[(12)]);
var inst_17219 = inst_17242;
var state_17292__$1 = (function (){var statearr_17310 = state_17292;
(statearr_17310[(7)] = inst_17219);

return statearr_17310;
})();
var statearr_17311_17366 = state_17292__$1;
(statearr_17311_17366[(2)] = null);

(statearr_17311_17366[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (13))){
var inst_17219 = (state_17292[(7)]);
var inst_17226 = inst_17219.cljs$lang$protocol_mask$partition0$;
var inst_17227 = (inst_17226 & (64));
var inst_17228 = inst_17219.cljs$core$ISeq$;
var inst_17229 = (cljs.core.PROTOCOL_SENTINEL === inst_17228);
var inst_17230 = (inst_17227) || (inst_17229);
var state_17292__$1 = state_17292;
if(cljs.core.truth_(inst_17230)){
var statearr_17312_17367 = state_17292__$1;
(statearr_17312_17367[(1)] = (16));

} else {
var statearr_17313_17368 = state_17292__$1;
(statearr_17313_17368[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (22))){
var inst_17251 = (state_17292[(14)]);
var inst_17252 = (state_17292[(11)]);
var inst_17250 = (state_17292[(2)]);
var inst_17251__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17250,(0),null);
var inst_17252__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17250,(1),null);
var inst_17253 = (inst_17251__$1 == null);
var inst_17254 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17252__$1,change);
var inst_17255 = (inst_17253) || (inst_17254);
var state_17292__$1 = (function (){var statearr_17314 = state_17292;
(statearr_17314[(14)] = inst_17251__$1);

(statearr_17314[(11)] = inst_17252__$1);

return statearr_17314;
})();
if(cljs.core.truth_(inst_17255)){
var statearr_17315_17369 = state_17292__$1;
(statearr_17315_17369[(1)] = (23));

} else {
var statearr_17316_17370 = state_17292__$1;
(statearr_17316_17370[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (36))){
var inst_17242 = (state_17292[(12)]);
var inst_17219 = inst_17242;
var state_17292__$1 = (function (){var statearr_17317 = state_17292;
(statearr_17317[(7)] = inst_17219);

return statearr_17317;
})();
var statearr_17318_17371 = state_17292__$1;
(statearr_17318_17371[(2)] = null);

(statearr_17318_17371[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (29))){
var inst_17266 = (state_17292[(9)]);
var state_17292__$1 = state_17292;
var statearr_17319_17372 = state_17292__$1;
(statearr_17319_17372[(2)] = inst_17266);

(statearr_17319_17372[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (6))){
var state_17292__$1 = state_17292;
var statearr_17320_17373 = state_17292__$1;
(statearr_17320_17373[(2)] = false);

(statearr_17320_17373[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (28))){
var inst_17262 = (state_17292[(2)]);
var inst_17263 = calc_state();
var inst_17219 = inst_17263;
var state_17292__$1 = (function (){var statearr_17321 = state_17292;
(statearr_17321[(7)] = inst_17219);

(statearr_17321[(15)] = inst_17262);

return statearr_17321;
})();
var statearr_17322_17374 = state_17292__$1;
(statearr_17322_17374[(2)] = null);

(statearr_17322_17374[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (25))){
var inst_17288 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
var statearr_17323_17375 = state_17292__$1;
(statearr_17323_17375[(2)] = inst_17288);

(statearr_17323_17375[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (34))){
var inst_17286 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
var statearr_17324_17376 = state_17292__$1;
(statearr_17324_17376[(2)] = inst_17286);

(statearr_17324_17376[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (17))){
var state_17292__$1 = state_17292;
var statearr_17325_17377 = state_17292__$1;
(statearr_17325_17377[(2)] = false);

(statearr_17325_17377[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (3))){
var state_17292__$1 = state_17292;
var statearr_17326_17378 = state_17292__$1;
(statearr_17326_17378[(2)] = false);

(statearr_17326_17378[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (12))){
var inst_17290 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17292__$1,inst_17290);
} else {
if((state_val_17293 === (2))){
var inst_17194 = (state_17292[(8)]);
var inst_17199 = inst_17194.cljs$lang$protocol_mask$partition0$;
var inst_17200 = (inst_17199 & (64));
var inst_17201 = inst_17194.cljs$core$ISeq$;
var inst_17202 = (cljs.core.PROTOCOL_SENTINEL === inst_17201);
var inst_17203 = (inst_17200) || (inst_17202);
var state_17292__$1 = state_17292;
if(cljs.core.truth_(inst_17203)){
var statearr_17327_17379 = state_17292__$1;
(statearr_17327_17379[(1)] = (5));

} else {
var statearr_17328_17380 = state_17292__$1;
(statearr_17328_17380[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (23))){
var inst_17251 = (state_17292[(14)]);
var inst_17257 = (inst_17251 == null);
var state_17292__$1 = state_17292;
if(cljs.core.truth_(inst_17257)){
var statearr_17329_17381 = state_17292__$1;
(statearr_17329_17381[(1)] = (26));

} else {
var statearr_17330_17382 = state_17292__$1;
(statearr_17330_17382[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (35))){
var inst_17277 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
if(cljs.core.truth_(inst_17277)){
var statearr_17331_17383 = state_17292__$1;
(statearr_17331_17383[(1)] = (36));

} else {
var statearr_17332_17384 = state_17292__$1;
(statearr_17332_17384[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (19))){
var inst_17219 = (state_17292[(7)]);
var inst_17239 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17219);
var state_17292__$1 = state_17292;
var statearr_17333_17385 = state_17292__$1;
(statearr_17333_17385[(2)] = inst_17239);

(statearr_17333_17385[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (11))){
var inst_17219 = (state_17292[(7)]);
var inst_17223 = (inst_17219 == null);
var inst_17224 = cljs.core.not(inst_17223);
var state_17292__$1 = state_17292;
if(inst_17224){
var statearr_17334_17386 = state_17292__$1;
(statearr_17334_17386[(1)] = (13));

} else {
var statearr_17335_17387 = state_17292__$1;
(statearr_17335_17387[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (9))){
var inst_17194 = (state_17292[(8)]);
var state_17292__$1 = state_17292;
var statearr_17336_17388 = state_17292__$1;
(statearr_17336_17388[(2)] = inst_17194);

(statearr_17336_17388[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (5))){
var state_17292__$1 = state_17292;
var statearr_17337_17389 = state_17292__$1;
(statearr_17337_17389[(2)] = true);

(statearr_17337_17389[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (14))){
var state_17292__$1 = state_17292;
var statearr_17338_17390 = state_17292__$1;
(statearr_17338_17390[(2)] = false);

(statearr_17338_17390[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (26))){
var inst_17252 = (state_17292[(11)]);
var inst_17259 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17252);
var state_17292__$1 = state_17292;
var statearr_17339_17391 = state_17292__$1;
(statearr_17339_17391[(2)] = inst_17259);

(statearr_17339_17391[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (16))){
var state_17292__$1 = state_17292;
var statearr_17340_17392 = state_17292__$1;
(statearr_17340_17392[(2)] = true);

(statearr_17340_17392[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (38))){
var inst_17282 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
var statearr_17341_17393 = state_17292__$1;
(statearr_17341_17393[(2)] = inst_17282);

(statearr_17341_17393[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (30))){
var inst_17243 = (state_17292[(10)]);
var inst_17244 = (state_17292[(13)]);
var inst_17252 = (state_17292[(11)]);
var inst_17269 = cljs.core.empty_QMARK_(inst_17243);
var inst_17270 = (inst_17244.cljs$core$IFn$_invoke$arity$1 ? inst_17244.cljs$core$IFn$_invoke$arity$1(inst_17252) : inst_17244.call(null,inst_17252));
var inst_17271 = cljs.core.not(inst_17270);
var inst_17272 = (inst_17269) && (inst_17271);
var state_17292__$1 = state_17292;
var statearr_17342_17394 = state_17292__$1;
(statearr_17342_17394[(2)] = inst_17272);

(statearr_17342_17394[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (10))){
var inst_17194 = (state_17292[(8)]);
var inst_17215 = (state_17292[(2)]);
var inst_17216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17215,cljs.core.cst$kw$solos);
var inst_17217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17215,cljs.core.cst$kw$mutes);
var inst_17218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17215,cljs.core.cst$kw$reads);
var inst_17219 = inst_17194;
var state_17292__$1 = (function (){var statearr_17343 = state_17292;
(statearr_17343[(16)] = inst_17218);

(statearr_17343[(17)] = inst_17217);

(statearr_17343[(7)] = inst_17219);

(statearr_17343[(18)] = inst_17216);

return statearr_17343;
})();
var statearr_17344_17395 = state_17292__$1;
(statearr_17344_17395[(2)] = null);

(statearr_17344_17395[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (18))){
var inst_17234 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
var statearr_17345_17396 = state_17292__$1;
(statearr_17345_17396[(2)] = inst_17234);

(statearr_17345_17396[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (37))){
var state_17292__$1 = state_17292;
var statearr_17346_17397 = state_17292__$1;
(statearr_17346_17397[(2)] = null);

(statearr_17346_17397[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17293 === (8))){
var inst_17194 = (state_17292[(8)]);
var inst_17212 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17194);
var state_17292__$1 = state_17292;
var statearr_17347_17398 = state_17292__$1;
(statearr_17347_17398[(2)] = inst_17212);

(statearr_17347_17398[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16291__auto___17352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16189__auto__,c__16291__auto___17352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16190__auto__ = null;
var cljs$core$async$mix_$_state_machine__16190__auto____0 = (function (){
var statearr_17348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17348[(0)] = cljs$core$async$mix_$_state_machine__16190__auto__);

(statearr_17348[(1)] = (1));

return statearr_17348;
});
var cljs$core$async$mix_$_state_machine__16190__auto____1 = (function (state_17292){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_17292);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e17349){if((e17349 instanceof Object)){
var ex__16193__auto__ = e17349;
var statearr_17350_17399 = state_17292;
(statearr_17350_17399[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17292);

return cljs.core.cst$kw$recur;
} else {
throw e17349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__17400 = state_17292;
state_17292 = G__17400;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16190__auto__ = function(state_17292){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16190__auto____1.call(this,state_17292);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16190__auto____0;
cljs$core$async$mix_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16190__auto____1;
return cljs$core$async$mix_$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___17352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16293__auto__ = (function (){var statearr_17351 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_17351[(6)] = c__16291__auto___17352);

return statearr_17351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___17352,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8397__auto__ = (((p == null))?null:p);
var m__8398__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8398__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__8398__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8398__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8397__auto__ = (((p == null))?null:p);
var m__8398__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8398__auto__.call(null,p,v,ch));
} else {
var m__8398__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8398__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17402 = arguments.length;
switch (G__17402) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8397__auto__ = (((p == null))?null:p);
var m__8398__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__8398__auto__.call(null,p));
} else {
var m__8398__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__8398__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8397__auto__ = (((p == null))?null:p);
var m__8398__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__8398__auto__.call(null,p,v));
} else {
var m__8398__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__8398__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__17406 = arguments.length;
switch (G__17406) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7678__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7678__auto__,mults){
return (function (p1__17404_SHARP_){
if(cljs.core.truth_((p1__17404_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17404_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17404_SHARP_.call(null,topic)))){
return p1__17404_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17404_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7678__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17407 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17408){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17408 = meta17408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17409,meta17408__$1){
var self__ = this;
var _17409__$1 = this;
return (new cljs.core.async.t_cljs$core$async17407(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17408__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17409){
var self__ = this;
var _17409__$1 = this;
return self__.meta17408;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17407.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17407.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17408], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17407.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17407";

cljs.core.async.t_cljs$core$async17407.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async17407");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17407 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17407(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17408){
return (new cljs.core.async.t_cljs$core$async17407(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17408));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17407(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16291__auto___17527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___17527,mults,ensure_mult,p){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___17527,mults,ensure_mult,p){
return (function (state_17481){
var state_val_17482 = (state_17481[(1)]);
if((state_val_17482 === (7))){
var inst_17477 = (state_17481[(2)]);
var state_17481__$1 = state_17481;
var statearr_17483_17528 = state_17481__$1;
(statearr_17483_17528[(2)] = inst_17477);

(statearr_17483_17528[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (20))){
var state_17481__$1 = state_17481;
var statearr_17484_17529 = state_17481__$1;
(statearr_17484_17529[(2)] = null);

(statearr_17484_17529[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (1))){
var state_17481__$1 = state_17481;
var statearr_17485_17530 = state_17481__$1;
(statearr_17485_17530[(2)] = null);

(statearr_17485_17530[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (24))){
var inst_17460 = (state_17481[(7)]);
var inst_17469 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17460);
var state_17481__$1 = state_17481;
var statearr_17486_17531 = state_17481__$1;
(statearr_17486_17531[(2)] = inst_17469);

(statearr_17486_17531[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (4))){
var inst_17412 = (state_17481[(8)]);
var inst_17412__$1 = (state_17481[(2)]);
var inst_17413 = (inst_17412__$1 == null);
var state_17481__$1 = (function (){var statearr_17487 = state_17481;
(statearr_17487[(8)] = inst_17412__$1);

return statearr_17487;
})();
if(cljs.core.truth_(inst_17413)){
var statearr_17488_17532 = state_17481__$1;
(statearr_17488_17532[(1)] = (5));

} else {
var statearr_17489_17533 = state_17481__$1;
(statearr_17489_17533[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (15))){
var inst_17454 = (state_17481[(2)]);
var state_17481__$1 = state_17481;
var statearr_17490_17534 = state_17481__$1;
(statearr_17490_17534[(2)] = inst_17454);

(statearr_17490_17534[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (21))){
var inst_17474 = (state_17481[(2)]);
var state_17481__$1 = (function (){var statearr_17491 = state_17481;
(statearr_17491[(9)] = inst_17474);

return statearr_17491;
})();
var statearr_17492_17535 = state_17481__$1;
(statearr_17492_17535[(2)] = null);

(statearr_17492_17535[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (13))){
var inst_17436 = (state_17481[(10)]);
var inst_17438 = cljs.core.chunked_seq_QMARK_(inst_17436);
var state_17481__$1 = state_17481;
if(inst_17438){
var statearr_17493_17536 = state_17481__$1;
(statearr_17493_17536[(1)] = (16));

} else {
var statearr_17494_17537 = state_17481__$1;
(statearr_17494_17537[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (22))){
var inst_17466 = (state_17481[(2)]);
var state_17481__$1 = state_17481;
if(cljs.core.truth_(inst_17466)){
var statearr_17495_17538 = state_17481__$1;
(statearr_17495_17538[(1)] = (23));

} else {
var statearr_17496_17539 = state_17481__$1;
(statearr_17496_17539[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (6))){
var inst_17412 = (state_17481[(8)]);
var inst_17462 = (state_17481[(11)]);
var inst_17460 = (state_17481[(7)]);
var inst_17460__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17412) : topic_fn.call(null,inst_17412));
var inst_17461 = cljs.core.deref(mults);
var inst_17462__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17461,inst_17460__$1);
var state_17481__$1 = (function (){var statearr_17497 = state_17481;
(statearr_17497[(11)] = inst_17462__$1);

(statearr_17497[(7)] = inst_17460__$1);

return statearr_17497;
})();
if(cljs.core.truth_(inst_17462__$1)){
var statearr_17498_17540 = state_17481__$1;
(statearr_17498_17540[(1)] = (19));

} else {
var statearr_17499_17541 = state_17481__$1;
(statearr_17499_17541[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (25))){
var inst_17471 = (state_17481[(2)]);
var state_17481__$1 = state_17481;
var statearr_17500_17542 = state_17481__$1;
(statearr_17500_17542[(2)] = inst_17471);

(statearr_17500_17542[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (17))){
var inst_17436 = (state_17481[(10)]);
var inst_17445 = cljs.core.first(inst_17436);
var inst_17446 = cljs.core.async.muxch_STAR_(inst_17445);
var inst_17447 = cljs.core.async.close_BANG_(inst_17446);
var inst_17448 = cljs.core.next(inst_17436);
var inst_17422 = inst_17448;
var inst_17423 = null;
var inst_17424 = (0);
var inst_17425 = (0);
var state_17481__$1 = (function (){var statearr_17501 = state_17481;
(statearr_17501[(12)] = inst_17424);

(statearr_17501[(13)] = inst_17423);

(statearr_17501[(14)] = inst_17447);

(statearr_17501[(15)] = inst_17425);

(statearr_17501[(16)] = inst_17422);

return statearr_17501;
})();
var statearr_17502_17543 = state_17481__$1;
(statearr_17502_17543[(2)] = null);

(statearr_17502_17543[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (3))){
var inst_17479 = (state_17481[(2)]);
var state_17481__$1 = state_17481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17481__$1,inst_17479);
} else {
if((state_val_17482 === (12))){
var inst_17456 = (state_17481[(2)]);
var state_17481__$1 = state_17481;
var statearr_17503_17544 = state_17481__$1;
(statearr_17503_17544[(2)] = inst_17456);

(statearr_17503_17544[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (2))){
var state_17481__$1 = state_17481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17481__$1,(4),ch);
} else {
if((state_val_17482 === (23))){
var state_17481__$1 = state_17481;
var statearr_17504_17545 = state_17481__$1;
(statearr_17504_17545[(2)] = null);

(statearr_17504_17545[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (19))){
var inst_17412 = (state_17481[(8)]);
var inst_17462 = (state_17481[(11)]);
var inst_17464 = cljs.core.async.muxch_STAR_(inst_17462);
var state_17481__$1 = state_17481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17481__$1,(22),inst_17464,inst_17412);
} else {
if((state_val_17482 === (11))){
var inst_17422 = (state_17481[(16)]);
var inst_17436 = (state_17481[(10)]);
var inst_17436__$1 = cljs.core.seq(inst_17422);
var state_17481__$1 = (function (){var statearr_17505 = state_17481;
(statearr_17505[(10)] = inst_17436__$1);

return statearr_17505;
})();
if(inst_17436__$1){
var statearr_17506_17546 = state_17481__$1;
(statearr_17506_17546[(1)] = (13));

} else {
var statearr_17507_17547 = state_17481__$1;
(statearr_17507_17547[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (9))){
var inst_17458 = (state_17481[(2)]);
var state_17481__$1 = state_17481;
var statearr_17508_17548 = state_17481__$1;
(statearr_17508_17548[(2)] = inst_17458);

(statearr_17508_17548[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (5))){
var inst_17419 = cljs.core.deref(mults);
var inst_17420 = cljs.core.vals(inst_17419);
var inst_17421 = cljs.core.seq(inst_17420);
var inst_17422 = inst_17421;
var inst_17423 = null;
var inst_17424 = (0);
var inst_17425 = (0);
var state_17481__$1 = (function (){var statearr_17509 = state_17481;
(statearr_17509[(12)] = inst_17424);

(statearr_17509[(13)] = inst_17423);

(statearr_17509[(15)] = inst_17425);

(statearr_17509[(16)] = inst_17422);

return statearr_17509;
})();
var statearr_17510_17549 = state_17481__$1;
(statearr_17510_17549[(2)] = null);

(statearr_17510_17549[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (14))){
var state_17481__$1 = state_17481;
var statearr_17514_17550 = state_17481__$1;
(statearr_17514_17550[(2)] = null);

(statearr_17514_17550[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (16))){
var inst_17436 = (state_17481[(10)]);
var inst_17440 = cljs.core.chunk_first(inst_17436);
var inst_17441 = cljs.core.chunk_rest(inst_17436);
var inst_17442 = cljs.core.count(inst_17440);
var inst_17422 = inst_17441;
var inst_17423 = inst_17440;
var inst_17424 = inst_17442;
var inst_17425 = (0);
var state_17481__$1 = (function (){var statearr_17515 = state_17481;
(statearr_17515[(12)] = inst_17424);

(statearr_17515[(13)] = inst_17423);

(statearr_17515[(15)] = inst_17425);

(statearr_17515[(16)] = inst_17422);

return statearr_17515;
})();
var statearr_17516_17551 = state_17481__$1;
(statearr_17516_17551[(2)] = null);

(statearr_17516_17551[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (10))){
var inst_17424 = (state_17481[(12)]);
var inst_17423 = (state_17481[(13)]);
var inst_17425 = (state_17481[(15)]);
var inst_17422 = (state_17481[(16)]);
var inst_17430 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17423,inst_17425);
var inst_17431 = cljs.core.async.muxch_STAR_(inst_17430);
var inst_17432 = cljs.core.async.close_BANG_(inst_17431);
var inst_17433 = (inst_17425 + (1));
var tmp17511 = inst_17424;
var tmp17512 = inst_17423;
var tmp17513 = inst_17422;
var inst_17422__$1 = tmp17513;
var inst_17423__$1 = tmp17512;
var inst_17424__$1 = tmp17511;
var inst_17425__$1 = inst_17433;
var state_17481__$1 = (function (){var statearr_17517 = state_17481;
(statearr_17517[(12)] = inst_17424__$1);

(statearr_17517[(17)] = inst_17432);

(statearr_17517[(13)] = inst_17423__$1);

(statearr_17517[(15)] = inst_17425__$1);

(statearr_17517[(16)] = inst_17422__$1);

return statearr_17517;
})();
var statearr_17518_17552 = state_17481__$1;
(statearr_17518_17552[(2)] = null);

(statearr_17518_17552[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (18))){
var inst_17451 = (state_17481[(2)]);
var state_17481__$1 = state_17481;
var statearr_17519_17553 = state_17481__$1;
(statearr_17519_17553[(2)] = inst_17451);

(statearr_17519_17553[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17482 === (8))){
var inst_17424 = (state_17481[(12)]);
var inst_17425 = (state_17481[(15)]);
var inst_17427 = (inst_17425 < inst_17424);
var inst_17428 = inst_17427;
var state_17481__$1 = state_17481;
if(cljs.core.truth_(inst_17428)){
var statearr_17520_17554 = state_17481__$1;
(statearr_17520_17554[(1)] = (10));

} else {
var statearr_17521_17555 = state_17481__$1;
(statearr_17521_17555[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16291__auto___17527,mults,ensure_mult,p))
;
return ((function (switch__16189__auto__,c__16291__auto___17527,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16190__auto__ = null;
var cljs$core$async$state_machine__16190__auto____0 = (function (){
var statearr_17522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17522[(0)] = cljs$core$async$state_machine__16190__auto__);

(statearr_17522[(1)] = (1));

return statearr_17522;
});
var cljs$core$async$state_machine__16190__auto____1 = (function (state_17481){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_17481);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e17523){if((e17523 instanceof Object)){
var ex__16193__auto__ = e17523;
var statearr_17524_17556 = state_17481;
(statearr_17524_17556[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17481);

return cljs.core.cst$kw$recur;
} else {
throw e17523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__17557 = state_17481;
state_17481 = G__17557;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$state_machine__16190__auto__ = function(state_17481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16190__auto____1.call(this,state_17481);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16190__auto____0;
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16190__auto____1;
return cljs$core$async$state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___17527,mults,ensure_mult,p))
})();
var state__16293__auto__ = (function (){var statearr_17525 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_17525[(6)] = c__16291__auto___17527);

return statearr_17525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___17527,mults,ensure_mult,p))
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
var G__17559 = arguments.length;
switch (G__17559) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17562 = arguments.length;
switch (G__17562) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__17565 = arguments.length;
switch (G__17565) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__16291__auto___17632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___17632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___17632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17604){
var state_val_17605 = (state_17604[(1)]);
if((state_val_17605 === (7))){
var state_17604__$1 = state_17604;
var statearr_17606_17633 = state_17604__$1;
(statearr_17606_17633[(2)] = null);

(statearr_17606_17633[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17605 === (1))){
var state_17604__$1 = state_17604;
var statearr_17607_17634 = state_17604__$1;
(statearr_17607_17634[(2)] = null);

(statearr_17607_17634[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17605 === (4))){
var inst_17568 = (state_17604[(7)]);
var inst_17570 = (inst_17568 < cnt);
var state_17604__$1 = state_17604;
if(cljs.core.truth_(inst_17570)){
var statearr_17608_17635 = state_17604__$1;
(statearr_17608_17635[(1)] = (6));

} else {
var statearr_17609_17636 = state_17604__$1;
(statearr_17609_17636[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17605 === (15))){
var inst_17600 = (state_17604[(2)]);
var state_17604__$1 = state_17604;
var statearr_17610_17637 = state_17604__$1;
(statearr_17610_17637[(2)] = inst_17600);

(statearr_17610_17637[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17605 === (13))){
var inst_17593 = cljs.core.async.close_BANG_(out);
var state_17604__$1 = state_17604;
var statearr_17611_17638 = state_17604__$1;
(statearr_17611_17638[(2)] = inst_17593);

(statearr_17611_17638[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17605 === (6))){
var state_17604__$1 = state_17604;
var statearr_17612_17639 = state_17604__$1;
(statearr_17612_17639[(2)] = null);

(statearr_17612_17639[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17605 === (3))){
var inst_17602 = (state_17604[(2)]);
var state_17604__$1 = state_17604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17604__$1,inst_17602);
} else {
if((state_val_17605 === (12))){
var inst_17590 = (state_17604[(8)]);
var inst_17590__$1 = (state_17604[(2)]);
var inst_17591 = cljs.core.some(cljs.core.nil_QMARK_,inst_17590__$1);
var state_17604__$1 = (function (){var statearr_17613 = state_17604;
(statearr_17613[(8)] = inst_17590__$1);

return statearr_17613;
})();
if(cljs.core.truth_(inst_17591)){
var statearr_17614_17640 = state_17604__$1;
(statearr_17614_17640[(1)] = (13));

} else {
var statearr_17615_17641 = state_17604__$1;
(statearr_17615_17641[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17605 === (2))){
var inst_17567 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17568 = (0);
var state_17604__$1 = (function (){var statearr_17616 = state_17604;
(statearr_17616[(7)] = inst_17568);

(statearr_17616[(9)] = inst_17567);

return statearr_17616;
})();
var statearr_17617_17642 = state_17604__$1;
(statearr_17617_17642[(2)] = null);

(statearr_17617_17642[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17605 === (11))){
var inst_17568 = (state_17604[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17604,(10),Object,null,(9));
var inst_17577 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17568) : chs__$1.call(null,inst_17568));
var inst_17578 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17568) : done.call(null,inst_17568));
var inst_17579 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17577,inst_17578);
var state_17604__$1 = state_17604;
var statearr_17618_17643 = state_17604__$1;
(statearr_17618_17643[(2)] = inst_17579);


cljs.core.async.impl.ioc_helpers.process_exception(state_17604__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17605 === (9))){
var inst_17568 = (state_17604[(7)]);
var inst_17581 = (state_17604[(2)]);
var inst_17582 = (inst_17568 + (1));
var inst_17568__$1 = inst_17582;
var state_17604__$1 = (function (){var statearr_17619 = state_17604;
(statearr_17619[(7)] = inst_17568__$1);

(statearr_17619[(10)] = inst_17581);

return statearr_17619;
})();
var statearr_17620_17644 = state_17604__$1;
(statearr_17620_17644[(2)] = null);

(statearr_17620_17644[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17605 === (5))){
var inst_17588 = (state_17604[(2)]);
var state_17604__$1 = (function (){var statearr_17621 = state_17604;
(statearr_17621[(11)] = inst_17588);

return statearr_17621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17604__$1,(12),dchan);
} else {
if((state_val_17605 === (14))){
var inst_17590 = (state_17604[(8)]);
var inst_17595 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17590);
var state_17604__$1 = state_17604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17604__$1,(16),out,inst_17595);
} else {
if((state_val_17605 === (16))){
var inst_17597 = (state_17604[(2)]);
var state_17604__$1 = (function (){var statearr_17622 = state_17604;
(statearr_17622[(12)] = inst_17597);

return statearr_17622;
})();
var statearr_17623_17645 = state_17604__$1;
(statearr_17623_17645[(2)] = null);

(statearr_17623_17645[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17605 === (10))){
var inst_17572 = (state_17604[(2)]);
var inst_17573 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17604__$1 = (function (){var statearr_17624 = state_17604;
(statearr_17624[(13)] = inst_17572);

return statearr_17624;
})();
var statearr_17625_17646 = state_17604__$1;
(statearr_17625_17646[(2)] = inst_17573);


cljs.core.async.impl.ioc_helpers.process_exception(state_17604__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17605 === (8))){
var inst_17586 = (state_17604[(2)]);
var state_17604__$1 = state_17604;
var statearr_17626_17647 = state_17604__$1;
(statearr_17626_17647[(2)] = inst_17586);

(statearr_17626_17647[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__16291__auto___17632,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16189__auto__,c__16291__auto___17632,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16190__auto__ = null;
var cljs$core$async$state_machine__16190__auto____0 = (function (){
var statearr_17627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17627[(0)] = cljs$core$async$state_machine__16190__auto__);

(statearr_17627[(1)] = (1));

return statearr_17627;
});
var cljs$core$async$state_machine__16190__auto____1 = (function (state_17604){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_17604);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e17628){if((e17628 instanceof Object)){
var ex__16193__auto__ = e17628;
var statearr_17629_17648 = state_17604;
(statearr_17629_17648[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17604);

return cljs.core.cst$kw$recur;
} else {
throw e17628;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__17649 = state_17604;
state_17604 = G__17649;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$state_machine__16190__auto__ = function(state_17604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16190__auto____1.call(this,state_17604);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16190__auto____0;
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16190__auto____1;
return cljs$core$async$state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___17632,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16293__auto__ = (function (){var statearr_17630 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_17630[(6)] = c__16291__auto___17632);

return statearr_17630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___17632,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17652 = arguments.length;
switch (G__17652) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16291__auto___17706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___17706,out){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___17706,out){
return (function (state_17684){
var state_val_17685 = (state_17684[(1)]);
if((state_val_17685 === (7))){
var inst_17664 = (state_17684[(7)]);
var inst_17663 = (state_17684[(8)]);
var inst_17663__$1 = (state_17684[(2)]);
var inst_17664__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17663__$1,(0),null);
var inst_17665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17663__$1,(1),null);
var inst_17666 = (inst_17664__$1 == null);
var state_17684__$1 = (function (){var statearr_17686 = state_17684;
(statearr_17686[(9)] = inst_17665);

(statearr_17686[(7)] = inst_17664__$1);

(statearr_17686[(8)] = inst_17663__$1);

return statearr_17686;
})();
if(cljs.core.truth_(inst_17666)){
var statearr_17687_17707 = state_17684__$1;
(statearr_17687_17707[(1)] = (8));

} else {
var statearr_17688_17708 = state_17684__$1;
(statearr_17688_17708[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (1))){
var inst_17653 = cljs.core.vec(chs);
var inst_17654 = inst_17653;
var state_17684__$1 = (function (){var statearr_17689 = state_17684;
(statearr_17689[(10)] = inst_17654);

return statearr_17689;
})();
var statearr_17690_17709 = state_17684__$1;
(statearr_17690_17709[(2)] = null);

(statearr_17690_17709[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (4))){
var inst_17654 = (state_17684[(10)]);
var state_17684__$1 = state_17684;
return cljs.core.async.ioc_alts_BANG_(state_17684__$1,(7),inst_17654);
} else {
if((state_val_17685 === (6))){
var inst_17680 = (state_17684[(2)]);
var state_17684__$1 = state_17684;
var statearr_17691_17710 = state_17684__$1;
(statearr_17691_17710[(2)] = inst_17680);

(statearr_17691_17710[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (3))){
var inst_17682 = (state_17684[(2)]);
var state_17684__$1 = state_17684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17684__$1,inst_17682);
} else {
if((state_val_17685 === (2))){
var inst_17654 = (state_17684[(10)]);
var inst_17656 = cljs.core.count(inst_17654);
var inst_17657 = (inst_17656 > (0));
var state_17684__$1 = state_17684;
if(cljs.core.truth_(inst_17657)){
var statearr_17693_17711 = state_17684__$1;
(statearr_17693_17711[(1)] = (4));

} else {
var statearr_17694_17712 = state_17684__$1;
(statearr_17694_17712[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (11))){
var inst_17654 = (state_17684[(10)]);
var inst_17673 = (state_17684[(2)]);
var tmp17692 = inst_17654;
var inst_17654__$1 = tmp17692;
var state_17684__$1 = (function (){var statearr_17695 = state_17684;
(statearr_17695[(10)] = inst_17654__$1);

(statearr_17695[(11)] = inst_17673);

return statearr_17695;
})();
var statearr_17696_17713 = state_17684__$1;
(statearr_17696_17713[(2)] = null);

(statearr_17696_17713[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (9))){
var inst_17664 = (state_17684[(7)]);
var state_17684__$1 = state_17684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17684__$1,(11),out,inst_17664);
} else {
if((state_val_17685 === (5))){
var inst_17678 = cljs.core.async.close_BANG_(out);
var state_17684__$1 = state_17684;
var statearr_17697_17714 = state_17684__$1;
(statearr_17697_17714[(2)] = inst_17678);

(statearr_17697_17714[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (10))){
var inst_17676 = (state_17684[(2)]);
var state_17684__$1 = state_17684;
var statearr_17698_17715 = state_17684__$1;
(statearr_17698_17715[(2)] = inst_17676);

(statearr_17698_17715[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17685 === (8))){
var inst_17654 = (state_17684[(10)]);
var inst_17665 = (state_17684[(9)]);
var inst_17664 = (state_17684[(7)]);
var inst_17663 = (state_17684[(8)]);
var inst_17668 = (function (){var cs = inst_17654;
var vec__17659 = inst_17663;
var v = inst_17664;
var c = inst_17665;
return ((function (cs,vec__17659,v,c,inst_17654,inst_17665,inst_17664,inst_17663,state_val_17685,c__16291__auto___17706,out){
return (function (p1__17650_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17650_SHARP_);
});
;})(cs,vec__17659,v,c,inst_17654,inst_17665,inst_17664,inst_17663,state_val_17685,c__16291__auto___17706,out))
})();
var inst_17669 = cljs.core.filterv(inst_17668,inst_17654);
var inst_17654__$1 = inst_17669;
var state_17684__$1 = (function (){var statearr_17699 = state_17684;
(statearr_17699[(10)] = inst_17654__$1);

return statearr_17699;
})();
var statearr_17700_17716 = state_17684__$1;
(statearr_17700_17716[(2)] = null);

(statearr_17700_17716[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16291__auto___17706,out))
;
return ((function (switch__16189__auto__,c__16291__auto___17706,out){
return (function() {
var cljs$core$async$state_machine__16190__auto__ = null;
var cljs$core$async$state_machine__16190__auto____0 = (function (){
var statearr_17701 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17701[(0)] = cljs$core$async$state_machine__16190__auto__);

(statearr_17701[(1)] = (1));

return statearr_17701;
});
var cljs$core$async$state_machine__16190__auto____1 = (function (state_17684){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_17684);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e17702){if((e17702 instanceof Object)){
var ex__16193__auto__ = e17702;
var statearr_17703_17717 = state_17684;
(statearr_17703_17717[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17684);

return cljs.core.cst$kw$recur;
} else {
throw e17702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__17718 = state_17684;
state_17684 = G__17718;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$state_machine__16190__auto__ = function(state_17684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16190__auto____1.call(this,state_17684);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16190__auto____0;
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16190__auto____1;
return cljs$core$async$state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___17706,out))
})();
var state__16293__auto__ = (function (){var statearr_17704 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_17704[(6)] = c__16291__auto___17706);

return statearr_17704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___17706,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17720 = arguments.length;
switch (G__17720) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16291__auto___17765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___17765,out){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___17765,out){
return (function (state_17744){
var state_val_17745 = (state_17744[(1)]);
if((state_val_17745 === (7))){
var inst_17726 = (state_17744[(7)]);
var inst_17726__$1 = (state_17744[(2)]);
var inst_17727 = (inst_17726__$1 == null);
var inst_17728 = cljs.core.not(inst_17727);
var state_17744__$1 = (function (){var statearr_17746 = state_17744;
(statearr_17746[(7)] = inst_17726__$1);

return statearr_17746;
})();
if(inst_17728){
var statearr_17747_17766 = state_17744__$1;
(statearr_17747_17766[(1)] = (8));

} else {
var statearr_17748_17767 = state_17744__$1;
(statearr_17748_17767[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17745 === (1))){
var inst_17721 = (0);
var state_17744__$1 = (function (){var statearr_17749 = state_17744;
(statearr_17749[(8)] = inst_17721);

return statearr_17749;
})();
var statearr_17750_17768 = state_17744__$1;
(statearr_17750_17768[(2)] = null);

(statearr_17750_17768[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17745 === (4))){
var state_17744__$1 = state_17744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17744__$1,(7),ch);
} else {
if((state_val_17745 === (6))){
var inst_17739 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
var statearr_17751_17769 = state_17744__$1;
(statearr_17751_17769[(2)] = inst_17739);

(statearr_17751_17769[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17745 === (3))){
var inst_17741 = (state_17744[(2)]);
var inst_17742 = cljs.core.async.close_BANG_(out);
var state_17744__$1 = (function (){var statearr_17752 = state_17744;
(statearr_17752[(9)] = inst_17741);

return statearr_17752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17744__$1,inst_17742);
} else {
if((state_val_17745 === (2))){
var inst_17721 = (state_17744[(8)]);
var inst_17723 = (inst_17721 < n);
var state_17744__$1 = state_17744;
if(cljs.core.truth_(inst_17723)){
var statearr_17753_17770 = state_17744__$1;
(statearr_17753_17770[(1)] = (4));

} else {
var statearr_17754_17771 = state_17744__$1;
(statearr_17754_17771[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17745 === (11))){
var inst_17721 = (state_17744[(8)]);
var inst_17731 = (state_17744[(2)]);
var inst_17732 = (inst_17721 + (1));
var inst_17721__$1 = inst_17732;
var state_17744__$1 = (function (){var statearr_17755 = state_17744;
(statearr_17755[(8)] = inst_17721__$1);

(statearr_17755[(10)] = inst_17731);

return statearr_17755;
})();
var statearr_17756_17772 = state_17744__$1;
(statearr_17756_17772[(2)] = null);

(statearr_17756_17772[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17745 === (9))){
var state_17744__$1 = state_17744;
var statearr_17757_17773 = state_17744__$1;
(statearr_17757_17773[(2)] = null);

(statearr_17757_17773[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17745 === (5))){
var state_17744__$1 = state_17744;
var statearr_17758_17774 = state_17744__$1;
(statearr_17758_17774[(2)] = null);

(statearr_17758_17774[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17745 === (10))){
var inst_17736 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
var statearr_17759_17775 = state_17744__$1;
(statearr_17759_17775[(2)] = inst_17736);

(statearr_17759_17775[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17745 === (8))){
var inst_17726 = (state_17744[(7)]);
var state_17744__$1 = state_17744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17744__$1,(11),out,inst_17726);
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
});})(c__16291__auto___17765,out))
;
return ((function (switch__16189__auto__,c__16291__auto___17765,out){
return (function() {
var cljs$core$async$state_machine__16190__auto__ = null;
var cljs$core$async$state_machine__16190__auto____0 = (function (){
var statearr_17760 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17760[(0)] = cljs$core$async$state_machine__16190__auto__);

(statearr_17760[(1)] = (1));

return statearr_17760;
});
var cljs$core$async$state_machine__16190__auto____1 = (function (state_17744){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_17744);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e17761){if((e17761 instanceof Object)){
var ex__16193__auto__ = e17761;
var statearr_17762_17776 = state_17744;
(statearr_17762_17776[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17744);

return cljs.core.cst$kw$recur;
} else {
throw e17761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__17777 = state_17744;
state_17744 = G__17777;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$state_machine__16190__auto__ = function(state_17744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16190__auto____1.call(this,state_17744);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16190__auto____0;
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16190__auto____1;
return cljs$core$async$state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___17765,out))
})();
var state__16293__auto__ = (function (){var statearr_17763 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_17763[(6)] = c__16291__auto___17765);

return statearr_17763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___17765,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17779 = (function (f,ch,meta17780){
this.f = f;
this.ch = ch;
this.meta17780 = meta17780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17781,meta17780__$1){
var self__ = this;
var _17781__$1 = this;
return (new cljs.core.async.t_cljs$core$async17779(self__.f,self__.ch,meta17780__$1));
});

cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17781){
var self__ = this;
var _17781__$1 = this;
return self__.meta17780;
});

cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17782 = (function (f,ch,meta17780,_,fn1,meta17783){
this.f = f;
this.ch = ch;
this.meta17780 = meta17780;
this._ = _;
this.fn1 = fn1;
this.meta17783 = meta17783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17784,meta17783__$1){
var self__ = this;
var _17784__$1 = this;
return (new cljs.core.async.t_cljs$core$async17782(self__.f,self__.ch,self__.meta17780,self__._,self__.fn1,meta17783__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17784){
var self__ = this;
var _17784__$1 = this;
return self__.meta17783;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17778_SHARP_){
var G__17785 = (((p1__17778_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17778_SHARP_) : self__.f.call(null,p1__17778_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17785) : f1.call(null,G__17785));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17782.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17780,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17779], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17783], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17782";

cljs.core.async.t_cljs$core$async17782.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async17782");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17782 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17782(f__$1,ch__$1,meta17780__$1,___$2,fn1__$1,meta17783){
return (new cljs.core.async.t_cljs$core$async17782(f__$1,ch__$1,meta17780__$1,___$2,fn1__$1,meta17783));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17782(self__.f,self__.ch,self__.meta17780,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7666__auto__ = ret;
if(cljs.core.truth_(and__7666__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__7666__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17786 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17786) : self__.f.call(null,G__17786));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17779.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17780], null);
});

cljs.core.async.t_cljs$core$async17779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17779";

cljs.core.async.t_cljs$core$async17779.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async17779");
});

cljs.core.async.__GT_t_cljs$core$async17779 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17779(f__$1,ch__$1,meta17780){
return (new cljs.core.async.t_cljs$core$async17779(f__$1,ch__$1,meta17780));
});

}

return (new cljs.core.async.t_cljs$core$async17779(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17787 = (function (f,ch,meta17788){
this.f = f;
this.ch = ch;
this.meta17788 = meta17788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17789,meta17788__$1){
var self__ = this;
var _17789__$1 = this;
return (new cljs.core.async.t_cljs$core$async17787(self__.f,self__.ch,meta17788__$1));
});

cljs.core.async.t_cljs$core$async17787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17789){
var self__ = this;
var _17789__$1 = this;
return self__.meta17788;
});

cljs.core.async.t_cljs$core$async17787.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17787.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17787.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17788], null);
});

cljs.core.async.t_cljs$core$async17787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17787";

cljs.core.async.t_cljs$core$async17787.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async17787");
});

cljs.core.async.__GT_t_cljs$core$async17787 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17787(f__$1,ch__$1,meta17788){
return (new cljs.core.async.t_cljs$core$async17787(f__$1,ch__$1,meta17788));
});

}

return (new cljs.core.async.t_cljs$core$async17787(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17790 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17790 = (function (p,ch,meta17791){
this.p = p;
this.ch = ch;
this.meta17791 = meta17791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17792,meta17791__$1){
var self__ = this;
var _17792__$1 = this;
return (new cljs.core.async.t_cljs$core$async17790(self__.p,self__.ch,meta17791__$1));
});

cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17792){
var self__ = this;
var _17792__$1 = this;
return self__.meta17791;
});

cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17790.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17791], null);
});

cljs.core.async.t_cljs$core$async17790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17790";

cljs.core.async.t_cljs$core$async17790.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async17790");
});

cljs.core.async.__GT_t_cljs$core$async17790 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17790(p__$1,ch__$1,meta17791){
return (new cljs.core.async.t_cljs$core$async17790(p__$1,ch__$1,meta17791));
});

}

return (new cljs.core.async.t_cljs$core$async17790(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17794 = arguments.length;
switch (G__17794) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16291__auto___17834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___17834,out){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___17834,out){
return (function (state_17815){
var state_val_17816 = (state_17815[(1)]);
if((state_val_17816 === (7))){
var inst_17811 = (state_17815[(2)]);
var state_17815__$1 = state_17815;
var statearr_17817_17835 = state_17815__$1;
(statearr_17817_17835[(2)] = inst_17811);

(statearr_17817_17835[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17816 === (1))){
var state_17815__$1 = state_17815;
var statearr_17818_17836 = state_17815__$1;
(statearr_17818_17836[(2)] = null);

(statearr_17818_17836[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17816 === (4))){
var inst_17797 = (state_17815[(7)]);
var inst_17797__$1 = (state_17815[(2)]);
var inst_17798 = (inst_17797__$1 == null);
var state_17815__$1 = (function (){var statearr_17819 = state_17815;
(statearr_17819[(7)] = inst_17797__$1);

return statearr_17819;
})();
if(cljs.core.truth_(inst_17798)){
var statearr_17820_17837 = state_17815__$1;
(statearr_17820_17837[(1)] = (5));

} else {
var statearr_17821_17838 = state_17815__$1;
(statearr_17821_17838[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17816 === (6))){
var inst_17797 = (state_17815[(7)]);
var inst_17802 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17797) : p.call(null,inst_17797));
var state_17815__$1 = state_17815;
if(cljs.core.truth_(inst_17802)){
var statearr_17822_17839 = state_17815__$1;
(statearr_17822_17839[(1)] = (8));

} else {
var statearr_17823_17840 = state_17815__$1;
(statearr_17823_17840[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17816 === (3))){
var inst_17813 = (state_17815[(2)]);
var state_17815__$1 = state_17815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17815__$1,inst_17813);
} else {
if((state_val_17816 === (2))){
var state_17815__$1 = state_17815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17815__$1,(4),ch);
} else {
if((state_val_17816 === (11))){
var inst_17805 = (state_17815[(2)]);
var state_17815__$1 = state_17815;
var statearr_17824_17841 = state_17815__$1;
(statearr_17824_17841[(2)] = inst_17805);

(statearr_17824_17841[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17816 === (9))){
var state_17815__$1 = state_17815;
var statearr_17825_17842 = state_17815__$1;
(statearr_17825_17842[(2)] = null);

(statearr_17825_17842[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17816 === (5))){
var inst_17800 = cljs.core.async.close_BANG_(out);
var state_17815__$1 = state_17815;
var statearr_17826_17843 = state_17815__$1;
(statearr_17826_17843[(2)] = inst_17800);

(statearr_17826_17843[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17816 === (10))){
var inst_17808 = (state_17815[(2)]);
var state_17815__$1 = (function (){var statearr_17827 = state_17815;
(statearr_17827[(8)] = inst_17808);

return statearr_17827;
})();
var statearr_17828_17844 = state_17815__$1;
(statearr_17828_17844[(2)] = null);

(statearr_17828_17844[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17816 === (8))){
var inst_17797 = (state_17815[(7)]);
var state_17815__$1 = state_17815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17815__$1,(11),out,inst_17797);
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
});})(c__16291__auto___17834,out))
;
return ((function (switch__16189__auto__,c__16291__auto___17834,out){
return (function() {
var cljs$core$async$state_machine__16190__auto__ = null;
var cljs$core$async$state_machine__16190__auto____0 = (function (){
var statearr_17829 = [null,null,null,null,null,null,null,null,null];
(statearr_17829[(0)] = cljs$core$async$state_machine__16190__auto__);

(statearr_17829[(1)] = (1));

return statearr_17829;
});
var cljs$core$async$state_machine__16190__auto____1 = (function (state_17815){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_17815);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e17830){if((e17830 instanceof Object)){
var ex__16193__auto__ = e17830;
var statearr_17831_17845 = state_17815;
(statearr_17831_17845[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17815);

return cljs.core.cst$kw$recur;
} else {
throw e17830;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__17846 = state_17815;
state_17815 = G__17846;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$state_machine__16190__auto__ = function(state_17815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16190__auto____1.call(this,state_17815);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16190__auto____0;
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16190__auto____1;
return cljs$core$async$state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___17834,out))
})();
var state__16293__auto__ = (function (){var statearr_17832 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_17832[(6)] = c__16291__auto___17834);

return statearr_17832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___17834,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17848 = arguments.length;
switch (G__17848) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto__){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto__){
return (function (state_17911){
var state_val_17912 = (state_17911[(1)]);
if((state_val_17912 === (7))){
var inst_17907 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17913_17951 = state_17911__$1;
(statearr_17913_17951[(2)] = inst_17907);

(statearr_17913_17951[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (20))){
var inst_17877 = (state_17911[(7)]);
var inst_17888 = (state_17911[(2)]);
var inst_17889 = cljs.core.next(inst_17877);
var inst_17863 = inst_17889;
var inst_17864 = null;
var inst_17865 = (0);
var inst_17866 = (0);
var state_17911__$1 = (function (){var statearr_17914 = state_17911;
(statearr_17914[(8)] = inst_17864);

(statearr_17914[(9)] = inst_17865);

(statearr_17914[(10)] = inst_17866);

(statearr_17914[(11)] = inst_17888);

(statearr_17914[(12)] = inst_17863);

return statearr_17914;
})();
var statearr_17915_17952 = state_17911__$1;
(statearr_17915_17952[(2)] = null);

(statearr_17915_17952[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (1))){
var state_17911__$1 = state_17911;
var statearr_17916_17953 = state_17911__$1;
(statearr_17916_17953[(2)] = null);

(statearr_17916_17953[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (4))){
var inst_17852 = (state_17911[(13)]);
var inst_17852__$1 = (state_17911[(2)]);
var inst_17853 = (inst_17852__$1 == null);
var state_17911__$1 = (function (){var statearr_17917 = state_17911;
(statearr_17917[(13)] = inst_17852__$1);

return statearr_17917;
})();
if(cljs.core.truth_(inst_17853)){
var statearr_17918_17954 = state_17911__$1;
(statearr_17918_17954[(1)] = (5));

} else {
var statearr_17919_17955 = state_17911__$1;
(statearr_17919_17955[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (15))){
var state_17911__$1 = state_17911;
var statearr_17923_17956 = state_17911__$1;
(statearr_17923_17956[(2)] = null);

(statearr_17923_17956[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (21))){
var state_17911__$1 = state_17911;
var statearr_17924_17957 = state_17911__$1;
(statearr_17924_17957[(2)] = null);

(statearr_17924_17957[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (13))){
var inst_17864 = (state_17911[(8)]);
var inst_17865 = (state_17911[(9)]);
var inst_17866 = (state_17911[(10)]);
var inst_17863 = (state_17911[(12)]);
var inst_17873 = (state_17911[(2)]);
var inst_17874 = (inst_17866 + (1));
var tmp17920 = inst_17864;
var tmp17921 = inst_17865;
var tmp17922 = inst_17863;
var inst_17863__$1 = tmp17922;
var inst_17864__$1 = tmp17920;
var inst_17865__$1 = tmp17921;
var inst_17866__$1 = inst_17874;
var state_17911__$1 = (function (){var statearr_17925 = state_17911;
(statearr_17925[(8)] = inst_17864__$1);

(statearr_17925[(9)] = inst_17865__$1);

(statearr_17925[(10)] = inst_17866__$1);

(statearr_17925[(14)] = inst_17873);

(statearr_17925[(12)] = inst_17863__$1);

return statearr_17925;
})();
var statearr_17926_17958 = state_17911__$1;
(statearr_17926_17958[(2)] = null);

(statearr_17926_17958[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (22))){
var state_17911__$1 = state_17911;
var statearr_17927_17959 = state_17911__$1;
(statearr_17927_17959[(2)] = null);

(statearr_17927_17959[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (6))){
var inst_17852 = (state_17911[(13)]);
var inst_17861 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17852) : f.call(null,inst_17852));
var inst_17862 = cljs.core.seq(inst_17861);
var inst_17863 = inst_17862;
var inst_17864 = null;
var inst_17865 = (0);
var inst_17866 = (0);
var state_17911__$1 = (function (){var statearr_17928 = state_17911;
(statearr_17928[(8)] = inst_17864);

(statearr_17928[(9)] = inst_17865);

(statearr_17928[(10)] = inst_17866);

(statearr_17928[(12)] = inst_17863);

return statearr_17928;
})();
var statearr_17929_17960 = state_17911__$1;
(statearr_17929_17960[(2)] = null);

(statearr_17929_17960[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (17))){
var inst_17877 = (state_17911[(7)]);
var inst_17881 = cljs.core.chunk_first(inst_17877);
var inst_17882 = cljs.core.chunk_rest(inst_17877);
var inst_17883 = cljs.core.count(inst_17881);
var inst_17863 = inst_17882;
var inst_17864 = inst_17881;
var inst_17865 = inst_17883;
var inst_17866 = (0);
var state_17911__$1 = (function (){var statearr_17930 = state_17911;
(statearr_17930[(8)] = inst_17864);

(statearr_17930[(9)] = inst_17865);

(statearr_17930[(10)] = inst_17866);

(statearr_17930[(12)] = inst_17863);

return statearr_17930;
})();
var statearr_17931_17961 = state_17911__$1;
(statearr_17931_17961[(2)] = null);

(statearr_17931_17961[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (3))){
var inst_17909 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17911__$1,inst_17909);
} else {
if((state_val_17912 === (12))){
var inst_17897 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17932_17962 = state_17911__$1;
(statearr_17932_17962[(2)] = inst_17897);

(statearr_17932_17962[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (2))){
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17911__$1,(4),in$);
} else {
if((state_val_17912 === (23))){
var inst_17905 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17933_17963 = state_17911__$1;
(statearr_17933_17963[(2)] = inst_17905);

(statearr_17933_17963[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (19))){
var inst_17892 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17934_17964 = state_17911__$1;
(statearr_17934_17964[(2)] = inst_17892);

(statearr_17934_17964[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (11))){
var inst_17877 = (state_17911[(7)]);
var inst_17863 = (state_17911[(12)]);
var inst_17877__$1 = cljs.core.seq(inst_17863);
var state_17911__$1 = (function (){var statearr_17935 = state_17911;
(statearr_17935[(7)] = inst_17877__$1);

return statearr_17935;
})();
if(inst_17877__$1){
var statearr_17936_17965 = state_17911__$1;
(statearr_17936_17965[(1)] = (14));

} else {
var statearr_17937_17966 = state_17911__$1;
(statearr_17937_17966[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (9))){
var inst_17899 = (state_17911[(2)]);
var inst_17900 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17911__$1 = (function (){var statearr_17938 = state_17911;
(statearr_17938[(15)] = inst_17899);

return statearr_17938;
})();
if(cljs.core.truth_(inst_17900)){
var statearr_17939_17967 = state_17911__$1;
(statearr_17939_17967[(1)] = (21));

} else {
var statearr_17940_17968 = state_17911__$1;
(statearr_17940_17968[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (5))){
var inst_17855 = cljs.core.async.close_BANG_(out);
var state_17911__$1 = state_17911;
var statearr_17941_17969 = state_17911__$1;
(statearr_17941_17969[(2)] = inst_17855);

(statearr_17941_17969[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (14))){
var inst_17877 = (state_17911[(7)]);
var inst_17879 = cljs.core.chunked_seq_QMARK_(inst_17877);
var state_17911__$1 = state_17911;
if(inst_17879){
var statearr_17942_17970 = state_17911__$1;
(statearr_17942_17970[(1)] = (17));

} else {
var statearr_17943_17971 = state_17911__$1;
(statearr_17943_17971[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (16))){
var inst_17895 = (state_17911[(2)]);
var state_17911__$1 = state_17911;
var statearr_17944_17972 = state_17911__$1;
(statearr_17944_17972[(2)] = inst_17895);

(statearr_17944_17972[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17912 === (10))){
var inst_17864 = (state_17911[(8)]);
var inst_17866 = (state_17911[(10)]);
var inst_17871 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17864,inst_17866);
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17911__$1,(13),out,inst_17871);
} else {
if((state_val_17912 === (18))){
var inst_17877 = (state_17911[(7)]);
var inst_17886 = cljs.core.first(inst_17877);
var state_17911__$1 = state_17911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17911__$1,(20),out,inst_17886);
} else {
if((state_val_17912 === (8))){
var inst_17865 = (state_17911[(9)]);
var inst_17866 = (state_17911[(10)]);
var inst_17868 = (inst_17866 < inst_17865);
var inst_17869 = inst_17868;
var state_17911__$1 = state_17911;
if(cljs.core.truth_(inst_17869)){
var statearr_17945_17973 = state_17911__$1;
(statearr_17945_17973[(1)] = (10));

} else {
var statearr_17946_17974 = state_17911__$1;
(statearr_17946_17974[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16291__auto__))
;
return ((function (switch__16189__auto__,c__16291__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16190__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16190__auto____0 = (function (){
var statearr_17947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17947[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16190__auto__);

(statearr_17947[(1)] = (1));

return statearr_17947;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16190__auto____1 = (function (state_17911){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_17911);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e17948){if((e17948 instanceof Object)){
var ex__16193__auto__ = e17948;
var statearr_17949_17975 = state_17911;
(statearr_17949_17975[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17911);

return cljs.core.cst$kw$recur;
} else {
throw e17948;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__17976 = state_17911;
state_17911 = G__17976;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16190__auto__ = function(state_17911){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16190__auto____1.call(this,state_17911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16190__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16190__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto__))
})();
var state__16293__auto__ = (function (){var statearr_17950 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_17950[(6)] = c__16291__auto__);

return statearr_17950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto__))
);

return c__16291__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17978 = arguments.length;
switch (G__17978) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17981 = arguments.length;
switch (G__17981) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17984 = arguments.length;
switch (G__17984) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16291__auto___18031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___18031,out){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___18031,out){
return (function (state_18008){
var state_val_18009 = (state_18008[(1)]);
if((state_val_18009 === (7))){
var inst_18003 = (state_18008[(2)]);
var state_18008__$1 = state_18008;
var statearr_18010_18032 = state_18008__$1;
(statearr_18010_18032[(2)] = inst_18003);

(statearr_18010_18032[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18009 === (1))){
var inst_17985 = null;
var state_18008__$1 = (function (){var statearr_18011 = state_18008;
(statearr_18011[(7)] = inst_17985);

return statearr_18011;
})();
var statearr_18012_18033 = state_18008__$1;
(statearr_18012_18033[(2)] = null);

(statearr_18012_18033[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18009 === (4))){
var inst_17988 = (state_18008[(8)]);
var inst_17988__$1 = (state_18008[(2)]);
var inst_17989 = (inst_17988__$1 == null);
var inst_17990 = cljs.core.not(inst_17989);
var state_18008__$1 = (function (){var statearr_18013 = state_18008;
(statearr_18013[(8)] = inst_17988__$1);

return statearr_18013;
})();
if(inst_17990){
var statearr_18014_18034 = state_18008__$1;
(statearr_18014_18034[(1)] = (5));

} else {
var statearr_18015_18035 = state_18008__$1;
(statearr_18015_18035[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18009 === (6))){
var state_18008__$1 = state_18008;
var statearr_18016_18036 = state_18008__$1;
(statearr_18016_18036[(2)] = null);

(statearr_18016_18036[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18009 === (3))){
var inst_18005 = (state_18008[(2)]);
var inst_18006 = cljs.core.async.close_BANG_(out);
var state_18008__$1 = (function (){var statearr_18017 = state_18008;
(statearr_18017[(9)] = inst_18005);

return statearr_18017;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18008__$1,inst_18006);
} else {
if((state_val_18009 === (2))){
var state_18008__$1 = state_18008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18008__$1,(4),ch);
} else {
if((state_val_18009 === (11))){
var inst_17988 = (state_18008[(8)]);
var inst_17997 = (state_18008[(2)]);
var inst_17985 = inst_17988;
var state_18008__$1 = (function (){var statearr_18018 = state_18008;
(statearr_18018[(10)] = inst_17997);

(statearr_18018[(7)] = inst_17985);

return statearr_18018;
})();
var statearr_18019_18037 = state_18008__$1;
(statearr_18019_18037[(2)] = null);

(statearr_18019_18037[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18009 === (9))){
var inst_17988 = (state_18008[(8)]);
var state_18008__$1 = state_18008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18008__$1,(11),out,inst_17988);
} else {
if((state_val_18009 === (5))){
var inst_17985 = (state_18008[(7)]);
var inst_17988 = (state_18008[(8)]);
var inst_17992 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17988,inst_17985);
var state_18008__$1 = state_18008;
if(inst_17992){
var statearr_18021_18038 = state_18008__$1;
(statearr_18021_18038[(1)] = (8));

} else {
var statearr_18022_18039 = state_18008__$1;
(statearr_18022_18039[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18009 === (10))){
var inst_18000 = (state_18008[(2)]);
var state_18008__$1 = state_18008;
var statearr_18023_18040 = state_18008__$1;
(statearr_18023_18040[(2)] = inst_18000);

(statearr_18023_18040[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18009 === (8))){
var inst_17985 = (state_18008[(7)]);
var tmp18020 = inst_17985;
var inst_17985__$1 = tmp18020;
var state_18008__$1 = (function (){var statearr_18024 = state_18008;
(statearr_18024[(7)] = inst_17985__$1);

return statearr_18024;
})();
var statearr_18025_18041 = state_18008__$1;
(statearr_18025_18041[(2)] = null);

(statearr_18025_18041[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16291__auto___18031,out))
;
return ((function (switch__16189__auto__,c__16291__auto___18031,out){
return (function() {
var cljs$core$async$state_machine__16190__auto__ = null;
var cljs$core$async$state_machine__16190__auto____0 = (function (){
var statearr_18026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18026[(0)] = cljs$core$async$state_machine__16190__auto__);

(statearr_18026[(1)] = (1));

return statearr_18026;
});
var cljs$core$async$state_machine__16190__auto____1 = (function (state_18008){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_18008);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e18027){if((e18027 instanceof Object)){
var ex__16193__auto__ = e18027;
var statearr_18028_18042 = state_18008;
(statearr_18028_18042[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18008);

return cljs.core.cst$kw$recur;
} else {
throw e18027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__18043 = state_18008;
state_18008 = G__18043;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$state_machine__16190__auto__ = function(state_18008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16190__auto____1.call(this,state_18008);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16190__auto____0;
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16190__auto____1;
return cljs$core$async$state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___18031,out))
})();
var state__16293__auto__ = (function (){var statearr_18029 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_18029[(6)] = c__16291__auto___18031);

return statearr_18029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___18031,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18045 = arguments.length;
switch (G__18045) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16291__auto___18111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___18111,out){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___18111,out){
return (function (state_18083){
var state_val_18084 = (state_18083[(1)]);
if((state_val_18084 === (7))){
var inst_18079 = (state_18083[(2)]);
var state_18083__$1 = state_18083;
var statearr_18085_18112 = state_18083__$1;
(statearr_18085_18112[(2)] = inst_18079);

(statearr_18085_18112[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (1))){
var inst_18046 = (new Array(n));
var inst_18047 = inst_18046;
var inst_18048 = (0);
var state_18083__$1 = (function (){var statearr_18086 = state_18083;
(statearr_18086[(7)] = inst_18047);

(statearr_18086[(8)] = inst_18048);

return statearr_18086;
})();
var statearr_18087_18113 = state_18083__$1;
(statearr_18087_18113[(2)] = null);

(statearr_18087_18113[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (4))){
var inst_18051 = (state_18083[(9)]);
var inst_18051__$1 = (state_18083[(2)]);
var inst_18052 = (inst_18051__$1 == null);
var inst_18053 = cljs.core.not(inst_18052);
var state_18083__$1 = (function (){var statearr_18088 = state_18083;
(statearr_18088[(9)] = inst_18051__$1);

return statearr_18088;
})();
if(inst_18053){
var statearr_18089_18114 = state_18083__$1;
(statearr_18089_18114[(1)] = (5));

} else {
var statearr_18090_18115 = state_18083__$1;
(statearr_18090_18115[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (15))){
var inst_18073 = (state_18083[(2)]);
var state_18083__$1 = state_18083;
var statearr_18091_18116 = state_18083__$1;
(statearr_18091_18116[(2)] = inst_18073);

(statearr_18091_18116[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (13))){
var state_18083__$1 = state_18083;
var statearr_18092_18117 = state_18083__$1;
(statearr_18092_18117[(2)] = null);

(statearr_18092_18117[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (6))){
var inst_18048 = (state_18083[(8)]);
var inst_18069 = (inst_18048 > (0));
var state_18083__$1 = state_18083;
if(cljs.core.truth_(inst_18069)){
var statearr_18093_18118 = state_18083__$1;
(statearr_18093_18118[(1)] = (12));

} else {
var statearr_18094_18119 = state_18083__$1;
(statearr_18094_18119[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (3))){
var inst_18081 = (state_18083[(2)]);
var state_18083__$1 = state_18083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18083__$1,inst_18081);
} else {
if((state_val_18084 === (12))){
var inst_18047 = (state_18083[(7)]);
var inst_18071 = cljs.core.vec(inst_18047);
var state_18083__$1 = state_18083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18083__$1,(15),out,inst_18071);
} else {
if((state_val_18084 === (2))){
var state_18083__$1 = state_18083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18083__$1,(4),ch);
} else {
if((state_val_18084 === (11))){
var inst_18063 = (state_18083[(2)]);
var inst_18064 = (new Array(n));
var inst_18047 = inst_18064;
var inst_18048 = (0);
var state_18083__$1 = (function (){var statearr_18095 = state_18083;
(statearr_18095[(7)] = inst_18047);

(statearr_18095[(10)] = inst_18063);

(statearr_18095[(8)] = inst_18048);

return statearr_18095;
})();
var statearr_18096_18120 = state_18083__$1;
(statearr_18096_18120[(2)] = null);

(statearr_18096_18120[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (9))){
var inst_18047 = (state_18083[(7)]);
var inst_18061 = cljs.core.vec(inst_18047);
var state_18083__$1 = state_18083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18083__$1,(11),out,inst_18061);
} else {
if((state_val_18084 === (5))){
var inst_18047 = (state_18083[(7)]);
var inst_18051 = (state_18083[(9)]);
var inst_18048 = (state_18083[(8)]);
var inst_18056 = (state_18083[(11)]);
var inst_18055 = (inst_18047[inst_18048] = inst_18051);
var inst_18056__$1 = (inst_18048 + (1));
var inst_18057 = (inst_18056__$1 < n);
var state_18083__$1 = (function (){var statearr_18097 = state_18083;
(statearr_18097[(12)] = inst_18055);

(statearr_18097[(11)] = inst_18056__$1);

return statearr_18097;
})();
if(cljs.core.truth_(inst_18057)){
var statearr_18098_18121 = state_18083__$1;
(statearr_18098_18121[(1)] = (8));

} else {
var statearr_18099_18122 = state_18083__$1;
(statearr_18099_18122[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (14))){
var inst_18076 = (state_18083[(2)]);
var inst_18077 = cljs.core.async.close_BANG_(out);
var state_18083__$1 = (function (){var statearr_18101 = state_18083;
(statearr_18101[(13)] = inst_18076);

return statearr_18101;
})();
var statearr_18102_18123 = state_18083__$1;
(statearr_18102_18123[(2)] = inst_18077);

(statearr_18102_18123[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (10))){
var inst_18067 = (state_18083[(2)]);
var state_18083__$1 = state_18083;
var statearr_18103_18124 = state_18083__$1;
(statearr_18103_18124[(2)] = inst_18067);

(statearr_18103_18124[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18084 === (8))){
var inst_18047 = (state_18083[(7)]);
var inst_18056 = (state_18083[(11)]);
var tmp18100 = inst_18047;
var inst_18047__$1 = tmp18100;
var inst_18048 = inst_18056;
var state_18083__$1 = (function (){var statearr_18104 = state_18083;
(statearr_18104[(7)] = inst_18047__$1);

(statearr_18104[(8)] = inst_18048);

return statearr_18104;
})();
var statearr_18105_18125 = state_18083__$1;
(statearr_18105_18125[(2)] = null);

(statearr_18105_18125[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16291__auto___18111,out))
;
return ((function (switch__16189__auto__,c__16291__auto___18111,out){
return (function() {
var cljs$core$async$state_machine__16190__auto__ = null;
var cljs$core$async$state_machine__16190__auto____0 = (function (){
var statearr_18106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18106[(0)] = cljs$core$async$state_machine__16190__auto__);

(statearr_18106[(1)] = (1));

return statearr_18106;
});
var cljs$core$async$state_machine__16190__auto____1 = (function (state_18083){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_18083);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e18107){if((e18107 instanceof Object)){
var ex__16193__auto__ = e18107;
var statearr_18108_18126 = state_18083;
(statearr_18108_18126[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18083);

return cljs.core.cst$kw$recur;
} else {
throw e18107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__18127 = state_18083;
state_18083 = G__18127;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$state_machine__16190__auto__ = function(state_18083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16190__auto____1.call(this,state_18083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16190__auto____0;
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16190__auto____1;
return cljs$core$async$state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___18111,out))
})();
var state__16293__auto__ = (function (){var statearr_18109 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_18109[(6)] = c__16291__auto___18111);

return statearr_18109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___18111,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18129 = arguments.length;
switch (G__18129) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16291__auto___18199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___18199,out){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___18199,out){
return (function (state_18171){
var state_val_18172 = (state_18171[(1)]);
if((state_val_18172 === (7))){
var inst_18167 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
var statearr_18173_18200 = state_18171__$1;
(statearr_18173_18200[(2)] = inst_18167);

(statearr_18173_18200[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (1))){
var inst_18130 = [];
var inst_18131 = inst_18130;
var inst_18132 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18171__$1 = (function (){var statearr_18174 = state_18171;
(statearr_18174[(7)] = inst_18131);

(statearr_18174[(8)] = inst_18132);

return statearr_18174;
})();
var statearr_18175_18201 = state_18171__$1;
(statearr_18175_18201[(2)] = null);

(statearr_18175_18201[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (4))){
var inst_18135 = (state_18171[(9)]);
var inst_18135__$1 = (state_18171[(2)]);
var inst_18136 = (inst_18135__$1 == null);
var inst_18137 = cljs.core.not(inst_18136);
var state_18171__$1 = (function (){var statearr_18176 = state_18171;
(statearr_18176[(9)] = inst_18135__$1);

return statearr_18176;
})();
if(inst_18137){
var statearr_18177_18202 = state_18171__$1;
(statearr_18177_18202[(1)] = (5));

} else {
var statearr_18178_18203 = state_18171__$1;
(statearr_18178_18203[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (15))){
var inst_18161 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
var statearr_18179_18204 = state_18171__$1;
(statearr_18179_18204[(2)] = inst_18161);

(statearr_18179_18204[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (13))){
var state_18171__$1 = state_18171;
var statearr_18180_18205 = state_18171__$1;
(statearr_18180_18205[(2)] = null);

(statearr_18180_18205[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (6))){
var inst_18131 = (state_18171[(7)]);
var inst_18156 = inst_18131.length;
var inst_18157 = (inst_18156 > (0));
var state_18171__$1 = state_18171;
if(cljs.core.truth_(inst_18157)){
var statearr_18181_18206 = state_18171__$1;
(statearr_18181_18206[(1)] = (12));

} else {
var statearr_18182_18207 = state_18171__$1;
(statearr_18182_18207[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (3))){
var inst_18169 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18171__$1,inst_18169);
} else {
if((state_val_18172 === (12))){
var inst_18131 = (state_18171[(7)]);
var inst_18159 = cljs.core.vec(inst_18131);
var state_18171__$1 = state_18171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18171__$1,(15),out,inst_18159);
} else {
if((state_val_18172 === (2))){
var state_18171__$1 = state_18171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18171__$1,(4),ch);
} else {
if((state_val_18172 === (11))){
var inst_18139 = (state_18171[(10)]);
var inst_18135 = (state_18171[(9)]);
var inst_18149 = (state_18171[(2)]);
var inst_18150 = [];
var inst_18151 = inst_18150.push(inst_18135);
var inst_18131 = inst_18150;
var inst_18132 = inst_18139;
var state_18171__$1 = (function (){var statearr_18183 = state_18171;
(statearr_18183[(7)] = inst_18131);

(statearr_18183[(11)] = inst_18151);

(statearr_18183[(8)] = inst_18132);

(statearr_18183[(12)] = inst_18149);

return statearr_18183;
})();
var statearr_18184_18208 = state_18171__$1;
(statearr_18184_18208[(2)] = null);

(statearr_18184_18208[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (9))){
var inst_18131 = (state_18171[(7)]);
var inst_18147 = cljs.core.vec(inst_18131);
var state_18171__$1 = state_18171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18171__$1,(11),out,inst_18147);
} else {
if((state_val_18172 === (5))){
var inst_18139 = (state_18171[(10)]);
var inst_18132 = (state_18171[(8)]);
var inst_18135 = (state_18171[(9)]);
var inst_18139__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18135) : f.call(null,inst_18135));
var inst_18140 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18139__$1,inst_18132);
var inst_18141 = cljs.core.keyword_identical_QMARK_(inst_18132,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18142 = (inst_18140) || (inst_18141);
var state_18171__$1 = (function (){var statearr_18185 = state_18171;
(statearr_18185[(10)] = inst_18139__$1);

return statearr_18185;
})();
if(cljs.core.truth_(inst_18142)){
var statearr_18186_18209 = state_18171__$1;
(statearr_18186_18209[(1)] = (8));

} else {
var statearr_18187_18210 = state_18171__$1;
(statearr_18187_18210[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (14))){
var inst_18164 = (state_18171[(2)]);
var inst_18165 = cljs.core.async.close_BANG_(out);
var state_18171__$1 = (function (){var statearr_18189 = state_18171;
(statearr_18189[(13)] = inst_18164);

return statearr_18189;
})();
var statearr_18190_18211 = state_18171__$1;
(statearr_18190_18211[(2)] = inst_18165);

(statearr_18190_18211[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (10))){
var inst_18154 = (state_18171[(2)]);
var state_18171__$1 = state_18171;
var statearr_18191_18212 = state_18171__$1;
(statearr_18191_18212[(2)] = inst_18154);

(statearr_18191_18212[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18172 === (8))){
var inst_18131 = (state_18171[(7)]);
var inst_18139 = (state_18171[(10)]);
var inst_18135 = (state_18171[(9)]);
var inst_18144 = inst_18131.push(inst_18135);
var tmp18188 = inst_18131;
var inst_18131__$1 = tmp18188;
var inst_18132 = inst_18139;
var state_18171__$1 = (function (){var statearr_18192 = state_18171;
(statearr_18192[(7)] = inst_18131__$1);

(statearr_18192[(14)] = inst_18144);

(statearr_18192[(8)] = inst_18132);

return statearr_18192;
})();
var statearr_18193_18213 = state_18171__$1;
(statearr_18193_18213[(2)] = null);

(statearr_18193_18213[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16291__auto___18199,out))
;
return ((function (switch__16189__auto__,c__16291__auto___18199,out){
return (function() {
var cljs$core$async$state_machine__16190__auto__ = null;
var cljs$core$async$state_machine__16190__auto____0 = (function (){
var statearr_18194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18194[(0)] = cljs$core$async$state_machine__16190__auto__);

(statearr_18194[(1)] = (1));

return statearr_18194;
});
var cljs$core$async$state_machine__16190__auto____1 = (function (state_18171){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_18171);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e18195){if((e18195 instanceof Object)){
var ex__16193__auto__ = e18195;
var statearr_18196_18214 = state_18171;
(statearr_18196_18214[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18171);

return cljs.core.cst$kw$recur;
} else {
throw e18195;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__18215 = state_18171;
state_18171 = G__18215;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs$core$async$state_machine__16190__auto__ = function(state_18171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16190__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16190__auto____1.call(this,state_18171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16190__auto____0;
cljs$core$async$state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16190__auto____1;
return cljs$core$async$state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___18199,out))
})();
var state__16293__auto__ = (function (){var statearr_18197 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_18197[(6)] = c__16291__auto___18199);

return statearr_18197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___18199,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

