
// console.log(sum(range(1,10)));

console.log(sum(range(1, 10)));

function range(start, end)
{
    let myArray = new Array();
    for (num = start; num <= end; num++) {
        myArray.push(num);
    }

    return myArray;
}

function sum(myArray)
{
    let mySum = 0;
    for (let num of myArray) {
        mySum = mySum + num;
    }

    return mySum;
}