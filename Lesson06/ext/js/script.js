let div = document.querySelector('.test'),
    div1 = document.querySelector('.test_1'),
    div2 = document.querySelector('.test_2'),
    a = document.querySelector('a');

a.addEventListener('click', function(event){
  event.preventDefault();
  console.log(0);
});
div.addEventListener('click', function(event){
  div.style.background = 'yellow';
  event.target.style.borderRadius = '10%';
  console.log(1);

});
div1.addEventListener('click', function(event){
  div1.style.background = 'black';
  event.target.style.borderRadius = '30%';
  console.log(2);

});
div2.addEventListener('click', function(event){
  div2.style.background = 'red';
  event.target.style.borderRadius = '50%';
  console.log(3);

});
