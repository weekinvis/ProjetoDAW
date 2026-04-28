const url : string = "https://proxy.corsfix.com/?https://temporeal.pbh.gov.br/?param=D"

let dados : Promise<Array<object>>;

async function carregar_dados(debug_ : boolean): Promise<Array<object>> {
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("Erro na requisição.");
    }

    const dados = response.json();
    
    if(debug_) {
        console.log(dados);
    }
    return dados;
}

function init() : void {
    carregar_dados();
}

init();