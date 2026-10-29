function calcular() {
  const peso = Number(document.getElementById('peso').value);
  const altura = Number(document.getElementById('altura').value);
  const resultado = document.getElementById('resultadoIMC');

  if (peso <= 0 || altura <= 0) {
    resultado.className = 'resultado erro';
    resultado.textContent = 'Digite um peso e uma altura válidos.';
    return;
  }

  const imc = peso / (altura * altura);
  let faixa;
  let classificacao;

  if (imc < 18.5) {
    faixa = 'abaixo';
    classificacao = 'Abaixo do peso';
  } else if (imc < 25) {
    faixa = 'normal';
    classificacao = 'Peso normal';
  } else if (imc < 30) {
    faixa = 'sobrepeso';
    classificacao = 'Sobrepeso';
  } else if (imc < 35) {
    faixa = 'obesidade-1';
    classificacao = 'Obesidade grau 1';
  } else if (imc < 40) {
    faixa = 'obesidade-2';
    classificacao = 'Obesidade grau 2';
  } else {
    faixa = 'obesidade-3';
    classificacao = 'Obesidade grau 3';
  }

  resultado.className = `resultado ${faixa}`;
  resultado.textContent = `Seu IMC é ${imc.toFixed(2).replace('.', ',')} — ${classificacao}.`;
}
