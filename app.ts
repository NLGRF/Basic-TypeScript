class Animal{
  public name:string;
  constructor(n:string){
    this.name=n;
  }
  disp():void{
    console.log("My name is "+this.name);
  }
}
class Dog extends Animal{
}
var obj=new Dog("Dog Object");
obj.disp();
