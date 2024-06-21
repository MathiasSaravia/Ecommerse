import React from 'react'

export const CategoryItem = ({name}) => {
  return (
     <div className="col-lg-6 mb-4">
            <div className="card text-white shadow" style={{backgroundColor: '#191717'}}>
              <div className="card-body">{name}</div>
            </div>
          </div>
  )
}
