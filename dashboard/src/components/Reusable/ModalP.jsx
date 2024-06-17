import React, { useEffect, useState } from 'react'

export const ModalP = ({active = false ,onClose}) => {

    const [lastMovie,setLastMovie] = useState([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const getLastMovie = async () => {
      try {
      const endpoint = "http://localhost:3050/api/query?q=SELECT * FROM products WHERE createdAt = (SELECT MAX(createdAt) FROM products) LIMIT 1";  
      const {ok, data:[product]} = await fetch(endpoint).then((res) => res.json());
  
      ok && setLastMovie(product);
      } catch (error) {
        setError(error.message)
      }  
      };
      getLastMovie();
    }, [])

  return (
    <div className={`modal fade ${active ? "show" : null}`} style={{display: active ? "block" : null}} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
        <h1 className="modal-title fs-3" id="exampleModalLabel">{lastMovie.title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
        <h5>PRECIO: {lastMovie.price}$</h5>
        <h5>DESCUENTO: {lastMovie.discount}%</h5>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  </div>
  )
}
