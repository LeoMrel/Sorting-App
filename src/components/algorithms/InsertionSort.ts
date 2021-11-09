import { swap } from "../../utils/swap"

const insertionSort = (data: number[]) => {

    const aux = [...data] // copying array
    const order: (number | number[] | null)[][] = []

    let i, j
    
    for (i = 0; i < aux.length; i++) {
        j = i - 1
        while(j >= 0 && aux[j] > aux[j + 1]){
            swap(aux, j, j + 1)
            order.push([j, j + 1, null, null])              // Compare
            order.push([j, j + 1, aux.slice(), null]) // Swap
            j -= 1
        }
    }

    for(i=0;i<aux.length;i++){
        order.push([null, null, null, i])
    }

    return order
}

export default insertionSort