(this.webpackJsonpanimal_age_calculator=this.webpackJsonpanimal_age_calculator||[]).push([[0],{11:function(e,a,t){e.exports=t(19)},17:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(4),r=t.n(c),s=t(5),i=t(2),m=t.n(i),u=t(6),o=t(7),h=t(8),g=t(1),p=t(10),d=t(9),v=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={name:"\ud83e\udd70",birth:"",species:"cat",humanAge:"___",lifeStage:"",lifeStageNote:""},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(h.a)(t,[{key:"setLifeStage",value:function(){var e=this.state.humanAge,a="",t="";e<10?(a="\ubf40\uc9dd\ubf40\uc9dd \uadc0\uc5ec\uc6b4 \uc720\ub144\uae30\ud83d\udc23",t="\ub2e4\uc591\ud55c \uacbd\ud5d8\uc744 \ud1b5\ud574 \uc138\uc0c1\uc744 \ubc30\uc6b0\ub294 \uc2dc\uae30!"):e<20?(a="\uc9c8\ud48d\ub178\ub3c4 \uccad\uc18c\ub144\uae30\ud83d\udc1d",t="\ub118\uce58\ub294 \uc5d0\ub108\uc9c0\ub97c \ud574\uc18c\ud574\uc8fc\uc138\uc694!"):e<40?(a="\ubc18\uc9dd\ubc18\uc9dd \uc131\ub144\uae30\ud83c\udf1f",t="\ud6cc\uca4d \uc131\uc219\ud574\uc9c0\uace0 \ub3c5\ub9bd\uc2ec\uc774 \ub192\uc544\uc838\uc694~"):e<60?(a="\ucc28\ubd84\ud568\uc774 \ube5b\ub098\ub294 \uc911\ub144\uae30\u263a\ufe0f",t="\ube44\ub9cc\uc744 \uc8fc\uc758\ud574\uc57c\ud574\uc694!"):e<80?(a="\uc624\ub798\uc624\ub798 \ud568\uaed8 \ud560 \ub178\ub144\uae30\ud83e\udd7a\ud83d\udc96",t="\uac74\uac15\uac80\uc9c4\uc744 \uaf2d\uaf2d \ubc1b\uc544\uc8fc\uc138\uc694~"):(a="\ub9e4\uc77c\ub9e4\uc77c \uace0\ub9c8\uc6b4 \uace0\ub839\uae30\ud83d\ude18",t="\ubc18\ub824\ub3d9\ubb3c\uc744 \uc138\uc2ec\ud558\uac8c \ubcf4\uc0b4\ud3b4\uc8fc\uc138\uc694!"),this.setState({lifeStage:a,lifeStageNote:t})}},{key:"convertAnimalAgeDay",value:function(){var e=this.state.birth,a=new Date(e),t=new Date,n=Math.round((t.getTime()-a.getTime())/1e3/60/60/24+1);return console.log("animalageday",{animalAgeDay:n}),n}},{key:"convertHumanAge",value:function(){var e=this.state.species,a=this.convertAnimalAgeDay(),t="";return console.log("AnimalAgeDay is ",{animalAgeDay:a}),t="cat"===e?a<526?.0396*a+.9841:.011*a+16:"dogS"===e?a<418?.0493*a:.011*a+16:"dogM"===e?a<461?.0438*a:.0125*a+14.409:"dogL"===e?a<467?.0411*a:.0148*a+12.27:a<354?.0384*a:.0198*a+6.575,this.setState({humanAge:Math.floor(t)}),t}},{key:"handleSubmit",value:function(){var e=Object(u.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,this.convertHumanAge();case 3:return e.next=5,this.setLifeStage();case 5:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){e.preventDefault(),this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.name,a=this.state.humanAge,t=this.state.lifeStage,n=this.state.lifeStageNote;return l.a.createElement("section",{className:"hero"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",{className:"title"},"\ubc18\ub824\ub3d9\ubb3c \uc0dd\uc560\uc8fc\uae30 \uacc4\uc0b0\uae30"),l.a.createElement("p",{className:"subtitle"},"\uc6b0\ub9ac \uc9d1 \ubc18\ub824\ub3d9\ubb3c, \uc0ac\ub78c\ub098\uc774\ub85c\ub294 \uba87\uc0b4\uc77c\uae4c\uc694?",l.a.createElement("br",null),"\ubc18\ub824\ub3d9\ubb3c \uc815\ubcf4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694!"),l.a.createElement("p",{className:"footer"},"\ubc18\ub824\ub3d9\ubb3c \uc0dd\uc560\uc8fc\uae30 \uacc4\uc0b0\uae30\ub294"," ",l.a.createElement("a",{href:"https://ipetchu.co.kr/"},"\ud3ab\uce04"),"\uc758 \uacc4\uc0b0\uc2dd\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4.")),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"form_column"},l.a.createElement("label",{className:"label"},"\uc774\ub984"),l.a.createElement("div",null,l.a.createElement("input",{className:"input",type:"text",name:"name",onChange:this.handleChange,required:!0}))),l.a.createElement("div",{className:"form_column"},l.a.createElement("label",{className:"label"},"\uc0dd\ub144\uc6d4\uc77c"),l.a.createElement("input",{className:"input",type:"date",name:"birth",onChange:this.handleChange,required:!0})),l.a.createElement("div",{className:"form_column"},l.a.createElement("span",{className:"label"},"\ub3d9\ubb3c\uc885\ub958"),l.a.createElement("select",{className:"input",name:"species",value:this.state.value,onChange:this.handleChange},l.a.createElement("option",{value:"cat"},"\uace0\uc591\uc774"),l.a.createElement("option",{value:"dogS"},"\uc18c\ud615\uacac(\uc131\uacac\uccb4\uc911 9kg \uc774\ud558)"),l.a.createElement("option",{value:"dogM"},"\uc911\ud615\uacac(\uc131\uacac\uccb4\uc911 9-22kg)"),l.a.createElement("option",{value:"dogL"},"\ub300\ud615\uacac(\uc131\uacac\uccb4\uc911 23-40kg)"),l.a.createElement("option",{value:"dogXL"},"\ucd08\ub300\ud615\uacac(\uc131\uacac\uccb4\uc911 40kg\uc774\uc0c1)")))),l.a.createElement("div",null,l.a.createElement("input",{className:"inputBtn",type:"submit",value:"\uacc4\uc0b0\ud558\uae30\ud83d\ude0e"}))),l.a.createElement("div",{className:"result"},l.a.createElement("p",{className:"name"},e,"\uc758 \ub098\uc774\ub97c \uc0ac\ub78c\ub098\uc774\ub85c \ubc14\uafb8\uba74"),l.a.createElement("p",{className:"humanAge"},a,"\uc138"),l.a.createElement("p",{className:"lifeStage"},t),l.a.createElement("p",{className:"lifeStageNote"},n))))}}]),t}(l.a.Component);t(17),t(18);var f=function(){return l.a.createElement(v,null)};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.cdf6d8fb.chunk.js.map