$("button").on("click",function(){
    $("h1").text("Chaudhary");
});


$(document).on("keypress",function(event){
    $("h1").text(event.key);
});