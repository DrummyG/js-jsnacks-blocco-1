const testo = document.getElementById('app')

document.getElementById('button').addEventListener('click', function () {
    let numeroUno = document.getElementById('one').value
    let numeroDue = document.getElementById('two').value
    let numeroTre = document.getElementById('three').value
    let numeroQuattro = document.getElementById('four').value
    let numeroCinque = document.getElementById('five').value
    let numeroSei = document.getElementById('six').value
    const numeri = [numeroUno, numeroDue, numeroTre, numeroQuattro, numeroCinque, numeroSei]

    for (i = 0; i < numeri.length; i++) {
        if (numeri[i] % 2 !== 0) {
            testo.innerHTML += `${numeri[i]} `
        }
    }
})
