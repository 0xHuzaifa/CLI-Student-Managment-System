import { getStudentData, addCourse, viewCourses } from "../userInput/UserInput.js";


const students: Student[] = [];

let enrolmentNo: number = 0;

interface Student {
    firstName: string,
    lastName: string,
    fullName: string,
    enrolmentNo: number,
    fatherName: string,
    course: string,
    rollNo: number,
}

class Enrolment implements Student {
    public firstName: string;
    public lastName: string;
    public fullName: string;
    public fatherName: string;
    public enrolmentNo: number = 0;
    public course: string;
    public rollNo: number = 0;

    constructor(
            firstName: string, 
            lastName: string, 
            fatherName: string,
            enrolmentNo: number,
            course: string,
            rollNo: number
        ) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${this. firstName} ${this.lastName}`
        this.fatherName = fatherName;
        this.enrolmentNo = enrolmentNo,
        this.course = course;
        this.rollNo = rollNo;
    }

    displayStudent(): void {
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
    const studentEnrolmentNo: number = enrolmentNo + 1;
    const studentData = await getStudentData();
    const studentRollNo: number = studentData.rollNo;
    console.log(studentRollNo);
    

    const student: Enrolment = new Enrolment(
        studentData.firstName,
        studentData.lastName,
        studentData.fatherName,
        studentEnrolmentNo,
        studentData.course as string,
        studentRollNo
    )
    students.push(student)
    console.log(students);
    
}

await createStudent()



// const generateRollNo = async () =>  {
    
//     return rollNo;
// }

