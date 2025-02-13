let player = heroRank(100, 0)
let rankPlayer


if (player < 10){
    rankPlayer = 'Ferro';

}else if(player >= 11 && player <= 20){
    rankPlayer = 'Bronze';

}else if(player >= 21 && player <= 50){
    rankPlayer = 'Prata';

}else if(player >= 51 && player <= 80){
    rankPlayer = 'Ouro';
    
}else if(player >= 81 && player <= 90){
    rankPlayer = 'Diamente';
    
}else if(player >= 91 && player <= 100){
    rankPlayer = 'Lendário';
    
}else{
    rankPlayer = 'Imortal';   
}

function heroRank(wins, defeats){
    score = wins - defeats;
    return score

}
console.log(`O Herói tem de saldo de ${player} está no nível de ${rankPlayer}`)
