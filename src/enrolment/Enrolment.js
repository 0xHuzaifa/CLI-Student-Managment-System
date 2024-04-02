import { getStudentData } from "../userInput/UserInput.js";
const students = [];
let enrolmentNo = 0;
class Enrolment {
    firstName;
    lastName;
    fullName;
    fatherName;
    enrolmentNo = 0;
    course;
    rollNo = 0;
    constructor(firstName, lastName, fatherName, enrolmentNo, course, rollNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`;
        this.fatherName = fatherName;
        this.enrolmentNo = enrolmentNo,
            this.course = course;
        this.rollNo = rollNo;
    }
    displayStudent() {
        console.log(`
        Name: ${this.fullName}
        Father Name: ${this.fatherName}
        Enrolment No: ${this.enrolmentNo}
        Course: ${this.course} 
        Roll No: ${this.rollNo}
        `);
    }
}
async function createStudent() {
    const studentEnrolmentNo = enrolmentNo + 1;
    const studentData = await getStudentData();
    const studentRollNo = studentData.rollNo;
    console.log(studentRollNo);
    const student = new Enrolment(studentData.firstName, studentData.lastName, studentData.fatherName, studentEnrolmentNo, studentData.course, studentRollNo);
    students.push(student);
    console.log(students);
}
await createStudent();
// const generateRollNo = async () =>  {
//     return rollNo;
// }
