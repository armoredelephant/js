// function that takes a number as the arg and sums numbers div by 3 or 5
function multiples(num) {
    // accumulate all numbers divisble by 3 or 5 | if both, then it's counted once
    count = 0;
    for (let i = 0; i <= num; i++) {
        if ((i % 5 == 0 && i % 3 == 0) || (i % 5 == 0 || i % 3 == 0)) count += i;
    }
    return count;
}

