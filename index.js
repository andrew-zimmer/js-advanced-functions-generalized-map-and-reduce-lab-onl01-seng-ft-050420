function map(array, func){
    const newArray = []
    for (let x of array){
        newArray.push(func(x))
    }
    return newArray
}

function reduce(array, func, start = true){
    let total = start
    for (let x of array){
        total = func(x, total)
    }
    if (start === true){
        if (typeof total === 'number'){
            return total -1
        }
        return total
    }
    return total
}
