function sum (number) {

    let sumaTotal = 0;

    for (let i = 0; i < number ; i++) {
        sumaTotal += (i + 1);
    }

    return sumaTotal;

}

console.log(sum(4));
console.log(sum(10))
console.log(sum(15))
