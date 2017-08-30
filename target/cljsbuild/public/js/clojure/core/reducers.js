// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.reducers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
clojure.core.reducers.fjtask = (function clojure$core$reducers$fjtask(f){
return f;
});
clojure.core.reducers.fjinvoke = (function clojure$core$reducers$fjinvoke(f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
clojure.core.reducers.fjfork = (function clojure$core$reducers$fjfork(task){
return task;
});
clojure.core.reducers.fjjoin = (function clojure$core$reducers$fjjoin(task){
return (task.cljs$core$IFn$_invoke$arity$0 ? task.cljs$core$IFn$_invoke$arity$0() : task.call(null));
});
/**
 * Like core/reduce except:
 *   When init is not provided, (f) is used.
 *   Maps are reduced with reduce-kv
 */
clojure.core.reducers.reduce = (function clojure$core$reducers$reduce(var_args){
var G__20367 = arguments.length;
switch (G__20367) {
case 2:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(f,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),coll);
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,coll){
if(cljs.core.map_QMARK_(coll)){
return cljs.core._kv_reduce(coll,f,init);
} else {
if((coll == null)){
return init;
} else {
if(cljs.core.array_QMARK_(coll)){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,init);
} else {
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,init);

}
}
}
});

clojure.core.reducers.reduce.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
clojure.core.reducers.CollFold = function(){};

