import inquirer from "inquirer";

export const getStudentData = async () => {
    const studentData = await inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'Enter you First Name:'
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'Enter your Last Name',
        },
        {
            name: 'fatherName',
            type: 'input',
            message: 'Enter your Father Name',
        },
    ]);

    return{
        firstName: studentData.firstName,
        lastName: studentData.lastName,
        fatherName: studentData.fatherName
    }
}






// 10:39, 22