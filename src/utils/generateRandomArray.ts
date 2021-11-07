export const fillWithRandom = (max:number, min:number, quantity:number = 210):number[] => {
    const results:number[] = [];
    for(let i = 0; i < quantity; i ++) {
        let candidate = Math.floor(Math.random() * (max - min + 1) + min)
        if(results.indexOf(candidate) === -1) results.push(candidate)
        else results.push(candidate + 1)
    }
    return results
};