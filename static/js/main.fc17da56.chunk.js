(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),s=a(1),i=a(9),l=a(2),p=a(3),u=a(5),d=a(4),h=a(6),m=function(e){return o.a.createElement("header",{className:"app-header"},o.a.createElement("h1",{className:"app-header__title"},"Super Sticky Notes"),o.a.createElement("aside",{className:"app-header__controls"},o.a.createElement("button",{className:"add-new",onClick:e.addNote},"+ New Note"),o.a.createElement("input",{type:"text",placeholder:"Type here to search...",className:"search",value:e.searchText,onChange:e.onSearch})))},v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).updateTitle=function(e){var t=e.target.value,n=a.props.note.id;a.props.onType(n,"title",t)},a.updateDescription=function(e){var t=e.target.value,n=a.props.note.id;a.props.onType(n,"description",t)},a.clickDelete=function(){return a.props.remove(a.props.note.id)},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("li",{className:"note"},o.a.createElement("input",{type:"text",value:this.props.note.title,onChange:this.updateTitle,placeholder:"Title",className:"note__title"}),o.a.createElement("textarea",{value:this.props.note.description,onChange:this.updateDescription,placeholder:"Description...",className:"note__description"}),o.a.createElement("span",{onClick:this.clickDelete,className:"note__delete"},"X"))}}]),t}(n.Component),f=function(e){return e.doesMatchSearch},y=function(e){var t=e.notes.filter(f).map(function(t){return o.a.createElement(v,{note:t,key:t.id,onType:e.onType,remove:e.remove})});return o.a.createElement("ul",{className:"notes-list"},t)},N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[{id:Date.now(),title:"",description:"",doesMatchSearch:!0}],searchText:""},a.addNote=function(){var e=[{id:Date.now(),title:"",description:"",doesMatchSearch:!0}].concat(Object(i.a)(a.state.notes));a.setState({notes:e})},a.onType=function(e,t,n){var o=a.state.notes.map(function(a){return a.id!==e?a:"title"===t?Object(s.a)({},a,{title:n}):Object(s.a)({},a,{description:n})});a.setState({notes:o})},a.onSearch=function(e){var t=e.target.value.toLowerCase(),n=a.state.notes.map(function(e){if(t){var a=e.title.toLowerCase(),n=e.description.toLowerCase(),o=a.includes(t),r=n.includes(t),c=o||r;return Object(s.a)({},e,{doesMatchSearch:c})}return Object(s.a)({},e,{doesMatchSearch:!0})});a.setState({searchText:t,notes:n})},a.remove=function(e){var t=a.state.notes.filter(function(t){return t.id!==e});a.setState({notes:t})},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.state.notes);localStorage.setItem("savedNotes",e)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("savedNotes");if(e){var t=JSON.parse(e);this.setState({notes:t})}}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m,{searchText:this.state.searchText,addNote:this.addNote,onSearch:this.onSearch}),o.a.createElement(y,{notes:this.state.notes,onType:this.onType,remove:this.remove}))}}]),t}(n.Component),S=(a(16),document.getElementById("root"));c.a.render(o.a.createElement(N,null),S)}},[[10,1,2]]]);
//# sourceMappingURL=main.fc17da56.chunk.js.map