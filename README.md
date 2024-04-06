Certainly! Below is an expanded documentation including the functions available in the student dashboard:

## Student Management System Documentation

### Overview

This project is a Command Line Interface (CLI) Student Management System implemented in TypeScript programming language. The system allows for the creation, management, and interaction with student records. It includes features such as enrolling students, managing courses, viewing student profiles, making deposits, withdrawing funds, paying tuition fees, and more.

### Installation

To run the Student Management System, ensure you have Node.js installed on your machine. Then, follow these steps:

1. Clone the repository to your local machine:

```
git clone <repository_URL>
```

2. Navigate to the project directory:

```
cd <project_directory>
```

3. Install dependencies using npm:

```
npm install
```

### Dependencies

The following npm packages are utilized in this project:

- **TypeScript**: TypeScript is a superset of JavaScript that adds static types to the language.
- **Inquirer**: Inquirer.js provides a collection of common interactive command line user interfaces.
- **@types/inquirer**: TypeScript type definitions for Inquirer.js.
- **Chalk**: Chalk is a library for styling command-line output with colors and styles.
- **@types/chalk**: TypeScript type definitions for Chalk.

Install these dependencies using npm:

```
npm install typescript inquirer chalk @types/inquirer @types/chalk
```

### Usage

To run the Student Management System, execute the following command in your terminal within the project directory:

```
npx cli-typescript-student-management
```

Upon running the command, the main dashboard of the system will be displayed with various options including:

- Create Student
- View Student
- Total Students
- View Courses
- Add More Courses
- Exit

Navigate through the menu using arrow keys and press enter to select an option.

### Functionality

#### Create Student

The "Create Student" option allows users to enroll new students into the system. Users are prompted to enter details such as first name, last name, father's name, roll number, and course. Upon enrollment, students are assigned an enrollment number and can make an initial deposit.

#### View Student

Users can view individual student profiles by entering the enrollment number of the desired student. If the student exists in the system, their profile information is displayed, including name, father's name, balance, enrollment number, courses, and roll number.

#### Total Students

The "Total Students" option displays profiles of all enrolled students in the system. If no students are enrolled, a message indicating the absence of enrolled students is shown.

#### View Courses

This option allows users to view a list of all available courses in the system.

#### Add More Courses

Users can add new courses to the system by selecting the "Add More Courses" option. After entering the name of the new course, it is added to the list of available courses.

#### Exit

Selecting the "Exit" option terminates the program and exits the Student Management System.

#### Student Dashboard Functions

After selecting the "View Student" option and entering a valid enrollment number, users are directed to the student dashboard. The student dashboard includes the following functions:

- **View Profile**: Displays the profile of the selected student, including their name, father's name, balance, enrollment number, courses, and roll number.
- **Add Course**: Allows the student to add a new course to their enrolled courses list.
- **Pay Tuition Fee**: Enables the student to pay their tuition fees from their balance.
- **Deposit**: Allows the student to deposit funds into their account.
- **Withdraw**: Enables the student to withdraw funds from their account.
- **Exit**: Returns the user to the main dashboard.

### Classes and Methods

#### Enrolment Class

The `Enrolment` class represents student enrollment and includes methods for managing student profiles and interactions such as depositing funds, withdrawing funds, paying tuition fees, and adding courses.

#### StudentManagement Class

The `StudentManagement` class manages various operations related to student management, including creating new students, checking student existence, viewing courses, and adding more courses.

### Contributing

Contributions to the Student Management System project are welcome. Feel free to submit bug reports, feature requests, or pull requests to the project repository.

### Contact

For any inquiries or support, please contact **Huzaifa Ahmed** at **[Email]:(huzaifasaleem098@gmail.com)**.