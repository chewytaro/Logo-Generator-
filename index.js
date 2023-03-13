const inquirer = require('inquirer');
const fs = requie('fs');

const questionsArray = [
    {
        type: 'input',
        name: 'characters',
        message: 'Please choose up to three characters for your logo:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What would you like the color of the text to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please pick from the available list of shapes:',
        choices: ["Triangle, Square, Circle"],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What would you like the shape color to be?',
    },

];

function writetoFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log('Logo.svg create!'); 
        }
    })
};

function init() {
    inquirer.prompt(questionsArray)
        .then((data) => {
            const logo = generateLogo(data);
            writetoFile('Logo.svg', logo); 
        })
};

init();
