import chalk from "chalk";

export interface Student {
    firstName: string,
    lastName: string,
    fullName: string,
    fatherName: string,
    balance: number,
    enrolmentNo: number,
    course: string[],
    rollNo: number,
    StudentProfile(): void,
    addCourse(courseName: string): void,
    deposit(amount: number): number,
    withdraw(amount: number): void,
    payTuitionFee(amount: number): number,
}

export class Enrolment implements Student {
    public firstName: string;
    public lastName: string;
    public fullName: string;
    public fatherName: string;
    public balance: number;
    public enrolmentNo: number = 0;
    public course: string[];
    public rollNo: number = 0;

    constructor(
            firstName: string, 
            lastName: string, 
            fatherName: string,
            balance: number,
            enrolmentNo: number,
            course: string[],
            rollNo: number
        ) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${this. firstName} ${this.lastName}`;
        this.fatherName = fatherName;
        this.balance = balance;
        this.enrolmentNo = enrolmentNo,
        this.course = course;
        this.rollNo = rollNo;
    }

    StudentProfile(): void {
        console.log(`
        Name: ${this.fullName}
        Father Name: ${this.fatherName}
        Balance: ${this.balance}
        Enrolment No: ${this.enrolmentNo}
        Course: ${this.course.join(', ')} 
        Roll No: ${this.rollNo}
        `);
    }

    deposit(amount: number): number {
        console.log(chalk.green(`\n${amount} deposit successfully`));
        return this.balance += amount;
    }

    withdraw(amount: number): number {
        if (amount < this.balance) {
            console.log(chalk.green(`\n${amount} withdraw successfully`));
            return this.balance -= amount
        } else {
            console.log(chalk.red(`Not enough balance`));
            return this.balance;
        }
    }

    payTuitionFee(amount: number): number {
        if (amount < this.balance) {
            console.log(chalk.green(`\n${amount} Tuition fees paid.`));
            return this.balance -= amount
        } else {
            console.log(chalk.red(`Not enough balance`));
            return this.balance;
        }
    }

    addCourse(courseName: string): number {
        
        console.log(chalk.yellow(`\n${chalk.bgBlue(courseName)} course added in list`));
        return this.course.push(courseName);
    }
}

