"use strict";
const url = "https://proxy.corsfix.com/?https://temporeal.pbh.gov.br/?param=D";
let dados;
async function carregar_dados(debug_) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Erro na requisição.");
    }
    const json = await response.json();
    if (debug_) {
        console.log(json);
    }
    return json;
}
async function init() {
    dados = await carregar_dados(true);
}
init();
