const inquirer = require('inquirer');
const fs = require('fs');
const shapeClass = require('./lib/generateLogo.js');

const questions = [
    {
        type: 'input',
        message: 'Create a initials. (Up to three characters and no ".")',
        name: 'initial',
        default: "HEY",
    },
    {
        type: 'input',
        message: 'Enter the text color. You can use a keyword (i.e blue) or hexadecimal number.',
        name: 'textColor',
        default: "blue",
    },
    {
        type: 'list',
        message: 'What shape do you do want for your logo? Use arrow key Up and Down to navigate the list of choices. Press enter when you have decided. ',
        name: 'shape',
        choices: ["Triangle", "Circle", "Square"],
        default: "Circle",
    },
    {
        type: 'input',
        message: 'Enter the logo color. You can use a keyword (i.e blue) or hexadecimal number.',
        name: 'shapeColor',
        default: "#DFFFFD",
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log(`Check file name called ${fileName}`)
    );
}

function askUsers(){
    inquirer
        .prompt(questions)
    .then((answers) => {
        var newLogo = shapeClass.createLogo(answers);
        var renderedLogo = shapeClass.renderSVG(newLogo);
        writeToFile(`./dist/logo.svg`, renderedLogo);
    })
    .catch((error) =>{
        if (error.isTtyError){
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("How?");
        }
    });
}

askUsers();