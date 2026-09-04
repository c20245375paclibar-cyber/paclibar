console.log("Hello, World.");
console.log("From script.js file.");

const myName = "Elsie";
let age = 60;
age = 16;
number = 12345678;
const address = "Hda. Angelina II, Barangay XII";

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);
console.log(67);


function greet(greetings, names = []) {

    if (Array.isArray(names)) {
        names = names.join(', ');
    }

    return `${greetings} sa enyu ${names}`;
}

console.log(greet("Mayung aga", ["Mark", "Bai", "Soy", "Tol", "Erp"]));

const heading = document.querySelector("h1");
heading.textContent = "Armin Paclibar";
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "100px";
console.log(heading.textContent);

const contactsHeading = document.querySelector("#contact h2");
console.log(contactsHeading);

const projectHeading = document.querySelector("#services h2");
console.log(projectHeading);



