
const vm = new Vue ({
    el: 'main',
    mounted(){
      this.cargarPersonas();
    },
    data: {
        personas: []
    },
    methods:{
        cargarPersonas(){
            //console.log('vue');
            axios.get('https://randomuser.me/api/?results=5000')
                .then((respuesta) =>{
                    //console.log(respuesta);
                    this.personas = respuesta.data.results;
                });
        }
    }
});