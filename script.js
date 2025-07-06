// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.

const arr = [1, 2, 3, 4, 5]

const filteredArr = arr.filter(function (number) {
    return number % 2 === 0;
});

console.log(filteredArr)