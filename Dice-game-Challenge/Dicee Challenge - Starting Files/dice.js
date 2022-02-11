var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;


var randomImage="images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImage);


var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);


if(randomImage2>randomNumber1){
    document.querySelector("h1").innerHTML="player2 wins";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}
