var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price: function () {
        let result = 0;
        for (let key in this) {
            let num = parseInt(this[key]);
            if (num) {
                result += num;
            }
        }
        return result;
    },

    minPrice: function () {
        let min = Infinity;
        for (let key in this) {
            let num = parseInt(this[key]);
            if (num) {
                min = Math.min(min, num);
            }
        }
        return min;
    },

    maxPrice: function () {
        let max = 0;
        for (let key in this) {
            let num = parseInt(this[key]);
            if (num) {
                max = Math.max(max, num);
            }
        }
        return max;
    }
};

services['послухати Сердючку'] = "200 грн";

console.log(services.price());  
console.log(services.minPrice());
console.log(services.maxPrice());