function adicionarNaLista(){
    let vetor = adicionarVetor(); //<---- deu erro, dizendo que não esta definida !!!
    let valor = getCampo();
    console.log(valor);
    console.log(vetor);

}

function getCampo(){
    return document.getElementById("campo").value;
    
}

function adicionarVetor(){
    vetor[0] = document.getElementById("campo").value; //<----- erro aqui, verificar depois !!!
}
























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