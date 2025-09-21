// 


const accountName =  "Sahil Jain";
let accountEmail = "sahiljain@google.com";
var accountId = 67890;    // Prefer not to use var
                          // because of issue in block scope and functional scope
                          
accountCity = "gwalior";  // not a good practice, so avoid it
let accountState;   // undefined

console.table([accountName, accountEmail, accountId, accountCity, accountState]);

