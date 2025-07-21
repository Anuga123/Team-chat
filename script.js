const chatBox = document.getElementById('chatBox');
const form = document.getElementById('chatForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && message) {
    const msgElement = document.createElement('div');
    msgElement.className = 'message';
    msgElement.innerHTML = `<span class="name">${name}:</span> ${message}`;
    chatBox.appendChild(msgElement);

    chatBox.scrollTop = chatBox.scrollHeight;
    form.reset();
  }
});
