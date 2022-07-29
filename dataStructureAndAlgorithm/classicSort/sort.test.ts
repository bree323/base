/*
 * @Date: 2022-07-28 13:52:23
 * @Description: jest
 */
export {};

const bubbleSort = require("./1-bubble_sort");
const secletionSort = require("./2-secletion_sort");
const insertionSort = require("./3-insertion_sort");

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
        input: [3, 5, 2, 4, 7, 1, 8, 9, 10, 11],
        output: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11]
    },
    {
        input: [4, 2, 7, 1, 3],
        output: [1, 2, 3, 4, 7]
    },
]

test('bubble-sort-imple_1', () => {
    expect(bubbleSort.imple_1(testSortDatas[0].input)).toEqual(testSortDatas[0].output);
    expect(bubbleSort.imple_1(testSortDatas[1].input)).toEqual(testSortDatas[1].output);
    expect(bubbleSort.imple_1(testSortDatas[2].input)).toEqual(testSortDatas[2].output);
});
test('bubble-sort-imple_2', () => {
    expect(bubbleSort.imple_2(testSortDatas[0].input)).toEqual(testSortDatas[0].output);
    expect(bubbleSort.imple_2(testSortDatas[1].input)).toEqual(testSortDatas[1].output);
    expect(bubbleSort.imple_2(testSortDatas[2].input)).toEqual(testSortDatas[2].output);
});

test('secletion-sort-imple_1', () => {
    expect(secletionSort.imple_1(testSortDatas[0].input)).toEqual(testSortDatas[0].output);
    expect(secletionSort.imple_1(testSortDatas[1].input)).toEqual(testSortDatas[1].output);
    expect(secletionSort.imple_1(testSortDatas[2].input)).toEqual(testSortDatas[2].output);
});

test('insertion_sort-imple_1', () => {
    expect(insertionSort.imple_1(testSortDatas[0].input)).toEqual(testSortDatas[0].output);
    expect(insertionSort.imple_1(testSortDatas[1].input)).toEqual(testSortDatas[1].output);
    expect(insertionSort.imple_1(testSortDatas[2].input)).toEqual(testSortDatas[2].output);
});
