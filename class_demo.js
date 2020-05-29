class Person{
	constructor(name,sex) {
		this.name = name
		this.sex = sex
		this._age = 12
		this.height = 180
	}
	get age(){
		return this._age
	}
	set age(age){
		if(age > 100 || age < 0){
			throw new Error("年龄不能太大，也不能太小")
		}
		this._age = age
	}
	say_name(){
		console.log(this.name)
	}
}

var p1 = new Person('张三','男')
console.log(p1)
p1.age = 50
p1.say_name()

for(let key in p1){
	console.log("key:" + key + " ------- values:" + p1[key])
}