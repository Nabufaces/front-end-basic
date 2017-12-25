/*
    title: 找出数组重复元素
*/

const findDuplicated = (arr) => {
    if(!arr || arr.length < 2) {
        return [];
    }
    let map = {};
    let duplicatedArr = [];
    arr.forEach((item) => {
        if(!map[item]) {
            map[item] = 1;
        } else {
            map[item] ++;
        }
    });
    for(let i in map) {
        if(map[i] > 1) {
            duplicatedArr.push(parseInt(i))
        }
    }
    return duplicatedArr;
};


