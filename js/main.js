function agregar(container,tarea)
{
	var div=document.createElement('div');
	div.id="id";
	div.className="checkbox , list";
	var label=document.createElement('label');
	var checkbox=document.createElement('input');
	checkbox.type = "checkbox";
	div.appendChild(label);
	label.appendChild(checkbox);
	label.appendChild(document.createTextNode(tarea));
	container.appendChild(div);	
}
function eliminar()
{
  var nodos=document.getElementById('id');
  nodos.parentNode.removeChild(nodos);
}
function añadirTareas()
{
	var tarea = document.getElementById("tarea").value;
	if(tarea !=""){
		agregar(listaTareas,tarea);
	}
}