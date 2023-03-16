// seleccionar variables con queryselector
const input = document.querySelector('#write-a-task');
const  buttonSend = document.querySelector('#button-send');
const containerList = document.querySelector('#container-list');
const form = document.querySelector('#form');
// seleccionar todos los spans
const totalCount = document.querySelector('#total-count');
const completedCount = document.querySelector('#completed-count');
const incompletedCount = document.querySelector('#incompleted-count');

// hacer funcion de local storage para almacenar las tareas
const guardarTareas = ( ) => {
  containerList.innerHTML = localStorage.getItem('tareasGuardadas')
}
guardarTareas( );
// crear contadores de tareas para los botones de Total, completas e incompletas :

// crear una funcion que seleccione la lista y cuente todos los hijos
const cuentaTotal= ( ) => {
	const howMany = document.querySelector('#container-list').children.length;
	totalCount.innerHTML = howMany;
};
// para marcar todos los que estan completados seleccionar todos los que tienen la linea en el medio
const cuentaDeCompletos= ( ) => {
	const howMany = document.querySelectorAll('.line-through').length;
	completedCount.innerHTML = howMany;
};
// para que seleccione en la lista los que no tienen la linea en el medio
const cuentaDeIncompletos = ( ) => {
	const howMany = document.querySelectorAll('#container-list li:not(.line-through)').length;
	incompletedCount.textContent = howMany;
};

// para invocar todas las funciones con una sola
const FuncionesDeContadores =  ( ) => {
	cuentaTotal( );
	cuentaDeCompletos( );
	cuentaDeIncompletos( );
};


// hacer una funcion  para crear las tareas y dentro un objeto que tenga el valor del input
form.addEventListener('submit', e =>{
    e.preventDefault( );
    // crear con el elemento li los botones de borrar y completado

    if(input.value==='') alert('necesita escribir una tarea')

    if (input.value !== '') {
        // para crear el elemento li y no se suba contenido vacio
    const li = document.createElement('li');
        // código para crear el contenido del li
    li.innerHTML= `
 <button class="button-delete">
<svg class="button-delete-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
<path class="button-delete-svg"fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
</svg>
</button>
<p class="content-of-task"> ${input.value}</p>
<button class="button-fine">
<svg class="button-fine-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
<path "button-fine-svg" d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
</button>`
containerList.append(li);
form.reset();
}
FuncionesDeContadores( )
localStorage.setItem('tareasGuardadas',containerList.innerHTML);
});



// crear eventos a los botones, el de borrar y el de marcar la tarea lista
 containerList.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.classList.contains('button-delete')) {
      e.target.parentElement.remove();
    FuncionesDeContadores( );
    localStorage.setItem('tareasGuardadas',containerList.innerHTML); 

    }
//   para marcar la tarea lista
// se hace un if del boton fine
    if (e.target.classList.contains('button-fine')) {
    // se hace una variable del boton y que sea igual al valor del evento para que pueda cambiar en el html
      const buttonFine = e.target;
    //   se iguala el li a que es e; elemento padre del boton
      const li = buttonFine.parentElement;
//   despues de anadir en el css las propiedades para hacer que cambie el li se hace un if para poner y quitar las propiedades con remove y add
      if (li.classList.contains('line-through')) {
        buttonFine.classList.remove('active');
        li.classList.remove('line-through');
      } else {
        buttonFine.classList.add('active');
        li.classList.add('line-through');
        FuncionesDeContadores( );
        localStorage.setItem('tareasGuardadas',containerList.innerHTML);

      }
      FuncionesDeContadores();
      localStorage.setItem('tareasGuardadas',containerList.innerHTML);
    }
    
});



