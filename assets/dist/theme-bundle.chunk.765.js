"use strict";(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[765],{67765:(n,o,t)=>{t.r(o),t.d(o,{default:()=>i});var a=t(49230),e=t(55825);function s(n,o){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},s(n,o)}var c=[{name:"10% OFF",code:"10OFF",end_date:"Jan 11th 2024",status:"Active"},{name:"20% OFF",code:"20OFF",end_date:"Mar 20th 2024",status:"Used"}],i=function(n){var o,t;function a(o){var t;return(t=n.call(this,o)||this).$overlay=e(".page .loadingOverlay"),t.$couponsContainer=e(".page #my-coupons"),t.context=o,t}t=n,(o=a).prototype=Object.create(t.prototype),o.prototype.constructor=o,s(o,t);var i=a.prototype;return i.onReady=function(){this.getCouponsByHost()},i.getCouponsByHost=function(){this.handleResults(c)},i.handleResults=function(n){var o=n.map((function(n){var o=n.name,t=n.code,a=n.end_date,e=n.status;return"\n            <div class='coupon-wrapper'>\n                <div class='coupon-info'>\n                    <div class='coupon-id'>"+o+"</div>\n                    <div class='coupon-status desktop'>"+e+"</div>\n                </div>\n                <div class='coupon-table'>\n                    <div class='data-column'>\n                        <h6 class='data-title'>Code</h6>\n                        <span class='coupon-code data-value'>"+t+"</span>\n                    </div>\n                    <div class='data-column'>\n                        <h6 class='data-title'>Valid Until</h6>\n                        <span class='data-value'>"+a+"</span>\n                    </div>\n                    <div class='data-column'>\n                        <button class='button button--primary copy-button "+("Active"!==e?"u-hidden":"")+"'>Copy Code</button>\n                    </div>\n                    <div class='data-column mobile'>\n                        <div class='coupon-status'>"+e+"</div>\n                    </div>\n                </div>\n            </div>\n        "})).join("");this.$couponsContainer.html(o),this.bindCopyLink()},i.handleNoResults=function(){this.$couponsContainer.html("<div>No coupons found.</div>")},i.handleError=function(n){console.error(n),this.handleNoResults()},i.bindCopyLink=function(){e(".coupon-table .copy-button").on("click",(function(){var n=e(".coupon-table .coupon-code").html();navigator.clipboard.writeText(n)}))},i.loading=function(n){this.$overlay[n?"show":"hide"]()},a}(a.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.765.js.map