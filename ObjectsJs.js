var user = {
    firstName : "Sarang",
    age : "23",
    role : "Admin",
    loginCount : 32,
    facebookLoggedIn : true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },

    getCourseContent: function () {
        return `${this.firstName} is my firstname`;
    }

};

console.log(user.getCourseContent());
