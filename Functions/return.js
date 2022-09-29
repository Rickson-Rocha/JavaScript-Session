//return
// retorna um valor
//termina a função
const CriaPessoa = function(nome,sobrenome){
    return {nome:nome,sobrenome:sobrenome}
};
const p1 = CriaPessoa('Rickson','Rocha');
console.log(typeof p1)
const p2 = {
    nome: 'Rickson',
    sobrenome: 'Rocha'
}
console.log(typeof p2)

const falaFrase= function(comeco){
    const falaResto = function(resto){
        return comeco + '' + resto;
    };
    return falaResto //retorna a função em si
};
const olaMundo = falaFrase('Olá')
console.log(olaMundo('mundo'));

function duplica(n){
    return n*2
}
function triplica(n){
    return n*3
}
function quadriplica(n){
    return n*4;
}
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

//Código repetitivo: Como resolver?

function criaMultiplicador (multiplicador){
    //multiplicador
   return function(n){
    return n* multiplicador
   };
}
const duplica1 = criaMultiplicador(2);
const duplica2 = criaMultiplicador(3);
const duplica3 = criaMultiplicador(4);
