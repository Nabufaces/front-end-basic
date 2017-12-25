/*
    title: 将数组所有0移动到数组末尾
    method: k为0的位置，i为非0位置，arr[k] = arr[i]，将arr[i]置为0，遍历到数组末尾
*/

const pushZero = arr => {
	let k = 0;
	while(arr[k] !== 0) {
		k++;
	}
	for(i = k + 1; i < arr.length; i++) {
		if(arr[k] === 0) {
			if(arr[i] !== 0) {
				arr[k] = arr[i];
				arr[i] = 0;
				k++;
			}
		}
	}
	return arr;
}