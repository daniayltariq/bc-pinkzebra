"use strict";(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[847],{90847:(t,e,r)=>{r.r(e),r.d(e,{default:()=>v});var a=r(42066),n=r(50469),o=r(42874),i=r(67313),c=r(54587),s=r(55282),d=r(8575),u=r(28350),l=(r(51647),r(40097)),h=r(38242),f=r(55825);function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}var v=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,p(e,r);var v=n.prototype;return v.formatCategoryTreeForJSTree=function(t){var e=this,r={text:t.data,id:t.metadata.id,state:{selected:t.selected}};return t.state&&(r.state.opened="open"===t.state,r.children=!0),t.children&&(r.children=[],t.children.forEach((function(t){r.children.push(e.formatCategoryTreeForJSTree(t))}))),r},v.showProducts=function(t){if(void 0===t&&(t=!0),this.$productListingContainer.removeClass("u-hidden"),this.$facetedSearchContainer.removeClass("u-hidden"),this.$contentResultsContainer.addClass("u-hidden"),f("[data-content-results-toggle]").removeClass("navBar-action-color--active"),f("[data-content-results-toggle]").addClass("navBar-action"),f("[data-product-results-toggle]").removeClass("navBar-action"),f("[data-product-results-toggle]").addClass("navBar-action-color--active"),this.activateTab(f("[data-product-results-toggle]")),t){var e=f("#search-results-product-count span").data(),r=e.count>0?e.url:s.Z.replaceParams(e.url,{page:1});s.Z.goToUrl(r)}},v.showContent=function(t){if(void 0===t&&(t=!0),this.$contentResultsContainer.removeClass("u-hidden"),this.$productListingContainer.addClass("u-hidden"),this.$facetedSearchContainer.addClass("u-hidden"),f("[data-product-results-toggle]").removeClass("navBar-action-color--active"),f("[data-product-results-toggle]").addClass("navBar-action"),f("[data-content-results-toggle]").removeClass("navBar-action"),f("[data-content-results-toggle]").addClass("navBar-action-color--active"),this.activateTab(f("[data-content-results-toggle]")),t){var e=f("#search-results-content-count span").data(),r=e.count>0?e.url:s.Z.replaceParams(e.url,{page:1});s.Z.goToUrl(r)}},v.activateTab=function(t){f("[data-search-page-tabs]").find('[role="tab"]').each((function(e,r){var a=f(r);if(a.is(t))return a.removeAttr("tabindex"),void a.attr("aria-selected",!0);a.attr("tabindex","-1"),a.attr("aria-selected",!1)}))},v.onTabChangeWithArrows=function(t){var e=t.which;if(37===e||39===e){var r=f("[data-search-page-tabs]").find('[role="tab"]');if(-1!==r.index(f(document.activeElement))){var a,n=f("#"+document.activeElement.id),o=r.index(n),i=r.length-1;switch(e){case 37:a=0===o?i:o-1;break;case 39:a=o===i?0:o+1}f(r.get(a)).focus().trigger("click")}}},v.onReady=function(){var t=this;(0,c.Z)(this.context),this.arrangeFocusOnSortBy(),this.handleAddToCart();var e=f("[data-advanced-search-form]"),r=e.find("[data-search-category-tree]"),n=d.parse(window.location.href,!0),o=[];this.$productListingContainer=f("#product-listing-container"),this.$facetedSearchContainer=f("#faceted-search-container"),this.$contentResultsContainer=f("#search-results-content"),f("#facetedSearch").length>0?this.initFacetedSearch():(this.onSortBySubmit=this.onSortBySubmit.bind(this),a.PT.on("sortBy-submitted",this.onSortBySubmit)),(0,u.ZP)(),f("[data-product-results-toggle]").on("click",(function(e){e.preventDefault(),t.showProducts()})),f("[data-content-results-toggle]").on("click",(function(e){e.preventDefault(),t.showContent()})),f("[data-search-page-tabs]").on("keyup",this.onTabChangeWithArrows),0===this.$productListingContainer.find("li.product").length||"content"===n.query.section?this.showContent(!1):this.showProducts(!1);var i=this.initValidation(e).bindValidation(e.find("#search_query_adv"));this.context.categoryTree.forEach((function(e){o.push(t.formatCategoryTreeForJSTree(e))})),this.categoryTreeData=o,this.createCategoryTree(r),e.on("submit",(function(t){var a=r.jstree().get_selected();if(!i.check())return t.preventDefault();e.find('input[name="category[]"]').remove();for(var n,o=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var a=0;return function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(a);!(n=o()).done;){var c=n.value,s=f("<input>",{type:"hidden",name:"category[]",value:c});e.append(s)}}));var s=f('<p\n            class="aria-description--hidden"\n            tabindex="-1"\n            role="status"\n            aria-live="polite"\n            >'+this.context.searchResultsCount+"</p>").prependTo("body");setTimeout((function(){return s.focus()}),100),(0,h.$)(".productGrid","SEARCH"),this.injectScentflirtProductLabels()},v.loadTreeNodes=function(t,e){var r=this;f.ajax({url:"/remote/v1/category-tree",data:{selectedCategoryId:t.id,prefix:"category"},headers:{"x-xsrf-token":window.BCData&&window.BCData.csrf_token?window.BCData.csrf_token:""}}).done((function(t){var a=[];t.forEach((function(t){a.push(r.formatCategoryTreeForJSTree(t))})),e(a)}))},v.createCategoryTree=function(t){var e=this,r={core:{data:function(t,r){"#"===t.id?r(e.categoryTreeData):e.loadTreeNodes(t,r)},themes:{icons:!0}},checkbox:{three_state:!1},plugins:["checkbox"]};t.jstree(r)},v.initFacetedSearch=function(){var t=this,e=this.context,r=e.onMinPriceError,a=e.onMaxPriceError,n=e.minPriceNotEntered,i=e.maxPriceNotEntered,c=e.onInvalidPrice,s=f("#product-listing-container"),u=f("#search-results-content"),l=f("#faceted-search-container"),h=f('[id="search-results-heading"]'),g=f("#search-results-product-count"),p=f("#search-results-content-count"),v={template:{productListing:"search/product-listing",contentListing:"search/content-listing",sidebar:"search/sidebar",heading:"search/heading",productCount:"search/product-count",contentCount:"search/content-count"},config:{product_results:{limit:this.context.searchProductsPerPage}},showMore:"search/show-more",context:this.context};this.facetedSearch=new o.Z(this.context,v,(function(e){h.html(e.heading),"content"===d.parse(window.location.href,!0).query.section?(u.html(e.contentListing),p.html(e.contentCount),t.showContent(!1)):(s.html(e.productListing),l.html(e.sidebar),g.html(e.productCount),t.showProducts(!1)),f("body").triggerHandler("compareReset"),f("html, body").animate({scrollTop:0},100)}),{validationErrorMessages:{onMinPriceError:r,onMaxPriceError:a,minPriceNotEntered:n,maxPriceNotEntered:i,onInvalidPrice:c}})},v.initValidation=function(t){return this.$form=t,this.validator=(0,l.Z)({submit:t,tap:i.kk}),this},v.bindValidation=function(t){return this.validator&&this.validator.add({selector:t,validate:"presence",errorMessage:t.data("errorMessage")}),this},v.check=function(){return!!this.validator&&(this.validator.performCheck(),this.validator.areAll("valid"))},n}(n.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.847.js.map