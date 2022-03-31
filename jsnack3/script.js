
const testo = document.getElementById('app')
counter = 0
somma = 0
document.getElementById('button').addEventListener('click', function(){
    const numero = document.getElementById('number').value.split('')
    const testo = document.getElementById('app')
    while(counter < numero.length){
        somma += parseInt(numero[counter])
        testo.innerHTML = `${somma}`
        counter++
    }
})