(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{324:function(e,t,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("7ea83abb",content,!0,{sourceMap:!1})},355:function(e,t,n){"use strict";n(324)},356:function(e,t,n){var r=n(54)(!1);r.push([e.i,"body[data-v-56e3dbe8]{background:linear-gradient(90deg,#145889,#ab47bc)}.box[data-v-56e3dbe8]{text-align:center;margin-bottom:45px}.header[data-v-56e3dbe8]{padding-top:40px}",""]),e.exports=r},401:function(e,t,n){"use strict";n.r(t);var r=n(22),c=(n(68),{name:"sac",data:function(){return{type:"sac",fetchTeamData:[]}},methods:{teamsData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("public-diu-iqac-website/teams/".concat(e.type));case 2:r=t.sent,e.fetchTeamData=null!==(n=r.data)&&void 0!==n?n:null;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.teamsData()}}),o=(n(355),n(47)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Molecules-banner",{attrs:{title:"about us",child:"sac"}}),e._v(" "),n("div",{staticClass:"container box my-5"},[n("div",{staticClass:"row"},e._l(e.fetchTeamData,(function(e,t){return n("div",{key:t,staticClass:"col-lg-3 col-md-3 col-sm-6"},[n("Molecules-team",{attrs:{teamMember:e}})],1)})),0)])],1)}),[],!1,null,"56e3dbe8",null);t.default=component.exports}}]);