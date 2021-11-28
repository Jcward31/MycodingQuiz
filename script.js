/*the js var */ 

var countdownEl = document.querySelector("#countdown");
var startBt = document.querySelector("#Begin");
var submitEl = document.getElementById("submitButton");
var startUpPage =document.getElementById("introPage");
var finBut = document.querySelector("#finishedbtn");
var hScorebtn = document.querySelector("#heading1");
var time = 600;
var timeTaken = 0;

/* the correct answers*/ 
var q2Correct = document.querySelector("#q2");
var q3Correct = document.querySelector("#q3");
var q4Correct = document.querySelector("#q4");
var q5Correct = document.querySelector("#q5");
var q6Correct = document.querySelector("#q6");
var q7Correct = document.querySelector("#q7");
var q8Correct = document.querySelector("#q8");
var q1Correct = document.querySelector("#q9");
var q2Correct = document.querySelector("#q10");

/* buttons for quiz questions*/ 

var q1But = document.querySelectorAll(".q1buttons");
var q2But = document.querySelectorAll(".q2buttons");
var q3But = document.querySelectorAll(".q3buttons");
var q4But = document.querySelectorAll(".q4buttons");
var q5But = document.querySelectorAll(".q5buttons");
var q6But = document.querySelectorAll(".q6buttons");
var q7But = document.querySelectorAll(".q7buttons");
var q8But = document.querySelectorAll(".q8buttons");
var q9But = document.querySelectorAll(".q9buttons");
var q10But = document.querySelectorAll(".q10buttons");



/* question pages*/
var q1Page = document.getElementById("question1");
var q2Page = document.getElementById("question2")
var q3Page = document.getElementById("question3");
var q4Page = document.getElementById("question4");
var q5Page = document.getElementById("question5");
var q6Page = document.getElementById("question6");
var q7Page = document.getElementById("question7");
var q8Page = document.getElementById("question8");
var q9Page = document.getElementById("question9");
var q10Page = document.getElementById("question10");
var lastPage = document.getElementById("finished");
var scoreEl = document.getElementById("totalScore");



/*the js for my timer */ 

startBt.addEventListener("click", function(event) {
    startUpPage.style.display = "none";
    q1Page.style.display = "block";
setInterval(updateCountdown, 1000);
});


function updateCountdown() {
 countdownEl.innerHTML = time--; 

 if(time < 0) {
     alert("Time is up!");
     endGame();
 };
};

/*END OF TIMER*/
/*the return of all my answers*/ 