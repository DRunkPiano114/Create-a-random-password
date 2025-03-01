//randomPassword

function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";
    const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const nums = "1234567890";
    const symbols = "~!@#$%^&*()_+-=`";
    let candidate = "";
    candidate += includeLowercase? lowercaseChars : "";
    candidate += includeUppercase? uppercaseChars : "";
    candidate += includeNumbers? nums : "";
    candidate += includeSymbols? symbols : "";

    if(passwordLength <= 0){
        return `(length should be a positive integer!)`;
    }
    if(candidate == ""){
        return `please choose at least one set of characters`;
    }

    let ret = "";
    for(let i=0;i<passwordLength;i++){
        let randomnum = Math.floor(Math.random() * (candidate.length));
        ret += candidate[randomnum];
    }
    return ret;
}

const passwordLength = 20;
const includeLowercase = false;
const includeUppercase = false;
const includeNumbers = false;
const includeSymbols = false;

const password = generatePassword(passwordLength,
                                includeLowercase,
                                includeUppercase,
                                includeNumbers,
                                includeSymbols);

console.log(password);