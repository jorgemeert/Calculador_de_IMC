function calcular(){
    let valorPeso = document.getElementById("peso").value;
    let valorAltura = document.getElementById("altura").value;

    let valorIMC = valorPeso / (valorAltura * valorAltura);

    console.log(valorIMC);

    document.getElementById("resultadoIMC").textContent = "O seu IMC é: " + valorIMC;
}