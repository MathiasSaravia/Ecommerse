import React from 'react'
import { ContentData } from './ContentData'

export const Contentrowmovies = ({data}) => {

  return (
    <div className="row">
 
  {/* <!-- Movies in Data Base --> */}
  {/*  <!-- Total awards --> */}
  {/* <!-- Actors quantity --> */}
  {
  data.filter((el) => el.show)
  .map((el,i) => {
      return <ContentData key={i} title={el.title} color={el.color} number={el.numbre} icon={el.icon} />
  })
  }

  </div>
  )
}
