
const vm = new Vue ({
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
            'Aprender',
            'Aplicar',
            'Enseñar'
        ],
    },
    methods: {
         agregarTarea() {
             //this, hace referencia a la instacia vuet
             this.tareas.unshift(this.nuevaTarea);
             this.nuevaTarea = null;
         }
    },
});
