// Inicio uma variavel para determinar uma frase 
let texto = "Estou a cada dia mais feliz";

// Determino uma variavel com um array de vogais
let vogais = ['a', 'e', 'i', 'o', 'u'];

// Determino uma variavel com um array de consoantes
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

// Adiciono uma variavel onde converte sua String para letras minúsculas
texto = texto.toLowerCase()

// Crio uma variavel que contem um metodo array para dividir os caracteres
let arrayLetras = texto.split('');

// Crio variaveis para contagens
let Espaço = 0
let arrayVogais = [];
let arrayConsoantes = [];


// Utilizo um laço de repetiçõa para verificar  e comparar cada caractere
for (let i = 0; i < arrayLetras.length; i++)
    if (vogais.includes(arrayLetras[i])) {
        arrayVogais.push(arrayLetras[i]);
    } else if (consoantes.includes(arrayLetras[i])) {
        arrayConsoantes.push(arrayLetras[i]);
    } else if (arrayLetras[i] = " ") {
        Espaço++
    }


// exibo os resultados: 
//o texto, as vogais que tem na frase, quantas vogais tem, as consoantes e quantas tem na frase e quantos espaços tem na frase
console.log("Texto original:", texto);
console.log("Vogais Encotradas:", arrayVogais.toString());
console.log("Consoantes Encontradas:", arrayConsoantes.toString())
console.log("Total de consoantes: " + arrayConsoantes.length)
console.log("Total de Vogais: " + arrayVogais.length);
console.log("Total de espaço:" + Espaço)
// Texto original: estou a cada dia mais feliz
// Vogais Encotradas: e,o,u,a,a,a,i,a,a,i,e,i
// Consoantes Encontradas: s,t,c,d,d,m,s,f,l,z
// Total de consoantes: 10
// Total de Vogais: 12
// Total de espaço:5