const AccountId=14453
let accountemail="as@gmial.com"
var accountPASWORD="12345"
accountcity="Jaipur"  // not a good pratice
let accountState;  //OUTPUT- undefined

// AccountId="1234"

// console.log(AccountId) 
// output-Assignment to constant variable.

accountemail="asdfg@gmail.com"
accountPASWORD="1234"
accountcity="Delhi"  // by default take let

console.table([accountemail,accountPASWORD,accountcity,accountState]);

/* var is not used becoz of issue of block scope and functional scope */