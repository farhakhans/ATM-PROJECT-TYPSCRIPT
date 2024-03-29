//  ATM MACHINE PROGRAMME:

import inquirer from "inquirer";

async function main() {
    let myBalance = 20000; // Balance ko number mein rakhein
    let myPin = "1234";

    let UserPin = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin",
        type: "input",
        mask: "*" 
    }]);

    if (UserPin.pin === myPin) {
        console.log("Correct pin code.");
        let operationBal = await inquirer.prompt([{
            name: "operation",
            message: "Please select an option.",
            type: "list",
            choices: [
                "withdraw",
                "check Balance",
                "fastCash (500)",
                "fastCash (1000)",
                "fastCash (2000)",
                "balanceInquiry",
                "cnicNumber "
            ]
        }]);

        switch (operationBal.operation) {
            case "withdraw":
                let amountAns = await inquirer.prompt([{
                    name: "amount",
                    message: "Enter the amount to withdraw.",
                    type: "number",
                }]);
                if (amountAns.amount <= myBalance) {
                    myBalance -= amountAns.amount;
                    console.log("Withdrawal successful.");
                    console.log("Your remaining balance is: ", myBalance);
                } else {
                    console.log("Insufficient balance.");
                }
                break;
            case "check Balance":
                console.log("Your current balance is: ", myBalance);
                break;
            case "fastCash (500)":
                if (500 <= myBalance) {
                    myBalance -= 500;
                    console.log("Fast cash of 500 withdrawn successfully.");
                    console.log("Your remaining balance is: ", myBalance);
                } else {
                    console.log("Insufficient balance for fast cash.");
                }
                break;
            case "fastCash (1000)":
                if (1000 <= myBalance) {
                    myBalance -= 1000;
                    console.log("Fast cash of 1000 withdrawn successfully.");
                    console.log("Your remaining balance is: ", myBalance);
                } else {
                    console.log("Insufficient balance for fast cash.");
                }
                break;
            case "fastCash (2000)":
                if (2000 <= myBalance) {
                    myBalance -= 2000;
                    console.log("Fast cash of 2000 withdrawn successfully.");
                    console.log("Your remaining balance is: ", myBalance);
                } else {
                    console.log("Insufficient balance for fast cash.");
                }
                break;
            case "balanceInquiry":
               if (myBalance===myBalance){
                console.log("your available balance is:", myBalance);
               }
            break;
            case "cnicNumber ":
                case "cnicNumber":
                    let { cnic } = await inquirer.prompt({
                        name: "cnic",
                        message: "Enter your CNIC number:",
                        type: "input"
                    });
                    console.log("your CNIC NUMBER:", cnic);
                  
                    
                break;
            default:
                console.log("Invalid option selected.");
                break;
        }
    } else {
        console.log("Incorrect pin number.");
    }
}

main();



    