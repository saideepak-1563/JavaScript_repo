const accountId = 1223344
let accountEmail = "deepak@google.com"
var accountPassword = "12345"
accountCity = "Hyderabad"
let accountState;

// accountId = 2  // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "11111"
accountCity = "mumbai"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/ 