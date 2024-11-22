// Тоглогчийн ээлжийг хадгалах хувьсагч 1-р тоглогч 0, 2-р тоглогч 1
var activePlayer = 0;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScores = 0;
//Шоо аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн тоог авна//
//var diceNumber = Math.floor(Math.random() * 6) + 1;

//window.document.querySelector("#score-0").textContent = dice;
//document.querySelector("#score-0").innerHTML = <em>Yes!</em>;
//window.document.querySelector("#score-0").textContent = 0;
// Программ эхлэхэд бэлтгэх
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
//addEventListener("click", shooshid) 2аргумент авна Эхнийх ямар үйлдэл хийх(click), 2 дахь нь click eventeer юу хийх(shooshid)
document.querySelector(".btn-roll").addEventListener("click", function() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //alert("шоог шидлээ:" + diceNumber);
    document.querySelector(".dice").style.display = "block";
    document.querySelector(".dice").src = "dice-" + diceNumber + ".png";
});

// function shooshid() {
//     var diceNumber = Math.floor(Math.random() * 6) + 1;
// }