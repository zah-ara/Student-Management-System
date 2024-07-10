#! /usr/bin/env code
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.italic.bgRedBright("Welcome to Zahara's student management"));
const courses = {
    "MS OFFICE": {
        courseName: "MS Office",
        fee: "2500/=",
        timings: "9 to 12",
        duration: "3 months",
        syllabus: "Computer Basics, MS Word, MS Excel, MS Powerpoint, Internet & Email",
    },
    "WEB DEVELOPMENT": {
        courseName: "Web Development",
        fee: "10,000/=",
        timings: "10 to 1",
        duration: "6 months",
        syllabus: "HTML, CSS, Javascript, JQuery, Tailwind CSS, ReactJS, Mongo DB, Express JS, Python",
    },
    "GRAPHIC DESIGNING": {
        courseName: "Graphic Designing",
        fee: "5000/=",
        timings: "11 to 2",
        duration: "6 months",
        syllabus: "Color theory, Adobe Photoshop, video editing, different tools usage",
    },
    "E-COMMERCE": {
        courseName: "E-Commerce",
        fee: "15,000/=",
        timings: "2 to 5",
        duration: "8 months",
        syllabus: "Facebook Marketing, Instagram Marketing, Amazon Business, Ebay, Daraz",
    },
    "ARTIFICIAL INTELLIGENCE": {
        courseName: "AI",
        fee: "25,000/=",
        timings: "3 to 6",
        duration: "12 months",
        syllabus: "Probability of AI, Machine Learning, Apps development etc",
    },
    "WEB 3.0 & METAVERSE": {
        courseName: "WEB 3.0 & Metaverse",
        fee: "25000/=",
        timings: "6 to 9",
        duration: "12 months",
        syllabus: "Full stack web & app development, Advance level of deep learning etc",
    },
};
// Function to handle course payments
function Course() {
    return __awaiter(this, void 0, void 0, function* () {
        let payment = yield inquirer_1.default.prompt({
            name: "payment",
            type: "list",
            message: chalk_1.default.bold.greenBright("Select your mode of payment."),
            choices: ["Bank account", "Mobile account", "Cash"],
        });
        if (payment.payment === "Bank account") {
            let bankDetails = yield inquirer_1.default.prompt([
                {
                    name: "bankName",
                    type: "list",
                    message: chalk_1.default.bold.greenBright("Select one of the banks."),
                    choices: ["UBL", "HBL", "MEEZAN BANK", "NBP", "FAYSAL BANK"],
                },
                {
                    name: "accountNumber",
                    type: "input",
                    message: chalk_1.default.bold.greenBright("Enter your Account number."),
                },
                {
                    name: "amount",
                    type: "list",
                    message: chalk_1.default.bold.greenBright("Enter the amount you want to deposit"),
                    choices: [
                        "MS OFFICE: 2500/=",
                        "WEB DEVELOPMENT: 10,000/=",
                        "GRAPHIC DESIGNING: 5000/=",
                        "E-COMMERCE: 15,000/=",
                        "ARTIFICIAL INTELLIGENCE: 25,000/=",
                        "WEB 3.0 & METAVERSE: 25000/=",
                    ],
                },
                {
                    name: "pincode",
                    type: "input",
                    message: chalk_1.default.bold.greenBright("Enter the transaction pin code (pin code = 1234)."),
                },
            ]);
            if (bankDetails.pincode !== "1234") {
                console.log(chalk_1.default.bold.italic.blueBright("Invalid pin code."));
            }
            else {
                console.log(chalk_1.default.bold.italic.blueBright("Transaction successful."));
            }
        }
        else if (payment.payment === "Mobile account") {
            let mobileDetails = yield inquirer_1.default.prompt([
                {
                    name: "accountName",
                    type: "list",
                    message: chalk_1.default.bold.greenBright("Select one of the mobile accounts."),
                    choices: ["Easypesa", "Jazzcash", "Omni"],
                },
                {
                    name: "accountNumber",
                    type: "input",
                    message: chalk_1.default.bold.greenBright("Enter your Account number."),
                },
                {
                    name: "amount",
                    type: "input",
                    message: chalk_1.default.bold.greenBright("Enter the amount you want to deposit."),
                },
                {
                    name: "pincode",
                    type: "input",
                    message: chalk_1.default.bold.greenBright("Enter the transaction pin code (pin code = 1234)."),
                },
            ]);
            if (mobileDetails.pincode !== "1234") {
                console.log(chalk_1.default.bold.italic.blueBright("Invalid pin code."));
            }
            else {
                console.log(chalk_1.default.bold.italic.blueBright("Transaction successful."));
            }
        }
        else {
            console.log(chalk_1.default.bold.italic.blueBright("Please submit cash at any physical branch or our administrative office."));
        }
        return payment;
    });
}
let continueEnrollment = true;
while (continueEnrollment) {
    let action = await inquirer_1.default.prompt({
        name: "selection",
        type: "list",
        message: chalk_1.default.bold.greenBright("Please select an option:"),
        choices: ["ALL COURSES", "ENROLL STUDENT", "EXAMS DETAILS", "FEE SUBMISSION", "EXIT"],
    });
    switch (action.selection) {
        case "ALL COURSES":
            let courseDetails = await inquirer_1.default.prompt({
                name: "course",
                type: "list",
                message: chalk_1.default.bold.greenBright("Select a course to view details."),
                choices: Object.keys(courses),
            });
            console.log(courses[courseDetails.course]);
            break;
        case "ENROLL STUDENT":
            const studentInfo = await inquirer_1.default.prompt([
                { name: "name", type: "input", message: chalk_1.default.bold.greenBright("Enter your name:") },
                { name: "fatherName", type: "input", message: chalk_1.default.bold.greenBright("Enter your father's name:") },
                { name: "gender", type: "list", message: chalk_1.default.bold.greenBright("Enter your gender:"), choices: ["Male", "Female"] },
                {
                    name: "course",
                    type: "list",
                    message: chalk_1.default.bold.greenBright("Select the course you want to enroll in:"),
                    choices: Object.keys(courses),
                },
                {
                    name: "feesPayment",
                    type: "confirm",
                    message: chalk_1.default.bold.greenBright("Do you want to pay fees now?"),
                    default: true,
                },
            ]);
            console.log(chalk_1.default.bold.italic.blueBright(`Congratulations! You have enrolled in ${studentInfo.course} successfully.`));
            if (studentInfo.feesPayment) {
                await Course();
            }
            else {
                console.log(chalk_1.default.bold.italic.blueBright("You can submit your fees later."));
            }
            break;
        case "EXAMS DETAILS":
            console.log(chalk_1.default.bold.italic.blueBright("Exam dates have not been announced yet."));
            break;
        case "FEE SUBMISSION":
            const feeType = await inquirer_1.default.prompt({
                name: "fee",
                type: "list",
                message: chalk_1.default.bold.greenBright("Select the type of fee you want to submit:"),
                choices: ["Admission fee", "Enrollment card fee", "Exams fee", "Admit card fee"],
            });
            await Course();
            break;
        case "EXIT":
            continueEnrollment = false;
            console.log(chalk_1.default.bold.italic.bgRedBright("Good Luck!"));
            break;
        default:
            console.log(chalk_1.default.bold.italic.blueBright("Invalid selection. Please try again."));
    }
}
