  function mostrarNombre(id){
    letras=document.getElementsByClassName('letra');
    letras[id].classList.add('letra-color');
    nombres=document.getElementsByClassName('letra-nombre');
    nombres[id].classList.add('activo');
    nombres[id].classList.remove('inactivo');
  }

  function eliminarNombre(id){
    letras=document.getElementsByClassName('letra');
    letras[id].classList.remove('letra-color');
    nombres=document.getElementsByClassName('letra-nombre');
    nombres[id].classList.add('inactivo');
    nombres[id].classList.remove('activo');
  }

  function generarNombre(){
    nombres=document.getElementsByClassName('letra-nombre');
    nombreFrat = "";
    for (var i = 0; i < 3; i++) {
      letterIndex=Math.floor(Math.random() * 24);
      nombreFrat+= String(nombres[letterIndex].innerHTML) + " ";
    }
    document.getElementById('nombreFrat').innerHTML=nombreFrat;
  }
