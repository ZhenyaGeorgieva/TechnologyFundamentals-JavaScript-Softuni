function solve(input) {
    let vip = [];
    let regular = [];
    let indexOfParty = input.indexOf("PARTY");
    for (let index = 0; index < indexOfParty; index++) {
        let guestToAdd = input[index];
        let firstChar = guestToAdd[0];
        let asciiCodeFirstChar = Number(firstChar);
        if (asciiCodeFirstChar) {
            vip.push(guestToAdd)
        } else {
            regular.push(guestToAdd)
        }
    }
    
    for (let index = indexOfParty + 1; index < input.length; index++) {
        let nameToCheck = input[index];
        if (vip.includes(nameToCheck)) {
            let indexOfName = vip.indexOf(nameToCheck);
            vip.splice(indexOfName, 1);
        } else if (regular.includes(nameToCheck)) {
            let indexOfName = regular.indexOf(nameToCheck);
            regular.splice(indexOfName, 1);
        }
    }
    let vipNotCome = vip.length;
    let regularNotCome = regular.length;
    console.log(vipNotCome + regularNotCome);
    
    for (let guest of vip) {
        console.log(guest);
    }
    for (let guest of regular) {
        console.log(guest)
    }
}
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
)