clojure.core.reducers.coll_fold = (function clojure$core$reducers$coll_fold(coll,n,combinef,reducef){
if((!((coll == null))) && (!((coll.clojure$core$reducers$CollFold$coll_fold$arity$4 == null)))){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4(coll,n,combinef,reducef);
} else {
var x__8397__auto__ = (((coll == null))?null:coll);
var m__8398__auto__ = (clojure.core.reducers.coll_fold[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$4(coll,n,combinef,reducef) : m__8398__auto__.call(null,coll,n,combinef,reducef));
} else {
var m__8398__auto____$1 = (clojure.core.reducers.coll_fold["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$4(coll,n,combinef,reducef) : m__8398__auto____$1.call(null,coll,n,combinef,reducef));
} else {
throw cljs.core.missing_protocol("CollFold.coll-fold",coll);
}
}
}
});

/**
 * Reduces a collection using a (potentially parallel) reduce-combine
 *   strategy. The collection is partitioned into groups of approximately
 *   n (default 512), each of which is reduced with reducef (with a seed
 *   value obtained by calling (combinef) with no arguments). The results
 *   of these reductions are then reduced with combinef (default
 *   reducef). combinef must be associative, and, when called with no
 *   arguments, (combinef) must produce its identity element. These
 *   operations may be performed in parallel, but the results will
 *   preserve order.
 * 
 *   Note: Performing operations in parallel is currently not implemented.
 */
clojure.core.reducers.fold = (function clojure$core$reducers$fold(var_args){
var G__20370 = arguments.length;
switch (G__20370) {
case 2:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2 = (function (reducef,coll){
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3(reducef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3 = (function (combinef,reducef,coll){
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((512),combinef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4 = (function (n,combinef,reducef,coll){
return clojure.core.reducers.coll_fold(coll,n,combinef,reducef);
});

clojure.core.reducers.fold.cljs$lang$maxFixedArity = 4;

/**
 * Given a reducible collection, and a transformation function xf,
 *   returns a reducible collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.reducer = (function clojure$core$reducers$reducer(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers20372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers20372 = (function (coll,xf,meta20373){
this.coll = coll;
this.xf = xf;
this.meta20373 = meta20373;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clojure.core.reducers.t_clojure$core$reducers20372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20374,meta20373__$1){
var self__ = this;
var _20374__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers20372(self__.coll,self__.xf,meta20373__$1));
});

clojure.core.reducers.t_clojure$core$reducers20372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20374){
var self__ = this;
var _20374__$1 = this;
return self__.meta20373;
});

clojure.core.reducers.t_clojure$core$reducers20372.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,f1,(f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null)));
});

clojure.core.reducers.t_clojure$core$reducers20372.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(f1) : self__.xf.call(null,f1)),init);
});

clojure.core.reducers.t_clojure$core$reducers20372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$coll,cljs.core.cst$sym$xf,cljs.core.cst$sym$meta20373], null);
});

clojure.core.reducers.t_clojure$core$reducers20372.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers20372.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers20372";

clojure.core.reducers.t_clojure$core$reducers20372.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"clojure.core.reducers/t_clojure$core$reducers20372");
});

clojure.core.reducers.__GT_t_clojure$core$reducers20372 = (function clojure$core$reducers$reducer_$___GT_t_clojure$core$reducers20372(coll__$1,xf__$1,meta20373){
return (new clojure.core.reducers.t_clojure$core$reducers20372(coll__$1,xf__$1,meta20373));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers20372(coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given a foldable collection, and a transformation function xf,
 *   returns a foldable collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.folder = (function clojure$core$reducers$folder(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers20375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers20375 = (function (coll,xf,meta20376){
this.coll = coll;
this.xf = xf;
this.meta20376 = meta20376;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clojure.core.reducers.t_clojure$core$reducers20375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20377,meta20376__$1){
var self__ = this;
var _20377__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers20375(self__.coll,self__.xf,meta20376__$1));
});

clojure.core.reducers.t_clojure$core$reducers20375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20377){
var self__ = this;
var _20377__$1 = this;
return self__.meta20376;
});

clojure.core.reducers.t_clojure$core$reducers20375.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(f1) : self__.xf.call(null,f1)),(f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null)));
});

clojure.core.reducers.t_clojure$core$reducers20375.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.coll,(self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(f1) : self__.xf.call(null,f1)),init);
});

clojure.core.reducers.t_clojure$core$reducers20375.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.reducers.t_clojure$core$reducers20375.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){
var self__ = this;
var ___$1 = this;
return clojure.core.reducers.coll_fold(self__.coll,n,combinef,(self__.xf.cljs$core$IFn$_invoke$arity$1 ? self__.xf.cljs$core$IFn$_invoke$arity$1(reducef) : self__.xf.call(null,reducef)));
});

clojure.core.reducers.t_clojure$core$reducers20375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$coll,cljs.core.cst$sym$xf,cljs.core.cst$sym$meta20376], null);
});

clojure.core.reducers.t_clojure$core$reducers20375.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers20375.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers20375";

clojure.core.reducers.t_clojure$core$reducers20375.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"clojure.core.reducers/t_clojure$core$reducers20375");
});

clojure.core.reducers.__GT_t_clojure$core$reducers20375 = (function clojure$core$reducers$folder_$___GT_t_clojure$core$reducers20375(coll__$1,xf__$1,meta20376){
return (new clojure.core.reducers.t_clojure$core$reducers20375(coll__$1,xf__$1,meta20376));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers20375(coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Applies f to every value in the reduction of coll. Foldable.
 */
clojure.core.reducers.map = (function clojure$core$reducers$map(var_args){
var G__20379 = arguments.length;
switch (G__20379) {
case 1:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__8126__auto__){
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(f,x__8126__auto__);
});
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__20385 = null;
var G__20385__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__20385__2 = (function (ret,v){
var G__20380 = ret;
var G__20381 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__20380,G__20381) : f1.call(null,G__20380,G__20381));
});
var G__20385__3 = (function (ret,k,v){
var G__20382 = ret;
var G__20383 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__20382,G__20383) : f1.call(null,G__20382,G__20383));
});
G__20385 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__20385__0.call(this);
case 2:
return G__20385__2.call(this,ret,k);
case 3:
return G__20385__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__20385.cljs$core$IFn$_invoke$arity$0 = G__20385__0;
G__20385.cljs$core$IFn$_invoke$arity$2 = G__20385__2;
G__20385.cljs$core$IFn$_invoke$arity$3 = G__20385__3;
return G__20385;
})()
}));
});

clojure.core.reducers.map.cljs$lang$maxFixedArity = 2;

/**
 * Applies f to every value in the reduction of coll, concatenating the result
 *   colls of (f val). Foldable.
 */
clojure.core.reducers.mapcat = (function clojure$core$reducers$mapcat(var_args){
var G__20387 = arguments.length;
switch (G__20387) {
case 1:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__8126__auto__){
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2(f,x__8126__auto__);
});
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__20389 = null;
var G__20389__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__20389__2 = (function (ret,v){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(f1,ret,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
});
var G__20389__3 = (function (ret,k,v){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(f1,ret,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v)));
});
G__20389 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__20389__0.call(this);
case 2:
return G__20389__2.call(this,ret,k);
case 3:
return G__20389__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__20389.cljs$core$IFn$_invoke$arity$0 = G__20389__0;
G__20389.cljs$core$IFn$_invoke$arity$2 = G__20389__2;
G__20389.cljs$core$IFn$_invoke$arity$3 = G__20389__3;
return G__20389;
})()
}));
});

