// ES6继承

class Animal {
    constructor(props) {
        this.name = props.name || 'Unkonwn';
    }

    eat() {
        console.log(`${this.name} will eat apple.`);
    }
}

class Bird extends Animal {
    constructor(props,attr) {
        super(props);
        this.type = props.type || 'Unkonwn';
        this.attr = attr;
    }

    fly() {
        console.log(`${this.type} can fly.`);
    }

    myAttr() {
        console.log(`My attr is ${this.attr}.`);
    }
}

let bird = new Bird({
    name: 'bird1',
    type: 'Bird'
},'鸟')

bird.eat();
bird.fly();
bird.myAttr();