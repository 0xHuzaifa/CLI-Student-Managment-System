import { getStudentData } from "../userInput/UserInput.js";

interface Student {
    firstName: string,
    lastName: string,
    fatherName: string,
    course: string,
    isEnrolled: boolean,
    displayStudent(): void
}

class Enrolment implements Student {
    public firstName: string;
    public lastName: string;
    public fatherName: string;
    protected uniqueId: number;
    public course: string;
    public isEnrolled: boolean;

    constructor(
            firstName: string, 
            lastName: string, 
            fatherName: string, 
            uniqueId: number, 
            course: string,
            isEnrolled: boolean
        ) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fatherName = fatherName;
        this.uniqueId = uniqueId;
        this.course = course;
        this.isEnrolled = false
    }

    fullName(): string {
        const fullName: string = `${this.firstName} ${this.lastName}`;
        return fullName;
    }

    displayStudent(): void {
        console.log(`
        Name: ${this.fullName()}
        Father Name: ${this.fatherName}
        Roll No: ${this.uniqueId}
        Course: ${this.course} 
        `);
    }
}


