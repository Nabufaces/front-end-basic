const quickSort = arr => {
    if(arr.length <= 1) {
        return arr;
    }

    let left = [], right = [];
    const index = Math.floor(arr.length / 2);
    const item_index = arr.splice(index, 1)[0];

    arr.forEach(item => {
        if(item < item_index) {
            left.push(item)
        } else {
            right.push(item)
        }
    })

    return quickSort(left).concat([item_index], quickSort(right))
}