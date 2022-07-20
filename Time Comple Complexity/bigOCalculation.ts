const anotherFunction:Function = () => {

}
const funChallenge:Function = (input:number[]): number => {
 let a:number = 10; // o(1)
 a = 50 + 3; // o(1)

 // o(n)
 for (let i = 0; i < input.length; i++) {
    // o(n)
    anotherFunction();
    // o(n)
    let stranger:boolean = true;
    // o(n)
    a++;
 }
 // o(1)
 return a;
}

// Big-O is o(3 + 4n);