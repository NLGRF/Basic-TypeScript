class Animal{
  public name:string;
  constructor(n:string){
    this.name=n;
  }
  display():void{
    console.log("My name is Super Class"+this.name);
  }
}
class Dog extends Animal{
  display():void{
    // have super => use method Animal
    super.display();
    console.log("My name is Dog Class"+this.name);
  }
}
var obj=new Dog("Dog Object");
obj.display();
