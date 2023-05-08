function playGame(){
        let playerInput = (1, 2, 3);
        clearMessages();
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
            }else if(argMoveId >= 4){
                return 'unknown move'
            }
        }
       
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
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
