const displayNumber = document.getElementById("hero-number")
const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")
const submitted = document.getElementById("submit")
let userInput = document.getElementById("input").value
let length = ""
let volume = ""
let mass = ""

// Display initial numbers on first load
let number = 0
number = 25
displayNumber.innerText = 25
calculations(25)

submitted.addEventListener("click", function() {
    displayNumber.innerText = userInput
    calculations(userInput)
    console.log("Button clicked!")
})

function calculations(newNum) {
    length = `<p>${newNum} meters = ${(newNum * 3.281).toFixed(3)} feet | ${newNum} feet = ${(newNum / 3.281).toFixed(3)} meters</p>`
    volume = `<p>${newNum} liters = ${(newNum / 3.785).toFixed(3)} gallons | ${newNum} gallons = ${(newNum * 3.785).toFixed(3)} liters</p>`
    mass = `<p>${newNum} kilos = ${(newNum * 2.205).toFixed(3)} pounds | ${newNum} pounds = ${(newNum / 2.205).toFixed(3)} kilos</p>`

    lengthP.innerHTML = length
    volumeP.innerHTML = volume
    massP.innerHTML = mass
}