/*
 * @Date: 2022-07-29 11:09:41
 * @Description: 选择排序
 * 描述：选出右侧无序区的最小值，添加到左侧有序区
 */
export {};

type ArrType = Array<number>;
interface SortFunc {
    (arr: ArrType) : ArrType,
}

const imple_1: SortFunc = (arr: ArrType) => {
    let step = 0, transStep = 0;
    // 外层循环，循环出每个元素
    for(let i = 0; i < arr.length; i++) {
        let min_index = i; // 记录最小值的索引
        for(let j = i + 1; j < arr.length; j++) {
            step += 1
            if(arr[j] < arr[min_index]) {
                min_index = j; // 重新设定最小索引的值
            }
        }
        if(min_index !== i) {
            transStep += 1;
            // 将后续的最小值向左侧有序区移动
            [arr[min_index], arr[i]] = [arr[i], arr[min_index]]
        }
    }
    console.log("选择排序-实现方案一", {step, transStep});
    
    return arr;
}

module.exports = {
    imple_1,
}
