import chalk from "chalk";
export class Enrolment {
    firstName;
    lastName;
    fullName;
    fatherName;
    balance;
    enrolmentNo = 0;
    course;
    rollNo = 0;
    constructor(firstName, lastName, fatherName, balance, enrolmentNo, course, rollNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`;
        this.fatherName = fatherName;
        this.balance = balance;
        this.enrolmentNo = enrolmentNo,
            this.course = course;
        this.rollNo = rollNo;
    }
    StudentProfile() {
        console.log(`
        Name: ${this.fullName}
        Father Name: ${this.fatherName}
        Balance: ${this.balance}
        Enrolment No: ${this.enrolmentNo}
        Course: ${this.course.join(', ')} 
        Roll No: ${this.rollNo}
        `);
    }
    deposit(amount) {
        console.log(chalk.green(`\n${amount} deposit successfully`));
        return this.balance += amount;
    }
    withdraw(amount) {
        if (amount < this.balance) {
            console.log(chalk.green(`\n${amount} withdraw successfully`));
            return this.balance -= amount;
        }
        else {
            console.log(chalk.red(`Not enough balance`));
            return this.balance;
        }
    }
    payTuitionFee(amount) {
        if (amount < this.balance) {
            console.log(`\n${amount} Tuition fees paid.`);
            return this.balance -= amount;
        }
        else {
            console.log(chalk.red(`Not enough balance`));
            return this.balance;
        }
    }
    addCourse(courseName) {
        console.log(chalk.yellow(`\n${chalk.bgBlue(courseName)} course added in list`));
        return this.course.push(courseName);
    }
}
