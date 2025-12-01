let vetor = [];


function adicionarNaLista(){
    let valor = getCampo();
    adicionarVetor();
    imprimirAInformacao();
    console.log(valor);
    //console.log(vetor);

}

function getCampo(){
    return document.getElementById("campo").value;
    
}

function adicionarVetor(){
    vetor[0] = document.getElementById("campo").value;


}

function imprimirAInformacao(){
    document.getElementById("mensagem").textContent = vetor[0];

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