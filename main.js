/*
Task1
Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).
*/
console.log('task 1:');

function convert(amount) {
    return amount * 8;
}
console.log(convert(2)); // 16

/*
Task2
A function which returns reversed string.
*/
console.log('task 2:');

function reverse(str) {
    if (typeof(str) == 'string') {
        let newStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
        return newStr;
    }
    //return 'this is not a str';
    throw new Error('str must be a string'); //Исправление ошибки 1.
}
console.log(reverse('abc')); // 'cba'

/*
Task 3
A function which prints the stair picture of size n
*/
console.log('task 3:');

function printStairs(n) {
    let str = "#";
    for (let i = 0; i < n; i++) {
        console.log(str);
        str += "#";
    }
}
printStairs(5);
/*
Task 4
A function which returns total sum of a range
*/
console.log('task 4:');

function sumRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumRange(2, 4)) // 9
console.log(sumRange(-1, 3)) // 5
    /*
    Task 5
    Write a function which returns the smallest of three numbers.
    */
console.log('task 5:');

function min(a, b, c) {
    if (a < b) {
        if (a < c) return a;
        else return c;
    } else {
        if (b < c) return b;
        else return c;
    }
}
console.log(min(10, 5, 11)); // 5
console.log(min(3, 8, 4)); // 3
console.log(min(3, 8, 1)); // 1

/*
    Task 6
    A function which prints the pyramid picture of size n
  #
 ###
#####
    */
console.log('task 6:');

function printPyramid(n) {

    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < n - i; j++) {
            str += " ";
        }
        for (let j = 0; j < (i * 2 + 1); j++) {
            str += "#";
        }
        console.log(str);
    }

}
printPyramid(5);

/*
    Task 7
A function which transforms first and last letter to uppercase (use built in string’s method).
    */
console.log('task 7:');

function firstAndLastToUpper(str) {

    const strLenth = str.length; // сделала константой и переименовала - теперь длина переменной такая-же как и строка обращения к длине и ее прикол исчез - но сказали исправить.
    let newStr = (str[0]).toUpperCase();
    newStr += str.substring(1, strLenth - 1);
    newStr += str[strLenth - 1].toUpperCase();

    return newStr;
}
console.log(firstAndLastToUpper('yomayouNepravilnieBukvi')); // 'AbC'
/*
    Task 8
A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive.
    */
console.log('task 8:');

function cursorCheck(str) {
    //convert case 
    str = str.toLowerCase();
    /*console.log(str.search('ostap'));*/

    return (str.search('ironman') != (-1) || str.search('cursor') != (-1) || str.search('ostap') != (-1)); //? true : false - проверка условия и так вернет тру или фолс

}
console.log(cursorCheck('Hello I am OstaP')); // true
console.log(cursorCheck('Superman is here')); // false
console.log(cursorCheck('OstaP is iroNman')); // true

/*
    Task 9
A function which returns a string with all letters in uppercase (without built in string’s method). The function supports only english alphabet.
*/
console.log('task 9:');

function toUppercase(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        if (char >= 97 && char <= 122) {
            newStr += String.fromCharCode(char - 32);
        } else newStr += str[i];
    }
    return newStr;
}
console.log(toUppercase('abc 1Abc')); // 'ABC'

/*
    Task 10
A function which removes duplication of letters in string. The function must be case-insensitive.
*/
console.log('task 10: Helo I am rn ');

function removeDuplicationLetters(str) {

    let checkStr = '',
        newStr = '';
    for (let i = 0; i < str.length; i++) {
        //console.log(checkStr.search(str[i]));
        const lowStr = str.toLowerCase();
        const charToCheck = lowStr.charCodeAt(i); //исправила название переменной
        if (charToCheck >= 97 && charToCheck <= 122) {
            if (checkStr.indexOf(lowStr[i]) == (-1)) {
                checkStr += lowStr[i];
                newStr += str[i];
            }
        } else newStr += str[i];
    }

    return newStr;

}
console.log(removeDuplicationLetters('Hello I am Iron Man')); // 'Helo I am rn '
console.log(removeDuplicationLetters('AaaaBbcCCc'));
console.log(removeDuplicationLetters('AaaaBb 7! &CCc'));
/*
    Task 11
A function that when given a number n returns the n-th number in the Fibonacci Sequence. The sequence starts from 1 and looks like this: 1, 1, 2, 3, 5, 8, 13, 21…
*/
console.log('task 11:');

function fibonacci(n) {
    let fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibo.push(fibo[i - 2] + fibo[i - 1]);
    }
    return fibo[n];
}
console.log(fibonacci(1)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(5)); // 5
console.log(fibonacci(7)); // 13