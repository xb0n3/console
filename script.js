let userCommand;
let noteLog = '';
let consoleScreen = document.querySelector('.screen');
let inputButton = document.querySelector('.promptButton');
let inputField = document.querySelector('.promptField[type="text"]');
let inputValue = document.querySelector('form.input').addEventListener('submit', (userCommand) => {
  userCommand.preventDefault();
  userCommand = inputField.value;
  checkCommand(userCommand);
  console.log(userCommand);
  focusScreen();
  inputField.value = '';
});

function checkCommand(userCommand) {
  switch(true) {
    case (userCommand == '' || userCommand == null || userCommand == undefined):
      return;
      break;
    case (userCommand == '!calc'):
      printCommand('> Entered calc mode');
      calcMode(userCommand);
      break;
    case (userCommand == '!note'):
      printCommand('> Entered note mode');
      noteMode(userCommand);
      break;
    case (userCommand == '!game'):
      printCommand('> Entered game mode');
      gameMode(userCommand);
      break;
    default:
      return;
      break;
  }
};

function printCommand(userCommand) {
  consoleScreen.innerHTML +=`<p>${userCommand}</p>`;
};

function focusScreen() {
  consoleScreen.scrollTop = consoleScreen.scrollHeight;
};

function calcMode(userCommand) {
  alert('calcMode');
}

function noteMode(userCommand) {
  switch(true) {
    case (userCommand == '' ||
          userCommand == null || 
          userCommand == undefined):
      break;
    case (userCommand == '!print'):
      alert('!print');
      break;
    case (userCommand == '!delete'):
      alert('!delete');
      break;
    case (userCommand == '!clear'):
      alert('!clear');
      break;
    case (userCommand == '!reset'):
      alert('!reset');
      break;
    case (userCommand == '!help'):
      alert('!help');
      break;
    case (userCommand == '!exit'):
      alert('!exit');
      break;
    default:
      if (noteLog == '') {
        noteLog += userCommand;
      } else {
        noteLog += ' ' + userCommand;
      }
      break;
  }
};

function gameMode(userCommand) {
  printCommand('> Game mode is currently unavailable');
}
