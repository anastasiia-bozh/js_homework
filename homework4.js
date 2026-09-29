function checkProbabilityTheory(count) {
    let evenCount = 0; 
    let oddCount = 0; 

    for (let i = 0; i < count; i++) {
    
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    
    let evenPercent = Math.round((evenCount / count) * 100);
    let oddPercent = Math.round((oddCount / count) * 100);

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${evenPercent}% / ${oddPercent}%`);

    return {
        odd: oddCount,
        even: evenCount,
        percent: `${evenPercent}% / ${oddPercent}%`,
        coef: (evenCount / oddCount).toFixed(2)
    };
}

checkProbabilityTheory(299);