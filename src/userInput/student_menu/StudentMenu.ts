import inquirer from "inquirer";

export const getStudentMenu = async () => {
    const studentMenu = await inquirer.prompt({
        name: 'studentMenu',
        type: 'list',
        choices: ['View Profile', 'Add Course', 'Pay Tuition Fee', 'Deposit', 'Withdraw', 'Exit']
    })

    return studentMenu.studentMenu;
}