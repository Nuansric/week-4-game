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

				// Variable: image2Score
				this.image2Score= (Math.floor(Math.random() * 12)) + 1,

				// Variable: image3Score
				this.image3Score= (Math.floor(Math.random() * 12)) + 1,

				// Variable: image4Score
				this.image4Score= (Math.floor(Math.random() * 12)) + 1,

				// When reset
				this.UserScore= 0;

			// Print this on browser
				$("#computerScore").html(this.ComputerScore);
				$("#userScore").html(this.UserScore);
				$("#Win").html(this.win);
				$("#Lose").html(this.lose);
		
		},  // crystal.object  

		// Function when clicked 

				image : function(){
			
			// When click score assigned to each image will be added to userScore
					// Then print in browser as the user score

					// If the user score equal to the score that the computer chose, user win and the win score is added by 1

					// If the user score is greater to the score that the computer chose, user loses and the losses score is added by 1

			// Code on click for image 1
			$("#image1").on("click", function() {

				// When clicked:
				crystal.UserScore = crystal.UserScore + crystal.image1Score;
					
					$("#userScore").html(crystal.UserScore);

					// Points Update
					if (crystal.UserScore == crystal.ComputerScore){
						crystal.updateWin();
						crystal.reset();
					};

					if (crystal.UserScore > crystal.ComputerScore){
						crystal.updateLose();
						crystal.reset();
			};


		});


			// Code on click for image 2
			$("#image2").on("click", function(){
				
				// When clicked:
				crystal.UserScore = crystal.UserScore + crystal.image2Score;

					$("#userScore").html(crystal.UserScore);
					
					// Points Update
					if (crystal.UserScore == crystal.ComputerScore){
						crystal.updateWin();
						crystal.reset();
					};

					if (crystal.UserScore > crystal.ComputerScore){
						crystal.updateLose();
						crystal.reset();
					};
		});



			// Code on click for image 3
			$("#image3").on("click", function () {	

				// When clicked:
				crystal.UserScore = crystal.UserScore + crystal.image3Score;

					$("#userScore").html(crystal.UserScore);
					
					// Points Update
					if (crystal.UserScore == crystal.ComputerScore){
							crystal.updateWin();
							crystal.reset();
						};

					if (crystal.UserScore > crystal.ComputerScore){
							crystal.updateLose();
							crystal.reset();
						};


		});

			// Code on click for image 4
			$("#image4").on("click", function () {
			
				// WHen clicked:
				crystal.UserScore = crystal.UserScore + crystal.image4Score;

					$("#userScore").html(crystal.UserScore);

					// Point Update
					if (crystal.UserScore == crystal.ComputerScore){
						crystal.updateWin();
						crystal.reset();
					};

					if (crystal.UserScore > crystal.ComputerScore){
						crystal.updateLose();
						crystal.reset();
					};

		});

			

		}, // crystal.image Function


	 };  // crystal object


	

	$(document).ready(crystal.reset());

	crystal.image();







