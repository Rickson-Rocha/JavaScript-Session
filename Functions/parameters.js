
// arguments -> sustenta todos os argumentos enviados
function funcao(){
    let totalValores =0;
    for(let i =0; i <=  arguments.length;i++){
         totalValores = totalValores + i
    }
    console.log(totalValores)
}
funcao(1,2,3,4,5,6,7);

function soma(a,b=2,c=4){
    console.log(a+b+c)
}
funcao(2);
funcao(2,10)// b = 10;ignora o 2;
funcao(2,10,20) // b=10;c=20;
funcao (2,'',20)// b não assume o valor 2 nesse caso
funcao(2,undefined,20) // nesse caso b assume o valor padrão(2)
 
//atribuição via desestruturação
function funcao({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade);
}

funcao({nome:'Rickson',sobrenome:'Rocha',idade:'23'})