function max(numbers) {

    var numMax;
    var provisional = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (provisional < numbers[i]) {
            provisional = numbers[i];
            if (provisional > 0) {
                numMax = provisional
            }
        }
    }

    return numMax;
}

console.log(max([1, 3, 2]))
console.log(max([10, 9, 8, 7, 6, 5, 4]))
console.log(max([]))
