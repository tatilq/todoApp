//icoId.addEventListener("click", eliminar, false); 

function agregar(container,tarea)
{
	//Creacion de un Nodo div con clase checkbox
	var div=document.createElement('div');
	//div.id="idDiv"+listaTareas.children.length;
	div.className="checkbox , list";

	//Creacion de un nodo iono
	var icono=document.createElement('i');
	icono.className="fa fa-trash-o icono";
	//icono.id="idIco"+listaTareas.children.length;
	
	//Creacion de un Nodo label
	var label=document.createElement('label');
	//label.id="idLbl"+listaTareas.children.length
	//Creacion de un Nodo checkbox
	var checkbox=document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.id="idchk"+listaTareas.children.length;
	
	//Insercion de los Nodos 
	div.appendChild(label);
	label.appendChild(checkbox);
	label.appendChild(document.createTextNode(tarea));
	label.appendChild(icono);
	container.appendChild(div);	
	//eventos addlistener
	icono.addEventListener('click', eliminar); 
	//checkbox.addEventListener('click', chequearTarea); 
}
function eliminar(evt)
{

	//console.log(listaTareas.target);
	//console.log(evt.target.parentNode);
	evt.target.parentNode.parentNode.parentNode.removeChild(evt.target.parentNode.parentNode);
  //var x = event.target.tagName;
}
function añadirTareas()
{
	var tarea = document.getElementById("tarea").value;
	if(tarea !=""){
		agregar(listaTareas,tarea);
	}
	tarea = document.getElementById("tarea").value="";
}

function chequearTarea(evt)
{
	console.log(evt.target.parentNode);

	/*if (idhk.checked==true) 
		{
			idLbl.setAttribute("style","text-decoration:line-through;");
		}
	}
	*/
}