/* 
Given a non-empty array of digits representing a non-negative integer, add plus one to the integer.
The digits are stores such that the most significant digit is at the head of the list, and each
element in the array contains only a single digit. Assume that the integer does not contain any 
leading zero, except the number 0 itself.
*/

var plusOne = function(digits) {
    const copiedArray = digits.slice();
    const resultsArray = [];
    let carryover = 0;
    let newNum;
    for (let i = copiedArray.length - 1; i >= 0; i--) {
        if (i == copiedArray.length - 1) {
            newNum = digits[i] + 1;
            if (newNum === 10) {
                newNum = 0;
                carryover = 1;
            }
            resultsArray.unshift(newNum);
            continue;
        } else if (carryover) {
            newNum = digits[i] + carryover;
            if (newNum === 10) {
                newNum = 0;
                carryover = 1;
            } else {
                carryover = 0;
            }
            resultsArray.unshift(newNum);
            continue;
        } else {
            resultsArray.unshift(digits[i]);
        }
    }
    if (carryover) {
        resultsArray.unshift(carryover);
    }
    return resultsArray;
};

console.log(plusOne([9, 9]));
