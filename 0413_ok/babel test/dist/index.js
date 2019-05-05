"use strict";

require("core-js/modules/es6.function.name");

var _second = require("./second");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(0, _second.funcB)(); //let const

var name = 'suyeon';
var age = 21;
var level = 20; // 
// // arrow function
// function funcA (){
// }
// // const funcA = ()=>{}
// setTimeout(function(){
// },2000);
// setTimeout((){
// },2000);
//class
// function Person(name){
//     this.name =name;
// }
// var jack = new Person('jack');

var Person =
/*#__PURE__*/
function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "say",
    value: function say() {
      console.log(this.name);
    }
  }]);

  return Person;
}(); // var jack = new Person('jack');
// console.log(jack)
// //spread
// var obj = {name: 'jack', age: 20};
// var naem = obj.name;
// var age = obj.age;
// let {name,age} = obj;