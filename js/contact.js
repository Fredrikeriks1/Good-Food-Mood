var fields = {};

document.addEventListener("DOMContentLoaded", function () {
  fields.firstName = document.getElementById("firstName");
  fields.lastName = document.getElementById("lastName");
  fields.email = document.getElementById("email");
  fields.question = document.getElementById("question");
});

function getGender() {
  return document.querySelector('input[name="gender"]:checked');
}

function isNotEmpty(value) {
  console.log(value);
  if (value == null || typeof value == "undefined") return false;
  return value.length > 0;
}

function isEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value);
  if (!isFieldValid) {
    field.className = "placeholderRed";
  } else {
    field.className = "";
  }

  return isFieldValid;
}

function isValid() {
  var valid = true;

  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.lastName, isNotEmpty);
  valid &= fieldValidation(fields.gender, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.question, isNotEmpty);

  return valid;
}

class User {
  constructor(firstName, lastName, gender, email, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.question = question;
  }
}

function sendContact() {
  fields.gender = getGender();

  if (isValid()) {
    let usr = new User(
      firstName.value,
      lastName.value,
      fields.gender.value,
      email.value
    );

    alert(`Thank you, ${usr.firstName}! We'll get back to you shortly.`);
  } else {
    alert(
      "Something is wrong - Check that all fields are filled out correctly"
    );
  }
}
