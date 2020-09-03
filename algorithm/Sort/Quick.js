function sort(arr, start, end, type) {
    if(start >= end) {
        return;
    }
    let pivot = start;
    let front = start + 1
    let back = end;
    let temp = 0;
    
    while(front <= back) {
        while(front <= end && arr[front] <= arr[pivot]) {
            front ++;
        }
        while(back > start && arr[back] >= arr[pivot]) {
            back --;
        }

        if(front > back) {
            temp = arr[back];
            arr[back] = arr[pivot];
            arr[pivot] = temp;
        } else {
            temp = arr[back];
            arr[back] = arr[front];
            arr[front] = temp;
        }
        
        if(type === 'w') {
            let div =  document.createElement('div');
            div.innerText = print(arr);
            document.getElementById('q_sort').appendChild(div)
        } else {
            console.log(print(arr))
        }
    }
    sort(arr, start, back - 1, type);
    sort(arr, back + 1, end, type);

}

function quick (type) {
    let array = [3, 7, 8, 1, 5, 9, 6, 10, 2, 4];
    if(type === 'w') {
        document.getElementById('q_origin').innerText = print(array);        
    } else {
        console.log(print(array))
    }
    sort(array, 0, array.length - 1, type);
}


function print(arr) {
    let result = '';
    arr.forEach(element => {
       result += element + ' ' 
    });
    return result;
}

try {
    if(window) {
        quick('w')
    }
} catch {
    quick('n')
}