class Animal {
	constructor() {
		this.type = 'animal' // this关键字则代表实例对象
	}
	says(say) {
		console.log(this.type + ' says ' + say)
	}
}

let animal = new Animal()
animal.says('hello')

class Cat extends Animal {
	constructor() {
		super()
		this.type = 'cat'
	}
}

let cat = new Cat()
cat.says('hello');