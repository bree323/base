/*
 * @Date: 2022-07-08 13:55:33
 * @Description: 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
    你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
链接：https://leetcode.cn/problems/rotate-image
 */

const rotateZoe = function(matrix) {
    const rotateMatrix = [];
    
    for (let i = 0; i < matrix.length; i++) {
        const subArr = matrix[i];
        for (let j = 0; j < subArr.length; j++) {
            const n = subArr[j];
            if (!Array.isArray(rotateMatrix[j])) {
                rotateMatrix[j] = []
            }
            rotateMatrix[j].unshift(n);
        }
    }
    return rotateMatrix;
}
// [[1,2,3],[4,5,6],[7,8,9]]
// [[7,4,1],[8,5,2],[9,6,3]]
const matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
const matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
// console.log("1111->", rotateZoe(matrix1));

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 const rotate1 = function(matrix) {
    let length = matrix.length;
    //先上下交换
    for (let i = 0; i < length / 2; i++) {
        let temp = matrix[i];
        matrix[i] = matrix[length - i - 1];
        matrix[length - i - 1] = temp;
    }
    //在按照对角线交换
    for (let i = 0; i < length; ++i) {
        for (let j = i + 1; j < length; ++j) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    console.log("自旋转", matrix);
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 const rotate2 = function(matrix) {
    const len = matrix.length;
    matrix.forEach((subArr, i) => {
        // 从后往前添加数据
        for (let j = 0; j < len; j++) {
            if (i === 0) {
                matrix[j].push(subArr[j]);    
            } else {
                matrix[j].splice(-i, 0, subArr[j]);
            }
        }
        // 每组数据添加完成后取出最后有效的数据
        matrix[i] = subArr.splice(-i - 1);
    })
}
rotate2(matrix2)