import React, { useEffect, useState } from 'react'
import { ModalP } from '../Reusable/ModalP';

export const Contentlastmovie = () => {

  const [lastMovie,setLastMovie] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  }

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
    <div className="col-lg-6 mb-4">
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto agregado</h5>
      </div>
      <div className="card-body">
        <figure className="text-center">
          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "40rem", height: "25rem" , objectFit: "contain"}} src={`http://localhost:3050/api/product/${lastMovie.imagePrincipal}`}  alt=" Star Wars - Mandalorian " />
        </figure>
        <p>{lastMovie.description}</p>
        <button className="btn btn-danger"  rel="nofollow" onClick={() => setShowModal(true)}>Ver mas</button>
        <ModalP active={showModal} onClose={handleCloseModal}/>
      </div>
    </div>
  </div>
  )
}
