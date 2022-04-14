//callback function

const updateStudents = students.map((student) => {

  student.role = 'student';
  //console.log(student);
  return student;
})

console.log('updateStudents', updateStudents);

const highScores = students.filter((student) => {  //多筆資料
  if (student.score > 85) {
    return student;
  }
})

console.log('highScores', highScores);

const specificId = students.find((student) => {  //一筆資料
  return student.id === 1;
})

console.log('specificId', specificId);

const averageScore = students.reduce((scoreTotal, student) => {
  //console.log('student', student);
  //console.log('scoreTotal', scoreTotal);
  return scoreTotal + student.score;
}, 0) / students.length;

console.log('averageScore', averageScore);

const survey = students.reduce((survey, student) => {
  //console.log('favoriteCourse', student.favoriteCourse);
  const favCourse = student.favoriteCourse;
  if (survey[favCourse]) {
    survey[favCourse] = survey[favCourse] + 1;
  } else {
    survey[favCourse] = 1;
  }
  return survey;
}, {});

console.log('survey', survey);
