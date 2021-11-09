let order: (number | number[] | null)[][] = []

const merge = (aux: number[], l: number, mid: number, r: number) => {
    let i = l, j = mid + 1

    const arr = [] 

    while((i <= mid) && (j <= r)){
        order.push([i, j, null, null])      // Compare i th and j th element  
        if(aux[i] <= aux[j]){
            arr.push(aux[i++])
        } else {
            arr.push(aux[j++])
        }
    }

    while(i <= mid){
        order.push([i, null, null, null])
        arr.push(aux[i++])
    }

    while(j <= r){
        order.push([null, j, null, null])
        arr.push(aux[j++])
    }
    
    for(i=l;i<=r;i++){
        aux[i] = arr[i - l]
        order.push([i, null, aux.slice(), null]) 
    }

}

const mergeSortHelper = (aux: number[], l: number, r: number) => {
    if(l >= r) 
        return 
    
    const mid = Math.floor((l + r) / 2)

    mergeSortHelper(aux, l, mid)
    mergeSortHelper(aux, mid + 1, r) 
    
    merge(aux, l, mid, r)
}

const mergeSort = (data: number[]) => {
    order = []
    const aux = [...data] // copying array
    
    mergeSortHelper(aux, 0, aux.length - 1)
    
    for(let i=0;i<aux.length;i++){
        order.push([null, null, null, i]) // i th element will be in correct position
    }

    return order
}

export default mergeSort