const quizData = [
   // Question No 1:
    {
        question : "Inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<scripting>",
        c: "<script>",
        d: "<javascript>",
        correct: "c"
    },
    // Question No 2:
    {
        question : "Where is the correct place to insert a JavaScript?",
        a: "Both the <head> section and the <body> section are correct",
        b: "The <body> section",
        c: "The <head> section",
        d: "Both b & c",
        correct: "a"
    },
    // Question No 3:
    {
        question : "What is the correct syntax for referring to an external script called (xxx.js)? ",
        a: "<script class= xxx.js >",
        b: "<script href= xxx.js >",
        c: "<script name= xxx.js >",
        d: "<script src= xxx.js >",
        correct: "d"
    },
    // Question No 4:
    {
        question : "The external JavaScript file must contain the <script> tag.",
        a: "True",
        b: "False",
        c: "Both",
        d: "None",
        correct: "b"
    },
    // Question No 5:
    {
        question : "How do you create a function in JavaScript?",
        a: "function = myFunction()",
        b: "function:myFunction()",
        c: "function myFunction()",
        d: "function.myFunction()",
        correct: "c"
    },
    // Question No 6:
    {
        question : "How to write an IF statement in JavaScript?",
        a: "if i == 5 then",
        b: "if (i == 5)",
        c: "if i == 5 then",
        d: "if i = 5 then",
        correct: "b"
    },
    // Question No 7:
    {
        question : "How to write an IF statement for executing some code if (i) is NOT equal to 5?",
        a: "if i <> 5  ",
        b: "if (i <> 5)",
        c: "if i =! 5 then",
        d: "if (i != 5)",   
        correct: "d"
    },
    // Question No 8:
    {
        question : "How do you round the number 7.25, to the nearest integer?",
        a: "Math.round(7.25)",
        b: "Math.rnd(7.25)",
        c: "rnd(7.25)",
        d: "round(7.25)",
        correct: "a"
    },
    // Question No 9:
    {
        question : "How do you find the number with the highest value of x and y?",
        a: "ceil(x, y)",
        b: "top(x, y)",
        c: "Math.ceil(x, y)",
        d: "Math.max(x, y)",
        correct: "d"
    },
    // Question No 10:
    {
        question : "Which operator is used to assign a value to a variable?",
        a: "X",
        b: "=",
        c: "*",
        d: "-",
        correct: "b"
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

            // Functionality
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Your Score ${score}/${quizData.length}</h2>
           <button onclick="location.reload()">Reset Quizz</button>
           `
       }
    }
})
    
