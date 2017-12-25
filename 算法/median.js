/*
    title: 找出数组中出现次数超过数组长度一半的元素
    method: 遍历数组，保存数组中的数字和其出现次数，如果下一个相同则次数加1，不同减1，如果次数变为0则保存数字为下一个数,最终情况是出现次数最多的元素
        最终保存下来，然后检查是否超过半数
*/

const median = arr => {
    let key = arr[0], count_1 = 0, count_2 = 0;
    for(let i = 0; i < arr.length; i++) {
        if(count_1 === 0) {
            key = arr[i];
            count_1 = 1;
        } else if (arr[i] === key) {
            count_1++;
        } else {
            count_1--;
        }
    }
    //检验是否超过一半
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === key) {
            count_2++;
        }
    }
    if(2 * count_2 > arr.length) {
        return key;
    } else {
        return;
    }
}