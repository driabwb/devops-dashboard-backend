var gamePlay = require('./gamePlay.js');

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
    });

var playerMoved = function(gameState, row, col){
    if(!gamePlay.addMove(gameState,row,col)){
	console.log("You made and invalid move. Please try again.\n");
	askForRow(gameState);
    }else{
	gamePlay.switchCurrentPlayer(gameState);
	askForRow(gameState);
    }
};

var askForColumn = function(gameState, row){
    rl.question("Which Column?\n", function(result){
	    playerMoved(gameState, row, parseInt(result));
	});
};

var askForRow = function(gameState){
    rl.question("Which row?\n", function(result){
	    askForColumn(parseInt(result));
	});
};

askForRow({board: gamePlay.createNewBoard(), currentPlayer: gamePlay.x});