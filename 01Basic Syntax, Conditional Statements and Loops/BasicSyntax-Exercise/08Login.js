function solve(input) {
    let user = input.shift();
    let pass = user.split("").reverse().join("");
    let command = input.shift();
    let incorrectLogs = 0;
    while (true) {
        if (command == pass) {
            console.log(`User ${user} logged in.`)
            break;
        }
        incorrectLogs++;
        if (incorrectLogs >= 4) {
            console.log(`User ${user} blocked!`);
            break;
        }
        else {
            console.log(`Incorrect password. Try again.`);
        }
        command = input.shift();
    }
}