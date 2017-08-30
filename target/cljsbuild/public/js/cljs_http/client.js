// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__7666__auto__ = v;
if(cljs.core.truth_(and__7666__auto__)){
return (v > (0));
} else {
return and__7666__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__20423_SHARP_,p2__20422_SHARP_){
var vec__20424 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__20422_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20424,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20424,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20423_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20427_SHARP_){
return cljs_http.client.encode_val(k,p1__20427_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__20428){
var vec__20429 = p__20428;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20429,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20429,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__20432_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20432_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__7666__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__7666__auto__){
var and__7666__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__7666__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__7666__auto____$1;
}
} else {
return and__7666__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5276__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var params = temp__5276__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__20433 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20433) : client.call(null,G__20433));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__20434_SHARP_){
return cljs_http.client.decode_body(p1__20434_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__8918__auto__ = [];
var len__8911__auto___20442 = arguments.length;
var i__8912__auto___20443 = (0);
while(true){
if((i__8912__auto___20443 < len__8911__auto___20442)){
args__8918__auto__.push((arguments[i__8912__auto___20443]));

var G__20444 = (i__8912__auto___20443 + (1));
i__8912__auto___20443 = G__20444;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20437){
var vec__20438 = p__20437;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20438,(0),null);
return ((function (vec__20438,default_headers){
return (function (request){
var temp__5276__auto__ = (function (){var or__7678__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var default_headers__$1 = temp__5276__auto__;
var G__20441 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20441) : client.call(null,G__20441));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__20438,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq20435){
var G__20436 = cljs.core.first(seq20435);
var seq20435__$1 = cljs.core.next(seq20435);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__20436,seq20435__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__8918__auto__ = [];
var len__8911__auto___20452 = arguments.length;
var i__8912__auto___20453 = (0);
while(true){
if((i__8912__auto___20453 < len__8911__auto___20452)){
args__8918__auto__.push((arguments[i__8912__auto___20453]));

var G__20454 = (i__8912__auto___20453 + (1));
i__8912__auto___20453 = G__20454;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20447){
var vec__20448 = p__20447;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20448,(0),null);
return ((function (vec__20448,accept){
return (function (request){
var temp__5276__auto__ = (function (){var or__7678__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var accept__$1 = temp__5276__auto__;
var G__20451 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20451) : client.call(null,G__20451));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__20448,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq20445){
var G__20446 = cljs.core.first(seq20445);
var seq20445__$1 = cljs.core.next(seq20445);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__20446,seq20445__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__8918__auto__ = [];
var len__8911__auto___20462 = arguments.length;
var i__8912__auto___20463 = (0);
while(true){
if((i__8912__auto___20463 < len__8911__auto___20462)){
args__8918__auto__.push((arguments[i__8912__auto___20463]));

var G__20464 = (i__8912__auto___20463 + (1));
i__8912__auto___20463 = G__20464;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20457){
var vec__20458 = p__20457;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20458,(0),null);
return ((function (vec__20458,content_type){
return (function (request){
var temp__5276__auto__ = (function (){var or__7678__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var content_type__$1 = temp__5276__auto__;
var G__20461 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20461) : client.call(null,G__20461));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__20458,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq20455){
var G__20456 = cljs.core.first(seq20455);
var seq20455__$1 = cljs.core.next(seq20455);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__20456,seq20455__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5276__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var params = temp__5276__auto__;
var map__20465 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__20465__$1 = ((((!((map__20465 == null)))?((((map__20465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20465):map__20465);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20465__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20465__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__20467 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20467) : client.call(null,G__20467));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__20470 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__20470__$1 = ((((!((map__20470 == null)))?((((map__20470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20470):map__20470);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20470__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20470__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__20470,map__20470__$1,decoding,decoding_opts){
return (function (p1__20468_SHARP_){
return cljs_http.util.transit_decode(p1__20468_SHARP_,decoding,decoding_opts);
});})(map__20470,map__20470__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__20470,map__20470__$1,decoding,decoding_opts,transit_decode){
return (function (p1__20469_SHARP_){
return cljs_http.client.decode_body(p1__20469_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__20470,map__20470__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5276__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var params = temp__5276__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__20472 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20472) : client.call(null,G__20472));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__20473_SHARP_){
return cljs_http.client.decode_body(p1__20473_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__20474){
var map__20475 = p__20474;
var map__20475__$1 = ((((!((map__20475 == null)))?((((map__20475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20475):map__20475);
var req = map__20475__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20475__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__20477 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20477) : client.call(null,G__20477));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__20478){
var map__20479 = p__20478;
var map__20479__$1 = ((((!((map__20479 == null)))?((((map__20479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20479):map__20479);
var request = map__20479__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20479__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20479__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20479__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__7666__auto__ = form_params;
if(cljs.core.truth_(and__7666__auto__)){
var fexpr__20481 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__20481.cljs$core$IFn$_invoke$arity$1 ? fexpr__20481.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__20481.call(null,request_method));
} else {
return and__7666__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__20482 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20482) : client.call(null,G__20482));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__20483_20493 = cljs.core.seq(params);
var chunk__20484_20494 = null;
var count__20485_20495 = (0);
var i__20486_20496 = (0);
while(true){
if((i__20486_20496 < count__20485_20495)){
var vec__20487_20497 = chunk__20484_20494.cljs$core$IIndexed$_nth$arity$2(null,i__20486_20496);
var k_20498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20487_20497,(0),null);
var v_20499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20487_20497,(1),null);
if(cljs.core.coll_QMARK_(v_20499)){
form_data.append(cljs.core.name(k_20498),cljs.core.first(v_20499),cljs.core.second(v_20499));
} else {
form_data.append(cljs.core.name(k_20498),v_20499);
}

var G__20500 = seq__20483_20493;
var G__20501 = chunk__20484_20494;
var G__20502 = count__20485_20495;
var G__20503 = (i__20486_20496 + (1));
seq__20483_20493 = G__20500;
chunk__20484_20494 = G__20501;
count__20485_20495 = G__20502;
i__20486_20496 = G__20503;
continue;
} else {
var temp__5278__auto___20504 = cljs.core.seq(seq__20483_20493);
if(temp__5278__auto___20504){
var seq__20483_20505__$1 = temp__5278__auto___20504;
if(cljs.core.chunked_seq_QMARK_(seq__20483_20505__$1)){
var c__8590__auto___20506 = cljs.core.chunk_first(seq__20483_20505__$1);
var G__20507 = cljs.core.chunk_rest(seq__20483_20505__$1);
var G__20508 = c__8590__auto___20506;
var G__20509 = cljs.core.count(c__8590__auto___20506);
var G__20510 = (0);
seq__20483_20493 = G__20507;
chunk__20484_20494 = G__20508;
count__20485_20495 = G__20509;
i__20486_20496 = G__20510;
continue;
} else {
var vec__20490_20511 = cljs.core.first(seq__20483_20505__$1);
var k_20512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20490_20511,(0),null);
var v_20513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20490_20511,(1),null);
if(cljs.core.coll_QMARK_(v_20513)){
form_data.append(cljs.core.name(k_20512),cljs.core.first(v_20513),cljs.core.second(v_20513));
} else {
form_data.append(cljs.core.name(k_20512),v_20513);
}

var G__20514 = cljs.core.next(seq__20483_20505__$1);
var G__20515 = null;
var G__20516 = (0);
var G__20517 = (0);
seq__20483_20493 = G__20514;
chunk__20484_20494 = G__20515;
count__20485_20495 = G__20516;
i__20486_20496 = G__20517;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__20518){
var map__20519 = p__20518;
var map__20519__$1 = ((((!((map__20519 == null)))?((((map__20519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20519):map__20519);
var request = map__20519__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20519__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20519__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__7666__auto__ = multipart_params;
if(cljs.core.truth_(and__7666__auto__)){
var fexpr__20521 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__20521.cljs$core$IFn$_invoke$arity$1 ? fexpr__20521.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__20521.call(null,request_method));
} else {
return and__7666__auto__;
}
})())){
var G__20522 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20522) : client.call(null,G__20522));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5276__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5276__auto__)){
var m = temp__5276__auto__;
var G__20523 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20523) : client.call(null,G__20523));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__20524_SHARP_){
var G__20525 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20524_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20525) : client.call(null,G__20525));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__20527){
var map__20528 = p__20527;
var map__20528__$1 = ((((!((map__20528 == null)))?((((map__20528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20528):map__20528);
var req = map__20528__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20528__$1,cljs.core.cst$kw$query_DASH_params);
var temp__5276__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5276__auto__)){
var spec = temp__5276__auto__;
var G__20530 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__5276__auto__,map__20528,map__20528__$1,req,query_params){
return (function (p1__20526_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__20526_SHARP_,query_params], 0));
});})(spec,temp__5276__auto__,map__20528,map__20528__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20530) : client.call(null,G__20530));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__8918__auto__ = [];
var len__8911__auto___20538 = arguments.length;
var i__8912__auto___20539 = (0);
while(true){
if((i__8912__auto___20539 < len__8911__auto___20538)){
args__8918__auto__.push((arguments[i__8912__auto___20539]));

var G__20540 = (i__8912__auto___20539 + (1));
i__8912__auto___20539 = G__20540;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20533){
var vec__20534 = p__20533;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20534,(0),null);
return ((function (vec__20534,credentials){
return (function (req){
var credentials__$1 = (function (){var or__7678__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__20537 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20537) : client.call(null,G__20537));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__20534,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq20531){
var G__20532 = cljs.core.first(seq20531);
var seq20531__$1 = cljs.core.next(seq20531);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__20532,seq20531__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5276__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5276__auto__)){
var oauth_token = temp__5276__auto__;
var G__20541 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__20541) : client.call(null,G__20541));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5276__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var custom_channel = temp__5276__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__8918__auto__ = [];
var len__8911__auto___20549 = arguments.length;
var i__8912__auto___20550 = (0);
while(true){
if((i__8912__auto___20550 < len__8911__auto___20549)){
args__8918__auto__.push((arguments[i__8912__auto___20550]));

var G__20551 = (i__8912__auto___20550 + (1));
i__8912__auto___20550 = G__20551;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20544){
var vec__20545 = p__20544;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20545,(0),null);
var G__20548 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20548) : cljs_http.client.request.call(null,G__20548));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq20542){
var G__20543 = cljs.core.first(seq20542);
var seq20542__$1 = cljs.core.next(seq20542);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__20543,seq20542__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__8918__auto__ = [];
var len__8911__auto___20559 = arguments.length;
var i__8912__auto___20560 = (0);
while(true){
if((i__8912__auto___20560 < len__8911__auto___20559)){
args__8918__auto__.push((arguments[i__8912__auto___20560]));

var G__20561 = (i__8912__auto___20560 + (1));
i__8912__auto___20560 = G__20561;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20554){
var vec__20555 = p__20554;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20555,(0),null);
var G__20558 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20558) : cljs_http.client.request.call(null,G__20558));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq20552){
var G__20553 = cljs.core.first(seq20552);
var seq20552__$1 = cljs.core.next(seq20552);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__20553,seq20552__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__8918__auto__ = [];
var len__8911__auto___20569 = arguments.length;
var i__8912__auto___20570 = (0);
while(true){
if((i__8912__auto___20570 < len__8911__auto___20569)){
args__8918__auto__.push((arguments[i__8912__auto___20570]));

var G__20571 = (i__8912__auto___20570 + (1));
i__8912__auto___20570 = G__20571;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20564){
var vec__20565 = p__20564;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20565,(0),null);
var G__20568 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20568) : cljs_http.client.request.call(null,G__20568));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq20562){
var G__20563 = cljs.core.first(seq20562);
var seq20562__$1 = cljs.core.next(seq20562);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__20563,seq20562__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__8918__auto__ = [];
var len__8911__auto___20579 = arguments.length;
var i__8912__auto___20580 = (0);
while(true){
if((i__8912__auto___20580 < len__8911__auto___20579)){
args__8918__auto__.push((arguments[i__8912__auto___20580]));

var G__20581 = (i__8912__auto___20580 + (1));
i__8912__auto___20580 = G__20581;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20574){
var vec__20575 = p__20574;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20575,(0),null);
var G__20578 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20578) : cljs_http.client.request.call(null,G__20578));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq20572){
var G__20573 = cljs.core.first(seq20572);
var seq20572__$1 = cljs.core.next(seq20572);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__20573,seq20572__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__8918__auto__ = [];
var len__8911__auto___20589 = arguments.length;
var i__8912__auto___20590 = (0);
while(true){
if((i__8912__auto___20590 < len__8911__auto___20589)){
args__8918__auto__.push((arguments[i__8912__auto___20590]));

var G__20591 = (i__8912__auto___20590 + (1));
i__8912__auto___20590 = G__20591;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20584){
var vec__20585 = p__20584;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20585,(0),null);
var G__20588 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20588) : cljs_http.client.request.call(null,G__20588));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq20582){
var G__20583 = cljs.core.first(seq20582);
var seq20582__$1 = cljs.core.next(seq20582);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__20583,seq20582__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__8918__auto__ = [];
var len__8911__auto___20599 = arguments.length;
var i__8912__auto___20600 = (0);
while(true){
if((i__8912__auto___20600 < len__8911__auto___20599)){
args__8918__auto__.push((arguments[i__8912__auto___20600]));

var G__20601 = (i__8912__auto___20600 + (1));
i__8912__auto___20600 = G__20601;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20594){
var vec__20595 = p__20594;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20595,(0),null);
var G__20598 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20598) : cljs_http.client.request.call(null,G__20598));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq20592){
var G__20593 = cljs.core.first(seq20592);
var seq20592__$1 = cljs.core.next(seq20592);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__20593,seq20592__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__8918__auto__ = [];
var len__8911__auto___20609 = arguments.length;
var i__8912__auto___20610 = (0);
while(true){
if((i__8912__auto___20610 < len__8911__auto___20609)){
args__8918__auto__.push((arguments[i__8912__auto___20610]));

var G__20611 = (i__8912__auto___20610 + (1));
i__8912__auto___20610 = G__20611;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20604){
var vec__20605 = p__20604;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20605,(0),null);
var G__20608 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20608) : cljs_http.client.request.call(null,G__20608));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq20602){
var G__20603 = cljs.core.first(seq20602);
var seq20602__$1 = cljs.core.next(seq20602);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__20603,seq20602__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__8918__auto__ = [];
var len__8911__auto___20619 = arguments.length;
var i__8912__auto___20620 = (0);
while(true){
if((i__8912__auto___20620 < len__8911__auto___20619)){
args__8918__auto__.push((arguments[i__8912__auto___20620]));

var G__20621 = (i__8912__auto___20620 + (1));
i__8912__auto___20620 = G__20621;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20614){
var vec__20615 = p__20614;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20615,(0),null);
var G__20618 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20618) : cljs_http.client.request.call(null,G__20618));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq20612){
var G__20613 = cljs.core.first(seq20612);
var seq20612__$1 = cljs.core.next(seq20612);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__20613,seq20612__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__8918__auto__ = [];
var len__8911__auto___20629 = arguments.length;
var i__8912__auto___20630 = (0);
while(true){
if((i__8912__auto___20630 < len__8911__auto___20629)){
args__8918__auto__.push((arguments[i__8912__auto___20630]));

var G__20631 = (i__8912__auto___20630 + (1));
i__8912__auto___20630 = G__20631;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20624){
var vec__20625 = p__20624;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20625,(0),null);
var G__20628 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__20628) : cljs_http.client.request.call(null,G__20628));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq20622){
var G__20623 = cljs.core.first(seq20622);
var seq20622__$1 = cljs.core.next(seq20622);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__20623,seq20622__$1);
});

