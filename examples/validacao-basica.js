const button = document.getElementById('button');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

function somarNumeros(n1,n2){
    return n1+n2;
}

button.addEventListener('click', function(){
    console.log(somarNumeros(input1.value, input2.value))
})