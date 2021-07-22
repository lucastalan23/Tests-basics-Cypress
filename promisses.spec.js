it('sem testes, ainda', () => { })
//fez o init, solicitou o valor da variável, e como o valaor nao é superior a 1s, o valor da mesma vem undefined e ele encerra.
/*const getSomething = () => {
    setTimeout(() => {
        console.log('respondendo...')
        return 11;
    }, 1000)
} */  

/*const system = () => {
    console.log('init');
    const something = getSomething();
    console.log(`Something is ${something}`);
    console.log('end')
}
system();  
*/
//fez o init, chamou o getSomething, como ele ainda não possuia o valor, continuou a execução e finalizou os processos restantes, para depois imprimir o valor que está em some
/*const getSomething = (callback) => {
    setTimeout(() => {
        callback(12);
    }, 1000)
}
*/
//executar end somente quando terminar de executar tudo(try)
//essa versão está um pouco errada pois, quando ele entra no tempo de espera esperando o retorno do getSomething, ele passa pro end, e no end ele pede mais tempo ainda, não termina junto com a execução do processo
/*const system = () => {
    console.log('init');
    getSomething(some => console.log(`Somethinng is ${some}`));
    getSomething(e => console.log(`end`));
}
system();*/
//versão prof, só chama o end quando fizer o ultimo processo
/*const system = () => {
    console.log('init');
    getSomething(some => {
    console.log(`Somethinng is ${some}`)
    console.log('end');
})
}
system();
*/
//Uso de promisses.
const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })
    
}

const system = () => {
    console.log('init');
    getSomething().then(some => {
        console.log(`Somethinng is ${some}`)
    })
    console.log('end')
    
}

system();