var isEven = (num) => {
  num % 2 == 1;
}
var isCheck = () => { //arrow function must have return value;
    
}
var age = (n) => {
   return n % 2 == 0;
}

function a(name, myarrow) {
    return myarrow(name);
} 

console.log("Result" + " " + a("1", (n) => {
    return n % 2 == 0;
}));

console.log([1,2].every((num) => {
      console.log(num);
      return num % 2 == 1;
}));

//console.log(isEven(2));

//predicate function
var advance = (n) => {
    return n > 10 ? "Greater than 10" : "Smaller than 10";
}
//main function using predicate.
function runningPredicates(array, predicate) {
     for(i = 0; i < array.length; ++i) {
         if("Smaller than 10" === predicate(array[i])) {
             return "Smaller than 10";
         } else {
             return "Greater than 10";
         }
     }  
}
//testing predicates
console.log("Predicate one : " + " " + runningPredicates([10,12,13], (n) => {
    return n > 10 ? "Greater than 10" : "Smaller than 10";
}));






