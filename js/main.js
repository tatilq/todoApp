var listaTareas = document.getElementById("listaTareas");
function crearNodos(container,tarea)
{    
	//style="width:100px; height:115px; overflow: scroll;"
	var div=document.createElement('div');
	div.className="list , checkbox , option animated zoomInDown";
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
function aniadirTareas()
{
	var tarea = document.getElementById("tarea");
	if(tarea.value.length == 0 || /^\s*$/.test(tarea.value))
		alert("Debes ingresar una tarea");
	else
		crearNodos(listaTareas,tarea.value);
               
	tarea.focus();
	tarea.value="";

}
function eliminarNodos(evt)
{
	evt.target.parentNode.className= "list , checkbox , animated zoomOutDown"; 
  	setTimeout(function(){
    listaTareas.removeChild(evt.target.parentNode);  
  	}, 1000);   
}
function chequear(evt)
{
	var check=evt.target.parentNode;
	if(evt.target.checked)
		check.setAttribute("style","text-decoration:line-through");
	else
		check.setAttribute("style","text-decoration:none");
}