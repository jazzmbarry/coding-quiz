var startQuizEl = document.querySelector("#startQuiz")
var questionsEl = document.querySelector("#questions")
var choicesEl = document.querySelector("#choices")
var answerEl = document.querySelector("#answer")
var timerEl = document.querySelector("#timer")
var i = 0
var timer = 75
var qAC = [
    {q: "JavaScript has a file extension of ____", a: {a:".java", b:".js", c:".xml", d:".javascript"}, c: 'b'},
    {q: "Inside which HTML element do we put JavaScript?", a: {a:"scripting", b:"script", c:"JavaScript", d:"js"}, c: "b"},
    {q: "var numbers = [1,2,3,] is an example of:", a: {a:"Array", b:"Function", c:"Object", d:"Method"} , c: "a"},
    {q: "Where is the correct place to insert JavaScript into your HTML project?", a: {a:"Beginning of the < head >", b:"Middle of the < header >", c:"End of the < body >", d:"Before the < head >"}, c: "c"},
    {q: "How can you insert a comment?", a: {a:"/*Comment", b:"/Comment", c:"//comment", d:" < ! - - Comment - - ! > "}, c: "c"}
]

var timedQuiz = function(){
    var countdown = function(){
        console.log(timer)
        timer--;
        timerEl.innerHTML = timer
        if (timer === 0){
            clearInterval(gameFlow)
        }
        else {
            gameFlow();
        }
    
    }
    var gameFlow = function(){
        setTimeout(countdown, 1000);
    };
    gameFlow();
}


var questionFlow = function(choiceAEl, choiceBEl, choiceCEl, choiceDEl){

    for (i; i < qAC.length; i++) {
        if (i!==0){
            choiceAEl.remove()
            choiceBEl.remove()
            choiceCEl.remove()
            choiceDEl.remove()
        }
        questionsEl.textContent = qAC[i].q
        var choiceA = document.createElement('button')
        choiceA.setAttribute('id', 'choiceA')
        choiceA.innerHTML = qAC[i].a.a
        console.log(choiceA.textContent)
        choicesEl.appendChild(choiceA)
        var choiceB = document.createElement('button')
        choiceB.setAttribute('id', 'choiceB')
        choiceB.innerHTML = qAC[i].a.b
        console.log(choiceB.textContent)
        choicesEl.appendChild(choiceB)
        var choiceC = document.createElement('button')
        choiceC.setAttribute('id', 'choiceC')
        choiceC.innerHTML = qAC[i].a.c
        console.log(choiceC.textContent)
        choicesEl.appendChild(choiceC)
        var choiceD = document.createElement('button')
        choiceD.setAttribute('id', 'choiceD')
        choiceD.innerHTML = qAC[i].a.d
        console.log(choiceD.textContent)
        choicesEl.appendChild(choiceD)
        
        var choiceAEl = document.querySelector("#choiceA")
        var choiceBEl = document.querySelector("#choiceB")
        var choiceCEl = document.querySelector("#choiceC")
        var choiceDEl = document.querySelector("#choiceD")

        console.log(choiceAEl, choiceBEl, choiceCEl, choiceDEl)
        break;
    }
}

var loadedQuestion = function(choiceAEl, choiceBEl, choiceCEl, choiceDEl){
    var userInput = ""
    while (userInput === ""){
        choiceAEl.addEventListener("click", function(){
            console.log(this)
            userInput = "a"
        })
        choiceBEl.addEventListener("click", function(){
            console.log(this)
            userInput = "b"
        })
        choiceCEl.addEventListener("click", function(){
            console.log(this)
            userInput = "c"
        })
        choiceDEl.addEventListener("click", function(){
            console.log(this)
            userInput = "d"
    })
}
    if (userInput === ""){
        console.log("Error")
    }
    else if (userInput === qAC[i].c) {
        console.log("Correct")
    }
    else if (userInput !== qAC[i].c) {
        console.log("Wrong")
    }
}


startQuizEl.addEventListener("click", function() {
    this.remove()       
    timedQuiz()
    questionFlow();
});