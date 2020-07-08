// function with computer inputs - kathy
// recursive run the game function - ashley
// checking for the winner or for a tie - imani/case
// refactoring the code and new ideas (ideas: 2 player option, computer is evil text, making it a bigger board, easy/medium/hard/evil modes) - all of us 
// instructions for user at the start of the game - kathy
// ascii evil computer image - case
// add music - ashley

const firstRun = true;
let placement = [" "," "," "," "," "," "," "," "," "];
let hasBeenPlayed = [];
let compMove = function () {
  return Math.floor(Math.random() * 9) + 1;
}
let cbArr = [userInputCheck, compTurn];

startGame();

function startGame() {
  if (firstRun) {
    console.log('/*TIC - TAC - TOE*/');
    console.log('/*DEFEAT THE EVIL CPU*/');
    console.log('');
    let username = prompt("What is your name?");
    alert("Hi " + username + "! Enter a number between 1 and 9 to place an X on the board.");
    alert("Top row: type 1 (left), 2 (middle), or 3 (right). ");
    alert("Middle row: type 4 (left), 5 (middle), or 6 (right). ");
    alert("Last row: type 7 (left), 8 (middle), or 9 (right). ");
    buildTheBoard();
  }
}

function buildTheBoard() {
    // placement[0] = "X"
    let row1 = placement[0] + ' | ' + placement[1] + ' | ' + placement[2];
    let row2 = placement[3] + ' | ' + placement[4] + ' | ' + placement[5] ;
    let row3 = placement[6] + ' | ' + placement[7] + ' | ' + placement[8];
    let rows = '--|---|--';
  console.log(row1)
  console.log(rows);
  console.log(row2);
  console.log(rows);
  console.log(row3);
}


const userInput = function () {
  let userIn = Number(prompt("Pick your board piece"))
  // console.log(typeof Number(userIn));
  return userIn;
}

function userInputCheck(){
  let a = Number(userInput());
  // a = Number(a);
  let checkUserInput = [1,2,3,4,5,6,7,8,9]
  // console.log(checkUserInput.includes(Number(a))
  if(checkUserInput.includes(a) && !hasBeenPlayed.includes(a)) { // && !hasBeenPlayed.includes(a)
  hasBeenPlayed.push(a);
console.log(hasBeenPlayed);
    displayGamePlay(a, compPlayer = false) // compMove
  } else {
    console.log("I'm sorry! That's not a valid input. Try again.")
    userInputCheck()
  } 
  //compTurn(); // runs computer function
}

// computer's turn 
function compTurn() {
  let b = compMove();
  // b = Number(b)
  // console.log(b);
   if(!hasBeenPlayed.includes(b)) {
     hasBeenPlayed.push(b);
     console.log(hasBeenPlayed)
     console.log("Computer goes next")
    //  console.log(hasBeenPlayed)
     displayGamePlay(b, compPlayer = true); // compMove = true
     } else {
       return compTurn();
     }
}

// function calledNumbers(a) {
//   if(hasBeenPlayed.includes(a)) {return true}
  
// }


function displayGamePlay(input, compPlayer) {
  // console.log('input', input);
  //  console.log(compMove)
  if(!compPlayer) {
    for(let i = 1; i < placement.length+1; i++) {
    if(input === i) {
      placement[i-1] = 'X'
     } 
    
    
   }
  buildTheBoard()  
} else if (compPlayer) { // computer places O on board
  for(let i = 1; i < placement.length+1; i++) {
    if (input === i) {
      placement[input-1] = 'O'
     
  }
  }
  buildTheBoard() 
}  
}

//test for winner
function winner(user) {
  return rows(user) || columns(user) || diags(user);
}
function rows(user) {
  return victory(user, 0, 1, 2) || victory(user, 3, 4, 5) || victory(user, 6, 7, 8);
}
function columns(user) {
  return victory(user, 0, 3, 6) || victory(user, 1, 4, 7) || victory(user, 2, 5, 8);
}
function diags(user) {
  return victory(user, 0, 4, 8) || victory(user, 2, 4, 6);
}
function victory(user, block1, block2, block3) {
  return (placement[block1] === user) && (placement[block2] === user) && (placement[block3] === user);
}

function evilCpu() {
  // console.log(`        /,  ,\\`);
  // console.log(`       /( /\\ )\\`);
   console.log(`      /\\   /\\    `);
  console.log(`   +--------------+`);
  console.log(`   |.------------.|`);
  console.log(`   ||            ||`);
  console.log(`   ||   X    X   || , , ,`);
  console.log(`   ||            || | | |`);
  console.log(`   ||            || \\_|_/`);
  console.log(`   |+------------+|   |`);
  console.log(`   +-..--------..-+   |`);
  console.log(`   .--------------.   |`);
  console.log(`  / /============\\ \\  |`);
  console.log(` / /==============\\ \\ |`);
  console.log(`/____________________\\|`);
  console.log(`\\____________________/|`);
}


// buildTheBoard();
// userInputCheck();


//Pseudo-code for recursive statement
function recurse(cbArr) {
let runFunc = cbArr[0]
runFunc()

//breaking statement
//check if there is a winner
//if winner - declare winner and end game
if(winner('X')) {
      return 'X IS THE WINNER'
    }
if(winner('O')) {
  evilCpu();
  return 'EVIL CPU IS THE WINNER'
    }
if(hasBeenPlayed.length === 9) {
  // console.log('DRAW');
  return 'It\'s a draw'
}

cbArr.reverse()

//pick next element in cbArray [userInputCheck, compTurn] //reverse array 
return recurse(cbArr)

//Run another round of the game
}

console.log(recurse(cbArr))