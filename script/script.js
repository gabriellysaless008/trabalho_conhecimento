let vetor = [];

//let contador = 0;

const CAMPO = "campo";

//contador = vetor;

function adicionarNaLista(){
    getCampo();
    
    adicionarVetor();

    imprimirAInformacao();

    limparCombobox();

    setCursor();

    //console.log(valor);
    //console.log(vetor);
}

function getCampo(){
    return document.getElementById( CAMPO ).value;   
}

function adicionarVetor(){
    vetor[0] = getCampo();
    //contador = contador + 1;
}

function imprimirAInformacao(){
    document.getElementById("mensagem").textContent = vetor[0];
}

function limparCombobox(){
    document.getElementById( CAMPO ).value = "";
}

function setCursor(){
    document.getElementById( CAMPO ).focus();
}
















//  let vetor = adicionarVetor();

// let vet = [];

// function adicionar(){
//     vet[0] = document.getElementById("primeiro").value;
//     document.getElementById("primeiro").textContent = "";
//     console.log (vet[0]);

// }

// function imprimir(){
//     console.log("imprimir");
//     document.getElementById("mensagem").textContent = vet[0];
// }

//for (let index = 0; index < array.length; index++) {
    //const element = array[index];
    
//}