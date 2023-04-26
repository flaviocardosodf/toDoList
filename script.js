function addTarefa() {
    const addTitle = document.querySelector(".task-title").value;

    if(addTitle) {
        const template = document.querySelector(".template");

        const novaTarefa = template.cloneNode(true);

        novaTarefa.querySelector(".task-title").textContent = addTitle;

        novaTarefa.classList.remove("template");
        novaTarefa.classList.remove("hide");

        const lista = document.querySelector(".task-list");
        lista.appendChild(novaTarefa);

        const removeBtn = novaTarefa.querySelector(".remove-btn").addEventListener("click", function() {
            removeTarefa(this);
        });

        const doneBtn = novaTarefa.querySelector(".done-btn").addEventListener("click", function() {
            concluiTarefa(this);
        });

        document.querySelector(".task-title").value = "";

    }
}

function removeTarefa(tarefa) {
    tarefa.parentNode.remove(true);
}

function concluiTarefa(tarefa) {
    const tarefaCompleta = tarefa.parentNode;

    tarefaCompleta.classList.toggle("done");
}


const addBtn = document.querySelector(".btn");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    addTarefa();
});