function somaDivisiveis3ou5(numero) { // faz o somatorio dos numeros divisiveis por 3 e 5 inferiores ao numero informado
    let soma = 0;
    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) { // verica os numeros que são divisiveis por 3 ou 5
            soma += i;
        }
    }
    return soma;
}

// Exemplo de uso:
const numeroInformado = 11; // caso queira testar com outros numeros só alterar essa variavel 
const resultado = somaDivisiveis3ou5(numeroInformado);
console.log(`O somatório dos números divisíveis por 3 ou 5 abaixo de ${numeroInformado} é: ${resultado}`);
