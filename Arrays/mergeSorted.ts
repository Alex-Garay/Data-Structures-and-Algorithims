const mergeSort = (one:number[], two:number[]):number[] => {
    const merged:number[] = one.concat(two).sort((a:number, b:number) => a < b ? -1 : 1);
    return merged;
}

console.log(
    mergeSort([0, 3, 4, 31], [4, 6, 30])
)