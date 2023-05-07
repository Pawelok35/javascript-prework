let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);

function getMoveName(argComputerMove){
       if(argComputerMove == 1){
        return 'kamień';
      } else if(argComputerMove == 2){
        return 'papier';
      }else if(argComputerMove == 3){
        return 'nożyce';
      }
      printMessage('Mój ruch to: ' + argComputerMove);
      return 'nieznany ruch';
}

let playerInput = prompt('Wybierz (cyfrę) - swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);





printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');
  }else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  }else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
  }else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!'); 
  }else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!'); 
  }else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty przegrywasz!');
  }else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!'); 
  }else if( computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
    printMessage('Wpisz poprawną opcję spośród: 1, 2, 3');
  }else if( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage('Wpisz poprawną opcję spośród: 1, 2, 3');
  }else if( computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage('Wpisz poprawną opcję spośród: 1, 2, 3');
  }
  