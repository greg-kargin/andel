// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('andel.lexer');
goog.require('andel.theme');
goog.require('andel.throttling');
goog.require('andel.controller');
goog.require('andel.utils');
goog.require('andel.intervals');
goog.require('andel.keybind');
goog.require('garden.core');
goog.require('garden.stylesheet');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('andel.text');
goog.require('andel.tree');
goog.require('clojure.core.reducers');
goog.require('clojure.set');
goog.require('cljs.tools.reader.edn');
andel.core.el = (function andel$core$el(var_args){
var G__21995 = arguments.length;
switch (G__21995) {
case 2:
return andel.core.el.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return andel.core.el.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

andel.core.el.cljs$core$IFn$_invoke$arity$2 = (function (tag,props){
return React.createElement(tag,props);
});

andel.core.el.cljs$core$IFn$_invoke$arity$3 = (function (tag,props,children){
return React.createElement(tag,props,children);
});

andel.core.el.cljs$lang$maxFixedArity = 3;

andel.core.head = (function andel$core$head(){
return (document.getElementsByTagName("head")[(0)]);
});
andel.core.body = (function andel$core$body(){
return document.body;
});
andel.core.defstyle_impl = (function andel$core$defstyle_impl(var_args){
var G__21998 = arguments.length;
switch (G__21998) {
case 2:
return andel.core.defstyle_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return andel.core.defstyle_impl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

andel.core.defstyle_impl.cljs$core$IFn$_invoke$arity$2 = (function (key,style){
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("style_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(key)?cljs.core.name(key):cljs.core.hash_coll(style)))].join('');
var e = (function (){var or__7678__auto__ = document.getElementById(id);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
var e = document.createElement("style");
(e["id"] = id);

(e["type"] = "text/css");

andel.core.head().appendChild(e);

return e;
}
})();
var css = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0));
return (e["innerHTML"] = css);
});

andel.core.defstyle_impl.cljs$core$IFn$_invoke$arity$1 = (function (style){
return andel.core.defstyle_impl.cljs$core$IFn$_invoke$arity$2(null,style);
});

andel.core.defstyle_impl.cljs$lang$maxFixedArity = 2;

if(typeof andel.core.defstyle !== 'undefined'){
} else {
andel.core.defstyle = cljs.core.memoize(andel.core.defstyle_impl);
}
var G__22000_22002 = cljs.core.cst$kw$body;
var G__22001_22003 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,andel.theme.background], null)], null);
(andel.core.defstyle.cljs$core$IFn$_invoke$arity$2 ? andel.core.defstyle.cljs$core$IFn$_invoke$arity$2(G__22000_22002,G__22001_22003) : andel.core.defstyle.call(null,G__22000_22002,G__22001_22003));
andel.core.px = (function andel$core$px(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
});
andel.core.make_editor_state = (function andel$core$make_editor_state(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$document,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$text,andel.text.make_text(""),cljs.core.cst$kw$lexer_DASH_broker,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$modespec,"text/x-java",cljs.core.cst$kw$timestamp,(0),cljs.core.cst$kw$lines,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$first_DASH_invalid,(0)], null),cljs.core.cst$kw$editor,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$caret,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$v_DASH_col,(0)], null),cljs.core.cst$kw$selection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),cljs.core.cst$kw$viewport,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$view_DASH_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$metrics,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,(0),cljs.core.cst$kw$width,(0),cljs.core.cst$kw$spacing,(0)], null)], null)], null);
});
andel.core.swap_editor_BANG_ = cljs.core.swap_BANG_;
if(typeof andel.core.state !== 'undefined'){
} else {
andel.core.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(andel.core.make_editor_state());
}
andel.core.style = (function andel$core$style(m){
return cljs.core.reduce_kv((function (s,k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((v instanceof cljs.core.Keyword))?cljs.core.name(v):v)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(";")].join('');
}),null,m);
});
andel.core.render_attrs = (function andel$core$render_attrs(m){
return cljs.core.reduce_kv((function (s,k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((v instanceof cljs.core.Keyword))?cljs.core.name(v):v)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
}),null,m);
});
andel.core.make_node = (function andel$core$make_node(tag){
var G__22004 = cljs.core.name(tag);
return document.createElement(G__22004);
});
andel.core.make_text_node = (function andel$core$make_text_node(s){
return document.createTextNode(s);
});
andel.core.assoc_attr_BANG_ = (function andel$core$assoc_attr_BANG_(e,a,v){
e.setAttribute(cljs.core.name(a),(((v instanceof cljs.core.Keyword))?cljs.core.name(v):v));

return e;
});
andel.core.conj_child_BANG_ = (function andel$core$conj_child_BANG_(e,c){
e.appendChild(c);

return e;
});
andel.core.infinity_QMARK_ = (function andel$core$infinity_QMARK_(x){
return (x instanceof cljs.core.Keyword);
});
andel.core.render_selection = (function andel$core$render_selection(p__22005,p__22006){
var vec__22007 = p__22005;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22007,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22007,(1),null);
var map__22010 = p__22006;
var map__22010__$1 = ((((!((map__22010 == null)))?((((map__22010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22010):map__22010);
var metrics = map__22010__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22010__$1,cljs.core.cst$kw$width);
return [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,andel.core.style(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$background_DASH_color,andel.theme.selection,cljs.core.cst$kw$height,andel.core.px(andel.utils.line_height(metrics)),cljs.core.cst$kw$position,cljs.core.cst$kw$absolute,cljs.core.cst$kw$top,andel.core.px((0)),cljs.core.cst$kw$left,(cljs.core.truth_(andel.core.infinity_QMARK_(to))?(0):andel.core.px((from * width))),cljs.core.cst$kw$margin_DASH_left,(cljs.core.truth_(andel.core.infinity_QMARK_(to))?andel.core.px((from * width)):null),cljs.core.cst$kw$width,(cljs.core.truth_(andel.core.infinity_QMARK_(to))?"100%":andel.core.px(((to - from) * width)))], null))], null)];
});
var G__22012_22013 = garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic("blinker",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["50%",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opacity,"0"], null)], null)], 0));
(andel.core.defstyle.cljs$core$IFn$_invoke$arity$1 ? andel.core.defstyle.cljs$core$IFn$_invoke$arity$1(G__22012_22013) : andel.core.defstyle.call(null,G__22012_22013));
andel.core.render_caret = (function andel$core$render_caret(col,p__22014){
var map__22015 = p__22014;
var map__22015__$1 = ((((!((map__22015 == null)))?((((map__22015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22015):map__22015);
var metrics = map__22015__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22015__$1,cljs.core.cst$kw$width);
return [cljs.core.cst$kw$div,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,andel.core.style(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$height,andel.core.px((andel.utils.line_height(metrics) + (1))),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$bg_DASH_05.cljs$core$IFn$_invoke$arity$1(andel.theme.zenburn),cljs.core.cst$kw$position,cljs.core.cst$kw$absolute,cljs.core.cst$kw$left,(0),cljs.core.cst$kw$top,(0),cljs.core.cst$kw$z_DASH_index,"-1"], null))], null)],[cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,andel.core.style(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,andel.core.px((1)),cljs.core.cst$kw$animation,"blinker 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$position,cljs.core.cst$kw$absolute,cljs.core.cst$kw$left,andel.core.px((col * width)),cljs.core.cst$kw$height,andel.core.px((andel.utils.line_height(metrics) + (1)))], null))], null)]];
});
andel.core.token_class = (function (){var tokens_cache = ({});
return ((function (tokens_cache){
return (function (tt){
if(cljs.core.truth_(tt)){
var temp__5276__auto__ = (tokens_cache[cljs.core.name(tt)]);
if(cljs.core.truth_(temp__5276__auto__)){
var c = temp__5276__auto__;
return c;
} else {
var class$ = cljs.core.name(tt);
var G__22017_22019 = tt;
var G__22018_22020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),(andel.theme.token_styles.cljs$core$IFn$_invoke$arity$1 ? andel.theme.token_styles.cljs$core$IFn$_invoke$arity$1(tt) : andel.theme.token_styles.call(null,tt))], null);
(andel.core.defstyle.cljs$core$IFn$_invoke$arity$2 ? andel.core.defstyle.cljs$core$IFn$_invoke$arity$2(G__22017_22019,G__22018_22020) : andel.core.defstyle.call(null,G__22017_22019,G__22018_22020));

(tokens_cache[cljs.core.name(tt)] = class$);

return class$;
}
} else {
return null;
}
});
;})(tokens_cache))
})();
var G__22021_22023 = cljs.core.cst$kw$line_DASH_text;
var G__22022_22024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$line_DASH_text,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,cljs.core.cst$kw$absolute,cljs.core.cst$kw$left,(0),cljs.core.cst$kw$user_DASH_select,cljs.core.cst$kw$none,cljs.core.cst$kw$top,(0)], null)], null);
(andel.core.defstyle.cljs$core$IFn$_invoke$arity$2 ? andel.core.defstyle.cljs$core$IFn$_invoke$arity$2(G__22021_22023,G__22022_22024) : andel.core.defstyle.call(null,G__22021_22023,G__22022_22024));
andel.core.push_BANG_ = (function andel$core$push_BANG_(a,x){
a.push(x);

return a;
});
andel.core.render_text = (function andel$core$render_text(text,tokens,markup,p__22025){
var map__22026 = p__22025;
var map__22026__$1 = ((((!((map__22026 == null)))?((((map__22026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22026):map__22026);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22026__$1,cljs.core.cst$kw$height);
var markup__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$foreground,markup);
var events = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (markup__$1,map__22026,map__22026__$1,height){
return (function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pos,cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$add,cljs.core.cst$kw$foreground.cljs$core$IFn$_invoke$arity$1(m)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pos,cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$remove,cljs.core.cst$kw$foreground.cljs$core$IFn$_invoke$arity$1(m)], null)], null);
});})(markup__$1,map__22026,map__22026__$1,height))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([markup__$1], 0)),cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (markup__$1,map__22026,map__22026__$1,height){
return (function (p__22028,p__22029){
var vec__22030 = p__22028;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22030,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22030,(1),null);
var vec__22033 = p__22029;
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22033,(0),null);
var tt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22033,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + len),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(res,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pos,i,cljs.core.cst$kw$add,(andel.core.token_class.cljs$core$IFn$_invoke$arity$1 ? andel.core.token_class.cljs$core$IFn$_invoke$arity$1(tt) : andel.core.token_class.call(null,tt))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pos,(i + len),cljs.core.cst$kw$remove,(andel.core.token_class.cljs$core$IFn$_invoke$arity$1 ? andel.core.token_class.cljs$core$IFn$_invoke$arity$1(tt) : andel.core.token_class.call(null,tt))], null)], 0))], null);
});})(markup__$1,map__22026,map__22026__$1,height))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY], null),tokens)));
var events_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markup__$1,events,map__22026,map__22026__$1,height){
return (function (es){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(es)),cljs.core.cst$kw$add,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add,es)),cljs.core.cst$kw$remove,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$remove,es))], null);
});})(markup__$1,events,map__22026,map__22026__$1,height))
,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos,events)));
var res = cljs.core.cst$kw$res.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (markup__$1,events,events_SINGLEQUOTE_,map__22026,map__22026__$1,height){
return (function (p__22036,p__22037){
var map__22038 = p__22036;
var map__22038__$1 = ((((!((map__22038 == null)))?((((map__22038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22038):map__22038);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22038__$1,cljs.core.cst$kw$prev);
var res = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22038__$1,cljs.core.cst$kw$res);
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22038__$1,cljs.core.cst$kw$styles);
var map__22039 = p__22037;
var map__22039__$1 = ((((!((map__22039 == null)))?((((map__22039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22039):map__22039);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22039__$1,cljs.core.cst$kw$pos);
var add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22039__$1,cljs.core.cst$kw$add);
var remove = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22039__$1,cljs.core.cst$kw$remove);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$prev,pos,cljs.core.cst$kw$styles,clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(styles,remove),add),cljs.core.cst$kw$res,andel.core.push_BANG_(res,[cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",styles))], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,prev,pos)])], null);
});})(markup__$1,events,events_SINGLEQUOTE_,map__22026,map__22026__$1,height))
,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$prev,(0),cljs.core.cst$kw$styles,cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(cljs.core.first(events_SINGLEQUOTE_)),cljs.core.cst$kw$res,[cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$line_DASH_text], null)]], null),cljs.core.next(events_SINGLEQUOTE_)));
return res;
});
andel.core.render_background_markup = (function andel$core$render_background_markup(markup,p__22042){
var map__22043 = p__22042;
var map__22043__$1 = ((((!((map__22043 == null)))?((((map__22043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22043):map__22043);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22043__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22043__$1,cljs.core.cst$kw$width);
var spacing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22043__$1,cljs.core.cst$kw$spacing);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__22043,map__22043__$1,height,width,spacing){
return (function (res,p__22045){
var map__22046 = p__22045;
var map__22046__$1 = ((((!((map__22046 == null)))?((((map__22046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22046):map__22046);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22046__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22046__$1,cljs.core.cst$kw$to);
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22046__$1,cljs.core.cst$kw$background);
if(cljs.core.truth_(background)){
return andel.core.push_BANG_(res,[cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,background,cljs.core.cst$kw$style,andel.core.style(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$left,andel.core.px((from * width)),cljs.core.cst$kw$width,andel.core.px((width * (to - from))),cljs.core.cst$kw$height,andel.core.px((height + spacing)),cljs.core.cst$kw$position,cljs.core.cst$kw$absolute], null))], null)]);
} else {
return res;
}
});})(map__22043,map__22043__$1,height,width,spacing))
,[cljs.core.cst$kw$pre,cljs.core.PersistentArrayMap.EMPTY],markup);
});
andel.core.real_dom = (function (){var G__22048 = ({"componentWillUpdate": (function (next_props,next_state){
var this$ = this;
var elt = (next_props["dom"]);
var node = ReactDOM.findDOMNode(this$);
var child = node.firstChild;
if(cljs.core.truth_(child)){
node.removeChild(child);
} else {
}

return node.appendChild(elt);
}), "componentDidMount": (function (){
var this$ = this;
var elt = ((this$["props"])["dom"]);
var node = ReactDOM.findDOMNode(this$);
return node.appendChild(elt);
}), "render": (function (_){
return andel.core.el.cljs$core$IFn$_invoke$arity$2("div",({"key": "realDOM"}));
})});
return createReactClass(G__22048);
})();

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
andel.core.LineInfo = (function (lineText,lineTokens,lineMarkup,selection,caretIndex,index,__meta,__extmap,__hash){
this.lineText = lineText;
this.lineTokens = lineTokens;
this.lineMarkup = lineMarkup;
this.selection = selection;
this.caretIndex = caretIndex;
this.index = index;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
andel.core.LineInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8352__auto__,k__8353__auto__){
var self__ = this;
var this__8352__auto____$1 = this;
return this__8352__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8353__auto__,null);
});

