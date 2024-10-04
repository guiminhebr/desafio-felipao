let NomeHeroi = "Link" 
let XpHeroi = 2001 //saida esperada: "Prata"
let Nivel = "" //variavel vazia que altera dependendo de seu nivel
//optei por seguir a lógica utilizando o operador and pra treinar o intervalo de valores


if (XpHeroi <= 1000){
  Nivel = "Ferro"
}
else if (XpHeroi >= 1001 && XpHeroi <= 2000){
  Nivel = "Bronze"
}

else if (XpHeroi >= 2001 && XpHeroi <= 5000){
  Nivel = "Prata"
}
else if (XpHeroi >= 5001 && XpHeroi <= 7000){
  Nivel = "Ouro"
}
else if (XpHeroi >= 7001 && XpHeroi <= 8000){
  Nivel = "Platina"
}
else if (XpHeroi >= 8001 && XpHeroi <= 9000){
  Nivel = "Ascendente"
}
else if (XpHeroi >= 9001 && XpHeroi <= 10000){
  Nivel = "Imortal"
}
else{
  Nivel = "Radiante"
}


console.log("O héroi de nome "+ NomeHeroi + " Está no nível de " + Nivel)