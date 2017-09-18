var Employee = /** @class */ (function () {
    function Employee(id, names, sex, salary) {
        this.id = id;
        this.names = names;
        this.sex = sex;
        this.salary = salary;
    }
    Employee.prototype.display = function () {
        console.log("ID = " + this.id);
        console.log("NAME = " + this.names);
        console.log("SEX = " + this.sex);
        console.log("SALARY = " + this.salary);
    };
    return Employee;
}());
var emp1 = new Employee(101, "Non", 1, 500);
emp1.display();
var emp2 = new Employee(100, "Grace", 0, 99);
emp2.display();
