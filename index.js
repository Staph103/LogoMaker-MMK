const fs = require('fs')
const inquirer = require('inquirer');
const { shapes, Sqr, Tri, Cir } = require("./lib/shapes")

//function that ask user for input 
function logoGenerator() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'letters',
            message: 'What is the name of your logo (must be 3 characters)',
            //forces user to enter 3 characters
            validate: (input) => input.length <= 3 && input.length >= 3
        },

        {
            type: 'input',
            name: 'txtColor',
            message: 'What color would you like for the text (color name or hexadecimal)'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Pick a shape',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like for the shape (color name or hexadecimal)'
        },

    ]).then((res) => {
        let newShape;
        //
        switch (res.shape) {
            case 'circle':
                newShape = new Cir(res.letters, res.txtColor, res.shapeColor);
                break;

            case 'triangle':
                newShape = new Tri(res.letters, res.txtColor, res.shapeColor);
                break;

            case 'square':
                newShape = new Sqr(res.letters, res.txtColor, res.shapeColor);
                break;

        }

        //creates the svg file based on data retrieved from user input

        fs.writeFile('logo.svg', newShape.render(), (err) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Successfully generated")
            }
        })

    })
}



logoGenerator();