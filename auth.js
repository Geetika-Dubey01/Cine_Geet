/***********************
 * Password Visibility
 ***********************/
function togglePasswordVisibility(inputId, checkboxId) {
    const input = document.getElementById(inputId);
    const checkbox = document.getElementById(checkboxId);

    if (input && checkbox) {
        checkbox.addEventListener("change", function () {
            input.type = this.checked ? "text" : "password";
        });
    }
}

// Signup Password & Confirm Password
togglePasswordVisibility("password", "togglePassword");
togglePasswordVisibility("confirmPassword", "toggleConfirmPassword");

// Login Password
togglePasswordVisibility("passwordLogin", "togglePasswordLogin");


/***********************
 * Password Strength (Signup)
 ***********************/
const passwordInput = document.getElementById("password");
if (passwordInput) {
    passwordInput.addEventListener("input", function () {
        const val = this.value;
        let strength = "Weak";

        if (val.length >= 6 && val.match(/(?=.*[0-9])(?=.*[a-zA-Z])/)) {
            strength = "Medium";
        }
        if (val.length >= 8 && val.match(/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])/)) {
            strength = "Strong";
        }

        const strengthEl = document.getElementById("strength");
        if (strengthEl) {
            strengthEl.innerText = "Password Strength: " + strength;
        }
    });
}


/***********************
 * OTP Countdown
 ***********************/
function startOtpCountdown(countdownId) {
    let time = 60;
    const countdownEl = document.getElementById(countdownId);

    if (!countdownEl) return;

    countdownEl.innerText = `OTP sent! ${time}s remaining`;

    const interval = setInterval(() => {
        time--;
        if (time <= 0) {
            clearInterval(interval);
            countdownEl.innerText = "";
        } else {
            countdownEl.innerText = `OTP sent! ${time}s remaining`;
        }
    }, 1000);
}

// Send OTP for Signup
const sendOtpBtn = document.getElementById("sendOtpBtn");
if (sendOtpBtn) {
    sendOtpBtn.addEventListener("click", function () {
        const phone = document.getElementById("phone").value;
        if (phone.length < 10) {
            alert("Enter valid phone number.");
            return;
        }
        startOtpCountdown("otpCountdown");
    });
}

// Send OTP for Login
const otpLoginBtn = document.getElementById("otpLoginBtn");
if (otpLoginBtn) {
    otpLoginBtn.addEventListener("click", function () {
        const emailOrPhone = document.getElementById("emailLogin").value;
        if (emailOrPhone === "") {
            alert("Enter Email or Phone.");
            return;
        }
        startOtpCountdown("otpCountdownLogin");
    });
}


/***********************
 * Signup Form Submit
 ***********************/
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const pwd = document.getElementById("password").value;
        const confirmPwd = document.getElementById("confirmPassword").value;

        if (pwd !== confirmPwd) {
            document.getElementById("pwdMessage").innerText = "Passwords do not match!";
            return;
        }

        alert("Signup Successful! Redirecting to Login.");
        window.location.href = "login.html";
    });
}


/***********************
 * Login Form Submit
 ***********************/
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Login Successful! Redirecting to Home.");
        window.location.href = "index.html";
    });
}
