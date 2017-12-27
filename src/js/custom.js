Vue.component('elegir-ganador',{
    props: ['listado'],
    methods:{
        elegirGanador(){
            let cantidad = this.participantes.length;
            let indice = Math.floor((Math.random() * cantidad));
            this.ganador = this.participantes[indice - 1];
        }
    },
    data() {
        return {
            ganador: false,
            participantes: this.listado
        }
    },
});
const vm = new Vue ({
    el: 'main',
    data: {
        personas: [
            'juan',
            'alicia',
            'pedro',
            'javier'
        ]
    }
});