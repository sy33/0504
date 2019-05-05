// ES6

import {funcB} from './second'

funcB();

//let const


 var name = 'suyeon';

 let age = 21;
 const level =20; // 



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

class Person{
    constructor(name){
        this.name = name;
    }

    say(){
        console.log(this.name);
    }
}

// var jack = new Person('jack');
// console.log(jack)

// //spread

// var obj = {name: 'jack', age: 20};

// var naem = obj.name;
// var age = obj.age;

// let {name,age} = obj;

