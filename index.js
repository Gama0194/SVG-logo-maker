import inquirer from 'inquirer';
import fs from 'fs';
import { Triangle, Square, Circle } from './library/shapes.js';


async function getUserInput() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter three characters for your logo:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text color:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select the shape for your logo:',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color for the shape color:',
        },
    ]);

    return userInput;
}

async function run() {
    try {
        const userInput = await getUserInput();

        let shape;

        if (userInput.shape === 'Circle') {
            shape = new Circle(userInput.shapeColor, 50); // may have to change 50
        } else if (userInput.shape === 'Triangle') {
            shape = new Triangle(userInput.shapeColor, 60); // may have to change 60
        } else if (userInput.shape === 'Square') {
            shape = new Square(userInput.shapeColor, 70); // may have to change 70
        }

        shape.text = userInput.text;
        shape.setColor(userInput.textColor);

        const svg = shape.render();

        fs.writeFileSync('./examples/logo.svg', svg);

        console.log('Success! A file has been generated!');
    } catch (error) {
        console.error('Error has occurred:', error);
    }
}

// Run it
run();