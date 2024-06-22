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
    }
];


let currentQuestion = 0;


function init() {
    document.getElementById('amountQuestions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}


function answer(selection) { //selection ist die mitgegebene Variable vom HTML welche Zeile angeklickt wurde
    let question = questions[currentQuestion]; // question ist erstes Array im JSON
    let selectedQuestionNumber = selection.slice(-1); //letzte Stelle vom String
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentElement.classList.add('bg-success'); // füge dem ElternElement die Klasse hinzu
    } else {
        document.getElementById(selection).parentElement.classList.add('bg-danger');
    }
}