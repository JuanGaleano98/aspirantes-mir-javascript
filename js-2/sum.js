function sum(numbers) {
    
    let suma = 0;

    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i];
    }

    return suma;
}

console.log(sum([1, 2, 3]))
console.log(sum([10, 8, 12, 5]))
console.log(sum([]))
