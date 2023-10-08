console.log('hello from script.js');

const genBtn = document.querySelector('#generate');
const textArea = document.querySelector('#password');
const passwordLengthEl = document.querySelector('#passlength');

const uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowers = uppers.map(i => i.toLowerCase());
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const specials = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','>','?','@','[',']',']','^','_','{','}','|','~'];

function writePassword() {
    textArea.value = generatePassword();
}

function generatePassword() {
    const exclusionSet = getExclusionSet();
    const charSet = setCharacters(exclusionSet);
    const passwordLength = passwordLengthEl.value;
    const currentPass = [];
    for (let i = 0; i < passwordLength; i++) {
        let randNum = Math.floor(Math.random() * charSet.length);
        let randChar = charSet[randNum];

        console.log(`inserting char "${randChar} "at rand index ${randNum}`);

        currentPass.push(randChar);
    }

    const currentPassString = currentPass.join('')

    return currentPassString;
}

function setCharacters(exclusionSet) {
    let newArray = [];
    let uppersToUse = [];
    let lowersToUse = [];
    let numbersToUse = [];
    let specialsToUse = [];

    if (document.querySelector('#useUppers').checked) {
        uppersToUse = uppers.filter(i => exclusionSet.indexOf(i) === -1);
    }

    if (document.querySelector('#useLowers').checked) {
        lowersToUse = lowers.filter(i => exclusionSet.indexOf(i) === -1);
    }

    
    if (document.querySelector('#useNumbers').checked) {
        numbersToUse = numbers.filter(i => exclusionSet.indexOf(i) === -1);
    }
    
    if (document.querySelector('#useSpecials').checked) {
        specialsToUse = specials.filter(i => exclusionSet.indexOf(i) === -1);
    }

    const charSet = newArray.concat(uppersToUse, lowersToUse, numbersToUse,specialsToUse);

    console.log(`charset: ${charSet}`);

    return charSet;
}

function getExclusionSet() {
    const charactersToExclude = document.querySelector('#exclusions').value.toString().replaceAll(' ', '').split('');

    return charactersToExclude;
}

document.querySelector('#generate').addEventListener('click', writePassword);