const invitati = ['Marco', 'Daniele', 'Giulio', 'Alessandra', 'Simona']
let invito = document.getElementById('invitations')
const bottone = document.getElementById('bottone')
const testo = document.getElementById('app')
let condizione = false
let contatore = 0
bottone.addEventListener('click', function(){
    let condizione = false
    let contatore = 0
    while(condizione == false && contatore < 20){
        if(invito.value === invitati[contatore]){
            testo.innerHTML = 'Benvenuto alla Festa'
            condizione = true
        } else {
            testo.innerHTML = 'Non puoi imbucarti'
            contatore += 1
            console.log(contatore)
        }
    }
})
