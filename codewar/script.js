var summation = function (num) {
    let total = 0;
    for (i = 1; i < num; i++) {
        total = total + i;
    }

    return total;
}



console.log(summation(2), 3);
