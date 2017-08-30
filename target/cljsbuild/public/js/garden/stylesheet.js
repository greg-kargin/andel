// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__8918__auto__ = [];
var len__8911__auto___21058 = arguments.length;
var i__8912__auto___21059 = (0);
while(true){
if((i__8912__auto___21059 < len__8911__auto___21058)){
args__8918__auto__.push((arguments[i__8912__auto___21059]));

var G__21060 = (i__8912__auto___21059 + (1));
i__8912__auto___21059 = G__21060;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!(((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__21061__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__21061 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__21062__i = 0, G__21062__a = new Array(arguments.length -  0);
while (G__21062__i < G__21062__a.length) {G__21062__a[G__21062__i] = arguments[G__21062__i + 0]; ++G__21062__i;}
  children = new cljs.core.IndexedSeq(G__21062__a,0,null);
} 
return G__21061__delegate.call(this,children);};
G__21061.cljs$lang$maxFixedArity = 0;
G__21061.cljs$lang$applyTo = (function (arglist__21063){
var children = cljs.core.seq(arglist__21063);
return G__21061__delegate(children);
});
G__21061.cljs$core$IFn$_invoke$arity$variadic = G__21061__delegate;
return G__21061;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

garden.stylesheet.rule.cljs$lang$applyTo = (function (seq21056){
var G__21057 = cljs.core.first(seq21056);
var seq21056__$1 = cljs.core.next(seq21056);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic(G__21057,seq21056__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__21064__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__21064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21065__i = 0, G__21065__a = new Array(arguments.length -  0);
while (G__21065__i < G__21065__a.length) {G__21065__a[G__21065__i] = arguments[G__21065__i + 0]; ++G__21065__i;}
  args = new cljs.core.IndexedSeq(G__21065__a,0,null);
} 
return G__21064__delegate.call(this,args);};
G__21064.cljs$lang$maxFixedArity = 0;
G__21064.cljs$lang$applyTo = (function (arglist__21066){
var args = cljs.core.seq(arglist__21066);
return G__21064__delegate(args);
});
G__21064.cljs$core$IFn$_invoke$arity$variadic = G__21064__delegate;
return G__21064;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__8918__auto__ = [];
var len__8911__auto___21068 = arguments.length;
var i__8912__auto___21069 = (0);
while(true){
if((i__8912__auto___21069 < len__8911__auto___21068)){
args__8918__auto__.push((arguments[i__8912__auto___21069]));

var G__21070 = (i__8912__auto___21069 + (1));
i__8912__auto___21069 = G__21070;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((0) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__8919__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq21067){
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21067));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__21074 = arguments.length;
switch (G__21074) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__8934__auto__ = [];
var len__8911__auto___21076 = arguments.length;
var i__8912__auto___21077 = (0);
while(true){
if((i__8912__auto___21077 < len__8911__auto___21076)){
args_arr__8934__auto__.push((arguments[i__8912__auto___21077]));

var G__21078 = (i__8912__auto___21077 + (1));
i__8912__auto___21077 = G__21078;
continue;
} else {
}
break;
}

var argseq__8935__auto__ = (new cljs.core.IndexedSeq(args_arr__8934__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8935__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,media_queries], null));
});

garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq21072){
var G__21073 = cljs.core.first(seq21072);
var seq21072__$1 = cljs.core.next(seq21072);
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic(G__21073,seq21072__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__8918__auto__ = [];
var len__8911__auto___21081 = arguments.length;
var i__8912__auto___21082 = (0);
while(true){
if((i__8912__auto___21082 < len__8911__auto___21081)){
args__8918__auto__.push((arguments[i__8912__auto___21082]));

var G__21083 = (i__8912__auto___21082 + (1));
i__8912__auto___21082 = G__21083;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(cljs.core.cst$kw$media,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media_DASH_queries,media_queries,cljs.core.cst$kw$rules,rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq21079){
var G__21080 = cljs.core.first(seq21079);
var seq21079__$1 = cljs.core.next(seq21079);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(G__21080,seq21079__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__8918__auto__ = [];
var len__8911__auto___21086 = arguments.length;
var i__8912__auto___21087 = (0);
while(true){
if((i__8912__auto___21087 < len__8911__auto___21086)){
args__8918__auto__.push((arguments[i__8912__auto___21087]));

var G__21088 = (i__8912__auto___21087 + (1));
i__8912__auto___21087 = G__21088;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(cljs.core.cst$kw$keyframes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$identifier,identifier,cljs.core.cst$kw$frames,frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq21084){
var G__21085 = cljs.core.first(seq21084);
var seq21084__$1 = cljs.core.next(seq21084);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic(G__21085,seq21084__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});
