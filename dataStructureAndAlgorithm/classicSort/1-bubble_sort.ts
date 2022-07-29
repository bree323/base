/*
 * @Date: 2022-07-28 14:32:22
 * @Description: 冒泡排序
 * 描述: 相邻元素比较，选定冒泡项右移（从右侧开始排序）
 */
export {}; // 这句声明表明将该文件视为一个模块(__esmodule = true)

type ArrType = Array<number>
interface SortFunc {
    (arr: ArrType): ArrType
}
/**
 * 实现方案一
 * 复杂度 O(N**2)
 */
const imple_1: SortFunc = (arr: ArrType) => {
    let step = 0; // 记录步骤
    let transStep = 0;
    // 标识是否需要排序
    let hasSorted: boolean = false;
    // 标识排序的终止下标
    let unSort_untill_index = arr.length;
    while (!hasSorted) {
        // 进入循环前设置标识hasSorted
        hasSorted = true;
        // 进入循环
        for (let i = 1; i < unSort_untill_index; i++) {
            step += 1;
            // 如果相邻两项，前一项大于后一项，则需进行排序，调换二者位置
            if (arr[i - 1] > arr[i]) {
                transStep += 1;
                hasSorted = false;
                [arr[i-1], arr[i]] = [arr[i], arr[i-1]]
            }
        }
        unSort_untill_index = unSort_untill_index - 1;
    }
    console.log("冒泡排序-实现方案一的步骤", {step, transStep});
    
    return arr;
}

/**
 * 实现方案二
 */
const imple_2: SortFunc = (arr: ArrType) => {
    let step = 0;
    // 外层循环，循环整个数组
    for (let i = 0; i < arr.length; i++) {
        // 内层循环，外层循环一次，减少内层一次循环（外层循环一次，排出一个最大数）
        for(let j = 1; j < arr.length - i; j++) {
            step += 1;
            // 相邻元素比较
            if(arr[j - 1] > arr[j]) {
                // 位置交换
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]] 
            }
        }
    }
    console.log("冒泡排序-实现方案二的步骤", step);
    return arr;
}

const imple_3: SortFunc = (arr: ArrType) => {
    
    return arr;
}

module.exports = {
    imple_1,
    imple_2
}


/* 
总结：
方案一中新增了一个变量hasSorted来标志是否已排完序，如果对于数组中的元素排序较为有序的情况下，该方案能提前退出循环。
方案二是无论数组中的元素怎样，始终会执行循环。
*/
