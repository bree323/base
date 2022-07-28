/*
 * @Date: 2022-07-28 11:14:27
 * @Description: 转换工具
 */

/**
 * 数字转中文大写
 * @param {*} num (Number | String)
 */
const num2ZhUp = (num) => {
  let numStrArr = (num + "").split("");
  let numArr = numStrArr.map((item) => +item);
  const numZhMap = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  const numUtils = ["", "拾", "百", "千", "万", "拾", "百", "千", "亿", "拾"]; // 保留10为数
  // ['','十','百','千','万','十','百','千','亿','十','百','千','万','十','百','千','亿']; // 保留17位数
  let numZhStr = "";
  for (let i = 0; i < numArr.length; i++) {
    const _num = numArr[i];
    const _len = numArr.length;
    numZhStr += numZhMap[_num]; // 获取阿拉伯数字对应的中文大写数字
    _num !== 0 && (numZhStr += numUtils[_len - i - 1]); // 不为0才添加单位
  }

  numZhStr = numZhStr.replace(/零+$/, ""); // 去除末尾多余的‘零’
  numZhStr = numZhStr.replace(/零{2}/, ""); // 去除中间多余的‘零’
  console.log({ numArr, numZhStr });
};

/**
 * 数字金额转换为中文大写金额
 * @param {number | string} money
 * @returns
 */
const moneyNum2ChineseUplower = (money) => {
  //汉字的数字
  let cnNums = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  //基本单位
  let cnIntRadice = ["", "拾", "佰", "仟"];
  //对应整数部分扩展单位
  let cnIntUnits = ["", "万", "亿"];
  //对应小数部分单位
  let cnDecUnits = ["角", "分", "毫", "厘"];
  //整数金额时后面跟的字符
  let cnInteger = "整";
  //整型完以后的单位
  let cnIntLast = "元";
  //最大处理的数字
  let maxNum = 999999999999999.9999;
  //金额整数部分
  let integerNum;
  //金额小数部分
  let decimalNum;
  //输出的中文金额字符串
  let chineseStr = "";
  //分离金额后用的数组，预定义
  let parts;
  if (money == "") {
    return "";
  }
  money = parseFloat(money);
  if (money >= maxNum) {
    //超出最大处理数字
    return "";
  }
  if (money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  //转换为字符串
  money = money.toString();
  if (money.indexOf(".") == -1) {
    integerNum = money;
    decimalNum = "";
  } else {
    parts = money.split(".");
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  //获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0;
    let IntLen = integerNum.length;
    for (let i = 0; i < IntLen; i++) {
      let n = integerNum.substr(i, 1);
      let p = IntLen - i - 1;
      let q = p / 4;
      let m = p % 4;
      if (n == "0") {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  //小数部分
  if (decimalNum != "") {
    let decLen = decimalNum.length;
    for (let i = 0; i < decLen; i++) {
      let n = decimalNum.substr(i, 1);
      if (n != "0") {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }

  if (chineseStr == "") {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum == "") {
    chineseStr += cnInteger;
  }

  return chineseStr;
};

module.exports = {
  num2ZhUp,
  moneyNum2ChineseUplower,
};
