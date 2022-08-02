const Intern = require("../lib/intern");

describe('Testing Intern Class', () => { 
  
  describe('Intern class contains the attribute and methods needed', () => { 

    const defaultId = 2;
    const defaultEmail = 'email@email.com';
    const defaultName = 'name';
    const deafultSchool = 'WSC';

    test('if we can instantiate an object from the class ', () => { 
      const intern = new Intern(defaultId,defaultEmail,defaultName,deafultSchool);
      expect(intern).toBeInstanceOf(Intern);
      expect(intern).toBeInstanceOf(Object);
    });

    test('if intern class has all required paramenters', () => { 
      const intern = new Intern(defaultName,defaultId,defaultEmail, deafultSchool);
      expect(intern.id).toBe(2);
      expect(intern.email).toBe("email@email.com");
      expect(intern.name).toBe("name");
      expect(intern.school).toBe("WSC");
     })

    test("if getName() method returns the name of the class", () => {
      const intern = new Intern(defaultName,defaultId,defaultEmail, deafultSchool);
      expect(intern.getName()).toBe("name")
    })
    test("if getEmail() method returns the email of the class", () => {
      const intern = new Intern(defaultName,defaultId,defaultEmail, deafultSchool);
      expect(intern.getEmail()).toBe("email@email.com")
    })
    test("if getId() method returns the Id of the class", () => {
      const intern = new Intern(defaultName,defaultId,defaultEmail, deafultSchool);
      expect(intern.getId()).toBe(2)
    })
    test("if getGithub() method returns the school of the class", () => {
      const intern = new Intern(defaultName,defaultId,defaultEmail, deafultSchool);
      expect(intern.getSchool()).toBe("WSC")
    })

    test("if getRole() method returns 'Intern'", () => {
      const intern = new Intern(defaultName,defaultId,defaultEmail, deafultSchool);
      expect(intern.getRole()).toBe("Intern")
    })

   })

})