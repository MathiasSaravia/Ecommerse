import React, { useEffect, useState } from 'react'
import { Contentrowmovies } from './Contentrowmovies'
import { Contentlastmovie } from './Contentlastmovie'
import { Contentgenres } from './Contentgenres'

export const Contentrowtop = () => {

  return (

    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>

      {/* <!-- Content Row Movies--> */}
      <Contentrowmovies />
      {/*   <!-- End movies in Data Base --> */}

      {/* <!-- Content Row Last Movie in Data Base --> */}
      <div className="row">
      {/* <!-- Last Movie in DB --> */}
      <Contentlastmovie />
      {/*  <!-- End content row last movie in Data Base --> */}

      {/*  <!-- Genres in DB --> */}
      <Contentgenres />
      </div>
    </div>
  )
}
