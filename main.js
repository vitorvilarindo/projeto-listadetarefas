

function nomeLista(){
    let nome_da_lista = document.querySelector("#nome_da_lista");
    let nome = document.querySelector("#nome");

    let valor = nome.value;
    nome_da_lista.textContent = "Nome da lista: "+valor;
}

function Salvar_tarefa(nome_tarefa, descrição){
    if(this.Validar(nome_tarefa, descrição) == true){
        adcionar(nome_tarefa, descrição)
    }
}

function adcionar(nome_tarefa, descrição){
    let tarefa = document.getElementById("tarefa");
    let qntlinhas = tarefa.rows.length;
    let linha = tarefa.insertRow(qntlinhas);

    let cellCodigo = linha.insertCell(0);
    let cellNome = linha.insertCell(1);
    let cellDescricao = linha.insertCell(2);
    let cellAcoes = linha.insertCell(3)

    cellCodigo.innerHTML = qntlinhas;
    cellNome.innerHTML = nome_tarefa;
    cellDescricao.innerHTML = descrição;

    let imgEdit = document.createElement('img');
    imgEdit.src = 'edit.svg'
    imgEdit.setAttribute("onclick", "produto.deletar()")

    let imgDelet = document.createElement('img');
    imgDelet.src = 'delet.png'
    
    cellAcoes.appendChild(imgEdit);
    cellAcoes.appendChild(imgDelet);



}

function Validar(nome_tarefa, descrição) {
    if(nome_tarefa == '' || descrição == ''){
        return false;
    }
    else{
        return true;
    }
   
}

function deletar(){
    alert(linha)
}

var produto = new produto();