import inquirer from "inquirer";
import { courses } from "../user_Input/UserInput.js";
export const getSelectCourse = async () => {
    const selectCourse = await inquirer.prompt({
        name: 'select',
        type: 'checkbox',
        choices: courses,
        message: 'Please select the only course in which you want to enrol.',
        validate: (input) => {
            if (input.length !== 1) {
                return `You must select only one course`;
            }
            return true;
        }
    });
    return selectCourse.select[0];
};
