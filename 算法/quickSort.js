function quickSort(arr) {
    if(arr.length <= 1){
        return arr;
    }

    var index = Math.floor(arr.length / 2);
    var index_value = arr.splice(index, 1)[0]; //选择基准并删除
    var left = [], right = [];

    arr.forEach(function(item){
        if(item < index_value){
            left.push(item);
        } else {
            right.push(item);
        }
    });

    return quickSort(left).concat([index_value], quickSort(right));
}

var x = [1,3,2,2,5,4];
console.log(quickSort(x));