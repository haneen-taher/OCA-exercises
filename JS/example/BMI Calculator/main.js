document.getElementById("btn-1").addEventListener("click", calculateBmi);
document.getElementById("btn-2").addEventListener("click", reload);
function calculateBmi() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi = weight / (height * height);
  document.getElementById("heading").innerHTML = "Your BMI is:";
  document.getElementById("bmi-output").innerHTML = bmi.toFixed(1);

  if (bmi <= 18.4) {
    document.getElementById("message").innerHTML = "You are underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById("message").innerHTML = "You are healthy";
  } else if (bmi >= 25 && bmi <= 39.9) {
    document.getElementById("message").innerHTML = "You are overweight";
  } else if (bmi >= 40) {
    document.getElementById("message").innerHTML = "You are obese";
  }
}

function reload() {
  window.location.reload();
}

const darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
