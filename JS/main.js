var presupuesto = prompt("ingresa presupuesto");
const frm = document.querySelector(".add");
const contLista = document.querySelector(".contenedorLista");
const txtnombre = document.getElementById('txtnombre');
const txtcantidad = document.getElementById('txtcantidad');
const contServicio = document.querySelector(".contenedorServicio");

var cont = 0;
if(presupuesto > 0){
  contLista.innerHTML += `<div class="contDatos contPresupuesto">
                          <p>Presupuesto: <span>${presupuesto}</span></p>
                        </div>
                        <div class="contDatos contRestante" id="restante">
                          <p>Restante: <span class = "Res">${presupuesto}</span></p>
                        </div>`;
                        
  frm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const res = document.querySelector(".Res");
        let cantidad = parseInt(res.textContent) - parseInt (txtcantidad.value);
        let mitad = presupuesto * 0.5;
        let mitad1 = presupuesto -(presupuesto * 0.75);
        res.innerHTML = `${cantidad}`;
        contLista.innerHTML += `<div class="elemento" id ="product${cont++}"><p>${txtnombre.value}</p><span>$ ${txtcantidad.value}</span></div>`;
        if(cantidad <= mitad){
          document.getElementById("restante").style.backgroundColor ="rgb(255, 245, 99)";
          if(cantidad <= mitad1){
            document.getElementById("restante").style.backgroundColor ="rgb(241, 60, 36)";

          }
        }
  })
}else{
   alert("no hay presupesto");
}