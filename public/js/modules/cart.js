const createAlert = ({type,title,timer}) => {
Swal.fire({
  position: "top-end",
  icon: type ,
  title,
  showConfirmButton: false,
  timer
});
} 

const addProduct = async (id) => {
  const server = "http://localhost:3050";
    try {
      const containerProducts = ("#card-container");
      const outputTotal = ("#show-total");
      const {ok,msg} = await fetch(`${server}/api/cart/add/${id}`,{
        method:"PATCH"
      }).then(res => res.json());
  
      ok && createAlert({type:"success",title:"agregado al carrito",timer:2000})
  
    } catch (error) {
      console.log(error)
    }
  }
