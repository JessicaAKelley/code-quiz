// Question function to prompt quiz questions
var questions = [
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: "function = myFunction()", correct: true },
            { text: "function:myFunction", correct: false },
            { text: "function myFunction", correct: false },
            { text: "function-myFunction()", correct: false }
        ]
    },
    { 
        question: "Which of the following is NOT a JavaScript data type?", 
        answers: [
            { text: "Float", correct: false },
            { text: "Undefined", correct: false },
            { text: "Number", correct: false },
            { text: "Float", correct: true }
        ]
    },
    { 
        question: "Which of the following function of Array object calls a function for each element in the array?", 
        answers: [
            { text: "concat()", correct: false },
            { text: "filter()", correct: false },
            { text: "forEach()", correct: true },
            { text: "split()", correct: false }
        ]
    },
    { 
        question: "Which symbol is used to write comments in JavaScript?", 
        answers: [
            { text: "/*", correct: false },
            { text: "\\", correct: false },
            { text: "||", correct: false },
            { text: "//", correct: true }
        ]
    },
    { 
        question: "Inside which HTML element is JavaScript inserted?",
        answers: [
            { text: "<meta>", correct: false },
            { text: "<script>", correct: true },
            { text: "<style>", correct: false },
            { text: "<head>", correct: false }
        ]
    },
];