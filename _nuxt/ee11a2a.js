(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{327:function(t,e,n){var content=n(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("6ceee05b",content,!0,{sourceMap:!1})},361:function(t,e,n){"use strict";n(327)},362:function(t,e,n){var c=n(54)(!1);c.push([t.i,'.section-title-two[data-v-9d6414e6]{position:relative;margin-bottom:20px}.section-title-two h2[data-v-9d6414e6]{color:#000;background:#fff;display:inline-block;position:relative;z-index:1;padding:0 20px}.section-title-two[data-v-9d6414e6]:after{background-color:#2e3191;content:"";left:0;top:50%;position:absolute;height:1px;width:100%}',""]),t.exports=c},419:function(t,e,n){"use strict";n.r(e);var c=n(22),o=(n(68),n(14),{name:"LawsAndPolicies",data:function(){return{type:"law-and-policies",fetchActivities:[]}},methods:{activities:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("public-diu-iqac-website/news-activities/".concat(t.type));case 2:c=e.sent,t.fetchActivities=null!==(n=c.data.slice(0,4))&&void 0!==n?n:null;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.activities()}}),r=(n(361),n(47)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.fetchActivities.length>0?n("section",{staticClass:"news-area py-5"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},t._l(t.fetchActivities,(function(t,e){return n("div",{key:e,staticClass:"col-lg-3 col-md-3 col-sm-6"},[n("Molecules-card",{attrs:{data:t}})],1)})),0),t._v(" "),n("Atom-see-more-button")],1):t._e()}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title-two text-center"},[n("h2",{staticClass:"text-uppercase"},[t._v("Laws and Policies ")])])}],!1,null,"9d6414e6",null);e.default=component.exports}}]);