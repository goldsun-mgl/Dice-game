// Тоглогчийн ээлжийг хадгалах хувьсагч 1-р тоглогч 0, 2-р тоглогч 1
var activePlayer = 0;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScores = 0;
//Шоо аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн тоог авна//
var dice = Math.floor(Math.random() * 6) + 1;

//window.document.querySelector("#score-0").textContent = dice;
//document.querySelector("#score-0").innerHTML = <em>Yes!</em>;

// Программ эхлэхэд бэлтгэх
window.document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";