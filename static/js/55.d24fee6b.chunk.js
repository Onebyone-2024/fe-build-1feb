(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[55],{1177:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(44),o=a(550),r=a(609),i=a(583),c=a.n(i),d=a(549),m=a(685),u=a(552),h=a(12);const{height:p,emptyItem:g,width:f,isMobile:y}=Object(o.c)(200),b=p+50,x=y?"target-movement-mobile":"target-movement";t.default=e=>{const[t,a]=Object(n.useState)([]),o=Object(h.g)(),i=Object(s.d)(e=>e.status),f=Object(s.d)(e=>e.thereAreRequest),y=e.location.pathname.split("/").pop();return Object(n.useEffect)(e=>{y&&Object(d.i)({setDetail:a,id:y})},[y]),0===f||(null===t||void 0===t?void 0:t.length)?l.a.createElement("div",{className:"bg-white border radius-all w-100 active-stock",style:{minHeight:p,height:p,maxHeight:p}},l.a.createElement(u.a,{status:i}),l.a.createElement("div",{style:{minHeight:b},className:"w-100"},(null===t||void 0===t?void 0:t.length)?l.a.createElement(r.a,{editColumn:"false",className:"".concat(x," pointer"),styles:{color:"red",textAlign:"right",width:"100%",maxHeight:b},data:(null===t||void 0===t?void 0:t.length)?t:[],columns:m.b}):l.a.createElement("div",{style:{minHeight:b},className:"emptyTextField d-flex flex-column justify-content-center align-items-center w-100"},"No Data. Please select another Transaction")),l.a.createElement("div",{className:"w-100 d-flex justify-content-end"},l.a.createElement("button",{onClick:()=>o.goBack(),type:"button",className:"btn px-5 mt-3 sku-item no-shadow text-white bg-green"},"Back"))):l.a.createElement("div",{className:"w-100 text-center emptyTextField d-flex flex-column align-items-center justify-content-center",style:{minHeight:g+200,maxHeight:g+200}},l.a.createElement("img",{className:"loading",src:c.a,alt:"loading"}))}},548:function(e,t,a){},552:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(544);a(548);var o=a(44),r=a(16);t.a=e=>{let{refresh:t,status:a,icon:i,statusDisplay:c=!1,title:d="",cancelButtonTitle:m="Cancel",actionButtonTitle:u="Submit",cancelButtonClass:h="bg-background",actionButtonClass:p="bg-background",actionButtonEvent:g=null,colorText:f="red",msg1:y=null,msg2:b=null,onCloseFunction:x=null,refreshOnCancel:E=!0,setIsSuccess:v}=e;const N=Object(o.c)();500===(null===a||void 0===a?void 0:a.code)&&(i="em-pensive",d="Server Error",m="Try Again",u="Contact Administration",f="red",y=null===a||void 0===a?void 0:a.message,b="Please try again or contact Sayurbox administration for further information.",h="bg-green",c=!0,E=!0),408===(null===a||void 0===a?void 0:a.code)&&(i="em-alarm_clock",d="Request Timeout",m="Try Again",u="Contact Administration",f="red",y=null===a||void 0===a?void 0:a.message,b="Please try again or contact Sayurbox administration for further information.",h="bg-green",c=!0,E=!0),400===(null===a||void 0===a?void 0:a.code)&&(i="em-alarm_clock",d="Server Error",m="Try Again",u="Contact Administration",f="red",y=null===a||void 0===a?void 0:a.message,b="Please try again or contact Sayurbox administration for further information.",h="bg-green",c=!0,E=!1),404===(null===a||void 0===a?void 0:a.code)&&(d="Something wrong with the application",m="Try Again",u="Contact Administration",f="red",y=null===a||void 0===a?void 0:a.message,b="Please try again or contact Sayurbox administration for further information.",h="bg-green",c=!0,E=!1);const[C,w]=Object(n.useState)(c);return Object(n.useEffect)(()=>{w(c)},[c]),Object(n.useEffect)(()=>{},[C]),window.onkeydown=e=>27===e.keyCode?w(!1):null,l.a.createElement(s.B,{className:"".concat(C?null:"d-none")},l.a.createElement(s.f,null,l.a.createElement(s.s,{show:C,closeOnBackdrop:!1,onClose:()=>{w(!1),"function"===typeof v&&v({success:null,name:null}),N({type:r.k,status:null}),x&&x()},size:"lg",style:{minHeight:"280px"},bodyOpenClassName:"p-3"},l.a.createElement("div",{className:"d-flex flex-row-reverse"},l.a.createElement("i",{className:"pr-3 pt-3 iconU-modalClose",onClick:()=>{w(!1),"function"===typeof v&&v({success:null,name:null}),N({type:r.k,status:null}),x&&x()}})),l.a.createElement(s.v,{className:"px-5 pt-5 border-none"},l.a.createElement(s.w,{className:"text LatoBold ".concat(f)},d," ",l.a.createElement("span",null,l.a.createElement("i",{className:"em ".concat(i)})))),l.a.createElement(s.t,{className:"px-5 py-0"},l.a.createElement("p",{className:"text mb-2"},y),l.a.createElement("p",{className:"text"},b)),l.a.createElement(s.u,{className:"px-5 pb-5 pt-0 justify-content-start border-none"},m?l.a.createElement(s.d,{className:"".concat(h," no-shadow px-5 mt-4 mb-0 mx-0"),onClick:()=>{E?"function"===typeof t?t():(e=>{let{refresh:t=!0}=e;!0===t&&window.location.reload(!1)})({refresh:!0}):(e=>{let{setShow:t,parentOncCloseFunction:a}=e;t(!1),a&&a()})({setShow:w,parentOncCloseFunction:x}),N({type:r.k,status:null})}},m):null,u?l.a.createElement(s.d,{className:"".concat(p," text no-shadow px-5 mt-4 mb-0 ml-3 mr-0"),onClick:()=>{g?(g(),w(!1)):w(!1)}},u):null," "))))}},609:function(e,t,a){"use strict";var n=a(668),l=(a(659),a(610),a(0)),s=a.n(l),o=a(660),r=a.n(o);a(661);const i=r()(n.a);class c extends s.a.Component{constructor(e){super(e),this.getColumnWidth=(e,t,a)=>12*Math.max(...e.map(e=>{let a="";return a=t(e),"number"===typeof a?a.toString().length:(a||"").length}),a.length),this.headerIcon=(e,t,a)=>{let n=[];if(t&&t.map((e,t)=>{if(a[t])return n=[...n],n;{let t={Header:s.a.createElement("span",null,e.Header," ",s.a.createElement("i",{className:"iconU-sort"}," ")),Cell:e.Cell,accessor:e.accessor,sortable:!1!==e.sortable,resizable:e.resizable||!1,className:e.className||null,headerClassName:e.headerClassName||null,style:e.style||null,width:e.width||null};return n=[...n,t],n}}),"false"!==this.props.editColumn){let e={Header:s.a.createElement("i",{className:"iconU-tableEdit pencilTable"}),accessor:"editBtn",width:50,style:{textAlign:"center"}};n=[...n,e]}return n},this.state={showModal:!1,activeTab:"1",editColumnTemp:{}}}render(){const{editColumnTemp:e}=this.state;let{columns:t,data:a,onClick:n,styles:l,tableStatus:o,className:r}=this.props,c=this.headerIcon(a,t,e);return s.a.createElement(s.a.Fragment,null,s.a.createElement(i,{className:r,columns:c,data:a,showPagination:!1,style:l,noDataText:"noData"==o?"Please Wait":"No  Data Found",minRows:"0",resizable:!1,getTdProps:(e,t,a,l)=>({onClick:(s,o)=>{n&&n(t.original,e,a,s,l)},style:{height:"3rem",cursor:!!n&&"pointer",textAlign:isNaN(null===t||void 0===t?void 0:t.original[a.id])?"left":"right"}}),defaultPageSize:50}))}}t.a=c},610:function(e,t,a){},685:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return l}));const n=[{width:"100%",Header:"SYNC DATE",placeholder:"Sync Date",accessor:"updatedAt",style:{textAlign:"left",display:"start",justifyContent:"flex-start"}},{width:"100%",Header:"USER",placeholder:"User",accessor:"createdBy"},{width:"100%",Header:"MODULE",placeholder:"Module",accessor:"module",style:{textAlign:"right",display:"flex",justifyContent:"flex-start"}},{width:"100%",Header:"MESSAGE RESPONSE",placeholder:"Message Response",accessor:"responseMessage",style:{textAlign:"right !important",display:"flex",justifyContent:"flex-start"},className:"flex-adjust",headerClassName:"flex-adjust"}],l=[{width:"100%",Header:"SKU DESCRIPTION",placeholder:"Sku Description",accessor:"skuDescription",style:{textAlign:"left",display:"start",justifyContent:"flex-start"}},{width:"100%",Header:"SKU NUMBER",placeholder:"Sku Number",accessor:"skuNumber"},{width:"100%",Header:"REASON",placeholder:"Reason",accessor:"reason",style:{textAlign:"right !important",display:"flex",justifyContent:"flex-start"},className:"flex-adjust",headerClassName:"flex-adjust"}]}}]);
//# sourceMappingURL=55.d24fee6b.chunk.js.map