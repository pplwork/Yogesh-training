function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

function validatePassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return regex.test(password);
}

const submitBtn = document.querySelector("form");
submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value;
  const role = document.querySelector('input[type="radio"]:checked').value;
  const permission = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  if (
    email === "" ||
    password === "" ||
    gender === "Enter your Gender" ||
    role === ""
  ) {
    alert("Enter all the required fields");
  } else if (!validateEmail(email)) {
    alert("Enter valid Email");
  } else if (!validatePassword(password)) {
    alert(
      "Password must be min 6 character with mix of Upercase, lowercase, digits"
    );
  } else if (permission.length === 0 || permission.length < 2) {
    alert("Accept atlease 2 permissions");
  } else {
    document.querySelector("form").remove();

    const output = document.querySelector(".output");
    output.classList.add("outputStyle");

    document.querySelector(".outputHeading").innerHTML = "Confirm Form Details";
    document.getElementById("confirmEmail").innerHTML = `<h3>Email: ${email}</h3>`;

    document.getElementById("confirmPassword").innerHTML = `<h3>Password: ${password}</h3>`;

    document.getElementById("confirmGender").innerHTML = `<h3>Gender: ${gender}</h3>`;

    document.getElementById("confirmRole").innerHTML = `<h3>Role: ${role}</h3>`;

    document.getElementById("confirmPermissions").innerHTML ="<h3>Permissions Accepted: </h3>";
    
    permission.forEach((perm) => { document.getElementById("confirmPermissions").innerHTML += ` ${perm.value} <br>`;});

    document.getElementById("confirmBtn").innerHTML = "<button>Confirm</button>"; 
}
});
