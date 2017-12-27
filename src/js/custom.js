
const vm = new Vue ({
    el: 'main',
    mounted(){
        this.cargarPesonas();
    },
    data: {
        personas: [],
    },
    methods: {
        cargarPesonas(){
            this.$http.get('https://randomuser.me/api/?results=50')
                .then((respuesta) =>{
                    this.personas = respuesta.body.results;
                });
        }
    }
});