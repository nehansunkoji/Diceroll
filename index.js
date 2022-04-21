var n1=Math.floor(Math.random()*6)+1;
var imagerandom="dice"+n1+".png";
var imagesource="images/"+imagerandom;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imagesource);
var n2=Math.floor(Math.random()*6)+1;
var imagerandom="dice"+n2+".png";
var imagesource="images/"+imagerandom;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",imagesource);
if(n1>n2){
    document.querySelector("h1").textContent="Player 1 wins 🚩";
}
if(n1===n2){
    document.querySelector("h1").textContent="Draw";
}
if(n1<n2){
    document.querySelector("h1").textContent="Player 2 wins 🚩";
}