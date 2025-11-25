let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let codestack = document.getElementById("codestack")
let email = document.getElementById("email")

let firstName2 = document.getElementById("firstName2")
let lastName2 = document.getElementById("lastName2")
let codestack2 = document.getElementById("codestack2")
let email2 = document.getElementById("email2")

let firstName3 = document.getElementById("firstName3")
let lastName3 = document.getElementById("lastName3")
let codestack3 = document.getElementById("codestack3")
let email3 = document.getElementById("email3")

let firstName4 = document.getElementById("firstName4")
let lastName4 = document.getElementById("lastName4")
let codestack4 = document.getElementById("codestack4")
let email4 = document.getElementById("email4")

let firstName5 = document.getElementById("firstName5")
let lastName5 = document.getElementById("lastName5")
let codestack5 = document.getElementById("codestack5")
let email5 = document.getElementById("email5")

let firstName6 = document.getElementById("firstName6")
let lastName6 = document.getElementById("lastName6")
let codestack6 = document.getElementById("codestack6")
let email6 = document.getElementById("email6")

let studentBtn = document.getElementById("studentBtn")

let counter = 0

function getData() {
    return fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data.students;
        });
}


function randomizeData(students) {
    let randomIndex = Math.floor(Math.random() * students.length);
    console.log(randomIndex);
    return students[randomIndex];
}

studentBtn.addEventListener("click", () => {

    firstName6.innerText = firstName5.innerText;
    lastName6.innerText = lastName5.innerText;
    codestack6.innerText = codestack5.innerText;
    email6.innerText = email5.innerText;

    firstName5.innerText = firstName4.innerText;
    lastName5.innerText = lastName4.innerText;
    codestack5.innerText = codestack4.innerText;
    email5.innerText = email4.innerText;

    firstName4.innerText = firstName3.innerText;
    lastName4.innerText = lastName3.innerText;
    codestack4.innerText = codestack3.innerText;
    email4.innerText = email3.innerText;

    firstName3.innerText = firstName2.innerText;
    lastName3.innerText = lastName2.innerText;
    codestack3.innerText = codestack2.innerText;
    email3.innerText = email2.innerText;

    if (counter >= 1) {
        firstName2.innerText = firstName.innerText;
        lastName2.innerText = lastName.innerText;
        codestack2.innerText = codestack.innerText;
        email2.innerText = email.innerText;
    }
    getData().then((students) => {
        let randomStudent = randomizeData(students);
        console.log(randomStudent)
        firstName.innerText = randomStudent.firstName;
        lastName.innerText = randomStudent.lastName;
        codestack.innerText = randomStudent.codestack;
        email.innerText = randomStudent.email;


    })
    counter++
})