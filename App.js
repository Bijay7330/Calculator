let display = document.querySelector('#display');
let ac = document.querySelector('#AC');
let clear = document.querySelector('#clear');

let number = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');

let equal =document.querySelector('#equals');

let num1= 0;
let num2 =0;
let oprt = ''; 
let result = 0;


ac.addEventListener('click',()=>{
    display.innerHTML ='';
});


number.forEach(element => {
    element.addEventListener('click',()=>{
        display.innerHTML += element.innerHTML;
    });
});

operator.forEach(element => {
    element.addEventListener('click',()=>{
        oprt = element.innerHTML;
        num1 =Number(display.innerHTML);
        display.innerHTML ="";
        console.log(oprt);
        console.log('num1',num1);
    })
});

equal.addEventListener('click',()=>{
    num2 =Number(display.innerHTML);
    console.log('num2',num2);

    if(oprt ==="+"){
        result =num1+num2;
        display.innerHTML = result;
    }
    else if(oprt ===""){
        result =num1-num2;
        display.innerHTML = result;
    }
    else if(oprt ==="x"){
        result =num1*num2;
        display.innerHTML = result;
    }
    else if(oprt ==="/"){
        result =num1/num2;
        display.innerHTML = result;
    }
    else if(oprt ==="%"){
        result =num1%num2;
        display.innerHTML = result;
    } 
})

clear.addEventListener('click',()=>{
    let arr = Array.from(display.innerHTML);
    arr.pop();
    const final = Number(arr.join(''));
    
    display.innerHTML =final;
    
})


