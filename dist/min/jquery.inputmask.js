/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2013 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.1.18
*/
(function(e){void 0==e.fn.inputmask&&(e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:e.noop,onKeyDown:e.noop,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",numericInput:!1,radixPoint:"",definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",
cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[9,13,19,27,33,34,35,36,37,
38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(e,C,P){var M=e.length;!C&&1<P&&(M+=e.length*(P-1));return M}},val:e.fn.val,escapeRegex:function(e){return e.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")}},e.fn.inputmask=function(s,C){var P,M;function J(b,c){var g=a.aliases[b];return g?(g.alias&&J(g.alias),e.extend(!0,a,g),e.extend(!0,a,c),!0):!1}function N(b){var c=!1,g=0,r=a.greedy,j=a.repeat;1==b.length&&!1==r&&(a.placeholder=
"");for(var b=e.map(b.split(""),function(b){var e=[];if(b==a.escapeChar)c=true;else if(b!=a.optionalmarker.start&&b!=a.optionalmarker.end||c){var j=a.definitions[b];if(j&&!c)for(b=0;b<j.cardinality;b++)e.push(D(g+b));else{e.push(b);c=false}g=g+e.length;return e}}),V=b.slice(),f=1;f<j&&r;f++)V=V.concat(b.slice());return{mask:V,repeat:j,greedy:r}}function R(b){var c=!1,g=!1,r=!1;return e.map(b.split(""),function(b){var e=[];if(b==a.escapeChar)g=!0;else if(b==a.optionalmarker.start&&!g)r=c=!0;else if(b==
a.optionalmarker.end&&!g)c=!1,r=!0;else{var f=a.definitions[b];if(f&&!g){for(var m=f.prevalidator,i=m?m.length:0,n=1;n<f.cardinality;n++){var d=i>=n?m[n-1]:[],h=d.validator,d=d.cardinality;e.push({fn:h?"string"==typeof h?RegExp(h):new function(){this.test=h}:/./,cardinality:d?d:1,optionality:c,newBlockMarker:!0==c?r:!1,offset:0,casing:f.casing,def:b});!0==c&&(r=!1)}e.push({fn:f.validator?"string"==typeof f.validator?RegExp(f.validator):new function(){this.test=f.validator}:/./,cardinality:f.cardinality,
optionality:c,newBlockMarker:r,offset:0,casing:f.casing,def:b})}else e.push({fn:null,cardinality:0,optionality:c,newBlockMarker:r,offset:0,casing:null,def:b}),g=!1;r=!1;return e}})}function W(){function b(g,e){var j=e.split(a.optionalmarker.end,2),h,f,i=j[0].split(a.optionalmarker.start);1<i.length?(h=g+i[0]+(a.optionalmarker.start+i[1]+a.optionalmarker.end)+(1<j.length?j[1]:""),f=N(h),c.push({_buffer:f.mask,tests:R(h),lastValidPosition:0,greedy:f.greedy,repeat:f.repeat}),h=g+i[0]+(1<j.length?j[1]:
""),f=N(h),c.push({_buffer:f.mask,tests:R(h),lastValidPosition:0,greedy:f.greedy,repeat:f.repeat}),1<j.length&&1<j[1].split(a.optionalmarker.start).length&&(b(g+i[0]+(a.optionalmarker.start+i[1]+a.optionalmarker.end),j[1]),b(g+i[0],j[1]))):(h=g+j,f=N(h),c.push({_buffer:f.mask,tests:R(h),lastValidPosition:0,greedy:f.greedy,repeat:f.repeat}))}var c=[];b("",a.mask.toString());return c}function E(){return o[h].tests}function i(){return o[h]._buffer}function G(b,c,g,r,j){function i(b,d){for(var e=B(b),
j=c?1:0,f="",h=d.tests[e].cardinality;h>j;h--)f+=A(g,e-(h-1));c&&(f+=c);return null!=d.tests[e].fn?d.tests[e].fn.test(f,g,b,r,a):!1}if(r)return i(b,o[h]);var f=[],m=!1,l=h;e.each(o,function(e){h=e;var d=b;if(l!=h&&!y(b)){if(c==this._buffer[d]||c==a.skipOptionalPartCharacter)return f[e]={refresh:!0},this.lastValidPosition=d,!1;d=j?K(g,b):w(g,b)}if((j||a.numericInput?this.lastValidPosition<=a.numericInput?q(g):w(g,d):this.lastValidPosition>=K(g,d))&&0<=d&&d<q(g))f[e]=i(d,this),!1!==f[e]?(!0===f[e]&&
(f[e]={pos:d}),this.lastValidPosition=f[e].pos||d):this.lastValidPosition=j?w(g,b):K(g,b)});h=l;S(g,b,l,j);m=f[h]||m;setTimeout(function(){a.onKeyValidation.call(this,m,a)},0);return m}function S(b,c,g,r){e.each(o,function(e){if(r||a.numericInput?this.lastValidPosition<=c:this.lastValidPosition>=c){h=e;if(h!=g){var e=q(b),o=i();if(r||a.numericInput)b.reverse(),o.reverse();for(var f=b.length=c;f<e;f++){var m=B(f);H(b,f,A(o,m))}r&&b.reverse()}return!1}})}function y(b){b=B(b);b=E()[b];return void 0!=
b?b.fn:!1}function B(b){return b%E().length}function D(b){return a.placeholder.charAt(b%a.placeholder.length)}function q(b){return a.getMaskLength(i(),o[h].greedy,o[h].repeat,b,a)}function w(b,c){var a=q(b);if(c>=a)return a;for(var e=c;++e<a&&!y(e););return e}function K(b,c){var a=c;if(0>=a)return 0;for(;0<--a&&!y(a););return a}function H(b,c,a){var e=E()[B(c)],j=a;if(void 0!=j)switch(e.casing){case "upper":j=a.toUpperCase();break;case "lower":j=a.toLowerCase()}b[c]=j}function A(b,c,a){a&&(c=X(b,
c));return b[c]}function X(b,c,a){if(a)for(;0>c&&b.length<q(b);){a=i().length-1;for(c=i().length;void 0!==i()[a];)b.unshift(i()[a--])}else for(;void 0==b[c]&&b.length<q(b);)for(a=0;void 0!==i()[a];)b.push(i()[a++]);return c}function F(b,a,e){b._valueSet(a.join(""));void 0!=e&&p(b,e)}function Y(b,a,e){for(var h=q(b);a<e&&a<h;a++)H(b,a,A(i().slice(),a))}function O(b,a){var e=B(a);H(b,a,A(i(),e))}function z(b,c,g,r){var j=e(b).data("inputmask").isRTL,p=T(b._valueGet(),j).split(""),f=q(c);if(j){var m=
p.reverse();m.length=f;for(var l=0;l<f;l++){var n=B(f-(l+1));null==E()[n].fn&&m[l]!=A(i(),n)?(m.splice(l,0,A(i(),n)),m.length=f):m[l]=m[l]||A(i(),n)}p=m.reverse()}Y(c,0,c.length);c.length=i().length;for(var d=m=-1,x,z=p.length,n=0==z?f:-1,l=0;l<z;l++)for(var t=d+1;t<f;t++)if(y(t)){var s=p[l];!1!==(x=G(t,s,c,!g,j))?(!0!==x&&(t=void 0!=x.pos?x.pos:t,s=void 0!=x.c?x.c:s),H(c,t,s),m=d=t):(O(c,t),s==D(t)&&(n=d=t));break}else if(O(c,t),m==d&&(m=t),d=t,p[l]==A(c,t))break;if(!1==o[h].greedy)for(l=T(c.join(""),
j).split("");c.length!=l.length;)j?c.shift():c.pop();g&&F(b,c);return j?a.numericInput?""!=a.radixPoint&&-1!=e.inArray(a.radixPoint,c)&&!0!==r?e.inArray(a.radixPoint,c):w(c,f):w(c,n):w(c,m)}function aa(b){return e.inputmask.escapeRegex.call(this,b)}function T(b,a){return a?b.replace(RegExp("^("+aa(i().join(""))+")*"),""):b.replace(RegExp("("+aa(i().join(""))+")*$"),"")}function Z(b,a){z(b,a,!1);var g=a.slice(),h,j;if(e(b).data("inputmask").isRTL)for(j=0;j<=g.length-1;j++)if(h=B(j),E()[h].optionality)if(!y(j)||
!G(j,a[j],a,!0))g.splice(0,1);else break;else break;else for(j=g.length-1;0<=j;j--)if(h=B(j),E()[h].optionality)if(!y(j)||!G(j,a[j],a,!0))g.pop();else break;else break;F(b,g)}function ba(a,c){var g=a[0];if(E()&&(!0===c||!a.hasClass("hasDatepicker"))){var h=i().slice();z(g,h);return e.map(h,function(a,b){return y(b)&&G(b,a,h,!0)?a:null}).join("")}return g._valueGet()}function p(b,c,g){var h=b.jquery&&0<b.length?b[0]:b;if("number"==typeof c)e(b).is(":visible")&&(g="number"==typeof g?g:c,!1==a.insertMode&&
c==g&&g++,h.setSelectionRange?U?(setTimeout(function(){h.selectionStart=c;h.selectionEnd=U?c:g},10),P=c,M=g):(h.selectionStart=c,h.selectionEnd=g):h.createTextRange&&(range=h.createTextRange(),range.collapse(!0),range.moveEnd("character",g),range.moveStart("character",c),range.select()));else{if(!e(b).is(":visible"))return{begin:0,end:0};h.setSelectionRange?(c=h.selectionStart,g=h.selectionEnd):document.selection&&document.selection.createRange&&(range=document.selection.createRange(),c=0-range.duplicate().moveStart("character",
-1E5),g=c+range.text.length);return{begin:c,end:g}}}function Q(a){var c=!1,g=0,p=h;e.each(o,function(e,o){h=e;var f=q(a);if(o.lastValidPosition>=g&&o.lastValidPosition==f-1){for(var p=!0,l=0;l<f;l++){var n=y(l);if(n&&a[l]==D(l)||!n&&a[l]!=i()[l]){p=!1;break}}if(c=c||p)return!1}g=o.lastValidPosition});h=p;return c}function $(b){function c(a){a=e._data(a).events;e.each(a,function(a,b){e.each(b,function(a,b){if("inputmask"==b.namespace){var d=b.handler;b.handler=function(){return this.readOnly||this.disabled?
!1:d.apply(this,arguments)}}})})}function g(a){var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,"value"));if(b&&b.get)a._valueGet||(a._valueGet=b.get,a._valueSet=b.set,Object.defineProperty(a,"value",{get:function(){var a=e(this),b=e(this).data("inputmask"),d=b.masksets,c=b.activeMasksetIndex;return b&&b.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=d[c]._buffer.join("")?this._valueGet():""},set:function(a){this._valueSet(a);e(this).triggerHandler("setvalue.inputmask")}}));
else if(document.__lookupGetter__&&a.__lookupGetter__("value"))a._valueGet||(a._valueGet=a.__lookupGetter__("value"),a._valueSet=a.__lookupSetter__("value"),a.__defineGetter__("value",function(){var a=e(this),b=e(this).data("inputmask"),d=b.masksets,c=b.activeMasksetIndex;return b&&b.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=d[c]._buffer.join("")?this._valueGet():""}),a.__defineSetter__("value",function(a){this._valueSet(a);e(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||
(a._valueGet=function(){return this.value},a._valueSet=function(a){this.value=a}),!0!=e.fn.val.inputmaskpatch)e.fn.val=function(){if(arguments.length==0){var a=e(this);if(a.data("inputmask")){if(a.data("inputmask").autoUnmask)return a.inputmask("unmaskedvalue");var a=e.inputmask.val.apply(a),b=e(this).data("inputmask");return a!=b.masksets[b.activeMasksetIndex]._buffer.join("")?a:""}return e.inputmask.val.apply(a)}var d=arguments;return this.each(function(){var a=e(this),b=e.inputmask.val.apply(a,
d);a.data("inputmask")&&a.triggerHandler("setvalue.inputmask");return b})},e.extend(e.fn.val,{inputmaskpatch:!0})}function r(b,d){if(a.numericInput&&""!=a.radixPoint){var c=b._valueGet().indexOf(a.radixPoint);u=d.begin<=c||d.end<=c||-1==c}}function j(a,b,c){for(;!y(a)&&0<=a-1;)a--;for(var e=a;e<b&&e<q(d);e++)if(y(e)){O(d,e);var h=w(d,e),g=A(d,h);if(g!=D(h))if(h<q(d)&&!1!==G(e,g,d,!0,u)&&E()[B(e)].def==E()[B(h)].def)H(d,e,A(d,h)),O(d,h);else{if(y(e))break}else if(void 0==c)break}else O(d,e);void 0!=
c&&H(d,u?b:K(d,b),c);d=T(d.join(""),u).split("");0==d.length&&(d=i().slice());return a}function s(a,b,e,c){for(;a<=b&&a<q(d);a++)if(y(a)){var h=A(d,a);H(d,a,e);if(h!=D(a))if(e=w(d,a),e<q(d))if(!1!==G(e,h,d,!0,u)&&E()[B(a)].def==E()[B(e)].def)e=h;else if(y(e))break;else e=h;else break;else if(!0!==c)break}else O(d,a);c=d.length;d=T(d.join(""),u).split("");0==d.length&&(d=i().slice());return b-(c-d.length)}function f(b){t=!1;var c=this,g=b.keyCode,f=p(c);r(c,f);if(g==a.keyCode.BACKSPACE||g==a.keyCode.DELETE||
da&&127==g){var v=q(d);if(0==f.begin&&f.end==v)h=0,d=i().slice(),F(c,d),p(c,z(c,d,!1));else if(1<f.end-f.begin||1==f.end-f.begin&&a.insertMode)Y(d,f.begin,f.end),S(d,f.begin,h),F(c,d,u?z(c,d,!1):f.begin);else{var k=ca?f.end:f.begin;g==a.keyCode.DELETE?(k<I&&(k=I),k<v&&(a.numericInput&&""!=a.radixPoint&&d[k]==a.radixPoint?(k=d.length-1==k?k:w(d,k),k=j(k,v)):u?(k=s(I,k,D(k),!0),k=w(d,k)):k=j(k,v),S(d,k,h),F(c,d,k))):g==a.keyCode.BACKSPACE&&k>I&&(k-=1,a.numericInput&&""!=a.radixPoint&&d[k]==a.radixPoint?
(k=s(I,d.length-1==k?k:k-1,D(k),!0),k++):u?(k=s(I,k,D(k),!0),k=d[k+1]==a.radixPoint?k+1:w(d,k)):k=j(k,v),S(d,k,h),F(c,d,k))}c._valueGet()==i().join("")&&e(c).trigger("cleared");b.preventDefault()}else g==a.keyCode.END||g==a.keyCode.PAGE_DOWN?setTimeout(function(){var e=z(c,d,!1,!0);!a.insertMode&&(e==q(d)&&!b.shiftKey)&&e--;p(c,b.shiftKey?f.begin:e,e)},0):g==a.keyCode.HOME&&!b.shiftKey||g==a.keyCode.PAGE_UP?p(c,0,b.shiftKey?f.begin:0):g==a.keyCode.ESCAPE?(c._valueSet(C),p(c,0,z(c,d))):g==a.keyCode.INSERT?
(a.insertMode=!a.insertMode,p(c,!a.insertMode&&f.begin==q(d)?f.begin-1:f.begin)):b.ctrlKey&&88==g?setTimeout(function(){p(c,z(c,d,!0))},0):a.insertMode||(g==a.keyCode.RIGHT?(v=f.begin==f.end?f.end+1:f.end,v=v<q(d)?v:f.end,p(c,b.shiftKey?f.begin:v,b.shiftKey?v+1:v)):g==a.keyCode.LEFT&&(v=f.begin-1,v=0<v?v:0,p(c,v,b.shiftKey?f.end:v)));a.onKeyDown.call(this,b,d,a);J=-1!=e.inArray(g,a.ignorables)}function m(b){if(t)return!1;t=!0;var c=e(this),b=b||window.event,g=b.which||b.charCode||b.keyCode,f=String.fromCharCode(g);
if(a.numericInput&&f==a.radixPoint){var i=this._valueGet().indexOf(a.radixPoint);p(this,w(d,-1!=i?i:q(d)))}if(b.ctrlKey||b.altKey||b.metaKey||J)return!0;if(g){var k=p(this),n=q(d),g=!0;Y(d,k.begin,k.end);if(u){var i=K(d,k.end),l;if(!1!==(l=G(i==n||A(d,i)==a.radixPoint?K(d,i):i,f,d,!1,u))){var m=!1;!0!==l&&(m=l.refresh,i=void 0!=l.pos?l.pos:i,f=void 0!=l.c?l.c:f);if(!0!==m)if(n=q(d),l=I,!0==a.insertMode){if(!0==o[h].greedy)for(m=d.slice();A(m,l,!0)!=D(l)&&l<=i;)l=l==n?n+1:w(d,l);l<=i&&(o[h].greedy||
d.length<n)?(d[I]!=D(I)&&d.length<n&&(m=X(d,-1,u),0!=k.end&&(i+=m),n=d.length),j(l,i,f)):g=!1}else H(d,i,f);g&&(F(this,d,a.numericInput?i+1:i),setTimeout(function(){Q(d)&&c.trigger("complete")},0))}}else if(i=w(d,k.begin-1),X(d,i,u),!1!==(l=G(i,f,d,!1,u))){m=!1;!0!==l&&(m=l.refresh,i=void 0!=l.pos?l.pos:i,f=void 0!=l.c?l.c:f);if(!0!==m)if(!0==a.insertMode){k=q(d);for(m=d.slice();A(m,k,!0)!=D(k)&&k>=i;)k=0==k?-1:K(d,k);k>=i?s(i,d.length,f):g=!1}else H(d,i,f);g&&(f=w(d,i),F(this,d,f),setTimeout(function(){Q(d)&&
c.trigger("complete")},0))}U&&p(this,P,M);b.preventDefault()}}function l(b){var c=e(this),g=b.keyCode;a.onKeyUp.call(this,b,d,a);g==a.keyCode.TAB&&(c.hasClass("focus.inputmask")&&0==this._valueGet().length&&a.showMaskOnFocus)&&(d=i().slice(),F(this,d),u||p(this,0),C=this._valueGet())}var n=e(b);if(n.is(":input")){var d=i().slice();o[h].greedy=o[h].greedy?o[h].greedy:0==o[h].repeat;var x=n.prop("maxLength");q(d)>x&&-1<x&&(x<i().length&&(i().length=x),!1==o[h].greedy&&(o[h].repeat=Math.round(x/i().length)),
n.prop("maxLength",2*q(d)));n.data("inputmask",{masksets:o,activeMasksetIndex:h,autoUnmask:a.autoUnmask,definitions:a.definitions,isRTL:!1});g(b);var d=i().slice(),C=b._valueGet(),t=!1,J=!1,L=-1,I=w(d,-1);K(d,q(d));var u=!1;if("rtl"==b.dir||a.numericInput)b.dir="ltr",n.css("text-align","right"),n.removeAttr("dir"),x=n.data("inputmask"),x.isRTL=!0,n.data("inputmask",x),u=!0;n.unbind(".inputmask");n.removeClass("focus.inputmask");n.bind("mouseenter.inputmask",function(){if(!e(this).hasClass("focus.inputmask")&&
a.showMaskOnHover){var b=this._valueGet().length;if(b<d.length){b==0&&(d=i().slice());F(this,d)}}}).bind("blur.inputmask",function(){var b=e(this),c=this._valueGet();b.removeClass("focus.inputmask");c!=C&&b.change();a.clearMaskOnLostFocus&&c!=""&&(c==i().join("")?this._valueSet(""):Z(this,d));if(!Q(d)){b.trigger("incomplete");if(a.clearIncomplete)if(a.clearMaskOnLostFocus)this._valueSet("");else{d=i().slice();F(this,d)}}}).bind("focus.inputmask",function(){var b=e(this),c=this._valueGet();if(a.showMaskOnFocus&&
!b.hasClass("focus.inputmask")&&(!a.showMaskOnHover||a.showMaskOnHover&&c=="")){c=c.length;if(c<d.length){c==0&&(d=i().slice());p(this,z(this,d,true))}}b.addClass("focus.inputmask");C=this._valueGet()}).bind("mouseleave.inputmask",function(){var b=e(this);a.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||(this._valueGet()==i().join("")||this._valueGet()==""?this._valueSet(""):Z(this,d)))}).bind("click.inputmask",function(){var a=this;setTimeout(function(){var b=p(a);if(b.begin==b.end){var c=
b.begin;L=z(a,d,false);r(a,b);u?p(a,c>L&&(G(c,d[c],d,true,u)!==false||!y(c))?c:L):p(a,c<L&&(G(c,d[c],d,true,u)!==false||!y(c))?c:L)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){p(a,0,L)},0)}).bind("keydown.inputmask",f).bind("keypress.inputmask",m).bind("keyup.inputmask",l).bind(ea+".inputmask dragdrop.inputmask drop.inputmask",function(){var a=this;setTimeout(function(){p(a,z(a,d,true));Q(d)&&n.trigger("complete")},0)}).bind("setvalue.inputmask",function(){C=this._valueGet();
z(this,d,true);this._valueGet()==i().join("")&&this._valueSet("")}).bind("complete.inputmask",a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",a.oncleared);var L=z(b,d,!0),N;try{N=document.activeElement}catch(R){}N===b?(n.addClass("focus.inputmask"),p(b,L)):a.clearMaskOnLostFocus&&(b._valueGet()==i().join("")?b._valueSet(""):Z(b,d));c(b)}}var a=e.extend(!0,{},e.inputmask.defaults,C),ea=function(a){var c=document.createElement("input"),a="on"+a,e=a in c;e||(c.setAttribute(a,
"return;"),e="function"==typeof c[a]);return e}("paste")?"paste":"input",da=null!=navigator.userAgent.match(/iphone/i),U=null!=navigator.userAgent.match(/android.*safari.*/i),ca;if(U){var fa=navigator.userAgent.match(/safari.*/i);ca=533>=parseInt(RegExp(/[0-9]+/).exec(fa))}var o,h=0;if("string"==typeof s)switch(s){case "mask":return J(a.alias,C),o=W(),this.each(function(){$(this)});case "unmaskedvalue":return o=this.data("inputmask").masksets,h=this.data("inputmask").activeMasksetIndex,a.definitions=
this.data("inputmask").definitions,ba(this);case "remove":return this.each(function(){var b=e(this),c=this;setTimeout(function(){if(b.data("inputmask")){o=b.data("inputmask").masksets;h=b.data("inputmask").activeMasksetIndex;a.definitions=b.data("inputmask").definitions;c._valueSet(ba(b,!0));b.removeData("inputmask");b.unbind(".inputmask");b.removeClass("focus.inputmask");var e;Object.getOwnPropertyDescriptor&&(e=Object.getOwnPropertyDescriptor(c,"value"));e&&e.get?c._valueGet&&Object.defineProperty(c,
"value",{get:c._valueGet,set:c._valueSet}):document.__lookupGetter__&&c.__lookupGetter__("value")&&c._valueGet&&(c.__defineGetter__("value",c._valueGet),c.__defineSetter__("value",c._valueSet));delete c._valueGet;delete c._valueSet}},0)});case "getemptymask":return this.data("inputmask")?(o=this.data("inputmask").masksets,h=this.data("inputmask").activeMasksetIndex,o[h]._buffer.join("")):"";case "hasMaskedValue":return this.data("inputmask")?!this.data("inputmask").autoUnmask:!1;case "isComplete":return o=
this.data("inputmask").masksets,h=this.data("inputmask").activeMasksetIndex,a.definitions=this.data("inputmask").definitions,Q(this[0].split(""));default:return J(s,C)||(a.mask=s),o=W(),this.each(function(){$(this)})}else{if("object"==typeof s)return a=e.extend(!0,{},e.inputmask.defaults,s),J(a.alias,s),o=W(),this.each(function(){$(this)});if(void 0==s)return this.each(function(){var b=e(this).attr("data-inputmask");if(b&&""!=b)try{var b=b.replace(RegExp("'","g"),'"'),c=e.parseJSON("{"+b+"}");a=e.extend(!0,
{},e.inputmask.defaults,c);J(a.alias,c);a.alias=void 0;e(this).inputmask(a)}catch(g){}})}return this})})(jQuery);
