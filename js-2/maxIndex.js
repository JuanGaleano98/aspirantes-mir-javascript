function maxIndex(numbers) {

    var posicion = -1;
    var valor = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (valor < numbers[i]) {
            valor = numbers[i];
            posicion = i;
        }

    }

    return posicion;
}

console.log(maxIndex([1, 3, 2]))
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]))
console.log(maxIndex([]))
