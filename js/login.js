// link to homepage
var logButton = document.querySelector('.loginButton');

logButton.addEventListener("click", function(event) {
  event.preventDefault();
  window.location = "homepage.html";
});

// link to register sucess

var regButton = document.querySelector('.registerButton');

regButton.addEventListener("click", function(event) {
  event.preventDefault();
  window.location = "sucessreg.html";
});

// change login <=> register
var bckgndlog = document.querySelector('.login');
var logblock = document.querySelector('.loginGroupIn');
var bckgndreg = document.querySelector('.register');
var regblock = document.querySelector('.registerGroupIn');

bckgndlog.addEventListener("click", function () {
  bckgndlog.style.backgroundColor = "#FCFAFA";
  logblock.style.display = "block";
  bckgndreg.style.backgroundColor = "#E6E4E4";
  regblock.style.display = "none";
})

bckgndreg.addEventListener("click", function () {
  bckgndlog.style.backgroundColor = "#E6E4E4";
  logblock.style.display = "none";
  bckgndreg.style.backgroundColor = "#FCFAFA";
  regblock.style.display = "block";
})
