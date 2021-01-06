function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      return `${this.name} is a ${this.year} year student`;
    },
    listCourses() {
      return this.courses;
    },
    addCourse(course) {
      this.courses.push(course);
    },
    addNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code && course.notes === undefined) {
          course.notes = [note];
        } else if (course.code === code && course.notes !== undefined) {
          course.notes.push(note);
        }
      });
    },
    updateNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          course.notes = [note];
        }
      });
    },
    viewNotes() {
      this.courses.forEach(course => {
        if (course.notes) console.log(`${course.name}: ${course.notes.join('; ')}`);
      });
    },
  }
}

function createSchool() {
  const ALLOWED_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];

  return {
    students: [],
    getReportCard(studentName) {
      let student = this.students.filter(student => student.name === studentName)[0];
      student.courses.forEach(course => {
        if (course.grade) {
          console.log(`${course.name}: ${course.grade}`);
        } else {
          console.log(`${course.name}: In progress`);
        }
      });
    },
    courseReport(subject) {
      let gradedStudents = this.students.filter(student => student.courses.some(course => (course.name === subject) && (Object.keys(course).includes('grade'))));
      if (gradedStudents.length === 0) return undefined;
      console.log('=Math Grades=');
      let scores = [];
      gradedStudents.forEach(student => {
        let course = student.courses.filter(course => course.name === subject)[0]
        console.log(`${student.name}: ${course.grade}`);
        scores.push(course.grade);
      });
      console.log('---')
      console.log(`Course Average: ${scores.reduce((sum, val) => sum + val) / scores.length}`);
    },
    addStudent(name, year) {
      if (ALLOWED_YEARS.includes(year)) {
        this.students.push(createStudent(name, year));
      } else {
        console.log('Invalid Year');
      }
    },
    enrollStudent(studentName, course) {
      let student = this.students.filter(student => student.name === studentName)[0];
      student.addCourse(course);
    },
    addGrade(studentName, courseCode, grade) {
      let student = this.students.filter(student => student.name === studentName)[0];
      let course = student.courses.filter(course => course.code === courseCode)[0];
      course.grade = grade;
    },
  };
}

let karachiGrammar = createSchool();
karachiGrammar.addStudent('foo', '3rd');
karachiGrammar.addStudent('bar', '1st');
karachiGrammar.addStudent('qux', '2nd');
karachiGrammar.enrollStudent('foo', {name: 'Math', code: 101});
karachiGrammar.enrollStudent('foo', {name: 'Advanced Math', code: 102});
karachiGrammar.enrollStudent('foo', {name: 'Physics', code: 202});
karachiGrammar.enrollStudent('bar', {name: 'Math', code: 101});
karachiGrammar.enrollStudent('qux', {name: 'Math', code: 101});
karachiGrammar.enrollStudent('qux', {name: 'Advanced Math', code: 102});
karachiGrammar.addGrade('foo', 101, 95);
karachiGrammar.addGrade('foo', 102, 90);
karachiGrammar.addGrade('bar', 101, 91);
karachiGrammar.addGrade('qux', 101, 93);
karachiGrammar.addGrade('qux', 102, 90);
// karachiGrammar.getReportCard('foo');
karachiGrammar.courseReport('Math');
karachiGrammar.courseReport('Advanced Math');
karachiGrammar.courseReport('Physics');
