var startQuizEl = document.querySelector("#startQuiz")
var questionsEl = document.querySelector("#questions")
var choicesEl = document.querySelector("#choices")
var answerEl = document.querySelector("#answer")
var timerEl = document.querySelector("#timer")
var timer = 75
var qAndA = [
    {q: "This is the first quesiton", a: "This is the first answer"},
    {q: "This is the second quesiton", a: "This is the second answer"},
    {q: "This is the third quesiton", a: "This is the third answer"},
    {q: "This is the fourth quesiton", a: "This is the fourth answer"},
    {q: "This is the fifth quesiton", a: "This is the fifth answer"}
]

var countdown = function(){
    console.log(timer)
    timer--;
    timerEl.innerHTML = timer
    if (timer === 0){
        clearInterval(startCountdown)
    }
    else {
        startCountdown();
    }

}

var startCountdown = function(){
    setTimeout(countdown, 1000)
}

startQuizEl.addEventListener("click", function() {
    if (timer !== 0){
        startCountdown();
    }

})