const url: string =
  "https://proxy.corsfix.com/?https://temporeal.pbh.gov.br/?param=D";

let dados: Array<object>;

async function carregar_dados(debug_: boolean): Promise<Array<object>> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Erro na requisição.");
    }

    const json = await response.json();

    if (debug_) {
        console.log(json);
    }

    return json as Array<object>;
}

async function init(): Promise<void> {
    dados = await carregar_dados(true);
}

init();
