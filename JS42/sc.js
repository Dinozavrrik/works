// 1)
var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');
if (year < 2011) {
 alert('Это слишком рано..');
} else if (year > 2011) {
 alert('Это поздновато..');
} else {
 alert('Да, точно в этом году!');
}

//2)
var x = prompt('Введите любое число', '');
if (x > 0) {
alert('1');
} else if (x < 0) {
alert('-1');
} else if (x == 0) {
alert('0');
}
else{
    alert('Введено не число')
}

//3)
let userName = prompt("Имя пользователя", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль', '');

  if (pass === 'Черный Властелин') {
    alert( 'Добро пожаловать' );
  } else if (pass === '' || pass === null) {
    alert( 'Вход отменен' );
  } else {
    alert( 'Пароль неверный' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Вход отменен' );
} else {
  alert( "Я вас не знаю" );
}

//4)
let a = prompt('Введите число a:', '');
let b = prompt('Введите число b:', '');
result  = (+a + +b < 4) ? 'Мало' : 'Много';
alert(result);

//5)
var login = prompt('Введите логин:', '');
let message = (login == 'Вася') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина':
   '';
  alert(message);
