import { swap } from "../../utils/swap"

let order: (number | number[] | null)[][] = []

const partition = (aux: number[], l: number, r: number) => {
    const pivot:(number | number[] | null)[] | number = l 
    let j: (number | number[] | null)[] | number = l 

    for(let i = l + 1;i<=r;i++){
        order.push([i, pivot, null, null])
        if(aux[i] < aux[pivot]){
            j += 1 
            swap(aux, i, j)
            order.push([i, j, aux.slice(), null])
        }
    }

    swap(aux, pivot, j)
    order.push([pivot, j, aux.slice(), null])
    order.push([null, null, null, j])
    return j
}


const quickSortHelper = (aux: number[], l: number, r: number) => {
    if(l >= r) {
        if(l === r) order.push([null, null, null, l])
        return
    } 

    const pivot = l + Math.floor(Math.random() * (r - l))

    swap(aux, l, pivot)
    order.push([l, pivot, aux.slice(), null])

    const m = partition(aux, l, r)

    quickSortHelper(aux, l, m - 1)
    quickSortHelper(aux, m + 1, r)

    return
}

const quickSort = (data: number[]) => {
    const aux = [...data] // Copying array
    order = []
    
    quickSortHelper(aux, 0, aux.length - 1)
    
    return order
}

export default quickSort