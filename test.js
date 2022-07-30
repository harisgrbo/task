const arr = [2,6,9,7,3];

function check(arr) {
    let limit = arr.length - 1;
    let increasing = true;
    let decreasing = true;

    for (let i = 0; i < limit; i++) {
        let current = arr[i];
        let next = arr[i + 1];

        decreasing = decreasing && (current > next);
        increasing = increasing && (current < next);
    }

    if(increasing) {
        console.log('Increasing');
    } else if (decreasing) {
        console.log('Decreasing');
    } else {
        console.log('Neither')
    }
}

console.log(check(arr))



