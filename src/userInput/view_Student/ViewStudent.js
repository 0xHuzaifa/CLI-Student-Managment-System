import inquirer from "inquirer";
export const getStudent = async () => {
    const selectStudent = await inquirer.prompt({
        name: 'select',
        type: 'number',
        message: 'Please Enter the Enrolment Number of Student.',
    });
    return selectStudent;
};
