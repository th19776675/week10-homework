const Engineer = require("../lib/engineer");

describe('Testing Engineer Class', () => { 
  
  describe('Engineer class contains the attribute and methods needed', () => { 

    const defaultId = 2;
    const defaultEmail = 'email@email.com';
    const defaultName = 'name';
    const defaultGithub = 'githubboy';

    test('if we can instantiate an object from the class ', () => { 
      const engineer = new Engineer(defaultId,defaultEmail,defaultName,defaultGithub);
      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer).toBeInstanceOf(Object);
    });

    test('if engineer class has all required paramenters', () => { 
      const engineer = new Engineer(defaultName,defaultId,defaultEmail, defaultGithub);
      expect(engineer.id).toBe(2);
      expect(engineer.email).toBe("email@email.com");
      expect(engineer.name).toBe("name");
      expect(engineer.github).toBe("githubboy");
     })

    test("if getName() method returns the name of the class", () => {
      const engineer = new Engineer(defaultName,defaultId,defaultEmail, defaultGithub);
      expect(engineer.getName()).toBe("name")
    })
    test("if getEmail() method returns the email of the class", () => {
      const engineer = new Engineer(defaultName,defaultId,defaultEmail, defaultGithub);
      expect(engineer.getEmail()).toBe("email@email.com")
    })
    test("if getId() method returns the Id of the class", () => {
      const engineer = new Engineer(defaultName,defaultId,defaultEmail, defaultGithub);
      expect(engineer.getId()).toBe(2)
    })
    test("if getGithub() method returns the github of the class", () => {
      const engineer = new Engineer(defaultName,defaultId,defaultEmail, defaultGithub);
      expect(engineer.getGithub()).toBe("githubboy")
    })

    test("if getRole() method returns 'Engineer'", () => {
      const engineer = new Engineer(defaultName,defaultId,defaultEmail, defaultGithub);
      expect(engineer.getRole()).toBe("Engineer")
    })

   })

})