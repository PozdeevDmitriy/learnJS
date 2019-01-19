let btnOpen = document.getElementById('open-btn'),
	nameValue = document.getElementsByClassName("name-value")[0],
	budgetValue = document.getElementsByClassName("budget-value")[0],
	goodsValue = document.getElementsByClassName("goods-value")[0],
	itemsValue = document.getElementsByClassName("items-value")[0],
	employersValue = document.getElementsByClassName("employers-value")[0],
	discountValue = document.getElementsByClassName("discount-value")[0],
	isopenValue = document.getElementsByClassName("isopen-value")[0],

	goodsItems = document.getElementsByClassName('goods-item'),
	btnGoods = document.getElementsByTagName('button')[1],
	btnBudget = document.getElementsByTagName('button')[2],
	btnEmployers = document.getElementsByTagName('button')[3],

	chooseItems = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value'),
	hireEmployersItem = document.querySelectorAll('.hire-employers-item');

	btnGoods.setAttribute("disabled", "disabled");
	btnBudget.setAttribute("disabled", "disabled");
	btnEmployers.setAttribute("disabled", "disabled");
	
	countBudgetValue.setAttribute("readonly","readonly");
	
let	money;

function setValidator(element, regex) {  
  if (element) {
    let lastValue = element.value;
    if (!regex.test(lastValue))
      lastValue = '';
    setInterval(function() {
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


hireEmployersItem[0].addEventListener('input', setValidator(hireEmployersItem[0], /^[а-яё]*$/i));
hireEmployersItem[1].addEventListener('input', setValidator(hireEmployersItem[1], /^[а-яё]*$/i));
hireEmployersItem[2].addEventListener('input', setValidator(hireEmployersItem[2], /^[а-яё]*$/i));

btnOpen.addEventListener('click', () => {
	setTimeout(start, 2000);
});

function start() {
	money = prompt('Ваш бюджет на месяц', '');
	while (isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет на месяц','');
	}
	budgetValue.textContent = money;
	nameValue.textContent = prompt('Название вашего магазина', '').toUpperCase().trim();
	if (nameValue.textContent != '') {
	btnGoods.removeAttribute("disabled");
	btnBudget.removeAttribute("disabled");
	btnEmployers.removeAttribute("disabled");
}
}

btnGoods.addEventListener('click', () => {
	for (let i = 0; i < goodsItems.length; i++) {
	let a = goodsItems[i].value;	
		 	if (typeof(a) === 'string' && a.length < 50)  {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
				goodsValue.textContent = mainList.shopGoods;
			} else {
			console.log('Введенные данные не корректны. Попробуйте еще раз','');
				i--;
			}
		}
});

chooseItems.addEventListener('change', () => {
	let items = chooseItems.value;
		if(isNaN(items) && items != '' ){
		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();
		itemsValue.textContent = mainList.shopItems;
		}
});

timeValue.addEventListener('change', () => {
	let time = timeValue.value;
	if (time < 0) {
			console.log('Такого просто не может быть');
			mainList.open = false;
		} else if (time >= 8 && time < 20) {
			console.log('Время работать');
			mainList.open = true;
			if (time >= 8 && time <= 10) {
				mainList.isDiscount = true;
			}else{mainList.isDiscount = false }
			} 	else if (time < 24) {
				console.log('Уже слишком поздно');
				mainList.open = false;
				} 	else {
					console.log('В сутках только 24 часа');
					mainList.open = false;
					};
	if (mainList.open == true) {
		isopenValue.style.backgroundColor = 'green'
	}	else {isopenValue.style.backgroundColor = 'red'}	
	if (mainList.isDiscount == true) {
		discountValue.style.backgroundColor = 'green'
	}	else {discountValue.style.backgroundColor = 'red'}	


})

btnBudget.addEventListener('click', () => {
	countBudgetValue.value = money / 30;
})

btnEmployers.addEventListener('click', () => {	
	employersValue.textContent = '';
	for (let i = 0; i < hireEmployersItem.length; i++) {
		let name = hireEmployersItem[i].value;
		mainList.employers[i] = name;
		if (i != hireEmployersItem.length - 1) {
		employersValue.textContent += mainList.employers[i] + ', ';
	}	else {employersValue.textContent += mainList.employers[i]}
	}
	});
	


let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	isDiscount: false,
	shopItems: [],
	
	makeDiscount: function calcDiscount() {
		if (mainList.isDiscount == true) {
			price = price * 0.8;
		}
	},
	
	
};