andel.core.LineInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8354__auto__,k22050,else__8355__auto__){
var self__ = this;
var this__8354__auto____$1 = this;
var G__22054 = k22050;
var G__22054__$1 = (((G__22054 instanceof cljs.core.Keyword))?G__22054.fqn:null);
switch (G__22054__$1) {
case "lineText":
return self__.lineText;

break;
case "lineTokens":
return self__.lineTokens;

break;
case "lineMarkup":
return self__.lineMarkup;

break;
case "selection":
return self__.selection;

break;
case "caretIndex":
return self__.caretIndex;

break;
case "index":
return self__.index;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22050,else__8355__auto__);

}
});

andel.core.LineInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8366__auto__,writer__8367__auto__,opts__8368__auto__){
var self__ = this;
var this__8366__auto____$1 = this;
var pr_pair__8369__auto__ = ((function (this__8366__auto____$1){
return (function (keyval__8370__auto__){
return cljs.core.pr_sequential_writer(writer__8367__auto__,cljs.core.pr_writer,""," ","",opts__8368__auto__,keyval__8370__auto__);
});})(this__8366__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8367__auto__,pr_pair__8369__auto__,"#andel.core.LineInfo{",", ","}",opts__8368__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lineText,self__.lineText],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lineTokens,self__.lineTokens],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lineMarkup,self__.lineMarkup],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$selection,self__.selection],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$caretIndex,self__.caretIndex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$index,self__.index],null))], null),self__.__extmap));
});

andel.core.LineInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22049){
var self__ = this;
var G__22049__$1 = this;
return (new cljs.core.RecordIter((0),G__22049__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lineText,cljs.core.cst$kw$lineTokens,cljs.core.cst$kw$lineMarkup,cljs.core.cst$kw$selection,cljs.core.cst$kw$caretIndex,cljs.core.cst$kw$index], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

andel.core.LineInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8350__auto__){
var self__ = this;
var this__8350__auto____$1 = this;
return self__.__meta;
});

andel.core.LineInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8347__auto__){
var self__ = this;
var this__8347__auto____$1 = this;
return (new andel.core.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,self__.__hash));
});

andel.core.LineInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8356__auto__){
var self__ = this;
var this__8356__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

andel.core.LineInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8348__auto__){
var self__ = this;
var this__8348__auto____$1 = this;
var h__8120__auto__ = self__.__hash;
if(!((h__8120__auto__ == null))){
return h__8120__auto__;
} else {
var h__8120__auto____$1 = (function (){var fexpr__22055 = ((function (h__8120__auto__,this__8348__auto____$1){
return (function (coll__8349__auto__){
return (-1069073469 ^ cljs.core.hash_unordered_coll(coll__8349__auto__));
});})(h__8120__auto__,this__8348__auto____$1))
;
return fexpr__22055(this__8348__auto____$1);
})();
self__.__hash = h__8120__auto____$1;

return h__8120__auto____$1;
}
});

andel.core.LineInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22051,other22052){
var self__ = this;
var this22051__$1 = this;
return (!((other22052 == null))) && ((this22051__$1.constructor === other22052.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22051__$1.lineText,other22052.lineText)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22051__$1.lineTokens,other22052.lineTokens)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22051__$1.lineMarkup,other22052.lineMarkup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22051__$1.selection,other22052.selection)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22051__$1.caretIndex,other22052.caretIndex)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22051__$1.index,other22052.index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22051__$1.__extmap,other22052.__extmap));
});

andel.core.LineInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8361__auto__,k__8362__auto__){
var self__ = this;
var this__8361__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$index,null,cljs.core.cst$kw$lineTokens,null,cljs.core.cst$kw$lineText,null,cljs.core.cst$kw$lineMarkup,null,cljs.core.cst$kw$selection,null,cljs.core.cst$kw$caretIndex,null], null), null),k__8362__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8361__auto____$1),self__.__meta),k__8362__auto__);
} else {
return (new andel.core.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8362__auto__)),null));
}
});

andel.core.LineInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8359__auto__,k__8360__auto__,G__22049){
var self__ = this;
var this__8359__auto____$1 = this;
var pred__22056 = cljs.core.keyword_identical_QMARK_;
var expr__22057 = k__8360__auto__;
if(cljs.core.truth_((function (){var G__22059 = cljs.core.cst$kw$lineText;
var G__22060 = expr__22057;
return (pred__22056.cljs$core$IFn$_invoke$arity$2 ? pred__22056.cljs$core$IFn$_invoke$arity$2(G__22059,G__22060) : pred__22056.call(null,G__22059,G__22060));
})())){
return (new andel.core.LineInfo(G__22049,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22061 = cljs.core.cst$kw$lineTokens;
var G__22062 = expr__22057;
return (pred__22056.cljs$core$IFn$_invoke$arity$2 ? pred__22056.cljs$core$IFn$_invoke$arity$2(G__22061,G__22062) : pred__22056.call(null,G__22061,G__22062));
})())){
return (new andel.core.LineInfo(self__.lineText,G__22049,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22063 = cljs.core.cst$kw$lineMarkup;
var G__22064 = expr__22057;
return (pred__22056.cljs$core$IFn$_invoke$arity$2 ? pred__22056.cljs$core$IFn$_invoke$arity$2(G__22063,G__22064) : pred__22056.call(null,G__22063,G__22064));
})())){
return (new andel.core.LineInfo(self__.lineText,self__.lineTokens,G__22049,self__.selection,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22065 = cljs.core.cst$kw$selection;
var G__22066 = expr__22057;
return (pred__22056.cljs$core$IFn$_invoke$arity$2 ? pred__22056.cljs$core$IFn$_invoke$arity$2(G__22065,G__22066) : pred__22056.call(null,G__22065,G__22066));
})())){
return (new andel.core.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,G__22049,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22067 = cljs.core.cst$kw$caretIndex;
var G__22068 = expr__22057;
return (pred__22056.cljs$core$IFn$_invoke$arity$2 ? pred__22056.cljs$core$IFn$_invoke$arity$2(G__22067,G__22068) : pred__22056.call(null,G__22067,G__22068));
})())){
return (new andel.core.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,G__22049,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22069 = cljs.core.cst$kw$index;
var G__22070 = expr__22057;
return (pred__22056.cljs$core$IFn$_invoke$arity$2 ? pred__22056.cljs$core$IFn$_invoke$arity$2(G__22069,G__22070) : pred__22056.call(null,G__22069,G__22070));
})())){
return (new andel.core.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,G__22049,self__.__meta,self__.__extmap,null));
} else {
return (new andel.core.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8360__auto__,G__22049),null));
}
}
}
}
}
}
});

andel.core.LineInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8364__auto__){
var self__ = this;
var this__8364__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lineText,self__.lineText],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lineTokens,self__.lineTokens],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lineMarkup,self__.lineMarkup],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$selection,self__.selection],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$caretIndex,self__.caretIndex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$index,self__.index],null))], null),self__.__extmap));
});

andel.core.LineInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8351__auto__,G__22049){
var self__ = this;
var this__8351__auto____$1 = this;
return (new andel.core.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,G__22049,self__.__extmap,self__.__hash));
});

andel.core.LineInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8357__auto__,entry__8358__auto__){
var self__ = this;
var this__8357__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8358__auto__)){
return this__8357__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8357__auto____$1,entry__8358__auto__);
}
});

andel.core.LineInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$lineText,cljs.core.cst$sym$lineTokens,cljs.core.cst$sym$lineMarkup,cljs.core.cst$sym$selection,cljs.core.cst$sym$caretIndex,cljs.core.cst$sym$index], null);
});

andel.core.LineInfo.cljs$lang$type = true;

andel.core.LineInfo.cljs$lang$ctorPrSeq = (function (this__8390__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"andel.core/LineInfo");
});

andel.core.LineInfo.cljs$lang$ctorPrWriter = (function (this__8390__auto__,writer__8391__auto__){
return cljs.core._write(writer__8391__auto__,"andel.core/LineInfo");
});

andel.core.__GT_LineInfo = (function andel$core$__GT_LineInfo(lineText,lineTokens,lineMarkup,selection,caretIndex,index){
return (new andel.core.LineInfo(lineText,lineTokens,lineMarkup,selection,caretIndex,index,null,null,null));
});

andel.core.map__GT_LineInfo = (function andel$core$map__GT_LineInfo(G__22053){
return (new andel.core.LineInfo(cljs.core.cst$kw$lineText.cljs$core$IFn$_invoke$arity$1(G__22053),cljs.core.cst$kw$lineTokens.cljs$core$IFn$_invoke$arity$1(G__22053),cljs.core.cst$kw$lineMarkup.cljs$core$IFn$_invoke$arity$1(G__22053),cljs.core.cst$kw$selection.cljs$core$IFn$_invoke$arity$1(G__22053),cljs.core.cst$kw$caretIndex.cljs$core$IFn$_invoke$arity$1(G__22053),cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(G__22053),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22053,cljs.core.cst$kw$lineText,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lineTokens,cljs.core.cst$kw$lineMarkup,cljs.core.cst$kw$selection,cljs.core.cst$kw$caretIndex,cljs.core.cst$kw$index], 0))),null));
});

