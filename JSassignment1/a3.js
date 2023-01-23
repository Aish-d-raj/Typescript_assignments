for (var i = 2; i <= 10; i++) {
    var c = 0;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            c = 1;
            break;
        }
    }
    if (i > 1 && c == 0) {
        console.log(i);
    }
}