clojure.core.reducers.mapcat.cljs$lang$maxFixedArity = 2;

/**
 * Retains values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.filter = (function clojure$core$reducers$filter(var_args){
var G__20391 = arguments.length;
switch (G__20391) {
case 1:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__8126__auto__){
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2(pred,x__8126__auto__);
});
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__20393 = null;
var G__20393__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__20393__2 = (function (ret,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1.call(null,ret,v));
} else {
return ret;
}
});
var G__20393__3 = (function (ret,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(ret,k,v) : f1.call(null,ret,k,v));
} else {
return ret;
}
});
G__20393 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__20393__0.call(this);
case 2:
return G__20393__2.call(this,ret,k);
case 3:
return G__20393__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__20393.cljs$core$IFn$_invoke$arity$0 = G__20393__0;
G__20393.cljs$core$IFn$_invoke$arity$2 = G__20393__2;
G__20393.cljs$core$IFn$_invoke$arity$3 = G__20393__3;
return G__20393;
})()
}));
});

clojure.core.reducers.filter.cljs$lang$maxFixedArity = 2;

/**
 * Takes any nested combination of sequential things (lists, vectors,
 *   etc.) and returns their contents as a single, flat foldable
 *   collection.
 */
clojure.core.reducers.flatten = (function clojure$core$reducers$flatten(var_args){
var G__20395 = arguments.length;
switch (G__20395) {
case 0:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (x__8126__auto__){
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1(x__8126__auto__);
});
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return clojure.core.reducers.folder(coll,(function (f1){
return (function() {
var G__20397 = null;
var G__20397__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__20397__2 = (function (ret,v){
if(cljs.core.sequential_QMARK_(v)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1(v),f1,ret);
} else {
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1.call(null,ret,v));
}
});
G__20397 = function(ret,v){
switch(arguments.length){
case 0:
return G__20397__0.call(this);
case 2:
return G__20397__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__20397.cljs$core$IFn$_invoke$arity$0 = G__20397__0;
G__20397.cljs$core$IFn$_invoke$arity$2 = G__20397__2;
return G__20397;
})()
}));
});

clojure.core.reducers.flatten.cljs$lang$maxFixedArity = 1;

/**
 * Removes values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.remove = (function clojure$core$reducers$remove(var_args){
var G__20399 = arguments.length;
switch (G__20399) {
case 1:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__8126__auto__){
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2(pred,x__8126__auto__);
});
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});

clojure.core.reducers.remove.cljs$lang$maxFixedArity = 2;

/**
 * Ends the reduction of coll when (pred val) returns logical false.
 */
clojure.core.reducers.take_while = (function clojure$core$reducers$take_while(var_args){
var G__20402 = arguments.length;
switch (G__20402) {
case 1:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__8126__auto__){
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2(pred,x__8126__auto__);
});
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.reducer(coll,(function (f1){
return (function() {
var G__20404 = null;
var G__20404__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__20404__2 = (function (ret,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1.call(null,ret,v));
} else {
return cljs.core.reduced(ret);
}
});
var G__20404__3 = (function (ret,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(ret,k,v) : f1.call(null,ret,k,v));
} else {
return cljs.core.reduced(ret);
}
});
G__20404 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__20404__0.call(this);
case 2:
return G__20404__2.call(this,ret,k);
case 3:
return G__20404__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__20404.cljs$core$IFn$_invoke$arity$0 = G__20404__0;
G__20404.cljs$core$IFn$_invoke$arity$2 = G__20404__2;
G__20404.cljs$core$IFn$_invoke$arity$3 = G__20404__3;
return G__20404;
})()
}));
});

clojure.core.reducers.take_while.cljs$lang$maxFixedArity = 2;

/**
 * Ends the reduction of coll after consuming n values.
 */
