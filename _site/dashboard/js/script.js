var login = function(){
  var username = prompt("Enter your username");
  var password = prompt("Enter your password");
  if (username === 'taz' && password === '1234') {
    location.href = "admin/index.html";
  } else {
    username = prompt("Incorrect. Enter your username");
    password = prompt("Incorrect. Enter your password");
  }
};
