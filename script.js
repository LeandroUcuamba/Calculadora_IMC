const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
       alert ('valor preenchido');

       const resultadoIMC = (peso / (altura*altura)).toFixed(2);
       resultado.textContent = resultadoIMC;  

    } else{
       resultado.textContent = 'Preencha todos os campos';
    }

}

calcular.addEventListener('click', imc)