/*! Tomcat360.com (c) 2015 
	Author: Renzhao
*/
define("modules/utils",["log"],function(t,n,e){var r=t("log");r.log;String.prototype.getLength=function(t){for(var n=0,e=0;e<this.length;e++)this.charCodeAt(e)>=0&&this.charCodeAt(e)<=128?n++:n+=2;return n};var s=/^134[0-8]\d{7}$|^(?:13[5-9]|147|15[0-27-9]|178|18[2-478])\d{8}$/,i=/^(?:13[0-2]|145|15[56]|176|18[56])\d{8}$/,o=/^(?:133|153|177|18[019])\d{8}$/,u=/^170([059])\d{7}$/;e.exports={trim:function(t){return String.prototype.hasOwnProperty("trim")?null==t?"":(t+"").trim():null==t?"":(t+"").replace(/^\s+|\s+$/g,"")},isEmpty:function(t){return void 0===t||null===t?!0:"string"==typeof t&&0===this.trim(t).length?!0:!1},inRange:function(t,n,e){var r=t.getLength();return n>r?this.setReturnJson(!1,"长度不足"+n+"位"):r>e?this.setReturnJson(!1,"长度超过了"+e+"位"):this.setReturnJson(!0)},checkMobile:function(t){if(t=this.trim(t),11!==t.length)return this.setReturnJson(!1,"未检测到正确的手机号码");if(s.test(t))return this.setReturnJson(!0,"移动",{name:"ChinaMobile"});if(i.test(t))return this.setReturnJson(!0,"联通",{name:"ChinaUnion"});if(o.test(t))return this.setReturnJson(!0,"电信",{name:"ChinaTelcom"});if(u.test(t)){u.exec(t);return this.setReturnJson(!0,"",{name:""})}return this.setReturnJson(!1,"未检测到正确的手机号码")},setReturnJson:function(t,n,e){return"boolean"!=typeof t&&"number"!=typeof t&&(t=!1),"string"!=typeof n&&(n=""),{status:t,msg:n,data:e}}}});