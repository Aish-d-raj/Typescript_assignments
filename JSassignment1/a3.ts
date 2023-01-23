
for (let i:number = 2; i <= 10; i++) {
    let c:number = 0;

    
    for (let j:number = 2; j < i; j++) {
        if (i % j == 0) {
            c= 1;
            break;
        }
    }

    
    if (i > 1 && c == 0) {
        console.log(i);
    }
}