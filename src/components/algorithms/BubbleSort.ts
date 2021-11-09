import { swap } from "../../utils/swap"

export const bubbleSort = (data: number[]) => {

    const aux = [...data] // copying array
    const order = []

    let i, j
    
    for (i = 0; i < aux.length; i++) {
        for (j = 0; j < aux.length - i - 1; j++) {

            order.push([j, j + 1, null, null])                  // Compare
            if (aux[j] > aux[j + 1]) {
                swap(aux, j, j + 1)
                order.push([j, j + 1, aux.slice(), null]) // Swap
            }
        }
        order.push([null, null, null, j]) // j-th element is in correct position ( Sorted )
    }

    return order
}

export default bubbleSort