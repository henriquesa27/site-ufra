const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

toggleBtn.addEventListener('click', function() {
  sidebar.classList.toggle('collapsed');
  content.classList.toggle('expanded');
});