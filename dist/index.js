"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e);function a({showModal:e,onClose:t,message:o}){return e?React.createElement("div",{className:"modal"},React.createElement("div",{className:"modal-content"},React.createElement("p",{className:"modal-message"},o),React.createElement("button",{className:"modal-close",onClick:t},"Fermer"))):null}!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===o&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".modal{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0}.modal-content{background-color:#fff;border-radius:8px;max-width:400px;padding:20px;text-align:center}.modal-message{font-size:18px;margin-bottom:20px}.modal-close{background:#629552;color:#fff;cursor:pointer;margin-top:20px;padding:10px;text-shadow:2px 8px 6px rgba(0,0,0,.2),0 -5px 35px hsla(0,0%,100%,.3)}.modal-close:hover{text-decoration:underline}.sub-btn{width:117px}");exports.Requirements=()=>{const[t,n]=e.useState(!1);return o.default.createElement(o.default.Fragment,null,o.default.createElement("p",null,"this page is a template of your project, you need to import the modal component and use it, dont forget to link your function to my anonymous empty props function"),o.default.createElement("p",null,"in this exemple we use the modal to confirm a form validation when every input is correct, assuming you already have a function to handlesubmit when evey field is correct, this modul will show up"),o.default.createElement("div",{className:"btn-container"},o.default.createElement("button",{className:"sub-btn modal-close",type:"submit",onClick:()=>{n(!0)}},"Submit")),o.default.createElement(a,{showModal:t,onClose:()=>{n(!1)},message:"Employé ajouté avec succès !"}))};