function validatePassword() {
  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;
  const passwordError = document.getElementById("password-error");
  passwordError.style.color = "red";

  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,-.?~\\]/.test(password);

  if (password.length < 8 || !hasNumber || !hasSpecialChar) {
	  //	Checking if user inputs nothing
	  let submitBtn = document.getElementById('pushData').style.display = "none";
	  if (password == "") {
		  passwordError.textContent = "Please input your passowrd.";
	  }else {
		passwordError.textContent = "Password must be at least 8 characters and include at least 1 number and 1 special character.";
		//passwordInput.focus();
	  };
  } else {
	let submitBtn = document.getElementById('pushData').style.display = "block";
	passwordError.style.color = "green";
    passwordError.textContent = "Good Passkey";
    // Continue with the login process (e.g., send data to a server).
  }
}


//	toggles passowrd visibility

document.getElementById("toggle-password").addEventListener("click", function() {
  const passwordInput = document.getElementById("password");
  const passwordType = passwordInput.getAttribute("type");

  if (passwordType === "password") {
    passwordInput.setAttribute("type", "text");
    this.textContent = "Hide Password";
  } else {
    passwordInput.setAttribute("type", "password");
    this.textContent = "Show Password";
  }
});

setInterval(function(){
	validatePassword();
},4000);
