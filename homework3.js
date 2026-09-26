// Позитивний кейс

function pow(x, y) {
    let result = 1;
    
    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result; 
}

console.log(pow(5, 4)); 


//Піднесення до нульового ступеня

function pow(x, y) {
    let result = 1;
    
    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result; 
}

console.log(pow(2, 0)); 

//Піднесення до від’ємного ступеня

function pow(x, y) {
    let result = 1;

    if (y < 0) {
        for (let i = 0; i < -y; i++) {
            result *= x;
        }
        return 1 / result;
    }
}

console.log(pow(2, -1)); 



//Піднесення до дробового ступеня

function pow(x, y) {
    let result = 1;

    if (y % 1 !== 0) {
        while (result * result < x) {
            result += 0.01;
        }
        return Number(result.toFixed(2));
    }
}

console.log(pow(2, 0.5)); 