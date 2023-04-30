    //osztasi maradek neve mod, jele: % pl:
    //osztasi hanyados neve div, jele: /

//1. Returnează un boolean dacă un număr este divizibil cu 10

function divizibilCuZece(myNumber)  {
    if(myNumber % 10 == 0) return true;
    else return false;
}

console.log("Exercitiu 1.");
console.log("Exemplu 1: input: 100");
console.log(divizibilCuZece(100));

console.log("Exemplu 2: input: 23");
console.log(divizibilCuZece(23));

console.log("------------------");
console.log("Exercitiu 2.");

//2. Scrieți o funcție numită tellFortune care:

function tellFortune(N, Z, Y, X){
    const output = `Vei fi un **${X}** în **${Y}**, căsătorit cu **${Z}** și vei avea **${N}** copii.`;
    console.log(output);
}

tellFortune(3, "Emanuel", "Italia", "Programator");

//3. Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii

function numeleUneiZileASaptamanii(myNumber){
    switch (myNumber) {
        case 1:
            console.log('Luni');
            break;
        case 2:
            console.log('Marti');
            break;
        case 3:
            console.log('Miercuri');
            break;
        case 4:
            console.log('Joi');
            break;
        case 5:
            console.log('Vineri');
            break;
        case 6:
            console.log('Sambata');
            break;
        case 7:
            console.log('Duminica');
            break;
        
        default:
          console.log(`Sorry, we are out of ${myNumber}.`);
    }
}

numeleUneiZileASaptamanii(1);
numeleUneiZileASaptamanii(2);
numeleUneiZileASaptamanii(3);
numeleUneiZileASaptamanii(4);
numeleUneiZileASaptamanii(5);
numeleUneiZileASaptamanii(6);
numeleUneiZileASaptamanii(7);
numeleUneiZileASaptamanii(8);