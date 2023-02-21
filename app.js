const firebaseConfig = {
	apiKey: "AIzaSyBtvYjqkGW_NoLOohKU39BbvZ6_h3K73JI",
	authDomain: "fmpwebsite-55c99.firebaseapp.com",
	projectId: "fmpwebsite-55c99",
	storageBucket: "fmpwebsite-55c99.appspot.com",
	messagingSenderId: "1071826487306",
	appId: "1:1071826487306:web:75685919b0ed0af75377f3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


const quizForm = document.getElementById("quiz-form");
const questions = document.querySelectorAll(".question");
const submitButton = document.querySelectorAll(".submit-btn");
const results = document.getElementById("results");
const score = document.getElementById("score");

let currentQuestion = 0;
let scoreCount = 0;

function showQuestion() {
	questions[currentQuestion].classList.add("active");
}

function hideQuestion() {
	questions[currentQuestion].classList.remove("active");
}

function showResults() {
	results.style.display = "block";
	score.textContent = scoreCount;
}

function checkAnswer() {
	const answer = quizForm.elements["answer"];
	if (answer.value === "A") {
		scoreCount++;
	}
}

submitButton.forEach(button => {
	button.addEventListener("click", function(e) {
		e.preventDefault();
		checkAnswer();
		hideQuestion();
		currentQuestion++;
		if (currentQuestion < questions.length) {
			showQuestion();
		} else {
			showResults();
		}
	});
});

showQuestion();
