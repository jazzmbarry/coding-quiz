var startQuizEl = document.querySelector("#startQuiz")
var questionsEl = document.querySelector("#questions")
var choicesEl = document.querySelector("#choices")
var answerEl = document.querySelector("#answer")
var timerEl = document.querySelector("#timer")
var timer = 1
var qAC = [
    {q: "JavaScript has a file extension of ____", a: {a:".java", b:".js", c:".xml", d:".javascript"}, c: 'b'},
    {q: "Inside which HTML element do we put JavaScript?", a: {a:"scripting", b:"script", c:"JavaScript", d:"js"}, c: "b"},
    {q: "var numbers = [1,2,3,] is an example of:", a: {a:"Array", b:"Function", c:"Object", d:"Method"} , c: "a"},
    {q: "Where is the correct place to insert JavaScript into your HTML project?", a: {a:"Beginning of the <head>", b:"Middle of the <header>", c:"End of the <body>", d:"Before the <head>"}, c: "c"},
    {q: "How can you insert a comment?", a: {a:"/*Comment", b:"/Comment", c:"//This comment", d:"<!-- Comment --!>"}, c: "c"}
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

var gameFlow = function(){
    
    for (var i=0; i < qAndA; i++) {
        questionsEl.replaceWith(qAC[i].q)
    }
}

var startGame = function(){
    startCountdown()
    gameFlow
}


startQuizEl.addEventListener("click", startGame()
);