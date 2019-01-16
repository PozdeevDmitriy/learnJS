
/*Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
Метод sum() возвращает сумму запомненных свойств.
Метод mul() возвращает произведение запомненных свойств.
Пример использования:

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );


function Calculator() {
 this.read = function() {
  this.one = +prompt('Введите первое значение', '');
  this.two = +prompt('Введите второе значение', '');   
 },
 this.sum = function() {
  return this.one + this.two;
 },
 this.mul = function() {
  return this.one * this.two;
 };

};
var calculator = new Calculator();
calculator.read();

alert( `Сумма= ${calculator.sum()}` );
alert( "Произведение=" + calculator.mul() );
*/

/*Напишите функцию-конструктор Accumulator(startingValue). 
Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.

Более формально, объект должен:

Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным 
startingValue.
Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(), 
с учетом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение

function Accumulator(startingValue) {
  this.value = startingValue,
  this.read = function() {
  this.value += +prompt('Введи число', ''); 
  }
};
var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value); // выведет текущее значение


НУЖНО РЕШИТЬ ПОСЛЕДНИЙ КАЛЬКУЛЯТОР
Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.

Эта задача состоит из двух частей, которые можно решать одна за другой.

Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом 
«ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. 
Понимает плюс + и минус -.

Пример использования:

var calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. 
Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.
Например, добавим операции умножить *, поделить / и возвести в степень **:

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});


powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Поддержка скобок и сложных математических выражений в этой задаче не требуется.
Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
Предусмотрите обработку ошибок. Какая она должна быть – решите сами.*/

function Calculator() {

  var methods = {
    "-": function(a, b) {//записываем методы(свойства-функции) локального объекта methods
      return a - b;
    },
    "+": function(a, b) {
      return a + b;
    }
  };

  this.calculate = function(str) {

    var split = str.split(' '),//преобразуем строку в массив пробел это разделитель
      a = +split[0], //первый элемент
      op = split[1], //знак функции 
      b = +split[2] //второй элемент

    if (!methods[op]/*op-переменная в которой хранится знак в виде строки*/|| isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return methods[op](a, b);//возвращает результат вызова функции с аргументами а и b
  }

  this.addMethod = function(name, func) {//добавляем объекту метод с параметрами name и func
    methods[name] = func;//добавляем объекту methods новый метод
  };
}

var calc = new Calculator;

calc.addMethod("*", function(a, b) {
  return a * b;
});
calc.addMethod("/", function(a, b) {
  return a / b;
});
calc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = calc.calculate("9 / 3");
alert( result ); // 8