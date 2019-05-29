function solve(a, b, c) {

    let result = findSmallest(a, b, c);
    console.log(result);

    function findSmallest(a, b, c, ) {
        let smallest = Number.MAX_SAFE_INTEGER;
        if (a <= b && a <= c) {
            smallest = a;
        } else if (b <= c && b <= a) {
            smallest = b;
        } else if (c <= a && c <= b) {
            smallest = c;
        }
        return smallest;
    }
}
solve(2, 4, 3)