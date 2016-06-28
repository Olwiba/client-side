(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function initialize(){var e=new google.maps.Map(document.getElementById("googleMap"),mapProp),t=[{featureType:"all",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{color:"#000000"},{lightness:13}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#144b53"},{lightness:14},{weight:1.4}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#08304b"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#0c4152"},{lightness:5}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#0b434f"},{lightness:25}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#0b3d51"},{lightness:16}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"transit",elementType:"all",stylers:[{color:"#146474"}]},{featureType:"water",elementType:"all",stylers:[{color:"#021019"}]}];e.setOptions({styles:t});new google.maps.Marker({position:mapPos,map:e,title:"Server / Person Located Here!"})}function updateISS(){xhr.get(endpoint,function(e,t){e&&console.error(e),console.log("Button was pressed"),console.log(t.body);var o=JSON.parse(t.body);console.log("this is my data ",typeof o.latitude,typeof o.longitude),myLat=o.latitude,myLong=o.longitude,console.log("This is after ",myLat,myLong);var l=document.getElementsByTagName("main")[0];l.innerHTML=showLocation(o),initialize();var r=document.getElementById("iss");r.addEventListener("click",updateISS)})}var xhr=require("xhr"),greeting=require("./views/greeting.hbs"),showLocation=require("./views/location.hbs");console.log("this is the newest page");var endpoint="https://api.wheretheiss.at/v1/satellites/25544",target=document.getElementsByTagName("main")[0],myLong=25,myLat=133,mapPos={lat:myLat,lng:myLong},mapProp={center:mapPos,zoom:6,mapTypeId:google.maps.MapTypeId.ROADMAP};target.innerHTML=showLocation(),initialize();var findISS=document.getElementById("iss");findISS.addEventListener("click",updateISS);
},{"./views/greeting.hbs":30,"./views/location.hbs":31,"xhr":27}],2:[function(require,module,exports){
function forEach(r,t,o){if(!isFunction(t))throw new TypeError("iterator must be a function");arguments.length<3&&(o=this),"[object Array]"===toString.call(r)?forEachArray(r,t,o):"string"==typeof r?forEachString(r,t,o):forEachObject(r,t,o)}function forEachArray(r,t,o){for(var n=0,a=r.length;n<a;n++)hasOwnProperty.call(r,n)&&t.call(o,r[n],n,r)}function forEachString(r,t,o){for(var n=0,a=r.length;n<a;n++)t.call(o,r.charAt(n),n,r)}function forEachObject(r,t,o){for(var n in r)hasOwnProperty.call(r,n)&&t.call(o,r[n],n,r)}var isFunction=require("is-function");module.exports=forEach;var toString=Object.prototype.toString,hasOwnProperty=Object.prototype.hasOwnProperty;

},{"is-function":24}],3:[function(require,module,exports){
(function (global){
"undefined"!=typeof window?module.exports=window:"undefined"!=typeof global?module.exports=global:"undefined"!=typeof self?module.exports=self:module.exports={};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r["default"]=e,r}function create(){var e=new base.HandlebarsEnvironment;return Utils.extend(e,base),e.SafeString=_handlebarsSafeString2["default"],e.Exception=_handlebarsException2["default"],e.Utils=Utils,e.escapeExpression=Utils.escapeExpression,e.VM=runtime,e.template=function(r){return runtime.template(r,e)},e}exports.__esModule=!0;var _handlebarsBase=require("./handlebars/base"),base=_interopRequireWildcard(_handlebarsBase),_handlebarsSafeString=require("./handlebars/safe-string"),_handlebarsSafeString2=_interopRequireDefault(_handlebarsSafeString),_handlebarsException=require("./handlebars/exception"),_handlebarsException2=_interopRequireDefault(_handlebarsException),_handlebarsUtils=require("./handlebars/utils"),Utils=_interopRequireWildcard(_handlebarsUtils),_handlebarsRuntime=require("./handlebars/runtime"),runtime=_interopRequireWildcard(_handlebarsRuntime),_handlebarsNoConflict=require("./handlebars/no-conflict"),_handlebarsNoConflict2=_interopRequireDefault(_handlebarsNoConflict),inst=create();inst.create=create,_handlebarsNoConflict2["default"](inst),inst["default"]=inst,exports["default"]=inst,module.exports=exports["default"];

},{"./handlebars/base":5,"./handlebars/exception":8,"./handlebars/no-conflict":18,"./handlebars/runtime":19,"./handlebars/safe-string":20,"./handlebars/utils":21}],5:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function HandlebarsEnvironment(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},_helpers.registerDefaultHelpers(this),_decorators.registerDefaultDecorators(this)}exports.__esModule=!0,exports.HandlebarsEnvironment=HandlebarsEnvironment;var _utils=require("./utils"),_exception=require("./exception"),_exception2=_interopRequireDefault(_exception),_helpers=require("./helpers"),_decorators=require("./decorators"),_logger=require("./logger"),_logger2=_interopRequireDefault(_logger),VERSION="4.0.5";exports.VERSION=VERSION;var COMPILER_REVISION=7;exports.COMPILER_REVISION=COMPILER_REVISION;var REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};exports.REVISION_CHANGES=REVISION_CHANGES;var objectType="[object Object]";HandlebarsEnvironment.prototype={constructor:HandlebarsEnvironment,logger:_logger2["default"],log:_logger2["default"].log,registerHelper:function(e,t){if(_utils.toString.call(e)===objectType){if(t)throw new _exception2["default"]("Arg not supported with multiple helpers");_utils.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(_utils.toString.call(e)===objectType)_utils.extend(this.partials,e);else{if("undefined"==typeof t)throw new _exception2["default"]('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(_utils.toString.call(e)===objectType){if(t)throw new _exception2["default"]("Arg not supported with multiple decorators");_utils.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var log=_logger2["default"].log;exports.log=log,exports.createFrame=_utils.createFrame,exports.logger=_logger2["default"];

},{"./decorators":6,"./exception":8,"./helpers":9,"./logger":17,"./utils":21}],6:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function registerDefaultDecorators(e){_decoratorsInline2["default"](e)}exports.__esModule=!0,exports.registerDefaultDecorators=registerDefaultDecorators;var _decoratorsInline=require("./decorators/inline"),_decoratorsInline2=_interopRequireDefault(_decoratorsInline);

},{"./decorators/inline":7}],7:[function(require,module,exports){
"use strict";exports.__esModule=!0;var _utils=require("../utils");exports["default"]=function(r){r.registerDecorator("inline",function(r,t,a,e){var s=r;return t.partials||(t.partials={},s=function(e,s){var i=a.partials;a.partials=_utils.extend({},i,t.partials);var l=r(e,s);return a.partials=i,l}),t.partials[e.args[0]]=e.fn,s})},module.exports=exports["default"];

},{"../utils":21}],8:[function(require,module,exports){
"use strict";function Exception(r,e){var o=e&&e.loc,t=void 0,s=void 0;o&&(t=o.start.line,s=o.start.column,r+=" - "+t+":"+s);for(var c=Error.prototype.constructor.call(this,r),i=0;i<errorProps.length;i++)this[errorProps[i]]=c[errorProps[i]];Error.captureStackTrace&&Error.captureStackTrace(this,Exception),o&&(this.lineNumber=t,this.column=s)}exports.__esModule=!0;var errorProps=["description","fileName","lineNumber","message","name","number","stack"];Exception.prototype=new Error,exports["default"]=Exception,module.exports=exports["default"];

},{}],9:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function registerDefaultHelpers(e){_helpersBlockHelperMissing2["default"](e),_helpersEach2["default"](e),_helpersHelperMissing2["default"](e),_helpersIf2["default"](e),_helpersLog2["default"](e),_helpersLookup2["default"](e),_helpersWith2["default"](e)}exports.__esModule=!0,exports.registerDefaultHelpers=registerDefaultHelpers;var _helpersBlockHelperMissing=require("./helpers/block-helper-missing"),_helpersBlockHelperMissing2=_interopRequireDefault(_helpersBlockHelperMissing),_helpersEach=require("./helpers/each"),_helpersEach2=_interopRequireDefault(_helpersEach),_helpersHelperMissing=require("./helpers/helper-missing"),_helpersHelperMissing2=_interopRequireDefault(_helpersHelperMissing),_helpersIf=require("./helpers/if"),_helpersIf2=_interopRequireDefault(_helpersIf),_helpersLog=require("./helpers/log"),_helpersLog2=_interopRequireDefault(_helpersLog),_helpersLookup=require("./helpers/lookup"),_helpersLookup2=_interopRequireDefault(_helpersLookup),_helpersWith=require("./helpers/with"),_helpersWith2=_interopRequireDefault(_helpersWith);

},{"./helpers/block-helper-missing":10,"./helpers/each":11,"./helpers/helper-missing":12,"./helpers/if":13,"./helpers/log":14,"./helpers/lookup":15,"./helpers/with":16}],10:[function(require,module,exports){
"use strict";exports.__esModule=!0;var _utils=require("../utils");exports["default"]=function(t){t.registerHelper("blockHelperMissing",function(e,r){var i=r.inverse,s=r.fn;if(e===!0)return s(this);if(e===!1||null==e)return i(this);if(_utils.isArray(e))return e.length>0?(r.ids&&(r.ids=[r.name]),t.helpers.each(e,r)):i(this);if(r.data&&r.ids){var a=_utils.createFrame(r.data);a.contextPath=_utils.appendContextPath(r.data.contextPath,r.name),r={data:a}}return s(e,r)})},module.exports=exports["default"];

},{"../utils":21}],11:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}exports.__esModule=!0;var _utils=require("../utils"),_exception=require("../exception"),_exception2=_interopRequireDefault(_exception);exports["default"]=function(e){e.registerHelper("each",function(e,t){function i(t,i,a){s&&(s.key=t,s.index=i,s.first=0===i,s.last=!!a,u&&(s.contextPath=u+t)),n+=r(e[t],{data:s,blockParams:_utils.blockParams([e[t],t],[u+t,null])})}if(!t)throw new _exception2["default"]("Must pass iterator to #each");var r=t.fn,a=t.inverse,o=0,n="",s=void 0,u=void 0;if(t.data&&t.ids&&(u=_utils.appendContextPath(t.data.contextPath,t.ids[0])+"."),_utils.isFunction(e)&&(e=e.call(this)),t.data&&(s=_utils.createFrame(t.data)),e&&"object"==typeof e)if(_utils.isArray(e))for(var l=e.length;o<l;o++)o in e&&i(o,o,o===e.length-1);else{var d=void 0;for(var c in e)e.hasOwnProperty(c)&&(void 0!==d&&i(d,o-1),d=c,o++);void 0!==d&&i(d,o-1,!0)}return 0===o&&(n=a(this)),n})},module.exports=exports["default"];

},{"../exception":8,"../utils":21}],12:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}exports.__esModule=!0;var _exception=require("../exception"),_exception2=_interopRequireDefault(_exception);exports["default"]=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new _exception2["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},module.exports=exports["default"];

},{"../exception":8}],13:[function(require,module,exports){
"use strict";exports.__esModule=!0;var _utils=require("../utils");exports["default"]=function(e){e.registerHelper("if",function(e,s){return _utils.isFunction(e)&&(e=e.call(this)),!s.hash.includeZero&&!e||_utils.isEmpty(e)?s.inverse(this):s.fn(this)}),e.registerHelper("unless",function(s,t){return e.helpers["if"].call(this,s,{fn:t.inverse,inverse:t.fn,hash:t.hash})})},module.exports=exports["default"];

},{"../utils":21}],14:[function(require,module,exports){
"use strict";exports.__esModule=!0,exports["default"]=function(e){e.registerHelper("log",function(){for(var l=[void 0],t=arguments[arguments.length-1],a=0;a<arguments.length-1;a++)l.push(arguments[a]);var o=1;null!=t.hash.level?o=t.hash.level:t.data&&null!=t.data.level&&(o=t.data.level),l[0]=o,e.log.apply(e,l)})},module.exports=exports["default"];

},{}],15:[function(require,module,exports){
"use strict";exports.__esModule=!0,exports["default"]=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},module.exports=exports["default"];

},{}],16:[function(require,module,exports){
"use strict";exports.__esModule=!0;var _utils=require("../utils");exports["default"]=function(t){t.registerHelper("with",function(t,e){_utils.isFunction(t)&&(t=t.call(this));var a=e.fn;if(_utils.isEmpty(t))return e.inverse(this);var s=e.data;return e.data&&e.ids&&(s=_utils.createFrame(e.data),s.contextPath=_utils.appendContextPath(e.data.contextPath,e.ids[0])),a(t,{data:s,blockParams:_utils.blockParams([t],[s&&s.contextPath])})})},module.exports=exports["default"];

},{"../utils":21}],17:[function(require,module,exports){
"use strict";exports.__esModule=!0;var _utils=require("./utils"),logger={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var o=_utils.indexOf(logger.methodMap,e.toLowerCase());e=o>=0?o:parseInt(e,10)}return e},log:function(e){if(e=logger.lookupLevel(e),"undefined"!=typeof console&&logger.lookupLevel(logger.level)<=e){var o=logger.methodMap[e];console[o]||(o="log");for(var l=arguments.length,r=Array(l>1?l-1:0),t=1;t<l;t++)r[t-1]=arguments[t];console[o].apply(console,r)}}};exports["default"]=logger,module.exports=exports["default"];

},{"./utils":21}],18:[function(require,module,exports){
(function (global){
"use strict";exports.__esModule=!0,exports["default"]=function(e){var o="undefined"!=typeof global?global:window,n=o.Handlebars;e.noConflict=function(){return o.Handlebars===e&&(o.Handlebars=n),e}},module.exports=exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],19:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function checkRevision(e){var t=e&&e[0]||1,r=_base.COMPILER_REVISION;if(t!==r){if(t<r){var a=_base.REVISION_CHANGES[r],n=_base.REVISION_CHANGES[t];throw new _exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+a+") or downgrade your runtime to an older version ("+n+").")}throw new _exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function template(e,t){function r(r,a,n){n.hash&&(a=Utils.extend({},a,n.hash),n.ids&&(n.ids[0]=!0)),r=t.VM.resolvePartial.call(this,r,a,n);var o=t.VM.invokePartial.call(this,r,a,n);if(null==o&&t.compile&&(n.partials[n.name]=t.compile(r,e.compilerOptions,t),o=n.partials[n.name](a,n)),null!=o){if(n.indent){for(var i=o.split("\n"),s=0,l=i.length;s<l&&(i[s]||s+1!==l);s++)i[s]=n.indent+i[s];o=i.join("\n")}return o}throw new _exception2["default"]("The partial "+n.name+" could not be compiled when running in runtime-only mode")}function a(t){function r(t){return""+e.main(n,t,n.helpers,n.partials,i,l,s)}var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=o.data;a._setup(o),!o.partial&&e.useData&&(i=initData(t,i));var s=void 0,l=e.useBlockParams?[]:void 0;return e.useDepths&&(s=o.depths?t!==o.depths[0]?[t].concat(o.depths):o.depths:[t]),(r=executeDecorators(e.main,r,n,o.depths||[],i,l))(t,o)}if(!t)throw new _exception2["default"]("No environment passed to template");if(!e||!e.main)throw new _exception2["default"]("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n={strict:function(e,t){if(!(t in e))throw new _exception2["default"]('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var r=e.length,a=0;a<r;a++)if(e[a]&&null!=e[a][t])return e[a][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:Utils.escapeExpression,invokePartial:r,fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,a,n){var o=this.programs[e],i=this.fn(e);return t||n||a||r?o=wrapProgram(this,e,i,t,r,a,n):o||(o=this.programs[e]=wrapProgram(this,e,i)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=Utils.extend({},t,e)),r},noop:t.VM.noop,compilerInfo:e.compiler};return a.isTop=!0,a._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials,n.decorators=r.decorators):(n.helpers=n.merge(r.helpers,t.helpers),e.usePartial&&(n.partials=n.merge(r.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=n.merge(r.decorators,t.decorators)))},a._child=function(t,r,a,o){if(e.useBlockParams&&!a)throw new _exception2["default"]("must pass block params");if(e.useDepths&&!o)throw new _exception2["default"]("must pass parent depths");return wrapProgram(n,t,e[t],r,0,a,o)},a}function wrapProgram(e,t,r,a,n,o,i){function s(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=i;return i&&t!==i[0]&&(s=[t].concat(i)),r(e,t,e.helpers,e.partials,n.data||a,o&&[n.blockParams].concat(o),s)}return s=executeDecorators(r,s,e,i,a,o),s.program=t,s.depth=i?i.length:0,s.blockParams=n||0,s}function resolvePartial(e,t,r){return e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name],e}function invokePartial(e,t,r){r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var a=void 0;if(r.fn&&r.fn!==noop&&(r.data=_base.createFrame(r.data),a=r.data["partial-block"]=r.fn,a.partials&&(r.partials=Utils.extend({},r.partials,a.partials))),void 0===e&&a&&(e=a),void 0===e)throw new _exception2["default"]("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)}function noop(){return""}function initData(e,t){return t&&"root"in t||(t=t?_base.createFrame(t):{},t.root=e),t}function executeDecorators(e,t,r,a,n,o){if(e.decorator){var i={};t=e.decorator(t,i,r,a&&a[0],n,o,a),Utils.extend(t,i)}return t}exports.__esModule=!0,exports.checkRevision=checkRevision,exports.template=template,exports.wrapProgram=wrapProgram,exports.resolvePartial=resolvePartial,exports.invokePartial=invokePartial,exports.noop=noop;var _utils=require("./utils"),Utils=_interopRequireWildcard(_utils),_exception=require("./exception"),_exception2=_interopRequireDefault(_exception),_base=require("./base");

},{"./base":5,"./exception":8,"./utils":21}],20:[function(require,module,exports){
"use strict";function SafeString(t){this.string=t}exports.__esModule=!0,SafeString.prototype.toString=SafeString.prototype.toHTML=function(){return""+this.string},exports["default"]=SafeString,module.exports=exports["default"];

},{}],21:[function(require,module,exports){
"use strict";function escapeChar(t){return escape[t]}function extend(t){for(var r=1;r<arguments.length;r++)for(var e in arguments[r])Object.prototype.hasOwnProperty.call(arguments[r],e)&&(t[e]=arguments[r][e]);return t}function indexOf(t,r){for(var e=0,n=t.length;e<n;e++)if(t[e]===r)return e;return-1}function escapeExpression(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}return possible.test(t)?t.replace(badChars,escapeChar):t}function isEmpty(t){return!t&&0!==t||!(!isArray(t)||0!==t.length)}function createFrame(t){var r=extend({},t);return r._parent=t,r}function blockParams(t,r){return t.path=r,t}function appendContextPath(t,r){return(t?t+".":"")+r}exports.__esModule=!0,exports.extend=extend,exports.indexOf=indexOf,exports.escapeExpression=escapeExpression,exports.isEmpty=isEmpty,exports.createFrame=createFrame,exports.blockParams=blockParams,exports.appendContextPath=appendContextPath;var escape={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},badChars=/[&<>"'`=]/g,possible=/[&<>"'`=]/,toString=Object.prototype.toString;exports.toString=toString;var isFunction=function(t){return"function"==typeof t};isFunction(/x/)&&(exports.isFunction=isFunction=function(t){return"function"==typeof t&&"[object Function]"===toString.call(t)}),exports.isFunction=isFunction;var isArray=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===toString.call(t)};exports.isArray=isArray;

},{}],22:[function(require,module,exports){
module.exports=require("./dist/cjs/handlebars.runtime")["default"];
},{"./dist/cjs/handlebars.runtime":4}],23:[function(require,module,exports){
module.exports=require("handlebars/runtime")["default"];
},{"handlebars/runtime":22}],24:[function(require,module,exports){
function isFunction(o){var t=toString.call(o);return"[object Function]"===t||"function"==typeof o&&"[object RegExp]"!==t||"undefined"!=typeof window&&(o===window.setTimeout||o===window.alert||o===window.confirm||o===window.prompt)}module.exports=isFunction;var toString=Object.prototype.toString;

},{}],25:[function(require,module,exports){
var trim=require("trim"),forEach=require("for-each"),isArray=function(r){return"[object Array]"===Object.prototype.toString.call(r)};module.exports=function(r){if(!r)return{};var e={};return forEach(trim(r).split("\n"),function(r){var t=r.indexOf(":"),i=trim(r.slice(0,t)).toLowerCase(),o=trim(r.slice(t+1));"undefined"==typeof e[i]?e[i]=o:isArray(e[i])?e[i].push(o):e[i]=[e[i],o]}),e};
},{"for-each":2,"trim":26}],26:[function(require,module,exports){
function trim(r){return r.replace(/^\s*|\s*$/g,"")}exports=module.exports=trim,exports.left=function(r){return r.replace(/^\s*/,"")},exports.right=function(r){return r.replace(/\s*$/,"")};

},{}],27:[function(require,module,exports){
"use strict";function forEachArray(e,t){for(var r=0;r<e.length;r++)t(e[r])}function isEmpty(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function initParams(e,t,r){var n=e;return isFunction(t)?(r=t,"string"==typeof e&&(n={uri:e})):n=xtend(t,{uri:e}),n.callback=r,n}function createXHR(e,t,r){return t=initParams(e,t,r),_createXHR(t)}function _createXHR(e){function t(){4===i.readyState&&o()}function r(){var e=void 0;if(i.response?e=i.response:"text"!==i.responseType&&i.responseType||(e=i.responseText||i.responseXML),H)try{e=JSON.parse(e)}catch(t){}return e}function n(e){clearTimeout(d),e instanceof Error||(e=new Error(""+(e||"Unknown XMLHttpRequest Error"))),e.statusCode=0,s(e,a)}function o(){if(!c){var t;clearTimeout(d),t=e.useXDR&&void 0===i.status?200:1223===i.status?204:i.status;var n=a,o=null;0!==t?(n={body:r(),statusCode:t,method:l,headers:{},url:p,rawRequest:i},i.getAllResponseHeaders&&(n.headers=parseHeaders(i.getAllResponseHeaders()))):o=new Error("Internal XMLHttpRequest Error"),s(o,n,n.body)}}var s=e.callback;if("undefined"==typeof s)throw new Error("callback argument missing");s=once(s);var a={body:void 0,headers:{},statusCode:0,method:l,url:p,rawRequest:i},i=e.xhr||null;i||(i=e.cors||e.useXDR?new createXHR.XDomainRequest:new createXHR.XMLHttpRequest);var u,c,d,p=i.url=e.uri||e.url,l=i.method=e.method||"GET",f=e.body||e.data||null,R=i.headers=e.headers||{},h=!!e.sync,H=!1;if("json"in e&&(H=!0,R.accept||R.Accept||(R.Accept="application/json"),"GET"!==l&&"HEAD"!==l&&(R["content-type"]||R["Content-Type"]||(R["Content-Type"]="application/json"),f=JSON.stringify(e.json))),i.onreadystatechange=t,i.onload=o,i.onerror=n,i.onprogress=function(){},i.ontimeout=n,i.open(l,p,!h,e.username,e.password),h||(i.withCredentials=!!e.withCredentials),!h&&e.timeout>0&&(d=setTimeout(function(){c=!0,i.abort("timeout");var e=new Error("XMLHttpRequest timeout");e.code="ETIMEDOUT",n(e)},e.timeout)),i.setRequestHeader)for(u in R)R.hasOwnProperty(u)&&i.setRequestHeader(u,R[u]);else if(e.headers&&!isEmpty(e.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in e&&(i.responseType=e.responseType),"beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(i),i.send(f),i}function noop(){}var window=require("global/window"),once=require("once"),isFunction=require("is-function"),parseHeaders=require("parse-headers"),xtend=require("xtend");module.exports=createXHR,createXHR.XMLHttpRequest=window.XMLHttpRequest||noop,createXHR.XDomainRequest="withCredentials"in new createXHR.XMLHttpRequest?createXHR.XMLHttpRequest:window.XDomainRequest,forEachArray(["get","put","post","patch","head","delete"],function(e){createXHR["delete"===e?"del":e]=function(t,r,n){return r=initParams(t,r,n),r.method=e.toUpperCase(),_createXHR(r)}});
},{"global/window":3,"is-function":24,"once":28,"parse-headers":25,"xtend":29}],28:[function(require,module,exports){
function once(n){var o=!1;return function(){if(!o)return o=!0,n.apply(this,arguments)}}module.exports=once,once.proto=once(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return once(this)},configurable:!0})});
},{}],29:[function(require,module,exports){
function extend(){for(var r={},e=0;e<arguments.length;e++){var t=arguments[e];for(var n in t)hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}module.exports=extend;var hasOwnProperty=Object.prototype.hasOwnProperty;

},{}],30:[function(require,module,exports){
var HandlebarsCompiler=require("hbsfy/runtime");module.exports=HandlebarsCompiler.template({compiler:[7,">= 4.0.0"],main:function(e,a,n,l,r){var i;return"<h1>Hello "+e.escapeExpression((i=null!=(i=n.name||(null!=a?a.name:a))?i:n.helperMissing,"function"==typeof i?i.call(null!=a?a:{},{name:"name",hash:{},data:r}):i))+"!</h1>\n"},useData:!0});
},{"hbsfy/runtime":23}],31:[function(require,module,exports){
var HandlebarsCompiler=require("hbsfy/runtime");module.exports=HandlebarsCompiler.template({compiler:[7,">= 4.0.0"],main:function(t,n,d,e,l){var a=t.lambda,r=t.escapeExpression;return'\n<h1>Welcome to the ISS+S</h1>\n<h3>International Space Station Search</h3>\n<br>\n<p>\n\tHere You can find out where the ISS is located pinned on a map... It\'s that easy!\n</p>\n<button id="iss">Find Now!</button>\n<table>\n\t<tr>\n\t\t<td>Name: </td>\n\t\t<td>'+r(a(null!=n?n.name:n,n))+"</td>\n\t</tr>\n\t<tr>\n\t\t<td>ID: </td>\n\t\t<td>"+r(a(null!=n?n.id:n,n))+"</td>\n\t</tr>\n\t<tr>\n\t\t<td>Velocity: </td>\n\t\t<td>"+r(a(null!=n?n.velocity:n,n))+"</td>\n\t</tr>\n\t<tr>\n\t\t<td>Altitude: </td>\n\t\t<td>"+r(a(null!=n?n.altitude:n,n))+"</td>\n\t</tr>\n\t<tr>\n\t\t<td>Altitude: </td>\n\t\t<td>"+r(a(null!=n?n.altitude:n,n))+"</td>\n\t</tr>\n\t<tr>\n\t\t<td>Longitude: </td>\n\t\t<td>"+r(a(null!=n?n.longitude:n,n))+"</td>\n\t</tr>\n\t<tr>\n\t\t<td>Latitude: </td>\n\t\t<td>"+r(a(null!=n?n.latitude:n,n))+'</td>\n\t</tr>\n</table>\n\n<div id="googleMap"></div>\n\n'},useData:!0});

},{"hbsfy/runtime":23}]},{},[1]);
