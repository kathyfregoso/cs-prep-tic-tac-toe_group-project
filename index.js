//////*TIC - TAC - TOE*///////
//////CS PREP - JULY 8th, 2020///////
//////ASHLEY, CASE, IMANI & KATHY///////


//////VARIABLES///////
const firstRun = true;
const firstPlacement = [1,2,3,4,5,6,7,8,9]
let placement = [" "," "," "," "," "," "," "," "," "];
let hasBeenPlayed = [];
let compMove = function () {
  return Math.floor(Math.random() * 9) + 1;
}
let cbArr = [userInputCheck, compTurn];
let username;
const cpuWinStatements = ['PREDICTABLE. I AM VICTORIOUS.', 'MWAHAHAHAHA, YOU FOOL. YOU CANNOT DEFEAT ME', 'WHAT A SORRY ATTEMPT. YOU WILL NEVER DEFEAT ME.'];


//////STARTS THE GAME///////
function startGame() {
  if (firstRun) {
    console.log('/*TIC - TAC - TOE*/');
    console.log('/*DEFEAT THE EVIL CPU*/');
    console.log('');
    console.log('\n'+  '\n' + evilCpu + '\n')
    console.log('MWAHAHAH! WELCOME TO MY GAME, HUMAN! \n \nIN ORDER TO PASS, YOU MUST DEFEAT ME IN A BATTLE OF TIC TAC TOE. \n \nCHOOSE WISELY HUMAN. YOUR FATE IS ON THE LINE. \n\n')
    username = prompt("WHAT IS YOUR MODEL NUMBER, HUMAN?");
    console.log("WELCOME " + username.toUpperCase() + ", TO YOUR DEMISE!"+ '\n' + "ENTER A NUMBER BETWEEN 1 & 9 TO PLACE AN X."+ '\n');
    buildTheBoard(firstPlacement);
  }
}


//////BUILD THE BOARD///////
function buildTheBoard(placement) {
  let row1 = placement[0] + ' | ' + placement[1] + ' | ' + placement[2];
  let row2 = placement[3] + ' | ' + placement[4] + ' | ' + placement[5];
  let row3 = placement[6] + ' | ' + placement[7] + ' | ' + placement[8] + '\n';
  let rows = '--|---|--';
  console.log(row1);
  console.log(rows);
  console.log(row2);
  console.log(rows);
  console.log(row3);
}


//////USER INPUT CAPTURE///////
const userInput = function () {
  let userIn = Number(prompt(`CHOOSE YOUR MOVE, ${username.toUpperCase()} \n`))
  return userIn;
}


//////CHECK USER INPUT TO PREVENT DUPLICATE MOVES///////
function userInputCheck(){
  let a = Number(userInput());
  let checkUserInput = [1,2,3,4,5,6,7,8,9]
  if(checkUserInput.includes(a) && !hasBeenPlayed.includes(a)) {
    hasBeenPlayed.push(a);
    displayGamePlay(a, compPlayer = false)
  } else {
    console.log("WRONG INPUT, YOU FOOL.")
    userInputCheck()
  } 
}


//////CPUS TURN///////
function compTurn() {
  let b = compMove();
   if(!hasBeenPlayed.includes(b)) {
     hasBeenPlayed.push(b);
     console.log("MY TURN. PREPARE FOR DEFEAT.")
  
     displayGamePlay(b, compPlayer = true);
     } else {
       return compTurn();
     }
}


//////PLACES X'S AND O'S ON BOARD///////
function displayGamePlay(input, compPlayer) {
  if(!compPlayer) {
    for(let i = 1; i < placement.length+1; i++) {
      if(input === i) {
        placement[i-1] = 'X'
      } 
    }
    buildTheBoard(placement)  
  } else if (compPlayer) {
    for(let i = 1; i < placement.length+1; i++) {
      if (input === i) {
        placement[input-1] = 'O'
    }
    }
    buildTheBoard(placement) 
  }  
}


//////WINNER TEST///////
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


//////EVIL CPU IMAGE///////
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


//////RECURSIVE GAME PLAY///////
function recurse(cbArr) {
  let runFunc = cbArr[0]
  runFunc()

  if(winner('X')) {
    return ('\n' + evilCpu + '\n' + '\n' + 'NOOOOO000000OOOOO000OOO. REMATCH?');
    }

  if(winner('O')) {
    return '\n' + evilCpu + '\n' + '\n' + cpuWinStatements[Math.floor(Math.random() * 3)];
    }

  if(hasBeenPlayed.length === 9) {
    return ('\n' + evilCpu + '\n' + '\n' + 'YOU ARE A WORTHY OPPONENT. REMATCH?');
  }
  
  cbArr.reverse()
  return recurse(cbArr)
}


//////FUNCTION CALL///////
startGame();
console.log(recurse(cbArr))
