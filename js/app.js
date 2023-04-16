/*
Crea una web con bootstrap y js, que contenga un botón input donde se pueda
cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista,
cada elemento ingresado en la lista debe poder ser eliminado con un botón creado
para ese fin.
*/

let listaTareas = [];

function agregarTarea() {
    let tarea = document.getElementById("inputTarea").value;
    if (tarea !== "") {
        listaTareas.push(tarea);
        document.getElementById("inputTarea").value = "";
        actualizarListaTareas();
    }
}

function eliminarTarea(index) {
    listaTareas.splice(index, 1);
    actualizarListaTareas();
}

function actualizarListaTareas() {
    let listaHtml = "";
    for (let i = 0; i < listaTareas.length; i++) {
        listaHtml += '<li class="mb-3 text-start" >' + listaTareas[i] + ' <button class="colorBoton" onclick="eliminarTarea(' + i + ')">Eliminar</button></li>';
    }
    document.getElementById("listarTareas").innerHTML = listaHtml;
}

document.getElementById("botonAgregar").addEventListener("click", function(){
    agregarTarea();
});

document.getElementById("inputTarea").addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        agregarTarea();
    }
});