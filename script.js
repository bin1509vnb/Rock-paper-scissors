//This game is based on a lot on the tick tack toe game that I did in Lab 4.
var game = () => {
	var playerScore = 0;
	var computerScore = 0;
	var movesCount = 0;
    
	// Create Var for all of avalible selectable options from the index.html. The options are rock, paper, scissors. 
	var playGame = () => { //The => function playGame logs a message to the console that include the value of everything in this curly brackets. It is useful for the callback function at the end. 
	var rockButton = document.querySelector('.rock');
	var paperButton = document.querySelector('.paper');
	var scissorButton = document.querySelector('.scissor');
	var playerOptions = [rockButton, paperButton, scissorButton];
	var computerOptions = ['rock', 'paper', 'scissors']
        
	// Create the gameplay. 
	playerOptions.forEach(option => {
		option.addEventListener('click', function () { //Create a click function for the "option" div class (recall to the html ). 
	var movesLeft = document.querySelector('.movesleft'); //Create the amount move left count. 
		movesCount++; //Value is always large than 0
		movesLeft.innerText = `Moves Left: ${5 - movesCount}`; //Count each move everytime I click the selectable options.
	var choiceNumber = Math.floor(Math.random() * 3); //Create the random value for the computer to pick from 0 to 2. 0 is rock, 1 is paper, 2 is scissors.
    var computerChoice = computerOptions[choiceNumber]; //Connect the previous line with a new var for the computer.

	// Function to check who wins.
    winner(this.innerText, computerChoice)

	// Calling gameOver function after 5 moves.
	if (movesCount == 5) { // If moveCounts is equal to 5, game will be over.
        gameOver(playerOptions, movesLeft); 
	}
	})
    })
}

	// Creating the winning, losing or tie conditions.
	var winner = (player, computer) => { //Create var for winner and the winners are either player or computer.
		var result = document.querySelector('.result'); //Create the var and connect them to the div created in html file.
		var playerScoreBoard = document.querySelector('.p-count');
		var computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();

		if (player === computer) { //If the player pick is the same as the computer, the game is tie.
			result.textContent = 'Tie'
		}
		else if (player == 'rock') {
			if (computer == 'paper') {
				result.textContent = 'Computer Win'; //If the player pick rock and computer pick paper, the computer wins. 
				computerScore++; //Add one score to the computer.
				computerScoreBoard.textContent = computerScore; //add the score to the score board of the computer.

			} else {
				result.textContent = 'Player Win' //if the opposide happend, the player wins.
				playerScore++;//Score will add to the player.
				playerScoreBoard.textContent = playerScore;//Then add to the score board.
			}
		}
		else if (player == 'scissors') { //Same thing here, except it is scissors vs rock.
			if (computer == 'rock') {
				result.textContent = 'Computer Win';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			} else {
				result.textContent = 'Player Win';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if (player == 'paper') { //Same thing here, except it is paper vs scissors.
			if (computer == 'scissors') {
				result.textContent = 'Computer Win';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			} else {
				result.textContent = 'Player Win';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	// Determind when the game will be over. 
	var gameOver = (playerOptions, movesLeft) => { //gameOver var will be determind based on the playerOptions counts and moveLeft counts.
	var chooseMove = document.querySelector('.move'); //Connect the new var to the div in html file. 
	var result = document.querySelector('.result');
	var reloadBtn = document.querySelector('.reload');
		playerOptions.forEach(option => { //use forEach to calls elements in the option array (which are rock, paper, scissors).
			option.style.display = 'none'; // If the winner is found, the rock, paper, scissors will disapear.
		})

		chooseMove.innerText = 'Game Over!!' //Replace the choose your move text wiht the "Game Over!!" text.
		movesLeft.style.display = 'none'; //The move count will also disapear.
		if (playerScore > computerScore) { //If player score is larger than computer score, You win will pop up. 
			result.style.fontSize = '2rem';
			result.innerText = 'You Win'
			result.style.color = '#308D46';
		}
		else if (playerScore < computerScore) { //If player score is less than computer score, You lose will pop up. 
			result.style.fontSize = '2rem';
			result.innerText = 'You Lose';
			result.style.color = 'red';
		}
		else {
			result.style.fontSize = '2rem'; //If none of the previous two conditions occurs, the "tie" message pops up.
			result.innerText = 'Tie';
			result.style.color = 'grey'
		}
		reloadBtn.innerText = 'Restart'; //The Restart button will pop up.
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click', () => { //Create click command.
			window.location.reload(); //Click on it and it will reset the game
		})
	}

	// Calling the game components.
	playGame();
}

// Calling the game to play.
game();