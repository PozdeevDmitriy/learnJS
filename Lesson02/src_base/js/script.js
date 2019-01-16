let budget = prompt('Ваш бюджет на месяц', 10000),
    shop = prompt('Название вашего магазина'),
    time = 19,
    mainList = {
    budget: budget,
    shop: shop,
    shopGoods: [],
    employers: {},
    open: false
    };
   for (let i = 0; i < 5; i++){
      let a = prompt('Какой тип товаров будем продавать?');
      if ((typeof(a)) === 'string' && a != '' && a.length < 50) {
      console.log('Все верно');
      mainList.shopGoods[i] = a;
      } else {
       i--
       continue;
      }
   };
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

   if (time < 0) {
      console.log('Такого быть не может');
   } else if(time > 8 && time < 20) {
      console.log('Время работать');
   } else if (time < 24) {
      console.log('Уже слишком поздно!');
   } else {
      console.log('В сутках только 24 часа');
   }
alert(`Ваш бюджет на день составляет ${budget/30}`);