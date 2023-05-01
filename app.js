// var is function-scoped, so changing its value in a block causes its value in the outer environment to change as well
// value change in the block is reflected throughout the function, i.e., outside the block.
// let is block-scoped, so changing its value in a block does not change its value outside the block _if_ the variable is not redeclared in the block

const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// ----------------------------------------------------------------------
// const profileDataArgs = process.argv.slice(2);

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log("=============");
//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// same as above, using assignment destructuring
// const [name, github] = profileDataArgs;
// -----------------------------------------------------------------------

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};

const promptProject = portfolioData => {
    // if there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    

    console.log(`
=================
Add a New Project
=================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};

// use Promises to chain functions together to control sequence of apps control flow
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData)
    });

// const pageHTML = generatePage(name, github);

// The first argument is the name of the file that's being created. 
// The next argument is the data that will write onto the file, in this case the HTML template literal. 
// The last parameter is a callback function that will be used for error handling and success messages
// fs.writeFile('./index.html', pageHTML, err => {
//     // create an exception and stop the execution of the code
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });


