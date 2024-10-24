const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const path = require('path');

// Prompt questions for user input
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo text:',
    validate: (input) => {
      if (input.length <= 3) {
        return true;
      }
      return 'Please enter up to three characters.';
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword or a hexadecimal number for the text color:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for your logo:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword or a hexadecimal number for the shape color:',
  },
];

// Function to create the logo
const createLogo = async () => {
  const answers = await inquirer.prompt(questions);
  let shape;

  // Create the selected shape
  switch (answers.shape) {
    case 'Circle':
      shape = new Circle();
      break;
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Square':
      shape = new Square();
      break;
  }

  // Set colors and render SVG
  shape.setColor(answers.shapeColor);
  const logoSvg = shape.render();

  // Create SVG string with text
  const finalSvg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${logoSvg}
      <text x="150" y="125" font-size="40" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>
  `;

  // Write SVG to examples directory
  function writeToFile(fileName, data) {
    const filePath = path.join(__dirname, 'examples', fileName);
    fs.writeFile(filePath, data, (err) =>
      err ? console.error(err) : console.log(`Generated ${fileName} in examples folder!`)
    );
  };
  writeToFile('logo.svg', finalSvg);
}

// Initialize the application
createLogo();