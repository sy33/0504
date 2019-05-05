function Robot(id){
    this.id = id;
}

class Robot{
    constructor(id){  //생성자 constructor
        this.id = id; // this라는 객체
    }

    say(){
        console.log("Hi my name is" + this.id);
    }

    //prototype대신 say라는 메서드
}

class FlyingRobot extends Robot {
    
    constructor(){
        super(3);
    }

    fly(){
        console.log("fly")
    }
}

let fr = new FlyingRobot();
fr.fly();
fr.say();