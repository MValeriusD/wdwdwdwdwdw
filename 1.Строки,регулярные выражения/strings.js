// console.log('Произведение: "Евгений Онегин"')
// console.log("Произведение: 'Евгений Онегин'")
// console.log('Произведение: \'Евгений Онегин\'')
// console.log('Произведение: \n\'Евгений Онегин\'')
//
// const EO = 'Евгений Онегин'

// console.log(`${EO}`)
// console.log(`${1+1}`)

// length
// console.log(EO.length) // 14

// charAt. Позволяет узнать символ по индексу
// console.log(EO.charAt(2)) // г


// indexOf Найти искомую строку в строке. Возвращает индекс
// const str = 'первая строка'
// console.log(str.indexOf('первая'))



// includes. Проверяет наличие искомой строки в строке. Возвращает boolean
// const email = 'any@mail.ru'
// console.log(email.includes('@mail.ru'))



// startsWith/endsWith Возвращает boolean
// const email = 'any@mail.ru'
// console.log(email.startsWith('any')) // true
// console.log(email.endsWith('@mail.ru')) // true



// concat
// const email = 'any'
// const domen = '@mail.ru'
// console.log(email.concat(domen)) // any@mail.ru
// console.log(`${email}${domen}`) // any@mail.ru
// console.log('any' + '@mail.ru') // any@mail.ru
// console.log(1 + 1) // 2
// console.log(1 + '@mail.ru') // 1@mail.ru



// slice
// const email = 'any@mail.ru'
// console.log(email.slice(0,3)) // any
// console.log(email) // any@mail.ru



// split. Разделяет строку на массив по разделителю
// const email = 'any@mail.ru'
// console.log(email.split('@')) // ['any', 'mail.ru']



// replace
// const email = 'any@mail.ru any2@mail.ru'
// console.log(email.replace('mail','yandex'))
// console.log(email.replaceAll('mail','yandex'))



// trim
// const email = 'any@mail.ru                                     '
// console.log(email)
// console.log(email.trim())
// console.log(email.trimStart())
// console.log(email.trimEnd())



// toLoweCase, toUpperCase
// const email = '    any@maiL.ru      '
// const validEmail = 'any@mail.ru'
//
// console.log(email.trim().toLowerCase() === validEmail.trim().toLowerCase())






// --------------------------------------------------------------------
// False: 0, null, undefined, '', NaN

// if ('фывыфв') { // true
// 	console.log('Отправляем форму')
// } else { // false
// 	console.log('Поле не может быть пустым')
// }
// --------------------------------------------------------------------


// --------------------------------------------------------------------
// == Boolean
// console.log('1' == 1);

// console.log('1' === 1);

// --------------------------------------------------------------------


