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