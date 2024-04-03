import inquirer from "inquirer";
export const courses = ['GenAi', 'CloudAi'];
const courseEnrolment = {};
export const getStudentData = async () => {
    const studentData = await inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'Enter you First Name:',
            validate(input) {
                if (input.trim() === '') {
                    return `First name cannot be empty`;
                }
                return true;
            },
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'Enter your Last Name',
            validate(input) {
                if (input.trim() === '') {
                    return `Last name cannot be empty`;
                }
                return true;
            },
        },
        {
            name: 'fatherName',
            type: 'input',
            message: 'Enter your Father Name',
            validate(input) {
                if (input.trim() === '') {
                    return `Father name cannot be empty`;
                }
                return true;
            },
        },
        {
            name: 'course',
            type: 'checkbox',
            choices: courses,
            message: 'Select your course',
            validate: (input) => {
                if (input.length !== 1) {
                    return 'You must select exactly one course.';
                }
                return true;
            }
        }
    ]);
    const selectedCourse = studentData.course;
    const rollNo = (courseEnrolment[selectedCourse] || 0) + 1;
    return { ...studentData, rollNo };
};
