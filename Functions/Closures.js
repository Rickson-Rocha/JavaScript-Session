function retornaFuncao(){
    const nome = 'Rickson';
    return function (){
        return nome;
    };
}
const funcao = retornaFuncao();
console.log(funcao)
// habilidade da função em acessar seu escopo léxico