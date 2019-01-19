let money,
  shop,
  price,
  open = document.getElementById('open-btn'),
  nameValue = document.getElementsByClassName('name-value')[0],
  budgetValue = document.getElementsByClassName('budget-value')[0],
  goodsValue = document.getElementsByClassName('goods-value')[0],
  itemsValue = document.getElementsByClassName('items-value')[0],
  employersValue = document.getElementsByClassName('employers-value')[0],
  discountValue = document.getElementsByClassName('discount-value')[0],
  isopenValue = document.getElementsByClassName('isopen-value')[0],


  goodsItem = document.getElementsByClassName('goods-item'),
  goodsBtn = document.getElementsByTagName('button')[1],
  budgetBtn = document.getElementsByTagName('button')[2],
  employersBtn = document.getElementsByTagName('button')[3],
  chooseItem = document.querySelector('.choose-item'),
  timeValue = document.querySelector('.time-value'),
  countBudgetValue = document.querySelector('.count-budget-value'),
  hireEmployersItem = document.querySelectorAll('.hire-employers-item'),
  numberDay = new Date().getDay();

  goodsBtn.setAttribute("disabled", "disabled");
  budgetBtn.setAttribute("disabled", "disabled");
  employersBtn.setAttribute("disabled", "disabled");
  chooseItem.setAttribute("disabled", "disabled");
  timeValue.setAttribute("disabled", "disabled");

for (let i = 0; i < goodsItem.length; i++) {
  goodsItem[i].value = '';
  goodsItem[i].setAttribute("disabled", "disabled");
}

for (let i = 0; i < hireEmployersItem.length; i++) {
  hireEmployersItem[i].value = '';
  hireEmployersItem[i].setAttribute("disabled", "disabled");
}
timeValue.value = '';
countBudgetValue.value = '';
countBudgetValue.setAttribute("readonly", "readonly");

open.addEventListener('click', () => {
  money = +prompt('Ваш бюджет на месяц', 10000);
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц', 10000);
  };
  budgetValue.textContent = money;
  nameValue.textContent = prompt('Название вашего магазина', '').toUpperCase().trim();
  if (nameValue.textContent != '') {
    budgetBtn.removeAttribute("disabled");
    employersBtn.removeAttribute("disabled");
    goodsBtn.removeAttribute("disabled");
    chooseItem.removeAttribute("disabled");
    timeValue.removeAttribute("disabled");
    for (let i = 0; i < goodsItem.length; i++) {
      goodsItem[i].removeAttribute("disabled");
    }

    for (let i = 0; i < hireEmployersItem.length; i++) {
      hireEmployersItem[i].removeAttribute("disabled");
    }
  }
});

function setValidator(element, regex) {
  if (element) {
    let lastValue = element.value;
    if (!regex.test(lastValue))
      lastValue = '';
    setInterval(function () {
      let value = element.value;
      if (value != lastValue) {
        if (regex.test(value))
          lastValue = value;
        else
          element.value = lastValue;
      }
    }, 10);
  }
}
for (i = 0; i < hireEmployersItem.length; i++) {
  hireEmployersItem[i].addEventListener('input', setValidator(hireEmployersItem[i], /^[а-яё]*$/i));
}


goodsBtn.addEventListener('click', () => {
  for (let i = 0; i < goodsItem.length; i++) {
    let a = goodsItem[i].value;
    if ((typeof (a)) === 'string' && a.length < 50) {
      console.log('Все верно');
      mainList.shopGoods[i] = a;

    } else {
      i--
      continue;
    };
  };
  goodsValue.textContent = mainList.shopGoods;
});

chooseItem.addEventListener('change', () => {
  let items = chooseItem.value;
  console.log(1);
  if (isNaN(items) && items != '') {

    mainList.shopItems = items.split(', ');
    mainList.shopItems.sort();
    itemsValue.textContent = mainList.shopItems;
  }
});

timeValue.addEventListener('change', () => {
  let time = timeValue.value;
  if (isNaN(time)) {
    alert(`${time} не является числовым значением`);
    timeValue.value = '';
  }
  if (time < 0) {
    console.log('Такого быть не может');
    mainList.open = false;
  } else if (time > 8 && time < 20) {
    console.log('Время работать');
    mainList.open = true;
  } else if (time < 24) {
    console.log('Уже слишком поздно!');
    mainList.open = false;
  } else {
    console.log('В сутках только 24 часа');
    console.log(time);
    mainList.open = false;
  }
  if (mainList.open) {
    isopenValue.style.backgroundColor = 'green';
  } else {
    isopenValue.style.backgroundColor = 'red';
  }
});
budgetBtn.addEventListener('click', () => {
  countBudgetValue.value = money / 30;
});

employersBtn.addEventListener('click', () => {
  employersValue.textContent = '';
  for (let i = 0; i < hireEmployersItem.length; i++) {
    let name = hireEmployersItem[i].value;
    mainList.employers[i] = name;
    employersValue.textContent += mainList.employers[i] + ', ';
  }
});

mainList = {
  budget: money,
  shop: shop,
  shopGoods: [],
  employers: {},
  open: false,
  isDiscount: false,
  shopItems: [],
  makeDiscount:  (price) => {
    if (mainList.isDiscount) {
      price = +price * 0.8;
    }
    console.log(price);
  }

};
if (numberDay = 5) {
  mainList.isDiscount = true;
  discountValue.style.backgroundColor = 'green';
} else {
  mainList.isDiscount = false;
  discountValue.style.backgroundColor = 'red';
}
/*
  for (let key in mainList) {
    console.log(`Наш магазин включает в себя ${key} co значением ${mainList[key]}`);
  }
 var i = 0 
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
