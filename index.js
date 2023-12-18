const fs = require('fs')
const shapes = require('./lib/shapes')
const inquirer = require('inquirer');


inquirer
.prompt([
    // Pass your questions in here 
    { type: 'maxlength-input', name: 'title', message: 'What is the name of your logo (must be 3 characters)',validate: (input) => input.length <= 3},
    { type: 'input', name: 'color', message: 'What color would you like for the text' },
    { type: 'list', name: 'shape', message: 'Pick a shape', choices: ['circle', 'triangle', 'square']},
    { type: 'input', name: 'color', message: 'What color would you like for the shape' },

])
.then((answers) => {

    const logoInfo = 
    fs.writeFile('logo.svg',shapes(answers), (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Successfully generated")
        }
    })

})

// // .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });