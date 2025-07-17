// Primitive Types: number, string, booleans
// More complex types: arrays, objets
// Function types, parameters 

// Primitives
let age: number;

age = 12;

let floatNum: number;
floatNum = 12.2

let userName: string;

let isStudent: boolean;
isStudent = true;

// More complex types

let hobbies: string[] //this is how you make an array of STRING TYPE
hobbies = ["Chocolate", "Strawberries"]

// Object in TS, how to set it up and all that fun stuff :)

let person: {
    name: string;
    age: number;
};
// If below, we have different keys, it wont work, because above, we initiated
// what person object can have in the object, name and age.

person = {
    name: "Kelly",
    age: 24
}

// TYPE INFERENCE

// Above we declared a variable with a type assigned,
// c then step 2 we assign value.
// TYPE INFERENCE, will do this in one step.

let course: string = "React - The complete guide"
// course = 1234

// WORKING WITH UNION TYPES
// This is allowing a variable to hold more than 1 type, crazhy huh!

let twoTypes: string | number | boolean = "Hello There";
twoTypes = 1234;

//ASSIGNING TYPE ALIASES
type Student = {
    name: string;
    age: number;
    smart: boolean;
}

let oneStudent: Student;
let anotherStudent: Student[]

// DIVING INTO FUNCTIONS AND FUNCTION TYPES
function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value)
}

// GENERICS
function insertAtBeginning<T>(array: T[], value: T){ //T is for type
    const newArray = [value, ...array]
    return newArray;
}

const demoArray = [1, 2, 3]
const correctArray = insertAtBeginning(demoArray, -1) //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

// Class

class Animals {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses:string[]

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[])
        {}
    //above, is the shorthand notation for writing out classes, instead of writing it all out like
    // how you see line 84-87

    enroll(courseName: string) {
        this.courses.push(courseName)
    }

    listCourses() {
        return this.courses.slice()
    }
}

const animal = new Animals("Bird", "Eagle", 24, ["Two"])
animal.enroll("React")
animal.listCourses()

// animal.courses => Two, React

// INTERFACE

interface Human {
    firstName: string;
    age: number;
    
    greet: () => void;
}

let max: Human;

max = {
    firstName: "Max",
    age: 32,
    greet() {
        console.log("I am")
    }
}

class Instructor implements Human {
    firstName: string = "Mary";
    age: number = 25;
    greet() {
        console.log("Hi")
    };
}