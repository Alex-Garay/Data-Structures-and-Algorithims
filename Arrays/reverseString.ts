const reverse = (string:string):string => {
    // Split to turn the string into an array
    // Array allows us to use the reverse function
    // Using the array join function allows to put it back into a string
    const reversed = string.split('').reverse().join('');
    return reversed;
}

console.log(reverse('Hi my name is Alex.'))