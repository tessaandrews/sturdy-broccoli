const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: '"Provide a description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What installation process would you like to use?',
      name: 'installation',
    },
    {
        type: 'list',
        message: 'Licensing option?',
        name: 'license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
        type: 'input',
        message:'What is your email address?',
        name: 'email',
    },
    {
      type: 'input',
      message:'What is your github username?',
      name: 'github',
  }
  ]

inquirer.prompt(questions).then(answers)
{
  const readmeContent = 
  generateREADME(answers);

}



// TODO: Create a function to write README file
//function writeToFile(fileName, data) {
 //fs.writeFile(fileName, data, err => {
 // if (err) {
//return console.log(err);
 // }
 //// console.log('README.md successfully generated!');
//});

//}
// TODO: Create a function to initialize app
function init() {
  
}

// Function call to initialize app
init();


