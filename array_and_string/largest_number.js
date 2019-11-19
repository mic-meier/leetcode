/* 
In a given array, there is always a largest element.
Find whether the largest element in the array is at least twice as much
as every other element in the array.
if it is return its index, otherwise return -1.
*/

"use strict";

var dominantIndex = function(nums) {
    if (nums.length < 2) {
        return 0;
    }
    let biggest = 0;
    let indexOfBiggest = 0;
    let flag = true;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > biggest) {
            biggest = nums[i];
            indexOfBiggest = i;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != biggest && nums[i] *2 > biggest) {
            flag = false;
        }
    }

    if (flag) {
        return indexOfBiggest;
    } else {
        return -1;
    }
};

console.log(dominantIndex([0, 0, 0, 1]));
console.log(dominantIndex([1, 2, 3, 4]));
console.log(dominantIndex([3, 6, 1, 0]));
