(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(21),r=a.n(o),l=a(3),c=a(12),s=a(49),d=a(32),m=a(2),u=a(45),p=a.n(u),h={items:[],activePage:"Home"},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Load state from LocalStorage":var a=JSON.parse(window.localStorage.getItem("todos"));return a?Object(m.a)({},e,{items:a}):e;case"Saving state to Local Storage":return window.localStorage.setItem("todos",JSON.stringify(t.payload.state)),e;case"Filter Items":return Object(m.a)({},e,{activePage:t.payload});case"Add item":var n=p()(),i={value:t.payload.text,dueDate:t.payload.dueDate,id:n,completed:!1,trashed:!1};return Object(m.a)({},e,{items:[].concat(Object(d.a)(e.items),[i])});case"Cancel edit item":return e.items.length?Object(m.a)({},e,{editingItem:{}}):Object(m.a)({},e);case"Delete item":var o=e.items.map(function(e){return e.id===t.payload.id&&(e.trashed=!e.trashed),e});return Object(m.a)({},e,{items:o});case"Edit item":var r=e.items.map(function(e){return e.id===t.payload.modifiedItem.id&&(e.value=t.payload.modifiedItem.value,e.dueDate=t.payload.modifiedItem.dueDate),e});return Object(m.a)({},e,{items:r,editingItem:{}});case"Item completion":var l=e.items.map(function(e){return e.id===t.payload.modifiedItem.id&&(e.completed=!e.completed),e});return Object(m.a)({},e,{items:l});case"Select edit item":var c=e.items.find(function(e){return e.id===t.payload.id});return Object(m.a)({},e,{editingItem:c});case"Reorder item":var u=Object(d.a)(e.items),f=u.splice(t.payload.initialPosition,1),v=Object(s.a)(f,1)[0];return u.splice(t.payload.newPosition,0,v),Object(m.a)({},e,{items:u});default:return e}},v=Object(l.c)({todos:f}),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(61),a(62),a(63);var b=a(6),y=a(7),I=a(9),D=a(8),O=a(10),N=(a(64),a(24)),_=a(5),w=a(4),S=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(I.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(i)))).state={itemText:"",itemDueDate:""},a.handleSubmitAndResetForm=function(e){e.preventDefault();var t=a.state,n=t.itemText,i=t.itemDueDate;return a.props.handleAddItem({itemText:n,itemDueDate:i}),a.setState({itemText:"",itemDueDate:""})},a.handleItemTextChange=function(e){return a.setState({itemText:e.target.value})},a.handleItemDueDateChange=function(e){return a.setState({itemDueDate:e.target.value})},a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{method:"POST",onSubmit:this.handleSubmitAndResetForm},i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"col"},i.a.createElement("input",{type:"text",className:"form-control",id:"new-todo-item",name:"new-todo-item",placeholder:"I want to do...","aria-label":"Todo item description",value:this.state.itemText,onChange:this.handleItemTextChange,autoFocus:!0})),i.a.createElement("div",{className:"col"},i.a.createElement("input",{type:"date",className:"form-control",id:"new-todo-item",name:"new-todo-item",placeholder:"Due date...","aria-label":"Due date",value:this.state.itemDueDate,onChange:this.handleItemDueDateChange,autoFocus:!0})),i.a.createElement("div",{className:"col-auto"},i.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!this.state.itemText||!this.state.itemDueDate,"aria-label":"Add todo item"},i.a.createElement(_.a,{icon:w.d}))))))}}]),t}(n.Component),j=(a(68),function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(I.a)(this,Object(D.a)(t).call(this,e))).componentDidMount=function(){return window.addEventListener("keyup",a.handleKeyUp)},a.handleKeyUp=function(e){"Escape"===e.code&&a.props.handleCancelEditItem(e)},a.handleItemChange=function(e){return a.setState({itemText:e.target.value})},a.handleItemDueDateChange=function(e){return a.setState({itemDueDate:e.target.value})},a.handleEditAndResetForm=function(e){return e.preventDefault(),a.props.handleEditItem(Object(m.a)({},a.props.item,{value:a.state.itemText,dueDate:a.state.itemDueDate})),a.setState({itemText:"",itemDueDate:""})},a.state={itemText:e.item.value,itemDueDate:e.item.dueDate},a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return i.a.createElement("li",{className:"form_edit__component list-group-item"},i.a.createElement("form",{method:"POST",onSubmit:this.handleEditAndResetForm},i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"col"},i.a.createElement("input",{type:"text",className:"form-control",id:"input-edit-todo-item",name:"edit-todo-item",value:this.state.itemText,onChange:this.handleItemChange,autoFocus:!0})),i.a.createElement("div",{className:"col"},i.a.createElement("input",{type:"date",className:"form-control",id:"input-edit-todo-item",name:"edit-todo-itemDate",placeholder:"Due date...","aria-label":"Due date",value:this.state.itemDueDate,onChange:this.handleItemDueDateChange,autoFocus:!0})),i.a.createElement("div",{className:"col-auto"},i.a.createElement("button",{type:"submit",id:"submit-edit-todo-item",className:"btn btn-primary form_edit__button--first",disabled:!this.state.itemText||!this.state.itemDueDate},i.a.createElement(_.a,{icon:w.a})),i.a.createElement("button",{id:"cancel-edit-todo-item",type:"button",className:"btn btn-danger",onClick:this.props.handleCancelEditItem},i.a.createElement(_.a,{icon:w.f}))))))}}]),t}(n.Component)),C=(a(69),a(70),function(e){return i.a.createElement("div",{className:"property_bar__component"},i.a.createElement("button",{className:"btn btn-secondary property_bar__button",onClick:function(){return e.handleSelectEditItem(e.id)}},i.a.createElement(_.a,{icon:w.c,size:"sm"})),i.a.createElement("button",{className:"btn btn-danger property_bar__button",onClick:function(){return e.handleDeleteItem(e.id)}},i.a.createElement(_.a,{icon:e.isTrashed?w.h:w.g,size:"sm"})))}),x=function(e){return i.a.createElement("span",null,e.isCompleted?i.a.createElement(_.a,{icon:w.b,size:"2x"}):i.a.createElement(_.a,{icon:w.e,size:"2x"}))},T=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(I.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(i)))).state={displayMenu:!1},a.setDisplayMenu=function(e){a.state.displayMenu!==e&&a.setState({displayMenu:e})},a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("li",{className:"form_item__component list-group-item form-control",onMouseMove:function(){return e.setDisplayMenu(!0)},onMouseLeave:function(){return e.setDisplayMenu(!1)}},i.a.createElement("div",{className:"text-truncate",onClick:function(){return e.props.handleItemCompletion(e.props.item)}},i.a.createElement("div",{className:"form_item__checkout d-inline-block"},i.a.createElement(x,{isCompleted:this.props.item.completed})),i.a.createElement("span",{className:"form_item__text"},this.props.item.value),i.a.createElement("br",null),i.a.createElement("span",{className:"form_item__dueDate"},this.props.item.dueDate)),this.state.displayMenu?i.a.createElement(C,{id:this.props.item.id,isTrashed:this.props.item.trashed,handleSelectEditItem:this.props.handleSelectEditItem,handleDeleteItem:this.props.handleDeleteItem}):null)}}]),t}(n.Component),k=(a(71),function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(I.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(i)))).onDragEnd=function(e){e.destination&&a.props.handleReorderItem(e.source.index,e.destination.index)},a.onChangeList=function(e){a.props.handleFilter(e.target.innerText),a.setState({selectedPage:e.target.innerText})},a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:this.props.className},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("div",{className:"col-12 col-md-9 col-lg-7 col-xl-6"},i.a.createElement("div",{className:"card text-center"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title"},"Welcome!"),i.a.createElement("p",{className:"card-text"},"To get started, add some items and due date to your list:"),i.a.createElement("div",{className:"d-inline-block"},i.a.createElement(S,{handleAddItem:this.props.handleAddItem}))),i.a.createElement("ul",{className:"card-navigation",onClick:this.onChangeList},i.a.createElement("li",{className:"Home"===this.props.activePage?"active":""},i.a.createElement("span",null,"Home")),i.a.createElement("li",{className:"Completed"===this.props.activePage?"active":""},i.a.createElement("span",null,"Completed")),i.a.createElement("li",{className:"Trash"===this.props.activePage?"active":""},i.a.createElement("span",null,"Trash")))))),this.props.items.length?i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("div",{className:"col-12 col-md-9 col-lg-7 col-xl-6"},i.a.createElement("div",{className:"content__todos"},i.a.createElement("ul",{className:"list-group content__todos__ul"},i.a.createElement(N.a,{onDragEnd:this.onDragEnd},i.a.createElement(N.c,{droppableId:"droppable"},function(t){return i.a.createElement("div",{ref:t.innerRef},e.props.items.map(function(t,a){return i.a.createElement(N.b,{key:t.id,draggableId:t.id,index:a},function(a){return i.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps,{className:"content__todos__li"}),e.props.editingItem.id===t.id?i.a.createElement(j,{item:e.props.editingItem,handleEditItem:e.props.handleEditItem,handleCancelEditItem:e.props.handleCancelEditItem}):i.a.createElement(T,{item:t,handleDeleteItem:e.props.handleDeleteItem,handleSelectEditItem:e.props.handleSelectEditItem,handleItemCompletion:e.props.handleItemCompletion}))})}))})))))):null))}}]),t}(n.Component));k.defaultProps={items:[],editingItem:{},selectedPage:""};var P=k,L=function(e){return i.a.createElement("div",{className:"app__container"},i.a.createElement(P,Object.assign({},e,{className:"app__content"})))},A=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(I.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(i)))).componentDidMount=function(){return a.props.handleLoadStateLocalStorage()},a.componentDidUpdate=function(){return a.props.handleSaveStateLocalStorage(a.props.items)},a.handleAddItem=function(e){return a.props.handleAddItem(e)},a.handleCancelEditItem=function(){return a.props.handleCancelEditItem()},a.handleDeleteItem=function(e){return a.props.handleDeleteItem(e)},a.handleEditItem=function(e){return a.props.handleEditItem(e)},a.handleItemCompletion=function(e){return a.props.handleItemCompletion(e)},a.handleSelectEditItem=function(e){return a.props.handleSelectEditItem(e)},a.handleReorderItem=function(e,t){return a.props.handleReorderItem(e,t)},a.handleFilter=function(e){return a.props.handleFilter(e)},a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return i.a.createElement(L,this.props)}}]),t}(n.Component),R=function(e){return e.todos.items.filter(function(t){return"Completed"===e.todos.activePage?!0===t.completed:"Trash"===e.todos.activePage?!0===t.trashed:"Home"===e.todos.activePage?!1===t.completed&&!1===t.trashed:void 0})},F={handleAddItem:function(e){return{type:"Add item",payload:{text:e.itemText,dueDate:e.itemDueDate}}},handleCancelEditItem:function(){return{type:"Cancel edit item",payload:{}}},handleDeleteItem:function(e){return{type:"Delete item",payload:{id:e}}},handleEditItem:function(e){return{type:"Edit item",payload:{modifiedItem:e}}},handleItemCompletion:function(e){return{type:"Item completion",payload:{modifiedItem:e}}},handleSelectEditItem:function(e){return{type:"Select edit item",payload:{id:e}}},handleSaveStateLocalStorage:function(e){return{type:"Saving state to Local Storage",payload:{state:e}}},handleLoadStateLocalStorage:function(){return{type:"Load state from LocalStorage",payload:{}}},handleReorderItem:function(e,t){return{type:"Reorder item",payload:{initialPosition:e,newPosition:t}}},handleFilter:function(e){return{type:"Filter Items",payload:e}}},M=Object(c.b)(function(e){return{items:R(e),editingItem:e.todos.editingItem,activePage:e.todos.activePage}},F)(A),U=Object(l.e)(v,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(i.a.createElement(c.a,{store:U},i.a.createElement(M,null)),document.getElementById("app")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");E?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):g(e)})}}()},50:function(e,t,a){e.exports=a(106)},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.b7b79767.chunk.js.map