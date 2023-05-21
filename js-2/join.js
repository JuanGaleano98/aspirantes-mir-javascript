function join(numbers) {

    var cadena = '';

    for (let i = 0; i < numbers.length; i++) {
        cadena = `${cadena} ${numbers[i]}`;
    }

    return cadena;
}

console.log(join([1, 3, 2]))
console.log(join([10, 9, 8, 7, 6, 5, 4]))
console.log(join([]))
