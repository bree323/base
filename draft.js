/*
 * @Date: 2022-07-01 16:51:42
 * @Description: 草稿纸
 */
// 块级作用域
for (var a = 0; a < 10; a++) {
    console.log(a);
}

console.log("a", a)

try {
    const c = a + b;
    console.log("c====", c)
} catch (error) {
    console.log("inner - error1", error);
}

try {
    const c = a + b;
    console.log("c====", c)
} catch (error) {
    console.log("inner - error2", error);
}