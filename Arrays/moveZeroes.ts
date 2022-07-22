function moveZeroes(numbers: number[]): void {
    // Input an array of numbers
    // Output no return but all zeroes moveed to the back while maintaining order.

    
    // loop through our array
    for (let i = 0; i < numbers.length; i++) {
        // splice and add a zero to the back
        if (numbers[i] === 0) {
            numbers.splice(i, 1);
            numbers.push(0);
        }
    }
};

moveZeroes([0,1,0,3,12])