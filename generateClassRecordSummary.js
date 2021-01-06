let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  let exams = scoreObj.exams;
  let exercises = scoreObj.exercises;
  let exercisesTotal = exercises.reduce((sum, item) => sum + item);
  let examAverage = (exams.reduce((sum, item) => sum + item)) / 4;
  let finalScore = Math.round((exercisesTotal * 0.35) + (examAverage * 0.65));
  return `${finalScore} (${getGrade(finalScore)})`;
}

function getGrade(score) {
  if (score >= 93) return 'A';
  else if (score >= 85) return 'B';
  else if (score >= 77) return 'C';
  else if (score >= 69) return 'D';
  else if (score >= 60) return 'E';
  else return 'F';
}

function getExamSummary(examData) {
  let examScores = getScoresByExam(examData);
  return examScores.map(function(exam) {
    return {
      average: getExamAverage(exam),
      minimum: getExamMin(exam),
      maximum: getExamMax(exam),
    }
  });
}

function getScoresByExam(input) {
  let exam1 = []
  let exam2 = []
  let exam3 = []
  let exam4 = []
  input.forEach(function(subarr) {
    exam1.push(subarr[0]);
    exam2.push(subarr[1]);
    exam3.push(subarr[2]);
    exam4.push(subarr[3]);
  })
  return [exam1, exam2, exam3, exam4];
}

function getExamAverage(arr) {
  let total = arr.reduce((sum, item) => sum + item);
  return total / arr.length;
}

function getExamMin(arr) {
  return arr.sort((a, b) => a - b)[0]
}

function getExamMax(arr) {
  return arr.sort((a, b) => b - a)[0]
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
