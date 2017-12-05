const clearZero = arr => {
    const row = arr.length;
    const col = arr[0].length;
    let rowIndex = [], colIndex = [];

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(arr[i][j] === 0) {
                if(rowIndex.indexOf(i) === -1) rowIndex.push(i);
                if(colIndex.indexOf(j) === -1) colIndex.push(j);
            }
        }
    }
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(rowIndex.indexOf(i) !== -1 || colIndex.indexOf(j) !== -1) {
                arr[i][j] = 0
            }
        }
    }
    return arr;
}

