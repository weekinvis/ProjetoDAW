const url : string = "https://proxy.corsfix.com/?https://temporeal.pbh.gov.br/?param=D"

let dados : Promise<Array<object>>;

async function carregar_dados(debug_ : boolean): Promise<Array<object>> {
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("Erro na requisição.");
    }
    
    if(debug_) {
        console.log(dados);
    }
    return await response.json();
}

function init() : void {
    dados = await carregar_dados(true);
    console.log(dados);
}

init();