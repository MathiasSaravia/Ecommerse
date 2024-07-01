const $ = (element) => document.querySelector(element)
const cutText = (text = "",long) => text.substring(0,long);
const convertMoney = (num = 0) => num.toLocaleString({
    currency:"ARS",
    style:"currency",
}) 
const server = "http://localhost:3050";
let productsCart = [];
const getShoppingCart = () => {
  return fetch(`${server}/api/cart`).then(res => res.json());
};

const getCartStructure = (p) => {
  return `
        <div class="card col-12 col-lg-10 my-5">
        <div class="card-body-cart row">
    
      <img class="col-4" style="object-fit: contain; height: 200px"  src="${p.imagePrincipal}" alt="">
      <div class="col-8 position-relative">
      <button class="fs-5 p-0 border-0 bg-transparent position-absolute text-danger " style="top:-3px;right:10px" onClick="removeProductCart(${p.id})"><i style="padding:2px" class="rounded-circle btn-clear far fa-times-circle p-2"></i></button>

      <h5 class="card-title p-2">${p.title}</h5>
      <p class="card-text">${cutText(p.description,80)}</p>
      <p class="d-flex align-items-center gap-2">
        <label for="">Cantidad </label>
        <button class="btn btn-light" onclick="lessProduct(${p.id})">-</button>
        <output style="width:50px"  class="form-control text-center">${p.orderproducts.quantity}</output>
        <button class="btn btn-light p-2" onclick="moreProduct(${p.id})">+</button>
        <div>
        <span class="pe-4">$${convertMoney(p.price)}</span>
        <a href="#" class="btn btn-outline-dark">Ver más</a>
        </div>
        
           </p>
         </div>
       </div>
      </div>`
};

const paintCartView = (products = [] , elementContainerProducts) => {
  elementContainerProducts.innerHTML = "";
  productsCart.forEach((p) => {
    elementContainerProducts.innerHTML += getCartStructure(p)
})
};

const processReloadCart = async (server, containerProducts,outputTotal) => {
  const {
    ok,
    data: {total ,products },
  } = await getShoppingCart(server);

  ok && (productsCart = products);

  paintCartView(productsCart, containerProducts);
  outputTotal.innerHTML = total
};

window.addEventListener("load", async () => {
  const containerProducts = $("#card-container");
  const btnClearCart = $("#clear-cart");
  const btnBuy = $("#btn-buy");
  const outputTotal = $("#show-total");
    try {

      processReloadCart(server, containerProducts , outputTotal);

    } catch (error) {};
    btnClearCart.addEventListener("click", async () => {
      try{
        const {ok,msg} = await fetch(`${server}/api/cart/clear`,{
        method:"PATCH"
      }).then(res => res.json());

      if(ok){
        processReloadCart(server, containerProducts);
      }
  
    } catch(error){
     console.log(error)
    }
   
    })
});
lessProduct = async (id) => {
  try {
    const outputTotal = $("#show-total");
    const containerProducts = $("#card-container");
    const {ok,msg} = await fetch(`${server}/api/cart/less/${id}`,{
      method:"PATCH"
    }).then(res => res.json());

    if(ok){
      processReloadCart(server, containerProducts, outputTotal);
    }

  } catch (error) {
    console.log(error)
  }
};

moreProduct = async (id) => {
  try {
    const containerProducts = $("#card-container");
    const outputTotal = $("#show-total");
    const {ok,msg} = await fetch(`${server}/api/cart/more/${id}`,{
      method:"PATCH"
    }).then(res => res.json());

    if(ok){
      processReloadCart(server, containerProducts, outputTotal);
    }

  } catch (error) {
    console.log(error)
  }
}

const removeProductCart = async (id) => {
  try {
    const containerProducts = $("#card-container");
    const outputTotal = $("#show-total");
    const {ok,msg} = await fetch(`${server}/api/cart/remove/${id}`,{
      method:"PATCH"
    }).then(res => res.json());

    if(ok){
      processReloadCart(server, containerProducts, outputTotal);
    }

  } catch (error) {
    console.log(error)
  }
}

