it('nada agora', function(){})

//function soma(a,b){
//    return a+b;
//}

//const soma = function (a, b){
//    return a + b
//}

//const soma = (a, b) => {
//    return a + b
//}

//const soma = (a, b) => a + b

//const soma = (a) => a + a

//const soma = a => a + b

const soma = () => 5 + 5

console.log(soma(1, 4))

it('a function test...', function (){
    console.log('Function', this)    
})

it('an arrow test...', () => {
    console.log('Arrow', this)    
})

//exemplo transformando arrow functions 
//sem
document.addEventListener('click', function() {
    console.log('clicked')
})
//com
document.addEventListener('click', () => console.log('clicked')) 