/*
1. Написать скрипт, предлогающий пользователю ввести две строки через запятую. Вывести сообщение true,
    если вторая строка содержится в первый, в противном случае false, регистр при проверке не учитывать.
 */

function usersInputStrings(){
   const usersStrings =  prompt("Введите строку через ','");
   const splitStrings = usersStrings.split(',');
   const oneString = splitStrings[1];
   const secondString = splitStrings[2];
   return oneString.includes(secondString);
}

console.log(usersInputStrings());

/*
2. Пользователь вводит строку, затем число (кол-во символов). Функция усекает строку до кол-ва символов и добавляет многоточие
 */

function inputString (){
    const inputValue = prompt('Введите строку');
    const inputCountSymbols = prompt('Введите количество символов');
    const stringSlise = inputValue.slice(0,inputCountSymbols);
    return stringSlise + '...';
}

// На вход дана строка в CamelCase, преобразовать строку в snake_case

function toUpString (){
    const usersString = prompt('Введите строку:');
    return usersString.toLowerCase();
}

console.log(toUpString());

/* Написать функцию, валидирующую ФИО из кирилличиских символов (считать, что отчество может оканчиваться только на "вна" или "вич"
или может отсутствовать)
 */



/*5.  На вход дана строка, вернуть через alert все числа (десятичные разделяются символом ".")
 */

function stringNumber() {
    const inputStringUsers = prompt('введите строку в виде чисел ');
    const restore = inputStringUsers.split('').join('.');
    alert(restore);
};

stringNumber();