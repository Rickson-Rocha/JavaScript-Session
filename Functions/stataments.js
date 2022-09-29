
/* function hoisting 
dessa maneira,posso excutar a função antes de cria-lá,pois
o motor do js 'eleva' a função*/
function falaOi(){
    console.log('oi');
}
// as funções são 'first class objects'
// A função pode ser tratada como dados
// Function Expression
const souUmDado = function(){
    console.log('sou um dado')
};
souUmDado(); // executando a constante como função

function executaFuncao(funcao){
    console.log('vou executar sua função abaixo')
    funcao();
}
executaFuncao(souUmDado) // a função passou a ser um parâmetro(dado)

//Arrow function 
const funcaoArrow = () => {
    console.log('sou uma arrow function')
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log('estou falando..')
    }
};
obj.falar();
// outra maneira
const obj1 = {
    falar(){
        console.log('estou falando')
    }
};
obj.falar();
