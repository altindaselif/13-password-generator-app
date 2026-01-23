const generatedPassword = document.querySelector(".password-output");
const copyInfo = document.querySelector(".copy-info");
const copyButton = document.querySelector(".copy-button");

const charLengthNumber = document.querySelector(".length-number");
const charLengthSlider = document.getElementById("length-slider");

const allCheckboxes = document.querySelectorAll(".checkbox");
const checkboxUppercase = document.getElementById("check-uppercase");
const checkboxLowercase = document.getElementById("check-lowercase");
const checkboxNumbers = document.getElementById("check-numbers");
const checkboxSymbols = document.getElementById("check-symbols");

const strengthLevelContainer = document.querySelector(".strength-level");
const strengthLevelInfo = document.querySelector(".level-info");
const generateButton = document.querySelector(".generate-button");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+?=";

const calculateStrength = () => {
  let countStrength = 0;
  const charLength = parseInt(charLengthSlider.value);

  allCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) countStrength++;
  });

  strengthLevelContainer.classList.remove(
    "too-weak",
    "weak",
    "medium",
    "strong",
  );
  strengthLevelInfo.textContent = "";

  if (charLength < 6 && countStrength > 0) {
    countStrength = 1;
  }
  if (countStrength === 0) return;

  const strengthClasses = ["", "too-weak", "weak", "medium", "strong"];
  const strengthTexts = ["", "TOO WEAK", "WEAK", "MEDIUM", "STRONG"];

  strengthLevelContainer.classList.add(strengthClasses[countStrength]);
  strengthLevelInfo.textContent = strengthTexts[countStrength];
};

charLengthSlider.addEventListener("input", (e) => {
  const currentValue = e.target.value;
  const minValue = e.target.min;
  const maxValue = e.target.max;

  // Percentage = (currentValue - MinValue) / (MaxValue - MinValue) * 100
  const currentPercentage =
    ((currentValue - minValue) / (maxValue - minValue)) * 100;

  charLengthNumber.textContent = currentValue;

  charLengthSlider.style.background = `linear-gradient(to right, var(--green-200) 0%, var(--green-200) ${currentPercentage}%, var(--black) ${currentPercentage}%, var(--black) 100%)`;

  calculateStrength();
});

generateButton.addEventListener("click", () => {
  let password = "";
  let characterPool = "";

  if (checkboxUppercase.checked) characterPool += uppercaseLetters;
  if (checkboxLowercase.checked) characterPool += lowercaseLetters;
  if (checkboxNumbers.checked) characterPool += numbers;
  if (checkboxSymbols.checked) characterPool += symbols;
  if (characterPool === "") {
    alert("Please select at least one option!");
    return;
  }

  for (let i = 0; i < charLengthSlider.value; i++) {
    let characterIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[characterIndex];
  }

  generatedPassword.textContent = password;
  generatedPassword.classList.add("active");
});

allCheckboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", calculateStrength),
);

copyButton.addEventListener("click", () => {
  const password = generatedPassword.textContent;

  if (password === "" || password === "P4$5W0rD!") return;

  navigator.clipboard.writeText(password);

  copyInfo.classList.add("active");

  setTimeout(() => {
    copyInfo.classList.remove("active");
  }, 2000);
});

calculateStrength();
