interface Girlclass {
    name: string;
    age: number;
    bust: number;
    waistline?: number;
    [propname: string]: any;
    say(): string;
  }

const girlclass: Girlclass = {
    name: "大脚",
    age: 18,
    bust: 94,
    waistline: 21,
    sex: "女",
    say() {
      return "欢迎光临 ，红浪漫洗浴！！";
    },
  };
// 
class XiaoJieJieclass implements Girlclass {
    name = "刘英";
    age = 18;
    bust = 90;
    say() {
      return "欢迎光临 ，红浪漫洗浴！！";
    }
  }

class lady {
    content = "hello class";
    say() {
        return this.content
    }
}
const chengsuozi = new lady()

  console.log({
    //   girlclass,
    //   XiaoJieJieclass,
    chengsuoziToSay: chengsuozi.say()
  })