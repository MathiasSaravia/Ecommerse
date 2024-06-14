import React from 'react'
import { Contentrowmovies } from './Contentrowmovies'
import { Contentlastmovie } from './Contentlastmovie'
import { Contentgenres } from './Contentgenres'

export const Contentrowtop = () => {
  const metrics = [{
    show:true,
    title:"Movies in Data Base",
    color:"primary",
    numbre:21,
    icon:"film"
  },
  {
    show:true,
    title:"Total awards",
    color:"success",
    numbre:79,
    icon:"award"
  },
  {
    show:true,
    title:"Actors quantity",
    color:"warning",
    numbre:49,
    icon:"user"
  }]
  return (

       <div className="container-fluid">
       <div className="d-sm-flex align-items-center justify-content-between mb-4">
         <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
       </div>
     
       {/* <!-- Content Row Movies--> */}
      <Contentrowmovies data={metrics}/>
     {/*   <!-- End movies in Data Base --> */}
       
 
       {/* <!-- Content Row Last Movie in Data Base --> */}
       <div className="row">
         {/* <!-- Last Movie in DB --> */}
       <Contentlastmovie/>
        {/*  <!-- End content row last movie in Data Base --> */}
 
        {/*  <!-- Genres in DB --> */}
         <Contentgenres/>
       </div>
     </div>
  )
}
