const input = document.querySelector("input");
const addBtn = document.querySelector(".btnAddTarea");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const formato = document.querySelector(".addFormato");
const lista = document.querySelector(".lista");
const contenedor = document.getElementById("containerListas");


formato.addEventListener("click", (e) => {
    e.preventDefault();
    
    const cantidadActual = document.querySelectorAll(".lista").length;
    const cantidadSeleccionada = parseInt(document.getElementById("cantidad").value);

    if (cantidadActual + cantidadSeleccionada > 3) {
        alert("Solo podes crear un máximo de 3 listas.")
        return;
    }

    for (let i=0; i < cantidadSeleccionada; i++) {
        const div = document.createElement("div");
        div.className = "lista";
        div.innerHTML = `<div class="inputData">
                            <form>
                                <input type="text" placeholder="Agrega tu tarea pendiente...">
                                <button class="btnAddTarea">+</button>
                            </form>
                        </div>
                        <div class="liContainer">
                            <ul></ul>
                        </div>
                        <div class="empty">
                            <p>No tienes tareas pendientes.</p>
                        </div>`;
        
        contenedor.appendChild(div);

        
        const addBtn = div.querySelector(".btnAddTarea");
        addBtn.addEventListener("click", (e) => {
            e.preventDefault();
    
            const text = addBtn.previousElementSibling.value;

            if(text !== ""){
                const li = document.createElement("li");
                const p = document.createElement("p");

                p.textContent = text;

                li.appendChild(p);
                li.appendChild(addDeleteBtn());
                div.querySelector("ul").appendChild(li);

                addBtn.previousElementSibling.value = "";
                div.querySelector(".empty").style.display = "none";
           
            }
        });

        function addDeleteBtn(){
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "x";
            deleteBtn.className = "btnDelete";
        
            deleteBtn.addEventListener("click", (e)=> {
            const item = e.target.parentNode;
            item.parentNode.removeChild(item);
        
            const items = document.querySelectorAll("li");
            if (items.length === 0) {
                empty.style.display = "block";
            }
        
            });
            return deleteBtn;
        }
        
    }
});





