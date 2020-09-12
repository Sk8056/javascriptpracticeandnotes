// === this check type and then start doing comparsion and == don't check the type also.
// if(false == 0) -> true because false is evaluated as number here.,  if(false === 0) -> false
//if("2" == 2) -> false, var k = "2"; if(k == 2) -> true as k has value 2. if(k === 2) -> false because here type check happens;

// isLoggedIn = false;
// isEmailVerified = true;
// cardInfo = true;
// console.log(isLoggedIn ? isEmailVerified ? cardInfo :"No transactions" :"No transactions");

// switch(key) {
//     case "Admin" :
//         console.log("Full Access");
//         break;
//     case "SubAdmin":
//         console.log("Less Access");
//         break;
//     default:
//         console.log("Invalid User");
//         break;
// }
// if("hello") -> correct, here String considered as expression.

var key = "2";
if(2 === "2") {
    console.log("Magnificant");
}


