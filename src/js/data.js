"use strict";
const url = "https://proxy.corsfix.com/?https://temporeal.pbh.gov.br/?param=D";
let dados;
async function carregar_dados(debug_) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Erro na requisição.");
    }
    if (debug_) {
        console.log(dados);
    }
    return await response.json();
}
function init() {
    dados = carregar_dados(true);
    console.log(dados);
}
init();
