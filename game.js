const qustion = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progress-text');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#pogressBarFull');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What does HTML stand for?",
        choice1: "Hypertext Marking Language",
        choice2: "Hypertext Markup Language",
        choice3: "Hyphenated Text Marking Language",
        choice4: "Highly Troubling Markup Language",
        answer: 2,
    },
    {
        question: "What does CSS stand for?",
        choice1: "Cropping Style Sheet",
        choice2: "Creating Style Sheet",
        choice3: "Crossfunctional Style Sheet",
        choice4: "Cascading Style Sheet",
        answer: 4,
    },
    {
        question: "What does 'i' mean?",
        choice1: "Interger",
        choice2: "Iterator",
        choice3: "Intergrator",
        choice4: "Information",
        answer: 2,
    },
    {
        question: "How would you connect a style sheet to an HTML document?",
        choice1: "<link></link>",
        choice2: "<header></header>",
        choice3: "<a></a>",
        choice4: "<script></script>",
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    // progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) *100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    qustion.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers)return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score

}

startGame()




























































// const question = document.querySelector('#question');
// const choices = Array.from(document.querySelectorAll('.choice-text'));
// const progressText = document.querySelector('#progressText');
// const scoreText = document.querySelector('#score');
// 
// let currentQuestion = {}
// let acceptingAnswers = true
// let score = 0
// let questionCounter = 0
// let availableQuestions = []
// 
// let questions = [
    // {
        // question: "What is 2 + 2?",
        // choice1: "2",
        // choice2: "4",
        // choice3: "5",
        // choice4: "70",
        // answer:2,
    // },
    // {
        // question: "What is 2 + 3?",
        // choice1: "5",
        // choice2: "4",
        // choice3: "5",
        // choice4: "70",
        // answer:2,
    // },
    // {
        // question: "What is 2 + 4?",
        // choice1: "6",
        // choice2: "4",
        // choice3: "5",
        // choice4: "70",
        // answer:2,
    // },
    // {
        // question: "What is 2 + 5?",
        // choice1: "7",
        // choice2: "4",
        // choice3: "5",
        // choice4: "70",
        // answer:2,
    // }
    // 
// 
// 
// ]
// 
// const MAX_QUESTIONS = 4
// const SCORE_POINTS = 100
// 
// startGame = () => {
    // questionCounter = 0
    // score = 0
    // availableQuestions = [...questions]
    // getNewQuestion()
// }
// 
// getNewQuestion = () => {
    // if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        // localStorage.setItem('mostRecentScore', score)
// 
        // return window.location.assign('/end.html')
    // }
// 
    // questionCounter++
    // progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
// 
    // const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    // currentQuestion = availableQuestions[questionsIndex]
    // question.innerText = currentQuestion.question
// 
    // choices.forEach(choice => {
        // const number = choice.dataset['number']
        // choice.innerText = currentQuestion['choice' + number]
// 
    // })
// 
    // availableQuestions.splice(questionsIndex, 1)
// 
    // acceptingAnswers = true
// 
// }
// 
// choices.forEach(choice => {
    // choice.addEventListener('click', e => {
        // if(!acceptingAnswers)
        //  return
// 
        // acceptingAnswers = false
        // const selectedChoice = e.target
        // const selectedAnswer = selectedChoice.dataset['number']
// 
        // let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        //  'incorrect'
// 
        // if(classToApply === 'correct') {
            // incrementScore(SCORE_POINTS)
        // }
// 
        // selectedChoice.parentElement.classList.add(classToApply)
// 
        // setTimeout(() => {
            // selectedChoice.parentElement.classList.remove(classToApply)
            // getNewQuestion()
// 
// 
        // }, 1000)
    // })
// })
// 
// incrementScore = num => {
    // score +=num
    // scoreText.innerText = score
// 
    // startGame()
// }
// 
// 