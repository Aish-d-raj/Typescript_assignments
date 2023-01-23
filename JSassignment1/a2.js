function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}
;
console.log(gcd(23, 27));
console.log(gcd(12, 13));
console.log(gcd(9, 3));
