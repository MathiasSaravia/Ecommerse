import React, { useEffect, useState } from 'react'
import mandolorian from '../../assets/images/mandalorian.jpg'

export const Contentlastmovie = () => {

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
        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle</a>
      </div>
    </div>
  </div>
  )
}
