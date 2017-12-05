//将数组0移动到数组末尾
const pushZero = (arr) => {
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

console.log(pushZero([1, 0, 3, 4, 0, 0, 9]))