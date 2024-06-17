import React, { useEffect, useState } from 'react'
import { ContentData } from './ContentData'

export const Contentrowmovies = ({ data }) => {

  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  
    const getMetrics = async () => {
    try {
    const endpoint = "http://localhost:3050/api/metrics";  
    const {ok, data} = await fetch(endpoint).then(res => res.json());

    ok && setMetrics(data)
    } catch (error) {
      setError(error.message)
    }  

    };

    getMetrics();
  }, [])

  return (
    <div className="row">

      {
        metrics
          .map((el, i) => {
            return <ContentData key={i} title={el.title} color={el.color} number={el.digit} icon={el.icon} />
          })
      }

    </div>
  )
}
