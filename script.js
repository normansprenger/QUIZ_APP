let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Junus Ergin",
        "answer2": "Brad Pitt",
        "answer3": "Tim Berners-Lee",
        "answer4": "Angela Merkel",
        "right_answer": 3,
    },
    {
        "question": "Heißt es der, die oder das grade Kurve?",
        "answer1": "Der",
        "answer2": "Die",
        "answer3": "Das",
        "answer4": "Es gibt keine graden Kurven",
        "right_answer": 4,
    },
    {
        "question": "Welcher Tag folgt auf Donnerstag?",
        "answer1": "Donnerstag",
        "answer2": "Montag",
        "answer3": "Sylvester",
        "answer4": "Freitag",
        "right_answer": 4,
    },
    {
        "question": "How to center a div?",
        "answer1": "Container mit display:flex justify-content:center",
        "answer2": "Herunterfahren",
        "answer3": "Hotline anrufen",
        "answer4": "ESC+F4",
        "right_answer": 1,
    },
    {
        "question": "How to center a div?",
        "answer1": "Container mit display:flex justify-content:center",
        "answer2": "Herunterfahren",
        "answer3": "Hotline anrufen",
        "answer4": "ESC+F4",
        "right_answer": 1,
    },
    {
        "question": "How to center a div?",
        "answer1": "Container mit display:flex justify-content:center",
        "answer2": "Herunterfahren",
        "answer3": "Hotline anrufen",
        "answer4": "ESC+F4",
        "right_answer": 1,
    }
];


let currentQuestion = 0;
let rightAnwers = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');


function init() {
    document.getElementById('amountQuestions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {

    if (currentQuestion >= questions.length) {
        showEndscreen();
    } else { //show question
        showActualQuestion();
    }
}


function answer(selection) { //selection ist die mitgegebene Variable vom HTML welche Zeile angeklickt wurde
    let question = questions[currentQuestion]; // question ist erstes Array im JSON
    let selectedQuestionNumber = selection.slice(-1); //letzte Stelle vom String
    let idOfRightAnswer = `answer${question['right_answer']}`; //id der richtigen antwort ist answer+zugehörigeZahl

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentElement.classList.add('bg-success'); // füge dem ElternElement die Klasse hinzu
        rightAnwers++;
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById(selection).parentElement.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentElement.classList.add('bg-success'); // füge der richtigen Antwort die Farbe hinzu
        AUDIO_FAIL.play();
    }
    document.getElementById(`nextButton`).disabled = false; //nächste Frage Button wird freigeschalten
}


function nextQuestion() {
    currentQuestion++; //erhöhe Frage um 1
    document.getElementById(`nextButton`).disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer1').parentNode.classList.remove('bg-success');
    document.getElementById('answer2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success');
    document.getElementById('answer3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success');
    document.getElementById('answer4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success');
}


function restartGame() {
    document.getElementById('imageCardTop').src = "./img/back.jpg";
    currentQuestion = 0;
    rightAnwers = 0;
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
    init();
}


function showEndscreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('amountQuestions2').innerHTML = questions.length;
    document.getElementById('amountRightAnswers').innerHTML = rightAnwers;
    document.getElementById('imageCardTop').src = "./img/end.jpg";
}


function showActualQuestion() {
    let percent = Math.round(((currentQuestion + 1) / questions.length) * 100);
    document.getElementById('progressbar').innerHTML = `${percent}%`
    document.getElementById('progressbar').style.width = `${percent}%`
    let question = questions[currentQuestion];
    document.getElementById('orderNumberofQuestion').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}