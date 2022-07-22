function maxSubArray(numbers:number[]):number {
    // input: array of integers
    // output: maxiumum sum of continuos part of an array

    // max sum
    let max:number = numbers[0];
    // Current sum
    let currentSum:number = 0;

    for (let i = 0; i < numbers.length; i++) {
        // We can disregard negative sums since we want the max sum
        if (currentSum < 0) {
            currentSum = 0;
        }

        // Add our current element to current sum
        currentSum += numbers[i];
        // Check if our current sum is larger than our max sum.
        max = Math.max(currentSum, max);
    }
    
    return max;
};

console.log(
    maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
)