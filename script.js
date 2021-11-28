/*the js var */ 

var countdownEl = document.querySelector("#countdown");
var startBt = document.querySelector("#Begin");
var submitBt = document.getElementById("submitButton");
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



/*the j.s for my timer */ 

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


/*quiz pages*/ 
q1But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
    q1Page.style.display = "none";
    q2Page.style.display = "block";
    var choice = event.target.id;
    console.log(choice);

    if(choice == "q1") {
        score= score + 10;
        console.log(score);
    
    } else {
         time = time - 10;
        console.log(time);
        alert("I'm sorry that was Incorrect");
    }
});
});

q2But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
    q2Page.style.display = "none";
    q3Page.style.display = "block";
    var choice = event.target.id;
    console.log(choice);

    if(choice == "q2") {
        score= score + 10;
        console.log(score);
        
    } else {
         time = time - 10;
        console.log(time);
        alert("I'm sorry that was Incorrect");
    }
});
});

q3But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
    q3Page.style.display = "none";
    q4Page.style.display = "block";
    var choice = event.target.id;
    console.log(choice);

    if(choice == "q3") {
        score= score + 10;
        console.log(score);
       
    } else {
         time = time - 10;
        console.log(time);
        alert("I'm sorry that was Incorrect");
    }
});
});

q4But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
    q4Page.style.display = "none";
    q5Page.style.display = "block";
    var choice = event.target.id;
    console.log(choice);

    if(choice == "q4") {
        score= score + 10;
        console.log(score);
        
    } else {
         time = time - 10;
        console.log(time);
        alert("I'm sorry that was Incorrect");
    }
});
});

q5But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
    q5Page.style.display = "none";
    q6Page.style.display = "block";
    var choice = event.target.id;
    console.log(choice);

    if(choice == "q5") {
        score= score + 10;
        console.log(score);
        
    } else {
         time = time - 10;
        console.log(time);
        alert("I'm sorry that was Incorrect");
    }
});
});

q6But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
    q6Page.style.display = "none";
    q7Page.style.display = "block";
    var choice = event.target.id;
    console.log(choice);

    if(choice == "q6") {
        score= score + 10;
        console.log(score);
        
    } else {
         time = time - 10;
        console.log(time);
        alert("I'm sorry that was Incorrect");
    }
});
});

q7But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
    q7Page.style.display = "none";
    q8Page.style.display = "block";
    var choice = event.target.id;
    console.log(choice);

    if(choice == "q7") {
        score= score + 10;
        console.log(score);
      
    } else {
         time = time - 10;
        console.log(time);
        alert("I'm sorry that was Incorrect");
    }
});
});

q8But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
    q8Page.style.display = "none";
    q9Page.style.display = "block";
    var choice = event.target.id;
    console.log(choice);

    if(choice == "q8") {
        score= score + 10;
        console.log(score);
        
    } else {
         time = time - 10;
        console.log(time);
        alert("I'm sorry that was Incorrect");
    }
});
});

q9But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
    q9Page.style.display = "none";
    q10Page.style.display = "block";
    var choice = event.target.id;
    console.log(choice);

    if(choice == "q9") {
        score= score + 10;
        console.log(score);
       
    } else {
         time = time - 10;
        console.log(time);
        alert("I'm sorry that was Incorrect");
    }
});
});

q10But.forEach((btn) => {
    btn.addEventListener ("click", function(event) {
    endGame ();
    var choice = event.target.id;
    console.log(choice);

    if(choice == "q10") {
        score= score + 10;
        console.log(score);
        
    } else {
         time = time - 10;
        console.log(time);
        alert("I'm sorry that was Incorrect");
    }

    scoreEl.innerHTML = score;
});
});

/*Endgame function*/

function endGame() {
    clearInterval(interval);
    timeDisplay.innerHTML = 0;
    q1Page.style.display = "none";
    q2Page.style.display = "none";
    q3Page.style.display = "none";
    q4Page.style.display = "none";
    q5Page.style.display = "none";
    q6Page.style.display = "none";
    q7Page.style.display = "none";
    q8Page.style.display = "none";
    q9Page.style.display = "none";
    q10Page.style.display = "none";
    lastPage.style.display = "block";
    return;
}



