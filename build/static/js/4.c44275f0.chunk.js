(this["webpackJsonpuser-flow-type"]=this["webpackJsonpuser-flow-type"]||[]).push([[4],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var o=n(0),l=n.n(o),a=(n(34),function(e){var t=e.item,n=t.name,r=t.status,o=t.content,a=t.id,c=e.handler,u=c.deleteCard,i=c.route;return console.log("id",a),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{onClick:function(){return console.log("id"),i(a)},className:"card"},l.a.createElement("button",{onClick:function(){return u(a)}}," Delete "),n,r,o))});t.a=function(e){var t=e.items,n=r(e,["items"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"flex-row"},t&&t.map((function(e){return l.a.createElement(a,Object.assign({item:e},n))}))))}},39:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),l=n(16),a=n(36),c=(n(35),0),u=function(e){var t=e.createWorkflow,n=e.filterWorkflow;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex-row"},o.a.createElement("div",{className:"search-workflow"},o.a.createElement("input",{placeholder:"Search Workflows"})),o.a.createElement("div",{className:"filter-workflow"},o.a.createElement("button",{name:"Filter",onClick:function(){return n}}," Filter ")),o.a.createElement("div",{className:"creare-workflow"},o.a.createElement("button",{name:"Create Workflow",type:"button",onClick:function(){return t()}},"Create Workflow"))))};t.default=Object(l.b)((function(e){return{workflow:e.workflow.items}}),(function(e){return{addflow:function(t){return e({type:"ADD_WORKFLOW",id:c++,text:t})},filterflow:function(t){return e({type:"FILTER_WORKFLOW",id:c++,text:t})},deleteflow:function(t){return e(function(e){return{type:"DELETE_WORKFLOW",id:e}}(t))},changeWorkflowTitle:function(e){}}}))((function(e){var t=e.addflow,n=e.workflow,r=e.deleteflow,l=e.filterflow,c=e.changeWorkflowTitle,i=e.history;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{createWorkflow:function(){return t("Workflow")},filterWorkflow:function(){return l}}),o.a.createElement(a.a,{items:n,handler:{route:function(e){return function(e){i.push("/node/".concat(e))}(e)},deleteCard:function(e){return r(e)},editTitle:function(){return c}}}))}))}}]);
//# sourceMappingURL=4.c44275f0.chunk.js.map