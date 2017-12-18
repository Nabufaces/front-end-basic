const findDuplicated = (arr) => {
    if(!arr || arr.length < 2) {
        return;
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
    console.log(duplicatedArr);
    console.log(map)
};

findDuplicated([1,2,3,12,1,2]);

