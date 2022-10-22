interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  const courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

createCourseGoal('This is the title', 'This is the description', new Date());

const names: Readonly<string[]> = ['Dustin', 'Zag'];

// .push will no longer work since we are setting this array to Readonly
// names.push('Zek');
console.log(names);
