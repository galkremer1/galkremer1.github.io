(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports=a.p+"static/media/65a.d92276e3.png"},117:function(e,t,a){e.exports=a.p+"static/media/youtube.c73df4b7.svg"},118:function(e,t,a){e.exports=a.p+"static/media/PayPal.a09dab88.png"},119:function(e,t,a){e.exports=a.p+"static/media/beer.bf5a084e.png"},120:function(e,t,a){e.exports=a.p+"static/media/link.0108f6c8.png"},201:function(e,t,a){e.exports=a(338)},206:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/kremerfpvlogo.b9cf8ce5.png"},338:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(16),r=a.n(o),c=(a(206),a(207),a(17)),s=a(18),i=a(20),m=a(19),u=a(21),p=a(113),E=a.n(p),b=a(5),O=a(114),d=a(115),h=a.n(d),f=function(e){var t=e.goToStep,a=e.nextStep,n=e.previousStep,o=e.calculateMotorsResourceList,r=e.CLICOMMAND,c=e.motorsList,s=e.toggleModal,i=e.step;return l.a.createElement("div",null,l.a.createElement("hr",null),1===i&&l.a.createElement("button",{disabled:!c,className:"btn btn-primary btn-block",onClick:a},"Continue"),2===i&&l.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(){o(),a()}},"Continue"),i>1&&3!==i&&l.a.createElement("button",{className:"btn btn-danger btn-block",onClick:n},"Go Back"),3===i&&l.a.createElement(l.a.Fragment,null,l.a.createElement(O.CopyToClipboard,{text:r,onCopy:function(){s()}},l.a.createElement("button",{className:"btn btn-primary btn-block"},"Copy values to clipboard")),l.a.createElement("button",{className:"btn btn-danger btn-block",onClick:function(){t(2)}},"Go Back")),l.a.createElement("hr",null))},g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a.updateMotorValues=function(e){var t=a.props.updateMotorsList,n=e.target.value.match(/[^\r\n]+/g),l=1,o={};n&&n.forEach(function(e){var t=e.indexOf("MOTOR "+l);t>-1&&(o["MOTOR"+l]=e.slice(t+8),l++)}),Object.keys(o).length>=4?t(o):t("")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b.e,{fullWidth:!0,placeholder:"Enter CLI Dump Values",multiline:!0,rows:4,value:this.state.value,onChange:this.updateMotorValues}),l.a.createElement(f,Object.assign({step:1},this.props)))}}]),t}(n.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.rotateESC,a=e.ESCAngle;return l.a.createElement("div",null,l.a.createElement("h4",null,"Choose your ESC orientation"),l.a.createElement("h4",null,"Click the ESC to rotate it"),l.a.createElement("img",{alt:"ESC",onClick:t,className:"ESC-Image",style:{transform:"rotate(".concat(a,"deg)")},src:h.a}),l.a.createElement(f,Object.assign({step:2},this.props)))}}]),t}(n.Component),M=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.motorsList,t="RESOURCE MOTOR 1 ".concat(e.MOTOR1,";\n                    RESOURCE MOTOR 2 ").concat(e.MOTOR2,";\n                    RESOURCE MOTOR 3 ").concat(e.MOTOR3,";\n                    RESOURCE MOTOR 4 ").concat(e.MOTOR4,";save;");return l.a.createElement("div",null,l.a.createElement("div",{className:"text-center"},l.a.createElement("h3",null,"Please Paste This In The CLI:"),l.a.createElement("hr",null),l.a.createElement("code",{className:"disable-select-text"},l.a.createElement("div",null,"RESOURCE MOTOR 1 ",e.MOTOR1),l.a.createElement("div",null,"RESOURCE MOTOR 2 ",e.MOTOR2),l.a.createElement("div",null,"RESOURCE MOTOR 3 ",e.MOTOR3),l.a.createElement("div",null,"RESOURCE MOTOR 4 ",e.MOTOR4),l.a.createElement("div",null,"save"))),l.a.createElement(f,Object.assign({step:3,CLICOMMAND:t},this.props)))}}]),t}(n.Component),R=a(76),v=a.n(R),y=a(22),k=a.n(y),T=a(117),w=a.n(T),S=a(118),j=a.n(S),N=a(119),L=a.n(N),I=a(120),A=a.n(I);v.a.setAppElement("#root");var x={content:{top:"30%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",textAlign:"center"}},P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={showAffiliatedLinks:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.isModalOpen,n=t.toggleModal,o=this.state.showAffiliatedLinks;return l.a.createElement(v.a,{isOpen:!a,style:x},!o&&l.a.createElement("div",null,l.a.createElement("div",null,"Paste the values in the CLI."),l.a.createElement("div",null," Happy Flying! "),l.a.createElement("div",null,"If you find this tool useful, please consider supporting me:"),l.a.createElement(b.a,null,l.a.createElement(b.b,{button:!0,onClick:function(){return window.open("https://www.youtube.com/kremerFPV?sub_confirmation=1","_blank")}},l.a.createElement(b.c,null,l.a.createElement("img",{alt:"logo",className:"modalIcons",src:k.a})),l.a.createElement(b.d,{primary:"Subscribe To My YouTube Channel"}),l.a.createElement(b.c,null,l.a.createElement("img",{alt:"YouTube",className:"modalIcons",src:w.a}))),l.a.createElement(b.b,{button:!0,onClick:function(){return window.open("https://paypal.me/galKremer","_blank")}},l.a.createElement(b.c,null,l.a.createElement("img",{alt:"Beer",className:"modalIcons",src:L.a})),l.a.createElement(b.d,{primary:"Buy me a coffee (or a beer) ;-)"}),l.a.createElement(b.c,null,l.a.createElement("img",{alt:"Paypal",className:"modalIcons",src:j.a}))),l.a.createElement(b.b,{button:!0,onClick:function(){e.setState({showAffiliatedLinks:!0})}},l.a.createElement(b.c,null,l.a.createElement("img",{alt:"Link",className:"modalIcons",src:A.a})),l.a.createElement(b.d,{primary:"Purchase your next products using my links"})))),o&&l.a.createElement("div",null,l.a.createElement(b.a,null,l.a.createElement(b.b,{button:!0,onClick:function(){return window.open("http://bit.ly/BG-Kremer-FPV","_blank")}},l.a.createElement(b.c,null,l.a.createElement("img",{alt:"logo",className:"modalIcons",src:k.a})),l.a.createElement(b.d,{primary:"Banggood"})),l.a.createElement(b.b,{button:!0,onClick:function(){return window.open("http://bit.ly/hobbycool","_blank")}},l.a.createElement(b.c,null,l.a.createElement("img",{alt:"logo",className:"modalIcons",src:k.a})),l.a.createElement(b.d,{primary:"HobbyCool"})),l.a.createElement(b.b,{button:!0,onClick:function(){return window.open("http://bit.ly/GB-Affiliate","_blank")}},l.a.createElement(b.c,null,l.a.createElement("img",{alt:"logo",className:"modalIcons",src:k.a})),l.a.createElement(b.d,{primary:"Gearbest"})),l.a.createElement(b.b,{button:!0,onClick:function(){return window.open("http://bit.ly/Heli-Nation","_blank")}},l.a.createElement(b.c,null,l.a.createElement("img",{alt:"logo",className:"modalIcons",src:k.a})),l.a.createElement(b.d,{primary:"Heli-Nation"})),l.a.createElement(b.b,{button:!0,onClick:function(){return window.open("http://www.racedayquads.com?aff=26","_blank")}},l.a.createElement(b.c,null,l.a.createElement("img",{alt:"logo",className:"modalIcons",src:k.a})),l.a.createElement(b.d,{primary:"RDQ"})),l.a.createElement(b.b,{button:!0,onClick:function(){return window.open("http://store.rotorriot.com?aff=10","_blank")}},l.a.createElement(b.c,null,l.a.createElement("img",{alt:"logo",className:"modalIcons",src:k.a})),l.a.createElement(b.d,{primary:"RotorRiot"})))),l.a.createElement("button",{className:"btn btn-primary btn-block",onClick:n},"Close"))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={timeout:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){var e=this,t=this.state.timeout;this.props.isActive&&!t?this.setState({timeout:setTimeout(function(){e.props.nextStep()},1e3)}):!this.props.isActive&&t&&(clearTimeout(t),this.setState({timeout:null}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",{className:"text-center"},"Calculating..."))}}]),t}(n.Component),B={0:["MOTOR1","MOTOR2","MOTOR3","MOTOR4"],90:["MOTOR2","MOTOR4","MOTOR1","MOTOR3"],180:["MOTOR4","MOTOR3","MOTOR2","MOTOR1"],270:["MOTOR3","MOTOR1","MOTOR4","MOTOR2"]},U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).rotateESC=function(){var e=a.state.ESCAngle;a.setState({ESCAngle:(e+90)%360})},a.toggleModal=function(){var e=a.state.isModalOpen;a.setState({isModalOpen:!e})},a.setInstance=function(e){return a.setState({SW:e})},a.updateMotorsList=function(e){a.setState({motorsList:e}),console.log(e)},a.calculateMotorsResourceList=function(){var e=a.state,t=e.motorsList,n=e.ESCAngle,l={};B[n].forEach(function(e,a){l["MOTOR"+(a+1)]=t[e]}),a.setState({newMotorsResourceList:l})},a.state={form:{},ESCAngle:0,motorsList:"",newMotorsResourceList:{},isModalOpen:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.ESCAngle,a=e.newMotorsResourceList,n=e.motorsList,o=e.isModalOpen;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{textAlign:"center"}},l.a.createElement("img",{alt:"logo",className:"logo",src:k.a,onClick:function(){return window.open("http://youtube.com/kremerFPV","_blank")}}),l.a.createElement("h3",null,"Betaflight Motor Remap Helper"),l.a.createElement("div",{className:"jumbotron"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-3"},l.a.createElement(E.a,{onStepChange:this.onStepChange,isHashEnabled:!1,instance:this.setInstance},l.a.createElement(g,{hashKey:"getResources",motorsList:n,updateMotorsList:this.updateMotorsList}),l.a.createElement(C,{rotateESC:this.rotateESC,ESCAngle:t,calculateMotorsResourceList:this.calculateMotorsResourceList}),l.a.createElement(_,null),l.a.createElement(M,{motorsList:a,toggleModal:this.toggleModal})))))),l.a.createElement(P,{isModalOpen:o,toggleModal:this.toggleModal}))}}]),t}(n.Component);r.a.render(l.a.createElement(U,null),document.getElementById("root"))}},[[201,1,2]]]);
//# sourceMappingURL=main.85945890.chunk.js.map