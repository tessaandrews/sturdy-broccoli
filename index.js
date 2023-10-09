const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");

  const questions = () => {
    return inquirer.prompt ([
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
]
    )};


// TODO: Create a function to initialize app
function writeToFile (fileName, data) {
  return fs.writeFileSync(fileName, data);

 };

function init() 
  //.then(answers => {
   // return generateMarkdown(answers);
 // })
 // .then (data => {
 //   return writeToFile(data);
 // })
  //.catch(err => {
  //  console.log(err)
 // })

  let answers = await questions();
const generateContent = generateMarkdown(answers);
console.log('ReadME generated');
writeToFile('README.md', generateMarkdown(questions));

//catch((err) => console.error(err))
//}
//writeToFile('README.md', generateMarkdown, (questions), (err) =>
//err ? console.log(err): console.log('Successfully created README')

  //.then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
 //.then(() => console.log('Successfully wrote to README.md'))
 //.catch((err) => console.error(err))
//);
//};


init();
