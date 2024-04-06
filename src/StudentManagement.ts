// user input imports
import { getStudentData, courses } from "./userInput/user_Input/UserInput.js"; // get student data input from UserInput
import { getSelectCourse } from "././userInput/student_add_course/SelectCourse.js"; // get selected course to add in student list
import { getStudent } from "./userInput/view_Student/ViewStudent.js"; // get student enrolment no to check student & view student
import { getDepositAmount, getWithdrawAmount } from "./userInput/student_Payment_Method/PaymentMethod.js"; // get deposit amount
import { getDashboardMenu } from "./userInput/dashboard_Menu/DashboardMenu.js"; // get main dashboard menu
import { getStudentMenu } from "./userInput/student_menu/StudentMenu.js"; // get student menu
import { getAddMoreCourse } from "./userInput/add_More_Courses/AddCourse.js"; // get course name to add in list.
// enrolment import
import { Enrolment, Student } from "./enrolment/Enrolment.js";
import chalk from "chalk";

// students storage
const students: { [enrolmentNo: number]: Student} = {}

// enrolment number for every student
let EnrolmentNo: number = 0;

// tuition fee
let TuitionFee: number = 1000;

/* 
* Student Management class which will manage all things. Like: enrol student, add more courses in list, 
* view all students, view individual student, add course in student list.
*/
 class studentManagement {

    async createStudent() {
        const studentEnrolmentNo: number = EnrolmentNo + 1;
        const studentData = await getStudentData();
        const studentRollNo: number = studentData.rollNo;   

        const student: Enrolment = new Enrolment(
            studentData.firstName,
            studentData.lastName,
            studentData.fatherName,
            0,
            studentEnrolmentNo,
            studentData.course,
            studentRollNo
        )

        console.log(`Please make your first deposit`);
        const amount = await getDepositAmount();
        student.deposit(amount)
        
        student.StudentProfile();
        EnrolmentNo++;
        return students[studentEnrolmentNo] = student;
    } 

    async checkStudent() {
        const {select} = await getStudent();
        const studentEnrolment: number = select;
        
        if (studentEnrolment) {
            const student = students[studentEnrolment];
            return student;
        }
    }

    async viewCourses(): Promise<string> {
        return courses.join(`\n`)
    }

    async addMoreCourses(course: string) {
        console.log(chalk.green(`${chalk.bgCyan(course)} added in list`));
        return courses.push(course);
    }
}

const management = new studentManagement();


const main = async () => {
    let loopCondition: boolean = true;
    do {
        console.log(chalk.bgGreen(chalk.yellow(`\nDashboard`)));
        
        const dashboardInput = await getDashboardMenu();
    
        if (dashboardInput === 'Create Student') {
            await management.createStudent();

        } else if (dashboardInput === 'View Student') {
            await studentMenu()

        } else if (dashboardInput === 'Total Students') {
            if (Object.keys(students).length !== 0) {
                for (const enrolmentNo in students) {
                    students[enrolmentNo].StudentProfile();
                }

            } else {
                console.log(`No student enrolled`);
            }

        } else if (dashboardInput === 'Add More Courses') {
            const courseName = await getAddMoreCourse();
            await management.addMoreCourses(courseName)

            console.log(`Total Courses`);
            
            for (const course of courses) {
                console.log(course);
            }

        } else if (dashboardInput === 'View Courses') {
            for (const course of courses) {
                console.log(course);
            }

        } else if(dashboardInput === 'Exit') {
            loopCondition = false;
        }
        
    } while (loopCondition);
    
}

await main();


async function studentMenu() {
    const student = await management.checkStudent();

    if (student) {
        let loopCondition: boolean = true;

        do {
            console.log(chalk.bgBlue(chalk.yellow(`\nStudent Dashboard:`)));
            const studentDashboardInput = await getStudentMenu();
            
            if (studentDashboardInput === 'View Profile') {
                student.StudentProfile();

            } else if (studentDashboardInput === 'Add Course') {
                const newCourse = await getSelectCourse();
                student.addCourse(newCourse);

            } else if (studentDashboardInput === 'Pay Tuition Fee') {
                student.payTuitionFee(TuitionFee)
                
            } else if (studentDashboardInput === 'Deposit') {
                const amount = await getDepositAmount();
                student.deposit(amount)
                
            } else if (studentDashboardInput === 'Withdraw') {
                const amount = await getWithdrawAmount();
                student.withdraw(amount)
                
            } else if(studentDashboardInput === 'Exit') {
                loopCondition = false;
            } 
        } while (loopCondition);

    } else {
        console.log(chalk.bgRed(`Student not found`));
    }
}


/*

I have created a CLI Student Management System Project using TypeScript programming language. 

In this program, I have created a class Enrolment, in which, we can create students and define some functions. Deposit, withdraw, pay tuition fees, and student profile.  that each student can perform. I have created another main class named Student Mangement. In this class, we have created some functions. 
create student function. in this function, we have inherited the Enrolment class to create new students and then we push each student into our list to store. 
AddMoreCourses function to add new courses to the list. 
view all courses function. 
checkStudent function: is to check a student by giving the enrolment number. if given enrolment number of a student exists on our array. it will return true.

after this class we have our main function. in which we have used our main dashboard. this dashboard has several option. create student, view student, total students, view courses, add courses, and exit. 

when we choose view student it will direct us to studentMenu function. In this, first it will ask the student enrolment number to view that student dashboard. if the student exist it will show the dashboard otherwise it will say "student not found" and return to main function.
after that student found we will have student dashboard. in this we have view profile, add course, paytuitionfee, deposti, withdraw exit.

I have installed some libraries.

``` 
npm install typescript
npm install inquirer 
npm install --save-dev @types/inquirer
npm install chalk
npm install --save-dev @types/chalk
```

*/