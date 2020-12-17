(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{62:function(e,t,n){},80:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n.n(a),r=n(26),i=n.n(r),o=(n(62),n(42),n(19)),l=n(7),d=n(8),h=n(10),u=n(9),j=n(11),b=n.n(j),p=(n(80),n(13)),x=n(21),O=n(89),m=n(91),f=n(88),g=function(e,t){return b.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},v=function(e,t){return b.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},k=function(){return b.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data}))},y=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:"",message:""},e.handleChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(x.a)({},s,a))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,s=n.username,a=n.password;g(s,a).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/"))}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(O.a,{className:"registerField",onSubmit:this.handleSubmit,children:[Object(s.jsxs)(O.a.Group,{children:[Object(s.jsx)(O.a.Label,{htmlFor:"username",children:"Username: "}),Object(s.jsx)(O.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"})]}),Object(s.jsxs)(O.a.Group,{children:[Object(s.jsx)(O.a.Label,{htmlFor:"password",children:"Password: "}),Object(s.jsx)(O.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"})]}),this.state.message&&Object(s.jsx)(m.a,{variant:"danger",children:this.state.message}),Object(s.jsx)(f.a,{type:"submit",children:"Signup"})]})})}}]),n}(a.Component),w=n(12),S=n(90),C=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleLogout=function(e){k().then((function(){e.setUser(null)}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)(S.a,{className:"nav d-flex flex-row justify-content-between bg",bg:"#db901b",children:[Object(s.jsx)("div",{children:Object(s.jsx)(S.a.Brand,{className:"home-padding",children:Object(s.jsx)(w.b,{to:"/",children:"Home"})})}),this.props.user?Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"nav-padding",children:[Object(s.jsx)(S.a.Brand,{children:Object(s.jsx)(w.b,{to:"/explore",children:"Explore"})}),Object(s.jsx)(S.a.Brand,{children:Object(s.jsx)(w.b,{to:"/addblock",children:"Post your block"})}),Object(s.jsx)(S.a.Brand,{children:Object(s.jsx)(w.b,{to:"/dashboard",children:"Dashboard"})}),Object(s.jsx)(S.a.Brand,{children:Object(s.jsx)(w.b,{to:"/",onClick:function(){return e.handleLogout(e.props)},children:"Logout"})})]})}):Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"nav-padding",children:[Object(s.jsx)(S.a.Brand,{children:Object(s.jsx)(w.b,{to:"/explore",children:"Explore"})}),Object(s.jsx)(S.a.Brand,{children:Object(s.jsx)(w.b,{to:"/signup",children:"Signup"})}),Object(s.jsx)(S.a.Brand,{children:Object(s.jsx)(w.b,{to:"/login",children:"Login"})})]})})]})}}]),n}(a.Component),N=n(24),D=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={title:"",text:"",question:"",addedBlockId:""},e.handleChange=function(t){var n=t.target.name,s=t.target.value;e.setState(Object(x.a)({},n,s))},e.handleSubmit=function(t){t.preventDefault(),b.a.post("/api/blocks",{title:e.state.title,text:e.state.text,question:e.state.question}).then((function(t){e.setState({title:"",text:"",question:""}),e.props.getData();var n=t.data.block._id;e.props.history.push("blocks/".concat(n))})).catch((function(e){return console.log(e)}))},e.handleTextChange=function(t,n){e.setState({text:t})},e.handleQuestionChange=function(t,n){e.setState({question:t})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"d-flex justify-content-center flex-wrap m-5",children:Object(s.jsx)("div",{className:"letter-wrapper",children:Object(s.jsx)("div",{className:"letter letter-addblock",children:Object(s.jsxs)(O.a,{onSubmit:this.handleSubmit,children:[Object(s.jsxs)(O.a.Group,{className:"margin-addblock",children:[Object(s.jsx)(O.a.Label,{htmlFor:"title",children:"Title "}),Object(s.jsx)(O.a.Control,{type:"text",id:"title",name:"title",value:this.state.title,onChange:this.handleChange})]}),Object(s.jsxs)(O.a.Group,{children:[Object(s.jsx)(O.a.Label,{htmlFor:"text",children:"Your text so far "}),Object(s.jsx)(N.a,{apiKey:"1zhoozv76bbjst6175al8406kfzwiram3zp2yi9kcdv1sjcq",type:"text",name:"text",value:this.state.text,id:"text",initialValue:"<p>This is the initial content of the editor</p>",init:{min_height:300,fontsize_formats:"8pt 10pt 12pt 14pt 18pt 24pt 36pt",menubar:!1,plugins:["advlist autolink lists link charmap print preview anchor","searchreplace visualblocks code fullscreen","paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |  fontsizeselect | help"},onEditorChange:this.handleTextChange})]}),Object(s.jsxs)(O.a.Group,{children:[Object(s.jsx)(O.a.Label,{htmlFor:"text",children:"Your question(s) and writing block(s) "}),Object(s.jsx)(N.a,{apiKey:"1zhoozv76bbjst6175al8406kfzwiram3zp2yi9kcdv1sjcq",type:"text",name:"question",value:this.state.question,id:"question",initialValue:"<p>This is the initial content of the editor</p>",init:{min_height:300,fontsize_formats:"8pt 10pt 12pt 14pt 18pt 24pt 36pt",menubar:!1,plugins:["advlist autolink lists link charmap print preview anchor","searchreplace visualblocks code fullscreen","paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |  fontsizeselect | help"},onEditorChange:this.handleQuestionChange})]}),Object(s.jsx)(f.a,{type:"submit",className:"margin-addblock",children:"Add this block"})]})})})})}}]),n}(a.Component),T=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:"",message:""},e.handleChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(x.a)({},s,a))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,s=n.username,a=n.password;v(s,a).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/dashboard"))}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(O.a,{className:"registerField",onSubmit:this.handleSubmit,children:[Object(s.jsxs)(O.a.Group,{children:[Object(s.jsx)(O.a.Label,{htmlFor:"username",children:"Username: "}),Object(s.jsx)(O.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange,id:"username"})]}),Object(s.jsxs)(O.a.Group,{children:[Object(s.jsx)(O.a.Label,{htmlFor:"password",children:"Password: "}),Object(s.jsx)(O.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,id:"password"})]}),this.state.message&&Object(s.jsx)(m.a,{variant:"danger",children:this.state.message}),Object(s.jsx)(f.a,{type:"submit",children:"Login"})]})})}}]),n}(a.Component),U=n(92),q=n(14),B=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:this.props.blocks.map((function(e){return Object(s.jsx)(U.a,{style:{width:"18rem"},className:"m-3",children:Object(s.jsxs)(U.a.Body,{children:[Object(s.jsx)(U.a.Title,{className:"cormorant",style:{fontSize:30},children:e.title}),Object(s.jsxs)(U.a.Text,{children:[Object(s.jsx)(q.b,{content:e.question}),e.creationDate.split("T")[0].split("-").reduce((function(e,t){return t+"/"+e}))]}),Object(s.jsx)(f.a,{children:Object(s.jsx)(w.b,{to:"/blocks/".concat(e._id),children:"Read more."})})]})})}))})})}}]),n}(a.Component),z=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={block:null,error:null,title:"",text:"",question:"",ideas:"",ideaText:""},e.getBlock=function(){var t=e.props.match.params.id;console.log("ID LOG",t),b.a.get("/api/blocks/details/".concat(t)).then((function(t){console.log("This is the response",t),console.log("The reponse.data.ideas",t.data.ideas),e.setState({title:t.data.title,text:t.data.text,question:t.data.question,block:t.data,ideas:t.data.ideas})})).catch((function(t){console.log(t.response),404===t.response.status&&e.setState({error:"Sorry - Block Not found \ud83e\udd37\u200d\u2640\ufe0f \ud83e\udd37\u200d\u2642\ufe0f"})}))},e.componentDidMount=function(){e.getBlock()},e.handleSubmit=function(t){t.preventDefault();var n=e.props.match.params.id;b.a.post("/api/blocks/details/".concat(n,"/addidea"),{text:e.state.ideaText}).then((function(){e.setState({ideaText:""}),e.getBlock()})).catch((function(e){return console.log(e)}))},e.handleIdeaTextChange=function(t,n){e.setState({ideaText:t})},e.handleGoToEdit=function(){e.props.history.push("/blocks/".concat(e.props.match.params.id,"/editblock"))},e.handleDeleteBlock=function(){var t=e.props.match.params.id;b.a.delete("/api/blocks/delete/".concat(t)).then((function(){e.props.getData()})).then((function(){e.props.history.push("/explore")})).catch((function(t){404===t.response.status&&e.setState({error:"Something went wrong"})}))},e.handleToggleIdeaSelect=function(t){console.log("an idea was selected",t._id,t.selected),b.a.put("/api/ideas/select",t).then((function(t){e.getBlock()})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;if(this.state.error)return Object(s.jsx)("h1",{children:this.state.error});if(!this.state.block)return Object(s.jsx)("h1",{children:"Loading..."});var t=!1,n=this.props.user,a=this.state.block.owner;return n&&n._id===a&&(t=!0),Object(s.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(s.jsx)("div",{className:"postitrow",children:Object(s.jsx)("section",{className:"postit",children:Object(s.jsx)("ul",{children:this.state.block.ideas.filter((function(e,t){return t%2!==0})).map((function(n){return Object(s.jsxs)("li",{className:n.selected?"selectedidea":"notselected",children:[Object(s.jsx)("section",{children:Object(s.jsxs)(w.b,{to:"/ideas/".concat(n._id),children:[Object(s.jsx)("span",{children:n.owner.username}),Object(s.jsx)("div",{children:Object(s.jsx)(q.a,{content:n.text})}),n.creationDate.split("T")[0].split("-").reduce((function(e,t){return t+"/"+e}))]})}),t&&!n.selected&&Object(s.jsx)("div",{children:Object(s.jsx)(f.a,{onClick:function(){return e.handleToggleIdeaSelect(n)},className:"p-1 mt-2",children:"I'll use this idea \ud83d\udc9c"})}),t&&n.selected&&Object(s.jsx)("div",{children:Object(s.jsx)(f.a,{onClick:function(){return e.handleToggleIdeaSelect(n)},className:"p-1 mt-2",children:"I won't use this idea"})})]},n._id)}))})})}),Object(s.jsxs)("div",{class:"letterrow",children:[Object(s.jsx)("section",{className:"blockdetails",children:Object(s.jsx)("div",{className:"letter-wrapper",children:Object(s.jsxs)("div",{className:"letter letter-blockdetails",children:[Object(s.jsx)("h1",{className:"cormorant",children:this.state.title}),Object(s.jsx)(q.b,{content:this.state.text}),Object(s.jsx)("h2",{className:"questionmarker",children:"My questions for the community"}),Object(s.jsx)(q.b,{content:this.state.question}),t&&Object(s.jsxs)("div",{children:[Object(s.jsx)(f.a,{onClick:this.handleGoToEdit,children:"Edit"}),Object(s.jsx)("span",{children:"\xa0"}),Object(s.jsx)(f.a,{onClick:this.handleDeleteBlock,children:"Delete"})]})]})})}),Object(s.jsx)("section",{className:"addidea",children:Object(s.jsxs)(O.a,{onSubmit:this.handleSubmit,children:[Object(s.jsxs)(O.a.Group,{children:[Object(s.jsx)(O.a.Label,{htmlFor:"text",children:Object(s.jsx)("h2",{class:"addidea",children:"Share your idea"})}),Object(s.jsx)(N.a,{apiKey:"1zhoozv76bbjst6175al8406kfzwiram3zp2yi9kcdv1sjcq",type:"text",name:"ideaText",value:this.state.ideaText,id:"ideaText",initialValue:"<p>This is the initial content of the editor</p>",init:{min_height:300,fontsize_formats:"8pt 10pt 12pt 14pt 18pt 24pt 36pt",menubar:!1,plugins:["advlist autolink lists link charmap print preview anchor","searchreplace visualblocks code fullscreen","paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"},onEditorChange:this.handleIdeaTextChange})]}),Object(s.jsx)(f.a,{type:"submit",children:"Add an Idea"})]})})]}),Object(s.jsx)("div",{className:"postitrow",children:Object(s.jsx)("section",{className:"postit",children:Object(s.jsx)("ul",{children:this.state.block.ideas.filter((function(e,t){return t%2==0})).map((function(n){return Object(s.jsxs)("li",{className:n.selected?"selectedidea":"notselected",children:[Object(s.jsx)("section",{children:Object(s.jsxs)(w.b,{to:"/ideas/".concat(n._id),children:[Object(s.jsx)("span",{children:n.owner.username}),Object(s.jsx)("div",{children:Object(s.jsx)(q.a,{content:n.text})}),n.creationDate.split("T")[0].split("-").reduce((function(e,t){return t+"/"+e}))]})}),t&&!n.selected&&Object(s.jsx)("div",{children:Object(s.jsx)(f.a,{onClick:function(){return e.handleToggleIdeaSelect(n)},className:"p-1 mt-2",children:"I'll use this idea \ud83d\udc9c"})}),t&&n.selected&&Object(s.jsx)("div",{children:Object(s.jsx)(f.a,{onClick:function(){return e.handleToggleIdeaSelect(n)},className:"p-1 mt-2",children:"I won't use this idea"})})]},n._id)}))})})}),Object(s.jsx)("div",{})]})}}]),n}(a.Component),_=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={title:"",text:"",question:""},e.handleChange=function(t){var n=t.target.name,s=t.target.value;e.setState(Object(x.a)({},n,s))},e.getBlock=function(){var t=e.props.match.params.id;console.log("ID LOG",t),b.a.get("/api/blocks/details/".concat(t)).then((function(t){console.log("This is the response",t),e.setState({title:t.data.title,text:t.data.text,question:t.data.question})})).catch((function(t){console.log(t.response),404===t.response.status&&e.setState({error:"Sorry - Block Not found \ud83e\udd37\u200d\u2640\ufe0f \ud83e\udd37\u200d\u2642\ufe0f"})}))},e.handleUpdateBlockSubmit=function(t){t.preventDefault();var n=e.props.match.params.id;b.a.put("/api/blocks/".concat(n,"/editblock"),{title:e.state.title,text:e.state.text,question:e.state.question}).then((function(t){e.setState({block:t.data,title:t.data.title,question:t.question,description:t.data.question})})).then((function(){e.props.history.push("/blocks/".concat(n,"/"))})).catch((function(e){console.log(e)}))},e.handleTextChange=function(t,n){e.setState({text:t})},e.handleQuestionChange=function(t,n){e.setState({question:t})},e.componentDidMount=function(){e.getBlock()},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsxs)(O.a,{onSubmit:this.handleUpdateBlockSubmit,children:[Object(s.jsxs)(O.a.Group,{children:[Object(s.jsx)(O.a.Label,{htmlFor:"title",children:"Title "}),Object(s.jsx)(O.a.Control,{type:"text",id:"title",name:"title",value:this.state.title,onChange:this.handleChange})]}),Object(s.jsxs)(O.a.Group,{children:[Object(s.jsx)(O.a.Label,{htmlFor:"text",children:"Your text so far "}),Object(s.jsx)(N.a,{apiKey:"1zhoozv76bbjst6175al8406kfzwiram3zp2yi9kcdv1sjcq",type:"text",name:"text",value:this.state.text,id:"text",initialValue:"",init:{min_height:300,fontsize_formats:"8pt 10pt 12pt 14pt 18pt 24pt 36pt",menubar:!1,plugins:["advlist autolink lists link charmap print preview anchor","searchreplace visualblocks code fullscreen","paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |  fontsizeselect | help"},onEditorChange:this.handleTextChange})]}),Object(s.jsxs)(O.a.Group,{children:[Object(s.jsx)(O.a.Label,{htmlFor:"text",children:"Your question(s) and writing block(s) "}),Object(s.jsx)(N.a,{apiKey:"1zhoozv76bbjst6175al8406kfzwiram3zp2yi9kcdv1sjcq",type:"text",name:"question",value:this.state.question,id:"question",initialValue:"",init:{min_height:300,fontsize_formats:"8pt 10pt 12pt 14pt 18pt 24pt 36pt",menubar:!1,plugins:["advlist autolink lists link charmap print preview anchor","searchreplace visualblocks code fullscreen","paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat |  fontsizeselect | help"},onEditorChange:this.handleQuestionChange})]}),Object(s.jsx)(f.a,{type:"submit",children:"Update this block"})]})}}]),n}(a.Component),I=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={idea:null,error:null,text:"",comments:"",owner:"",parentBlock:""},e.getIdea=function(){var t=e.props.match.params.id;b.a.get("/api/ideas/details/".concat(t)).then((function(t){console.log("This is the response",t),e.setState({idea:t.data,text:t.data.text,comments:t.data.comments,owner:t.data.owner,parentBlock:t.data.parentBlock})})).catch((function(t){404===t.response.status&&e.setState({error:"Sorry - Idea Not found \ud83e\udd37\u200d\u2640\ufe0f \ud83e\udd37\u200d\u2642\ufe0f"})}))},e.componentDidMount=function(){e.getIdea()},e.deleteIdea=function(){var t=e.props.match.params.id;b.a.delete("/api/ideas/delete/".concat(t)).then((function(){e.props.getData()})).then((function(){e.props.history.push("/blocks/".concat(e.state.parentBlock))})).catch((function(t){404===t.response.status&&e.setState({error:"Something went wrong"})}))},e}return Object(d.a)(n,[{key:"render",value:function(){if(this.state.error)return Object(s.jsx)("h1",{children:this.state.error});if(!this.state.idea)return Object(s.jsx)("h1",{children:"Loading..."});var e=!1;return this.props.user._id===this.state.owner._id&&(e=!0),console.log("user is",this.props.user._id),console.log("owner is",this.state.owner._id),Object(s.jsxs)("div",{children:[Object(s.jsxs)("h3",{children:[Object(s.jsx)(q.a,{content:this.state.owner.username}),Object(s.jsx)(q.a,{content:this.state.text})]}),e&&Object(s.jsx)(f.a,{variant:"danger",onClick:this.deleteIdea,children:"Delete"})]})}}]),n}(a.Component),L=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={block:null,error:null,blocks:[],ideas:[]},e.getAllUserBlocks=function(){var t=e.props.user._id;console.log("DASHBOARD ID LOG",e.props.user._id),b.a.get("/api/blocks/userblocks/".concat(t)).then((function(t){console.log("Show me the response",t),e.setState({block:t.data,blocks:t.data,ideas:t.data.ideas})})).catch((function(t){console.log(t.response),404===t.response.status&&e.setState({error:"Something went wrong"})}))},e.componentDidMount=function(){e.getAllUserBlocks()},e}return Object(d.a)(n,[{key:"render",value:function(){return this.state.error?Object(s.jsx)("h1",{children:this.state.error}):this.state.blocks?Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"m-5",children:"My blocks"}),Object(s.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:this.state.blocks.map((function(e){return Object(s.jsx)(U.a,{style:{width:"18rem"},className:"m-3",children:Object(s.jsx)(U.a.Body,{children:Object(s.jsx)(U.a.Title,{className:"cormorant",style:{fontSize:30},children:Object(s.jsx)(w.b,{to:"/blocks/".concat(e._id),children:e.title})})})})}))})]}):Object(s.jsx)("h1",{children:"Loading..."})}}]),n}(a.Component),A=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={block:null,error:null,ideas:[]},e.getAllUserIdeas=function(){var t=e.props.user._id;console.log("DASHBOARD ID LOG",e.props.user._id),b.a.get("/api/ideas/userideas/".concat(t)).then((function(t){console.log("IDEAS RESPONSE",t),e.setState({block:t.data,ideas:t.data})})).catch((function(t){console.log(t.response),404===t.response.status&&e.setState({error:"Something went wrong"})}))},e.componentDidMount=function(){e.getAllUserIdeas()},e}return Object(d.a)(n,[{key:"render",value:function(){return this.state.error?Object(s.jsx)("h1",{children:this.state.error}):this.state.ideas?Object(s.jsx)("section",{className:"postit",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("h1",{className:"m-5",children:"My ideas"}),this.state.ideas.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)("div",{children:Object(s.jsx)(w.b,{to:"/ideas/".concat(e._id),children:Object(s.jsx)(q.b,{content:e.text})})})},e._id)}))]})}):Object(s.jsx)("h1",{children:"Loading..."})}}]),n}(a.Component),F=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(L,Object(o.a)({user:this.props.user,setUser:this.props.setUser},this.props)),Object(s.jsx)(A,Object(o.a)({user:this.props.user,setUser:this.props.setUser},this.props))]})}}]),n}(a.Component),G=n.p+"static/media/demo.b8c518d8.png",E=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"d-flex justify-content-between align-items-center m-5",children:[Object(s.jsxs)("div",{className:"text-left",children:[Object(s.jsx)("h1",{children:"Overcome your writer's block \u2014 together!"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"We all get stuck behind our computer way to often, staring at the blank screen for hours... if only there was a way to ask for some help, right? We got you covered! Welcome to our community of writers, where each one of us can share their own writer's block and receive support and ideas on how to unstuck ourselves."}),Object(s.jsx)("p",{children:"Receiving help is great, but offering it is even better: on this site you will find the chance to put your skills to use and help other fellow writers with their own struggles."}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{children:Object(s.jsx)(f.a,{className:"bg",type:"submit",children:Object(s.jsx)(w.b,{to:"/explore",children:"Help someone!"})})})]}),Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"typewriter",src:G,alt:"happy people around typewriter"})})]})}}]),n}(a.Component),M=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={user:e.props.user,blocks:[]},e.setUser=function(t){e.setState({user:t})},e.getData=function(){b.a.get("/api/blocks").then((function(t){e.setState({blocks:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(C,{user:this.state.user,setUser:this.setUser}),Object(s.jsx)(p.b,{exact:!0,path:"/addblock",render:function(t){return e.state.user?Object(s.jsx)(D,Object(o.a)({getData:e.getData,blocks:e.state.blocks},t)):Object(s.jsx)(p.a,{to:"/signup"})}}),Object(s.jsx)(p.b,{exact:!0,path:"/",render:function(t){return Object(s.jsx)(E,Object(o.a)({setUser:e.setUser,blocks:e.state.blocks},t))}}),Object(s.jsx)(p.b,{exact:!0,path:"/signup",render:function(t){return Object(s.jsx)(y,Object(o.a)({setUser:e.setUser},t))}}),Object(s.jsx)(p.b,{exact:!0,path:"/login",render:function(t){return Object(s.jsx)(T,Object(o.a)({setUser:e.setUser},t))}}),Object(s.jsx)(p.b,{exact:!0,path:"/explore",render:function(t){return Object(s.jsx)(B,Object(o.a)({setUser:e.setUser,blocks:e.state.blocks},t))}}),Object(s.jsx)(p.b,{exact:!0,path:"/blocks/:id",render:function(t){return Object(s.jsx)(z,Object(o.a)({setUser:e.setUser,blocks:e.state.blocks,ideas:e.state.ideas,user:e.state.user,getData:e.getData},t))}}),Object(s.jsx)(p.b,{exact:!0,path:"/blocks/:id/editblock",render:function(t){return e.state.user?Object(s.jsx)(_,Object(o.a)({setUser:e.setUser,blocks:e.state.blocks,ideas:e.state.ideas,getData:e.getData},t)):Object(s.jsx)(p.a,{to:"/signup"})}}),Object(s.jsx)(p.b,{exact:!0,path:"/ideas/:id",render:function(t){return Object(s.jsx)(I,Object(o.a)({user:e.state.user,setUser:e.setUser,getData:e.getData},t))}}),Object(s.jsx)(p.b,{exact:!0,path:"/dashboard",render:function(t){return Object(s.jsx)(F,Object(o.a)({user:e.state.user,setUser:e.setUser},t))}})]})}}]),n}(c.a.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};b.a.get("/api/auth/loggedin").then((function(e){var t=e.data;i.a.render(Object(s.jsx)(w.a,{children:Object(s.jsx)(M,{user:t})}),document.getElementById("root"))})),P()}},[[86,1,2]]]);
//# sourceMappingURL=main.42f719ae.chunk.js.map