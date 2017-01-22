function crearNodos(container,tarea)
{
	var div=document.createElement('div');
	div.className="checkbox , list";
	var icono=document.createElement('i');
	icono.className="fa fa-trash-o icono";
	var label=document.createElement('label');
	var checkbox=document.createElement('input');
	checkbox.type = "checkbox";
	div.appendChild(label);
	label.appendChild(checkbox);
	label.appendChild(document.createTextNode(tarea));
	label.appendChild(icono), container.appendChild(div);	
	icono.addEventListener('click', eliminarNodos); 
	checkbox.addEventListener("click", chequear)
}
function aniadirTareas()
{
	var tarea = document.getElementById("tarea");
	if(tarea.value.length == 0 || /^\s*$/.test(tarea.value)){
		alert("Debes ingresar una tarea");
	}
	else
	{
		crearNodos(listaTareas,tarea.value);
	}
	tarea = document.getElementById("tarea").value="";
}
function eliminarNodos(evt)
{
	var hijo=evt.target.parentNode.parentNode
	hijo.parentNode.removeChild(hijo);
	//console.log(listaTareas.children);
}
function chequear(evt)
{
	var check=evt.target.parentNode;
	if(evt.target.checked)
		check.setAttribute("style","text-decoration:line-through;");
	else
		check.setAttribute("style","text-decoration:none;");
}