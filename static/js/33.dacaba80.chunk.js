(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[33],{1147:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(129),i=a(44),c=a(12),s=a(553),r=a(568),d=a(549),u=a(559),m=a(558),v=a(583),p=a.n(v),b=(a(628),a(684)),g=a(547),f=a(552);t.default=Object(c.i)(e=>{var t;const a=Object(i.d)(e=>e.thereAreRequest),c=Object(i.c)(),v=Object(i.d)(e=>e.user.warehouseUuid),h=Object(i.d)(e=>e.status),y=Object(i.d)(e=>e.isLoading),E=Object(i.d)(e=>e.outboundEntryData),x=Object(g.u)({moduleEntry:E,moduleName:"outbound"}),w=Object(i.d)(e=>e.warehouseArea),N=Object(i.d)(e=>e.areaId),k=Object(i.d)(e=>e.outboundAddSku),[j,O]=Object(n.useState)(null),[S,C]=Object(n.useState)(0),U=S!==x&&x>0,[I,D]=Object(n.useState)(null),[L,P]=Object(n.useState)(!0),[T,B]=Object(n.useState)([]);if(console.log(U),Object(n.useEffect)(()=>{Object(u.e)({dispatch:c}),Object(u.h)({dispatch:c,warehouseUuid:v}),C(x)},[]),E&&void 0!==E||e.history.push("/inventory-entry/additional-outbound"),!0===L&&void 0!==E){var A,M;D(E.jobPost.list.map((e,t)=>e.skuNumber));let e=[];e.value=null===E||void 0===E||null===(A=E.jobPost)||void 0===A?void 0:A.areaSource,e.label=null===E||void 0===E||null===(M=E.jobPost)||void 0===M?void 0:M.areaName,Object(g.v)({selected:e,dispatch:c}),P(!1)}const[H,F]=Object(n.useState)(),[z,W]=Object(n.useState)(),R=document.documentElement.clientHeight,K=R-290,q=R-290;return!1===k&&(null===E||void 0===E?void 0:E.jobPost.list.length)>0&&e.history.push("/inventory-entry/additional-outbound/weight-entry"),o.a.createElement("div",{className:"w-100  stock-take-summary"},o.a.createElement(f.a,{status:h}),o.a.createElement("div",{className:" bg-white border-all radius-all d-md-flex dd-group d-none"},o.a.createElement("div",{className:"col-lg-3 px-0 stock-take-dropdown"},o.a.createElement(s.a,{show:!0,title:"Select Area",placeholder:"Select Area",options:w,onChangeDropdown:e=>Object(g.v)({selected:e,dispatch:c}),selectedValue:N,showTitle:!0}))),o.a.createElement("div",{className:"pt-3 pb-0 pl-3 pr-3 bg-white   border-all radius-all mb-3"},o.a.createElement("div",{className:"d-md-flex d-lg-flex mb-3 justify-content-between"},o.a.createElement("div",{className:"text LatoBold d-flex justify-content-between align-items-center sku-des"},o.a.createElement("div",null,"Search & check SKU(s) that you want add to entries"," ",o.a.createElement("span",{className:"green"},"(".concat(T.length," Selected SKU").concat(T.length>1?"s":"",")"))))),o.a.createElement(r.a,{moduleName:"ADD_SKU",setSortBy:W,category:H,setCategory:F,placeholder:"Enter SKU",filter:!1,searchHandler:e=>Object(d.g)({category:H,dispatch:c,desc:e,warehouseUuid:v,areaId:N,setModule:O,selectedSkusNumber:I})}),o.a.createElement("div",{className:"mb-3 mt-3 d-flex align-items-center scroll-sku ".concat((null===j||void 0===j?void 0:j.length)?"flex-column":"flex-row"," w-100 text-center"),style:{minHeight:K,maxHeight:K}},(null===j||void 0===j?void 0:j.length)?null===j||void 0===j||null===(t=j.sort((function(e,t){return Object(g.g)(e,t,null===z||void 0===z?void 0:z.value)})))||void 0===t?void 0:t.map((e,t)=>o.a.createElement(m.a,{key:t,img:null===e||void 0===e?void 0:e.photo,skuDescription:null===e||void 0===e?void 0:e.skuName,skuNumber:null===e||void 0===e?void 0:e.skuNumber,uomLabel:"weight",uomValue:null===e||void 0===e?void 0:e.totalQty,uom:null===e||void 0===e?void 0:e.unitOfMeassures,isCheckedHandler:e=>Object(b.a)({idx:t,checked:e,dispatch:c,moduleSummary:j,moduleEntry:T,moduleName:"outbound",warehouseUuid:v,areaId:N,preAddHandler:B}),check:null===e||void 0===e?void 0:e.checked})):o.a.createElement("div",{className:"w-100 text-center emptyTextField d-flex flex-column align-items-center justify-content-center",style:{minHeight:q,maxHeight:K}},Object(g.t)({isLoading:y,summary:j})?"No Data":o.a.createElement("img",{className:"loading",src:p.a,alt:"loading"})))),o.a.createElement("div",{className:"h-screen-summary-footer d-flex flex-column justify-content-start"},o.a.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-1"},o.a.createElement("button",{onClick:()=>e.history.push("/inventory-entry/additional-outbound/weight-entry"),type:"button",className:"btn px-4 no-shadow border-all bg-white fontSizeButton"},"Cancel"),o.a.createElement(l.b,{to:"/inventory-entry/additional-outbound/weight-entry",onClick:e=>0===a&&(null===T||void 0===T?void 0:T.length)>0||e.preventDefault()},o.a.createElement("button",{onClick:()=>0===a&&(null===T||void 0===T?void 0:T.length)>0?Object(g.a)({dispatch:c,moduleEntry:T,moduleSummary:E,moduleName:"stockTake"}):null,type:"button",className:"btn px-5 fontSizeButton no-shadow text-white ".concat(0===a&&(null===T||void 0===T?void 0:T.length)>0?"bg-green":"bg-lineGrey")},0===(null===T||void 0===T?void 0:T.length)||0===a&&(null===T||void 0===T?void 0:T.length)>0?"Update":"Processing...")))))})},548:function(e,t,a){},552:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(544);a(548);var i=a(44),c=a(16);t.a=e=>{let{refresh:t,status:a,icon:s,statusDisplay:r=!1,title:d="",cancelButtonTitle:u="Cancel",actionButtonTitle:m="Submit",cancelButtonClass:v="bg-background",actionButtonClass:p="bg-background",actionButtonEvent:b=null,colorText:g="red",msg1:f=null,msg2:h=null,onCloseFunction:y=null,refreshOnCancel:E=!0,setIsSuccess:x}=e;const w=Object(i.c)();500===(null===a||void 0===a?void 0:a.code)&&(s="em-pensive",d="Server Error",u="Try Again",m="Contact Administration",g="red",f=null===a||void 0===a?void 0:a.message,h="Please try again or contact Sayurbox administration for further information.",v="bg-green",r=!0,E=!0),408===(null===a||void 0===a?void 0:a.code)&&(s="em-alarm_clock",d="Request Timeout",u="Try Again",m="Contact Administration",g="red",f=null===a||void 0===a?void 0:a.message,h="Please try again or contact Sayurbox administration for further information.",v="bg-green",r=!0,E=!0),400===(null===a||void 0===a?void 0:a.code)&&(s="em-alarm_clock",d="Server Error",u="Try Again",m="Contact Administration",g="red",f=null===a||void 0===a?void 0:a.message,h="Please try again or contact Sayurbox administration for further information.",v="bg-green",r=!0,E=!1),404===(null===a||void 0===a?void 0:a.code)&&(d="Something wrong with the application",u="Try Again",m="Contact Administration",g="red",f=null===a||void 0===a?void 0:a.message,h="Please try again or contact Sayurbox administration for further information.",v="bg-green",r=!0,E=!1);const[N,k]=Object(n.useState)(r);return Object(n.useEffect)(()=>{k(r)},[r]),Object(n.useEffect)(()=>{},[N]),window.onkeydown=e=>27===e.keyCode?k(!1):null,o.a.createElement(l.B,{className:"".concat(N?null:"d-none")},o.a.createElement(l.f,null,o.a.createElement(l.s,{show:N,closeOnBackdrop:!1,onClose:()=>{k(!1),"function"===typeof x&&x({success:null,name:null}),w({type:c.k,status:null}),y&&y()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},o.a.createElement("div",{className:"d-flex flex-row-reverse"},o.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:()=>{k(!1),"function"===typeof x&&x({success:null,name:null}),w({type:c.k,status:null}),y&&y()}})),o.a.createElement(l.v,{className:"px-5 pt-5 border-none"},o.a.createElement(l.w,{className:"text LatoBold ".concat(g)},d," ",o.a.createElement("span",null,o.a.createElement("i",{className:"em ".concat(s)})))),o.a.createElement(l.t,{className:"px-5 py-0"},o.a.createElement("p",{className:"text mb-2"},f),o.a.createElement("p",{className:"text"},h)),o.a.createElement(l.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},u?o.a.createElement(l.d,{className:"".concat(v," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:()=>{E?"function"===typeof t?t():(e=>{let{refresh:t=!0}=e;!0===t&&window.location.reload(!1)})({refresh:!0}):(e=>{let{setShow:t,parentOncCloseFunction:a}=e;t(!1),a&&a()})({setShow:k,parentOncCloseFunction:y}),w({type:c.k,status:null})}},u):null,m?o.a.createElement(l.d,{className:"".concat(p," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:()=>{b?(b(),k(!1)):k(!1)}},m):null," "))))}},553:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(587);t.a=e=>{var t,a;let{isEmpty:i,title:c,placeholder:s,options:r,selectedValue:d,showTitle:u,width:m,className:v,entryListIdx:p,onChangeDropdown:b,show:g,poListIdx:f,isDisabled:h,style:y,noMarginBottom:E,resetName:x,isMulti:w,hideResetOpt:N,zInfinity:k}=e;const[j,O]=Object(n.useState)();Object(n.useEffect)(()=>{"empty"===d&&O(!0)},[d,i]);const S=!!i&&(e=>({...e,border:"solid #eb5c5c 1px",":hover":{border:"solid #eb5c5c 1px !important"},":active":{border:"solid #eb5c5c 1px !important"}})),C=null===(t=document)||void 0===t?void 0:t.getElementById("dropdown".concat(p).concat(f));let U=null===C||void 0===C?void 0:C.getBoundingClientRect();Object(n.useEffect)(()=>{U=null===C||void 0===C?void 0:C.getBoundingClientRect()},[j]);const I=document.documentElement.clientWidth;let D=[{label:"-".concat(x||c,"-"),value:null}];r&&(D=[...D,...r]),N&&(D=D.filter(e=>null===e||void 0===e?void 0:e.value));let L=(null===(a=U)||void 0===a?void 0:a.bottom)>600?"top":"bottom";var P;I<=500&&(L=(null===(P=U)||void 0===P?void 0:P.bottom)>400?"top":"bottom","Categories"===c&&(L="top"));return o.a.createElement("div",{style:y,className:"mr-0 ".concat(y?null:"mr-lg-3"," ").concat(E?null:"mb-3"," ").concat(m," ").concat(v," ").concat(g?null:"d-none")},o.a.createElement("div",{className:" pb-1 LatoBold ".concat(u?null:"d-none")},c),o.a.createElement(l.a,{inputId:"".concat(c,"_").concat(f,"_").concat(p),isMulti:w,isSearchable:!(I<500),isDisabled:h||!1,id:"dropdown".concat(p).concat(f),value:((null===d||void 0===d?void 0:d.value)||!!(null===d||void 0===d?void 0:d.length))&&d,menuIsOpen:j,menuPortal:!0,placeholder:x||s,options:D,onMenuOpen:()=>O(!0),onMenuClose:()=>O(!1),onChange:e=>{b(e),O(!1)},menuPortalTarget:document.body,maxMenuHeight:150,menuPlacement:"".concat(L),styles:{menuPortal:e=>({...e,zIndex:k?1e16:9999}),control:S,option:(e,t)=>{let{isFocused:a,isSelected:n}=t;return{...e,backgroundColor:n?"rgb(242, 250, 246, 0)":a?"rgb(242, 250, 246)":null,color:n?"black":"#969696",cursor:"pointer",fontWeight:n?"bold":null,":active":{backgroundColor:"rgb(242, 250, 246) !important",color:"#4abe84"},":hover":{color:n?null:"#4abe84"}}}},theme:e=>({...e,borderRadius:4})}))}},556:function(e,t,a){e.exports=a.p+"static/media/sayur-box-logo.0174b35e.svg"},558:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(556),i=a.n(l),c=a(218),s=a(544);t.a=e=>{let{skuUuId:t=123,selectAll:a,img:l=i.a,skuDescription:r="SKU Description",skuNumber:d="1001",uomLabel:u="weight",uomValue:m=100.3,uom:v="KG",isCheckedHandler:p=null,check:b=!1,idx:g=0,singleView:f,setCreatePo:h,target:y,targetMovementProgress:E,targetRepackProgress:x,moduleName:w,setFromBarcode:N,setSingleViewSku:k}=e;const j=document.documentElement.clientWidth<=500,[O,S]=o.a.useState(b),C=()=>{S(!0),"function"===typeof k&&k(t),"function"!==typeof k&&p(!0),"function"===typeof h&&h({show:!0,skuNumber:d}),"function"===typeof N&&N(!1)},U=!!y||"d-none";let I=0,D=0;var L,P;((null===x||void 0===x?void 0:x.length)&&"repack"===w&&x.forEach(e=>{I+=Number(e.totalPack),D+=Number(e.totalUom)}),(null===E||void 0===E?void 0:E.length)&&"repack"!==w)&&(I=null===(L=E[0])||void 0===L?void 0:L.totalMove,D=null===(P=E[0])||void 0===P?void 0:P.totalUos);return Object(n.useEffect)(e=>{a&&(S(!0),p(!0)),!1===a&&S(!1)},[a]),o.a.createElement("div",{onKeyDown:e=>13===e.keyCode&&C(),tabindex:"0",key:g,className:"w-100 border d-md-flex sku-item justify-content-between ".concat(j?"pl-0 pr-0":"pl-2 pr-3"," py-2 mb-3 rounded ").concat(b?"bg-softGreen":"bg-white")},o.a.createElement("div",{className:"d-flex align-items-center w-100 cursor-pointer ".concat(j?"pl-2 pr-3":"pl-0 pr-0"),onClick:()=>{S(!O),p&&p(!O)}},o.a.createElement("div",{style:{cursor:"pointer",height:"23px",width:"23px",minWidth:"23px"},className:"mr-3 text-white d-flex align-items-center rounded px-1 ".concat(b?"iconU-pickCheck bg-green pl-1-5":"bg-borderHeader")}),o.a.createElement("img",{src:l,alt:"sku image",className:"w-5 mr-3 border softGreen rounded"}),o.a.createElement("div",{className:"text-left"},o.a.createElement("div",{className:"mr-3 text LatoBold fontSizeTitle"},r),o.a.createElement("div",{className:"text fontSizeTitle"},d))),o.a.createElement("hr",{className:"".concat(j?null:"d-none")}),o.a.createElement("div",{className:"d-flex w-100 ".concat(j?"pr-3":"pr-0"," pl-5 pl-md-0 align-items-center")},o.a.createElement("div",{className:"d-flex justify-content-md-end align-items-center w-100 ".concat(j?"justify-content-end":null)},o.a.createElement("div",{className:"w-25 mr-4 ".concat(U," tooltips")},o.a.createElement("span",{style:{marginLeft:-260},className:"tooltiptext"},o.a.createElement("span",{className:"pl-1 pr-1"},"repack"===w?"Repack Percentage":"Movement Percentage")),o.a.createElement("div",{className:"latoBold"},"".concat(I,"/").concat(D),o.a.createElement("span",{className:"font-green"}," (".concat(Object(c.e)(I/D*100),"%)"))),o.a.createElement(s.A,{value:I,max:D,className:"mb-3"})),o.a.createElement("div",{className:"mr-3 iconU-sideBarDot d-flex align-items-center ".concat(U)}),o.a.createElement("div",{className:"my-0 mr-3 text fontSizeWeightNumber ".concat(j?"d-none":null)},"Total ".concat("KG"===v.toUpperCase()?u.toUpperCase():v.toUpperCase())),o.a.createElement("div",{className:"mr-1 font-weight-bold green fontSizeWeightNumber"},Object(c.e)(m)),o.a.createElement("div",{className:"mr-3 font-weight-bold green fontSizeWeightNumber"},v)),o.a.createElement("div",{onClick:C,style:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"8px"},className:"".concat(f?null:"d-none"," cursor-pointer iconU-sideBarHideRight font-weight-bold green d-flex align-items-center border rounded border-green")})))}},568:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(44);var i=a(569),c=a.n(i),s=a(570),r=a.n(s),d=a(571),u=a.n(d),m=a(572),v=a.n(m),p=a(573),b=a.n(p),g=a(574),f=a.n(g),h=a(575),y=a.n(h),E=a(576),x=a.n(E),w=a(577),N=a.n(w),k=a(578),j=a.n(k),O=a(550);a(579);var S=e=>{var t,a;let{isMulti:i,options:c,onChange:s,moduleName:r}=e;const[d,m]=Object(n.useState)(!1),{dimention:p}=Object(O.d)(),g=p<=500,h=Object(n.useRef)(null),E=null===(t=document)||void 0===t?void 0:t.getElementById("c-filter");let w=null===E||void 0===E?void 0:E.getBoundingClientRect();Object(n.useEffect)(()=>{w=null===E||void 0===E?void 0:E.getBoundingClientRect()},[d]);const k=(null===(a=w)||void 0===a?void 0:a.top)+(g?-70:((e,t,a)=>{switch(p){case 1024:return-250;default:return"waste"===e||"ADD_SKU"===e?-100:-220}})(r));Object(n.useEffect)(()=>{function e(e){d&&h.current&&!h.current.contains(e.target)&&m(!d)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[h,d]);const S=d?280:0,C=d?1:0,U=g?"1rem":p>=1024&&p<1280?-180:p>=1280&&p<1366?-80:p>=1366&&p<1396?-50:p>=1396&&p<1440?-90:p>=1440&&p<1536?-70:p>=1536&&p<1600?-50:p>=1600&&p<1920?-70:p>=1920&&p<1930?-50:void 0,I=!!g&&"1rem",D=g?"fixed":"absolute",L=g?"100% !important":250,[P,T]=Object(n.useState)(""),[B,A]=Object(n.useState)(i?[]:{}),[M,H]=Object(n.useState)(!1),F=e=>{let{options:t,item:a,setSelected:n,reset:o}=e,l=null===t||void 0===t?void 0:t.map(e=>e);l=l.map(e=>(a===e.value&&(e.selected=!e.selected),o&&(e.selected=!1),e)),l=l.filter(e=>e.selected),n(l),"function"===typeof s&&s(l)},z=Object(l.d)(e=>e.targetRepack),W=Object(l.d)(e=>e.stockMovementTargetRepack),R=!!(z&&"repack"===r||W&&"stockMovement"===r);let K=[{value:"asc",label:"Ascending"},{value:"desc",label:"Descending"},{target:!0,value:"tasc",label:"Most Completion Target"},{target:!0,value:"tdesc",label:"Least Completion Target"}];return o.a.createElement("div",{className:"position-sticky"},o.a.createElement("div",null,o.a.createElement("img",{className:"cursor-pointer",id:"c-filter",src:i?(null===B||void 0===B?void 0:B.length)?b.a:f.a:(null===B||void 0===B?void 0:B.label)?u.a:v.a,onClick:()=>m(!0)})),o.a.createElement("div",{ref:h,className:"text mt-3 rounded shadow py-2",style:{zIndex:1040,transition:"max-height ease-in",transitionProperty:"all",transitionDuration:"0.15s",maxHeight:S,opacity:C,minWidth:L,backgroundColor:"white",top:k,position:D,left:U,right:I,overflow:"hidden"}},o.a.createElement("div",{style:{zIndex:1040,maxHeight:230,overflow:"scroll"},className:"hide-scrollbar ".concat(i?"d-none":null)},!i&&(null===K||void 0===K?void 0:K.map(e=>{const t=e.label===M,a=t?M===e.label?"green":"text":"emptyTextField";return o.a.createElement("div",{onMouseEnter:()=>H(e.label),onMouseLeave:()=>H(null),onClick:()=>(e=>{A(e),"function"===typeof s&&s(e),m(!1)})(e),style:{minHeight:40,backgroundColor:"white"},className:"".concat(e.target?R?null:"d-none":null," filter-items rounded cursor-pointer w-100 d-flex justify-content-between align-items-center px-3 ").concat((null===e||void 0===e?void 0:e.label)===(null===B||void 0===B?void 0:B.label)&&"LatoBold text"," ").concat(a)},e.label)}))),o.a.createElement("div",{className:"px-2 ".concat(i?null:"d-none")},o.a.createElement("div",{className:"border rounded w-100 d-flex justify-content-between align-items-center pl-3 pr-2",style:{height:40}},o.a.createElement("input",{id:"filter-input",value:P,placeholder:"Search Category",onChange:e=>T(e.target.value),type:"text",className:"plain-input m-0 p-0",style:{color:"#969696",fontSize:"1rem"}}),o.a.createElement("div",{className:"green"},o.a.createElement("img",{src:(null===B||void 0===B?void 0:B.length)?y.a:x.a,alt:"delete icon",className:"cursor-pointer",onClick:e=>F({options:c,setSelected:A,reset:!0})})))),o.a.createElement("div",{style:{zIndex:1040,maxHeight:230,overflow:"scroll"},className:"hide-scrollbar"},i&&(null===c||void 0===c?void 0:c.filter(e=>(null===P||void 0===P?void 0:P.length)?e.label.toLowerCase().includes(P.toLowerCase())?e:void 0:e).sort((function(e,t){return((e,t)=>e.selected&&!t.selected?-1:!e.selected&&t.selected?1:0)(e,t)})).map((e,t)=>{var a;const n=!!(null===(a=B.filter(t=>(null===t||void 0===t?void 0:t.value)===(null===e||void 0===e?void 0:e.value)))||void 0===a?void 0:a.length),l=n?1:0,s=i?n?M===t?"green":"text":"emptyTextField":B?"text":"emptyTextField";return o.a.createElement("div",{onMouseEnter:()=>H(t),onMouseLeave:()=>H(null),onClick:()=>F({options:c,item:e.value,setSelected:A}),style:{minHeight:40,backgroundColor:"white"},className:"filter-items rounded cursor-pointer w-100 d-flex justify-content-between align-items-center ".concat(s)},o.a.createElement("table",{style:{tableLayout:"fixed",width:"100%"}},o.a.createElement("tr",null,o.a.createElement("td",{align:"center",style:{width:"20%"}},o.a.createElement("img",{style:{opacity:l},src:M===t&&n?N.a:j.a})),o.a.createElement("td",{style:{width:"80%"}},e.label))))})))))};t.a=e=>{let{placeholder:t="",textSearch:a="",searchHandler:i=null,barcodeScanner:s,filter:d="",width:u="w-100",className:m=null,filterDropdown:v=null,value:p,showScanner:b,areaId:g,setAreaId:f,areaDestination:h,setAreaDestination:y,moduleName:E,setSearch:x,category:w,setCategory:N,setSortBy:k,hideFilter:j,useScanner:O}=e;const[C=!1,U]=Object(n.useState)();let I="",D="";C?(I="Show Filter",D=""):(I="Hide Filter",D=o.a.createElement("i",{className:"p-2 rounded-circle bg-background iconU-entryTrash"}));const[L,P]=Object(n.useState)(""),T=Object(l.d)(e=>{var t;return null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.categories}),B=Object(l.d)(e=>{var t;return null===(t=e.categoryList)||void 0===t?void 0:t.filter(e=>null===T||void 0===T?void 0:T.includes(null===e||void 0===e?void 0:e.value))});return o.a.createElement("div",{className:"search-bar w-100"},o.a.createElement("div",{className:"bg-white d-flex justify-content-between border-all radius-all pl-3 pr-1 py-1 search-m w-100"},o.a.createElement("div",{className:"d-flex align-items-center sub-search-m w-100"},o.a.createElement("i",{className:"iconU-searchBarSearch fontSizeTitle emptyTextField border-right pr-3"}),o.a.createElement("div",{className:"px-lg-3 px-0 input-search d-flex align-items-center"},o.a.createElement("input",{type:"text",className:"borber-none plain-input",placeholder:t,onChange:e=>{P(e.target.value),"function"===typeof x&&x(e.target.value)},onKeyPress:e=>(e=>{"Enter"===e.key&&i(L)})(e)}))),o.a.createElement("div",{className:"w-100 d-flex align-items-center mb-md-0 mb-3 ".concat(j?"d-none":null)},o.a.createElement("div",{className:"mr-2 w-100 d-flex justify-content-end"}),o.a.createElement("div",{className:"mr-md-2"},o.a.createElement(S,{moduleName:E,selectedValue:w,options:B,onChange:e=>k(e)})),o.a.createElement("div",{className:""},o.a.createElement(S,{moduleName:E,isMulti:!0,selectedValue:w,options:B,onChange:e=>N(e)})),o.a.createElement("div",{className:"mr-0 mr-md-2"},o.a.createElement("img",{onClick:()=>(e=>{let{areaId:t,areaDestination:a,setAreaId:n,setAreaDestination:o,barcodeScanner:l,moduleName:i}=e;if("stockMovement"!==i)return(null===t||void 0===t?void 0:t.value)?void l(!0):void("function"===typeof n&&n("empty"));if("stockMovement"===i){if(!(null===t||void 0===t?void 0:t.value))return void n("empty");if(!(null===a||void 0===a?void 0:a.value))return void o("empty");if((null===t||void 0===t?void 0:t.value)===(null===a||void 0===a?void 0:a.value))return void o("empty");"function"===typeof l&&l(!0)}})({areaId:g,areaDestination:h,setAreaId:f,setAreaDestination:y,barcodeScanner:s,moduleName:E}),className:"ml-2 pointer ".concat(O?null:"d-none"),src:b?c.a:r.a}))),o.a.createElement("div",{className:"text d-flex align-items-center btn-c-m",style:{width:"fit-content"}},d?o.a.createElement("div",{className:"text pointer d-flex sub-btn-m",onClick:()=>(e=>{let{filterShow:t,setFilterShow:a}=e;a(!t)})({filterShow:C,setFilterShow:U})},o.a.createElement("div",{className:"filter-text"},I)," ",o.a.createElement("span",{className:"px-3"},o.a.createElement("i",{className:"fontSizeTitle iconU-searchFilter pr-3"}),D)):null,o.a.createElement("button",{className:"btn px-5 py-2 text-white bg-green LatoBold no-shadow",style:{height:"fit-content !important"},onClick:()=>i(L)},"Search"))),o.a.createElement("div",null,C?null:o.a.createElement("div",{className:"w-100"}," ",v," ")))}},569:function(e,t,a){e.exports=a.p+"static/media/barcodeActive.f156396c.svg"},570:function(e,t,a){e.exports=a.p+"static/media/barcodeInactive.edf5c933.svg"},571:function(e,t,a){e.exports=a.p+"static/media/ascOn.03f85b0a.svg"},572:function(e,t,a){e.exports=a.p+"static/media/ascOff.87e6b936.svg"},573:function(e,t,a){e.exports=a.p+"static/media/categoryOn.411202ae.svg"},574:function(e,t,a){e.exports=a.p+"static/media/categoryOff.c7cec5ff.svg"},575:function(e,t,a){e.exports=a.p+"static/media/deleteCategoryOn.20944738.svg"},576:function(e,t,a){e.exports=a.p+"static/media/deleteCategoryOff.9c91a61a.svg"},577:function(e,t,a){e.exports=a.p+"static/media/checkHover.43b44f0f.svg"},578:function(e,t,a){e.exports=a.p+"static/media/checkNotHover.9ab9e4e5.svg"},579:function(e,t,a){},628:function(e,t,a){},684:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return m}));var n=a(14),o=a.n(n),l=a(16),i=a(549),c=a(559),s=a(218),r=a(547);const d=async e=>{var t;let{idx:a,checked:n,dispatch:s,setLocalEntryData:d,moduleName:u,moduleSummary:m,moduleEntry:v,warehouseUuid:p,areaId:b}=e,g=[...m];g[a].checked=n,s({type:l.c,["".concat(u,"summaryData")]:g});const f=null===g||void 0===g?void 0:g.filter(e=>{if(e.checked)return e});let h=[];v&&v.jobPost.list.map(e=>{const t=(e=>{let{skuUuid:t}=e;return{skuUuid:t}})(e);t.skuUuid&&h.push(t.skuUuid)});let y=[];const E=f.map(async(e,t)=>{if(!h.includes(e.skuUuid)){const t=await Object(c.d)({});e.outboundTypeList=t;const a=await Object(i.e)({skuId:e.skuUuid,warehouseUuid:p,dispatch:s,areaId:b.value,moduleName:u});if(a){const t=a.map(t=>{var a;t.itemList=[];const n=t.expiryDate?o()(t.expiryDate).valueOf():null,l=t.inboundDate?o()(t.inboundDate).valueOf():null;return t.expiryDate=n,t.inboundDate=l,t.skuUuid=e.skuUuid,t.uom=e.unitOfMeassures,t.category=e.category,t.initialWeight=Number.isInteger(t.initialWeight)?parseInt(t.initialWeight):parseFloat(t.initialWeight),"staging"!==(null===b||void 0===b||null===(a=b.label)||void 0===a?void 0:a.toLowerCase())&&(t.totalPack=null),t});e.poList=t,y.push(e)}}});await Promise.all(E);let x=[];v&&(x=v.jobPost.list.concat(y)),v||(x=y);const w=g[a];w.checked||(x=x.filter(e=>e.skuUuid!==w.skuUuid));const N=null===v||void 0===v||null===(t=v.jobPost)||void 0===t?void 0:t.id,k={jobPost:{id:N||0,warehouseSource:p,warehouseDestination:p,areaSource:parseInt(null===b||void 0===b?void 0:b.value),areaName:null===b||void 0===b?void 0:b.label,areaDestination:parseInt(null===b||void 0===b?void 0:b.value),list:x.sort((function(e,t){return Object(r.g)(e,t)}))}};0===x.length&&s({type:l.b,["".concat(u,"EntryData")]:null}),d(k)},u=async e=>{let{idx:t,checked:a,dispatch:n,moduleName:l,moduleSummary:r,moduleEntry:d,warehouseUuid:u,areaId:m,preAddHandler:v}=e,p=[...r];p[t].checked=a;const b=null===p||void 0===p?void 0:p.filter(e=>{if(e.checked)return e});let g=[];d&&d.map(e=>{const t=(e=>{let{skuUuid:t}=e;return{skuUuid:t}})(e);t.skuUuid&&g.push(t.skuUuid)});let f=[];const h=b.map(async(e,t)=>{if(!g.includes(e.skuUuid)){const t=await Object(c.d)({});e.outboundTypeList=t;const a=await Object(i.e)({skuId:e.skuUuid,warehouseUuid:u,dispatch:n,areaId:m.value,moduleName:l});if(a){const t=a.map(t=>{var a;t.itemList=[];const n=t.expiryDate?o()(t.expiryDate).valueOf():null,l=t.inboundDate?o()(t.inboundDate).valueOf():null;return t.expiryDate=n,t.inboundDate=l,t.skuUuid=e.skuUuid,t.uom=e.unitOfMeassures,t.category=e.category,t.initialWeight=Object(s.e)(t.initialWeight)?Object(s.e)(t.initialWeight):t.initialWeight,"staging"!==(null===m||void 0===m||null===(a=m.label)||void 0===a?void 0:a.toLowerCase())&&(t.totalPack=null),t});e.poList=t,e.isNewItem=!0,f.push(e)}}});await Promise.all(h);let y=[];d&&(y=d.concat(f)),d||(y=f);const E=p[t];E.checked||(y=y.filter(e=>e.skuUuid!==E.skuUuid)),v(y)},m=e=>{let{setActiveSKU:t,moduleEntry:a,moduleName:n,setConfirmation:o,dispatch:i,setIsRequired:c}=e,s=[],d={...a};const u=a.jobPost.list.map(e=>(e.poList.map(t=>{const{totalPack:a}=t,n=Object(r.z)({moduleList:t.itemList});return t.itemList.map(o=>{var l,i,c;const{qty:r,pack:u}=o;return isNaN(r)||0==r||""===r||null===r?o.qtyIsEmpty=!0:o.qtyIsEmpty=!1,(null===o||void 0===o||null===(l=o.codeOutbound)||void 0===l?void 0:l.value)?o.outboundTypeIsEmpty=!1:o.outboundTypeIsEmpty=!0,"lainnya"==(null===o||void 0===o||null===(i=o.codeOutbound)||void 0===i?void 0:i.value)&&(""==(null===o||void 0===o?void 0:o.note)||void 0===(null===o||void 0===o?void 0:o.note))?o.noteIsEmpty=!0:o.noteIsEmpty=!1,"staging"!==(null===(c=d.jobPost.areaName)||void 0===c?void 0:c.toLowerCase())||"Fruits"!==(null===e||void 0===e?void 0:e.category)&&"Vegetables"!==(null===e||void 0===e?void 0:e.category)||!u&&a>0&&(o.packIsEmpty=!0),o.qtyIsEmpty||(Number(n)>Number(t.initialWeight)?o.qtyIsEmpty=!0:o.qtyIsEmpty=!1),(null===o||void 0===o?void 0:o.qtyIsEmpty)||(null===o||void 0===o?void 0:o.outboundTypeIsEmpty)||(null===o||void 0===o?void 0:o.noteIsEmpty)||(null===o||void 0===o?void 0:o.packIsEmpty)?s.push(!1):s.push(!0),o}),t}),e));console.log(s);let m=!1;u.map(e=>{e.poList.map(e=>{e.itemList.map(e=>{e.qty&&(m=!0)})})}),d.jobPost.list=u,i({type:l.b,["".concat(n,"EntryData")]:d}),!s.includes(!1)&&m?"function"===typeof o&&o({show:!0,name:"submit"}):("function"===typeof o&&o({show:!1,name:null}),"function"===typeof c&&c(!0)),Object(r.b)({setActiveSKU:t,moduleEntry:a,moduleName:n})}}}]);
//# sourceMappingURL=33.dacaba80.chunk.js.map