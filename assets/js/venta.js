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
      pet:false
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
      smoke:true,
      pet:false
    }
]

let html=""
for(let sell of sells){

      
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


        html+=`<div id="card" class="card-venta">
        <img src="${sell.src}" alt="imagen" class="imgSell"></img>
        <p class="titulo">${sell.titulo}</p>
        <p class="descripcion">${sell.descripcion}</p>
        <p class="direccion">${sell.direccion}</p>
        <p class="habitaciones">${sell.habitaciones}</p>
        <p class="precio">${sell.precio}</p>
        <p class="smoke">${sell.smoke}</p>
        <p class="pet">${sell.pet}</p>
    
        </div>`

    
   
}
const venta = document.querySelector("#venta") 
venta.innerHTML = html
venta.style.display= "flex"
venta.style.flexWrap="wrap"
venta.style.gap ="10px"
venta.style.paddingTop="10px"
venta.style.justifyContent = "center"