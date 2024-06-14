import React from 'react'
import { Topbar } from './Topbar'
import { Footer } from './Footer'
import { TableRow } from './TableRow'
import { TableHead } from './TableHead'
import { Contentrowtop } from './Contentrowtop'


export const Contentwrapper = () => {
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
    <div id="content-wrapper" className="d-flex flex-column">
       <div id="content">
      <Topbar/>
      <Contentrowtop/>

      <table class="table">
        <TableHead items={dataTableHead}/>

           <tbody>
            {movies.map((movie,i)=> 
                <TableRow key={i} {...movie}/>
              )
            }
            
           </tbody>

           
        </table>

      <Footer/>
    </div>
    </div>
  )
}
