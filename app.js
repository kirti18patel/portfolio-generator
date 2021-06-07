// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [name, github] = profileDataArgs;
// const fs = require("fs");
// const generatePage = require('./src/page-template.js');
// // console.log(profileDataArgs);

// // const printProfileData = profileDataArr => {
// //     profileDataArr.forEach(profileItem => console.log(profileItem));
// //   };
  
// //   printProfileData(profileDataArgs);



//   fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });

const inquirer = require('inquirer');
// console.log(inquirer);
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

