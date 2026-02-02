/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
// Implementação Funcional
function somaDobroNumerosParesFuncional(numeros) {
    return numeros
        .filter(n => n % 2 === 0)
        .map(n => n * 2)
        .reduce((acc, n) => acc + n, 0);
}

// Implementação Estruturada (Procedural)
function somaDobroNumerosParesProcedural(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            soma += numeros[i] * 2;
        }
    }
    return soma;
}

// Mantenha esta linha exatamente como está no seu arquivo original:
export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };