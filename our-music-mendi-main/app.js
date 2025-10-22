const tituloCancion = document.querySelector('.reproductor-musica h1');
const nombreArtista = document.querySelector('.reproductor-musica p');

const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

const inconoControl = document.getElementById('iconoControl');
const botonReproducirPausar = document.querySelector('.controles button.boton-reproducir-pausar');

const botonAtras = document.querySelector('.controles button.atras');
const botonAdelante = document.querySelector('.controles button.adelante');

const canciones = [
    {
      titulo: "Sexo Virtual",
      nombre: "Rauw Alejandro",
      fuente: "music/sexo-virtual.mp3"
    },
    {
      titulo: "Ojitos Lindos",
      nombre: "Bad Bunny",
      fuente: "music/ojitos-lindos.mp3"
    },
    {
      titulo: "TRELLAS",
      nombre: "Bad Bunny",
      fuente: "music/trellas.mp3"
    },
    {
      titulo: "Xplicit Content",
      nombre: "RMAND",
      fuente: "music/xplicit-content.mp3"
    },
    {
      titulo: "SORRY PAPI",
      nombre: "Bad Bunny",
      fuente: "music/sorry-papi.mp3"
    },
    {
      titulo: "UWAIE",
      nombre: "Kapo",
      fuente: "music/uwaie.mp3"
    },
    {
      titulo: "Otro Atardecer",
      nombre: "Bad Bunny",
      fuente: "music/otro-atardecer.mp3"
    },
    {
      titulo: "A Tu Merced",
      nombre: "Bad Bunny",
      fuente: "music/a-tu-merced.mp3"
    },
    {
      titulo: "Congratulations",
      nombre: "Mac Miller",
      fuente: "music/congratulation.mp3"
    },
    {
      titulo: "Igual Que Un Ángel",
      nombre: "Kali Uchis",
      fuente: "music/igual-que-un-angel.mp3"
    },
    {
      titulo: "Estrellas",
      nombre: "RMAND",
      fuente: "music/estrellas.mp3"
    },
    {
      titulo: "Algo Mágico",
      nombre: "Rauw Alejandro",
      fuente: "music/algo-magico.mp3"
    },
    {
      titulo: "BESO",
      nombre: "ROSALÍA",
      fuente: "music/beso.mp3"
    },
    {
      titulo: "MUSEO",
      nombre: "Rauw Alejandro",
      fuente: "music/museo.mp3"
    },
    {
      titulo: "Enséñame a Bailar",
      nombre: "Bad Bunny",
      fuente: "music/ensename-a-bailar.mp3"
    },
    {
      titulo: "A Mí",
      nombre: "Rels B",
      fuente: "music/a-mi.mp3"
    },
    {
      titulo: "Aquel Nap ZzZz",
      nombre: "Rauw Alejandro",
      fuente: "music/aquel-nap-zzzz.mp3"
    },
    {
      titulo: "Desenfocao'",
      nombre: "Rauw Alejandro",
      fuente: "music/desenfocao.mp3"
    },
    {
      titulo: "WELTiTA",
      nombre: "Bad Bunny",
      fuente: "music/weltita.mp3"
    },
    {
      titulo: "¿Y Eso?",
      nombre: "Rauw Alejandro",
      fuente: "music/y-eso.mp3"
    },
    {
      titulo: "Cosa Guapa",
      nombre: "Rauw Alejandro",
      fuente: "music/cosa-guapa.mp3"
    }
  ];  

let indiceCancionActual = 0;

function actualizarInfoCancion(){
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    nombreArtista.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion.addEventListener('loadeddata',function(){});
};

cancion.addEventListener('loadedmetadata', function(){
    progreso.max = cancion.duration;
    progreso.value = cancion.currentTime;
});

botonReproducirPausar.addEventListener('click', reproducirPausar);

function reproducirPausar(){
    if(cancion.paused){
        reproducirCancion();
    } else {
        pausarCancion();
    }
};

function reproducirCancion(){
    cancion.play();
    inconoControl.classList.add('bi-pause-fill')
    inconoControl.classList.remove('bi-play-fill')
}

function pausarCancion(){
    cancion.pause();
    inconoControl.classList.remove('bi-pause-fill')
    inconoControl.classList.add('bi-play-fill')
}

cancion.addEventListener('timeupdate', function(){
    if(!cancion.paused){
        progreso.value = cancion.currentTime;
    }
});

progreso.addEventListener('input', function(){
    cancion.currentTime = progreso.value;
});

// progreso.addEventListener('change', ()=>{
//     reproducirCancion();
// });

botonAdelante.addEventListener('click', function(){
    indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
});

botonAtras.addEventListener('click', function(){
    indiceCancionActual = (indiceCancionActual - 1 + canciones.length) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
});

actualizarInfoCancion();
