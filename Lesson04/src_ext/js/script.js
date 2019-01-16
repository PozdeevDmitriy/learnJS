let str = "урок-3-был слишком легким",
    strEdit = str[0].toUpperCase() + str.substring(1);
console.log(strEdit);
  strEdit = strEdit.replace(/\-/g, " ");
  console.log(strEdit);
  let pos = strEdit.indexOf("легким")-1;
  strEdit = strEdit.slice(0, pos).slice(0, -2) + 'оо';
  console.log(strEdit);

let arr = [20, 33, 1, "Человек", 2, 3];
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === 'number') {
    sum = sum + arr[i] ** 3;
    } else{
      continue;
    }
    };
let sqrtSum = Math.sqrt(sum);
console.log(sqrtSum); 
var test = '                             игорьdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfsddfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdfsdf                                                                                        ';
function valid(text) {
  if (typeof(text) != 'string') {
    alert ('Вы ввели не строку');
  } else if(text.trim().length > 50){
      text = text.trim();
      text = text.substr(0, 50) + '...'
      alert (text)
    } else {
      text = text.trim();
      alert(text); 
    }
};

valid(test);
