//Uma função callback é uma função passada a outra função como argumento, 
//que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

function rand(min=1000, max = 3000){
    const num =Math.random() * (max-min) + min
    return Math.floor(num)
}
function f1(){
    setTimeout(function(){
        console.log('f1')
    },rand());
}

function f2(){
    setTimeout(function(){
        console.log('f2')
    },rand());
}
function f3(){
    setTimeout(function(){
        console.log('f3')
    },rand());
}
f1();
f2();
f3();
console.log('Hello')
// executando na ordem

function rand(min=1000, max = 3000){
    const num =Math.random() * (max-min) + min
    return Math.floor(num)
}
function f4(callback){
    setTimeout(function(){
        console.log('f1')
        if(callback)callback();
    },rand());
}

function f5(){
    setTimeout(function(){
        console.log('f2')
        if(callback)callback();
    },rand());
}
function f6(){
    setTimeout(function(){
        console.log('f3')
        if(callback)callback();
    },rand());
}
f4(function(){
    f2(function(){
        f3()
    })
});
f5();
f6();
console.log('Hello')