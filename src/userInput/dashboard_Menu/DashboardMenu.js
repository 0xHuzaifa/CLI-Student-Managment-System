import inquirer from "inquirer";
export const getDashboardMenu = async () => {
    const dashboardInput = await inquirer.prompt({
        name: 'dashboard',
        type: 'list',
        choices: ['Create Student', 'View Student', 'Total Students', 'Add More Courses', 'View Courses', 'Exit']
    });
    return dashboardInput.dashboard;
};
