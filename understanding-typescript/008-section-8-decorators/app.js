"use strict";
function createCourseGoal(title, description, date) {
    const courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
createCourseGoal('This is the title', 'This is the description', new Date());
const names = ['Dustin', 'Zag'];
// .push will no longer work since we are setting this array to Readonly
// names.push('Zek');
console.log(names);
