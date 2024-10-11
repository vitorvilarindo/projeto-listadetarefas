

function nomeLista(){
    let nome_da_lista = document.querySelector("#nome_da_lista");
    let nome = document.querySelector("#nome");

    let valor = nome.value;
    nome_da_lista.textContent = "Nome da lista: "+valor;
}

function Salvar_tarefa(nome_tarefa, descrição){
    let tarefa = document.getElementById("tarefa");
    let qntlinhas = tarefa.rows.length;
    let linha = tarefa.insertRow(qntlinhas);

    let cellCodigo = linha.insertCell(0);
    let cellNome = linha.insertCell(1);
    let cellDescricao = linha.insertCell(2);

    cellCodigo.innerHTML = qntlinhas;
    cellNome.innerHTML = nome_tarefa;
    cellDescricao.innerHTML = descrição;

}