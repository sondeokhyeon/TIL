function select (type) {
    let array = [3, 7, 8, 1, 5, 9, 6, 10, 2, 4];
    let index = 0;
    let min = 0;
    if(type === 'w') {
        document.getElementById('s_origin').innerText = print(array);        
    } else {
        console.log(print(array))
    }
    for (let i = 0; i < array.length; i++) {
        min = array.length + 1;
        for (let j = i; j < array.length; j++) {
            if(min > array[j]) {
                min = array[j]
                index = j
            }
        }
        let temp = array[i];
        array[i] = min;
        array[index] = temp;

        if(type === 'w') {
            let div =  document.createElement('div');
            div.innerText = print(array);
            document.getElementById('s_sort').appendChild(div)
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
        select('w')
    }
} catch {
    select('n')
}