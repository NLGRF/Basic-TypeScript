class Employee{
  private id:number;
  private names:string;
  // Male = 1
  // Female = 0
  private sex:number;
  private salary:number;

  constructor(id:number,names:string,sex:number,salary:number){
    this.id=id;
    this.names=names;
    this.sex=sex;
    this.salary=salary;
  }
  display():void{
    console.log("ID = "+this.id);
    console.log("NAME = "+this.names);
    console.log("SEX = "+this.sex);
    console.log("SALARY = "+this.salary);
  }
}
let emp1=new Employee(101,"Non",1,500);
emp1.display();
let emp2=new Employee(100,"Grace",0,99);
emp2.display();
