
// Verificando condição de uma forma diferente
var idade = 17 ;
//varivavel que pode ser verdadeira ou falsa, ou seja, true ou false se chama:
//BOLEANA ou em inglês boolean
var maioridadeNoBrasil = (idade >= 18) ;
var maioridadeNosEua = (idade >= 16) ;

var limiteDeIdadeNoBrasil = (idade < 90) ;
var limiteDeIdadeNosEua = (idade < 85) ;

if( maioridadeNosEua && !maioridadeNoBrasil ){
    //aqui ele já pode tirar carta pela idade mínima, mas e a máxima?
    if(limiteDeIdadeNoBrasil && !limiteDeIdadeNosEua){
        console.log("só pode tirar carta no Brasil.") ;
    } else if(limiteDeIdadeNoBrasil && limiteDeIdadeNosEua){
        console.log("Pode tirar carta tanto no BR quanto nos eua.");
    } else {
        console.log("não pode tirar carta pois tem limite de idade.");
    }
} else if(maioridadeNoBrasil && maioridadeNosEua){
    console.log("pode tirar carta tanto no Brasil quanto nos EUA");
} else if(maioridadeNoBrasil){
    console.log("Pode tirar carta só no Brasil.") ;
} else {
    console.log("Ainda não pode tirar carta.") ;
}

//verificar a idade boa de reprodução de cães, escolher 2 raças, pesquisar e fazer um comparativo usando ifs e switch case

//próximo exercício. Exemplo de uso de  ===
// == verifica se é igual //serve pra texto, número e data
// != verifica se é diferente diferente // texto (string), número e data
// <= menor ou igual //serve pra número e data
// >= maior igual // número e data
// > ou < //número e data

//false, null, undefined, vazio
var nome = "RenAtO" ;

if( nome === "Renato" ){
    console.log("Existe um nome e é ", nome);
}

//JS é CASE SENSITIVE
switch (nome.toLowerCase()){
    case "renato":
        //se nome for Renato, entra aqui
        console.log("Olá Renato") ;
        break;
    case "paulo":
        //se nome for Paulo entra aqui
        console.log("Olá Paulo") ;
        break;
    default:
        //entra aqui caso não seja nenhum dos anteriores
        console.log("Olá "+nome) ;
        break;
}