andel.core.dom = (function andel$core$dom(el){
var tag = (el[(0)]);
var attrs_map = (el[(1)]);
var children = el.slice((2));
if(!((el == null))){
} else {
throw (new Error("Assert failed: (some? el)"));
}

var len = children.length;
var el_with_children = (function (){var i = (0);
var n = andel.core.make_node(tag);
while(true){
if((i < len)){
var temp__5276__auto__ = (children[i]);
if(cljs.core.truth_(temp__5276__auto__)){
var c = temp__5276__auto__;
var G__22072 = (i + (1));
var G__22073 = andel.core.conj_child_BANG_(n,((typeof c === 'string')?andel.core.make_text_node(c):(andel.core.dom.cljs$core$IFn$_invoke$arity$1 ? andel.core.dom.cljs$core$IFn$_invoke$arity$1(c) : andel.core.dom.call(null,c))));
i = G__22072;
n = G__22073;
continue;
} else {
var G__22074 = (i + (1));
var G__22075 = n;
i = G__22074;
n = G__22075;
continue;
}
} else {
return n;
}
break;
}
})();
return cljs.core.reduce_kv(((function (len,el_with_children,tag,attrs_map,children){
return (function (n,a,v){
return andel.core.assoc_attr_BANG_(n,a,v);
});})(len,el_with_children,tag,attrs_map,children))
,el_with_children,attrs_map);
});
andel.core.def_fun = (function andel$core$def_fun(f){
var G__22076 = ({"shouldComponentUpdate": (function (new_props,new_state){
var this$ = this;
var old_props = (this$["props"]);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((old_props["props"]),(new_props["props"]));
}), "render": (function (_){
var this$ = this;
var G__22077 = ((this$["props"])["props"]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22077) : f.call(null,G__22077));
})});
return createReactClass(G__22076);
});
andel.core.render_line = andel.core.def_fun((function (props){
var this$ = this;
var line_info = (function (){var G__22078 = cljs.core.cst$kw$line_DASH_info;
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(G__22078) : props.call(null,G__22078));
})();
var metrics = (function (){var G__22079 = cljs.core.cst$kw$metrics;
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(G__22079) : props.call(null,G__22079));
})();
var line_text = line_info.lineText;
var line_tokens = line_info.lineTokens;
var line_markup = line_info.lineMarkup;
var selection = line_info.selection;
var caret_index = line_info.caretIndex;
return andel.core.el.cljs$core$IFn$_invoke$arity$2(andel.core.real_dom,({"dom": andel.core.dom([cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$render_DASH_line], null),andel.core.render_background_markup(line_markup,metrics),andel.core.render_selection(selection,metrics),andel.core.render_text(line_text,line_tokens,line_markup,metrics),(cljs.core.truth_(caret_index)?andel.core.render_caret(caret_index,metrics):null)])}));
}));
andel.core.line_selection = (function andel$core$line_selection(p__22080,p__22081){
var vec__22082 = p__22080;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22082,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22082,(1),null);
var vec__22085 = p__22081;
var line_start_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22085,(0),null);
var line_end_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22085,(1),null);
if(((from < line_start_offset)) && ((line_start_offset < to))){
if((line_end_offset < to)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.cst$kw$infinity], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(to - line_start_offset)], null);
}
} else {
if(((line_start_offset <= from)) && ((from <= line_end_offset))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(from - line_start_offset),(((to <= line_end_offset))?(to - line_start_offset):cljs.core.cst$kw$infinity)], null);
} else {
return null;

}
}
});
andel.core.scroll = (function (){var G__22088 = ({"shouldComponentUpdate": (function (new_props,new_state){
var this$ = this;
var old_props = (this$["props"]);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((old_props["props"]),(new_props["props"]));
}), "componentDidMount": (function (){
var cmp = this;
var props = ((cmp["props"])["props"]);
var node = ReactDOM.findDOMNode(cmp);
var on_resize = ((function (props,node,cmp){
return (function (){
var height = (node["clientHeight"]);
var width = (node["clientWidth"]);
var G__22091 = (width - (0));
var G__22092 = (height - (3));
var fexpr__22090 = (function (){var G__22093 = cljs.core.cst$kw$onResize;
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(G__22093) : props.call(null,G__22093));
})();
return (fexpr__22090.cljs$core$IFn$_invoke$arity$2 ? fexpr__22090.cljs$core$IFn$_invoke$arity$2(G__22091,G__22092) : fexpr__22090.call(null,G__22091,G__22092));
});})(props,node,cmp))
;
on_resize();

return window.addEventListener("resize",on_resize);
}), "render": (function (_){
var this$ = this;
var props = ((this$["props"])["props"]);
var child = (function (){var G__22094 = cljs.core.cst$kw$child;
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(G__22094) : props.call(null,G__22094));
})();
var on_resize = (function (){var G__22095 = cljs.core.cst$kw$onResize;
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(G__22095) : props.call(null,G__22095));
})();
var on_mouse_wheel = (function (){var G__22096 = cljs.core.cst$kw$onMouseWheel;
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(G__22096) : props.call(null,G__22096));
})();
return andel.core.el.cljs$core$IFn$_invoke$arity$3("div",({"key": "scroll", "style": ({"display": "flex", "flex": "1", "overflow": cljs.core.cst$kw$hidden}), "onWheel": on_mouse_wheel}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [child], null));
})});
return createReactClass(G__22088);
})();
andel.core.prepare_markup = (function andel$core$prepare_markup(markup,from,to){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (marker){
return andel.intervals.__GT_Marker((function (){var x__8016__auto__ = (0);
var y__8017__auto__ = (marker.from - from);
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})(),(function (){var x__8016__auto__ = (0);
var y__8017__auto__ = (marker.to - from);
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})(),false,false,marker.background,marker.foreground);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (marker){
return ((marker.from <= to)) && ((from <= marker.to));
}),markup));
});
andel.core.editor_viewport = (function andel$core$editor_viewport(props){
var state = (props["editorState"]);
var map__22099 = cljs.core.deref(state);
var map__22099__$1 = ((((!((map__22099 == null)))?((((map__22099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22099):map__22099);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22099__$1,cljs.core.cst$kw$editor);
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22099__$1,cljs.core.cst$kw$document);
var viewport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22099__$1,cljs.core.cst$kw$viewport);
var map__22100 = viewport;
var map__22100__$1 = ((((!((map__22100 == null)))?((((map__22100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22100):map__22100);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22100__$1,cljs.core.cst$kw$pos);
var view_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22100__$1,cljs.core.cst$kw$view_DASH_size);
var metrics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22100__$1,cljs.core.cst$kw$metrics);
var line_height = andel.utils.line_height(metrics);
var map__22101 = document;
var map__22101__$1 = ((((!((map__22101 == null)))?((((map__22101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22101):map__22101);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22101__$1,cljs.core.cst$kw$text);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22101__$1,cljs.core.cst$kw$lines);
var hashes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22101__$1,cljs.core.cst$kw$hashes);
var map__22102 = editor;
var map__22102__$1 = ((((!((map__22102 == null)))?((((map__22102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22102):map__22102);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22102__$1,cljs.core.cst$kw$caret);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22102__$1,cljs.core.cst$kw$selection);
var vec__22103 = pos;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22103,(0),null);
var from_y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22103,(1),null);
var vec__22106 = view_size;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22106,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22106,(1),null);
var from = ((from_y_offset / line_height) | (0));
var to = (from + (h / line_height));
var y_shift = (- (line_height * ((from_y_offset / line_height) - from)));
var line_zipper = andel.text.scan_to_line(andel.text.zipper(text),from);
var from_offset = andel.text.offset(line_zipper);
var to_offset = (andel.text.offset(andel.text.scan_to_line(line_zipper,(to + (1)))) - (1));
var caret_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(caret,cljs.core.cst$kw$offset);
var markup = andel.intervals.query_intervals(cljs.core.cst$kw$markup.cljs$core$IFn$_invoke$arity$1(document),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$from,from_offset,cljs.core.cst$kw$to,to_offset], null));
var ___$1 = (function (){var G__22116 = cljs.core.cst$kw$render_DASH_line;
var G__22117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$render_DASH_line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,andel.core.px(andel.utils.line_height(metrics)),cljs.core.cst$kw$position,cljs.core.cst$kw$relative], null)], null);
return (andel.core.defstyle.cljs$core$IFn$_invoke$arity$2 ? andel.core.defstyle.cljs$core$IFn$_invoke$arity$2(G__22116,G__22117) : andel.core.defstyle.call(null,G__22116,G__22117));
})();
var vec__22109 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (state,map__22099,map__22099__$1,editor,document,viewport,map__22100,map__22100__$1,pos,view_size,metrics,line_height,map__22101,map__22101__$1,text,lines,hashes,map__22102,map__22102__$1,caret,selection,vec__22103,_,from_y_offset,vec__22106,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1){
return (function (p__22118,index){
var vec__22119 = p__22118;
var line_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22119,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22119,(1),null);
var next_line = andel.text.scan_to_line(line_start,(index + (1)));
var line_start_offset = andel.text.offset(line_start);
var next_line_offset = andel.text.offset(next_line);
var len = (next_line_offset - line_start_offset);
var len__$1 = (cljs.core.truth_(andel.tree.end_QMARK_(next_line))?len:(len - (1)));
var line_text = andel.text.text(line_start,len__$1);
var line_end_offset = (line_start_offset + len__$1);
var line_sel = andel.core.line_selection(selection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_start_offset,line_end_offset], null));
var line_caret = ((((line_start_offset <= caret_offset)) && ((caret_offset <= line_end_offset)))?(caret_offset - line_start_offset):null);
var line_tokens = (function (){var or__7678__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hashes,cljs.core.hash(line_text));
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return cljs.core.cst$kw$tokens.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lines,index));
}
})();
var line_markup = andel.core.prepare_markup(markup,line_start_offset,line_end_offset);
var line_info = (new andel.core.LineInfo(line_text,line_tokens,line_markup,line_sel,line_caret,index,null,null,null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_line,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,andel.core.el.cljs$core$IFn$_invoke$arity$3("div",(function (){var obj22123 = {"key":index,"style":(function (){var obj22125 = {"transform":[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(andel.core.px(y_shift)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", 0px)")].join('')};
return obj22125;
})()};
return obj22123;
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.core.el.cljs$core$IFn$_invoke$arity$2(andel.core.render_line,({"key": index, "props": new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line_DASH_info,line_info,cljs.core.cst$kw$metrics,metrics], null)}))], null)))], null);
});})(state,map__22099,map__22099__$1,editor,document,viewport,map__22100,map__22100__$1,pos,view_size,metrics,line_height,map__22101,map__22101__$1,text,lines,hashes,map__22102,map__22102__$1,caret,selection,vec__22103,_,from_y_offset,vec__22106,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_zipper,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),cljs.core.range.cljs$core$IFn$_invoke$arity$2(from,to));
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22109,(0),null);
var hiccup = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22109,(1),null);
return andel.core.el.cljs$core$IFn$_invoke$arity$3("div",({"style": ({"background": andel.theme.background, "width": "100%"}), "key": "viewport", "onMouseDown": ((function (state,map__22099,map__22099__$1,editor,document,viewport,map__22100,map__22100__$1,pos,view_size,metrics,line_height,map__22101,map__22101__$1,text,lines,hashes,map__22102,map__22102__$1,caret,selection,vec__22103,_,from_y_offset,vec__22106,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__22109,___$2,hiccup){
return (function (event){
var x = (event["clientX"]);
var y = (event["clientY"]);
var line_col = andel.utils.pixels__GT_grid_position(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),from,y_shift,metrics);
var G__22126 = state;
var G__22127 = ((function (G__22126,x,y,line_col,state,map__22099,map__22099__$1,editor,document,viewport,map__22100,map__22100__$1,pos,view_size,metrics,line_height,map__22101,map__22101__$1,text,lines,hashes,map__22102,map__22102__$1,caret,selection,vec__22103,_,from_y_offset,vec__22106,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__22109,___$2,hiccup){
return (function (p1__22097_SHARP_){
return andel.controller.set_caret_at_grid_pos(p1__22097_SHARP_,line_col,false);
});})(G__22126,x,y,line_col,state,map__22099,map__22099__$1,editor,document,viewport,map__22100,map__22100__$1,pos,view_size,metrics,line_height,map__22101,map__22101__$1,text,lines,hashes,map__22102,map__22102__$1,caret,selection,vec__22103,_,from_y_offset,vec__22106,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__22109,___$2,hiccup))
;
return (andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2 ? andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2(G__22126,G__22127) : andel.core.swap_editor_BANG_.call(null,G__22126,G__22127));
});})(state,map__22099,map__22099__$1,editor,document,viewport,map__22100,map__22100__$1,pos,view_size,metrics,line_height,map__22101,map__22101__$1,text,lines,hashes,map__22102,map__22102__$1,caret,selection,vec__22103,_,from_y_offset,vec__22106,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__22109,___$2,hiccup))
, "onMouseMove": ((function (state,map__22099,map__22099__$1,editor,document,viewport,map__22100,map__22100__$1,pos,view_size,metrics,line_height,map__22101,map__22101__$1,text,lines,hashes,map__22102,map__22102__$1,caret,selection,vec__22103,_,from_y_offset,vec__22106,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__22109,___$2,hiccup){
return (function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((event["buttons"]),(1))){
var x = (event["clientX"]);
var y = (event["clientY"]);
var line_col = andel.utils.pixels__GT_grid_position(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),from,y_shift,metrics);
var G__22128 = state;
var G__22129 = ((function (G__22128,x,y,line_col,state,map__22099,map__22099__$1,editor,document,viewport,map__22100,map__22100__$1,pos,view_size,metrics,line_height,map__22101,map__22101__$1,text,lines,hashes,map__22102,map__22102__$1,caret,selection,vec__22103,_,from_y_offset,vec__22106,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__22109,___$2,hiccup){
return (function (p1__22098_SHARP_){
return andel.controller.set_caret_at_grid_pos(p1__22098_SHARP_,line_col,true);
});})(G__22128,x,y,line_col,state,map__22099,map__22099__$1,editor,document,viewport,map__22100,map__22100__$1,pos,view_size,metrics,line_height,map__22101,map__22101__$1,text,lines,hashes,map__22102,map__22102__$1,caret,selection,vec__22103,_,from_y_offset,vec__22106,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__22109,___$2,hiccup))
;
return (andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2 ? andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2(G__22128,G__22129) : andel.core.swap_editor_BANG_.call(null,G__22128,G__22129));
} else {
return null;
}
});})(state,map__22099,map__22099__$1,editor,document,viewport,map__22100,map__22100__$1,pos,view_size,metrics,line_height,map__22101,map__22101__$1,text,lines,hashes,map__22102,map__22102__$1,caret,selection,vec__22103,_,from_y_offset,vec__22106,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__22109,___$2,hiccup))
}),cljs.core.persistent_BANG_(hiccup));
});
andel.core.scroll_on_event = (function andel$core$scroll_on_event(state){
return (function (evt){
var map__22131 = cljs.core.deref(state);
var map__22131__$1 = ((((!((map__22131 == null)))?((((map__22131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22131):map__22131);
var viewport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22131__$1,cljs.core.cst$kw$viewport);
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22131__$1,cljs.core.cst$kw$document);
var screen_height = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$view_DASH_size,(1)], null));
var line_height = andel.utils.line_height(cljs.core.cst$kw$metrics.cljs$core$IFn$_invoke$arity$1(viewport));
var lines_count = andel.text.lines_count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,cljs.core.cst$kw$text));
var document_height = ((lines_count * line_height) - (screen_height / (2)));
var G__22133_22139 = state;
var G__22134_22140 = ((function (G__22133_22139,map__22131,map__22131__$1,viewport,document,screen_height,line_height,lines_count,document_height){
return (function (p1__22130_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__22130_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viewport,cljs.core.cst$kw$pos], null),((function (G__22133_22139,map__22131,map__22131__$1,viewport,document,screen_height,line_height,lines_count,document_height){
return (function (p__22135){
var vec__22136 = p__22135;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22136,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22136,(1),null);
var dx = evt.deltaX;
var dy = evt.deltaY;
if((Math.abs(dx) < Math.abs(dy))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(function (){var x__8023__auto__ = document_height;
var y__8024__auto__ = (function (){var x__8016__auto__ = (0);
var y__8017__auto__ = (y + dy);
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})();
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__8016__auto__ = (0);
var y__8017__auto__ = (x + dx);
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})(),y], null);
}
});})(G__22133_22139,map__22131,map__22131__$1,viewport,document,screen_height,line_height,lines_count,document_height))
);
});})(G__22133_22139,map__22131,map__22131__$1,viewport,document,screen_height,line_height,lines_count,document_height))
;
(andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2 ? andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2(G__22133_22139,G__22134_22140) : andel.core.swap_editor_BANG_.call(null,G__22133_22139,G__22134_22140));

