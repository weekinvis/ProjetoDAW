"use strict";
const url = "https://proxy.corsfix.com/?https://temporeal.pbh.gov.br/?param=D";
let dados;
async function carregar_dados() {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Erro na requisição.");
    }
    const dados = response.json();
    console.log(dados);
    return dados;
}
function init() {
    carregar_dados();
}
init();

