let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('The drawn number is: ' + randomNumber);
let computerMove = getMoveName(randomNumber); 
function getMoveName(argMoveId){   
    if(argMoveId == 1){
        return 'rock'; 
    }else if(argMoveId == 2){
        return 'paper';
    }else if(argMoveId == 3){
        return 'scissors';
    }else {
        return 'unknown move'
    }
}
let playerInput = prompt('Choose one of the options! 1: rock, 2: paper, 3: scissors.');
console.log('Player typed:' + playerInput);
let playerMove = getMoveName(playerInput);
function displayResult(argComputerMove, argPlayerMove){    
    console.log('Moves:', argComputerMove,' - ', argPlayerMove);
    printMessage('I choose ' + argComputerMove + ', and You choose ' + argPlayerMove);
    if( argComputerMove == 'rock' && argPlayerMove == 'paper'){
    printMessage('You win!');
    }else if( argComputerMove == 'rock' && argPlayerMove == 'scissors'){
        printMessage('You lose!');
    }else if( argComputerMove == 'paper' && argPlayerMove == 'rock'){
        printMessage('You lose!');
    }else if( argComputerMove == 'paper' && argPlayerMove == 'scissors'){
        printMessage('You win!'); 
    }else if( argComputerMove == 'scissors' && argPlayerMove == 'paper'){
        printMessage('You lose!');
    }else if( computerMove == 'scissors' && argPlayerMove == 'rock'){
        printMessage('You win!'); 
    }else if( argPlayerMove == 'unknown move'){
        printMessage('You have chosen the wrong option. Choose again: 1, 2, 3');
    }else if( argComputerMove ==  argPlayerMove){
        printMessage('Draw!'); 
    } 
}
displayResult(computerMove, playerMove)