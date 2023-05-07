let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('The drawn number is: ' + randomNumber);
let computerMove = getMoveName(randomNumber); // do zmiennej przypisuję funkcje getMoveNAme    (przekazuje do funkcji argument / gotowa zmienna po wszystkiuch oblicxzeniach)

function getMoveName(argMoveId){   // funkcja bierze jeden argument
       if(argMoveId == 1){
        return 'rock';  // przypoisanie 
      } else if(argMoveId == 2){
        return 'paper';
      }else if(argMoveId == 3){
        return 'scissors';
      }
}

let playerInput = prompt('Choose one of the options! 1: rock, 2: paper, 3: scissors.');

console.log('Player typed:' + playerInput);

let playerMove = getMoveName(playerInput);


function displayResult(argComputerMove, argPlayerMove){    //displayResult(1 ,2)
    console.log('Moves:', argComputerMove,' - ', argPlayerMove);
    printMessage('I choose ' + argComputerMove + ', and You choose ' + argPlayerMove);
  
    if( argComputerMove == 'rock' && argPlayerMove == 'paper'){
      printMessage('You win!');
    }else if( argComputerMove == 'rock' && argPlayerMove == 'scissors'){
        printMessage('You lose!');
    }else if( argComputerMove == 'rock' && argPlayerMove == 'rock'){
        printMessage('Draw!');
    }else if( argComputerMove == 'paper' && argPlayerMove == 'paper'){
        printMessage('Draw!');
    }else if( argComputerMove == 'paper' && argPlayerMove == 'rock'){
        printMessage('You lose!');
    }else if( argComputerMove == 'paper' && argPlayerMove == 'scissors'){
        printMessage('You win!'); 
    }else if( argComputerMove == 'scissors' && argPlayerMove == 'scissors'){
        printMessage('Draw!'); 
    }else if( argComputerMove == 'scissors' && argPlayerMove == 'paper'){
        printMessage('You lose!');
    }else if( computerMove == 'scissors' && argPlayerMove == 'rock'){
        printMessage('You win!'); 
    }else if( argComputerMove == 'scissors' && argPlayerMove == 'unknown move'){
        printMessage('You have chosen the wrong option. Choose again: 1, 2, 3');
    }else if( argComputerMove == 'rock' && argPlayerMove == 'unknown move'){
        printMessage('You have chosen the wrong option. Choose again: 1, 2, 3');
    }else if( argComputerMove == 'paper' && argPlayerMove == 'unknown move'){
        printMessage('You have chosen the wrong option. Choose again: 1, 2, 3');
  }
} 


  displayResult(computerMove, playerMove) // displayResult(1, 2)   / ('string' , 'tekst')