var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

var randomDiceImage = "dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);

var randomDiceImage2 = "dice"+randomNumber2+".png";
var image1 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);


// Showing results on the page.

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩Player 1 Win!";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Win! 🚩";
} else {
    document.querySelector("h1").textContent = "Draw!";
}
