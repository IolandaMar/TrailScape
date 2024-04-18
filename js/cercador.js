function barra_busqueda() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const Contenido = [
        {nombre: "Ruta Senderisme", enlace: "rutaSende.html"},
        {nombre: "Ruta Quad", enlace: "rutaQuad.html"},
        {nombre: "Ruta Bici", enlace: "rutaBici.html"}, // Corregit el nom de la ruta
        {nombre: "Usuari", enlace: "configUsuari.html"}, 
        {nombre: "Contacte", enlace: "contacte.html"},    
    ];
  
    const Resultado = document.getElementById('resultadoBusqueda');
    Resultado.innerHTML = '';
    Resultado.style.width = '230px';
    Resultado.style.position = 'fixed';
    Resultado.style.transform = 'translateY(10%)';
    Resultado.style.right = '60px';
    Resultado.style.borderBottomLeftRadius = '10px';
    Resultado.style.borderBottomRightRadius = '10px';
    Resultado.style.color = 'white';
    Resultado.style.overflow = 'auto';
    Resultado.style.backgroundColor = 'black';
    Resultado.style.padding = '20px';
    Resultado.style.borderRadius = '10px';
    Resultado.style.zIndex = '50';

    document.addEventListener('click', function(event) {
        if (!Resultado.contains(event.target) && event.target.id !== 'searchInput') {
            Resultado.innerHTML = '';
        }
    });

    const Contenido_Existente = Contenido.filter(item => item.nombre.toLowerCase().includes(query));
  
    if (query !== '' && Contenido_Existente.length === 0) {
        noexiste();
    } else if (query !== '') {
        const Lista_Resultados = document.createElement('ul');
        Lista_Resultados.style.listStyleType = 'none';
        Lista_Resultados.style.padding = '0';
        Lista_Resultados.style.scrollBehavior = 'initial';
        Lista_Resultados.style.scrollSnapAlign = 'center';
        Lista_Resultados.style.maxHeight = '300px';
        Lista_Resultados.style.overflow = 'auto';
  
        Contenido_Existente.forEach(item => {
            const Listado = document.createElement('li');
            Listado.style.marginTop = '20px';
            const EnlaceHTML = document.createElement('a');
            EnlaceHTML.href = item.enlace;
            EnlaceHTML.textContent = item.nombre;
            EnlaceHTML.style.color = 'white';
            EnlaceHTML.style.textDecoration = 'none';
            Listado.appendChild(EnlaceHTML);
            Lista_Resultados.appendChild(Listado);
        });
        Resultado.appendChild(Lista_Resultados);
    }
}

function Enter(event) {
    if (event.key === "Enter") {
        barra_busqueda();
    }
}
