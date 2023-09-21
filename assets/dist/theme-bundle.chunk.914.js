"use strict";(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[914],{24914:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});var r=n(49230),a=n(83379),o=n(55825);function s(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}var l=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).$overlay=o(".page .loadingOverlay"),n.$resultsContainer=o(".page #search-results"),n.context=e,n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,c(e,n);var i=r.prototype;return i.onReady=function(){var t=new URLSearchParams(window.location.search);this.searchType=t.get("type"),this.searchParams={};for(var e,n=s(new URLSearchParams(window.location.search));!(e=n()).done;){var r=e.value,a=r[0],o=r[1];"type"!==a&&(this.searchParams[a]=o)}this.searchConsultants(),this.pageTitle="Your search results";var i=t.get("url_return");i&&i.includes("account")&&i.includes("view_order")&&(this.pageTitle="The consultant assigned to your order will be updated.",this.extraMessage="Please note that proceeding with this action will result in the removal of the Party ID associated with the order.")},i.searchConsultants=function(){var t=this,e={zip:function(){return t.searchByZip(new URLSearchParams(window.location.search))},params:function(){return t.searchByParams(new URLSearchParams(window.location.search))}};e&&e[this.searchType]&&(this.loading(!0),e[this.searchType]().then((function(e){e.length>0?t.handleResults(e):t.handleNoResults(),t.loading(!1)})).catch((function(e){t.handleError(e),t.loading(!1)})))},i.handleResults=function(t){var e=t.map((function(t){var e=t.first_name,n=t.last_name;return'\n            <div class="consultant-information">\n                <img src="'+t.rep_img+'"/>\n                <p class="fullname" >'+e+" "+n+'</p>\n                <p class="location">'+t.city+", "+t.state+'</p>\n                <button class="button button--primary my-consultant" data-website="'+t.website+'" href="#">My consultant</button>\n            </div>\n        '})).join(""),n="";this.extraMessage&&(n='<span class="consultant-alert"> '+this.extraMessage+" </span>");var r='<div>\n            <h2 class="consultants-title">'+this.pageTitle+"</h2>\n            "+n+'\n            <div class="consultants-wrapper">\n                '+e+"\n            </div>\n        </div>";this.$resultsContainer.html(r),this.bindConsultantSelection()},i.handleNoResults=function(){this.$resultsContainer.html("<div>No consultants were found.</div>")},i.handleError=function(t){console.error(t),this.handleNoResults()},i.searchByZip=function(){for(var t,e="",n=s(new URLSearchParams(window.location.search));!(t=n()).done;){var r=t.value,o=r[0],i=r[1];"zipcode"===o&&(e=i)}var c=this.context.themeSetting.aws_cloudfront_url+"searchByZipCode?zip_code="+e;return(0,a.Yu)(c)},i.searchByParams=function(){for(var t,e=this.context.themeSetting.aws_url,n=new URL(e+"search"),r=new URLSearchParams(n.search),o=s(new URLSearchParams(window.location.search));!(t=o()).done;){var i=t.value,c=i[0],l=i[1];"firstName"===c&&l.length>=1&&r.append("first_name",l),"lastName"===c&&l.length>=1&&r.append("last_name",l),"consultantId"===c&&l.length>=1&&r.append("repID",l),"webAddress"===c&&l.length>=1&&r.append("website",l),"location"===c&&l.length>=1&&r.append("state",l)}return n.search=r.toString(),(0,a.Yu)(n.toString())},i.bindConsultantSelection=function(){for(var t=document.getElementsByClassName("my-consultant"),e=0;e<t.length;e++)t[e].addEventListener("click",(function(t){var e=o(t.currentTarget).data("website"),n=new URLSearchParams(window.location.search),r=(null==n?void 0:n.get("url_return"))||"",a=window.location.protocol+"//"+window.location.host+r+"?consultant="+e;/[?&][^=#]+=[^&#]+/.test(n.get("url_return"))&&(a=window.location.protocol+"//"+window.location.host+r.replace(/&?consultant_order=[^&]*/g,"")+"&consultant_order="+e),window.location.replace(a)}))},i.loading=function(t){this.$overlay[t?"show":"hide"]()},r}(r.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.914.js.map