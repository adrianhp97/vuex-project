webpackJsonp([6],{M4VC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),a=n.n(s),o=n("NYxO"),i=n("thjQ"),l=n.n(i),c={data:function(){return{loading:!0,posts:null}},computed:a()({},Object(o.c)("post",["getDetailData"])),mounted:function(){var t=this;this.$store.dispatch("post/all").then(function(e){t.posts=e,console.log(e),t.loading=!1}).catch(function(e){t.loading=!1,l()("Failed",e.message,"error")})},methods:a()({},Object(o.b)("post",["setDetailData"]))},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("layout",[this.loading?e("div",{staticClass:"container"},[e("loading",{staticClass:"loader"})],1):e("div",{staticClass:"container"},[e("h1",[this._v("Posts Index")])])])},staticRenderFns:[]},d=n("VU/8")(c,r,!1,null,null,null);e.default=d.exports}});
//# sourceMappingURL=6.f6dcc2bae006d62e83a7.js.map