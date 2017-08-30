// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__8918__auto__ = [];
var len__8911__auto___21985 = arguments.length;
var i__8912__auto___21986 = (0);
while(true){
if((i__8912__auto___21986 < len__8911__auto___21985)){
args__8918__auto__.push((arguments[i__8912__auto___21986]));

var G__21987 = (i__8912__auto___21986 + (1));
i__8912__auto___21986 = G__21987;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((0) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__8919__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq21984){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21984));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__8918__auto__ = [];
var len__8911__auto___21989 = arguments.length;
var i__8912__auto___21990 = (0);
while(true){
if((i__8912__auto___21990 < len__8911__auto___21989)){
args__8918__auto__.push((arguments[i__8912__auto___21990]));

var G__21991 = (i__8912__auto___21990 + (1));
i__8912__auto___21990 = G__21991;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((0) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__8919__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq21988){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21988));
});

