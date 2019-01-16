let num = '33721',
    product = 1;

for (let i = 0; i < num.length; i++) {
 product = product * num[i];
};
console.log(product);
let degree = product ** 3 + '';
console.log(degree);
console.log(`Первое число: ${degree[0]}, второе число: ${degree[1]}`);