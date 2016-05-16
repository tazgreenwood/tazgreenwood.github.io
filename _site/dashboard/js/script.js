var login = function(){
  var username = document.getElementById('username').value.toUpperCase();
  console.log(username);
  var password = document.getElementById('password').value.toUpperCase();
  if (username === 'TAZ' && password === '1234') {
    location.href = "admin/";
  } else {
    document.getElementById('error').style.display = 'block';
  }
};
