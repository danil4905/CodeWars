// Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'


function solution(str) {
    var newStr = '',
        i;
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}