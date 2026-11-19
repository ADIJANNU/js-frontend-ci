const statusElement = document.getElementById("status");

function updateStatus(message) {
  if (statusElement) {
    statusElement.textContent = message;
  }
}

updateStatus("JavaScript CI Pipeline Working!");
