(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{62:function(e,t,s){},80:function(e,t,s){},86:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(0),c=s.n(a),r=s(26),i=s.n(r),o=(s(62),s(42),s(19)),l=s(7),d=s(8),h=s(10),u=s(9),j=s(11),b=s.n(j),p=(s(80),s(13)),x=s(21),O=s(89),m=s(91),f=s(88),g=function(e,t){return b.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},v=function(e,t){return b.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},k=function(){return b.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data}))},y=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:"",message:""},e.handleChange=function(t){var s=t.target,n=s.name,a=s.value;e.setState(Object(x.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault();var s=e.state,n=s.username,a=s.password;g(n,a).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/"))}))},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(O.a,{className:"registerField",onSubmit:this.handleSubmit,children:[Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)(O.a.Label,{htmlFor:"username",children:"Username: "}),Object(n.jsx)(O.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"})]}),Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)(O.a.Label,{htmlFor:"password",children:"Password: "}),Object(n.jsx)(O.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"})]}),this.state.message&&Object(n.jsx)(m.a,{variant:"danger",children:this.state.message}),Object(n.jsx)(f.a,{type:"submit",children:"Signup"})]})})}}]),s}(a.Component),w=s(12),S=s(90),C=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleLogout=function(e){k().then((function(){e.setUser(null)}))},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(S.a,{className:"nav d-flex flex-row justify-content-between bg",bg:"#db901b",children:[Object(n.jsx)("div",{children:Object(n.jsx)(S.a.Brand,{children:Object(n.jsx)(w.b,{to:"/",children:"Home"})})}),this.props.user?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"nav-padding",children:[Object(n.jsx)(S.a.Brand,{children:Object(n.jsx)(w.b,{to:"/explore",children:"Explore"})}),Object(n.jsx)(S.a.Brand,{children:Object(n.jsx)(w.b,{to:"/addblock",children:"Post your block"})}),Object(n.jsx)(S.a.Brand,{children:Object(n.jsx)(w.b,{to:"/dashboard",children:"Dashboard"})}),Object(n.jsx)(S.a.Brand,{children:Object(n.jsx)(w.b,{to:"/",onClick:function(){return e.handleLogout(e.props)},children:"Logout"})})]})}):Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"nav-padding",children:[Object(n.jsx)(S.a.Brand,{children:Object(n.jsx)(w.b,{to:"/explore",children:"Explore"})}),Object(n.jsx)(S.a.Brand,{children:Object(n.jsx)(w.b,{to:"/signup",children:"Signup"})}),Object(n.jsx)(S.a.Brand,{children:Object(n.jsx)(w.b,{to:"/login",children:"Login"})})]})})]})}}]),s}(a.Component),N=s(24),D=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={title:"",text:"",question:"",addedBlockId:""},e.handleChange=function(t){var s=t.target.name,n=t.target.value;e.setState(Object(x.a)({},s,n))},e.handleSubmit=function(t){t.preventDefault(),b.a.post("/api/blocks",{title:e.state.title,text:e.state.text,question:e.state.question}).then((function(t){e.setState({title:"",text:"",question:""}),e.props.getData();var s=t.data.block._id;e.props.history.push("blocks/".concat(s))})).catch((function(e){return console.log(e)}))},e.handleTextChange=function(t,s){e.setState({text:t})},e.handleQuestionChange=function(t,s){e.setState({question:t})},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"d-flex justify-content-center flex-wrap m-5",children:Object(n.jsx)("div",{className:"letter-wrapper",children:Object(n.jsx)("div",{className:"letter letter-addblock",children:Object(n.jsxs)(O.a,{onSubmit:this.handleSubmit,children:[Object(n.jsxs)(O.a.Group,{className:"margin-addblock",children:[Object(n.jsx)(O.a.Label,{htmlFor:"title",children:Object(n.jsx)("h2",{className:"pt-3",children:"Title"})}),Object(n.jsx)(O.a.Control,{type:"text",id:"title",name:"title",value:this.state.title,onChange:this.handleChange})]}),Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)(O.a.Label,{htmlFor:"text",children:Object(n.jsx)("h2",{className:"pt-3",children:"Your text so far"})}),Object(n.jsx)(N.a,{apiKey:"1zhoozv76bbjst6175al8406kfzwiram3zp2yi9kcdv1sjcq",type:"text",name:"text",value:this.state.text,id:"text",initialValue:"<p>This is the initial content of the editor</p>",init:{min_height:300,fontsize_formats:"8pt 10pt 12pt 14pt 18pt 24pt 36pt",menubar:!1,plugins:["advlist autolink lists link charmap print preview anchor","searchreplace visualblocks code fullscreen","paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"},onEditorChange:this.handleTextChange})]}),Object(n.jsxs)(O.a.Group,{children:[Object(n.jsxs)(O.a.Label,{htmlFor:"text",children:[Object(n.jsx)("h2",{className:"pt-3",children:"Your question(s) and writing block(s)"})," "]}),Object(n.jsx)(N.a,{apiKey:"1zhoozv76bbjst6175al8406kfzwiram3zp2yi9kcdv1sjcq",type:"text",name:"question",value:this.state.question,id:"question",initialValue:"<p>This is the initial content of the editor</p>",init:{min_height:300,fontsize_formats:"8pt 10pt 12pt 14pt 18pt 24pt 36pt",menubar:!1,plugins:["advlist autolink lists link charmap print preview anchor","searchreplace visualblocks code fullscreen","paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"},onEditorChange:this.handleQuestionChange})]}),Object(n.jsx)(f.a,{type:"submit",className:"margin-addblock",children:"Share what's blocking you"})]})})})})}}]),s}(a.Component),T=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:"",message:""},e.handleChange=function(t){var s=t.target,n=s.name,a=s.value;e.setState(Object(x.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault();var s=e.state,n=s.username,a=s.password;v(n,a).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/dashboard"))}))},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(O.a,{className:"registerField",onSubmit:this.handleSubmit,children:[Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)(O.a.Label,{htmlFor:"username",children:"Username: "}),Object(n.jsx)(O.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"})]}),Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)(O.a.Label,{htmlFor:"password",children:"Password: "}),Object(n.jsx)(O.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"})]}),this.state.message&&Object(n.jsx)(m.a,{variant:"danger",children:this.state.message}),Object(n.jsx)(f.a,{type:"submit",children:"Login"})]})})}}]),s}(a.Component),q=s(92),U=s(14),B=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"p-3",children:"Everyone's questions, let's dive in!"}),Object(n.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:this.props.blocks.map((function(e){return Object(n.jsx)(q.a,{style:{width:"18rem"},className:"m-3 shadow",children:Object(n.jsxs)(q.a.Body,{className:"d-flex flex-column justify-content-between",children:[Object(n.jsx)(q.a.Title,{className:"cormorant",style:{fontSize:30},children:e.title}),Object(n.jsx)(U.b,{content:e.question}),Object(n.jsxs)("div",{className:"d-flex flex-column justify-content-between",children:[Object(n.jsx)(f.a,{children:Object(n.jsx)(w.b,{to:"/blocks/".concat(e._id),children:"Read more."})}),Object(n.jsx)("span",{className:"date",children:e.creationDate.split("T")[0].split("-").reduce((function(e,t){return t+"/"+e}))})]})]})},e._id)}))})]})}}]),s}(a.Component),z=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={block:null,error:null,title:"",text:"",question:"",ideas:"",ideaText:""},e.getBlock=function(){var t=e.props.match.params.id;console.log("ID LOG",t),b.a.get("/api/blocks/details/".concat(t)).then((function(t){console.log("This is the response",t),console.log("The reponse.data.ideas",t.data.ideas),e.setState({title:t.data.title,text:t.data.text,question:t.data.question,block:t.data,ideas:t.data.ideas})})).catch((function(t){console.log(t.response),404===t.response.status&&e.setState({error:"Sorry - Block Not found \ud83e\udd37\u200d\u2640\ufe0f \ud83e\udd37\u200d\u2642\ufe0f"})}))},e.componentDidMount=function(){e.getBlock()},e.handleSubmit=function(t){t.preventDefault();var s=e.props.match.params.id;b.a.post("/api/blocks/details/".concat(s,"/addidea"),{text:e.state.ideaText}).then((function(){e.setState({ideaText:""}),e.getBlock()})).catch((function(e){return console.log(e)}))},e.handleIdeaTextChange=function(t,s){e.setState({ideaText:t})},e.handleGoToEdit=function(){e.props.history.push("/blocks/".concat(e.props.match.params.id,"/editblock"))},e.handleDeleteBlock=function(){var t=e.props.match.params.id;b.a.delete("/api/blocks/delete/".concat(t)).then((function(){e.props.getData()})).then((function(){e.props.history.push("/explore")})).catch((function(t){404===t.response.status&&e.setState({error:"Something went wrong"})}))},e.handleToggleIdeaSelect=function(t){console.log("an idea was selected",t._id,t.selected),b.a.put("/api/ideas/select",t).then((function(t){e.getBlock()})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this;if(this.state.error)return Object(n.jsx)("h1",{children:this.state.error});if(!this.state.block)return Object(n.jsx)("h1",{children:"Loading..."});var t=!1,s=this.props.user,a=this.state.block.owner;return s&&s._id===a&&(t=!0),Object(n.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(n.jsx)("div",{className:"postitrow",children:Object(n.jsx)("section",{className:"postit",children:Object(n.jsx)("ul",{children:this.state.block.ideas.filter((function(e,t){return t%2===0})).map((function(s){return Object(n.jsxs)("li",{className:s.selected?"selectedidea":"notselected",children:[Object(n.jsx)("section",{children:Object(n.jsxs)(w.b,{to:"/ideas/".concat(s._id),children:[Object(n.jsx)("span",{className:"username",children:s.owner.username}),Object(n.jsx)("div",{children:Object(n.jsx)(U.a,{content:s.text})}),Object(n.jsx)("span",{class:"date",children:s.creationDate.split("T")[0].split("-").reduce((function(e,t){return t+"/"+e}))})]})}),t&&!s.selected&&Object(n.jsx)("div",{children:Object(n.jsx)(f.a,{onClick:function(){return e.handleToggleIdeaSelect(s)},className:"p-1 mt-2",children:"I'll use this idea \ud83d\udc9c"})}),t&&s.selected&&Object(n.jsx)("div",{children:Object(n.jsx)(f.a,{onClick:function(){return e.handleToggleIdeaSelect(s)},className:"p-1 mt-2",children:"I won't use this idea"})})]},s._id)}))})})}),Object(n.jsxs)("div",{class:"letterrow",children:[Object(n.jsx)("section",{className:"blockdetails",children:Object(n.jsx)("div",{className:"letter-wrapper",children:Object(n.jsxs)("div",{className:"letter letter-blockdetails",children:[Object(n.jsx)("h1",{className:"cormorant",children:this.state.title}),Object(n.jsx)(U.b,{content:this.state.text}),Object(n.jsx)("h2",{className:"questionmarker",children:"My questions for the community"}),Object(n.jsx)(U.b,{content:this.state.question}),t&&Object(n.jsxs)("div",{children:[Object(n.jsx)(f.a,{onClick:this.handleGoToEdit,children:"Edit"}),Object(n.jsx)("span",{children:"\xa0"}),Object(n.jsx)(f.a,{onClick:this.handleDeleteBlock,children:"Delete"})]})]})})}),Object(n.jsx)("section",{className:"addidea",children:Object(n.jsxs)(O.a,{onSubmit:this.handleSubmit,children:[Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)(O.a.Label,{htmlFor:"text",children:Object(n.jsx)("h2",{class:"addidea",children:"Share your idea"})}),Object(n.jsx)(N.a,{apiKey:"1zhoozv76bbjst6175al8406kfzwiram3zp2yi9kcdv1sjcq",type:"text",name:"ideaText",value:this.state.ideaText,id:"ideaText",initialValue:"<p>This is the initial content of the editor</p>",init:{min_height:300,fontsize_formats:"8pt 10pt 12pt 14pt 18pt 24pt 36pt",menubar:!1,plugins:["advlist autolink lists link charmap print preview anchor","searchreplace visualblocks code fullscreen","paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"},onEditorChange:this.handleIdeaTextChange})]}),Object(n.jsx)(f.a,{type:"submit",children:"Add an Idea"})]})})]}),Object(n.jsx)("div",{className:"postitrow",children:Object(n.jsx)("section",{className:"postit",children:Object(n.jsx)("ul",{children:this.state.block.ideas.filter((function(e,t){return t%2!==0})).map((function(s){return Object(n.jsxs)("li",{className:s.selected?"selectedidea":"notselected",children:[Object(n.jsx)("section",{children:Object(n.jsxs)(w.b,{to:"/ideas/".concat(s._id),children:[Object(n.jsx)("span",{children:s.owner.username}),Object(n.jsx)("div",{children:Object(n.jsx)(U.a,{content:s.text})}),s.creationDate.split("T")[0].split("-").reduce((function(e,t){return t+"/"+e}))]})}),t&&!s.selected&&Object(n.jsx)("div",{children:Object(n.jsx)(f.a,{onClick:function(){return e.handleToggleIdeaSelect(s)},className:"p-1 mt-2",children:"I'll use this idea \ud83d\udc9c"})}),t&&s.selected&&Object(n.jsx)("div",{children:Object(n.jsx)(f.a,{onClick:function(){return e.handleToggleIdeaSelect(s)},className:"p-1 mt-2",children:"I won't use this idea"})})]},s._id)}))})})})]})}}]),s}(a.Component),_=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={title:"",text:"",question:""},e.handleChange=function(t){var s=t.target.name,n=t.target.value;e.setState(Object(x.a)({},s,n))},e.getBlock=function(){var t=e.props.match.params.id;console.log("ID LOG",t),b.a.get("/api/blocks/details/".concat(t)).then((function(t){console.log("This is the response",t),e.setState({title:t.data.title,text:t.data.text,question:t.data.question})})).catch((function(t){console.log(t.response),404===t.response.status&&e.setState({error:"Sorry - Block Not found \ud83e\udd37\u200d\u2640\ufe0f \ud83e\udd37\u200d\u2642\ufe0f"})}))},e.handleUpdateBlockSubmit=function(t){t.preventDefault();var s=e.props.match.params.id;b.a.put("/api/blocks/".concat(s,"/editblock"),{title:e.state.title,text:e.state.text,question:e.state.question}).then((function(t){e.setState({block:t.data,title:t.data.title,question:t.question,description:t.data.question})})).then((function(){e.props.history.push("/blocks/".concat(s,"/"))})).catch((function(e){console.log(e)}))},e.handleTextChange=function(t,s){e.setState({text:t})},e.handleQuestionChange=function(t,s){e.setState({question:t})},e.componentDidMount=function(){e.getBlock()},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsxs)(O.a,{onSubmit:this.handleUpdateBlockSubmit,children:[Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)(O.a.Label,{htmlFor:"title",children:Object(n.jsx)("h2",{className:"pt-3",children:"Title"})}),Object(n.jsx)(O.a.Control,{type:"text",id:"title",name:"title",value:this.state.title,onChange:this.handleChange,className:"editblock-title"})]}),Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)(O.a.Label,{htmlFor:"text",children:Object(n.jsx)("h2",{className:"pt-3",children:"Your text so far"})}),Object(n.jsx)(N.a,{apiKey:"1zhoozv76bbjst6175al8406kfzwiram3zp2yi9kcdv1sjcq",type:"text",name:"text",value:this.state.text,id:"text",initialValue:"",init:{min_height:300,fontsize_formats:"8pt 10pt 12pt 14pt 18pt 24pt 36pt",menubar:!1,plugins:["advlist autolink lists link charmap print preview anchor","searchreplace visualblocks code fullscreen","paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |  fontsizeselect | help"},onEditorChange:this.handleTextChange})]}),Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)(O.a.Label,{htmlFor:"text",children:Object(n.jsx)("h2",{className:"pt-3",children:"YYour question(s) and writing block(s)"})}),Object(n.jsx)(N.a,{apiKey:"1zhoozv76bbjst6175al8406kfzwiram3zp2yi9kcdv1sjcq",type:"text",name:"question",value:this.state.question,id:"question",initialValue:"",init:{min_height:300,fontsize_formats:"8pt 10pt 12pt 14pt 18pt 24pt 36pt",menubar:!1,plugins:["advlist autolink lists link charmap print preview anchor","searchreplace visualblocks code fullscreen","paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |  fontsizeselect | help"},onEditorChange:this.handleQuestionChange})]}),Object(n.jsx)(f.a,{type:"submit",children:"Update this block"})]})}}]),s}(a.Component),I=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={idea:null,error:null,text:"",comments:"",owner:"",parentBlock:"",creationDate:""},e.getIdea=function(){var t=e.props.match.params.id;b.a.get("/api/ideas/details/".concat(t)).then((function(t){console.log("This is the response",t),e.setState({idea:t.data,text:t.data.text,comments:t.data.comments,owner:t.data.owner,parentBlock:t.data.parentBlock,creationDate:t.data.creationDate})})).catch((function(t){404===t.response.status&&e.setState({error:"Sorry - Idea Not found \ud83e\udd37\u200d\u2640\ufe0f \ud83e\udd37\u200d\u2642\ufe0f"})}))},e.componentDidMount=function(){e.getIdea()},e.deleteIdea=function(){var t=e.props.match.params.id;b.a.delete("/api/ideas/delete/".concat(t)).then((function(){e.props.getData()})).then((function(){e.props.history.push("/blocks/".concat(e.state.parentBlock))})).catch((function(t){404===t.response.status&&e.setState({error:"Something went wrong"})}))},e}return Object(d.a)(s,[{key:"render",value:function(){if(this.state.error)return Object(n.jsx)("h1",{children:this.state.error});if(!this.state.idea)return Object(n.jsx)("h1",{children:"Loading..."});var e=!1,t=this.props.user._id,s=this.state.owner._id,a=this.state.creationDate.split("T")[0].split("-").reduce((function(e,t){return t+"/"+e}));return t===s&&(e=!0),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{children:[a,Object(n.jsx)(U.a,{content:this.state.owner.username}),Object(n.jsx)(U.a,{content:this.state.text})]}),e&&Object(n.jsx)(f.a,{variant:"danger",onClick:this.deleteIdea,children:"Delete"})]})}}]),s}(a.Component),L=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={block:null,error:null,blocks:[],ideas:[]},e.getAllUserBlocks=function(){var t=e.props.user._id;console.log("DASHBOARD ID LOG",e.props.user._id),b.a.get("/api/blocks/userblocks/".concat(t)).then((function(t){console.log("Show me the response",t),e.setState({block:t.data,blocks:t.data,ideas:t.data.ideas})})).catch((function(t){console.log(t.response),404===t.response.status&&e.setState({error:"Something went wrong"})}))},e.componentDidMount=function(){e.getAllUserBlocks()},e}return Object(d.a)(s,[{key:"render",value:function(){return this.state.error?Object(n.jsx)("h1",{children:this.state.error}):this.state.blocks?Object(n.jsxs)("div",{className:"userblocks",children:[Object(n.jsx)("h1",{className:"m-5",children:"My blocks"}),Object(n.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:this.state.blocks.map((function(e){return Object(n.jsx)(q.a,{style:{width:"18rem"},className:"m-3 shadow",children:Object(n.jsx)(q.a.Body,{children:Object(n.jsx)(q.a.Title,{className:"fancy",style:{fontSize:30},children:Object(n.jsx)(w.b,{to:"/blocks/".concat(e._id),children:e.title})})})})}))})]}):Object(n.jsx)("h1",{children:"Loading..."})}}]),s}(a.Component),A=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={block:null,error:null,ideas:[]},e.getAllUserIdeas=function(){var t=e.props.user._id;console.log("DASHBOARD ID LOG",e.props.user._id),b.a.get("/api/ideas/userideas/".concat(t)).then((function(t){console.log("IDEAS RESPONSE",t),e.setState({block:t.data,ideas:t.data})})).catch((function(t){console.log(t.response),404===t.response.status&&e.setState({error:"Something went wrong"})}))},e.componentDidMount=function(){e.getAllUserIdeas()},e}return Object(d.a)(s,[{key:"render",value:function(){return this.state.error?Object(n.jsx)("h1",{children:this.state.error}):this.state.ideas?Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"My ideas"}),Object(n.jsx)("div",{className:"postitrow",children:Object(n.jsx)("section",{className:"postit",children:Object(n.jsx)("ul",{className:"d-flex flex-wrap",children:this.state.ideas.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)("section",{children:Object(n.jsx)("div",{children:Object(n.jsx)(w.b,{to:"/ideas/".concat(e._id),children:Object(n.jsx)(U.b,{content:e.text})})})})},e._id)}))})})})]}):Object(n.jsx)("h1",{children:"Loading..."})}}]),s}(a.Component),F=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"p-3",children:"So many beautiful texts and ideas!"}),Object(n.jsx)(L,Object(o.a)({user:this.props.user,setUser:this.props.setUser},this.props)),Object(n.jsx)(A,Object(o.a)({user:this.props.user,setUser:this.props.setUser},this.props))]})}}]),s}(a.Component),G=s.p+"static/media/demo.b8c518d8.png",E=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"d-flex justify-content-between align-items-center homewrapper",children:[Object(n.jsxs)("div",{className:"text-left",children:[Object(n.jsx)("h1",{children:"Overcome your writer's block \u2014 together!"}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"We all get stuck behind our computer way to often, staring at the blank screen for hours... if only there was a way to ask for some help, right? We got you covered! Welcome to our community of writers, where each one of us can share their own writer's block and receive support and ideas on how to unstuck ourselves."}),Object(n.jsx)("p",{children:"Receiving help is great, but offering it is even better: on this site you will find the chance to put your skills to use and help other fellow writers with their own struggles."}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{children:Object(n.jsx)(f.a,{className:"btn-lg bg",type:"submit",children:Object(n.jsx)(w.b,{to:"/explore",children:"Help someone!"})})})]}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{className:"typewriter",src:G,alt:"happy people around typewriter"})})]})}}]),s}(a.Component),M=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={user:e.props.user,blocks:[]},e.setUser=function(t){e.setState({user:t})},e.getData=function(){b.a.get("/api/blocks").then((function(t){e.setState({blocks:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(C,{user:this.state.user,setUser:this.setUser}),Object(n.jsx)(p.b,{exact:!0,path:"/addblock",render:function(t){return e.state.user?Object(n.jsx)(D,Object(o.a)({getData:e.getData,blocks:e.state.blocks},t)):Object(n.jsx)(p.a,{to:"/signup"})}}),Object(n.jsx)(p.b,{exact:!0,path:"/",render:function(t){return Object(n.jsx)(E,Object(o.a)({setUser:e.setUser,blocks:e.state.blocks},t))}}),Object(n.jsx)(p.b,{exact:!0,path:"/signup",render:function(t){return Object(n.jsx)(y,Object(o.a)({setUser:e.setUser},t))}}),Object(n.jsx)(p.b,{exact:!0,path:"/login",render:function(t){return Object(n.jsx)(T,Object(o.a)({setUser:e.setUser},t))}}),Object(n.jsx)(p.b,{exact:!0,path:"/explore",render:function(t){return Object(n.jsx)(B,Object(o.a)({setUser:e.setUser,blocks:e.state.blocks},t))}}),Object(n.jsx)(p.b,{exact:!0,path:"/blocks/:id",render:function(t){return Object(n.jsx)(z,Object(o.a)({setUser:e.setUser,blocks:e.state.blocks,ideas:e.state.ideas,user:e.state.user,getData:e.getData},t))}}),Object(n.jsx)(p.b,{exact:!0,path:"/blocks/:id/editblock",render:function(t){return e.state.user?Object(n.jsx)(_,Object(o.a)({setUser:e.setUser,blocks:e.state.blocks,ideas:e.state.ideas,getData:e.getData},t)):Object(n.jsx)(p.a,{to:"/signup"})}}),Object(n.jsx)(p.b,{exact:!0,path:"/ideas/:id",render:function(t){return Object(n.jsx)(I,Object(o.a)({user:e.state.user,setUser:e.setUser,getData:e.getData},t))}}),Object(n.jsx)(p.b,{exact:!0,path:"/dashboard",render:function(t){return Object(n.jsx)(F,Object(o.a)({user:e.state.user,setUser:e.setUser},t))}})]})}}]),s}(c.a.Component),P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,93)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};b.a.get("/api/auth/loggedin").then((function(e){var t=e.data;i.a.render(Object(n.jsx)(w.a,{children:Object(n.jsx)(M,{user:t})}),document.getElementById("root"))})),P()}},[[86,1,2]]]);
//# sourceMappingURL=main.2f0647ef.chunk.js.map