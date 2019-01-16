let money,
    shop,
    time,
    price;

    function start() {
      money = prompt('Ваш бюджет на месяц', 10000);
      while (isNaN(money) || money == '' || money == null) {
      money = prompt('Ваш бюджет на месяц', 10000);
      };
      shop = prompt('Название вашего магазина').toUpperCase();
      time = 19;
    }
    start();
    mainList = {
    budget: money,
    shop: shop,
    shopGoods: [],
    employers: {},
    open: false,
    isDiscount: true
    };
    function chooseGoods() {
      for (let i = 0; i < 5; i++){
         let a = prompt('Какой тип товаров будем продавать?');
         if ((typeof(a)) === 'string' && a != '' && a.length < 50) {
         console.log('Все верно');
         mainList.shopGoods[i] = a;
         } else {
          i--
          continue;
         };
    };
   
   };
   chooseGoods();

   function hiringEmployers() {
    for (let i = 1; i < 5; i++) {
      mainList.employers[i] = prompt('Введите имя сотрудника');
    }
   };
   hiringEmployers()
 /*var i = 0 
 while (i < 5) {
   let a = prompt('Какой тип товаров будем продавать?');
   if ((typeof(a)) === 'string' && a != '' && a.length < 50) {
   console.log('Все верно');
   mainList.shopGoods[i] = a;
   i++;
   } else {
    continue;
   }
 };*/
/* var i = 0
 do {
   let a = prompt('Какой тип товаров будем продавать?');
   if ((typeof(a)) === 'string' && a != '' && a.length < 50) {
   console.log('Все верно');
   mainList.shopGoods[i] = a;
   i++;
   } else {
    continue;
   }
 } while (i < 5);*/
 function workTime() {
   if (time < 0) {
      console.log('Такого быть не может');
   } else if(time > 8 && time < 20) {
      console.log('Время работать');
      console.log(time);
      
   } else if (time < 24) {
      console.log('Уже слишком поздно!');
   } else {
      console.log('В сутках только 24 часа');
      console.log(time);
   }
 }
workTime();

function calcDayBudget(dayInMounth) {
   while (isNaN(dayInMounth) || dayInMounth == '' || dayInMounth == null) {
      dayInMounth = +prompt('Введите количество дней в месяце');
      };
      alert(`Ваш бюджет на день составляет ${money/dayInMounth}`);
}
calcDayBudget(+prompt('Введите количество дней в месяце'));

function discount () {
 price = +prompt('Введите стоимость товара');
 if (mainList.isDiscount) {
   price = price * 0.8;  
 }
 console.log(price);
};

discount();
