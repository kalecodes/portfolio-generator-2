// var is function-scoped, so changing its value in a block causes its value in the outer environment to change as well
// value change in the block is reflected throughout the function, i.e., outside the block.
// let is block-scoped, so changing its value in a block does not change its value outside the block _if_ the variable is not redeclared in the block

const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }
    console.log("=============");
    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};


printProfileData(profileDataArgs);