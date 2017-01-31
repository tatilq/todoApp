//---------------------VARIABLE GOBLAL DONDE SE ENLISTARAN MIS DEMAS TAREAS----------------//
var listaTareas = document.getElementById("listaTareas");
//-----------------------------FUNCION PARA CREAR NODOS(TAREAS)---------------------------//
function crearNodos(container,tarea){
	var div=document.createElement('div');
	div.className="list , checkbox , animated bounceInDown";
	var icono=document.createElement('i')
	icono.className="fa , fa-trash-o , icono";
	var label=document.createElement('label'); 
	label.className="text-justify";
	var checkbox=document.createElement('input');
	checkbox.type = "checkbox";
	div.appendChild(label);
	label.appendChild(checkbox);
	label.appendChild(document.createTextNode(tarea));
	div.appendChild(icono);
	container.appendChild(div);	
	icono.addEventListener('click', eliminarNodos); 
	checkbox.addEventListener("click", chequear);
}
//----------------------------FUNCION PARA ELIMINAR NODOS(TAREAS)----------------.--------//
function eliminarNodos(evt)
{
	evt.target.parentNode.className= "list , checkbox , option animated slideOutDown"; 
  	setTimeout(function(){
    listaTareas.removeChild(evt.target.parentNode);
    
  	}, 1000);   
}
function aniadirTareas(){
	var tarea = document.getElementById("tarea");
	if(tarea.value.length == 0 || /^\s*$/.test(tarea.value))
		alert("Debes ingresar una tarea");
	else
		crearNodos(listaTareas,tarea.value);

	tarea.focus();
	tarea.value="";
}
//---------------------------FUNCION PARA CHEQUEAR LAS TAREAS Y TACHARLAS------------------//
function chequear(evt){
	var check=evt.target.parentNode;
	if(evt.target.checked){
		check.setAttribute("style","text-decoration:line-through");
	}
	else{
		check.setAttribute("style","text-decoration:none");
	}
}