
export interface Student {
    firstName: string,
    lastName: string,
    fullName: string,
    enrolmentNo: number,
    fatherName: string,
    course: string[],
    rollNo: number,
    displayStudent(): void,
    addCourse(courseName: string): void

}

export class Enrolment implements Student {
    public firstName: string;
    public lastName: string;
    public fullName: string;
    public fatherName: string;
    public enrolmentNo: number = 0;
    public course: string[];
    public rollNo: number = 0;

    constructor(
            firstName: string, 
            lastName: string, 
            fatherName: string,
            enrolmentNo: number,
            course: string[],
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
        Course: ${this.course.join(', ')} 
        Roll No: ${this.rollNo}
        `);
    }

    addCourse(courseName: string): number {
        return this.course.push(courseName);
    }
}

