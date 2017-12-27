"use strict";var vm=new Vue({el:"main",mounted:function(){this.cargarPersonas()},data:{personas:[]},methods:{cargarPersonas:function(){var s=this;axios.get("https://randomuser.me/api/?results=5000").then(function(a){s.personas=a.data.results})}}});
//# sourceMappingURL=custom.js.map
