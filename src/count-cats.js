const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cat) {
    // throw new CustomError('Not implemented');
    let i=0;
    cat.map((x)=>{
        x.map((y)=>{
            y == "^^" ? i++ : i;
            });
    });
    return i;
};
