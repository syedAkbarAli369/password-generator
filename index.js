const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";

const numberSet = "123456789";
const symbolSet = "!@#$%^&*()_+/";

const passwordBox = document.getElementById("password-box");
const totalChar = document.getElementById("total-char");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");



const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (password = "") => {
    if(upperCase.checked){
        password += getRandomData(uppercase);
    }
    if(lowerCase.checked){
        password += getRandomData(lowercase);
    }
    if(numbers.checked){
        password += getRandomData(numberSet);
    }
    if(symbols.checked){
        password += getRandomData(symbolSet);
    }
    if(password.length <= totalChar.value){
        return generatePassword(password);
    }
    console.log(password);
    passwordBox.innerText = truncateString(password, totalChar.value);
}

generatePassword();


document.getElementById("myBtn").addEventListener(
    "click",
    function(){
        generatePassword();
    }
);

function truncateString(str,num){
    if(str.length > num){
        let subStr = str.substring(0,num);
        return subStr;
    }
    else{
        return str;
    }
}
