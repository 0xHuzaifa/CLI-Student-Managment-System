import inquirer from "inquirer";
export const getAddMoreCourse = async () => {
    const courseAdd = await inquirer.prompt({
        name: 'course',
        type: 'input',
        message: 'Please enter course name:'
    });
    return courseAdd.course;
};
