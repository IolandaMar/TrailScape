//Mostrar cajas al pulsar boton
function mostrarCaja(numero) {
    var cajas = document.querySelectorAll('.caja');
    cajas.forEach(caja => {
        caja.style.display = 'none';
    });

    var botones = document.querySelectorAll('.boton1');
    botones.forEach(boton => {
        boton.classList.remove('verde');
    });
    var botones = document.querySelectorAll('.boton2');
    botones.forEach(boton => {
        boton.classList.remove('verde');
    });
    var botones = document.querySelectorAll('.boton3');
    botones.forEach(boton => {
        boton.classList.remove('verde');
    });
    var botones = document.querySelectorAll('.boton4');
    botones.forEach(boton => {
        boton.classList.remove('verde');
    });
    var botones = document.querySelectorAll('.boton5');
    botones.forEach(boton => {
        boton.classList.remove('verde');
    });

    var cajaMostrar = document.getElementById('caja' + numero);
    cajaMostrar.style.display = 'block';
    
    var botonPulsado = document.querySelector('.boton' + numero);
    botonPulsado.classList.add('verde');

    console.log('Botón pulsado:', botonPulsado);
}
//POPUP
function mostrarPopup() {
    document.getElementById('popup').style.display = 'block'; 
    document.getElementById('overlay').style.display = 'block'; 
  }

  function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }
  //MODO OSCURO
