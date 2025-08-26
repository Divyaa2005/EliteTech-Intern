function showForm(formId) {
  document.querySelectorAll(".form-container").forEach(div => {
    div.classList.remove("active");
  });
  document.getElementById(formId).classList.add("active");
  document.getElementById("message").innerText = ""; // clear old message
}

function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;
  if (user && pass) {
    document.getElementById("message").innerText = "✅ Welcome back, " + user + "!";
  } else {
    document.getElementById("message").innerText = "❌ Please enter username and password!";
  }
}

function register() {
  let user = document.getElementById("regUser").value;
  let email = document.getElementById("regEmail").value;
  let pass = document.getElementById("regPass").value;
  if (user && email && pass) {
    document.getElementById("message").innerText = "🎉 Account created for " + user + "!";
    showForm("login"); // auto switch to login after register
  } else {
    document.getElementById("message").innerText = "❌ Please fill all fields!";
  }
}
