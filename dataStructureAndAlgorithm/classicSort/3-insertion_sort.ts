/*
 * @Date: 2022-07-29 11:44:04
 * @Description: 插入排序
 * 描述：以目标值与其之前的元素进行比较，当目标值与比较值较小时，则插入到比较值之前
 */

export {};

type ArrType = Array<number>;
interface SortFunc {
    (arr: ArrType): ArrType;
}

const imple_1: SortFunc = (arr: ArrType) => {
    for(let i = 1; i < arr.length; i++) {
        let temp_val = arr[i]; // 目标值
        let pos = i; // 指针位置
        // 判断pos前一项是否大于temp_val
        while(pos > 0 && arr[pos - 1] > temp_val) {
            // 将pos前一项的值右移一格
            arr[pos] = arr[pos - 1];
            // 指针前移
            pos -= 1;
        }
        arr[pos] = temp_val;
    }
    return arr;
}

module.exports = {
    imple_1,
}
