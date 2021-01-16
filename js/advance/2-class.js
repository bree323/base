"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student() {
        this.school = "wuxing";
    }
    Student.prototype.go = function () {
        return "by subway or bike";
    };
    Student.prototype.getSchool = function () {
        console.log("school is" + this.school);
    };
    return Student;
}());
var tom3 = new Student();
console.log(tom3.go());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.say = function () {
        console.log({ this: this });
    };
    Teacher.prototype.go = function () {
        this.say();
        return "by walk";
    };
    return Teacher;
}(Student));
var teacher = new Teacher();
console.log(teacher.go());
var Perp = /** @class */ (function () {
    function Perp() {
        this.myname = "zoe";
    }
    Perp.prototype.say = function () {
        console.log(this.myname + "say");
    };
    return Perp;
}());
// 类的继承
var Fire = /** @class */ (function () {
    function Fire(name, size) {
        this.name = name;
        console.log(size);
        this.size = size;
    }
    return Fire;
}());
var BigFire = /** @class */ (function (_super) {
    __extends(BigFire, _super);
    function BigFire(color) {
        var _this = _super.call(this, "big-fire-extend", 12) || this;
        _this.color = color;
        _this.color = color;
        return _this;
        // console.log(this.name, this.size) 
    }
    return BigFire;
}(Fire));
var bf = new Fire("big-fire-0", 12);
var BF = new BigFire("blue");
// console.log(bf.name, bf.size)
console.log(BF.color);
