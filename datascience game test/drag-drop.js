let dragged;

document.addEventListener('dragstart', function(event) {
  dragged = event.target;
  event.dataTransfer.setData('text/plain', null);
});

document.addEventListener('dragover', function(event) {
  event.preventDefault();
});

document.addEventListener('drop', function(event) {
  event.preventDefault();
  if (event.target.className === 'custom-element') {
    event.target.appendChild(dragged);
  }
});
