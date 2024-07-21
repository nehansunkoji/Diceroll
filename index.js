var randomNumber1 = Math.floor(Math.random()*6)+1;
var sourceImg = "./images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",sourceImg);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var sourceImg2 = "./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",sourceImg2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}