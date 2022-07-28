/*
 * @Date: 2022-07-28 14:32:22
 * @Description: 冒泡排序
 */
export {}

type ArrType = Array<number>
interface SortFunc {
    (arr: ArrType): ArrType
}
/**
 * 实现方案一
 */
const imple_1: SortFunc = (arr: ArrType) => {
    // 标识是否需要排序
    let hasSorted: boolean = false;
    // 标识排序的终止下标
    let unSort_untill_index = arr.length;
    while (!hasSorted) {
        // 进入循环前设置标识hasSorted
        hasSorted = true;
        // 进入循环
        for (let i = 1; i < unSort_untill_index; i++) {
            // 如果相邻两项，前一项大于后一项，则需进行排序，调换二者位置
            if (arr[i - 1] > arr[i]) {
                hasSorted = false;
                [arr[i-1], arr[i]] = [arr[i], arr[i-1]]
            }
        }
        unSort_untill_index = unSort_untill_index - 1;
    }
    return arr;
}



module.exports = {
    imple_1
}
