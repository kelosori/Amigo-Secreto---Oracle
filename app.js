// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de amigos a revisar//

let amigos = [];



function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = (input.value || '').trim();

  // Validación
  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    input.focus();
    return;
  }

  // Actualizar array y limpiar campo
  amigos.push(nombre);
  input.value = '';
  input.focus();

  // Refrescar la lista en pantalla
  actualizarListaAmigos();
}


// Exponer al ámbito global (el HTML llama onclick="agregarAmigo()")
window.agregarAmigo = agregarAmigo;



// Actualiza la lista visible de amigos en el <ul id="listaAmigos">

function actualizarListaAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // 1) Limpiar contenido anterior

  // 2) Recorrer el arreglo 'amigos' y crear <li> por cada nombre
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i]; // usar textContent evita inyectar HTML
    lista.appendChild(li);      // 3) Agregar el <li> a la lista
  }
}


function sortearAmigo() {
  // 1) Validación de nombre
  if (amigos.length === 0) {
    alert('Agrega al menos un nombre antes de sortear.');
    return;
  }

  // 2) Índice aleatorio
  const indice = Math.floor(Math.random() * amigos.length);

  // 3) Nombre sorteado
  const elegido = amigos[indice];

  // 4) Mostrar resultado en <ul id="resultado">
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li> Tu amigo secreto es: <strong>${elegido}</strong></li>`;
}

// Si el botón usa onclick en el HTML:
window.sortearAmigo = sortearAmigo;