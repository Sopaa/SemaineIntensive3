// link to homepage

var logButton = document.querySelector('.loginButton');

logButton.addEventListener("click", function(event) {
  event.preventDefault();
  window.location = "homepage.html";
});


// change login <=> register

var bckgndlog = document.querySelector('.login');
var logblock = document.querySelector('.loginGroupIn');
var bckgndreg = document.querySelector('.register');
var regblock = document.querySelector('.registerGroupIn');

bckgndlog.addEventListener("click", function() {
  bckgndlog.style.backgroundColor = "#2A2D34";
  logblock.style.display = "flex";
  bckgndreg.style.backgroundColor = "#707070";
  regblock.style.display = "none";
})

bckgndreg.addEventListener("click", function() {
  bckgndlog.style.backgroundColor = "#707070";
  logblock.style.display = "none";
  bckgndreg.style.backgroundColor = "#2A2D34";
  regblock.style.display = "flex";
})


// change register <=>success

var regButton = document.querySelector('.registerButton');
var bckgndregsucc = document.querySelector('.successReg')
var bckgndlog = document.querySelector('.login');
var bckgndreg = document.querySelector('.register');
var noaccountbutton = document.querySelector('.noAccountContainer');

regButton.addEventListener("click", function(event) {
  event.preventDefault();
  regblock.style.display = "none";
  bckgndregsucc.style.display = "flex";
  bckgndlog.style.display = "none";
  bckgndreg.style.display = "none";
  noaccountbutton.style.display = "none";
});
