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
    // Setter
    Employee.prototype.setDepartment = function (dep) {
        this.department = dep;
    };
    // Getter
    Employee.prototype.getDepartment = function () {
        return this.department;
    };
    return Employee;
}());
var emp1 = new Employee(101, "Non", 1, 500);
emp1.setDepartment("Programmer");
emp1.display();
console.log(emp1.getDepartment());
