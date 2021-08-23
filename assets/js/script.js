var startQuizEl = document.querySelector("#startQuiz")
var questionsEl = document.querySelector("#questions")
var choicesEl = document.querySelector("#choices")
var answerEl = document.querySelector("#answer")
var timerEl = document.querySelector("#timer")
var timerLineEl = document.querySelector('#timerLine')
var quizEl = document.querySelector("#quiz")
var viewHighScoreEl = document.querySelector("#highScores")
var highScoreButtonEl = document.querySelector('#highScoreButton')
var bodyEl = document.getElementById('body')
var timer = 75
var i = 0
var userChoice = ""
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

    // Listen for clicks of each DOM Element
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
        answerEl.innerHTML = "CORRECT"
        i++
        addDivEl.remove()
        setTimeout(function(){
            answerEl.innerHTML = ""
        }, 1000)
        if (i !== qAC.length){
            questionFlow()
        }
        
    }
    else {
        answerEl.innerHTML = "WRONG"
        i++
        timer = timer - 20
        addDivEl.remove()
        setTimeout(function(){
            answerEl.innerHTML = ""
        }, 1000)
        if (i !== qAC.length){
            questionFlow()
        }
    }
}

var endGame = function() {
    var userScore = timer
    if (userScore < 0){
        userScore = 0
    }

    // Use 'question to be answered' to show score
    questionsEl.textContent = "Your score is " + userScore

    //Create form to be used for Initials container
    var addDiv = document.createElement('form')
    addDiv.setAttribute("id", 'scores')
    addDiv.innerHTML = "Enter your Initials  "
    quizEl.appendChild(addDiv)
    addDivEl = document.querySelector("#choices")

    // Create input to be used for form
    var choiceA = document.createElement('input')
    choiceA.setAttribute('id', 'initials')
    choiceA.setAttribute('placeholder', "Your Initials Here")
    addDiv.appendChild(choiceA)
    
    // Submit Button 
    var submit = document.createElement('button')
    submit.setAttribute('id', 'submit')
    submit.setAttribute('type', 'submit')
    submit.innerHTML = "Submit & Retry"
    addDiv.appendChild(submit)
    
    // DOM Element for Submit Button
    var submitEl = document.getElementById('submit')

    submitEl.onclick = function(){
        var initialsInput = document.getElementById('initials').value
        var highScore = [
            {initials: initialsInput,
            score: userScore
            }
        ]
    localStorage.setItem("highScore", JSON.stringify(highScore))
    }
}


// Listen for click of user to Start
choicesEl.addEventListener("click", function(event) {
    event.preventDefault();
    this.remove()       
    timedQuiz()
    questionFlow();
})

viewHighScoreEl.addEventListener("click", function(event) {
    event.preventDefault();
    answerEl.remove();
    timerEl.remove();
    timerLineEl.remove();
    choicesEl.remove();

    var highScore = localStorage.getItem("highScore")
    var parseHighScore = JSON.parse(highScore) 
    if (parseHighScore === "" || parseHighScore === null || parseHighScore === "" || parseHighScore === null){
        questionsEl.textContent = "There is no High Score"
    }
    else {
        questionsEl.textContent = parseHighScore[0].initials + " has a score of " + parseHighScore[0].score
    }
    highScoreButtonEl.textContent = "Go Back"
    
    // create Erase high score button
    var erase = document.createElement('button')
    erase.setAttribute('id', 'erase')
    erase.innerHTML = "Erase High Score"
    bodyEl.appendChild(erase)

    var eraseEl = document.querySelector('#erase')

    
    
    highScoreButtonEl.onclick = function(){
        location.reload();
    }

    eraseEl.onclick = function(){
        localStorage.clear();
        questionsEl.textContent = "There is no High Score"
    }
})