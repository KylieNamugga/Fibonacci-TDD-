// using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
    
}

module.exports = {fibonacci}

// Pair Partner: Nina Kenyonyozi Bwenjye