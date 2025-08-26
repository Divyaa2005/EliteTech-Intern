function checkAnswer(btn, correct) {
  const result = document.getElementById("quiz-result");
  if (correct) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
    document.getElementById("progressBar").value = 40; // update progress
  } else {
    result.textContent = "❌ Wrong, try again!";
    result.style.color = "red";
  }
}
