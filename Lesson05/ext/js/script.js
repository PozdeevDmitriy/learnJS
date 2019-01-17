let date = new Date(),
    formatDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;

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