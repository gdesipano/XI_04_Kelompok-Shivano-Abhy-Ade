document.querySelectorAll('.showTable').forEach(button => {
  button.addEventListener('click', function() {
      this.nextElementSibling.style.display = 'block';
  });
});

document.querySelectorAll('.closeTable').forEach(button => {
  button.addEventListener('click', function() {
      this.parentElement.style.display = 'none';
  });
});
