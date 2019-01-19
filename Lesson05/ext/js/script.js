let date = new Date(),
    formatDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
console.log(Date.parse(date));
function editDate(date) {
  dateArr = date.split(' ');
  dmy = dateArr[1].split('.');

  console.log(dateArr);
  console.log(dmy);
  var editDmy = dmy.map(function(item) {
    if(item.length < 2) {
      return 0 + item; 
    } else return item;
  });
  editDmy = editDmy.join('.');
  console.log(editDmy);
  console.log(`${dateArr[0]} ${editDmy}`);
};
editDate(formatDate);

let ruWeek = ['Понедельник', 'Вторник', 'Среда',' Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
      numberDay = new Date().getDay();
      if(numberDay > 0) {
        numberDay--;
      } else {
        numberDay = 6;
      }
      console.log(ruWeek[numberDay]);

let dateStart = Date.parse(document.querySelector('#date-start').value)/1000,
    dateEnd = Date.parse(document.querySelector('#date-end').value)/1000,
    result = document.querySelector('#result');
    btn = document.querySelector('button');
    btn.addEventListener('click', function(){
      
      result.value = Math.abs((dateStart - dateEnd)/86400);
      result.value = '';
    });
    

