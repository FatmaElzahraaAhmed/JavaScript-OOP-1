# Person Objects Documentation
This documentation provides a brief overview and usage examples for different approaches to creating Person objects in JavaScript.

## Constructor Function
The Constructor Function approach involves defining a constructor function and attaching methods directly to the object using this. It's a classic way to create objects in JavaScript.

### How to Use:
```javascript
const person1 = new Person("John Doe", 100, "happy", 80);

person1.sleep(8);
person1.eat(2);
person1.buy(3);

console.log(person1);
```

## Classes
Classes provide a cleaner syntax for creating objects with methods and properties. They offer a more structured way of defining object blueprints.

### How to Use:
```javascript
const person2 = new Person2("Jane Doe", 150, "happy", 90);

person2.sleep(6);
person2.eat(3);
person2.buy(2);

console.log(person2);
```

## Objects Linking to Other Objects (OLOO)
Objects Linking to Other Objects (OLOO) is a prototypal inheritance approach. It involves creating a separate object to hold methods and linking it to the main object.

### How to Use:
```javascript
const person3 = createPerson("Jack Smith", 200, "happy", 85);

person3.sleep(7);
person3.eat(1);
person3.buy(4);

console.log(person3);
```

## Factory Functions
Factory Functions are functions that create and return objects. This approach is versatile and allows encapsulation of private data.

### How to Use:
```javascript
const person4 = createPersonFactory("Mary Johnson", 120, "happy", 95);

person4.sleep(6);
person4.eat(3);
person4.buy(2);

console.log(person4);
```