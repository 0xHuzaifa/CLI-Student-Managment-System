export class Enrolment {
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
        Course: ${this.course.join(', ')} 
        Roll No: ${this.rollNo}
        `);
    }
    addCourse(courseName) {
        return this.course.push(courseName);
    }
}
