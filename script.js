let userCommand;
let consoleScreen = document.querySelector('.screen');
let inputButton = document.querySelector('.promptButton');
let inputField = document.querySelector('.promptField[type="text"]');
let inputValue = document.querySelector('form.input').addEventListener('submit', (userCommand) => {
  userCommand.preventDefault();
  userCommand = inputField.value;
  console.log(userCommand);
  printCommand(userCommand);
  inputField.value = '';
});

function printCommand(userCommand) {
  consoleScreen.innerHTML +=`<p>${userCommand}</p>`;
};
