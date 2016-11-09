// Create an object for the whole game
	var crystal = {

		// Variable: computerScore
		ComputerScore: 0,

		// Variable: image1Score
		image1Score: 0,
		
		// Variable: image2Score
		image2Score: 0,

		// Variable: image3Score
		image3Score: 0,

		// Variable: image4Score
		image4Score: 0,
		
		// Variable: userScore
		UserScore: 0,

		// Variable: win
		win: 0,
		// Variable: Lose
		lose: 0,

		// Function of Winning sound
		playwinsound: function(){
			
			var audioElement = $("#winSound");
			audioElement.get(0).play();

		},

		// Function of Losing sound
		playlosesound: function(){
			
			var audioElement = $("#loserSound");
			audioElement.get(0).play();
			
		},
	
	


		// Function update wins 

		updateWin: function(){
			
			// Play winning sound
			this.playwinsound();
			
			// Update win score
			crystal.win = crystal.win +=1;
			$("#Win").html(crystal.win);
			$("#status").html("You won!");
		

		},


		// function uplate Lose

		updateLose: function(){

			// Play losing sound
			this.playlosesound();

			// Update lose score
			crystal.lose = crystal.lose +=1;
			$("#Lose").html(crystal.lose);
			$("#status").html("You lose!");

		},


		// Function when the page starts computer generate the random number and show in computerScore and each image will generate scores 

		reset : function(){



			// At reset:

				// Variable: computerScore
				this.ComputerScore= (Math.floor(Math.random() * 120)) + 19,

				// Variable: image1Score
				this.image1Score = (Math.floor(Math.random() * 12)) + 1;
				// Target image 1 div to add value of the randomly gnerated crystal 1 score to it
				$(".image1div").data("value", this.image1Score);

				// Variable: image2Score
				this.image2Score= (Math.floor(Math.random() * 12)) + 1,
				// Target image 2 div to add value of the randomly gnerated crystal 2 score to it
				$(".image2div").data("value", this.image2Score);

				// Variable: image3Score
				this.image3Score= (Math.floor(Math.random() * 12)) + 1,
				// Target image 3 div to add value of the randomly gnerated crystal 3 score to it
				$(".image3div").data("value", this.image3Score);

				// Variable: image4Score
				this.image4Score= (Math.floor(Math.random() * 12)) + 1,
				// Target image 4 div to add value of the randomly gnerated crystal 4 score to it
				$(".image4div").data("value", this.image4Score);

				// When reset
				this.UserScore= 0;

			// Print this on browser
				$("#computerScore").html(this.ComputerScore);
				$("#userScore").html(this.UserScore);
				$("#Win").html(this.win);
				$("#Lose").html(this.lose);
				
		},  // crystal.object  

		// 
		updateCrystal: function(){
				// Print UserScore in browser as the user score
	
					$("#userScore").html(crystal.UserScore);

				// Points Update
					// If the user score equal to the score that the computer chose, user win and the win score is added by 1

					if (crystal.UserScore == crystal.ComputerScore){
						crystal.updateWin();
						crystal.reset();
					};
					// If the user score is greater to the score that the computer chose, user loses and the losses score is added by 1
					if (crystal.UserScore > crystal.ComputerScore){
						crystal.updateLose();
						crystal.reset();
			};


		},




		// Function when clicked 

		// When click score assigned to each image will be added to userScore
					// Then print in browser as the user score

					// If the user score equal to the score that the computer chose, user win and the win score is added by 1

					// If the user score is greater to the score that the computer chose, user loses and the losses score is added by 1


				image : function(){
					$(".image").on("click", function () {

						// variable for random crystal scores
						var value = $(this).data("value"); 

						// each score clicked is stored under userScore
						crystal.UserScore = crystal.UserScore + value;

						// Update the value of the userscore and the points
						crystal.updateCrystal();

					});
		
			

		}, // crystal.image Function


	 };  // crystal object


	

	$(document).ready(crystal.reset());

	crystal.image();

