/*
    title: 找出数组max(arr[j]-arr[i]), j > i
*/

const increaseMax = (arr) => {
    if(arr.length < 2) {
        return;
    }
    let min = arr[0], result = arr[1] - arr[0];
    for(let i = 1; i < arr.length; i++) {
        result = result > arr[i] - min ? result : arr[i] - min;
        min = min > arr[i] ? arr[i] : min;
    }
    return result;
}
