let sum = 0;

for (let i = n; n >= i; i--) {
    if(i % 2 == 0){
        sum += i;
    }
}

console.log(sum);