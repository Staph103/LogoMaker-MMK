const fs = require('fs')
// const shapes = require('./logoGenerator.test')
const inquirer = require('inquirer');


function logoGenerator(){
    inquirer.prompt([
        // Pass your questions in here 
        { type: 'maxlength-input', name: 'letters', message: 'What is the name of your logo (must be 3 characters)', validate: (input) => input.length <= 3 && input.length >= 3},
        { type: 'input', name: 'txtColor', message: 'What color would you like for the text (color name or hexadecimal)' },
        { type: 'list', name: 'shape', message: 'Pick a shape', choices: ['circle', 'triangle', 'square']},
        { type: 'input', name: 'shapeColor', message: 'What color would you like for the shape (color name or hexadecimal)' },

    ]).then((res) => {
        let newShape;
        switch(res.shape){
            case 'circle':
            newShape = new Cir();
            break;
            
        }
        switch(res.shape){
            case 'triangle':
            newShape = new Tri();
            break;
            
        }
        switch(res.shape){
            case 'square':
            newShape = new Sqr();
            break;
            
        }

    })
    
    .then((res) => {
        const svgLogo = `
        <svg width ='300' height='200'>
        <${res.shape} fill ="${res.shapeColor}"/>
        <text x="20" y="30"  fill="${res.txtColor}">${res.letters}/>
        </svg>  
        `;
        fs.writeFile('logo.svg',svgLogo, (err) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Successfully generated")
            }
        })
    })
}

    



    // .then((answers) => {

    //     const logoInfo = 
        

//     })
// }
    
logoGenerator();