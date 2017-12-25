/*
    title: 求两个递增数组的交集
*/

const increaseIntersection = (arr1, arr2) => {
    if(arr1.length < 1 || arr2.length < 1) {
        return;
    }
    let result = [], i = 0, j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] > arr2[j]) {
            j++;
        } else if(arr1[i] < arr2[j]) {
            i++;
        } else {
            result.push(arr1[i]);
            i++;
            j++;
        }
    }
    return result;
}