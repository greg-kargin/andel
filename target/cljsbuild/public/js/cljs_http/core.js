// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5278__auto__ = (function (){var fexpr__19855 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__19855.cljs$core$IFn$_invoke$arity$1 ? fexpr__19855.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__19855.call(null,channel));
})();
if(cljs.core.truth_(temp__5278__auto__)){
var req = temp__5278__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__19856){
var vec__19857 = p__19856;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19857,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19857,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__19860 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__19860)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__19860)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__19860)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__19860)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__19860)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__19860)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19860)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__19861){
var map__19862 = p__19861;
var map__19862__$1 = ((((!((map__19862 == null)))?((((map__19862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19862):map__19862);
var request = map__19862__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19862__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19862__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19862__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__7678__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__19864 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__19864,default_headers);

cljs_http.core.apply_response_type_BANG_(G__19864,response_type);

G__19864.setTimeoutInterval(timeout);

G__19864.setWithCredentials(send_credentials);

return G__19864;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__19865){
var map__19866 = p__19865;
var map__19866__$1 = ((((!((map__19866 == null)))?((((map__19866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19866):map__19866);
var request = map__19866__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19866__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19866__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19866__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19866__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19866__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19866__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__7678__auto__ = request_method;
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__19866,map__19866__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__19868 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__19868) : cljs_http.core.error_kw.call(null,G__19868));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__19866,map__19866__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_19891 = ((function (channel,request_url,method,headers__$1,xhr,map__19866,map__19866__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__19866,map__19866__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__19869_19892 = xhr;
G__19869_19892.setProgressEventsEnabled(true);

G__19869_19892.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_19891,cljs.core.cst$kw$upload));

G__19869_19892.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_19891,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__16291__auto___19893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___19893,channel,request_url,method,headers__$1,xhr,map__19866,map__19866__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___19893,channel,request_url,method,headers__$1,xhr,map__19866,map__19866__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_19880){
var state_val_19881 = (state_19880[(1)]);
if((state_val_19881 === (1))){
var state_19880__$1 = state_19880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19880__$1,(2),cancel);
} else {
if((state_val_19881 === (2))){
var inst_19871 = (state_19880[(2)]);
var inst_19872 = xhr.isComplete();
var inst_19873 = cljs.core.not(inst_19872);
var state_19880__$1 = (function (){var statearr_19882 = state_19880;
(statearr_19882[(7)] = inst_19871);

return statearr_19882;
})();
if(inst_19873){
var statearr_19883_19894 = state_19880__$1;
(statearr_19883_19894[(1)] = (3));

} else {
var statearr_19884_19895 = state_19880__$1;
(statearr_19884_19895[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19881 === (3))){
var inst_19875 = xhr.abort();
var state_19880__$1 = state_19880;
var statearr_19885_19896 = state_19880__$1;
(statearr_19885_19896[(2)] = inst_19875);

(statearr_19885_19896[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19881 === (4))){
var state_19880__$1 = state_19880;
var statearr_19886_19897 = state_19880__$1;
(statearr_19886_19897[(2)] = null);

(statearr_19886_19897[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19881 === (5))){
var inst_19878 = (state_19880[(2)]);
var state_19880__$1 = state_19880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19880__$1,inst_19878);
} else {
return null;
}
}
}
}
}
});})(c__16291__auto___19893,channel,request_url,method,headers__$1,xhr,map__19866,map__19866__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__16189__auto__,c__16291__auto___19893,channel,request_url,method,headers__$1,xhr,map__19866,map__19866__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__16190__auto__ = null;
var cljs_http$core$xhr_$_state_machine__16190__auto____0 = (function (){
var statearr_19887 = [null,null,null,null,null,null,null,null];
(statearr_19887[(0)] = cljs_http$core$xhr_$_state_machine__16190__auto__);

(statearr_19887[(1)] = (1));

return statearr_19887;
});
var cljs_http$core$xhr_$_state_machine__16190__auto____1 = (function (state_19880){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_19880);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e19888){if((e19888 instanceof Object)){
var ex__16193__auto__ = e19888;
var statearr_19889_19898 = state_19880;
(statearr_19889_19898[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19880);

return cljs.core.cst$kw$recur;
} else {
throw e19888;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__19899 = state_19880;
state_19880 = G__19899;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__16190__auto__ = function(state_19880){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__16190__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__16190__auto____1.call(this,state_19880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__16190__auto____0;
cljs_http$core$xhr_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__16190__auto____1;
return cljs_http$core$xhr_$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___19893,channel,request_url,method,headers__$1,xhr,map__19866,map__19866__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__16293__auto__ = (function (){var statearr_19890 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_19890[(6)] = c__16291__auto___19893);

return statearr_19890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___19893,channel,request_url,method,headers__$1,xhr,map__19866,map__19866__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__19900){
var map__19901 = p__19900;
var map__19901__$1 = ((((!((map__19901 == null)))?((((map__19901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19901):map__19901);
var request = map__19901__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19901__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19901__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19901__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19901__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_19914 = jsonp.send(null,((function (channel,jsonp,map__19901,map__19901__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__19901,map__19901__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__19901,map__19901__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__19901,map__19901__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_19914], null));

if(cljs.core.truth_(cancel)){
var c__16291__auto___19915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16291__auto___19915,req_19914,channel,jsonp,map__19901,map__19901__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__16292__auto__ = (function (){var switch__16189__auto__ = ((function (c__16291__auto___19915,req_19914,channel,jsonp,map__19901,map__19901__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_19907){
var state_val_19908 = (state_19907[(1)]);
if((state_val_19908 === (1))){
var state_19907__$1 = state_19907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19907__$1,(2),cancel);
} else {
if((state_val_19908 === (2))){
var inst_19904 = (state_19907[(2)]);
var inst_19905 = jsonp.cancel(req_19914);
var state_19907__$1 = (function (){var statearr_19909 = state_19907;
(statearr_19909[(7)] = inst_19904);

return statearr_19909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19907__$1,inst_19905);
} else {
return null;
}
}
});})(c__16291__auto___19915,req_19914,channel,jsonp,map__19901,map__19901__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__16189__auto__,c__16291__auto___19915,req_19914,channel,jsonp,map__19901,map__19901__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__16190__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__16190__auto____0 = (function (){
var statearr_19910 = [null,null,null,null,null,null,null,null];
(statearr_19910[(0)] = cljs_http$core$jsonp_$_state_machine__16190__auto__);

(statearr_19910[(1)] = (1));

return statearr_19910;
});
var cljs_http$core$jsonp_$_state_machine__16190__auto____1 = (function (state_19907){
while(true){
var ret_value__16191__auto__ = (function (){try{while(true){
var result__16192__auto__ = switch__16189__auto__(state_19907);
if(cljs.core.keyword_identical_QMARK_(result__16192__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16192__auto__;
}
break;
}
}catch (e19911){if((e19911 instanceof Object)){
var ex__16193__auto__ = e19911;
var statearr_19912_19916 = state_19907;
(statearr_19912_19916[(5)] = ex__16193__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19907);

return cljs.core.cst$kw$recur;
} else {
throw e19911;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16191__auto__,cljs.core.cst$kw$recur)){
var G__19917 = state_19907;
state_19907 = G__19917;
continue;
} else {
return ret_value__16191__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__16190__auto__ = function(state_19907){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__16190__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__16190__auto____1.call(this,state_19907);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__16190__auto____0;
cljs_http$core$jsonp_$_state_machine__16190__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__16190__auto____1;
return cljs_http$core$jsonp_$_state_machine__16190__auto__;
})()
;})(switch__16189__auto__,c__16291__auto___19915,req_19914,channel,jsonp,map__19901,map__19901__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__16293__auto__ = (function (){var statearr_19913 = (f__16292__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16292__auto__.cljs$core$IFn$_invoke$arity$0() : f__16292__auto__.call(null));
(statearr_19913[(6)] = c__16291__auto___19915);

return statearr_19913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16293__auto__);
});})(c__16291__auto___19915,req_19914,channel,jsonp,map__19901,map__19901__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__19918){
var map__19919 = p__19918;
var map__19919__$1 = ((((!((map__19919 == null)))?((((map__19919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19919):map__19919);
var request = map__19919__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19919__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
