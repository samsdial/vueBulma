Vue.component('autor',{
    props: ['nombre', 'edad'],
   template: `<h3>{{ nombre }}</h3>`,
});
const vm = new Vue ({
    el: 'main',
    data: {
        autor: 'Juan Andres',
    }
});
