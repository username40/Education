/*Делаем конвертер валют.*/

function moneyConverter(valNum) {
    document.getElementById('resultUSD').innerHTML = valNum * 60;
    document.getElementById('resultEUR').innerHTML = valNum * 1.15;
}