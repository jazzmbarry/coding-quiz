var startQuizEl = document.querySelector("#startQuiz")
var questionsEl = document.querySelector("#questions")
var choicesEl = document.querySelector("#choices")
var answerEl = document.querySelector("#answer")
var timerEl = document.querySelector("#timer")
var quizEl = document.querySelector("#quiz")
var timer = 75
var i = 0
var userChoice = ""
var userScore
var qAC = [
    {q: "JavaScript has a file extension of ____", a: {a:".java", b:".js", c:".xml", d:".javascript"}, c: 'b'},
    {q: "Inside which HTML element do we put JavaScript?", a: {a:"scripting", b:"script", c:"JavaScript", d:"js"}, c: "b"},
    {q: "var numbers = [1,2,3,] is an example of:", a: {a:"Array", b:"Function", c:"Object", d:"Method"} , c: "a"},
    {q: "Where is the correct place to insert JavaScript into your HTML project?", a: {a:"Beginning of the < head >", b:"Middle of the < header >", c:"End of the < body >", d:"Before the < head >"}, c: "c"},
    {q: "How can you insert a comment in JavaScript?", a: {a:"/*Comment", b:"/Comment", c:"//comment", d:" < ! - - Comment - - ! > "}, c: "c"}
]

var timedQuiz = function(){
    var countdown = function(){
        // console.log(timer)
        timer--;
        timerEl.innerHTML = timer
        if (timer === 0 || i === qAC.length){
            clearInterval(gameFlow)
            endGame();
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


var questionFlow = function(userChoice){

    // Place question to be answered
    questionsEl.textContent = qAC[i].q

    //Create Div for Answers
    var addDiv = document.createElement('div')
    addDiv.setAttribute("id", 'choices')
    quizEl.appendChild(addDiv)
    addDivEl = document.querySelector("#choices")

    // Create answer
    var choiceA = document.createElement('button')
    choiceA.setAttribute('id', 'choiceA')
    choiceA.innerHTML = qAC[i].a.a
    addDiv.appendChild(choiceA)

    // Create answer
    var choiceB = document.createElement('button')
    choiceB.setAttribute('id', 'choiceB')
    choiceB.innerHTML = qAC[i].a.b
    addDiv.appendChild(choiceB)


    // Create answer
    var choiceC = document.createElement('button')
    choiceC.setAttribute('id', 'choiceC')
    choiceC.innerHTML = qAC[i].a.c
    addDiv.appendChild(choiceC)

    // Create answer
    var choiceD = document.createElement('button')
    choiceD.setAttribute('id', 'choiceD')
    choiceD.innerHTML = qAC[i].a.d
    addDiv.appendChild(choiceD)

    // Set DOM QuerySelectors for new buttons
    var choiceAEl = document.getElementById('choiceA')
    var choiceBEl = document.getElementById('choiceB')
    var choiceCEl = document.getElementById('choiceC')
    var choiceDEl = document.getElementById('choiceD')
    
    
    console.log(choiceA.textContent)
    console.log(choiceB.textContent)
    console.log(choiceC.textContent)
    console.log(choiceD.textContent)
    

    // Listen for clicks of eack DOM Element
    choiceAEl.onclick = function(){
        console.log(this)
        userChoice = "a"
        console.log(userChoice)
        checkAnswer(userChoice)
        return userChoice
    }
    choiceBEl.onclick = function(){
        console.log(this)
        userChoice = "b"            
        console.log(userChoice)
        checkAnswer(userChoice)
        return userChoice
    }
    choiceCEl.onclick = function(){
        console.log(this)
        userChoice = "c"
        console.log(userChoice)
        checkAnswer(userChoice)
        return userChoice
    }
    choiceDEl.onclick = function(){
        console.log(this)
        userChoice = "d"
        console.log(userChoice)
        checkAnswer(userChoice)
        return userChoice
    }

}

var checkAnswer = function(userChoice){
    if (userChoice === qAC[i].c){
        console.log('Correct')
        i++
        addDivEl.remove()
        questionFlow()
    }
    else {
        console.log('Wrong')
        i++
        timer = timer - 20
        addDivEl.remove()
        questionFlow()
    }
}

var endGame = function() {
    userScore = timer

    // Use 'question to be answered' to show score
    questionsEl.textContent = "Your score is " + userScore

    //Create Div for Answers to be used for replay
    var addDiv = document.createElement('div')
    addDiv.setAttribute("id", 'choices')
    quizEl.appendChild(addDiv)
    addDivEl = document.querySelector("#choices")

    // Create answer
    var choiceA = document.createElement('button')
    choiceA.setAttribute('id', 'choiceA')
    choiceA.innerHTML = "Replay?"
    addDiv.appendChild(choiceA)
}


// Listen for click of user to Start
choicesEl.addEventListener("click", function() {
    this.remove()       
    timedQuiz()
    questionFlow();
})


