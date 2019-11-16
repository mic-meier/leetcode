/*
Given an array of integers nums, write a method that returns the "pivot" index of that array.

The pivot index is the index where the sum of the numbers to the left of the index is 
equal to the sum of the numbers to the right of the index.

If no pivot exists, return -1
*/

var pivotIndex = function(nums) {
    if (nums.length < 2) {
        return -1;
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sum = nums.reduce(reducer);
    let tempSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (tempSum == sum - tempSum - nums[i]) {
            return i;
        }
        tempSum += nums[i];
    }
    return -1;
};
