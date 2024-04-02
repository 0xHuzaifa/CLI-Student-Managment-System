import inquirer from "inquirer";


export const courses: string[] = ['GenAi', 'CloudAi'];
const courseEnrolment: {[courses: string]: number} = {}

export const getStudentData = async () => {

    const studentData = await inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'Enter you First Name:',
            validate(input: string) {
                if (input.trim() === '') {
                    return `First name cannot be empty`
                }
                return true;
            },
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'Enter your Last Name',
            validate(input: string) {
                if (input.trim() === '') {
                    return `Last name cannot be empty`
                }
                return true;
            },
        },
        {
            name: 'fatherName',
            type: 'input',
            message: 'Enter your Father Name',
            validate(input: string) {
                if (input.trim() === '') {
                    return `Father name cannot be empty`
                }
                return true;
            },
        },
        {
            name: 'course',
            type: 'checkbox',
            choices: courses,
            message: 'Select your course',
            validate: (input: string[]) => {
                if (input.length !== 1) {
                    return 'You must select exactly one course.';
                }
                return true;
            }
        }
    ]);


    const selectedCourse: string = studentData.course as string;
    const rollNo: number = (courseEnrolment[selectedCourse] || 0) + 1;

    return {...studentData, rollNo};
}


export const addCourse = async (course: string) => {
    return courses.push(course);
}

export const viewCourses = () => {
    return courses.join(`\n`)
}

