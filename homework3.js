function pow(x, y) {
    let result = 1;

    // 1. Піднесення до дробового ступеня
    if (y % 1 !== 0) {
        while (result * result < x) {
            result += 0.01;
        }
        return Number(result.toFixed(2));
    }

    // 2. Піднесення до від’ємного ступеня
    if (y < 0) {
        for (let i = 0; i < -y; i++) {
            result *= x;
        }
        return 1 / result;
    }

    // 3. Позитивний кейс та піднесення в нульову степінь
    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result;
}


console.log(pow(2, 0.5)); 
console.log(pow(2, -1));
console.log(pow(5, 4));   
console.log(pow(2, 0));   