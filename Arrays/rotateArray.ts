function rotate(nums: number[], k: number): void {
    // Loop through k amounts
    for (let i = 0; i < k + 1; i++) {
        // Remove the first element in the array
        let shifted:any = nums.shift();
        // Push our shifted element to the end of the array
        nums.push(shifted)
    }
};

rotate([1,2,3,4,5,6,7], 3)