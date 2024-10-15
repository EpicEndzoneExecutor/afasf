// Function to play the Craps game
function playCraps() {
    // Get a reference to the output div
    const gameResultDiv = document.getElementById('gameResult');

    // Generate two random numbers between 1 and 6 (simulating dice rolls)
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the sum of the two dice
    const sum = die1 + die2;

    // Variable to hold the game result message
    let resultMessage = `You rolled a ${die1} and a ${die2}. Sum: ${sum}. `;

    // Check the rules for the outcome of the game
    if (sum === 7 || sum === 11) {
        // If the sum is 7 or 11, the player loses
        resultMessage += 'CRAPS - You lose!';
    } else if (die1 === die2 && die1 % 2 === 0) {
        // If both dice are the same and even, the player wins
        resultMessage += 'You won!';
    } else {
        // Otherwise, it's a push
        resultMessage += 'You pushed!';
    }

    // Output the result message to the web page
    gameResultDiv.innerHTML = resultMessage;
}

// Ensure the DOM content is loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add an event listener to the button to call the playCraps function when clicked
    document.getElementById('playGameButton').addEventListener('click', playCraps);
});
