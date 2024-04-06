// user input imports
import { getStudentData, courses } from "./userInput/user_Input/UserInput.js"; // get student data input from UserInput
import { getSelectCourse } from "././userInput/student_add_course/SelectCourse.js"; // get selected course to add in student list
import { getStudent } from "./userInput/view_Student/ViewStudent.js"; // get student enrolment no to check student & view student
import { getDepositAmount, getWithdrawAmount } from "./userInput/student_Payment_Method/PaymentMethod.js"; // get deposit amount
import { getDashboardMenu } from "./userInput/dashboard_Menu/DashboardMenu.js"; // get main dashboard menu
import { getStudentMenu } from "./userInput/student_menu/StudentMenu.js"; // get student menu
import { getAddMoreCourse } from "./userInput/add_More_Courses/AddCourse.js"; // get course name to add in list.
// enrolment import
import { Enrolment } from "./enrolment/Enrolment.js";
import chalk from "chalk";
// students storage
const students = {};
// enrolment number for every student
let EnrolmentNo = 0;
// tuition fee
let TuitionFee = 1000;
/*
* Student Management class which will manage all things. Like: enrol student, add more courses in list,
* view all students, view individual student, add course in student list.
*/
class studentManagement {
    async createStudent() {
        const studentEnrolmentNo = EnrolmentNo + 1;
        const studentData = await getStudentData();
        const studentRollNo = studentData.rollNo;
        const student = new Enrolment(studentData.firstName, studentData.lastName, studentData.fatherName, 0, studentEnrolmentNo, studentData.course, studentRollNo);
        console.log(`Please make your first deposit`);
        const amount = await getDepositAmount();
        student.deposit(amount);
        student.StudentProfile();
        EnrolmentNo++;
        return students[studentEnrolmentNo] = student;
    }
    async checkStudent() {
        const { select } = await getStudent();
        const studentEnrolment = select;
        if (studentEnrolment) {
            const student = students[studentEnrolment];
            return student;
        }
    }
    async displayStudent() {
        const student = await this.checkStudent();
        if (student) {
            student.StudentProfile();
        }
        else {
            console.log(chalk.red(`Student not found`));
        }
    }
    async viewCourses() {
        return courses.join(`\n`);
    }
    async addMoreCourses(course) {
        console.log(chalk.green(`${chalk.bgCyan(course)} added in list`));
        return courses.push(course);
    }
}
const management = new studentManagement();
const main = async () => {
    let loopCondition = true;
    do {
        console.log(chalk.bgGreen(chalk.yellow(`\nDashboard`)));
        const dashboardInput = await getDashboardMenu();
        if (dashboardInput === 'Create Student') {
            await management.createStudent();
        }
        else if (dashboardInput === 'View Student') {
            await studentMenu();
        }
        else if (dashboardInput === 'Total Students') {
            if (Object.keys(students).length !== 0) {
                for (const enrolmentNo in students) {
                    students[enrolmentNo].StudentProfile();
                }
            }
            else {
                console.log(`No student enrolled`);
            }
        }
        else if (dashboardInput === 'Add More Courses') {
            const courseName = await getAddMoreCourse();
            await management.addMoreCourses(courseName);
            console.log(`Total Courses`);
            for (const course of courses) {
                console.log(course);
            }
        }
        else if (dashboardInput === 'View Courses') {
            for (const course of courses) {
                console.log(course);
            }
        }
        else if (dashboardInput === 'Exit') {
            loopCondition = false;
        }
    } while (loopCondition);
};
await main();
async function studentMenu() {
    const student = await management.checkStudent();
    if (student) {
        let loopCondition = true;
        do {
            console.log(chalk.bgBlue(chalk.yellow(`\nStudent Dashboard:`)));
            const studentDashboardInput = await getStudentMenu();
            if (studentDashboardInput === 'View Profile') {
                student.StudentProfile();
            }
            else if (studentDashboardInput === 'Add Course') {
                const newCourse = await getSelectCourse();
                student.addCourse(newCourse);
            }
            else if (studentDashboardInput === 'Pay Tuition Fee') {
                student.payTuitionFee(TuitionFee);
            }
            else if (studentDashboardInput === 'Deposit') {
                const amount = await getDepositAmount();
                student.deposit(amount);
            }
            else if (studentDashboardInput === 'Withdraw') {
                const amount = await getWithdrawAmount();
                student.withdraw(amount);
            }
            else if (studentDashboardInput === 'Exit') {
                loopCondition = false;
            }
        } while (loopCondition);
    }
    else {
        console.log(chalk.bgRed(`Student not found`));
    }
}
