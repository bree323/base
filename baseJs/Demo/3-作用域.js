/*
 * @Date: 2022-07-07 14:07:03
 * @Description:
 */
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    });
  })(i);
}