clojure.core.reducers.take = (function clojure$core$reducers$take(var_args){
var G__20406 = arguments.length;
switch (G__20406) {
case 1:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__8126__auto__){
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(n,x__8126__auto__);
});
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer(coll,(function (f1){
var cnt = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);
return ((function (cnt){
return (function() {
var G__20408 = null;
var G__20408__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__20408__2 = (function (ret,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if((cljs.core.deref(cnt) < (0))){
return cljs.core.reduced(ret);
} else {
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1.call(null,ret,v));
}
});
var G__20408__3 = (function (ret,k,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if((cljs.core.deref(cnt) < (0))){
return cljs.core.reduced(ret);
} else {
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(ret,k,v) : f1.call(null,ret,k,v));
}
});
G__20408 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__20408__0.call(this);
case 2:
return G__20408__2.call(this,ret,k);
case 3:
return G__20408__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__20408.cljs$core$IFn$_invoke$arity$0 = G__20408__0;
G__20408.cljs$core$IFn$_invoke$arity$2 = G__20408__2;
G__20408.cljs$core$IFn$_invoke$arity$3 = G__20408__3;
return G__20408;
})()
;})(cnt))
}));
});

clojure.core.reducers.take.cljs$lang$maxFixedArity = 2;

/**
 * Elides the first n values from the reduction of coll.
 */
clojure.core.reducers.drop = (function clojure$core$reducers$drop(var_args){
var G__20410 = arguments.length;
switch (G__20410) {
case 1:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__8126__auto__){
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2(n,x__8126__auto__);
});
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer(coll,(function (f1){
var cnt = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);
return ((function (cnt){
return (function() {
var G__20412 = null;
var G__20412__0 = (function (){
return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__20412__2 = (function (ret,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if((cljs.core.deref(cnt) < (0))){
return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(ret,v) : f1.call(null,ret,v));
} else {
return ret;
}
});
var G__20412__3 = (function (ret,k,v){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.dec);

if((cljs.core.deref(cnt) < (0))){
return (f1.cljs$core$IFn$_invoke$arity$3 ? f1.cljs$core$IFn$_invoke$arity$3(ret,k,v) : f1.call(null,ret,k,v));
} else {
return ret;
}
});
G__20412 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__20412__0.call(this);
case 2:
return G__20412__2.call(this,ret,k);
case 3:
return G__20412__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__20412.cljs$core$IFn$_invoke$arity$0 = G__20412__0;
G__20412.cljs$core$IFn$_invoke$arity$2 = G__20412__2;
G__20412.cljs$core$IFn$_invoke$arity$3 = G__20412__3;
return G__20412;
})()
;})(cnt))
}));
});

clojure.core.reducers.drop.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.Cat = (function (cnt,left,right){
this.cnt = cnt;
this.left = left;
this.right = right;
this.cljs$lang$protocol_mask$partition0$ = 8912898;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clojure.core.reducers.Cat.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.reducers.Cat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(self__.left),cljs.core.seq(self__.right));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,f1,(f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null)));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.right,f1,cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(self__.left,f1,init));
});

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (this$,n,combinef,reducef){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$2(null,reducef);
});

clojure.core.reducers.Cat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cnt,cljs.core.cst$sym$left,cljs.core.cst$sym$right], null);
});

clojure.core.reducers.Cat.cljs$lang$type = true;

clojure.core.reducers.Cat.cljs$lang$ctorStr = "clojure.core.reducers/Cat";

clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"clojure.core.reducers/Cat");
});

clojure.core.reducers.__GT_Cat = (function clojure$core$reducers$__GT_Cat(cnt,left,right){
return (new clojure.core.reducers.Cat(cnt,left,right));
});

/**
 * A high-performance combining fn that yields the catenation of the
 *   reduced values. The result is reducible, foldable, seqable and
 *   counted, providing the identity collections are reducible, seqable
 *   and counted. The single argument version will build a combining fn
 *   with the supplied identity constructor. Tests for identity
 *   with (zero? (count x)). See also foldcat.
 */
