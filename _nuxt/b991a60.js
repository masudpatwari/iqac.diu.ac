(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{334:function(t,o,e){var content=e(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("9af2159c",content,!0,{sourceMap:!1})},375:function(t,o,e){"use strict";e(334)},376:function(t,o,e){var n=e(54)(!1);n.push([t.i,".blog-wrapper[data-v-1f150c1c]{padding-top:20px}.single-blog[data-v-1f150c1c]{margin-top:30px;border:1px solid rgba(48,146,85,.2);border-radius:15px;padding:20px;transition:all .3s ease 0s}.single-blog .blog-image a[data-v-1f150c1c]{display:block}.single-blog .blog-image a img[data-v-1f150c1c]{width:100%;border-radius:15px}.single-blog .blog-content[data-v-1f150c1c]{padding-top:25px}.single-blog .blog-content .blog-author[data-v-1f150c1c]{display:flex;align-items:center;justify-content:space-between}.single-blog .blog-content .blog-author .author[data-v-1f150c1c]{display:flex;align-items:center}.single-blog .blog-content .blog-author .author .author-thumb a[data-v-1f150c1c]{display:block}.single-blog .blog-content .blog-author .author .author-thumb a img[data-v-1f150c1c]{width:50px;border-radius:50%}@media only screen and (max-width:575px),only screen and (min-width:992px) and (max-width:1199px){.single-blog .blog-content .blog-author .author .author-thumb a img[data-v-1f150c1c]{width:45px}}.single-blog .blog-content .blog-author .author .author-name[data-v-1f150c1c]{flex:1;padding-left:12px}.single-blog .blog-content .blog-author .author .author-name .name[data-v-1f150c1c]{color:#52565b;font-size:14px;font-weight:400}@media only screen and (max-width:575px),only screen and (min-width:992px) and (max-width:1199px){.single-blog .blog-content .blog-author .author .author-name .name[data-v-1f150c1c]{font-size:13px}}.single-blog .blog-content .blog-author .author .author-name .name[data-v-1f150c1c]:hover{color:#2e3191}.single-blog .blog-content .blog-author .tag a[data-v-1f150c1c]{width:100px;height:35px;line-height:35px;background-color:#e7f8ee;font-size:14px;color:#2e3191;display:inline-block;text-align:center;border-radius:5px;padding:0 10px}@media only screen and (max-width:575px),only screen and (min-width:992px) and (max-width:1199px){.single-blog .blog-content .blog-author .tag a[data-v-1f150c1c]{width:80px;font-size:13px}}.single-blog .blog-content .blog-author .tag a[data-v-1f150c1c]:hover{background-color:#2e3191;color:#fff}.single-blog .blog-content .title a[data-v-1f150c1c]{font-size:16px;font-weight:500;color:#212832;margin-top:13px;display:inline-block;line-height:1.4}@media only screen and (min-width:992px) and (max-width:1199px){.single-blog .blog-content .title a[data-v-1f150c1c]{font-size:14px}}.single-blog .blog-content .title a[data-v-1f150c1c]:hover{color:#2e3191}.single-blog .blog-content .blog-meta[data-v-1f150c1c]{display:flex;justify-content:space-between;padding-top:10px}.single-blog .blog-content .blog-meta span[data-v-1f150c1c]{font-size:14px;font-weight:400;color:#52565b;margin-right:20px;display:inline-block;line-height:1}.single-blog .blog-content .blog-meta span[data-v-1f150c1c]:last-child{margin-right:0}.single-blog .blog-content .blog-meta span i[data-v-1f150c1c]{color:#2e3191;margin-right:5px;font-size:20px;display:inline-block;line-height:1}.single-blog .blog-content .btn[data-v-1f150c1c]{padding:0 20px;height:45px;line-height:39px;border:1px solid rgba(48,146,85,.2);font-size:15px;margin-top:30px}.single-blog[data-v-1f150c1c]:hover{border-color:#2e3191}",""]),t.exports=n},426:function(t,o,e){"use strict";e.r(o);var n={name:"Card",props:{data:{type:Object,required:!0}}},l=(e(375),e(47)),component=Object(l.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"single-blog"},[e("div",{staticClass:"blog-image"},[e("nuxt-link",{attrs:{to:"/details/"+t.data.id+"/"+t.data.slug}},[e("img",{staticClass:"img-fluid",staticStyle:{height:"200px"},attrs:{src:t.data.image_path,alt:t.data.title}})])],1),t._v(" "),e("div",{staticClass:"blog-content"},[e("div",{staticClass:"blog-author"},[e("div",{staticClass:"author"},[e("div",{staticClass:"author-thumb"},[e("a",{attrs:{target:"blank",href:t.data.creator_slug}},[e("img",{attrs:{src:t.data.creator_image,alt:t.data.creator_name}})])]),t._v(" "),e("div",{staticClass:"author-name"},[e("a",{staticClass:"name",attrs:{target:"blank",href:t.data.creator_slug}},[t._v(t._s(t.data.creator_name))])])])]),t._v(" "),e("h4",{staticClass:"title"},[e("nuxt-link",{attrs:{to:"/details/"+t.data.id+"/"+t.data.slug}},[t._v(t._s(t.data.title.substr(0,80)))])],1),t._v(" "),e("p",{domProps:{innerHTML:t._s(t.data.description.substr(0,100))}}),t._v(" "),e("div",{staticClass:"blog-meta"},[e("span",{staticClass:"icon-calendar"},[t._v(" "+t._s(t.data.created_at))])]),t._v(" "),e("nuxt-link",{staticClass:"btn btn-secondary btn-hover-primary btn-sm",attrs:{to:"/details/"+t.data.id+"/"+t.data.slug}},[t._v("Read More\n    ")])],1)])}),[],!1,null,"1f150c1c",null);o.default=component.exports}}]);