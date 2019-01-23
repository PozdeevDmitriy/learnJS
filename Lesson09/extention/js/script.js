let age = document.getElementById('age');
age.prototype
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age,['Петров', 'Иван']);
