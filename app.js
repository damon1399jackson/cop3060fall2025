console.log("Welcome!");
console.log("Repository: https://github.com/damon1399jackson/cop3060fall2025.git");

let age = 20, agestr = "20", c = true, d = [], e = null;
const person = {};

age++; //arithmetic operator demonstration (incrementation).
console.log(age === agestr); //strict comparison operator demonstration. It will display false b/c the variables have data of different types.
if (age != agestr) //logical operator demonstration.
  console.log("Numbers and strings are not equal.");

              
function getName() {

}

function checkPass() { 
  const password = document.getElementById("pword").value;
  if (password.length < 6)
    console.out("Invalid password");
  else 
    console.out("Password is valid");
}

function checkEmail() {
  let email = document.getElementById("email").value;
  let v = null;
  if (email.length >= 10) {
      v = true;
  }
  else {
      v = false;
}

