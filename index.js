const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvg } = require('./library/shapes.js');
const { generateLogo } = require('./library/generateLogo.js');

inquirer
    .prompt([
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
        choices: ["Triangle", "Square", "Circle"],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What would you like the shape color to be?',
    },

])
.then((data) => {
    const svgPath = './dist/logo.svg';
    const finalLogo = generateLogo(data);

    fs.writeFile(svgPath, generateSvg(finalLogo), (err) => 
        err ? console.error(err) : console.log('Generated logo.svg')
    );
})

.catch((err) => console.error(err)); 