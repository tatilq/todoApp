//icoId.addEventListener("click", eliminar, false); 

function agregar(container,tarea)
{
	//Creacion de un Nodo div con clase checkbox
	var div=document.createElement('div');
	div.id="idDiv";
	div.className="checkbox , list";

	//Creacion de un nodo iono
	var icono=document.createElement('i');
	icono.className="fa fa-trash-o ";
	icono.id="idIco";
	
	//Creacion de un Nodo label
	var label=document.createElement('label');
	label.id="idLbl"
	//Creacion de un Nodo checkbox
	var checkbox=document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.id="idchk";

	//Insercion de los Nodos 
	div.appendChild(label);
	label.appendChild(checkbox);
	label.appendChild(document.createTextNode(tarea));
	label.appendChild(icono);
	container.appendChild(div);	
	//eventos addlistener
	//chkId.addEventListener('click', eliminar(), false); 
}
function eliminar()
{
  var nodos=document.getElementById('idDiv');
  nodos.parentNode.removeChild(nodos);
}
function añadirTareas()
{
	var tarea = document.getElementById("tarea").value;
	if(tarea !=""){
		agregar(listaTareas,tarea);
	}
}

/*
if (idchk.checked==true) 
{
	idLbl.setAttribute("style","text-decoration:line-through;");
}
//
*/
