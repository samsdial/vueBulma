"use strict";var vm=new Vue({el:"main",mounted:function(){this.cargarPesonas()},data:{personas:[]},methods:{cargarPesonas:function(){var s=this;this.$http.get("https://randomuser.me/api/?results=50").then(function(t){s.personas=t.body.results})}}});
//# sourceMappingURL=custom.js.map
