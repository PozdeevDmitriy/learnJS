let week = ['Понедельник', 'Вторник', 'Среда',
			 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    currentDay = new Date().getDay();
if (currentDay == 0) {
	currentDay = 6;
} else {currentDay--};
document.write(`${week}`);

for (let i = 0; i < week.length; i++) { 
  if (week[i] == week[currentDay] && (i == 5 || i == 6)) {
    document.write(`<br>${week[i].italics().bold()}`);
    } else if (i == 5 || i == 6) {
	  document.write(`<br><b>${week[i]}</b>`);
	} else if (week[i] == week[currentDay]) {
	  document.write(`<br>${week[i].italics()}`);	
	} else {
	  document.write(`<br>${week[i]}`);		
	}
}
//2-е задание
let arr = ['65465', '87686568', '87834', '687683', 
		   '367757', '9324553', '7342390'];
for (let i = 0; i < arr.length; i++) {
	if (arr[i][0] == 3 || arr[i][0] == 7) {
		arr[i] = +arr[i];
		console.log(arr[i]);

	}
}
