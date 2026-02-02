// Arquivo de exemplo para executar as funções definidas no math.js

import * as math from './math.js';


const numeros = [1, 2, 3, 4, 5, 6]; 
console.log('Soma usando a abordagem funcional:', math.somaDobroNumerosParesFuncional(numeros));
console.log('Soma usando a abordagem estrutural (procedural):', math.somaDobroNumerosParesProcedural(numeros));

// Adicione o prefixo "math." aqui também:
const dadosVazios = [];
console.log("Teste Vazio (Estruturada):", math.somaDobroNumerosParesProcedural(dadosVazios));
console.log("Teste Vazio (Funcional):", math.somaDobroNumerosParesFuncional(dadosVazios));