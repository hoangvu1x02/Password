
// Declare Variables
var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var NUMBER = "0123456789";
var LOWER = "abcdefghijklmnopqrstuvwxyz";
var SYMBOLS = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var newVAR = "";
var pass_length;
var isPasswordgeneratorWorking = true;

// Ask if users want which element in their password
var userconfirm = confirm("Do you want Uppercase?");
if (userconfirm === true) {
    newVAR = newVAR + UPPER;
};

var userconfirm1 = confirm ("Do you want lowercase?");
if (userconfirm1 === true){
    newVAR = newVAR + LOWER;
};

var userconfirm2 = confirm ("Do you want numbers?");
if (userconfirm2 === true){
    newVAR = newVAR + NUMBER;
};

var userconfirm3 = confirm("Do you want special characters?");
if (userconfirm3 === true){
    newVAR = newVAR + SYMBOLS;
};

if (userconfirm === false && userconfirm1 === false && userconfirm2 === false && userconfirm3 === false) {
    alert ("You need to specify your password!!!");
    isPasswordgeneratorWorking = false;
};

// The function that creates a random password accordingly to user's request!
function random_password_generate(max,min){
    var Passwordlength = Math.floor(Math.random() * (max - min + 1) + min);
    var randPassword = Array(Passwordlength).fill(newVAR).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join("");
    return randPassword;
};


// The button that displays generated passwords
document.getElementById("generator").addEventListener("click", function(){
    var user_wanted_length = prompt ("Please enter the maximum length of your Password :) The minimum is 8 and maximum is 128");
    pass_length = Number(user_wanted_length);
    
    if (pass_length >= 8 && pass_length < 128) {
        random_password = random_password_generate (pass_length,8);
        document.getElementById("YourPassword").value = random_password;
    } else if (isPasswordgeneratorWorking == false) {
        alert ("You need at least one element to generate a Password :) Please refesh the page to start again!");
    } else if (pass_length < 8 && pass_length > 0){
        alert ("Your length is too short");
    }   else if (pass_length > 128) {
        alert ("Your length is too long");
    } else
        alert ("Your answer is invalid! Please enter a number");

});
    

// Copy password that just being generated
document.getElementById("Copy").addEventListener("click", function(){
    var copytext = document.getElementById("YourPassword");
    copytext.select();
    document.execCommand("copy");
    alert("Copied the Text: " + copytext.value);
});