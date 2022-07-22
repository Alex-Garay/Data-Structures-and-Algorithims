const first = (numbers:number[]):number | null => {
    // Create a set to check for uniqueness
    const unique = new Set();

    // Iterate through our numbers
    for (let i = 0; i < numbers.length; i++) {
        // Checks if our cuurrent element exists within our set
        if (unique.has(numbers[i])) {
            // Return the duplicate element
            return numbers[i]
        }
        // Add our numbers to our set
        unique.add(numbers[i])

    }
    return null;
}

console.log(
    first([2, 5, 1, 2, 3, 5, 1, 2, 4])
)