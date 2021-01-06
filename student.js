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


let foo = createStudent('Foo', '1st');
console.log(foo.info());
console.log(foo.listCourses());
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
console.log(foo.viewNotes());
foo.addNote(102, 'Difficult subject');
console.log(foo.viewNotes());
foo.updateNote(101, 'Fun course');
console.log(foo.viewNotes());