return evt.preventDefault();
});
});
andel.core.set_viewport_size = (function andel$core$set_viewport_size(state,width,height){
var G__22142 = state;
var G__22143 = ((function (G__22142){
return (function (p1__22141_SHARP_){
return cljs.core.assoc_in(p1__22141_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viewport,cljs.core.cst$kw$view_DASH_size], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
});})(G__22142))
;
return (andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2 ? andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2(G__22142,G__22143) : andel.core.swap_editor_BANG_.call(null,G__22142,G__22143));
});
andel.core.foo = (function andel$core$foo(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(andel.core.state,cljs.core.update,cljs.core.cst$kw$foo,(function (p1__22144_SHARP_){
if((p1__22144_SHARP_ == null)){
return (1);
} else {
return (p1__22144_SHARP_ + (1));
}
}));
});
andel.core.next_tick = (function (){var w = window;
var or__7678__auto__ = (w["requestAnimationFrame"]);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
var or__7678__auto____$1 = (w["webkitRequestAnimationFrame"]);
if(cljs.core.truth_(or__7678__auto____$1)){
return or__7678__auto____$1;
} else {
var or__7678__auto____$2 = (w["mozRequestAnimationFrame"]);
if(cljs.core.truth_(or__7678__auto____$2)){
return or__7678__auto____$2;
} else {
return (w["msRequestAnimationFrame"]);
}
}
}
})();
andel.core.editor = (function (){var G__22145 = ({"componentDidMount": (function (){
var cmp = this;
var _STAR_state = ((cmp["props"])["editorState"]);
var _STAR_scheduled_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return cljs.core.add_watch(_STAR_state,cljs.core.cst$kw$editor_DASH_view,((function (_STAR_state,_STAR_scheduled_QMARK_,cmp){
return (function (_,___$1,old_state,new_state){
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)) && (cljs.core.not(cljs.core.deref(_STAR_scheduled_QMARK_)))){
cljs.core.reset_BANG_(_STAR_scheduled_QMARK_,true);

var G__22146 = ((function (_STAR_state,_STAR_scheduled_QMARK_,cmp){
return (function (){
cljs.core.reset_BANG_(_STAR_scheduled_QMARK_,false);

return (cmp["forceUpdate"])();
});})(_STAR_state,_STAR_scheduled_QMARK_,cmp))
;
return (andel.core.next_tick.cljs$core$IFn$_invoke$arity$1 ? andel.core.next_tick.cljs$core$IFn$_invoke$arity$1(G__22146) : andel.core.next_tick.call(null,G__22146));
} else {
return null;
}
});})(_STAR_state,_STAR_scheduled_QMARK_,cmp))
);
}), "componentWillUnmount": (function (){
var cmp = this;
var _STAR_state = ((cmp["props"])["editorState"]);
return cljs.core.remove_watch(_STAR_state,cljs.core.cst$kw$editor_DASH_view);
}), "shouldComponentUpdate": (function (){
return false;
}), "render": (function (){
var cmp = this;
var _STAR_state = ((cmp["props"])["editorState"]);
return andel.core.el.cljs$core$IFn$_invoke$arity$3("div",({"key": "editor", "style": ({"display": "flex", "flex": "1"}), "tabIndex": (-1), "onFocus": ((function (_STAR_state,cmp){
return (function (){
var ta = ((cmp["refs"])["textarea"]);
if(cljs.core.truth_(ta)){
return ta.focus();
} else {
return null;
}
});})(_STAR_state,cmp))
}),[andel.core.el.cljs$core$IFn$_invoke$arity$2(andel.core.scroll,(function (){var obj22148 = {"key":"viewport","props":new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$child,andel.core.el.cljs$core$IFn$_invoke$arity$2(andel.core.editor_viewport,({"key": "editor-viewport", "editorState": andel.core.state})),cljs.core.cst$kw$onResize,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(andel.core.set_viewport_size,_STAR_state),cljs.core.cst$kw$onMouseWheel,andel.core.scroll_on_event(_STAR_state)], null)};
return obj22148;
})()),andel.core.el.cljs$core$IFn$_invoke$arity$2("textarea",({"key": "textarea", "ref": "textarea", "autoFocus": true, "style": ({"opacity": (0), "pading": "0px", "border": cljs.core.cst$kw$none, "height": "0px", "width": "0px"}), "onInput": ((function (_STAR_state,cmp){
return (function (evt){
var e = evt.target;
var val = e.value;
e.value = "";

return (andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$3 ? andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_state,andel.controller.type_in,val) : andel.core.swap_editor_BANG_.call(null,_STAR_state,andel.controller.type_in,val));
});})(_STAR_state,cmp))
}))]);
})});
return createReactClass(G__22145);
})();
andel.core.main = andel.core.el.cljs$core$IFn$_invoke$arity$3("div",({"style": ({"display": "flex", "flex": "1"}), "key": "main"}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.core.el.cljs$core$IFn$_invoke$arity$2(andel.core.editor,({"editorState": andel.core.state, "key": "editor"}))], null));
andel.core.include_script = (function andel$core$include_script(src){
var e = document.createElement("script");
var res = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
(e["onload"] = ((function (e,res){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(res,cljs.core.cst$kw$done);
});})(e,res))
);

var G__22149_22150 = e;
G__22149_22150.setAttribute("type","text/javascript");

G__22149_22150.setAttribute("src",src);


andel.core.head().appendChild(e);

