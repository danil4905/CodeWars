// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


function findOdd(A) {
    let count = 0;
    let a = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[i] == A[j])
                count++;
        }
        if (count % 2 == 1)
            return A[i];
    }
    return 0;
}
