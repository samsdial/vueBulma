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
        conectado: false,
        edad: 44,
    }
});