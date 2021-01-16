class Student {
    school= "wuxing";
    go(){
        return "by subway or bike"
    }
    getSchool() {
        console.log("school is" + this.school)
    }
}

let tom3 = new Student()
console.log(tom3.go())

class Teacher extends Student {
    say() {
        console.log({this: this})
    }
    go() {
        this.say()
        return "by walk"
    }
}

let teacher = new Teacher()
console.log(teacher.go())

class Perp {
    private myname ="zoe"
    say() {
        console.log( this.myname + "say" )
    }
}


// 类的继承
class Fire {
   protected name: string;
   private size: number;
   constructor(name: string, size: number) {
       this.name = name
       console.log(size)
       this.size = size
   }
}

class BigFire extends Fire {
    constructor(public color: string ){
        super("big-fire-extend", 12)
        this.color = color
        // console.log(this.name, this.size) 
    }
}

let bf = new Fire("big-fire-0", 12)
let BF = new BigFire("blue")
// console.log(bf.name, bf.size)
console.log(BF.color)