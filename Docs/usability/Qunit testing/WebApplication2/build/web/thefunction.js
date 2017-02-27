/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function isEven(val) {
    return val % 2 === 0;
}
function placetest(String){
    return String;
}
function isValidDate(dateString)
{
    // First check for the pattern
    var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

    if(!regex_date.test(dateString))
    {
        return false;
    }

    // Parse the date parts to integers
    var parts   = dateString.split("-");
    var day     = parseInt(parts[2], 10);
    var month   = parseInt(parts[1], 10);
    var year    = parseInt(parts[0], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
    {
        return false;
    }

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    {
        monthLength[1] = 29;
    }

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function timeformat(String){
    var hours;
    if (hours = "24 hours"){
    return "24 hour format"
}
    else{
        return "12 hour format"
    
}}
function phonenumber(inputtxt) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno)) {
    return true;
  }
  else {
    alert("message");
    return false;
  }
}