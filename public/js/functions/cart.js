/* <!-- COURSE TEMPLATE CARD -->
<div class="card col-12 col-lg-10 my-5">
  <div class="card-body-cart row">
    
    <img class="col-4" style="object-fit: contain;" src="https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png" alt="">
    <div class="col-8 position-relative">
      <button class="fs-5 p-0 border-0 bg-transparent position-absolute text-danger " style="top:-3px;right:10px"><i style="padding:2px" class="rounded-circle btn-clear far fa-times-circle"></i></button>

      <h5 class="card-title p-2">Special title treatment</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem!</p>
      <p class="d-flex align-items-center gap-2">
        <label for="">Cantidad </label>
        <button class="btn btn-light">-</button>
        <output style="width:50px"  class="form-control text-center">
          1
        </output>
        <button class="btn btn-light p-2">+</button>
        <a href="#" class="btn btn-outline-dark">Ver más</a>
      </p>
    </div>
 
  </div>
</div> */

const $ = (element) => document.querySelector(element)
const containerProducts = $("#card-container");
const btnClearCart = $("#clear-cart");
const btnBuy = $("#btn-buy");
const cutText = (text = "",long) => text.substring(0,long);
const convertMoney = (num = 0) => num.toLocaleString({
    currency:"ARS",
    style:"currency",
}) 

const outputTotal = $("#show-total");
const server = "http://localhost:3050";
let productsCart = [];

window.addEventListener("load", async () => {
    try {
    const {ok,isCreate,data:{products}} = await fetch(`${server}/api/cart`).then(res => res.json());
    ok && (productsCart = products);
    productsCart.forEach((p) => {
        containerProducts.innerHTML += `
        <div class="card col-12 col-lg-10 my-5">
        <div class="card-body-cart row">
    
      <img class="col-4" style="object-fit: cover ; height: 200px" src="${p.imagePrincipal}" alt="">
      <div class="col-8 position-relative">
      <button class="fs-5 p-0 border-0 bg-transparent position-absolute text-danger " style="top:-3px;right:10px"><i style="padding:2px" class="rounded-circle btn-clear far fa-times-circle"></i></button>

      <h5 class="card-title p-2">${p.title}</h5>
      <p class="card-text">${cutText(p.description,80)}</p>
      <p class="d-flex align-items-center gap-2">
        <label for="">Cantidad </label>
        <button class="btn btn-light">-</button>
        <output style="width:50px"  class="form-control text-center">
          1
        </output>
        <button class="btn btn-light p-2">+</button>
        <a href="#" class="btn btn-outline-dark">Ver más</a>
      </p>
    </div>
  </div>
</div>`

    })
    } catch (error) {
        
    }
})