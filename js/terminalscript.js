// Get required elements
const inputField = document.getElementById('terminal-input');
const terminalBody = document.querySelector('.terminal-body');

// Define commands
const commands = {
  help: 'List of available commands: <br> - help: Display this message <br> - clear: Clear the terminal screen',
  clear: function() {
    terminalBody.innerHTML = '';
    inputField.value = '';
  },
  default: 'Command not found. Type "help" for a list of available commands.'
}

// Add event listener for input field
inputField.addEventListener('keydown', function(e) {
  // Check if enter key is pressed
  if (e.keyCode === 13) {
    // Get input value
    const input = inputField.value.trim().toLowerCase();
    // Get command function or default
    const command = commands[input] || commands.default;
    // Display command result
    terminalBody.innerHTML += `<div class="terminal-output">${inputField.value}</div>`;
    if (typeof command === 'function') {
      command();
    } else {
      terminalBody.innerHTML += `<div class="terminal-output">${command}</div>`;
    }
    // Clear input field
    inputField.value = '';
  }
});
