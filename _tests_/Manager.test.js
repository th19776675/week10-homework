const Manager = require("../lib/manager");

describe('Testing Manager Class', () => { 
  
  describe('Manager class contains the attribute and methods needed', () => { 

    const defaultId = 2;
    const defaultEmail = 'email@email.com';
    const defaultName = 'name';
    const defaultOffice = '12b';

    test('if we can instantiate an object from the class ', () => { 
      const manager = new Manager(defaultId,defaultEmail,defaultName,defaultOffice);
      expect(manager).toBeInstanceOf(Manager);
      expect(manager).toBeInstanceOf(Object);
    });

    test('if manager class has all required paramenters', () => { 
      const manager = new Manager(defaultName,defaultId,defaultEmail, defaultOffice);
      expect(manager.id).toBe(2);
      expect(manager.email).toBe("email@email.com");
      expect(manager.name).toBe("name");
      expect(manager.officeNumber).toBe("12b");
     })

    test("if getName() method returns the name of the class", () => {
      const manager = new Manager(defaultName,defaultId,defaultEmail, defaultOffice);
      expect(manager.getName()).toBe("name")
    })
    test("if getEmail() method returns the email of the class", () => {
      const manager = new Manager(defaultName,defaultId,defaultEmail, defaultOffice);
      expect(manager.getEmail()).toBe("email@email.com")
    })
    test("if getId() method returns the Id of the class", () => {
      const manager = new Manager(defaultName,defaultId,defaultEmail, defaultOffice);
      expect(manager.getId()).toBe(2)
    })

    test("if getRole() method returns 'Manager'", () => {
      const manager = new Manager(defaultName,defaultId,defaultEmail, defaultOffice);
      expect(manager.getRole()).toBe("Manager")
    })

   })

})