const twoSum = (numbers:number[], target:number):number[] => {
    // Storage for our indexes
    const indexes:number[] = [];

    for (let i = 0; i < numbers.length; i++) {

        for (let j = 0; j < numbers.length; j++) {
            // May not use the same element twice.
            if (i == j) {
                break;
            }
            // Check the sum of the two elements
            if (numbers[i] + numbers[j] == target) {
                //Adding our indexes to our array
                indexes.push(j, i);
            }
        }
    }
    return indexes;
}

console.log(
    twoSum([3, 2, 4], 6)
)