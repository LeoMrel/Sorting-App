const defaultSortingAlgorithm = (a:number, b:number): number => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  };
  


export const quickSort = (unsortedArray:number[], sortingAlgorithm = defaultSortingAlgorithm) => {
    const sortedArray = [...unsortedArray];

    const swapArrayElements = (arrayToSwap:number[], i:number, j:number) => {
      const a = arrayToSwap[i];
      arrayToSwap[i] = arrayToSwap[j];
      arrayToSwap[j] = a;
    };
  
    const partition = (arrayToDivide:number[], start:number, end:number) => {
      const pivot = arrayToDivide[end];
      let splitIndex = start;
      for (let j = start; j <= end - 1; j++) {
        const sortValue = sortingAlgorithm(arrayToDivide[j], pivot);
        if (sortValue === -1) {
          swapArrayElements(arrayToDivide, splitIndex, j);
          splitIndex++;
        }
      }
      swapArrayElements(arrayToDivide, splitIndex, end);
      return splitIndex;
    };
  
    // Recursively sort sub-arrays.
    const recursiveSort = (arraytoSort:number[], start:number, end:number) => {
      // stop condition
      if (start < end) {
        const pivotPosition = partition(arraytoSort, start, end);
        recursiveSort(arraytoSort, start, pivotPosition - 1);
        recursiveSort(arraytoSort, pivotPosition + 1, end);
      }
    };
  
    // Sort the entire array.
    recursiveSort(sortedArray, 0, unsortedArray.length - 1);
    return sortedArray;
};