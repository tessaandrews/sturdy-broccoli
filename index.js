const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");

  const questions = [
    
    {
      type: 'input',
      message: 'What is the title of your project?:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a description of your project:',
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
      choices: ['GNU, AGPLv3', 'GPLv3', 'LGPLv3', 'ISC', 'Apache2.0', 'MIT', 'BoostSoftware1.0', 'None'],
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
]
   


// TODO: Create a function to initialize app
function writeToFile (fileName, data) {
  return fs.writeFileSync(fileName, data);

 };

function init() {
  inquirer.prompt(questions).then((answers)=>{

    writeToFile('README.md', generateMarkdown({...answers}));
    console.log('ReadME generated');
  })

}
  





//catch((err) => console.error(err))
//err ? console.log(err): console.log('Successfully created README')

  //.then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
 //.then(() => console.log('Successfully wrote to README.md'))
 //.catch((err) => console.error(err))
//);
//};


init();
