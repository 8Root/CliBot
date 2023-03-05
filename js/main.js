const terminalOutput = document.getElementById('terminal-output');
const commandLineInput = document.getElementById('command-line');

// Add a command to the terminal output
function addOutput(output) {
  const newLine = document.createElement('div');
  newLine.innerText = output;
  terminalOutput.appendChild(newLine);
}

// Handle command input
function handleCommand(command) {
  switch (command) {
    case 'help':
      addOutput('Supported commands: help, clear, date, echo');
      break;
    case 'clear':
      terminalOutput.innerHTML = '';
      break;
    case 'date':
      addOutput(new Date().toLocaleString());
      break;
    default:
      addOutput(`Unknown command: ${command}`);
  }
}

// Handle command line submission
function handleCommandLineSubmit(event) {
  event.preventDefault();
  const command = commandLineInput.value;
  addOutput(`$ ${command}`);
  handleCommand(command);
  commandLineInput.value = '';
}

// Attach event listener to command line input
document.getElementById('terminal-input').addEventListener('submit', handleCommandLineSubmit);
