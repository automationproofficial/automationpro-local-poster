document.getElementById("authForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const password = document.getElementById("password").value;
  if (password === "autoposter2025") {
    window.location.href = "dashboard.html"; // 👈 or "landing.html" or whatever the destination is
  } else {
    alert("Incorrect password. Please try again.");
  }
});
