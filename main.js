//version extensa
// const formulario = document.querySelector('form');
// let isResultado = false;
// const cajaFinal = document.createElement('h2');

// formulario.sumar.addEventListener('click', (e) => {
//     e.preventDefault();
//     const num1 = Number(formulario.primero.value);
//     const num2 = Number(formulario.segundo.value);
//     const resultado = num1 + num2;

//     if(!isResultado){
//         cajaFinal.classList.add('text-center', 'mt-4');
//         cajaFinal.innerHTML = resultado;
//         formulario.after(cajaFinal);
//         isResultado = !isResultado;
//     }else{
//         cajaFinal.innerHTML = resultado;
//     }
// })
// formulario.restar.addEventListener('click', (e) => {
//     e.preventDefault();
//     const num1 = Number(formulario.primero.value);
//     const num2 = Number(formulario.segundo.value);
//     const resultado = num1 - num2;

//     if(!isResultado){
//         cajaFinal.classList.add('text-center', 'mt-4');
//         cajaFinal.innerHTML = resultado;
//         formulario.after(cajaFinal);
//         isResultado = !isResultado;
//     }else{
//         cajaFinal.innerHTML = resultado;
//     }
// })
// formulario.multiplicar.addEventListener('click', (e) => {
//     e.preventDefault();
//     const num1 = Number(formulario.primero.value);
//     const num2 = Number(formulario.segundo.value);
//     const resultado = num1 * num2;

//     if(!isResultado){
//         cajaFinal.classList.add('text-center', 'mt-4');
//         cajaFinal.innerHTML = resultado;
//         formulario.after(cajaFinal);
//         isResultado = !isResultado;
//     }else{
//         cajaFinal.innerHTML = resultado;
//     }
// })
// formulario.dividir.addEventListener('click', (e) => {
//     e.preventDefault();
//     const num1 = Number(formulario.primero.value);
//     const num2 = Number(formulario.segundo.value);
//     const resultado = num1 / num2;

//     if(!isResultado){
//         cajaFinal.classList.add('text-center', 'mt-4');
//         cajaFinal.innerHTML = resultado;
//         formulario.after(cajaFinal);
//         isResultado = !isResultado;
//     }else{
//         cajaFinal.innerHTML = resultado;
//     }
// })

//alternativa
const formulario = document.querySelector('form');
let isResultado = false;
const cajaFinal = document.createElement('h2');

formulario.addEventListener('submit', (e) => {
    console.log(e);
    e.preventDefault();
    console.log(e.submitter.name);
    const num1 = Number(formulario.primero.value);
    const num2 = Number(formulario.segundo.value);

    let resultado;
    if(e.submitter.name === 'sumar'){
        resultado = num1 + num2;
    }else if(e.submitter.name === 'restar'){
        resultado = num1 - num2;
    }else if(e.submitter.name === 'multiplicar'){
        resultado = num1 * num2;
    }else if(e.submitter.name === 'dividir'){
        resultado = num1 / num2;
    }
    
//se agrega los atributos al elemento h2
    if(!isResultado){
        cajaFinal.classList.add('text-center', 'mt-4');
        cajaFinal.innerHTML = resultado;
        formulario.after(cajaFinal);
        isResultado = !isResultado;
    }else{
        cajaFinal.innerHTML = resultado;
    }
})