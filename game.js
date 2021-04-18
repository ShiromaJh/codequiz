const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question : "What Is 2+2?"
        choice1: '2',
        choice2: '4',
        choice3: '25',
        choice4: '65',
        answer: 2,
    },
    {
        question : "What Is 2+3?"
        choice1: '2',
        choice2: '4',
        choice3: '5',
        choice4: '65',
        answer: 3,
    },
    {
        question : "What Is 2+4?"
        choice1: '6',
        choice2: '4',
        choice3: '25',
        choice4: '65',
        answer: 1,
    },
    {
        question : "What Is 2+5?"
        choice1: '2',
        choice2: '4',
        choice3: '25',
        choice4: '7',
        answer: 4,
    },
    {
        question : "What Is 2+6?"
        choice1: '2',
        choice2: '4',
        choice3: '8',
        choice4: '65',
        answer: 3,
    },
]

const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
}

