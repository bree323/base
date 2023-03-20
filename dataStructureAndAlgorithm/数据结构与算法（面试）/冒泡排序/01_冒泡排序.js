function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr   
}

// input: [2, 1],
// output: [1, 2]
console.log(bubbleSort([2,1]));

// input: [3, 5, 2, 4, 7, 1, 8, 9, 10, 11],
// output: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11]
console.log(bubbleSort([3, 5, 2, 4, 7, 1, 8, 9, 10, 11]));

// input: [4, 2, 7, 1, 3],
// output: [1, 2, 3, 4, 7]
console.log(bubbleSort([4, 2, 7, 1, 3]));