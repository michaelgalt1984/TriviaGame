// All my Global Variables
// Think that I need a variable/object for each question, to store the question, as well as possible answers. After looking through it, I figured that I would need to make it an object, with each question as an index.  That way, I can make a for loop to append each question and the answers associated with it.
var questionsAndAnswerOptions = [

	question1 = [{
		question: "How many calories is 1 pound of fat equal to?",
		answers: ["2000", "2500", "3000", "3500", "4000"],
	}];

	question2 = [{
		question: "How long must you rest between exercises?",
		answers: ["30 seconds", "1 minute", "2 minutes", "3 minutes", "It is completely dependent upon the type of routine that you are doing"],
	}];

	question3 = [{
		question: "How many times a week should you exercise?",
		answers: ["once", "twice", "3 times", "daily", "It depends on a variety of goals and other factors"],
	}];

	question4 = [{
		question: "If you want to maximize muscle growth, how heavy should you lift?",
		answers: ["light", "moderate", "heavy", "It doesn't matter"],
	}];

	question5 = [{
		question: "How long should you do cardio exercises to effectively benefit from them?",
		answers: ["15 minutes", "20 minutes", "30 minutes", "45 minutes", "60 minutes+"],
	}];

];

// Variable for the timer
var timer = "";


// Variables for correct and incorrect
var correct = 0;
var incorrect = 0;




// All my Functions
// A function to start and display the timer and the questions to the page.
$(document).on("click", "#gameStart", function() {
	start() {

  		// I need to remove the start button after it has been clicked
  		$("#gameStart").remove();
  	};

  	$("#gameStart").on("click", timer.start);


  	var intervalId;

  	timer = {

  		time: 120,

  		$("#display").html("120");
  	},

  	start: function() {

  		setInterval(timer.count, 1000);

  	},

// This should display the timer into the blank div which I have made to receive the javascript

count: function() {

	timer.time--;
	$("#display").html(timer.time);
},
});


// I would need a function which appends all the question variables into the empty div.  Because that function is after the countdown display, they should be displayed below it.

// I need a function which will only allow one of the options for the answers to be selected.  Additionally, it needs to store that selection in a variable, so that the player choice can be compared to the correct answer.



// A function for the "Done" button, which will stop the timer, check the answers and load the results
$(document).on("click", "#done", function() {
	done() {

	};
});



// A function which will get called when time runs out, check the answers, and display the results

// Both of the above functions need to loop through the object questionsAndAnswersOptions and then go into each object and do an if/else function.  It would say something like, if question1.answers === "3500", then correct++ else incorrect++.  

// There would then need to be a functon which clears out the previous javascript and then writes in new javascript displaying the number of correct and incorrect answers.  There could be a series of if statements which were tied to the number of correct answers that would display different statements depending on how well the individual did.  If they got 5 out of 5, it could congratulate them on being a fitness expert, 3 out of 5 as knowledgeable, 2 or less as needing to sign up for a personal trainer.