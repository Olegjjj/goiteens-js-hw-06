const buttonOne = document.querySelector('.button-number-1')
const put = document.querySelector('.input')
const textPut = document.querySelector('.input-text')
const p = document.querySelector('p') 
buttonOne.addEventListener("click", () => {
    if (put.value.trim() === "") {
        p.textContent = "Не всі поля заповнені";
    }
    else if (textPut.value.trim() === ""){
        p.textContent = "Не всі поля заповнені";
    }
    else if (put.value.trim() !== "") {
        p.textContent = "Обидва поля заповнені";
    }
})

let inputNumber = document.querySelector('.input-number')
let inputNumberTwo = document.querySelector('.input-number-two')
const buttonTwo = document.querySelector('.button-number-2')
const pClass = document.querySelector('.p') 
buttonTwo.addEventListener("click", () => {
console.log(inputNumberTwo.value)
console.log(inputNumber.value)
    if (Number(inputNumber.value) + Number(inputNumberTwo.value) > 10) {
        pClass.textContent = "Сума більша за 10";
        console.log(Number(inputNumber.value) + Number(inputNumberTwo.value));
    }
    else {
        pClass.textContent = "Сума менша або дорівнює 10";
        console.log(Number(inputNumber.value) + Number(inputNumberTwo.value));
    }
})

const inputTextTwo = document.querySelector('.input-text-two')
const buttonThree = document.querySelector('.button-number-3')
const pClassTwo = document.querySelector('.ptwo')
buttonThree.addEventListener("click", () => {
    if (inputTextTwo.value.includes("JavaScript")) {
        pClassTwo.textContent = "Текст містить слово JavaScript"
    }
    else {
        pClassTwo.textContent = "Текст не містить слово JavaScript"
    }
})

const inputNumberThree = document.querySelector('.input-number-three')
const buttonFour = document.querySelector('.button-number-4')
const pClassThree = document.querySelector('.pthree') 
buttonFour.addEventListener("click", () => {
    if (10 <= Number(inputNumberThree.value)) {
        pClassThree.textContent = "Число входить в діапазон від 10 до 20";
    }
    else if (Number(inputNumberThree.value) >= 20) {
        pClassThree.textContent = "Число входить в діапазон від 10 до 20";
    }
    else {
        pClassThree.textContent = "Число не входить в діапазон від 10 до 20";
    }
})

const inputName = document.querySelector('#input-name')
const inputEmail = document.querySelector('#input-email')
const inputCode = document.querySelector('#input-code')
const buttonfive = document.querySelector('.button-number-5')
const pClassFour = document.querySelector('.pfour') 
buttonfive.addEventListener("click", () => {
    if (inputName.value.length < 3) {
        pClassFour.textContent = "Упс... Помилка! Перевірте чи правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.";
    }
    else if (!inputEmail.value.includes("@")) {
        pClassFour.textContent = "Упс... Помилка! Перевірте чи правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.";
    }
    else if (!inputEmail.value.includes(".")) {
        pClassFour.textContent = "Упс... Помилка! Перевірте чи правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.";
    }
    else if (inputCode.value.length < 6) {
        pClassFour.textContent = "Упс... Помилка! Перевірте чи правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.";
    }
    else {
        window.location.href = 'main.html';
    }
})