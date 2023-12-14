let counter = 0;

for (let i = 1; i <= 21; i++){
    if (i % 3 == 0 && i % 7 == 0){
        counter++;
    }
}   

console.log(counter);