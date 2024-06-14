import React from 'react'
import PropTypes from 'prop-types'
import { TableHead } from '../components/Products/TableHead'
import { TableRow } from '../components/Products/TableRow'

const Products = () => {

  const movies = [{
    title:"Billy",
    duracion:123,
    rating:5,
    genre:["comedia","drama"],
    award:1
  },
  {
  title:"Alicia en el pais de las maravillas",
  duracion:142,
  rating:4.8,
  genre:["comedia","drama"],
  award:3
}
]
const dataTableHead = ["Titulo","Duracion","Rating","Genero","Premios"]

  return (
    <table className="table">
    <TableHead items={dataTableHead}/>

       <tbody>
        {movies.map((movie,i)=> 
            <TableRow key={i} {...movie}/>
          )
        }
        
       </tbody>

       
    </table>
  )
}

Products.propTypes = {}

export default Products