var startQuizEl = document.querySelector("#startQuiz")
var questionsEl = document.querySelector("#questions")
var choicesEl = document.querySelector("#choices")
var answerEl = document.querySelector("#answer")
var timerEl = document.querySelector("#timer")
var quizEl = document.querySelector("#quiz")
var timer = 75
var i = 0
var qAC = [
    {q: "JavaScript has a file extension of ____", a: {a:".java", b:".js", c:".xml", d:".javascript"}, c: 'b'},
    {q: "Inside which HTML element do we put JavaScript?", a: {a:"scripting", b:"script", c:"JavaScript", d:"js"}, c: "b"},
    {q: "var numbers = [1,2,3,] is an example of:", a: {a:"Array", b:"Function", c:"Object", d:"Method"} , c: "a"},
    {q: "Where is the correct place to insert JavaScript into your HTML project?", a: {a:"Beginning of the < head >", b:"Middle of the < header >", c:"End of the < body >", d:"Before the < head >"}, c: "c"},
    {q: "How can you insert a comment in JavaScript?", a: {a:"/*Comment", b:"/Comment", c:"//comment", d:" < ! - - Comment - - ! > "}, c: "c"}
]

var timedQuiz = function(){
    var countdown = function(){
        console.log(timer)
        timer--;
        timerEl.innerHTML = timer
        if (timer === 0){
            clearInterval(gameFlow)
        }
        else if (timer === 75) {
            gameFlow();
        }
    
    }
    var gameFlow = function(){
        setTimeout(countdown, 1000);
    };
    gameFlow();
}


var questionFlow = function(choiceAEl, choiceBEl, choiceCEl, choiceDEl){
    var userInput = ""

        //Create Div for Answers
        var addDiv = document.createElement('div')
        addDiv.setAttribute("id", 'choices')
        quizEl.appendChild(addDiv)

        // Place question to be answered
        questionsEl.textContent = qAC[i].q

        // Create answer buttons
        var choiceA = document.createElement('button')
        choiceA.setAttribute('id', 'choices')
        choiceA.innerHTML = qAC[i].a.a
        console.log(choiceA.textContent)
        addDiv.appendChild(choiceA)
        var choiceB = document.createElement('button')
        choiceB.setAttribute('id', 'choices')
        choiceB.innerHTML = qAC[i].a.b
        console.log(choiceB.textContent)
        addDiv.appendChild(choiceB)
        var choiceC = document.createElement('button')
        choiceC.setAttribute('id', 'choices')
        choiceC.innerHTML = qAC[i].a.c
        console.log(choiceC.textContent)
        addDiv.appendChild(choiceC)
        var choiceD = document.createElement('button')
        choiceD.setAttribute('id', 'choices')
        choiceD.innerHTML = qAC[i].a.d
        console.log(choiceD.textContent)
        addDiv.appendChild(choiceD)
        
        //Increase i
        console.log(i)
        i++;
        console.log(i)

        
    }


// Listen for click of user
choicesEl.addEventListener("click", function() {
    this.remove()       
    timedQuiz()
    questionFlow();
})


