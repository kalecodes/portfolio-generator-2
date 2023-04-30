// var is function-scoped, so changing its value in a block causes its value in the outer environment to change as well
// value change in the block is reflected throughout the function, i.e., outside the block.
// let is block-scoped, so changing its value in a block does not change its value outside the block _if_ the variable is not redeclared in the block

const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

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
const [name, github] = profileDataArgs;

// The first argument is the name of the file that's being created. 
// The next argument is the data that will write onto the file, in this case the HTML template literal. 
// The last parameter is a callback function that will be used for error handling and success messages
fs.writeFile('./index.html', generatePage(name, github), err => {
    // create an exception and stop the execution of the code
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});