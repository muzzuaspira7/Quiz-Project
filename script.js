const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Eelphant", correct: false },
            { text: "Girafee", correct: false },
        ]
    },
    {
        question: "Who is the Father of our Nation?",
        answers: [
            { text: "Ehtisham", correct: false },
            { text: "Mohandas Karamchand Gandhi", correct: true },
            { text: "Chapri boy", correct: false },
            { text: "Vivek pandey", correct: false },
        ]
    },
    {
        question: "Who was the first President of India?",
        answers: [
            { text: "Dr. Rajendra Prasad", correct: true },
            { text: "Sarvepalli Radhakrishnan", correct: false },
            { text: "J.Jayalalitha", correct: false },
            { text: "Dr. P.Ambetkar", correct: false },
        ]
    },
    {
        question: "Which is the most sensitive organ in our body?",
        answers: [
            { text: "Legs", correct: false },
            { text: "Fingers", correct: false },
            { text: "Skin", correct: true },
            { text: "Hands", correct: false },
        ]
    },
    {
        question: "Who was the first Prime Minister of India?",
        answers: [
            { text: "Pandit Jawaharlal Nehru", correct: true },
            { text: "Narndra Modi", correct: false },
            { text: "Rahul Gandhhi", correct: false },
            { text: "Jayalalitha", correct: false },
        ]
    },
    {
        question: "1024 Kilobytes is equal to?",
        answers: [
            { text: "1.77 Megabyte (MB)", correct: false },
            { text: "1.77 kilobyte (KB)", correct: false },
            { text: "1 Megabyte (MB)", correct: true },
            { text: "1.2 Megabyte (MB)", correct: false },
        ]
    },
    {
        question: "Which plant grows in desert?",
        answers: [
            { text: "Lily Plant", correct: false },
            { text: "Lotus", correct: false },
            { text: "Cactus", correct: true },
            { text: "Desertiplant", correct: false },
        ]
    },
    {
        question: "Most widely spoken language in the world is?",
        answers: [
            { text: "Chinese", correct: true },
            { text: "English", correct: false },
            { text: "Hindi", correct: false },
            { text: "Korean", correct: false },
        ]
    },
    {
        question: "Gateway of India is located at?",
        answers: [
            { text: "Kolkatta", correct: false },
            { text: "Mumbai", correct: true },
            { text: "Delhi", correct: false },
            { text: "Karnataka", correct: false },
        ]
    },
    {
        question: "Capital of Uttarakhand is?",
        answers: [
            { text: "Vilkuniyam", correct: false },
            { text: "Basith", correct: false },
            { text: "Pachakuppam", correct: false },
            { text: "Dehradun", correct: true },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTMl = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)

    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
    
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore(); 
    }
};

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();


