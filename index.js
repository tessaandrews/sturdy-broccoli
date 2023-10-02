const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require('generateMarkdown').generateMarkdown

inquirer
  .prompt([
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
      type: 'input',
      message: 'Provide instructions and examples for use:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'List your collaborators:',
      name: 'credits',
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
  },

]);

 // fs.readFile('README.md', 'utf8', (error, data) => 
 /// error ? console.error(error) : console.log(data)
//);

//function writeToFile(filename, data) 
 // fs.writeFile("README.md", data, (err) =>
  //  err ? console.log(err) : console.log('Successfully created README.md!')
  //);


// TODO: Create a function to initialize app
//function init () => {
  //promptUser()
   // .then((answers) => writeFile('README.md', generateHTML(answers)))
   // .then(() => console.log('Successfully wrote to README.md!'))
   // .catch((err) => console.error(err));
//};

init();
