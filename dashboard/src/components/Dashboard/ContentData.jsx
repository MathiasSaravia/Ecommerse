import React from 'react'
import PropTypes from "prop-types"

export const ContentData = (props) => {
    const {title,color,number,icon} = props
  return (
    <div className="col-md-4 mb-4">
    <div className={`card border-left-${color} shadow h-100 py-2`}>
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title}</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">{number}</div>
          </div>
          <div className="col-auto">
            <i className={`fas fa-${icon} fa-2x text-dark`}></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

ContentData.prototype = {
    tittle:PropTypes.string,
    color:PropTypes.string,
    number:PropTypes.number,
    icon:PropTypes.string
}

/* ContentData.defaultProps={
    tittle:"titulo no definido",
    color:"sucess",
    number:0,
    icon:"question"
} */