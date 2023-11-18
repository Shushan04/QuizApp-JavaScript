const questions = [

    {
        question:"How do you write 'Hello World' in an alert box?",
        answers:[
            {text: "alert('Hello Word');", correct:true},
            {text: "msgBox('Hello Word');", correct:false},
            {text: "alertBox('Hello Word');", correct:false},
            {text: "msg('Hello Word');", correct:false},
        ]
    },
    {
        question:"How do you create a function in JavaScript?",
        answers:[
            {text: "function myFunction()", correct:true},
            {text: "function:myFunction()", correct:false},
            {text: "function = myFunction()", correct:false},
            {text: "function+myFunction()", correct:false},
        ]
    },
    {
        question:"How to write an if statement in JavaScript?",
        answers:[
            {text: "if i = 5", correct:false},
            {text: "if i = 5 then", correct:false},
            {text: "if i == 5 then", correct:false},
            {text: "if(i == 5)", correct:true},
        ]
    },
    {
        question:"How to write an if statement for executing some code if 'i' is Not equal to 5?",
        answers:[
            {text: "if(i <> 5)", correct:false},
            {text: "if(i != 5)", correct:true},
            {text: "if i <> 5", correct:false},
            {text: "if i =! 5 then", correct:false},
        ]
    },
    {
        question:"How does a for loop start?",
        answers:[
            {text: "for(i = 0; i <= 5; i++)", correct:true},
            {text: "for i = 1 to 5", correct:false},
            {text: "for(i <= 5; i++)", correct:false},
            {text: "for(i = 0; i <= 5)", correct:false},
        ]
    },
    {
        question:"What is the correct way to write a JavaScript array?",
        answers:[
            {text: "var colors = (1:'red',2:'green',3:'blue')", correct:false},
            {text: "var colors = ['red','green','blue']", correct:true},
            {text: "var colors = 'red', 'green','blue'", correct:false},
            {text: "var colors = 1 = ('red'),2 = ('green'),3 = ('blue')", correct:false},
        ]
    },
    {
        question:"How do you find the number with the highest value of x and y?",
        answers:[
            {text: "Math.ceil(x,y)", correct:false},
            {text: "top(x,y)", correct:false},
            {text: "Math.max(x,y)", correct:true},
            {text: "ceil(x,y)", correct:false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

// Function to initialize and start the quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
};

// Function to display a question and its answer choices
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
};

// Function to reset the state of the quiz (hide "Next" button and clear answer buttons)
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
        
    }
};

// Function to handle the user's answer selection
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
};


// Function to display the final score at the end of the quiz
function showScore(){
    resetState();
    questionElement.innerHTML = `You acored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
};

// Function to handle the "Next" button click, moving to the next question or showing the final score
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};

//-
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
       startQuiz(); 
    }
})

//Start the quiz when the page loads
startQuiz();
