/*
 * @Date: 2022-07-27 17:25:32
 * @Description: jest 测试工具
 */
const _r: any = require("./index")

test("ramda array map", () => {
    expect(_r.array.map([1, 2])).toEqual([2, 4]);
})
