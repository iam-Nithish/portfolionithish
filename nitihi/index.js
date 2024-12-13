// Update time dynamically
function updateTime() {
  const timeElement = document.querySelector('.time p:last-child');
  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = currentTime;
}

setInterval(updateTime, 1000); // Update every second
