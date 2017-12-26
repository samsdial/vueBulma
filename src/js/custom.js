$(document).ready(function(){
    $(".getcontent").click(getContent);
    $(".loadhtml").click(loadHTML);
});
function getContent(){
    $('.notification').load("one.html");
}
function loadHTML(){
    $('.notification').load("two.html");
}
/*
/// Vanilla Js
const input = document.querySelector('input');
const h2 = document.querySelector('h2.item');
// events listerner js
input.addEventListener('keyup', function (){
    h2.innerHTML = input.value;
});
// ES6
input.addEventListener('keyup', () =>h2.innerHTML = input.value);
*/
const vm = new Vue ({
    el: 'main',
    data: {
        nuevaTarea: null,
        mensaje: 'Hola mundo',
        tareas: [
            {
                titulo:'Aprender Vue.js',
                completado: false,
                prioridad: true,
                antiguedad: 1
            },
            {
                titulo:'Aprender Js ES6',
                completado: false,
                prioridad: false,
                antiguedad: 22
            },
            {
                titulo:'Publicar Vue.js',
                completado: false,
                prioridad: true,
                antiguedad: 12
            },
        ],
        busqueda: '',
        minimo: 5,
        juegos: [

            {
                titulo: 'Mario Bros',
                genero: 'Batalla',
                puntuacion: 9
            },
            {
                titulo: 'Civilization',
                genero: 'Estrategia',
                puntuacion: 10
            },
            {
                titulo: 'Resident Evil 7',
                genero: 'Survial Horror',
                puntuacion: 7
            },
        ]
    },
    methods:{
        agregarTarea(){
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        },
        completarTarea(){
            console.log(tareas);
        }

    },
    computed: {
        mensajeaAlReves(){
            return this.mensaje.split('').reverse().join('');
        },
        tareasConPrioridad(){
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        tareasPorAntiguedad(){
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        },
        mejoresJuegos(){
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
        },
        buscarJuego(){
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
        }

    }
});