const emailRegex = /^[a-zA-Z._%+-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,}$/;

function validate(email) {
  return emailRegex.test(email);
}

const email = "john@gmail.com";
console.log(validate(email));
