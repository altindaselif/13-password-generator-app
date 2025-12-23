// const generatedPassword = document.querySelector(".password-output");
// const copyInfo = document.querySelector(".copy-info");
// const copyButton = document.querySelector(".copy-button");

// const charLengthNumber = document.querySelector(".length-number");
// const charLengthSlider = document.getElementById("length-slider");

// const allCheckboxes = document.querySelectorAll(".checkbox");
// const checkboxUppercase = document.getElementById("check-uppercase");
// const checkboxLowercase = document.getElementById("check-lowercase");
// const checkboxNumbers = document.getElementById("check-numbers");
// const checkboxSymbols = document.getElementById("check-symbols");

// const strengthContainer = document.querySelector(".strength-level");
// const strengthInfo = document.querySelector(".level-info");
// const generateButton = document.querySelector(".generate-button");

// const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
// const numbers = "0123456789";
// const symbols = "!@#$%^&*()_+?=";

// const calculateStrength = function () {
//   let countStrength = 0;
//   const charLength = parseInt(charLengthSlider.value);

//   if (checkboxUppercase.checked) countStrength++;
//   if (checkboxLowercase.checked) countStrength++;
//   if (checkboxNumbers.checked) countStrength++;
//   if (checkboxSymbols.checked) countStrength++;

//   strengthContainer.classList.remove("too-weak", "weak", "medium", "strong");
//   strengthInfo.textContent = "";

//   if (charLength < 6 && countStrength > 0) {
//     countStrength = 1;
//   }
//   if (countStrength === 1) {
//     strengthContainer.classList.add("too-weak");
//     strengthInfo.textContent = "TOO WEAK";
//   }
//   if (countStrength === 2) {
//     strengthContainer.classList.add("weak");
//     strengthInfo.textContent = "WEAK";
//   }
//   if (countStrength === 3) {
//     strengthContainer.classList.add("medium");
//     strengthInfo.textContent = "MEDIUM";
//   }
//   if (countStrength === 4) {
//     strengthContainer.classList.add("strong");
//     strengthInfo.textContent = "STRONG";
//   }
// };

// charLengthSlider.addEventListener("input", function (e) {
//   const currentValue = e.target.value;

//   const minValue = e.target.min;
//   const maxValue = e.target.max;

//   // Percentage = (CurrentValue - MinValue) / (MaxValue - MinValue) * 100
//   const currentPercentage =
//     ((currentValue - minValue) / (maxValue - minValue)) * 100;

//   charLengthNumber.textContent = currentValue;

//   charLengthSlider.style.background = `linear-gradient(to right, var(--green-200) 0%, var(--green-200) ${currentPercentage}%, var(--black) ${currentPercentage}%, var(--black) 100%)`;
// });

// generateButton.addEventListener("click", function () {
//   let password = "";
//   let characterPool = "";

//   if (checkboxUppercase.checked) characterPool += uppercaseLetters;
//   if (checkboxLowercase.checked) characterPool += lowercaseLetters;
//   if (checkboxNumbers.checked) characterPool += numbers;
//   if (checkboxSymbols.checked) characterPool += symbols;
//   if (characterPool === "") {
//     alert("Please select at least one option!");
//     return;
//   }

//   for (let i = 0; i < charLengthSlider.value; i++) {
//     let characterIndex = Math.floor(Math.random() * characterPool.length);
//     // Think of Math.random() as the slider handle position (0% to 100%). Multiplying by length gives us the exact spot in the pool.
//     password += characterPool[characterIndex];
//   }

//   generatedPassword.textContent = password;
//   generatedPassword.classList.add("active");
// });

// allCheckboxes.forEach((checkbox) => {
//   checkbox.addEventListener("change", calculateStrength);
// });
// charLengthSlider.addEventListener("input", calculateStrength);

// copyButton.addEventListener("click", function () {
//   const password = generatedPassword.textContent;

//   if (password === "" || password === "P4$5W0rD!") return;

//   navigator.clipboard.writeText(password);

//   copyInfo.style.display = "block";

//   setTimeout(() => {
//     copyInfo.style.display = "none";
//   }, 2000);
// });

// calculateStrength();

// // Trigger 'input' event to update slider background color on page load.
// const e = new Event("input");
// charLengthSlider.dispatchEvent(e);
