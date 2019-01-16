let money,
    shop,
    time,
    price;

    function start() {
      money = prompt('Ваш бюджет на месяц', 10000);
      while (isNaN(money) || money == '' || money == null) {
      money = prompt('Ваш бюджет на месяц', 10000);
      };
      shop = prompt('Название вашего магазина','').toUpperCase();
      time = 19;
    }
    //start();
    mainList = {
    budget: money,
    shop: shop,
    shopGoods: [],
    employers: {},
    open: false,
    isDiscount: true,
    shopItems: [],
    chooseGoods: function chooseGoods() {
      for (let i = 0; i < 5; i++) {
        let a = prompt('Какой тип товаров будем продавать?', '');
        if ((typeof (a)) === 'string' && a != '' && a.length < 50) {
          console.log('Все верно');
          mainList.shopGoods[i] = a;
        } else {
          i--
          continue;
        };
      };

    },
    workTime: function workTime() {
      if (time < 0) {
        console.log('Такого быть не может');
      } else if (time > 8 && time < 20) {
        console.log('Время работать');
        mainList.open = true;
      } else if (time < 24) {
        console.log('Уже слишком поздно!');
      } else {
        console.log('В сутках только 24 часа');
        console.log(time);
      }
    },
    dayBudget: function dayBudget() {
      alert(`Ваш бюджет на день составляет ${money/dayInMounth}`);
    },
    makeDiscount: function makeDiscount () {
      if (mainList.isDiscount) {
        price = price * 0.8;  
      }
      console.log(price);
     },
     hireEmployers: function hireEmployers() {
      for (let i = 1; i < 5; i++) {
        mainList.employers[i] = prompt('Введите имя сотрудника','');
      }
     },
     chooseShopItem: function chooseShopItem() {
       let items = prompt('Перечислите через запятую ваши товары', '');
       mainList.shopItems = items.split(',');
       mainList.shopItems.push(prompt('Подождите еще', ''));
       mainList.shopItems.sort();
     },
     showShopItems: function showShopItems() {
       mainList.shopItems.forEach(function(item, i, arr) {
         console.log(`У нас вы можете купить ${i+1} - ${item}`);
       })
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
 };
var i = 0
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
