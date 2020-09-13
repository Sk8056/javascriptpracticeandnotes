const myStates = [
    "123", 
    456, 
];

var forMyEach = (e) => {
   if(typeof e === 'string') {
       console.log(parseInt(e) + 5); 
   } else {
       console.log(e + 5);
   } 

} 
myStates.forEach(forMyEach);

//for in -> for objects and for of loop -> majorly for array
for(const n of myStates) {
    console.log(n);
}

var person = {
    name : "Sarang",
    hobbies : [
        "Cricket",
        "Coding"
    ],
    college : "SOCET"
};

for(const n in person) {
    console.log(person[n]);
} //returns all keys from the object.



// for(let i = 0; i < myStates.length; i++) {
//     console.log(myStates[i]);
// }

// for(let i = 0; i < person["hobbies"].length; i++) {
//     console.log(person["hobbies"][i]);
// }

    