export const bubbleSort =(unsortedArray:number[]) => {
    const size = unsortedArray.length;
    const result:number[] = [...unsortedArray]
   
    for(let j = 0; j < size - 1; j++) {
        for(let i = 0; i < size - j - 1; i++) {
            if(result[i] > result[i + 1]) {
                let temp = result[i];
                result[i] = result[i + 1];
                result[i + 1] = temp
            }
        }
    }

    return result;
}