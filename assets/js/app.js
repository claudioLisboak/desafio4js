const sells = [
    {  
      id:1,
      src:"./assets/img/v1.jpeg",
      titulo:"Apartamento de lujo en zona exclusiva",
      descripcion:"este departamento de lujo esta ubicado en una zona exlusiva",
      direccion:"123 lane,prestige suburb,CA 45678",
      habitaciones:"4 habitaciones | 4 baños",
      precio:"$5.000",
      smoke:false,
      pet:true
    },
    {  
      id:2,
      src:"./assets/img/v1.jpeg",
      titulo:"Apartamento de lujo en zona exclusiva",
      descripcion:"este departamento de lujo esta ubicado en una zona exlusiva",
      direccion:"123 lane,prestige suburb,CA 45678",
      habitaciones:"4 habitaciones | 4 baños",
      precio:"$5.000",
      smoke:true,
      pet:false
    },
    {  
      id:3,
      src:"./assets/img/v1.jpeg",
      titulo:"Apartamento de lujo en zona exclusiva",
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
      titulo:"Apartamento de lujo en zona exclusiva",
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
      titulo:"Apartamento de lujo en zona exclusiva",
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
      titulo:"Apartamento de lujo en zona exclusiva",
      descripcion:"este departamento de lujo esta ubicado en una zona exlusiva",
      direccion:"123 lane,prestige suburb,CA 45678",
      habitaciones:"4 habitaciones | 4 baños",
      precio:"$5.000",
      smoke:false,
      pet:false
    }
]

let html=""
for(let sell of sells){
    if(sell.id <=3){

        if (sell.smoke === true) {
            sell.smoke = `<p class="smoke1">Permitido fumar </p>`;
          } else {
            sell.smoke = `<p class="smoke0"> No se permite fumar</p>`;
          }
        
          if (sell.pet === true) {
            sell.pet = `<p class="pet1"> Mascotas permitidas</p>`;
          } else {
            sell.pet = `<p class="pet0"> No se permiten mascotas</p>`;
          }

        html+=`<div id="card" class="venta">
        <img src="${sell.src}" alt="imagen" class="imgSell"></img>
        <p class="titulo">${sell.titulo}</p>
        <p class="descripcion">${sell.descripcion}</p>
        <p class="direccion">${sell.direccion}</p>
        <p class="habitaciones">${sell.habitaciones}</p>
        <p class="precio">${sell.precio}</p>
        <p>${sell.smoke}</p>
        <p>${sell.pet}</p>
        </div>`

    }
   
}
const venta = document.querySelector("#venta") 
venta.innerHTML = html
venta.style.display= "flex"
venta.style.gap ="10px"
venta.style.paddingTop="10px"
venta.style.justifyContent = "center"

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
      smoke:true,
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
      pet:true
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
        smoke:false,
        pet:false
      },
    
]
let html2=""
for(let alquiler of alquileres){
    if(alquiler.id <=3){
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
        html2+=`<div id="card2" class="alquiler">
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
    
}
const alquiler = document.querySelector("#alquiler") 
alquiler.innerHTML = html2
alquiler.style.display= "flex"
alquiler.style.gap ="10px"
alquiler.style.paddingTop="10px"
alquiler.style.justifyContent = "center"


