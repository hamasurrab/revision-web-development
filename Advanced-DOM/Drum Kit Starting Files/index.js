// function handleClick()
// {
//     alert("i got click");
// }
// document.querySelector("button").addEventListener("click", handleClick);
// ________________________________________________________________________________________________



// document.querySelector(".set").addEventListener("click",function(){
//     alert("i got clicked!");
// });

// __________________________________________________________________________________________



var numberOfDrum=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonInnerHtml=this.innerHTML;
       makeSound(buttonInnerHtml); 
       buttonAnimation(buttonInnerHtml);

    });

}

    document.addEventListener("keypress",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });

    function makeSound(key) {
        

        switch (key) {
            case "w":
                var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
                break;
        case "a" :
            var audio=new Audio("sounds/tom-2.mp3");
        audio.play(); 
        case "s" :
            var audio=new Audio("sounds/tom-3.mp3");
        audio.play(); 
        case "d" :
            var audio=new Audio("sounds/tom-4.mp3");
        audio.play(); 
        case "j" :
            var audio=new Audio("sounds/crash.mp3");
        audio.play(); 
        case "k" :
            var audio=new Audio("sounds/kick-bass.mp3");
        audio.play(); 
        case "l" :
            var audio=new Audio("sounds/snare.mp3");
        audio.play(); 
            break;


        default: console.log(key);

        
    }


    }
    

    function buttonAnimation(currentKey){
        var activeButton=document.querySelector("."+currentKey);
        activeButton.classList.add("pressed");
    
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },100);
    
    }




