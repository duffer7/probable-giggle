// ===============================
// Основы type guards
// ===============================

// Простейший guard через typeof
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

const val: unknown = 'hello';
if (isString(val)) {
    // внутри блока val: string
    console.log(val.toUpperCase());
}

// ===============================
// Guard через instanceof
// ===============================

class Dog {
    bark() {
        console.log('Woof!');
    }
}

class Cat {
    meow() {
        console.log('Meow!');
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

// ===============================
// Guard через оператор in
// ===============================

interface Admin {
    role: 'admin';
    permissions: string[];
}

interface User {
    role: 'user';
    email: string;
}

function printInfo(person: Admin | User) {
    if ('permissions' in person) {
        console.log('Admin with permissions:', person.permissions);
    } else {
        console.log('User with email:', person.email);
    }
}

// ===============================
// Пользовательские type guards
// ===============================

interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }
}

// ===============================
// Guard с union типов
// ===============================

type Shape = Circle | Square;

interface Circle {
    kind: 'circle';
    radius: number;
}

interface Square {
    kind: 'square';
    side: number;
}

function area(shape: Shape): number {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.side * shape.side;
    }
}

// ===============================
// Guard с null/undefined
// ===============================

function printLength(str?: string) {
    if (str != null) {
        console.log(str.length);
    }
}

// ===============================
// Guard с условными типами
// ===============================

type IsArray<T> = T extends any[] ? 'array' : 'not array';

type A = IsArray<string[]>; // "array"
type B = IsArray<number>; // "not array"
