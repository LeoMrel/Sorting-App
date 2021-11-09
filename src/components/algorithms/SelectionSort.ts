import { swap } from "../../utils/swap"

const selectionSort = (data: number[]) => {

    const aux = [...data]// copying array
    const order = []

    let i, j
    
    for (i = 0; i < aux.length; i++) {
        for (j = i + 1; j < aux.length; j++) {

            order.push([i, j, null, null])                  // Compare
            if (aux[i] > aux[j]) {
                swap(aux, i, j)
                order.push([i, j, aux.slice(), null]) // Swap
            }
        }
        order.push([null, null, null, i]) // i-th element is in correct position ( Sorted )
    }

    return order
}

export default selectionSort