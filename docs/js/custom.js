"use strict";Vue.component("elegir-ganador",{props:["listado"],methods:{elegirGanador:function(){var a=this.participantes.length,t=Math.floor(Math.random()*a);this.ganador=this.participantes[t-1]}},data:function(){return{ganador:!1,participantes:this.listado}}});var vm=new Vue({el:"main",data:{personas:["juan","alicia","pedro","javier"]}});
//# sourceMappingURL=custom.js.map
