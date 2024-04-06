import inquirer from "inquirer";
export const getDepositAmount = async () => {
    const depositAmount = await inquirer.prompt({
        name: 'amount',
        type: 'number',
        message: 'Please enter your depositing amount.'
    });
    return depositAmount.amount;
};
export const getWithdrawAmount = async () => {
    const withdrawAmount = await inquirer.prompt({
        name: 'amount',
        type: 'number',
        message: 'Please enter your withdraw amount.'
    });
    return withdrawAmount.amount;
};
