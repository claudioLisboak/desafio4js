const alquileres = [
    {  
      id:1,
      src:"./assets/img/v1.jpeg",
      titulo:"apartamento de lujo en zona exclusiva",
      descripcion:"este departamento de lujo esta ubicado en una zona exlusiva",
      direccion:"123 lane,prestige suburb,CA 45678",
      habitaciones:"4 habitaciones | 4 baños",
      precio:"$5.000",
      smoke:false,
      pet:false
    },
    {  
      id:2,
      src:"./assets/img/v1.jpeg",
      titulo:"apartamento de lujo en zona exclusiva",
      descripcion:"este departamento de lujo esta ubicado en una zona exlusiva",
      direccion:"123 lane,prestige suburb,CA 45678",
      habitaciones:"4 habitaciones | 4 baños",
      precio:"$5.000",
      smoke:false,
      pet:false
    },
    {  
      id:3,
      src:"./assets/img/v1.jpeg",
      titulo:"apartamento de lujo en zona exclusiva",
      descripcion:"este departamento de lujo esta ubicado en una zona exlusiva",
      direccion:"123 lane,prestige suburb,CA 45678",
      habitaciones:"4 habitaciones | 4 baños",
      precio:"$5.000",
      smoke:false,
      pet:false
    },
    {  
      id:4,
      src:"./assets/img/v1.jpeg",
      titulo:"apartamento de lujo en zona exclusiva",
      descripcion:"este departamento de lujo esta ubicado en una zona exlusiva",
      direccion:"123 lane,prestige suburb,CA 45678",
      habitaciones:"4 habitaciones | 4 baños",
      precio:"$5.000",
      smoke:false,
      pet:false
    },
    {  
      id:5,
      src:"./assets/img/v1.jpeg",
      titulo:"apartamento de lujo en zona exclusiva",
      descripcion:"este departamento de lujo esta ubicado en una zona exlusiva",
      direccion:"123 lane,prestige suburb,CA 45678",
      habitaciones:"4 habitaciones | 4 baños",
      precio:"$5.000",
      smoke:false,
      pet:false
      },
      {  
        id:6,
        src:"./assets/img/v1.jpeg",
        titulo:"apartamento de lujo en zona exclusiva",
        descripcion:"este departamento de lujo esta ubicado en una zona exlusiva",
        direccion:"123 lane,prestige suburb,CA 45678",
        habitaciones:"4 habitaciones | 4 baños",
        precio:"$5.000",
        smoke:true,
        pet:false
      },
    
]
let html2=""
for(let alquiler of alquileres){

    if (alquiler.smoke === true) {
        alquiler.smoke = `<p class="smoke1"> Permitido fumar </p>`;
      } else {
        alquiler.smoke = `<p class="smoke0"> No se permite fumar</p>`;
      }
    
      if (alquiler.pet === true) {
        alquiler.pet = `<p class="pet1"> Mascotas permitidas</p>`;
      } else {
        alquiler.pet = `<p class="pet0"> No se permiten mascotas</p>`;
      }
        html2+=`<div id="card2" class="card-alquiler">
        <img src="${alquiler.src}" alt="imagen" class="imgRent"></img>
        <p class="titulo">${alquiler.titulo}</p>
        <p class="descripcion">${alquiler.descripcion}</p>
        <p class="direccion">${alquiler.direccion}</p>
        <p class="habitaciones">${alquiler.habitaciones}</p>
        <p class="precio">${alquiler.precio}</p>
        <p class="smoke">${alquiler.smoke}</p>
        <p class="pet">${alquiler.pet}</p>
        </div>`

}
const alquiler = document.querySelector("#alquiler2") 
alquiler.innerHTML = html2
alquiler.style.display= "flex"
alquiler.style.flexWrap="wrap"
alquiler.style.gap ="10px"
alquiler.style.paddingTop="20px"
alquiler.style.justifyContent = "center"

