const anotherFunChallenge:Function = (input:number):void => {
    // o(1)
    let a:number = 5;
    // o(1)
    let b:number = 10;
    // o(1)
    let c:number = 50;

    // o(n)
    for (let i:number = 0; i < input; i++) {
        // o(n)
        let x:number = i + 1;
        // o(n)
        let y:number = i + 2;
        // o(n)
        let z:number = i + 3;
    }

    // o(n)
    for (let j:number = 0; j < input; j++) {
        // o(n)
        let p:number = j * 2;
        // o(n)
        let q:number = j * 2;
    }
    // o(1)
    let whoAmI:string = "I don't know";
}

// Big-O is o(4 + 7n), meaning o(n)