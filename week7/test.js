

output = min(4, 2);
console.log(output);

function min(x, y) {
    if (x === y) {
        return "The numbers are equal";
    }
    
    if (x < y) {
        return x;
    } else {
        return y;
    }
}