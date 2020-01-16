// Example:

//     348597 => [7, 9, 5, 8, 4, 3]


function digitize(n) {
    n = "" + n;
    let arr = [];
    let size = n.length;
    for (let i = 0; i <= size; i++) {
        arr[i] = Number(n[size - i]);
    }
    arr.splice(0, 1);
    return arr;
}