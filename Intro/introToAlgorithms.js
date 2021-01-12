
//Basic summing algorithm
//O(n) - Linear algorithm - the bigger the input the more time it takes (equally)
function sumUp(n) {
    //Count the number of expression executions
    //this line is executed once
    let result = 0;
    //the loop runs through n times
    for(let i = 1; i < n; i++) {
        result += i;
    }
    //this line is executed once
    return result;
}
//Therefore O(n) since it gets hung up on the loop running n times


//There is no loop, so it only has to run once. Same way to write the code above
//O(1) - Constant time algorithm
function sumUp2(n) {
    //only runs once no matter the input
    return (n / 2) * (1 + n);
}

/* SOME EXAMPLE BIG O ALGORITHMS:

O(1) - Constant Time - input has no effect on the time the algorithm takes
O(log n) - Logarithmic Time - execution time grows logarithmically with input
O(n) - Linear Time - execution time grows linearly with input
O(n^2) - Quadratic Time - execution grows quadratically with input
O(2^n) - Exponential Time - execution time grows exponentially with input

*/

//Calculate the sum of an array of numbers, define time complexity
//Linear Time
function sumTest(n) {
    let result = 0;
    for(let i = 0; i < n.length; i++) {
        result += n[i];
    }
    return result;
}

//Unfortunately this is still linear, because it calls function within reduce n number of times
function sumTest2(n) {
    let result = n.reduce((a,b) => a+b, 0);
    return result;
}