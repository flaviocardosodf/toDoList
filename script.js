const entrada = document.querySelector(".entrada");
const lista = document.querySelector(".container ul");
const btn = document.querySelector(".container button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function mostrarTarefas() {
    lista.innerHTML = "";

    tarefas.map((toDo) => {
        let li = document.createElement("li");
        let textoTarefa = document.createTextNode(toDo);

        let link = document.createElement("button");
        link.setAttribute("href", "#");
        let textoLink = document.createTextNode("Remover");
        link.appendChild(textoLink);

        let posicao = tarefas.indexOf(toDo);
        
        link.setAttribute("onclick", `deletar(${posicao})`);

        li.appendChild(textoTarefa);
        li.appendChild(link);
        lista.appendChild(li);
    })
}

mostrarTarefas();

function adicionar() {
    if(entrada.value === ""){
        alert("Digite alguma tarefa");
        return false;
    } else {
        let novaTarefa = entrada.value;

        tarefas.push(novaTarefa);
        entrada.value = "";

        mostrarTarefas();
        salvarDados();
    }
}

function deletar(posicao) {
    tarefas.splice(posicao, 1);
    mostrarTarefas();
    salvarDados();
}

function salvarDados() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}