 function calcularMacros() {
    let sexo = document.getElementById('sexo').value;
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let idade = parseInt(document.getElementById('idade').value);
    let fatorAtividade = parseFloat(document.getElementById('atividade').value);
    let ajusteCalorico = parseFloat(document.getElementById('objetivo').value);
    
    if (!peso || !altura || !idade) {
        alert('Por favor, insira todos os valores corretamente.');
        return;
    }
    
    let tmb;
    if (sexo === "masculino") {
        tmb = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
    } else {
        tmb = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
    }
    let alturaMetros = altura / 100;
    let imc = peso / (alturaMetros * alturaMetros);
    let tdee = (tmb * fatorAtividade) + ajusteCalorico;
    let carboidratos = (tdee * 0.4) / 4;
    let proteinas = (tdee * 0.3) / 4;
    let gorduras = (tdee * 0.3) / 9;
    let agua = (peso*35)/1000
    document.getElementById('resultado').innerHTML = `
        <p>Calorias diárias: ${tdee.toFixed(0)} kcal</p>
        <p>Carboidratos: ${carboidratos.toFixed(1)}g</p>
        <p>Proteínas: ${proteinas.toFixed(1)}g</p>
        <p>Gorduras: ${gorduras.toFixed(1)}g</p>
        <p>Seu imc:${imc.toFixed(2)}</p>
        <p>Água:${agua} litros</p>
    `;
}
