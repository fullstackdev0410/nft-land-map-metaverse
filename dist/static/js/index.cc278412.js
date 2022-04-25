(function(t){function e(e){for(var a,r,l=e[0],c=e[1],o=e[2],u=0,p=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,o||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,l=1;l<i.length;l++){var c=i[l];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},n={index:0},s=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var d=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("c31f")},"35e1":function(t,e,i){t.exports=i.p+"static/img/trees.f9546861.png"},"42b1":function(t,e,i){"use strict";i("f381")},"45f1":function(t,e,i){},"5b47":function(t,e,i){t.exports=i.p+"static/img/colasper.fa06e3cf.svg"},"9bcd":function(t,e,i){"use strict";i("45f1")},ae91:function(t,e,i){t.exports=i.p+"static/img/04.0f4b6263.gif"},c31f:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("HelloWorld",{attrs:{msg:"Land NFT Map"}})},s=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("nav",{staticClass:"navbar navbar-inverse"},[i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"navbar-header"},[i("a",{staticClass:"navbar-brand",attrs:{href:"#"},on:{click:t.clickSidebar}},[i("img",{attrs:{height:"100%",src:t.colasper}})])]),t._m(0)])]),i("img",{staticStyle:{display:"none"},attrs:{id:"background",src:t.background}}),i("img",{staticStyle:{display:"none"},attrs:{id:"trees",src:t.trees}}),i("div",{staticStyle:{display:"flex","justify-content":"center"}},[t.tileMapMapmatrix?i("vue-lands-tile-map",{ref:"landsTileMapRef",attrs:{tileMapMapmatrix:t.tileMapMapmatrix,tiledDigitalColormap:t.tiledDigitalColormap,tileSize:t.tileSize,showMyPlots:t.showMyPlots,showMintNFT:t.showMintNFT,showTrees:t.showTrees,startPaintingX:t.startPaintingX,startPaintingY:t.startPaintingY},on:{handleClickTile:t.handleClickTile,test:t.ceshi}}):i("div",[t._v("Loading...")])],1),i("div",{class:t.isCollapsed},[i("div",{staticClass:"form-container content"},[t._m(1),i("div",{staticClass:"form-check"},[i("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"check1",name:"option1",value:"something",checked:""},on:{click:t.clickMyPlots}}),i("label",{staticClass:"form-check-label",attrs:{for:"check1"}},[t._v(" Show My plots ")])]),i("div",{staticClass:"form-check"},[i("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"check1",name:"option2",value:"something",checked:""},on:{click:t.clickNFTMint}}),i("label",{staticClass:"form-check-label",attrs:{for:"check1"}},[t._v(" Show Minted NFTs ")])]),i("div",{staticClass:"form-check"},[i("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"check1",name:"option3",value:"something",checked:""},on:{click:t.clickTrees}}),i("label",{staticClass:"form-check-label",attrs:{for:"check1"}},[t._v(" Show Trees ")])])])]),i("div",{staticClass:"mi-modal",attrs:{id:"terrainModal"}},[i("div",{staticClass:"mi-modal-content"},[i("div",{staticClass:"mi-modal-header"},[i("span",{staticClass:"mi-close"},[t._v("×")]),i("h2",[t._v("Ocean #"+t._s(t.landId))])]),i("div",{staticClass:"mi-modal-body"},[i("img",{attrs:{id:"terrain",src:t.terrain}}),i("div",{staticClass:"terrain-content"},[t._v(" Owned By "+t._s(t.owner.substring(0,4)+"..."+t.owner.substr(-4))+" "),i("br"),i("br"),i("div",[t._v(" Plot: "+t._s(t.x)+" , "+t._s(t.y)+" ")]),t._m(2),i("br"),t._m(3)])])])])])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"nav navbar-nav navbar-right"},[i("li",[i("a",{attrs:{href:"#"}},[i("span",{staticClass:"glyphicon glyphicon-user"}),t._v(" Sign Up")])]),i("li",[i("a",{attrs:{href:"#"}},[i("span",{staticClass:"glyphicon glyphicon-log-in"}),t._v(" Login")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-heading text-center"},[i("h1",[t._v("MetaTruffy")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v(" White "),i("div",{staticClass:"status-comment"},[t._v(" Not minted and available for your to buy. ")])]),i("li",[t._v(" Grey "),i("div",{staticClass:"status-comment"},[t._v(" Minted, but not available in our marketplace. ")])]),i("li",[t._v(" Blue "),i("div",{staticClass:"status-comment"},[t._v(" Minted and available in our marketplace. ")])]),i("li",[t._v(" Green "),i("div",{staticClass:"status-comment"},[t._v(" Your land! Add 3D assets now. Visit our marketplace and buy some. ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"buy-button"},[i("button",[t._v("Buy")])])}],c=i("bc3a"),o=i.n(c),d=i("d7de"),u=i.n(d),p=i("35e1"),f=i.n(p),h=i("ae91"),m=i.n(h),v=i("5b47"),b=i.n(v),g={name:"HelloWorld",props:{msg:String},data:function(){return{isSidebarOpen:!0,showMyPlots:!0,showMintNFT:!0,showTrees:!0,background:u.a,trees:f.a,colasper:b.a,landId:-1,terrain:m.a,owner:"",tileMapMapmatrix:null,tileMapMapmatrixToc:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0],[0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0],[0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0],[0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],tiledDigitalColormap:[{0:"#138535"},{1:"#0000ff"},{2:"#00ff00"}],tileSize:10,x:0,y:0,flag:!0,startPaintingX:-2800,startPaintingY:-1300}},computed:{isCollapsed:function(){return!0===this.isSidebarOpen?"sidebar-expanded":"sidebar-collapsed"}},beforeCreate:function(){var t=this;console.log("beforeCreate"),o.a.get("/getall").then((function(e){console.log("after mysql"),t.tileMapMapmatrix=e.data}))},methods:{clickMyPlots:function(){this.showMyPlots=!this.showMyPlots},clickNFTMint:function(){this.showMintNFT=!this.showMintNFT},clickTrees:function(){this.showTrees=!this.showTrees},clickSidebar:function(){this.isSidebarOpen=!this.isSidebarOpen},ceshi:function(){console.log("ceshi")},handleClickTile:function(t){var e=document.getElementById("terrainModal");if("undefined"!==typeof this.tileMapMapmatrix[t.clickX+"_"+t.clickY]){this.x=t.x,this.y=t.y,this.owner=this.tileMapMapmatrix[t.clickX+"_"+t.clickY]["owner"],this.landId=this.tileMapMapmatrix[t.clickX+"_"+t.clickY]["landID"],e.style.display="block";var i=e.getElementsByClassName("mi-close")[0];i.onclick=function(){e.style.display="none"},window.onclick=function(t){t.target==e&&(e.style.display="none")}}else e.style.display="none",this.x="",this.y=""},handleClickFilter:function(){var t=this.tileMapMapmatrix,e=this.flag;e?(t=this.$refs.landsTileMapRef.blockCoverage(t,this.tileMapMapmatrixToc),e=!1):e=!0,this.flag=e,this.$refs.landsTileMapRef.handleClickAssignRender(t)}}},y=g,k=(i("9bcd"),i("2877")),M=Object(k["a"])(y,r,l,!1,null,"5e63970c",null),_=M.exports,C={name:"App",components:{HelloWorld:_}},w=C,x=(i("42b1"),Object(k["a"])(w,n,s,!1,null,null,null)),T=x.exports,S=i("999d"),P=i.n(S);a["a"].config.productionTip=!1,a["a"].use(P.a),new a["a"]({render:function(t){return t(T)}}).$mount("#app")},d7de:function(t,e,i){t.exports=i.p+"static/img/background.fc5df72a.jpg"},f381:function(t,e,i){}});
//# sourceMappingURL=index.cc278412.js.map