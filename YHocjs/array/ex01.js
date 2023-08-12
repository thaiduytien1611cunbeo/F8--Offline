var courses = [
    {
        id: 1,
        name:'JS',
        coin: 250
    },
    {
        id: 2,
        name:'HTML',
        coin: 0
    },
    {
        id: 3,
        name:'CSS',
        coin: 150
    },
    {
        id: 4,
        name:'PHP',
        coin: 0
    },
    {
        id: 5,
        name:'RUBY',
        coin: 100
    },
];

// courses.forEach(function(course, index) {
//     console.log(index, course);
// });

// var isFree = courses.every(function(course, index) {
//     return course.coin >= 0;
// });

// console.log(isFree);

var newCourses = courses.map(function(course, index) {
    course.name += "Hi";
});

console.log(newCourses);