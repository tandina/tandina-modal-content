import e,{useState as t}from"react";function o({showModal:e,onClose:t,message:o}){return e?React.createElement("div",{className:"modal"},React.createElement("div",{className:"modal-content"},React.createElement("p",{className:"modal-message"},o),React.createElement("button",{className:"modal-close",onClick:t},"Fermer"))):null}!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===o&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".modal{align-items:center;background-color:rgba(0,0,0,.5);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0}.modal-content{background-color:#fff;border-radius:8px;max-width:400px;padding:20px;text-align:center}.modal-message{font-size:18px;margin-bottom:20px}.modal-close{background:#629552;color:#fff;cursor:pointer;margin-top:20px;padding:10px;text-shadow:2px 8px 6px rgba(0,0,0,.2),0 -5px 35px hsla(0,0%,100%,.3)}.modal-close:hover{text-decoration:underline}.sub-btn{width:117px}");const n=()=>{const[n,a]=t(!1);return e.createElement(e.Fragment,null,e.createElement("p",null,"this page is a template of your project, you need to import the modal component and use it, dont forget to link your function to my anonymous empty props function"),e.createElement("p",null,"in this exemple we use the modal to confirm a form validation when every input is correct, assuming you already have a function to handlesubmit when evey field is correct, this modul will show up"),e.createElement("div",{className:"btn-container"},e.createElement("button",{className:"sub-btn modal-close",type:"submit",onClick:()=>{a(!0)}},"Submit")),e.createElement(o,{showModal:n,onClose:()=>{a(!1)},message:"Employé ajouté avec succès !"}))};export{n as Requirements};
