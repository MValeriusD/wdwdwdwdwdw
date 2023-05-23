/*
* Регулярные выражения позволяют манипулировать со строками
* Поиск, Замена
*
* Методы:
* .test() - Ищет вхождение подстроки в строку. Возвращает boolean
* .match() - Ищет совпадения подстроки в строку. Возвращает массив из совпадений. Если ничего не нашёл - вернет null
*
* Флаги:
* g - глобальный поиск в строке
* i - ignoreCase - не зависит от регистра
*
* Символьный класс:
* . - любой символ
* \d или [0-9] - ищет все цифры
* \s - ищет все пробелы
* \w - ищет все латинские буквы, цифры и _
*
* Обратный символьный класс
* \D - ищет все, кроме цифр
* \S - ищет все, кроме пробелов
* \W - ищет все, кроме латинских букв, цифр и _
*
* Диапозоны:
* [0-9]
* [a-z]
* [A-Z]
* [а-я]
* [А-Я]
*
*
* Якоря:
* ^ - начало строки
* $ - конец строки
*
* Квантификаторы:
* ? - диапозон от 0 до 1
* */

// const regexp = /leArN/gi
// const regexp2 = new RegExp('learn','g')
//
// const firstStr = 'I learn JS'
// const secondStr = 'I learn HTML and i learn CSS'
// const thirdStr = 'I like cakes'
//
// console.log(regexp.test(firstStr)) // true
// console.log(regexp.test(secondStr)) // true
// console.log(regexp.test(thirdStr)) // false
//
// console.log(firstStr.match(regexp)) // ['learn']
// console.log(secondStr.match(regexp)) // ['learn']
// console.log(thirdStr.match(regexp)) // null
//
//
// console.log(secondStr.replace(regexp, 'know'));
// console.log(secondStr.replaceAll('learn', 'know'));

// function fn(pattern, flag) {
// 	return {
// 		name: name
// 	}
// }
//
// const name1 = new fn('name1', 'g') // {}
// const name2 = new fn('name2') // {}
//
// // class - функция-конструктор
//
// class RegExp {
// 	constructor(pattern, flag) {
// 	}
// }


// Символьный класс
// Набор символов по которому будет происходить поиск
// const firstStr = '1234-1234-1234-1234'
// const regexp = /[0-9]/gi
// console.log(firstStr.match(regexp)); // [массив из чисел]



// Заменить пробелы на '-'
// const firstStr = '1234 1234 1234 1234'
// const regexp = /\s/gi
// console.log(firstStr.replace(regexp, '-'));


// Заменить числа на '*'
// const firstStr = '1234 1234 1234 1234'
// const regexp = /\d/gi
// console.log(firstStr.replace(regexp, '*'));


// Заменить числа и латинские буквы на '*'
// const firstStr = 'asd33   3asd22asdAS   123123'
// const regexp = /\W/gi
// console.log(firstStr.replace(regexp, '*'));



// . - любой символ
// const email = 'any1@mail.ru'
// const email2 = 'any2@mail.ru'
// const regexp = /^....@mail.ru$/gi
//
// console.log(regexp.test(email))


// Валидация пароля
// const password = '1234-1234-1234-1234'
// const regexp = /^[0-9]{3,4}-[0-9]{3,4}-[0-9]{3,4}-[0-9]{3,4}$/gi
// console.log(regexp.test(password))

// const password1 = '1234567891011122213123123'
// const regexp1 = /^[0-9]{8,16}$/gi
// console.log(regexp1.test(password1))



// Валидация ФИО
// const firstStr = 'Иванов Иван'
// const regexp = /^[а-яА-Я]{2,20} [а-яА-Я]{2,20}$/gi
// console.log(regexp.test(firstStr))

// const firstStr = 'Иванов Иван'
// const secondStr = 'Иванов Иван Иванович'
// const regexp = /^[а-яА-Я]{2,20} [а-яА-Я]{2,20}( [а-яА-Я]{2,20})?$/gi
// console.log(regexp.test(secondStr))

// Валидация почты
const email = '1.ru'
const email2 = 'any@mail.com'
const regexp = /^.{1,}.(com|ru)$/gi
console.log(regexp.test(email2))


































































