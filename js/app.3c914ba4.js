(function(){"use strict";var e={2018:function(e,t,n){var o=n(9242),i=n(3396);const r={class:"flex justify-content-center my-5"};function a(e,t,n,o,a,s){const l=(0,i.up)("NavBar"),u=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(l),(0,i._)("div",r,[(0,i.Wm)(u)])],64)}const s=(0,i.Uk)(" git ");function l(e,t,n,o,r,a){const l=(0,i.up)("Menubar");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(l,{model:r.items,class:"flex justify-items-end justify-content-end"},{default:(0,i.w5)((()=>[s])),_:1},8,["model"])])}var u=n(5106),c={name:"NavBar",components:{Menubar:u.Z},data(){return{items:[{label:"Map",to:"/dashboard/map"},{label:"Missions",to:"/dashboard/missions"},{label:"Complaints",to:"/dashboard/complaints"},{label:"Account",icon:"pi pi-fw pi-user",to:"/dashboard/account"}]}}},d=n(89);const p=(0,d.Z)(c,[["render",l]]);var m=p,f={name:"App",components:{NavBar:m}};const h=(0,d.Z)(f,[["render",a]]);var b=h,v=n(3852),g=n(2483);const y={style:{width:"80vw",height:"80vh"}};function k(e,t,n,o,r,a){const s=(0,i.up)("l-tile-layer"),l=(0,i.up)("CollectionPointMarkers"),u=(0,i.up)("TruckMarkers"),c=(0,i.up)("l-map"),d=(0,i.up)("CollectionPointSidebar"),p=(0,i.up)("TruckSidebar");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",y,[(0,i.Wm)(c,{ref:"map",modelValue:r.zoom,"onUpdate:modelValue":t[0]||(t[0]=e=>r.zoom=e),zoom:r.zoom,"onUpdate:zoom":t[1]||(t[1]=e=>r.zoom=e),"max-zoom":18,"min-zoom":5,"zoom-animation":!1,center:[r.userCoords.latitude,r.userCoords.longitude],"scroll-zoom":!1,onReady:a.mapIsReady},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,i.Wm)(l,{onOpenSidebar:a.openSidebar},null,8,["onOpenSidebar"]),(0,i.Wm)(u,{onOpenSidebar:a.openSidebar},null,8,["onOpenSidebar"])])),_:1},8,["modelValue","zoom","center","onReady"])]),a.collectionPointIsClicked?((0,i.wg)(),(0,i.j4)(d,{key:0,"side-visibility":r.sidebarVisible,"item-id":r.markerClicked,onClosed:a.sidebarClosed},null,8,["side-visibility","item-id","onClosed"])):(0,i.kq)("",!0),a.truckIsClicked?((0,i.wg)(),(0,i.j4)(p,{key:1,"side-visibility":r.sidebarVisible,"item-id":r.markerClicked,onClosed:a.sidebarClosed},null,8,["side-visibility","item-id","onClosed"])):(0,i.kq)("",!0)],64)}var C=n(4575),w=n(7139);const O={key:0},P={class:"flex flex-column justify-content-evenly"};function S(e,t,n,o,r,a){const s=(0,i.up)("DumpsterCard"),l=(0,i.up)("Sidebar");return(0,i.wg)(),(0,i.j4)(l,{onItemUpdated:a.updateCollectionPointId},(0,i.Nv)({header:(0,i.w5)((()=>[(0,i._)("h1",null,(0,w.zw)(r.collectionPointId),1),null!==r.collectionPoint?((0,i.wg)(),(0,i.iD)("p",O,(0,w.zw)(r.collectionPoint.position),1)):(0,i.kq)("",!0)])),_:2},[null!==r.dumpsters?{name:"content",fn:(0,i.w5)((()=>[(0,i._)("div",P,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.dumpsters,(e=>((0,i.wg)(),(0,i.j4)(s,{key:e,class:"flex align-items-center justify-content-center m-2",dumpster:e},null,8,["dumpster"])))),128))])])),key:"0"}:void 0]),1032,["onItemUpdated"])}function T(e,t,n,o,r,a){const s=(0,i.up)("Divider"),l=(0,i.up)("Sidebar",!0);return(0,i.wg)(),(0,i.j4)(l,{visible:r.visible,"onUpdate:visible":t[0]||(t[0]=e=>r.visible=e),position:"right",class:"p-sidebar-md",onHide:a.hide},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"header"),(0,i.Wm)(s),(0,i.WI)(e.$slots,"content")])),_:3},8,["visible","onHide"])}var I=n(7891),j=n(3647),_={name:"SideBar",components:{Sidebar:I.Z,Divider:j.Z},props:{sideVisibility:Boolean,itemId:{type:String,default:"-1"}},emits:["closed","itemUpdated"],data(){return{visible:this.sideVisibility}},watch:{sideVisibility(e){this.visible=e},itemId(e){this.$emit("itemUpdated",e)}},mounted(){this.$emit("itemUpdated",this.itemId)},methods:{hide(){this.$emit("closed")}}};const M=(0,d.Z)(_,[["render",T]]);var W=M;const A=e=>((0,i.dD)("data-v-c4f382e6"),e=e(),(0,i.Cn)(),e),z={class:"flex flex-wrap align-content-start w-100"},D=(0,i.Uk)(" Status: "),U=(0,i.Uk)(" Type of waste: "),Z=A((()=>(0,i._)("p",null,"Occupied percentage:",-1)));function x(e,t,n,o,r,a){const s=(0,i.up)("Divider"),l=(0,i.up)("Tag"),u=(0,i.up)("ProgressBar"),c=(0,i.up)("Card");return(0,i.wg)(),(0,i.iD)("div",z,[(0,i.Wm)(c,null,{title:(0,i.w5)((()=>[(0,i.Uk)((0,w.zw)(n.dumpster.id)+" ",1),(0,i.Wm)(s)])),content:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i._)("p",null,[D,(0,i.Wm)(l,{value:a.dumpsterStatusToValue,rounded:!0,severity:a.dumpsterStatusToSeverity},null,8,["value","severity"])]),(0,i._)("div",null,[U,(0,i.Wm)(l,{value:a.dumpsterOrdinaryWaste.wasteName,rounded:!0,style:(0,w.j5)(a.cssDumpsterColor)},null,8,["value","style"])]),Z,(0,i.Wm)(u,{value:a.dumpsterOccupiedPercentage},{default:(0,i.w5)((()=>[(0,i.Uk)((0,w.zw)(a.dumpsterOccupiedPercentage)+"% ",1)])),_:1},8,["value"])])])),_:1})])}var E=n(606),L=n(9203),V=n(1492),N={name:"DCard",components:{Card:E.Z,Tag:L.Z,ProgressBar:V.Z,Divider:j.Z},props:{dumpster:{type:Object,default:null}},computed:{dumpsterStatusToValue(){return this.dumpster.available?"available":"not available"},dumpsterStatusToSeverity(){return this.dumpster.available?"success":"danger"},dumpsterOccupiedPercentage(){return this.dumpster.occupiedVolume.value/this.dumpster.dumpsterType.size.capacity*100},dumpsterOrdinaryWaste(){return this.dumpster.dumpsterType.typeOfOrdinaryWaste},cssDumpsterColor(){return{"background-color":this.dumpsterOrdinaryWaste.wasteColor.toLowerCase()}}}};const B=(0,d.Z)(N,[["render",x],["__scopeId","data-v-c4f382e6"]]);var R=B,H={name:"CollectionPointSidebar",components:{Sidebar:W,DumpsterCard:R},data(){return{collectionPointId:null,collectionPoint:null,dumpsters:[]}},methods:{getCollectionPointById(){this.dumpsters=[{id:"Dumpster2",dumpsterType:{size:{dimension:"SMALL",capacity:175},typeOfOrdinaryWaste:{wasteName:"ORGANIC",wasteColor:"BROWN"}},occupiedVolume:{value:0},open:!1,available:!0,working:!0},{id:"Dumpster3",dumpsterType:{size:{dimension:"SMALL",capacity:175},typeOfOrdinaryWaste:{wasteName:"PAPER",wasteColor:"BLUE"}},occupiedVolume:{value:175},open:!1,available:!1,working:!0}]},updateCollectionPointId(e){this.collectionPointId=e,this.dumpsters=[],this.getCollectionPointById()}}};const $=(0,d.Z)(H,[["render",S]]);var q=$;const Y=(0,i._)("p",null,null,-1),K=(0,i._)("div",{class:"flex flex-column justify-content-evenly"},null,-1);function F(e,t,n,o,r,a){const s=(0,i.up)("Sidebar");return(0,i.wg)(),(0,i.j4)(s,{onItemUpdated:a.updateTruckId},{header:(0,i.w5)((()=>[(0,i._)("h1",null," Truck "+(0,w.zw)(r.truckId),1),Y])),content:(0,i.w5)((()=>[K])),_:1},8,["onItemUpdated"])}var G={name:"TruckSidebar",components:{Sidebar:W},data(){return{truckId:null,truck:null}},methods:{updateTruckId(e){this.truckId=e}}};const X=(0,d.Z)(G,[["render",F]]);var J=X;function Q(e,t,n,o,r,a){const s=(0,i.up)("MarkerComponent");return(0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.collectionPoints,(t=>((0,i.wg)(),(0,i.j4)(s,{key:t,lat:t.position.latitude,lng:t.position.longitude,icon:r.cpIcon,onClick:n=>e.$emit("open-sidebar",t.id)},null,8,["lat","lng","icon","onClick"])))),128)}function ee(e,t,n,o,r,a){const s=(0,i.up)("l-marker");return(0,i.wg)(),(0,i.j4)(s,{"lat-lng":[n.lat,n.lng],icon:n.icon},null,8,["lat-lng","icon"])}var te={name:"MarkerComponent",components:{LMarker:C.$R},props:{lat:{type:Number,default:0,require:!0},lng:{type:Number,default:0,require:!0},icon:{}}};const ne=(0,d.Z)(te,[["render",ee]]);var oe=ne,ie=n(3153),re=n.n(ie),ae=n(6265),se=n.n(ae),le=n(4723),ue=n.n(le),ce=n(1120),de=n.n(ce),pe={name:"CollectionPointMarkers",components:{MarkerComponent:oe},emits:["open-sidebar"],data(){return{collectionPoints:[],cpIcon:re().icon({iconUrl:"https://i.postimg.cc/PfCmTmb2/collection-point.png",iconSize:[32,32]})}},mounted(){for(let e=0;e<6;e++){let t=ue()({min:44.14,max:44.2}),n=de()({min:12.24,max:12.3});this.collectionPoints.push({id:"Cp-"+e,position:{latitude:t,longitude:n}})}},methods:{getCollectionPoints(){se().get({NODE_ENV:"production",BASE_URL:"/dashboard/"}.VUE_APP_DUMPSTER_MICROSERVICE+"/collectionpoints",{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token"}}).then((e=>{console.log(e),e.data.forEach((e=>this.collectionPoints.push(e)))}))}}};const me=(0,d.Z)(pe,[["render",Q]]);var fe=me;function he(e,t,n,o,r,a){const s=(0,i.up)("MarkerComponent");return(0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.trucks,(t=>((0,i.wg)(),(0,i.j4)(s,{key:t,lat:t.position.latitude,lng:t.position.longitude,icon:r.tIcon,onClick:n=>e.$emit("open-sidebar",t.truckId)},null,8,["lat","lng","icon","onClick"])))),128)}var be={name:"CollectionPointMarkers",components:{MarkerComponent:oe},emits:["open-sidebar"],data(){return{trucks:[],tIcon:re().icon({iconUrl:"https://i.postimg.cc/tCcLj6dL/garbage-truck.png",iconSize:[32,32]})}},mounted(){for(let e=0;e<3;e++){let t=ue()({min:44.14,max:44.2}),n=de()({min:12.24,max:12.3});this.trucks.push({truckId:"T-"+e,position:{latitude:t,longitude:n}})}},methods:{}};const ve=(0,d.Z)(be,[["render",he]]);var ge=ve,ye={name:"MapComponent",components:{CollectionPointMarkers:fe,TruckSidebar:J,CollectionPointSidebar:q,TruckMarkers:ge,LMap:C.iA,LTileLayer:C.Hw},data(){return{zoom:13,map:null,userCoords:{latitude:44.2227278,longitude:12.041273},sidebarVisible:!1,markerClicked:null,locationWatcher:null}},computed:{collectionPointIsClicked(){return null!=this.markerClicked&&this.markerClicked.startsWith("C")},truckIsClicked(){return null!=this.markerClicked&&this.markerClicked.startsWith("T")}},unmounted(){null!==this.locationWatcher&&navigator.geolocation.clearWatch(this.locationWatcher)},methods:{mapIsReady(){this.map=this.$refs.map.leafletObject,null!==this.map&&(this.map.scrollWheelZoom.disable(),navigator.geolocation&&(this.locationWatcher=navigator.geolocation.watchPosition((e=>{this.userCoords=e.coords,this.map.flyTo([this.userCoords.latitude,this.userCoords.longitude])}))))},openSidebar(e){this.markerClicked=e,this.sidebarVisible=!0},sidebarClosed(){this.sidebarVisible=!1}}};const ke=(0,d.Z)(ye,[["render",k]]);var Ce=ke;function we(e,t,n,o,i,r){return" MissionList "}var Oe={name:"MissionsList"};const Pe=(0,d.Z)(Oe,[["render",we]]);var Se=Pe;function Te(e,t,n,o,i,r){return" complaints "}var Ie={name:"ComplaintsList"};const je=(0,d.Z)(Ie,[["render",Te]]);var _e=je;function Me(e,t,n,o,i,r){return" Account "}var We={name:"AccountComponent"};const Ae=(0,d.Z)(We,[["render",Me]]);var ze=Ae;const De=[{path:"/dashboard",name:"",component:Ce},{path:"/dashboard/map",name:"Map",component:Ce},{path:"/dashboard/missions",name:"Missions",component:Se},{path:"/dashboard/complaints",name:"Complaints",component:_e},{path:"/dashboard/account",name:"Account",component:ze}],Ue=(0,g.p7)({history:(0,g.PO)(),routes:De});(0,o.ri)(b).use(v.Z).use(Ue).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],r=e[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,i){if(1&i&&(o=this(o)),8&i)return o;if("object"===typeof o&&o){if(4&i&&o.__esModule)return o;if(16&i&&"function"===typeof o.then)return o}var r=Object.create(null);n.r(r);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){a[e]=function(){return o[e]}}));return a["default"]=function(){return o},n.d(r,a),r}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{93:"ed65c43c",431:"c5216f61",858:"a82c0db2",891:"682590b2"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dashboard:";n.l=function(o,i,r,a){if(e[o])e[o].push(i);else{var s,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[i];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var i=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/dashboard/"}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var a=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,i[1](s)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],s=o[1],l=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var c=l(n)}for(t&&t(o);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2018)}));o=n.O(o)})();
//# sourceMappingURL=app.3c914ba4.js.map