return res;
});
andel.core.include_style = (function andel$core$include_style(src,cb){
var e = document.createElement("link");
(e["onload"] = cb);

var G__22151_22152 = e;
G__22151_22152.setAttribute("type","text/css");

G__22151_22152.setAttribute("rel","stylesheet");

G__22151_22152.setAttribute("href",src);


return andel.core.head().appendChild(e);
});
andel.core.deliver_lexems_BANG_ = (function andel$core$deliver_lexems_BANG_(p__22153,state_ref){
var map__22154 = p__22153;
var map__22154__$1 = ((((!((map__22154 == null)))?((((map__22154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22154):map__22154);
var req_ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,cljs.core.cst$kw$req_DASH_ts);
var tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,cljs.core.cst$kw$tokens);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,cljs.core.cst$kw$index);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22154__$1,cljs.core.cst$kw$text);
var res = (function (){var G__22156 = state_ref;
var G__22157 = ((function (G__22156,map__22154,map__22154__$1,req_ts,tokens,index,text){
return (function (p__22158){
var map__22159 = p__22158;
var map__22159__$1 = ((((!((map__22159 == null)))?((((map__22159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22159):map__22159);
var state = map__22159__$1;
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22159__$1,cljs.core.cst$kw$document);
var map__22161 = document;
var map__22161__$1 = ((((!((map__22161 == null)))?((((map__22161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22161):map__22161);
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22161__$1,cljs.core.cst$kw$timestamp);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(timestamp,req_ts)){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$lines,index,cljs.core.cst$kw$tokens], null),tokens),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$hashes,cljs.core.hash(text)], null),tokens),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$first_DASH_invalid], null),(index + (1)));
} else {
return state;
}
});})(G__22156,map__22154,map__22154__$1,req_ts,tokens,index,text))
;
return (andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2 ? andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2(G__22156,G__22157) : andel.core.swap_editor_BANG_.call(null,G__22156,G__22157));
})();
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$timestamp], null)),req_ts);
});
andel.core.attach_lexer_BANG_ = (function andel$core$attach_lexer_BANG_(state_ref){
var map__22163 = cljs.core.deref(state_ref);
var map__22163__$1 = ((((!((map__22163 == null)))?((((map__22163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22163):map__22163);
var state = map__22163__$1;
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22163__$1,cljs.core.cst$kw$document);
var map__22164 = document;
var map__22164__$1 = ((((!((map__22164 == null)))?((((map__22164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22164):map__22164);
var modespec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22164__$1,cljs.core.cst$kw$modespec);
var lexer_broker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22164__$1,cljs.core.cst$kw$lexer_DASH_broker);
var map__22165 = andel.lexer.new_lexer_worker(modespec);
var map__22165__$1 = ((((!((map__22165 == null)))?((((map__22165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22165):map__22165);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22165__$1,cljs.core.cst$kw$input);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22165__$1,cljs.core.cst$kw$output);
var c__16291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto__,map__22163,map__22163__$1,state,document,map__22164,map__22164__$1,modespec,lexer_broker,map__22165,map__22165__$1,input,output){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto__,map__22163,map__22163__$1,state,document,map__22164,map__22164__$1,modespec,lexer_broker,map__22165,map__22165__$1,input,output){
return (function (state_22274){
var state_val_22275 = (state_22274[(1)]);
if((state_val_22275 === (7))){
var state_22274__$1 = state_22274;
var statearr_22276_22336 = state_22274__$1;
(statearr_22276_22336[(2)] = null);

(statearr_22276_22336[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (20))){
var inst_22235 = cljs.core.async.timeout((1));
var state_22274__$1 = state_22274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22274__$1,(23),inst_22235);
} else {
if((state_val_22275 === (27))){
var inst_22231 = (state_22274[(7)]);
var inst_22253 = andel.core.deliver_lexems_BANG_(inst_22231,state_ref);
var state_22274__$1 = state_22274;
if(cljs.core.truth_(inst_22253)){
var statearr_22277_22337 = state_22274__$1;
(statearr_22277_22337[(1)] = (30));

} else {
var statearr_22278_22338 = state_22274__$1;
(statearr_22278_22338[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (1))){
var inst_22169 = null;
var inst_22170 = (0);
var inst_22171 = (0);
var state_22274__$1 = (function (){var statearr_22279 = state_22274;
(statearr_22279[(8)] = inst_22171);

(statearr_22279[(9)] = inst_22169);

(statearr_22279[(10)] = inst_22170);

return statearr_22279;
})();
var statearr_22280_22339 = state_22274__$1;
(statearr_22280_22339[(2)] = null);

(statearr_22280_22339[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (24))){
var inst_22231 = (state_22274[(7)]);
var inst_22242 = (state_22274[(11)]);
var inst_22245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22246 = [cljs.core.cst$kw$document,cljs.core.cst$kw$first_DASH_invalid];
var inst_22247 = (new cljs.core.PersistentVector(null,2,(5),inst_22245,inst_22246,null));
var inst_22248 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_22231,inst_22247);
var inst_22169 = inst_22231;
var inst_22170 = inst_22248;
var inst_22171 = inst_22242;
var state_22274__$1 = (function (){var statearr_22281 = state_22274;
(statearr_22281[(8)] = inst_22171);

(statearr_22281[(9)] = inst_22169);

(statearr_22281[(10)] = inst_22170);

return statearr_22281;
})();
var statearr_22282_22340 = state_22274__$1;
(statearr_22282_22340[(2)] = null);

(statearr_22282_22340[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (4))){
var inst_22169 = (state_22274[(9)]);
var inst_22187 = (inst_22169 == null);
var state_22274__$1 = state_22274;
if(cljs.core.truth_(inst_22187)){
var statearr_22283_22341 = state_22274__$1;
(statearr_22283_22341[(1)] = (7));

} else {
var statearr_22284_22342 = state_22274__$1;
(statearr_22284_22342[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (15))){
var inst_22204 = (state_22274[(2)]);
var state_22274__$1 = state_22274;
var statearr_22285_22343 = state_22274__$1;
(statearr_22285_22343[(2)] = inst_22204);

(statearr_22285_22343[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (21))){
var inst_22171 = (state_22274[(8)]);
var state_22274__$1 = state_22274;
var statearr_22287_22344 = state_22274__$1;
(statearr_22287_22344[(2)] = inst_22171);

(statearr_22287_22344[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (31))){
var inst_22170 = (state_22274[(10)]);
var state_22274__$1 = state_22274;
var statearr_22290_22345 = state_22274__$1;
(statearr_22290_22345[(2)] = inst_22170);

(statearr_22290_22345[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (32))){
var inst_22169 = (state_22274[(9)]);
var inst_22242 = (state_22274[(11)]);
var inst_22258 = (state_22274[(2)]);
var tmp22286 = inst_22169;
var inst_22169__$1 = tmp22286;
var inst_22170 = inst_22258;
var inst_22171 = inst_22242;
var state_22274__$1 = (function (){var statearr_22291 = state_22274;
(statearr_22291[(8)] = inst_22171);

(statearr_22291[(9)] = inst_22169__$1);

(statearr_22291[(10)] = inst_22170);

return statearr_22291;
})();
var statearr_22292_22346 = state_22274__$1;
(statearr_22292_22346[(2)] = null);

(statearr_22292_22346[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (33))){
var inst_22169 = (state_22274[(9)]);
var inst_22242 = (state_22274[(11)]);
var inst_22170 = (state_22274[(10)]);
var tmp22288 = inst_22169;
var tmp22289 = inst_22170;
var inst_22169__$1 = tmp22288;
var inst_22170__$1 = tmp22289;
var inst_22171 = inst_22242;
var state_22274__$1 = (function (){var statearr_22293 = state_22274;
(statearr_22293[(8)] = inst_22171);

(statearr_22293[(9)] = inst_22169__$1);

(statearr_22293[(10)] = inst_22170__$1);

return statearr_22293;
})();
var statearr_22294_22347 = state_22274__$1;
(statearr_22294_22347[(2)] = null);

(statearr_22294_22347[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (13))){
var state_22274__$1 = state_22274;
var statearr_22295_22348 = state_22274__$1;
(statearr_22295_22348[(2)] = null);

(statearr_22295_22348[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (22))){
var inst_22232 = (state_22274[(12)]);
var inst_22242 = (state_22274[(2)]);
var inst_22243 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22232,lexer_broker);
var state_22274__$1 = (function (){var statearr_22296 = state_22274;
(statearr_22296[(11)] = inst_22242);

return statearr_22296;
})();
if(inst_22243){
var statearr_22297_22349 = state_22274__$1;
(statearr_22297_22349[(1)] = (24));

} else {
var statearr_22298_22350 = state_22274__$1;
(statearr_22298_22350[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (29))){
var inst_22268 = (state_22274[(2)]);
var state_22274__$1 = state_22274;
var statearr_22299_22351 = state_22274__$1;
(statearr_22299_22351[(2)] = inst_22268);

(statearr_22299_22351[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (6))){
var inst_22207 = (state_22274[(13)]);
var inst_22207__$1 = (state_22274[(2)]);
var inst_22209 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22210 = [lexer_broker,output];
var inst_22211 = (new cljs.core.PersistentVector(null,2,(5),inst_22209,inst_22210,null));
var inst_22212 = (inst_22207__$1 == null);
var inst_22213 = cljs.core.not(inst_22212);
var state_22274__$1 = (function (){var statearr_22300 = state_22274;
(statearr_22300[(13)] = inst_22207__$1);

(statearr_22300[(14)] = inst_22211);

return statearr_22300;
})();
if(inst_22213){
var statearr_22301_22352 = state_22274__$1;
(statearr_22301_22352[(1)] = (17));

} else {
var statearr_22302_22353 = state_22274__$1;
(statearr_22302_22353[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (28))){
var inst_22232 = (state_22274[(12)]);
var inst_22261 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22232,input);
var state_22274__$1 = state_22274;
if(inst_22261){
var statearr_22303_22354 = state_22274__$1;
(statearr_22303_22354[(1)] = (33));

} else {
var statearr_22304_22355 = state_22274__$1;
(statearr_22304_22355[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (25))){
var inst_22232 = (state_22274[(12)]);
var inst_22251 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22232,output);
var state_22274__$1 = state_22274;
if(inst_22251){
var statearr_22305_22356 = state_22274__$1;
(statearr_22305_22356[(1)] = (27));

} else {
var statearr_22306_22357 = state_22274__$1;
(statearr_22306_22357[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (34))){
var state_22274__$1 = state_22274;
var statearr_22307_22358 = state_22274__$1;
(statearr_22307_22358[(2)] = null);

(statearr_22307_22358[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (17))){
var inst_22207 = (state_22274[(13)]);
var inst_22169 = (state_22274[(9)]);
var inst_22211 = (state_22274[(14)]);
var inst_22170 = (state_22274[(10)]);
var inst_22215 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22216 = [cljs.core.cst$kw$index,cljs.core.cst$kw$text,cljs.core.cst$kw$req_DASH_ts];
var inst_22217 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22218 = [cljs.core.cst$kw$document,cljs.core.cst$kw$timestamp];
var inst_22219 = (new cljs.core.PersistentVector(null,2,(5),inst_22217,inst_22218,null));
var inst_22220 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_22169,inst_22219);
var inst_22221 = [inst_22170,inst_22207,inst_22220];
var inst_22222 = cljs.core.PersistentHashMap.fromArrays(inst_22216,inst_22221);
var inst_22223 = [input,inst_22222];
var inst_22224 = (new cljs.core.PersistentVector(null,2,(5),inst_22215,inst_22223,null));
var inst_22225 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_22211,inst_22224);
var state_22274__$1 = state_22274;
var statearr_22308_22359 = state_22274__$1;
(statearr_22308_22359[(2)] = inst_22225);

(statearr_22308_22359[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (3))){
var inst_22272 = (state_22274[(2)]);
var state_22274__$1 = state_22274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22274__$1,inst_22272);
} else {
if((state_val_22275 === (12))){
var inst_22198 = (state_22274[(15)]);
var inst_22198__$1 = (state_22274[(2)]);
var inst_22199 = (inst_22198__$1 == null);
var state_22274__$1 = (function (){var statearr_22309 = state_22274;
(statearr_22309[(15)] = inst_22198__$1);

return statearr_22309;
})();
if(cljs.core.truth_(inst_22199)){
var statearr_22310_22360 = state_22274__$1;
(statearr_22310_22360[(1)] = (13));

} else {
var statearr_22311_22361 = state_22274__$1;
(statearr_22311_22361[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (2))){
var inst_22171 = (state_22274[(8)]);
var inst_22169 = (state_22274[(9)]);
var inst_22170 = (state_22274[(10)]);
var inst_22176 = (new Date());
var inst_22177 = inst_22176.getTime();
var inst_22178 = (inst_22177 - inst_22171);
var inst_22179 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22180 = [cljs.core.cst$kw$document,cljs.core.cst$kw$text];
var inst_22181 = (new cljs.core.PersistentVector(null,2,(5),inst_22179,inst_22180,null));
var inst_22182 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_22169,inst_22181);
var inst_22183 = andel.text.lines_count(inst_22182);
var inst_22184 = (inst_22170 < inst_22183);
var state_22274__$1 = (function (){var statearr_22312 = state_22274;
(statearr_22312[(16)] = inst_22178);

return statearr_22312;
})();
if(cljs.core.truth_(inst_22184)){
var statearr_22313_22362 = state_22274__$1;
(statearr_22313_22362[(1)] = (4));

} else {
var statearr_22314_22363 = state_22274__$1;
(statearr_22314_22363[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (23))){
var inst_22237 = (state_22274[(2)]);
var inst_22238 = (new Date());
var inst_22239 = inst_22238.getTime();
var state_22274__$1 = (function (){var statearr_22315 = state_22274;
(statearr_22315[(17)] = inst_22237);

return statearr_22315;
})();
var statearr_22316_22364 = state_22274__$1;
(statearr_22316_22364[(2)] = inst_22239);

(statearr_22316_22364[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (35))){
var inst_22266 = (state_22274[(2)]);
var state_22274__$1 = state_22274;
var statearr_22317_22365 = state_22274__$1;
(statearr_22317_22365[(2)] = inst_22266);

(statearr_22317_22365[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (19))){
var inst_22228 = (state_22274[(2)]);
var state_22274__$1 = state_22274;
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_22274__$1,(16),inst_22228,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$priority,true], 0));
} else {
if((state_val_22275 === (11))){
var inst_22192 = (state_22274[(18)]);
var inst_22196 = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(inst_22192);
var state_22274__$1 = state_22274;
var statearr_22318_22366 = state_22274__$1;
(statearr_22318_22366[(2)] = inst_22196);

(statearr_22318_22366[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (9))){
var inst_22192 = (state_22274[(18)]);
var inst_22192__$1 = (state_22274[(2)]);
var inst_22193 = (inst_22192__$1 == null);
var state_22274__$1 = (function (){var statearr_22319 = state_22274;
(statearr_22319[(18)] = inst_22192__$1);

return statearr_22319;
})();
if(cljs.core.truth_(inst_22193)){
var statearr_22320_22367 = state_22274__$1;
(statearr_22320_22367[(1)] = (10));

} else {
var statearr_22321_22368 = state_22274__$1;
(statearr_22321_22368[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (5))){
var state_22274__$1 = state_22274;
var statearr_22322_22369 = state_22274__$1;
(statearr_22322_22369[(2)] = null);

(statearr_22322_22369[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (14))){
var inst_22198 = (state_22274[(15)]);
var inst_22170 = (state_22274[(10)]);
var inst_22202 = andel.text.line_text(inst_22198,inst_22170);
var state_22274__$1 = state_22274;
var statearr_22323_22370 = state_22274__$1;
(statearr_22323_22370[(2)] = inst_22202);

(statearr_22323_22370[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (26))){
var inst_22270 = (state_22274[(2)]);
var state_22274__$1 = state_22274;
var statearr_22324_22371 = state_22274__$1;
(statearr_22324_22371[(2)] = inst_22270);

(statearr_22324_22371[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (16))){
var inst_22178 = (state_22274[(16)]);
var inst_22230 = (state_22274[(2)]);
var inst_22231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22230,(0),null);
var inst_22232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22230,(1),null);
var inst_22233 = ((10) < inst_22178);
var state_22274__$1 = (function (){var statearr_22325 = state_22274;
(statearr_22325[(12)] = inst_22232);

(statearr_22325[(7)] = inst_22231);

return statearr_22325;
})();
if(cljs.core.truth_(inst_22233)){
var statearr_22326_22372 = state_22274__$1;
(statearr_22326_22372[(1)] = (20));

} else {
var statearr_22327_22373 = state_22274__$1;
(statearr_22327_22373[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (30))){
var inst_22170 = (state_22274[(10)]);
var inst_22255 = (inst_22170 + (1));
var state_22274__$1 = state_22274;
var statearr_22328_22374 = state_22274__$1;
(statearr_22328_22374[(2)] = inst_22255);

(statearr_22328_22374[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (10))){
var state_22274__$1 = state_22274;
var statearr_22329_22375 = state_22274__$1;
(statearr_22329_22375[(2)] = null);

(statearr_22329_22375[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (18))){
var inst_22211 = (state_22274[(14)]);
var state_22274__$1 = state_22274;
var statearr_22330_22376 = state_22274__$1;
(statearr_22330_22376[(2)] = inst_22211);

(statearr_22330_22376[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22275 === (8))){
var inst_22169 = (state_22274[(9)]);
var inst_22190 = cljs.core.cst$kw$document.cljs$core$IFn$_invoke$arity$1(inst_22169);
var state_22274__$1 = state_22274;
var statearr_22331_22377 = state_22274__$1;
(statearr_22331_22377[(2)] = inst_22190);

(statearr_22331_22377[(1)] = (9));


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
});})(c__16291__auto__,map__22163,map__22163__$1,state,document,map__22164,map__22164__$1,modespec,lexer_broker,map__22165,map__22165__$1,input,output))
;
return ((function (switch__16189__auto__,c__16291__auto__,map__22163,map__22163__$1,state,document,map__22164,map__22164__$1,modespec,lexer_broker,map__22165,map__22165__$1,input,output){
return (function() {
var andel$core$attach_lexer_BANG__$_state_machine__16190__auto__ = null;
var andel$core$attach_lexer_BANG__$_state_machine__16190__auto____0 = (function (){
var statearr_22332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22332[(0)] = andel$core$attach_lexer_BANG__$_state_machine__16190__auto__);

(statearr_22332[(1)] = (1));

return statearr_22332;
});
var andel$core$attach_lexer_BANG__$_state_machine__16190__auto____1 = (function (state_22274){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_22274);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e22333){if((e22333 instanceof Object)){
var ex__16193__auto__ = e22333;
var statearr_22334_22378 = state_22274;
(statearr_22334_22378[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22274);

return cljs.core.cst$kw$recur;
} else {
throw e22333;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__22379 = state_22274;
state_22274 = G__22379;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
andel$core$attach_lexer_BANG__$_state_machine__16190__auto__ = function(state_22274){
switch(arguments.length){
case 0:
return andel$core$attach_lexer_BANG__$_state_machine__16190__auto____0.call(this);
case 1:
return andel$core$attach_lexer_BANG__$_state_machine__16190__auto____1.call(this,state_22274);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$core$attach_lexer_BANG__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = andel$core$attach_lexer_BANG__$_state_machine__16190__auto____0;
andel$core$attach_lexer_BANG__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = andel$core$attach_lexer_BANG__$_state_machine__16190__auto____1;
return andel$core$attach_lexer_BANG__$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto__,map__22163,map__22163__$1,state,document,map__22164,map__22164__$1,modespec,lexer_broker,map__22165,map__22165__$1,input,output))
})();
var state__16293__auto__ = (function (){var statearr_22335 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_22335[(6)] = c__16291__auto__);

return statearr_22335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto__,map__22163,map__22163__$1,state,document,map__22164,map__22164__$1,modespec,lexer_broker,map__22165,map__22165__$1,input,output))
);

return c__16291__auto__;
});
andel.core.wait_for_all = (function andel$core$wait_for_all(cs){
var m = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cs);
var c__16291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto__,m){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto__,m){
return (function (state_22395){
var state_val_22396 = (state_22395[(1)]);
if((state_val_22396 === (1))){
var inst_22380 = cljs.core.count(cs);
var inst_22381 = (0);
var state_22395__$1 = (function (){var statearr_22397 = state_22395;
(statearr_22397[(7)] = inst_22380);

(statearr_22397[(8)] = inst_22381);

return statearr_22397;
})();
var statearr_22398_22409 = state_22395__$1;
(statearr_22398_22409[(2)] = null);

(statearr_22398_22409[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22396 === (2))){
var inst_22380 = (state_22395[(7)]);
var inst_22381 = (state_22395[(8)]);
var inst_22383 = (inst_22381 < inst_22380);
var state_22395__$1 = state_22395;
if(cljs.core.truth_(inst_22383)){
var statearr_22399_22410 = state_22395__$1;
(statearr_22399_22410[(1)] = (4));

} else {
var statearr_22400_22411 = state_22395__$1;
(statearr_22400_22411[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22396 === (3))){
var inst_22393 = (state_22395[(2)]);
var state_22395__$1 = state_22395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22395__$1,inst_22393);
} else {
if((state_val_22396 === (4))){
var state_22395__$1 = state_22395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22395__$1,(7),m);
} else {
if((state_val_22396 === (5))){
var state_22395__$1 = state_22395;
var statearr_22401_22412 = state_22395__$1;
(statearr_22401_22412[(2)] = null);

(statearr_22401_22412[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22396 === (6))){
var inst_22391 = (state_22395[(2)]);
var state_22395__$1 = state_22395;
var statearr_22402_22413 = state_22395__$1;
(statearr_22402_22413[(2)] = inst_22391);

(statearr_22402_22413[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22396 === (7))){
var inst_22381 = (state_22395[(8)]);
var inst_22386 = (state_22395[(2)]);
var inst_22387 = (inst_22381 + (1));
var inst_22381__$1 = inst_22387;
var state_22395__$1 = (function (){var statearr_22403 = state_22395;
(statearr_22403[(8)] = inst_22381__$1);

(statearr_22403[(9)] = inst_22386);

return statearr_22403;
})();
var statearr_22404_22414 = state_22395__$1;
(statearr_22404_22414[(2)] = null);

(statearr_22404_22414[(1)] = (2));


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
});})(c__16291__auto__,m))
;
return ((function (switch__16189__auto__,c__16291__auto__,m){
return (function() {
var andel$core$wait_for_all_$_state_machine__16190__auto__ = null;
var andel$core$wait_for_all_$_state_machine__16190__auto____0 = (function (){
var statearr_22405 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22405[(0)] = andel$core$wait_for_all_$_state_machine__16190__auto__);

(statearr_22405[(1)] = (1));

return statearr_22405;
});
var andel$core$wait_for_all_$_state_machine__16190__auto____1 = (function (state_22395){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_22395);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e22406){if((e22406 instanceof Object)){
var ex__16193__auto__ = e22406;
var statearr_22407_22415 = state_22395;
(statearr_22407_22415[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22395);

return cljs.core.cst$kw$recur;
} else {
throw e22406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__22416 = state_22395;
state_22395 = G__22416;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
andel$core$wait_for_all_$_state_machine__16190__auto__ = function(state_22395){
switch(arguments.length){
case 0:
return andel$core$wait_for_all_$_state_machine__16190__auto____0.call(this);
case 1:
return andel$core$wait_for_all_$_state_machine__16190__auto____1.call(this,state_22395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$core$wait_for_all_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = andel$core$wait_for_all_$_state_machine__16190__auto____0;
andel$core$wait_for_all_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = andel$core$wait_for_all_$_state_machine__16190__auto____1;
return andel$core$wait_for_all_$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto__,m))
})();
var state__16293__auto__ = (function (){var statearr_22408 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_22408[(6)] = c__16291__auto__);

return statearr_22408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto__,m))
);

return c__16291__auto__;
});
andel.core.font__GT_str = (function andel$core$font__GT_str(font_name,height){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_name)].join('');
});
andel.core.measure = (function andel$core$measure(font_name,height,spacing){
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
ctx.font = andel.core.font__GT_str(font_name,height);

var width = ctx.measureText("X").width;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height,cljs.core.cst$kw$spacing,spacing], null);
});
andel.core.measure_async = (function andel$core$measure_async(font_name,size,spacing){
var c__16291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto__){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto__){
return (function (state_22434){
var state_val_22435 = (state_22434[(1)]);
if((state_val_22435 === (1))){
var inst_22417 = andel.core.measure(font_name,size,spacing);
var state_22434__$1 = (function (){var statearr_22436 = state_22434;
(statearr_22436[(7)] = inst_22417);

return statearr_22436;
})();
var statearr_22437_22448 = state_22434__$1;
(statearr_22437_22448[(2)] = null);

(statearr_22437_22448[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22435 === (2))){
var inst_22419 = document.fonts;
var inst_22420 = andel.core.font__GT_str(font_name,size);
var inst_22421 = inst_22419.check(inst_22420);
var state_22434__$1 = state_22434;
if(cljs.core.truth_(inst_22421)){
var statearr_22438_22449 = state_22434__$1;
(statearr_22438_22449[(1)] = (4));

} else {
var statearr_22439_22450 = state_22434__$1;
(statearr_22439_22450[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22435 === (3))){
var inst_22432 = (state_22434[(2)]);
var state_22434__$1 = state_22434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22434__$1,inst_22432);
} else {
if((state_val_22435 === (4))){
var inst_22423 = andel.core.measure(font_name,size,spacing);
var state_22434__$1 = state_22434;
var statearr_22440_22451 = state_22434__$1;
(statearr_22440_22451[(2)] = inst_22423);

(statearr_22440_22451[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22435 === (5))){
var inst_22425 = cljs.core.async.timeout((100));
var state_22434__$1 = state_22434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22434__$1,(7),inst_22425);
} else {
if((state_val_22435 === (6))){
var inst_22430 = (state_22434[(2)]);
var state_22434__$1 = state_22434;
var statearr_22441_22452 = state_22434__$1;
(statearr_22441_22452[(2)] = inst_22430);

(statearr_22441_22452[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22435 === (7))){
var inst_22427 = (state_22434[(2)]);
var state_22434__$1 = (function (){var statearr_22442 = state_22434;
(statearr_22442[(8)] = inst_22427);

return statearr_22442;
})();
var statearr_22443_22453 = state_22434__$1;
(statearr_22443_22453[(2)] = null);

(statearr_22443_22453[(1)] = (2));


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
});})(c__16291__auto__))
;
return ((function (switch__16189__auto__,c__16291__auto__){
return (function() {
var andel$core$measure_async_$_state_machine__16190__auto__ = null;
var andel$core$measure_async_$_state_machine__16190__auto____0 = (function (){
var statearr_22444 = [null,null,null,null,null,null,null,null,null];
(statearr_22444[(0)] = andel$core$measure_async_$_state_machine__16190__auto__);

(statearr_22444[(1)] = (1));

return statearr_22444;
});
var andel$core$measure_async_$_state_machine__16190__auto____1 = (function (state_22434){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_22434);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e22445){if((e22445 instanceof Object)){
var ex__16193__auto__ = e22445;
var statearr_22446_22454 = state_22434;
(statearr_22446_22454[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22434);

return cljs.core.cst$kw$recur;
} else {
throw e22445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__22455 = state_22434;
state_22434 = G__22455;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
andel$core$measure_async_$_state_machine__16190__auto__ = function(state_22434){
switch(arguments.length){
case 0:
return andel$core$measure_async_$_state_machine__16190__auto____0.call(this);
case 1:
return andel$core$measure_async_$_state_machine__16190__auto____1.call(this,state_22434);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$core$measure_async_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = andel$core$measure_async_$_state_machine__16190__auto____0;
andel$core$measure_async_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = andel$core$measure_async_$_state_machine__16190__auto____1;
return andel$core$measure_async_$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto__))
})();
var state__16293__auto__ = (function (){var statearr_22447 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_22447[(6)] = c__16291__auto__);

return statearr_22447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto__))
);

return c__16291__auto__;
});
andel.core.setup_font_BANG_ = (function andel$core$setup_font_BANG_(_STAR_state,font_type,font_size,spacing){
var c__16291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto__){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto__){
return (function (state_22462){
var state_val_22463 = (state_22462[(1)]);
if((state_val_22463 === (1))){
var inst_22456 = andel.core.measure_async(font_type,font_size,spacing);
var state_22462__$1 = state_22462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22462__$1,(2),inst_22456);
} else {
if((state_val_22463 === (2))){
var inst_22458 = (state_22462[(2)]);
var inst_22459 = (function (){var metrics = inst_22458;
return ((function (metrics,inst_22458,state_val_22463,c__16291__auto__){
return (function (state){
var map__22464 = metrics;
var map__22464__$1 = ((((!((map__22464 == null)))?((((map__22464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22464):map__22464);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22464__$1,cljs.core.cst$kw$height);
var G__22466_22472 = cljs.core.cst$kw$editor;
var G__22467_22473 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_family,font_type,cljs.core.cst$kw$font_DASH_size,andel.core.px(height),cljs.core.cst$kw$color,andel.theme.foreground,cljs.core.cst$kw$margin,"0px"], null)], null);
(andel.core.defstyle.cljs$core$IFn$_invoke$arity$2 ? andel.core.defstyle.cljs$core$IFn$_invoke$arity$2(G__22466_22472,G__22467_22473) : andel.core.defstyle.call(null,G__22466_22472,G__22467_22473));

return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viewport,cljs.core.cst$kw$metrics], null),metrics);
});
;})(metrics,inst_22458,state_val_22463,c__16291__auto__))
})();
var inst_22460 = (andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2 ? andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_state,inst_22459) : andel.core.swap_editor_BANG_.call(null,_STAR_state,inst_22459));
var state_22462__$1 = state_22462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22462__$1,inst_22460);
} else {
return null;
}
}
});})(c__16291__auto__))
;
return ((function (switch__16189__auto__,c__16291__auto__){
return (function() {
var andel$core$setup_font_BANG__$_state_machine__16190__auto__ = null;
var andel$core$setup_font_BANG__$_state_machine__16190__auto____0 = (function (){
var statearr_22468 = [null,null,null,null,null,null,null];
(statearr_22468[(0)] = andel$core$setup_font_BANG__$_state_machine__16190__auto__);

(statearr_22468[(1)] = (1));

return statearr_22468;
});
var andel$core$setup_font_BANG__$_state_machine__16190__auto____1 = (function (state_22462){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_22462);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e22469){if((e22469 instanceof Object)){
var ex__16193__auto__ = e22469;
var statearr_22470_22474 = state_22462;
(statearr_22470_22474[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22462);

return cljs.core.cst$kw$recur;
} else {
throw e22469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__22475 = state_22462;
state_22462 = G__22475;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
andel$core$setup_font_BANG__$_state_machine__16190__auto__ = function(state_22462){
switch(arguments.length){
case 0:
return andel$core$setup_font_BANG__$_state_machine__16190__auto____0.call(this);
case 1:
return andel$core$setup_font_BANG__$_state_machine__16190__auto____1.call(this,state_22462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$core$setup_font_BANG__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = andel$core$setup_font_BANG__$_state_machine__16190__auto____0;
andel$core$setup_font_BANG__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = andel$core$setup_font_BANG__$_state_machine__16190__auto____1;
return andel$core$setup_font_BANG__$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto__))
})();
var state__16293__auto__ = (function (){var statearr_22471 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_22471[(6)] = c__16291__auto__);

return statearr_22471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto__))
);

return c__16291__auto__;
});
andel.core.editor_text = "public class Main {\n    public static void main(String[] args) {\n    }\n}";
andel.core.style__GT_class = (function andel$core$style__GT_class(style){
var name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("style__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash_coll(style))].join('');
var G__22476_22477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),style], null);
(andel.core.defstyle.cljs$core$IFn$_invoke$arity$1 ? andel.core.defstyle.cljs$core$IFn$_invoke$arity$1(G__22476_22477) : andel.core.defstyle.call(null,G__22476_22477));

return name;
});
andel.core.create_marker = (function andel$core$create_marker(proto_marker){
var class_by_keys = (function andel$core$create_marker_$_class_by_keys(ks,style){
var style__$1 = cljs.core.select_keys(style,ks);
if(cljs.core.truth_(cljs.core.not_empty(style__$1))){
return andel.core.style__GT_class(style__$1);
} else {
return null;
}
});
var classes_by_keys = (function andel$core$create_marker_$_classes_by_keys(ks,styles){
var classes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(class_by_keys,ks),styles));
if(cljs.core.truth_(cljs.core.not_empty(classes))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",classes));
} else {
return null;
}
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(andel.intervals.map__GT_Marker(proto_marker),cljs.core.cst$kw$foreground,classes_by_keys(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$color,cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$font_DASH_style], null),cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(proto_marker))),cljs.core.cst$kw$background,classes_by_keys(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$border_DASH_bottom_DASH_style,cljs.core.cst$kw$border_DASH_color,cljs.core.cst$kw$border_DASH_width,cljs.core.cst$kw$border_DASH_radius], null),cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(proto_marker)));
});
andel.core.load_BANG_ = (function andel$core$load_BANG_(){
var G__22478_22523 = "keydown";
var G__22479_22524 = andel.keybind.dispatcher();
var G__22480_22525 = true;
window.addEventListener(G__22478_22523,G__22479_22524,G__22480_22525);

var loaded = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__16291__auto___22526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___22526,loaded){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___22526,loaded){
return (function (state_22513){
var state_val_22514 = (state_22513[(1)]);
if((state_val_22514 === (1))){
var inst_22481 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22482 = ["resources/public/codemirror/addon/runmode/runmode-standalone.js","resources/public/codemirror/addon/runmode/runmode-standalone.js","resources/public/codemirror/mode/javascript/javascript.js","resources/public/codemirror/mode/clike/clike.js","resources/public/codemirror/mode/clojure/clojure.js"];
var inst_22483 = (new cljs.core.PersistentVector(null,5,(5),inst_22481,inst_22482,null));
var inst_22484 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(andel.core.include_script,inst_22483);
var inst_22485 = andel.core.wait_for_all(inst_22484);
var state_22513__$1 = state_22513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22513__$1,(2),inst_22485);
} else {
if((state_val_22514 === (2))){
var inst_22487 = (state_22513[(2)]);
var inst_22488 = andel.core.setup_font_BANG_(andel.core.state,"Fira Code",(16),(3));
var state_22513__$1 = (function (){var statearr_22515 = state_22513;
(statearr_22515[(7)] = inst_22487);

return statearr_22515;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22513__$1,(3),inst_22488);
} else {
if((state_val_22514 === (3))){
var inst_22490 = (state_22513[(2)]);
var inst_22491 = andel.core.attach_lexer_BANG_(andel.core.state);
var inst_22492 = (function (){return ((function (inst_22490,inst_22491,state_val_22514,c__16291__auto___22526,loaded){
return (function (_,___$1,old_s,new_s){
var old_ts = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$timestamp], null));
var new_ts = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$timestamp], null));
var broker = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$lexer_DASH_broker], null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_ts,new_ts)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(broker,new_s);
} else {
return null;
}
});
;})(inst_22490,inst_22491,state_val_22514,c__16291__auto___22526,loaded))
})();
var inst_22493 = cljs.core.add_watch(andel.core.state,cljs.core.cst$kw$lexer,inst_22492);
var inst_22494 = cljs_http.client.get("resources/public/EditorImpl.java");
var state_22513__$1 = (function (){var statearr_22516 = state_22513;
(statearr_22516[(8)] = inst_22493);

(statearr_22516[(9)] = inst_22490);

(statearr_22516[(10)] = inst_22491);

return statearr_22516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22513__$1,(4),inst_22494);
} else {
if((state_val_22514 === (4))){
var inst_22496 = (state_22513[(2)]);
var inst_22497 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_22496);
var inst_22498 = (andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$3 ? andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$3(andel.core.state,andel.controller.set_text,inst_22497) : andel.core.swap_editor_BANG_.call(null,andel.core.state,andel.controller.set_text,inst_22497));
var inst_22499 = cljs_http.client.get("resources/public/markup.txt");
var state_22513__$1 = (function (){var statearr_22517 = state_22513;
(statearr_22517[(11)] = inst_22498);

return statearr_22517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22513__$1,(5),inst_22499);
} else {
if((state_val_22514 === (5))){
var inst_22501 = (state_22513[(2)]);
var inst_22502 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_22501);
var inst_22503 = cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(inst_22502);
var inst_22504 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from,inst_22503);
var inst_22505 = cljs.core.count(inst_22504);
var inst_22506 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("MARKUP LOADED: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22505)].join('');
var inst_22507 = console.log(inst_22506);
var inst_22508 = (function (){var markup = inst_22504;
return ((function (markup,inst_22501,inst_22502,inst_22503,inst_22504,inst_22505,inst_22506,inst_22507,state_val_22514,c__16291__auto___22526,loaded){
return (function (s){
return cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$markup], null),andel.intervals.add_intervals(andel.intervals.make_interval_tree(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(andel.core.create_marker,markup)));
});
;})(markup,inst_22501,inst_22502,inst_22503,inst_22504,inst_22505,inst_22506,inst_22507,state_val_22514,c__16291__auto___22526,loaded))
})();
var inst_22509 = (andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2 ? andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2(andel.core.state,inst_22508) : andel.core.swap_editor_BANG_.call(null,andel.core.state,inst_22508));
var state_22513__$1 = (function (){var statearr_22518 = state_22513;
(statearr_22518[(12)] = inst_22507);

(statearr_22518[(13)] = inst_22509);

return statearr_22518;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22513__$1,(6),loaded,cljs.core.cst$kw$done);
} else {
if((state_val_22514 === (6))){
var inst_22511 = (state_22513[(2)]);
var state_22513__$1 = state_22513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22513__$1,inst_22511);
} else {
return null;
}
}
}
}
}
}
});})(c__16291__auto___22526,loaded))
;
return ((function (switch__16189__auto__,c__16291__auto___22526,loaded){
return (function() {
var andel$core$load_BANG__$_state_machine__16190__auto__ = null;
var andel$core$load_BANG__$_state_machine__16190__auto____0 = (function (){
var statearr_22519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22519[(0)] = andel$core$load_BANG__$_state_machine__16190__auto__);

(statearr_22519[(1)] = (1));

return statearr_22519;
});
var andel$core$load_BANG__$_state_machine__16190__auto____1 = (function (state_22513){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_22513);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e22520){if((e22520 instanceof Object)){
var ex__16193__auto__ = e22520;
var statearr_22521_22527 = state_22513;
(statearr_22521_22527[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22513);

return cljs.core.cst$kw$recur;
} else {
throw e22520;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__22528 = state_22513;
state_22513 = G__22528;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
andel$core$load_BANG__$_state_machine__16190__auto__ = function(state_22513){
switch(arguments.length){
case 0:
return andel$core$load_BANG__$_state_machine__16190__auto____0.call(this);
case 1:
return andel$core$load_BANG__$_state_machine__16190__auto____1.call(this,state_22513);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$core$load_BANG__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = andel$core$load_BANG__$_state_machine__16190__auto____0;
andel$core$load_BANG__$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = andel$core$load_BANG__$_state_machine__16190__auto____1;
return andel$core$load_BANG__$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___22526,loaded))
})();
var state__16293__auto__ = (function (){var statearr_22522 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_22522[(6)] = c__16291__auto___22526);

return statearr_22522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___22526,loaded))
);


return loaded;
});
if(typeof andel.core.ready !== 'undefined'){
} else {
andel.core.ready = andel.core.load_BANG_();
}
andel.core.mount_root = (function andel$core$mount_root(){
var c__16291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto__){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto__){
return (function (state_22534){
var state_val_22535 = (state_22534[(1)]);
if((state_val_22535 === (1))){
var state_22534__$1 = state_22534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22534__$1,(2),andel.core.ready);
} else {
if((state_val_22535 === (2))){
var inst_22530 = (state_22534[(2)]);
var inst_22531 = document.getElementById("app");
var inst_22532 = ReactDOM.render(andel.core.main,inst_22531);
var state_22534__$1 = (function (){var statearr_22536 = state_22534;
(statearr_22536[(7)] = inst_22530);

return statearr_22536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22534__$1,inst_22532);
} else {
return null;
}
}
});})(c__16291__auto__))
;
return ((function (switch__16189__auto__,c__16291__auto__){
return (function() {
var andel$core$mount_root_$_state_machine__16190__auto__ = null;
var andel$core$mount_root_$_state_machine__16190__auto____0 = (function (){
var statearr_22537 = [null,null,null,null,null,null,null,null];
(statearr_22537[(0)] = andel$core$mount_root_$_state_machine__16190__auto__);

(statearr_22537[(1)] = (1));

return statearr_22537;
});
var andel$core$mount_root_$_state_machine__16190__auto____1 = (function (state_22534){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_22534);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e22538){if((e22538 instanceof Object)){
var ex__16193__auto__ = e22538;
var statearr_22539_22541 = state_22534;
(statearr_22539_22541[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22534);

return cljs.core.cst$kw$recur;
} else {
throw e22538;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__22542 = state_22534;
state_22534 = G__22542;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
andel$core$mount_root_$_state_machine__16190__auto__ = function(state_22534){
switch(arguments.length){
case 0:
return andel$core$mount_root_$_state_machine__16190__auto____0.call(this);
case 1:
return andel$core$mount_root_$_state_machine__16190__auto____1.call(this,state_22534);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$core$mount_root_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = andel$core$mount_root_$_state_machine__16190__auto____0;
andel$core$mount_root_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = andel$core$mount_root_$_state_machine__16190__auto____1;
return andel$core$mount_root_$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto__))
})();
var state__16293__auto__ = (function (){var statearr_22540 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_22540[(6)] = c__16291__auto__);

return statearr_22540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto__))
);

return c__16291__auto__;
});
andel.core.init_BANG_ = (function andel$core$init_BANG_(){
return andel.core.mount_root();
});
andel.core.capture = (function andel$core$capture(f){
return (function (evt,_){
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

evt.stopPropagation();

return evt.preventDefault();
});
});
andel.core.bind_function_BANG_ = (function andel$core$bind_function_BANG_(var_args){
var args__8918__auto__ = [];
var len__8911__auto___22548 = arguments.length;
var i__8912__auto___22549 = (0);
while(true){
if((i__8912__auto___22549 < len__8911__auto___22548)){
args__8918__auto__.push((arguments[i__8912__auto___22549]));

var G__22550 = (i__8912__auto___22549 + (1));
i__8912__auto___22549 = G__22550;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((2) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((2)),(0),null)):null);
return andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8919__auto__);
});

andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
return andel.keybind.bind_BANG_(key,cljs.core.cst$kw$global,andel.core.capture((function (){
var G__22546 = andel.core.state;
var G__22547 = ((function (G__22546){
return (function (s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,s,args);
});})(G__22546))
;
return (andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2 ? andel.core.swap_editor_BANG_.cljs$core$IFn$_invoke$arity$2(G__22546,G__22547) : andel.core.swap_editor_BANG_.call(null,G__22546,G__22547));
})));
});

andel.core.bind_function_BANG_.cljs$lang$maxFixedArity = (2);

andel.core.bind_function_BANG_.cljs$lang$applyTo = (function (seq22543){
var G__22544 = cljs.core.first(seq22543);
var seq22543__$1 = cljs.core.next(seq22543);
var G__22545 = cljs.core.first(seq22543__$1);
var seq22543__$2 = cljs.core.next(seq22543__$1);
return andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22544,G__22545,seq22543__$2);
});

andel.core.bind_function_BANG_("backspace",andel.controller.backspace);
andel.core.bind_function_BANG_("delete",andel.controller.delete$);
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("pgup",andel.controller.pg_move,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$up,false], 0));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("pgdown",andel.controller.pg_move,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$down,false], 0));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-pgup",andel.controller.pg_move,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$up,true], 0));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-pgdown",andel.controller.pg_move,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$down,true], 0));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("home",andel.controller.home,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-home",andel.controller.home,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("end",andel.controller.end,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-end",andel.controller.end,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
andel.core.bind_function_BANG_("tab",(function (state){
return andel.controller.type_in(state,"    ");
}));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("left",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$left,false], 0));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("right",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$right,false], 0));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("up",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$up,false], 0));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("down",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$down,false], 0));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-left",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$left,true], 0));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-right",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$right,true], 0));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-up",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$up,true], 0));
andel.core.bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-down",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$down,true], 0));
andel.core.bind_function_BANG_("esc",andel.controller.drop_selection_on_esc);
andel.core.bind_function_BANG_("enter",andel.controller.on_enter);
andel.core.current_time_BANG_ = (function andel$core$current_time_BANG_(){
return Date.now();
});
andel.core.text_tree_info = (function andel$core$text_tree_info(t){
var acc = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,(0),cljs.core.cst$kw$leafs,(0)], null);
var loc = andel.text.zipper(t);
while(true){
if(cljs.core.truth_(andel.tree.end_QMARK_(loc))){
var G__22551 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("TEXT: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join('');
return console.log(G__22551);
} else {
if(andel.tree.node_QMARK_((andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(loc) : andel.tree.node.call(null,loc)))){
var G__22552 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$nodes,cljs.core.inc);
var G__22553 = andel.tree.next(loc);
acc = G__22552;
loc = G__22553;
continue;
} else {
var G__22554 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$leafs,cljs.core.inc);
var G__22555 = andel.tree.next(loc);
acc = G__22554;
loc = G__22555;
continue;
}
}
break;
}
});
andel.core.intervals_tree_info = (function andel$core$intervals_tree_info(t){
var acc = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,(0),cljs.core.cst$kw$leafs,(0)], null);
var loc = andel.intervals.zipper(t);
while(true){
if(cljs.core.truth_(andel.tree.end_QMARK_(loc))){
var G__22556 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("INTERVALS: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join('');
return console.log(G__22556);
} else {
if(andel.tree.node_QMARK_((andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(loc) : andel.tree.node.call(null,loc)))){
var G__22557 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$nodes,cljs.core.inc);
var G__22558 = andel.tree.next(loc);
acc = G__22557;
loc = G__22558;
continue;
} else {
var G__22559 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.cst$kw$leafs,cljs.core.inc);
var G__22560 = andel.tree.next(loc);
acc = G__22559;
loc = G__22560;
continue;
}
}
break;
}
});
andel.core.bench = (function andel$core$bench(var_args){
var args__8918__auto__ = [];
var len__8911__auto___22569 = arguments.length;
var i__8912__auto___22570 = (0);
while(true){
if((i__8912__auto___22570 < len__8911__auto___22569)){
args__8918__auto__.push((arguments[i__8912__auto___22570]));

var G__22571 = (i__8912__auto___22570 + (1));
i__8912__auto___22570 = G__22571;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((2) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((2)),(0),null)):null);
return andel.core.bench.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8919__auto__);
});