clojure.core.reducers.cat = (function clojure$core$reducers$cat(var_args){
var G__20414 = arguments.length;
switch (G__20414) {
case 0:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1 = (function (ctor){
return (function() {
var G__20416 = null;
var G__20416__0 = (function (){
return (ctor.cljs$core$IFn$_invoke$arity$0 ? ctor.cljs$core$IFn$_invoke$arity$0() : ctor.call(null));
});
var G__20416__2 = (function (left,right){
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2(left,right);
});
G__20416 = function(left,right){
switch(arguments.length){
case 0:
return G__20416__0.call(this);
case 2:
return G__20416__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__20416.cljs$core$IFn$_invoke$arity$0 = G__20416__0;
G__20416.cljs$core$IFn$_invoke$arity$2 = G__20416__2;
return G__20416;
})()
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2 = (function (left,right){
if((cljs.core.count(left) === (0))){
return right;
} else {
if((cljs.core.count(right) === (0))){
return left;
} else {
return (new clojure.core.reducers.Cat((cljs.core.count(left) + cljs.core.count(right)),left,right));

}
}
});

clojure.core.reducers.cat.cljs$lang$maxFixedArity = 2;

/**
 * .adds x to acc and returns acc
 */
clojure.core.reducers.append_BANG_ = (function clojure$core$reducers$append_BANG_(acc,x){
var G__20417 = acc;
G__20417.push(x);

return G__20417;
});
/**
 * Equivalent to (fold cat append! coll)
 */
clojure.core.reducers.foldcat = (function clojure$core$reducers$foldcat(coll){
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3(clojure.core.reducers.cat,clojure.core.reducers.append_BANG_,coll);
});
/**
 * Builds a combining fn out of the supplied operator and identity
 *   constructor. op must be associative and ctor called with no args
 *   must return an identity value for it.
 */
clojure.core.reducers.monoid = (function clojure$core$reducers$monoid(op,ctor){
return (function() {
var clojure$core$reducers$monoid_$_m = null;
var clojure$core$reducers$monoid_$_m__0 = (function (){
return (ctor.cljs$core$IFn$_invoke$arity$0 ? ctor.cljs$core$IFn$_invoke$arity$0() : ctor.call(null));
});
var clojure$core$reducers$monoid_$_m__2 = (function (a,b){
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(a,b) : op.call(null,a,b));
});
clojure$core$reducers$monoid_$_m = function(a,b){
switch(arguments.length){
case 0:
return clojure$core$reducers$monoid_$_m__0.call(this);
case 2:
return clojure$core$reducers$monoid_$_m__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$0 = clojure$core$reducers$monoid_$_m__0;
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$monoid_$_m__2;
return clojure$core$reducers$monoid_$_m;
})()
});
clojure.core.reducers.foldvec = (function clojure$core$reducers$foldvec(v,n,combinef,reducef){
if(cljs.core.empty_QMARK_(v)){
return (combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef.call(null));
} else {
if((cljs.core.count(v) <= n)){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(reducef,(combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef.call(null)),v);
} else {
var split = cljs.core.quot(cljs.core.count(v),(2));
var v1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),split);
var v2 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,split,cljs.core.count(v));
var fc = ((function (split,v1,v2){
return (function (child){
return ((function (split,v1,v2){
return (function (){
return (clojure.core.reducers.foldvec.cljs$core$IFn$_invoke$arity$4 ? clojure.core.reducers.foldvec.cljs$core$IFn$_invoke$arity$4(child,n,combinef,reducef) : clojure.core.reducers.foldvec.call(null,child,n,combinef,reducef));
});
;})(split,v1,v2))
});})(split,v1,v2))
;
return clojure.core.reducers.fjinvoke(((function (split,v1,v2,fc){
return (function (){
var f1 = fc(v1);
var t2 = clojure.core.reducers.fjtask(fc(v2));
clojure.core.reducers.fjfork(t2);

var G__20418 = (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
var G__20419 = clojure.core.reducers.fjjoin(t2);
return (combinef.cljs$core$IFn$_invoke$arity$2 ? combinef.cljs$core$IFn$_invoke$arity$2(G__20418,G__20419) : combinef.call(null,G__20418,G__20419));
});})(split,v1,v2,fc))
);

}
}
});
(clojure.core.reducers.CollFold["null"] = true);

(clojure.core.reducers.coll_fold["null"] = (function (coll,n,combinef,reducef){
return (combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef.call(null));
}));

(clojure.core.reducers.CollFold["object"] = true);

(clojure.core.reducers.coll_fold["object"] = (function (coll,n,combinef,reducef){
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(reducef,(combinef.cljs$core$IFn$_invoke$arity$0 ? combinef.cljs$core$IFn$_invoke$arity$0() : combinef.call(null)),coll);
}));

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (v,n,combinef,reducef){
var v__$1 = this;
return clojure.core.reducers.foldvec(v__$1,n,combinef,reducef);
});
