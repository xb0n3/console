let userCommand;
let calcModeSwitch = false;
let noteModeSwitch = false;
let gameModeSwitch = false;
let calcHelp = `The following commands are available in calc mode:<br>
!reset (clear the console)<br>
!help (display this message)<br>
!exit (exit to menu mode)`;
let noteHelp = `The following commands are available in note mode:<br>
!print (print note documet)<br>
!delete (delete the last word)<br>
!clear (reset note document)<br>
!reset (clear the console)<br>
!help (display this message)<br>
!exit (exit to menu mode)`;
let consoleHelp = `The following commands are available:<br>
!calc (enter calc mode)<br>
!note (enter note mode)<br>
!game (enter game mode)<br>
!exit (to exit the above modes)<br>
!reset (clear the console)<br>
!user (to change user)<br>
!help (display this message)`;
let noteLog = '';
let notePosition = '';
let consoleScreen = document.querySelector('.screen');
let inputButton = document.querySelector('.promptButton');
let inputField = document.querySelector('.promptField[type="text"]');
let inputValue = document.querySelector('form.input').addEventListener('submit', userCommand => {
  userCommand.preventDefault();
  userCommand = inputField.value;
  if (calcModeSwitch == true) {
    calcMode(userCommand);
  } else if (noteModeSwitch == true) {
    noteMode(userCommand);
  } else if (gameModeSwitch == true) {
    gameMode(userCommand);
  } else { checkCommand(userCommand); }
  console.log(userCommand);
  focusScreen();
});

function checkCommand(userCommand) {
  switch(true) {
    case (userCommand == '' || 
          userCommand == null || 
          userCommand == undefined):
      return;
      break;
    case (userCommand == '!calc'):
      printCommand('> Entered calc mode');
      calcModeSwitch = true;
      break;
    case (userCommand == '!note'):
      printCommand('> Entered note mode');
      noteModeSwitch = true;
      break;
    case (userCommand == '!game'):
      gameMode(userCommand);
      break;
    case (userCommand == '!help'):
      printCommand(consoleHelp);
      break;
    case (userCommand == '!reset'):
      resetScreen();
      break;
    default:
      printCommand('Invalid command')
      break;
  }
};

function printCommand(userCommand) {
  consoleScreen.innerHTML +=`<p>${userCommand}</p>`;
};

function focusScreen() {
  consoleScreen.scrollTop = consoleScreen.scrollHeight;
  inputField.value = '';
};

function calcMode(userCommand) {
  switch(true) {
    case (userCommand == '!exit'):
      noteModeSwitch = false;
      printCommand('> Entered menu mode');
      break;
  }
};

function noteMode(userCommand) {
  switch(true) {
    case (userCommand == '!note' || 
          userCommand == '' || 
          userCommand == null || 
          userCommand == undefined):
      return;
      break;
    case (userCommand == '!print'):
      printCommand(noteLog);
      break;
    case (userCommand == '!delete'): // needs fixing
      do {
        noteLog.charAt(--notePosition);
      } while (noteLog.charAt(notePosition) != ' ');
      noteLog = noteLog.substring(0, notePosition);
      printCommand(noteLog);
      break;
    case (userCommand == '!clear'):
      printCommand('Document has been cleared')
      noteLog = '';
      break;
    case (userCommand == '!reset'):
      resetScreen();
      break;
    case (userCommand == '!help'):
      printCommand(noteHelp);
      break;
    case (userCommand == '!exit'):
      noteModeSwitch = false;
      printCommand('> Entered menu mode');
      break;
    default:
      if (noteLog == '') {
        noteLog += userCommand;
      } else {
        noteLog += ' ' + userCommand;
      }
      printCommand(noteLog);
      break;
  }
};

function gameMode(userCommand) {
  printCommand('> Game mode is currently unavailable');
  printCommand('> Entered menu mode');
};

function resetScreen() {
  consoleScreen.innerHTML = '';
};
