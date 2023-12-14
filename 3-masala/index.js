let sum = 0;

for(let i = 1; i <= n; i++){
    if(i % 5 == 0 && i % 7 == 1){
        sum = sum + i + i;
    }
}

console.log(sum);