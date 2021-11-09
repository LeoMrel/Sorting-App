import bubbleSort  from "./BubbleSort";
import quickSort from "./QuickSort";
import mergeSort from "./MergeSort";
import insertionSort from "./InsertionSort";
import selectionSort from "./SelectionSort";


export const algorithmsMap: {name: string, function: any}[] = [
    {name: "Bubble Sort", function: bubbleSort},
    {name: "Quick Sort", function: quickSort},
    {name: 'Merge Sort', function: mergeSort},
    {name: 'Insertion Sort', function: insertionSort},
    {name: 'Selection Sort', function: selectionSort}
]