andel.core.bench.cljs$core$IFn$_invoke$arity$variadic = (function (name,f,p__22564){
var map__22565 = p__22564;
var map__22565__$1 = ((((!((map__22565 == null)))?((((map__22565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22565):map__22565);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22565__$1,cljs.core.cst$kw$count,(10));
var start_time = andel.core.current_time_BANG_();
var G__22567_22572 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("START BENCH "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
console.log(G__22567_22572);

cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (start_time,map__22565,map__22565__$1,count){
return (function (f__$1){
return (f__$1.cljs$core$IFn$_invoke$arity$0 ? f__$1.cljs$core$IFn$_invoke$arity$0() : f__$1.call(null));
});})(start_time,map__22565,map__22565__$1,count))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,f));

var end_time = andel.core.current_time_BANG_();
var total_time = (end_time - start_time);
var G__22568 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("END BENCH: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$count,count,cljs.core.cst$kw$total,total_time,cljs.core.cst$kw$average,(total_time / count)], null))].join('');
return console.log(G__22568);
});

andel.core.bench.cljs$lang$maxFixedArity = (2);

andel.core.bench.cljs$lang$applyTo = (function (seq22561){
var G__22562 = cljs.core.first(seq22561);
var seq22561__$1 = cljs.core.next(seq22561);
var G__22563 = cljs.core.first(seq22561__$1);
var seq22561__$2 = cljs.core.next(seq22561__$1);
return andel.core.bench.cljs$core$IFn$_invoke$arity$variadic(G__22562,G__22563,seq22561__$2);
});

andel.core.bench_insert = (function andel$core$bench_insert(markup){
return andel.core.bench.cljs$core$IFn$_invoke$arity$variadic("TREE INSERT",(function (){
return andel.intervals.add_intervals(andel.intervals.make_interval_tree(),markup);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$count,(1)], 0));
});
andel.core.bench_insert_base = (function andel$core$bench_insert_base(markup){
return andel.core.bench.cljs$core$IFn$_invoke$arity$variadic("BASE INSERT",(function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$from,cljs.core.inc);
}),markup);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$count,(100)], 0));
});
andel.core.bench_query = (function andel$core$bench_query(markup){
var itree = andel.intervals.add_intervals(andel.intervals.make_interval_tree(),markup);
return andel.core.bench.cljs$core$IFn$_invoke$arity$variadic("TREE QUERY",((function (itree){
return (function (){
var from = cljs.core.rand_int((160000));
var to = (from + (3200));
return andel.intervals.query_intervals(itree,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$from,from,cljs.core.cst$kw$to,to], null));
});})(itree))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$count,(10000)], 0));
});
andel.core.play_query = (function andel$core$play_query(model,p__22574){
var map__22575 = p__22574;
var map__22575__$1 = ((((!((map__22575 == null)))?((((map__22575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22575):map__22575);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22575__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22575__$1,cljs.core.cst$kw$to);
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__22575,map__22575__$1,from,to){
return (function (p1__22573_SHARP_){
return andel.intervals.intersect(p1__22573_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$from,from,cljs.core.cst$kw$to,to], null));
});})(map__22575,map__22575__$1,from,to))
,model));
});
andel.core.bench_query_base = (function andel$core$bench_query_base(markup){
return andel.core.bench.cljs$core$IFn$_invoke$arity$variadic("QUERY BASE",(function (){
var from = cljs.core.rand_int((160000));
var to = (from + (3200));
return andel.core.play_query(markup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$from,from,cljs.core.cst$kw$to,to], null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$count,(1000)], 0));
});
andel.core.bench_type_in = (function andel$core$bench_type_in(markup){
var itree = andel.intervals.add_intervals(andel.intervals.make_interval_tree(),markup);
return andel.core.bench.cljs$core$IFn$_invoke$arity$variadic("TYPE-IN BENCH",((function (itree){
return (function (){
var offset = cljs.core.rand_int((160000));
var size = (1);
return andel.intervals.type_in(itree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offset,size], null));
});})(itree))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$count,(1000)], 0));
});
andel.core.bench_delete = (function andel$core$bench_delete(markup){
var itree = andel.intervals.add_intervals(andel.intervals.make_interval_tree(),markup);
return andel.core.bench.cljs$core$IFn$_invoke$arity$variadic("DELETE BENCH",((function (itree){
return (function (){
var offset = cljs.core.rand_int((160000));
var size = (1);
return andel.intervals.delete_range(itree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offset,size], null));
});})(itree))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$count,(1)], 0));
});
andel.core.bench_editing = (function andel$core$bench_editing(markup){
var itree = andel.intervals.add_intervals(andel.intervals.make_interval_tree(),markup);
return andel.core.bench("TREE EDITING",((function (itree){
return (function (){
var cmd = cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$insert,cljs.core.cst$kw$delete], null));
var G__22577 = cmd;
switch (G__22577) {
default:
return cljs.core.cst$kw$insert;

}
});})(itree))
);
});
andel.core.bind_function_BANG_("ctrl-b",(function (s){
var markup_22579 = cljs.core.cst$kw$raw_DASH_markers.cljs$core$IFn$_invoke$arity$1(s);
var interval_tree_22580 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$markup], null));
var text_tree_22581 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$text], null));
andel.core.intervals_tree_info(interval_tree_22580);

alert("BENCH DONE");

return s;
}));
