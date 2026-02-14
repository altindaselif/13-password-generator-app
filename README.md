# Password Generator App 🔐

A secure and customizable password generator built with **Vanilla JavaScript**. This project focuses on cryptographic security, real-time DOM manipulation and accessible form controls without relying on external libraries.

## 🚀 Overview

The goal was to build a functional tool that allows users to generate secure passwords based on selected criteria (length, uppercase, lowercase, numbers, symbols). The application features a real-time strength indicator, a custom range slider with dynamic background and a one-click copy functionality.

## 🔗 Links

- **Live Site:** [View Live Demo](https://altindaselif.github.io/13-password-generator-app/)
- **Code:** [View GitHub Repository](https://github.com/altindaselif/13-password-generator-app)

## 💡 Key Features

- **🛡️ Secure Generation:** Uses the browser's crypto API for unpredictable randomness.
- **🎚️ Custom Range Slider:** A stylable input range with a dynamic progress fill background.
- **💪 Strength Meter:** Real-time visual feedback (Too Weak to Strong) based on selected complexity.
- **📋 Copy to Clipboard:** Seamless copying functionality with a temporary success message.
- **🔠 Character Options:** Users can filter by uppercase, lowercase, numbers, and symbols.

## 🛠️ Technical Implementation

### 1. Cryptographic Security

Standard random number generators are not suitable for security-sensitive applications.

- **Solution:** The **`window.crypto.getRandomValues()`** method and **`Uint32Array`** were implemented instead of `Math.random()`. This ensures the generated passwords are **cryptographically secure** and mathematically unpredictable.

### 2. Dynamic Slider Styling

Creating a range input where the "filled" part has a different color than the "empty" part requires dynamic CSS handling.

- **Solution:** A dynamic **`linear-gradient`** is applied to the input's background style. The gradient's stop percentage is recalculated within a **JavaScript event listener**, ensuring the fill color perfectly synchronizes with the **slider thumb position**.

### 3. Real-Time Strength Logic

The application needs to provide immediate feedback on the password's complexity without page reloads.

- **Solution:** A dedicated **`calculateStrength` function** analyzes the current **character length** and the number of **checked checkboxes**. It dynamically toggles CSS classes (e.g., `.too-weak`, `.strong`) on the indicator bars to visually represent the security level.

## 📸 Screenshots

- [View Desktop Version](./desktop-screenshot.png)
- [View Mobile Version](./mobile-screenshot.png)

## 🧰 Built With

- **Semantic HTML5**
- **CSS3 (Custom Properties & Grid)**
- **Vanilla JavaScript (ES6+)**
- **Web Crypto API**
- **Mobile-First Workflow**

## ✍️ Author

- **LinkedIn:** [Elif Altındaş](https://www.linkedin.com/in/elifaltindas/)
- **Frontend Mentor:** [@altindaselif](https://www.frontendmentor.io/profile/altindaselif)
- **GitHub:** [@altindaselif](https://github.com/altindaselif)
