function bubble (type) {
    let array = [3, 7, 8, 1, 5, 9, 6, 10, 2, 4];
    let temp = 0;
    if(type === 'w') {
        document.getElementById('b_origin').innerText = print(array);        
    } else {
        console.log(print(array))
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j ++) {
            if(array[j] > array[j + 1]) {
                temp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = temp;
            }
        }
        if(type === 'w') {
            let div =  document.createElement('div');
            div.innerText = print(array);
            document.getElementById('b_sort').appendChild(div)
        } else {
            console.log(print(array))
        }
    }
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
        bubble('w')
    }
} catch {
    bubble('n')
}