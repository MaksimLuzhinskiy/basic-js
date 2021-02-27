const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Error');
    }
    let Arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                if (arr[i - 2] !== '--discard-next') {
                    Arr2.pop();
                }
                break;
            case '--double-next':
                if (arr[i + 1] !== undefined) {
                    Arr2.push(arr[i + 1]);
                }
                break;
            case '--double-prev':
                if (arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') {
                    Arr2.push(arr[i - 1]);
                }
                break;
            default:
                Arr2.push(arr[i]);
                break;
        }
    }

    return Arr2;

};
