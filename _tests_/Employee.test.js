const Employee = require("../lib/employee");

describe('Testing Employee Class', () => { 
  
  describe('Employee class contains the attribute and methods needed', () => { 

    const defaultId = 2;
    const defaultEmail = 'email@email.com';
    const defaultName = 'name';

    test('if we can instantiate an object from the class ', () => { 
      const employee = new Employee(defaultId,defaultEmail,defaultName);
      expect(employee).toBeInstanceOf(Employee);
      expect(employee).toBeInstanceOf(Object);
    });

    test('if employee class has all required paramenters', () => { 
      const employee = new Employee(defaultName,defaultId,defaultEmail);
      expect(employee.id).toBe(2);
      expect(employee.email).toBe("email@email.com");
      expect(employee.name).toBe("name");

     })

    test("if getName() method returns the name of the class", () => {
      const employee = new Employee(defaultName,defaultId,defaultEmail);
      expect(employee.getName()).toBe("name")
    })
    test("if getEmail() method returns the email of the class", () => {
      const employee = new Employee(defaultName,defaultId,defaultEmail);
      expect(employee.getEmail()).toBe("email@email.com")
    })
    test("if getId() method returns the Id of the class", () => {
      const employee = new Employee(defaultName,defaultId,defaultEmail);
      expect(employee.getId()).toBe(2)
    })

    test("if getRole() method returns 'Employee'", () => {
      const employee = new Employee(defaultName,defaultId,defaultEmail);
      expect(employee.getRole()).toBe("Employee")
    })

   })

})