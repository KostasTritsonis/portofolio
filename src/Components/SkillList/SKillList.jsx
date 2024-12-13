import React from 'react'

const SKillList = ({src,skill}) => {
  return (
    <span>
        <img src={src} alt="" />
        <p>{skill}</p>
    </span>
  )
}

export default SKillList