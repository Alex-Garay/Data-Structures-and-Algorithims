interface Table {
    number: boolean;
}

function containsDuplicate(nums:number[]): boolean {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }

        set.add(nums[i]);
    }
    return false;
};

console.log(
    containsDuplicate([1,1,1,3,3,4,3,2,4,2])
)