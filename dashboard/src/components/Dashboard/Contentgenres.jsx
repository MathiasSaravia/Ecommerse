import React, { useEffect, useState } from 'react'
import { CategoryItem } from './CategoryItem'

export const Contentgenres = () => {

  const [categorys, setCategorys] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCategorys = async () => {
    try {
    const endpoint = "http://localhost:3050/api/query?q=SELECT name FROM categories";  
    const {ok, data} = await fetch(endpoint).then((res) => res.json());

    ok && setCategorys(data);
    } catch (error) {
      setError(error.message)
    }  
    };
    getCategorys();
  }, [])

  return (
    <div className="col-lg-6 mb-4">						
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">Categorias disponibles</h5>
      </div>
      <div className="card-body">
        <div className="row">

          {
            categorys.map(({name}) => {
              return <CategoryItem key={name} name={name}/>
            })
          }

        </div>
      </div>
    </div>
  </div>
  )
}
