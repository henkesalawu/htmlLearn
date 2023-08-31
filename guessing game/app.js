let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter the maximum number!"));
}

const target = Math.floor(Math.random() * maximum) + 1;
console.log(target);

let guess = parseInt(prompt("Enter first guess!"));
let attempts = 1;
while (parseInt(guess) !== target) {
    if (guess === 'q') {
        break;
    } else if (guess > target) {
        guess = (prompt('too high! Try lower!'));
        attempts++;
    } else {
        guess = (prompt('Too low! Try again!'));
        attempts++
    }
}
if (guess === 'q') {
    alert(`Ok, you Quit! The number was ${target}`);
} else {
 alert(`You got it! After ${attempts} attempts. The number is ${target}`);
}