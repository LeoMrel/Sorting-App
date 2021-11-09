import bubbleSort  from "./BubbleSort";
import quickSort from "./QuickSort";
import mergeSort from "./MergeSort";
import insertionSort from "./InsertionSort";
import selectionSort from "./SelectionSort";


export const algorithmsMap: {name: string, function: any, complexity: string}[] = [
    {name: "BubbleSort", function: bubbleSort, complexity: 'O(n^2)'},
    {name: 'SelectionSort', function: selectionSort, complexity: 'O(n^2)'},
    {name: 'InsertionSort', function: insertionSort, complexity: 'O(n^2)'},
    {name: 'MergeSort', function: mergeSort, complexity: 'O(log(n))'},
    {name: "QuickSort", function: quickSort, complexity: 'O(n^2)'}
]
