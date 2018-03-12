const maxSubArray = (arr) => {
    if(arr.length === 1) {
        return arr;
    }
    let s1 = 0, s2 = 0, end = 0;
    for(let i = 0; i < arr.length; i++) {
        s1 += arr[i];
        if(s1 < 0) {
            s1 = 0;
            if(i <= end) {
                start = i + 1;
            }
        } else if(s1 > s2){
            s2 = s1;
            end = i;
        }
    }
    return s2;
}

console.log(maxSubArray([1, -2, 3, 5, -3, 2, -5, -10, 1]));