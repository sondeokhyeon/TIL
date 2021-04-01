
// type Op = 'add' | 'sub' | 'mul' | 'div' | 'rem'
// function calculate (op: Op, num1 : number, num2: number) : number {
//     switch(op) {
//         case 'add': return num1 + num2;
//         case 'sub': return num1 - num2;
//         case 'mul': return num1 * num2;
//         case 'div': return num1 / num2;
//         case 'rem': return num1 % num2;
//         default: throw new Error('Unknown Operation')
//     }
// }
// console.log(calculate('add', 1, 3))
// console.log(calculate('sub', 3, 1))
// console.log(calculate('mul', 4, 2))
// console.log(calculate('div', 4, 2))
// console.log(calculate('rem', 5, 2))


// {
//     const position : object = {x : 0, y : 0}
//     function move(command : 'up' | 'down' | 'left' | 'right') : void {
//         switch (command) {
//             case 'up': position['y'] += 1; break;
//             case 'down': position['y'] -= 1; break;
//             case 'left': position['x'] -= 1; break;
//             case 'right': position['x'] += 1; break;
//         }
//     }
//     console.log(position)
//     move('up')
//     console.log(position)
//     move('down')
//     console.log(position)
//     move('left')
//     console.log(position)
//     move('right')
//     console.log(position)
// }

type LoadingState = {
    state : 'loading'
}

type SuccessState = {
    state : 'success'
    response : {
        body : string
    }
}

type FailState = {
    state : 'fail';
    reason : string;   
}

type ResoucesLoadState = LoadingState | SuccessState | FailState;

function printLoginState(resouce : ResoucesLoadState) : void { 
    if(resouce.state === 'loading') {
        console.log('loading...')
    } else if(resouce.state === 'success') {
        console.log(resouce.response.body)
    } else if(resouce.state === 'fail') {
        console.log(resouce.reason)
    }
}

printLoginState({state : 'loading'});
printLoginState({state : 'success', response: {body : 'loaded'}});
printLoginState({state : 'fail', reason: 'no network'});