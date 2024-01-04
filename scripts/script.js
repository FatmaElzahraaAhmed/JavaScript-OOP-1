//Constructor function:
function Person(fullName, money, sleepMood, healthRate) {
  this.fullName = fullName;
  this.money = money;
  this.sleepMood = sleepMood;
  this.healthRate = healthRate;

  this.sleep = function (hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  };

  this.eat = function (meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  };

  this.buy = function (items) {
    this.money -= items * 10;
  };
}

// Usage:
const person1 = new Person("John Doe", 100, "happy", 80);
person1.sleep(8);
person1.eat(2);
person1.buy(3);
console.log(person1);


//Classes:
class Person2 {
  constructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }

  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  }

  eat(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  }

  buy(items) {
    this.money -= items * 10;
  }
}

// Usage:
const person2 = new Person2("Jane Doe", 150, "happy", 90);
person2.sleep(6);
person2.eat(3);
person2.buy(2);
console.log(person2);

//Objects Linking to Other Objects (OLOO):
const personMethods = {
  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  },

  eat(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  },

  buy(items) {
    this.money -= items * 10;
  },
};

function createPerson(fullName, money, sleepMood, healthRate) {
  const person = Object.create(personMethods);
  person.fullName = fullName;
  person.money = money;
  person.sleepMood = sleepMood;
  person.healthRate = healthRate;
  return person;
}

// Usage:
const person3 = createPerson("Jack Smith", 200, "happy", 85);
person3.sleep(7);
person3.eat(1);
person3.buy(4);
console.log(person3);


//Factory Functions:
function createPersonFactory(fullName, money, sleepMood, healthRate) {
    return {
      fullName,
      money,
      sleepMood,
      healthRate,
  
      sleep(hours) {
        if (hours === 7) {
          this.sleepMood = "happy";
        } else if (hours < 7) {
          this.sleepMood = "tired";
        } else {
          this.sleepMood = "lazy";
        }
      },
  
      eat(meals) {
        if (meals === 3) {
          this.healthRate = 100;
        } else if (meals === 2) {
          this.healthRate = 75;
        } else if (meals === 1) {
          this.healthRate = 50;
        }
      },
  
      buy(items) {
        this.money -= items * 10;
      },
    };
  }
  
  // Usage:
  const person4 = createPersonFactory("Mary Johnson", 120, "happy", 95);
  person4.sleep(6);
  person4.eat(3);
  person4.buy(2);
  console.log(person4);
  
