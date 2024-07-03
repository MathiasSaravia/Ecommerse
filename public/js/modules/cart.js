const addProduct = async (id) => {
  const server = "http://localhost:3050";
    try {
      const containerProducts = ("#card-container");
      const outputTotal = ("#show-total");
      const {ok,msg} = await fetch(`${server}/api/cart/add/${id}`,{
        method:"PATCH"
      }).then(res => res.json());
  
      ok && alert("Producto agregado al carrito")
  
    } catch (error) {
      console.log(error)
    }
  }
