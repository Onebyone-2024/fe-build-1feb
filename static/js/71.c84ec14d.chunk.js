(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[71],{1164:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a.n(s),n=a(44),i=a(12),l=a(581);a(630);t.default=Object(i.i)(e=>{const t=Object(n.d)(e=>e.csvFileName),a=Object(n.d)(e=>e.csvDataResult),i=Object(n.d)(e=>e.csvFieldResult);return Object(s.useEffect)(()=>{},[a]),void 0===a||null===a?(e.history.push("/inventory-entry/waste/CSV-upload"),0):o.a.createElement("div",{className:"w-100 d-flex flex-column stock-take-summary"},o.a.createElement(l.b,{columns:i,tableClass:"reviewTable",data:a}),o.a.createElement("div",{className:"row pt-3"},o.a.createElement("div",{className:"col-4"},o.a.createElement("button",{type:"button",className:"btn px-3 mr-3 text no-shadow",style:{backgroundColor:"#fff"},onClick:()=>e.history.push("/inventory-entry/waste/CSV-upload")},"Upload Another File")),o.a.createElement("div",{className:"col-4",style:{lineHeight:"40px"}},"Review your imported file: ",t," (",a.length||0," Lines)")))})},581:function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return m}));var s=a(0),o=a.n(s),n=a(544),i=a(599),l=a.n(i),d=(a(582),a(600),a(56)),u=a.n(d),r=a(601),c=a.n(r);class m extends o.a.Component{constructor(e){var t;super(e),t=this,this.changeOutboundReason=e=>{setTimeout(()=>{let t=document.getElementById("row".concat(e,"-outboundReason"));t.classList.add("red","tooltip-custom"),t.innerHTML="Outbound Reason Can't be empty<span class=\"tooltiptext\">Outbound Reason Can't be empty if Outbound type = 'Lainnya'</span>"},300)},this.changeWarehouseUuid=(e,t,a,s,o,n,i)=>{const{setCsvDataTmp:l,globalData:d}=this.props;let u=d;var r=u.findIndex(e=>e.id==s);let c=o.indexOf(e);u[r][t]=n[c],u[r][a]=i[c],console.clear(),setTimeout(async()=>{l(u)},400)},this.validatePOSKU=async(e,t,a)=>{const{setCsvDataTmp:s,globalData:o,setIsValidate:n,transaction:i}=this.props;if("additional_inbound"==i)return;let l=o;try{n(!1);const o="/stocktake/rowValidationUpload";let i=null,d=null;setTimeout(async()=>{if(i=document.getElementById("".concat(a)),d=document.getElementById("".concat(a,"span")),null===i||void 0===i)return 0;d.innerHTML="Validating",i.classList.add("red"),await u()({method:"post",url:o,data:{data:[e]}}).then((function(e){var a;let o=null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.data;var n=l.findIndex(e=>e.id==t);o[0]&&!0===o[0].isExist?(l[n].wmsPoSkuCode=o[0].wmsPoSkuCode,l[n].wmsPoSkuCodeStatus=!0,l[n].wmsPoSkuCodeReason="PO SKU Code Not Found",l[n].expiryDate=o[0].expiryDate,l[n].inboundDate=o[0].inboundDate,l[n].supplierName=o[0].supplierName,l[n].supplierUuid=o[0].supplierUuid,l[n].uom=o[0].uom,l[n].photos=o[0].photos,i.classList.remove("red"),i.classList.add("hiddenTooltip")):(l[n].wmsPoSkuCodeStatus=!1,l[n].wmsPoSkuCodeReason="PO SKU Code Not Found",l[n].expiryDate="",l[n].inboundDate="",l[n].supplierName="",l[n].supplierUuid="",i.classList.add("red"),i.classList.remove("hiddenTooltip"),d.innerHTML="PO SKU Code Not Found"),s(l)}))},400)}catch(d){return!1}},this.validatePOSKUStockTransfer=async(e,t,a,s)=>{const{setCsvDataTmp:o,globalData:n,setIsValidate:i,transaction:l}=this.props;let d=n;var r=d.findIndex(e=>e.id==t.id);try{const n="/stocktransfer/rowValidationUpload";let l=null,c=null,m=[{id:t.id,poSkuCode:"wmsPoSkuCode"==s?e:t.poSkuCode?t.poSkuCode:"",skuNumber:"skuNumber"==s?null===e||void 0===e?void 0:e.skuNumber:t.skuNumber,skuUuid:"skuNumber"==s?null===e||void 0===e?void 0:e.skuUuid:t.skuUuid,warehouseSource:t.warehouseSource,areaSource:t.areaSource,weight:"qty"==s?e:t.qty}];setTimeout(async()=>{if(i(!1),l=document.getElementById("".concat(a)),c=document.getElementById("".concat(a,"span")),null===l||void 0===l)return 0;c.innerHTML="Validating",await u()({method:"post",url:n,data:{data:m}}).then((function(t){var a;let n=null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data;if(n[0]){var i,u,m,p,v,h,b,S,k,N,w;if(!0===n[0].isExist&&!0===n[0].isValid)d[r].rowStatus=!0,d[r].rowReason="",l.classList.remove("red"),l.classList.add("hiddenTooltip");else d[r].rowStatus=!1,d[r].rowReason=null===(w=n[0])||void 0===w?void 0:w.errorMessage;d[r].wmsPoSkuCode=null===(i=n[0])||void 0===i?void 0:i.wmsPoSkuCode,d[r].wmsPoSkuCodeStatus=(null===(u=n[0])||void 0===u?void 0:u.isExist)&&(null===(m=n[0])||void 0===m?void 0:m.isValid),d[r].wmsPoSkuCodeReason=null===(p=n[0])||void 0===p?void 0:p.errorMessage,d[r].expiryDate=null===(v=n[0])||void 0===v?void 0:v.expiryDate,d[r].inboundDate=null===(h=n[0])||void 0===h?void 0:h.inboundDate,d[r].supplierName=null===(b=n[0])||void 0===b?void 0:b.supplierName,d[r].supplierUuid=null===(S=n[0])||void 0===S?void 0:S.supplierUuid,d[r].uom=null===(k=n[0])||void 0===k?void 0:k.uom,d[r].photos=null===(N=n[0])||void 0===N?void 0:N.photos}else{var y,U,f;d[r].wmsPoSkuCodeStatus=!1,d[r].wmsPoSkuCodeReason=null===t||void 0===t||null===(y=t.data)||void 0===y?void 0:y.message,d[r].expiryDate="",d[r].inboundDate="",d[r].supplierName="",d[r].supplierUuid="",d[r].rowStatus=!1,d[r].rowReason=null===t||void 0===t||null===(U=t.data)||void 0===U?void 0:U.message,l.classList.add("red"),l.classList.remove("hiddenTooltip"),c.innerHTML=null===t||void 0===t||null===(f=t.data)||void 0===f?void 0:f.message}"skuNumber"==s&&(d[r].skuNumber=e.skuNumber,d[r].skuNumberReason=e.skuDescription,d[r].skuNumberStatus=!0,d[r].skuUuid=e.skuUuid),o(d)}));let t=this.state.keyy+1;this.setState({keyy:t})},500)}catch(c){return!1}},this.validateOutbountReason=(e,t,a)=>{const{globalData:s}=this.props;let o=s;var n=o.findIndex(e=>e.id==t);let i=o[n];""==e&&"LAINNYA"==i.outboundType.toUpperCase()&&this.changeOutboundReason(t)},this.validateOutbountType=(e,t,a)=>{const{globalData:s,setIsValidate:o}=this.props;let n=s;if(o(!1),"LAINNYA"!==e.toUpperCase())return o(!0),0;var i=n.findIndex(e=>e.id==t);""==n[i].outboundReason&&this.changeOutboundReason(t)},this.validateSKUNumber=async function(e,a,s,o){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;const{globalData:i,setCsvDataTmp:l,setIsValidate:d,transaction:r}=t.props;let c=i;try{d(!1);const i="/oss/skuByNumbers";let m=null,p=null,v=!1,h={};setTimeout(async()=>{if(m=document.getElementById("".concat(s)),p=document.getElementById("".concat(s,"span")),null===m||void 0===m)return 0;p.innerHTML="Validating",await u()({method:"post",url:i,data:{skuList:[e]}}).then((function(t){var s;let n=null===t||void 0===t||null===(s=t.data)||void 0===s?void 0:s.data,i=t.data.isSuccess;var l=c.findIndex(e=>e.id==a);!0===i&&n.length>0?(v=!0,c[l][o]=n[0].skuNumber,c[l][o+"Reason"]=n[0].skuDescription,c[l][o+"Status"]=!0,c[l][o+"Uuid"]=n[0].id,h={skuUuid:n[0].id,skuNumber:n[0].skuNumber,skuDescription:n[0].skuDescription,photo:n[0].photo},"skuNumber"==o&&(c[l].skuUuid=n[0].id,c[l].photo=n[0].imageMd),"newGrade"==o&&(c[l].newGradeUom=n[0].uom),"additional_inbound"==r&&(c[l].uom=n[0].uom),"stockTransfer"!==r&&(m.classList.remove("red"),m.classList.add("hiddenTooltip"))):(v=!1,c[l][o]=e,c[l][o+"Reason"]="SKU Number Not Found",c[l][o+"Status"]=!1,c[l][o+"Uuid"]=null,m.classList.add("red"),m.classList.remove("hiddenTooltip"),p.innerHTML="SKU Number Not Found","skuNumber"==o&&(c[l].skuUuid="",c[l].photo=""),"newGrade"==o&&(c[l].newGradeUom=null),"additional_inbound"==r&&(c[l].uom=""))})),"stockTransfer"==r&&!0===v?t.validatePOSKUStockTransfer(h,n,s,"skuNumber"):l(c)},400)}catch(m){return!1}},this.state={validateStatus:!1,validateResult:"Please Wait...",globalData:this.props.globalData,rowCount:0,keyy:0,triggerRender:0},this.validatePOSKUStockTransfer=this.validatePOSKUStockTransfer.bind(this),this.validateSKUNumber=this.validateSKUNumber.bind(this)}render(){const{columns:e,hiddenRows:t,tableClass:a,warehouseArea:s,outboundType:i,setCheckingCsv:d,editable:u=!0,warehousesData:r=[],transaction:m,globalData:p}=this.props;let{validateStatus:v,keyy:h}=this.state,b=[],S=[],k=[];var N;r&&(null===r||void 0===r||null===(N=r.data)||void 0===N||N.map(e=>{b.push(e.code),S.push(e.id),k.push(e.name)}));let w=s.map(e=>e.label.toUpperCase())||[],y=s.map(e=>e.value)||[],U=i?i.map(e=>e.label.toUpperCase()):[],f=i?i.map(e=>e.value):[];const C=e.map((e,t)=>(e.validator=(t,a,s,o)=>{let n=e.dataField,i=n+"Status",l=n+"Reason",u=!0,r=null,c="row"+a.id+"-"+n;["wmsPoSkuCode","qty"].includes(n)&&"stockTransfer"==m?(this.validatePOSKUStockTransfer(t,a,c,n),u=!0):"wmsPoSkuCode"==n&&(this.validatePOSKU(t,a.id,c,n),u=!0),"skuNumber"==n&&(this.validateSKUNumber(t,a.id,c,n,a),u=!0);let p=["WASTE","SEMI WASTE"];if("newGrade"==n&&"waste"==this.props.transaction?p.includes(t.toUpperCase())?(a.newGradeUuid=t,a.newGradeUom=null):(r="Waste Type not found",v=!1,u=!1):"newGrade"==n&&(p.includes(t.toUpperCase())?(a.newGradeUuid=t,a.newGradeUom=null):parseInt(t)?(u=!0,this.validateSKUNumber(t,a.id,c,n)):""==t?(a.newGradeUuid=null,a.newGradeUom=null,u=!0):(r="Grade Undefined",v=!1,u=!1)),"outboundType"==n&&f.length>0)if(U.includes(t.toUpperCase())){let e=U.indexOf(t.toUpperCase());a.outboundTypeCode=f[e],u=!0,this.validateOutbountType(t,a.id,c)}else u=!1,r="Outbound Type Not Found";if("outboundReason"==n&&this.validateOutbountReason(t,a.id,c),"warehouse"==n&&(b.includes(t)?(u=!0,this.changeWarehouseUuid(t,"warehouseUuid","warehouseName",a.id,b,S,k)):(u=!1,r="Warehouse Not Found")),"warehouseDestination"==n&&(b.includes(t)?(u=!0,this.changeWarehouseUuid(t,"warehouseDestinationUuid","warehouseDestinationName",a.id,b,S,k)):(u=!1,r="Warehouse Not Found")),"areaName"==n||"areaNameDestination"==n)if(w.includes(t.toUpperCase())){let e=w.indexOf(t.toUpperCase());"areaNameDestination"==n?a.areaDestination=y[e]:a.areaSource=y[e],u=!0}else u=!1,r="Warehouse Area Not Found";if("newPack"==n){!isNaN(t)?u=!0:(u=!1,r="Pack Should be a number")}let v=null;v="number"!=e.type||!isNaN(t),!1===v&&(r="".concat(e.text," Should be a ").concat(e.type)),"wmsPoSkuCode"==n&&"stockTransfer"==m&&isNaN(t)&&(v=!1,r="".concat(e.text," Should be a number"),u=!1);if(["grade","outboundReason","ripenessLevel","newRipeness","reason","expiryDate"].includes(n)&&""===t?(r="",v=!0,u=!0):"grade"==n&&(p.includes(t.toUpperCase())||(r="Waste Type Not Found",v=!1,u=!1)),"ripenessLevel"==n||"newRipeness"==n){[0,1,2,3].includes(parseInt(t))||""==t?(v=!0,u=!0,r="",""==t&&(t="")):(v=!1,u=!1,r="Undefined Ripeness Level")}if("date_indo"==e.type){let e=/(0[1-9]|[12][0-9]|3[01])[-.](0[1-9]|1[012])[-.](19|20)\d\d/;t.match(e)||""==t?(v=!0,u=!0):(r="Date format must be 'dd-mm-yyyy'",v=!1,u=!1)}if(a[l]=r,u&&v){["wmsPoSkuCode","skuNumber"].includes(n)||(a[i]=!0,d())}return{valid:!(!u||!v),message:r}},e.formatter=(t,a,s)=>{let n=e.dataField,i=n+"Status",l=n+"Reason",d=!0,u="row"+a.id+"-"+n,r=a[l];return!1===a[i]?(v=!1,d=!1,o.a.createElement("div",{id:u,className:"tooltip-custom red"},t,o.a.createElement("span",{id:u+"span",className:"tooltiptext"},r))):"stockTransfer"==m&&!1===a.rowStatus?(v=!1,d=!1,o.a.createElement("div",{id:u,className:"tooltip-custom red"},t,o.a.createElement("span",{id:u+"span",className:"tooltiptext"},a.rowReason))):o.a.createElement("div",{id:u,className:"tooltip-custom hiddenTooltip"},t,o.a.createElement("span",{id:u+"span",className:"tooltiptext"},r))},e)),g={sortFunc:this.sortFunc,sortCaret:(e,t)=>e?"asc"===e?o.a.createElement("i",{className:"iconU-tableSortingTop ml-2"}):"desc"===e?o.a.createElement("i",{className:"iconU-tableSortingBottom ml-2"}):null:o.a.createElement("i",{className:"iconU-tableSortingNull ml-2"})};return console.clear(),console.log(p),o.a.createElement(n.e,{className:"table-responsive"},o.a.createElement(l.a,{keyField:"id",data:p,columns:C,sort:g,classes:a||null,cellEdit:!0===u?c()({mode:"click",blurToSave:!0,nonEditableRows:()=>this.props.dataDoubleRow||[]}):null,bordered:!1,hiddenRows:t,key:h}))}}class p extends o.a.Component{render(){const{columns:e,tableClass:t,data:a}=this.props,s=e.map((e,t)=>(e.formatter=(t,a,s)=>{let n=e.dataField;return"uploadStatus"==n&&"Failed"===a.uploadStatus?o.a.createElement("div",{className:"tooltip-custom red"},t,o.a.createElement("span",{className:"tooltiptext"},a.uploadStatusReason)):"uploadStatus"==n&&"Success"===a.uploadStatus?o.a.createElement("div",{className:"green"},t,o.a.createElement("span",null)):o.a.createElement("div",null,t,o.a.createElement("span",null))},e)),i={sortFunc:this.sortFunc,sortCaret:(e,t)=>e?"asc"===e?o.a.createElement("i",{className:"iconU-tableSortingTop ml-2"}):"desc"===e?o.a.createElement("i",{className:"iconU-tableSortingBottom ml-2"}):null:o.a.createElement("i",{className:"iconU-tableSortingNull ml-2"})};return o.a.createElement(n.e,{className:"table-responsive"},o.a.createElement(l.a,{keyField:"id",data:a,columns:s,sort:i,classes:t||null,bordered:!1}))}}},582:function(e,t,a){},630:function(e,t,a){}}]);
//# sourceMappingURL=71.c84ec14d.chunk.js.map