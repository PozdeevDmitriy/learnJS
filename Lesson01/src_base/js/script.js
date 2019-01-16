let budget = prompt('Ваш бюджет на месяц', 10000),
    shop = prompt('Название вашего магазина'),
    mainList = {
    budget: budget,
    shop: shop,
    shopGoods: [],
    employers: {},
    open: false
    };
   mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?'),
   mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?'),
   mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?');
alert(`Ваш бюджет на день составляет ${budget/30}`);