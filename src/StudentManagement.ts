import { getStudentData, courses } from "./userInput/UserInput.js";
import { getAddMoreCourse } from "./userInput/SelectCourse.js";
import { getStudent } from "./userInput/SelectStudent.js";
import { Enrolment, Student } from "./enrolment/Enrolment.js";


const students: { [enrolmentNo: number]: Student} = {}

let EnrolmentNo: number = 0;

class studentManagement {
    async createStudent() {
        const studentEnrolmentNo: number = EnrolmentNo + 1;
        const studentData = await getStudentData();
        const studentRollNo: number = studentData.rollNo;   

        const student: Enrolment = new Enrolment(
            studentData.firstName,
            studentData.lastName,
            studentData.fatherName,
            studentEnrolmentNo,
            studentData.course,
            studentRollNo
        )

        // console.log(students);
        student.displayStudent()  
        EnrolmentNo++;
        return students[studentEnrolmentNo] = student;
    } 

    async checkStudent() {
        const {select} = await getStudent();
        const studentEnrolment: number = select;
        // console.log(students[studentEnrolment]);
        if (studentEnrolment) {
            const student = students[studentEnrolment];
            // student.displayStudent()
            return student;
        }
        
    }

    async selectCourse() {
        const student = await this.checkStudent()
        if (student) {
            const courseToAdd = await getAddMoreCourse();
            student.addCourse(courseToAdd);
            console.log(`Course '${courseToAdd}' added for the student.`);
            student.displayStudent()
        }
    }
    
    async viewCourses(): Promise<string> {
        return courses.join(`\n`)
    }

    async addMoreCourses(course: string) {
        return courses.push(course);
    }
}

const management = new studentManagement();

await management.createStudent();
// console.log(`\n`);

// console.log(students);

// await management.selectStudent();

await management.selectCourse();