function sum(a, b){
    return a + b;
}

function multi(a, b){

}

function divide(a, b){
    
}

function subtraction(a, b){
    
}

NTest(sum, 2, 1, 1);
NTest(sum, 0, 0, 0);
NTest(sum, 553.5, 550, 3.5);
NTest(sum, 0, '0', 0);
NTest(sum, 1, '1', 0);
NTest(sum, 1, 1);
NTest(sum, 3, 1, 1, 1);


function NTest(func, result, ...args){
    const callResult = func(...args);
    const passFailed = callResult === result ? 'PASS' : 'FAILED';
    const str = `${ passFailed }: ${ func.name }(${ args }) Expected: ${ result }, Received: ${ callResult }`;

    const styles = {
        PASS : 'background-color: green; padding: 5px; color: white;',
        FAILED : 'background-color: red; padding: 5px;',
    }
    console.log('%c%s', styles[passFailed], str);
}

