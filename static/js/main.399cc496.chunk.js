(this["webpackJsonpSmart-Brain-Face-Detection"]=this["webpackJsonpSmart-Brain-Face-Detection"]||[]).push([[0],{320:function(e,t,a){},322:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),s=a(41),r=a.n(s),o=(a(84),a(18)),l=a(19),c=a(21),m=a(20),u=function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),i.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},p=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("https://whispering-fjord-40915.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return i.a.createElement("div",null,i.a.createElement("article",{className:"br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center"},i.a.createElement("main",{className:"pa4 black-80"}," ",i.a.createElement("div",{className:"measure "},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f3",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f3",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",onClick:this.onSubmitSignIn,type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("register")},className:"f4 link dim black db pointer"},"Register"))))))}}]),a}(i.a.Component),d=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitSignIn=function(){fetch("https://whispering-fjord-40915.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={name:"",email:"",password:""},n}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("article",{className:"br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center"},i.a.createElement("main",{className:"pa4 black-80"}," ",i.a.createElement("div",{className:"measure "},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f3",htmlFor:"Name"},"Name"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f3",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f3",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",onClick:this.onSubmitSignIn,type:"submit",value:"Register"}))))))}}]),a}(i.a.Component),h=a(76),g=a.n(h),b=a(77),f=a.n(b),E=(a(85),function(){return i.a.createElement("div",{className:"ma4 mt0"},i.a.createElement(g.a,{className:"Tilt br2 shadow-2 pa3",options:{max:60},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner"},i.a.createElement("img",{style:{paddingTop:"20px"},alt:"logo",src:f.a}))))}),w=function(e){var t=e.name,a=e.entries;return i.a.createElement("div",null,i.a.createElement("div",{className:"white f3"},"".concat(t," ,your current entry count is...")),i.a.createElement("div",{className:"white f1"},a))},v=(a(86),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3"},"This magic brain will detect faces in your pictures,"," ",i.a.createElement("br",null),"upload an image url and give it a try !"),i.a.createElement("div",{className:"center"}," ",i.a.createElement("div",{className:"center form pa4 br3 shadow-5"},i.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),i.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a}," Detect"))))}),N=(a(87),function(e){var t=e.imgUrl,a=e.box;return i.a.createElement("div",{className:"center ma"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{alt:"",id:"inputimage",src:t,width:"500px",height:"auto"}),i.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),y=a(78),C=a.n(y),A=(a(320),{particles:{number:{value:80,density:{enable:!0,value_area:800}}}}),B={input:"",imgUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},S=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),i=Number(a.height);return console.log(n,i),{leftCol:t.left_col*n,rightCol:n-t.right_col*n,topRow:t.top_row*i,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imgUrl:e.state.input}),fetch("https://whispering-fjord-40915.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://whispering-fjord-40915.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(B):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=B,e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imgUrl,n=e.route,s=e.box,r=e.user;return i.a.createElement("div",{className:"App"},i.a.createElement(C.a,{className:"particles",params:A}),i.a.createElement(u,{onRouteChange:this.onRouteChange,isSignedIn:t}),"home"===n?i.a.createElement("div",null,i.a.createElement(E,null),i.a.createElement(w,{name:r.name,entries:r.entries}),i.a.createElement(v,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),i.a.createElement(N,{box:s,imgUrl:a})):"signin"===n?i.a.createElement(p,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(d,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(321);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t){e.exports="data:image/png;base64,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"},79:function(e,t,a){e.exports=a(322)},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.399cc496.chunk.js.map