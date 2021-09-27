// 1a
let randomNumber = Math.floor(Math.random() * 5 + 1);
console.log(randomNumber);
// 1b
if (randomNumber >= 4) {
    console.log("Greater than or equal to 4")
} else if (randomNumber == 2 || randomNumber == 3) {
    console.log("Equal to 2 or 3")
} else {
    console.log("Equal to one");
}
// 1c
if (randomNumber !== 3) {
    console.log("Not equal to 3")
}
// 1d
if (randomNumber !== 3 && randomNumber !==5) {
    console.log("Not equal to 3 and 5")
}
// 1e
if (randomNumber == 2 || randomNumber == 4) {
    console.log("Equal to 2 or 4");
}
//  bonus

randomNumber >= 4 ? console.log("Greater than or equal to 4") : console.log("Less than 4")

switch (randomNumber) {
    case 1:
        console.log("One");
        break
    case 2:
        console.log("Two");
        break
    case 3:
        console.log("Three");
        break
    case 4:
        console.log("Four");
        break
    case 5:
        console.log("Five");
        break
}
