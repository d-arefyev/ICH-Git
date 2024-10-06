// task-5 ---- Interface inheritance and working with objects -----------------------------------

interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

const student: Student = {
  firstName: "Denis",
  lastName: "Arefyev",
  grade: 92
};

function printStudentInfo(student: Student): void {
  console.log(`Full Name: ${student.firstName} ${student.lastName}, Grade: ${student.grade}`);
}

printStudentInfo(student);
