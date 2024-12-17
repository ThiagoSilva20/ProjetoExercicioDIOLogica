

let nome = 'Thiago'
let experiência = 10001
let liga

if (experiência <= 1000) {
    liga = 'Ferro'
} else if (experiência > 1000 && experiência <= 2000) {
    liga = 'Bronze'
}
else if (experiência > 2000 && experiência <= 6000) {
    liga = 'Prata'
}
else if (experiência > 6000 && experiência <= 7000) {
    liga = 'Ouro'
}     
else if (experiência > 7000 && experiência <= 8000) {
    liga = 'Platina'
}     
else if (experiência > 8000 && experiência <= 9000) {
    liga = 'Ascendente'
}
else if (experiência > 9000 && experiência <= 10000) {
    liga = 'Imortal'
 }else {
    liga  = 'Radiante'
}
        


console.log('O Herói de nome ' + nome + " está no nivel de " + liga)