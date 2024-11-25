//Тоглоомонд ашиглах глобал хувьсагчдыг энд зарлав
// тоглоом дуусса нэсэхийг хадгалах төлвийн хувьсагч
var isNewGame;
// Идэвхтэй тоглогч
var activePlayer;
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScores;
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores;
// Шооны зургийг үзүүлэх элементийг DOM-оос хайж олоод энд хадгалах
var diceDom = document.querySelector(".dice");
// тоглоомыг эхлээлэх
initGame();
// тоглоомыг шинээр эхлүүлэх
function initGame() {
    //Тоглоом эхэллээ төлөв оруулах
    isNewGame = true;
    // Тоглогчийн ээлжийг хадгалах хувьсагч 1-р тоглогч 0, 2-р тоглогч 1
    activePlayer = 0;
    //Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
    scores = [0, 0];
    //Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScores = 0;
    //Шоо аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн тоог авна//
    //var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "none";
    // Программ эхлэхэд бэлтгэх
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    // тоглогчдийн нэрийг буцаан гаргах
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    // Идэвхтэй тоглогчийг гаргах
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    
}
//addEventListener("click", shooshid) 2аргумент авна Эхнийх ямар үйлдэл хийх(click), 2 дахь нь click eventeer юу хийх(shooshid)
// шоог шидэх ивэнт листнер
document.querySelector(".btn-roll").addEventListener("click", function() {
    if(isNewGame === true) {
        //1-6 хүртэлх санамсаргүй тоог гаргаж авна
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // Шооны зургийг вэб дээр гаргана
    diceDom.style.display = "block";
    // буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ
    diceDom.src = "dice-" + diceNumber + ".png";
    // Буусан тоо нь 1-ээс ялгаатай бол тоглогчийн ээлжийн оноог нэмэгдүүлнэ
    if(diceNumber !== 1){
        // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө
        roundScores = roundScores + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScores;
    }else{
       addToNewPlayer();
    }
    } else {
        alert(" Тоглоом дуусч хожигч тодорлоо. NEW GAME товчийг дарж шинээр эхлэнэ үү.");
    }
});
//Hold товч эвент листенер (дарж цуглуулсан оноогоо хадгалж авах)
document.querySelector(".btn-hold").addEventListener("click", function() {
    if(isNewGame) {
        scores[activePlayer] = scores[activePlayer] + roundScores; 
    //Дэлгэц дээр оноог нь өөрчлөнө
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    //Тоглогч хожсон эсэхийг шалгах Оноо нь 100-гаас их эсэх
    if(scores[activePlayer] >=10) {
        // Тоглоомыг дууссан төлөвт оруулна
        isNewGame = false;
        //Ялагч гэсэн текстийг нэрийнх оронд гаргах
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        //Winner-ийн дизианыг өөрчлөх
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        document.getElementById("score-0").textContent = 0;
        document.getElementById("score-1").textContent = 0;
       
    } else {
        // оноог 0 болгож тоглогчийг шилжүүл
        addToNewPlayer();
    }
    } else {
        alert(" Тоглоом дуусч хожигч тодорлоо. NEW GAME товчийг дарж шинээр эхлэнэ үү.");
    }
});

function addToNewPlayer(){
 // тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно
 roundScores = 0;
 
 document.getElementById("current-" + activePlayer).textContent = 0;
 // 1 буусан тул тоглогчийн оноог 0 болгож ээлжийг шилжүүлнэ
 activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
 // улаан цэгийг шилжүүлэхremove add
 document.querySelector(".player-0-panel").classList.toggle("active");
 document.querySelector(".player-1-panel").classList.toggle("active");
 //Шооны зургийг алга болгох
 diceDom.style.display = "none";
}
//Шинэ тоглоом эхлүүлэх товчний эвент листенер
document.querySelector(".btn-new").addEventListener("click", initGame);
