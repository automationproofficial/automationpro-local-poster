document.getElementById('authForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const password = document.getElementById('password').value;
  if (password === "autoposter2025") {
    document.getElementById('downloads').classList.remove('hidden');
  } else {
    alert("Incorrect password. Try again.");
  }
});
