const accountId = 144553;
let accountEmail = "rayan@google.com";
var accountPassword = "12345";
accountCity = "Vancouver";
let accountState;

//accountId = 2;//not allowed

accountEmail = "rayan@outlook.com";
accountPassword = "121212";
accountCity = "Toronto";
console.log(accountId);
/*
Prefer not to use var because of issue in block scope
and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);