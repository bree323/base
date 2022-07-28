/*
 * @Date: 2022-07-28 13:52:23
 * @Description: jest
 */
export {};

const bubbleSort = require("./1-bubble_sort");

type ArrType = Array<number>
interface SortFunc {
    (arr: ArrType): ArrType
}

const testSortDatas = [
    {
        input: [2, 1],
        output: [1, 2]
    },
    {
        input: [3, 5, 2, 4, 7, 1],
        output: [1, 2, 3, 4, 5, 7]
    }
]

test('bubble-sort-imple_1', () => {
    expect(bubbleSort.imple_1(testSortDatas[0].input)).toEqual(testSortDatas[0].output);
    expect(bubbleSort.imple_1(testSortDatas[1].input)).toEqual(testSortDatas[1].output);
});
