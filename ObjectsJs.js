var user = {
    firstName : "Sarang",
    age : "23",
    role : "Admin",
    loginCount : 32,
    facebookLoggedIn : true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName); //here this points to user object coz it is not a regulr function. 
        function sayHi() {
            console.log(this); //here this points to window object coz it is regular function.
        }
        sayHi();
    },

    getCourseContent: function () { //this function is a part of user object. it is not a regular function.
        return `${this.firstName} is my firstname`;
    }

};

console.log(user.getCourseContent());

function saySomething() { // this is a regular function so, it is a part of global object that is window object.
    console.log("Saying Hello");
}
saySomething();