
const questions = [
    {
        question: "What does JS stand for?",
        answers: ["JavaScript", "JavaStyle", "JustScript", "Java Source"],
        correct: 0
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: ["//", "#", "<!--", "/*"],
        correct: 0
    },
    {
        question: "What is the correct way to create a function in JavaScript?",
        answers: ["function myFunction[] {}", "function myFunction() {}", "myFunction() {}", "function:myFunction()"],
        correct: 1
    },
    {
        question: "Which of the following is a JavaScript data type?",
        answers: ["String", "Boolean", "Undefined", "All of the above"],
        correct: 3
    },
    {
        question: "What is the output of 'typeof NaN'?",
        answers: ["number", "NaN", "undefined", "error"],
        correct: 0
    },
    {
        question: "Which method is used to parse a string to an integer in JavaScript?",
        answers: ["parseInt()", "parseString()", "Integer.parse()", "Number.parseInt()"],
        correct: 0
    },
    {
        question: "What will the following code output: console.log(0 == '0');?",
        answers: ["true", "false", "undefined", "error"],
        correct: 0
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: ["var", "let", "const", "All of the above"],
        correct: 3
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        answers: ["The global object", "The current object", "The parent object", "The window object"],
        correct: 1
    },
    {
        question: "Which of the following is used to create a new array in JavaScript?",
        answers: ["new Array()", "[]", "Array.create()", "Both A and B"],
        correct: 3
    },
    {
        question: "What will be the output of 'console.log(typeof null)'?",
        answers: ["object", "null", "undefined", "error"],
        correct: 0
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: ["=", "==", "===", ":="],
        correct: 0
    },
    {
        question: "What will 'console.log(2 + '2')' output?",
        answers: ["4", "22", "NaN", "undefined"],
        correct: 1
    },
    {
        question: "Which method can be used to remove the last element from an array?",
        answers: ["pop()", "push()", "shift()", "unshift()"],
        correct: 0
    },
    {
        question: "What does JSON stand for?",
        answers: ["JavaScript Object Notation", "Java Source Object Notation", "JavaScript Online Notation", "Java Syntax Object Notation"],
        correct: 0
    },
    {
        question: "Which of the following is a way to create an object in JavaScript?",
        answers: ["var obj = {}", "var obj = new Object();", "Both A and B", "None of the above"],
        correct: 2
    },
    {
        question: "What is the purpose of the 'use strict' directive?",
        answers: ["To enable strict mode", "To disable features", "To improve performance", "None of the above"],
        correct: 0
    },
    {
        question: "Which function is used to serialize a JavaScript object into a JSON string?",
        answers: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "None of the above"],
        correct: 0
    },
    {
        question: "What will be the output of 'console.log(1 == '1')'?",
        answers: ["true", "false", "undefined", "error"],
        correct: 0
    },
    {
        question: "How do you declare a constant in JavaScript?",
        answers: ["const myVar;", "constant myVar;", "let myVar;", "var myVar;"],
        correct: 0
    },
    {
        question: "What does the Array.isArray() method do?",
        answers: ["Checks if a variable is an array", "Creates a new array", "Converts a string to an array", "None of the above"],
        correct: 0
    },
    {
        question: "Which of the following is NOT a primitive data type in JavaScript?",
        answers: ["String", "Number", "Object", "Boolean"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.btn');
const nextButton = document.getElementById('next-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.forEach((button, index) => {
        button.innerText = question.answers[index];
        button.classList.remove('correct', 'wrong');
        button.disabled = false; 
    });
}

function selectAnswer(index) {
    const question = questions[currentQuestionIndex];
    if (index === question.correct) {
        score++;
        answerButtons[index].classList.add('correct');
    } else {
        answerButtons[index].classList.add('wrong');
        answerButtons[question.correct].classList.add('correct');
    }
    answerButtons.forEach(button => button.disabled = true);
    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.innerText = `You scored ${score} out of ${questions.length}`;
    answerButtons.forEach(button => button.classList.add('hide'));
    nextButton.classList.add('hide');
}

startQuiz();

function changeColor(button) {
    var buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(btn) {
        btn.style.backgroundColor = '';
    });
    
    
    button.style.backgroundColor = '#222';
    // button.style.color = 'white';
    

}

