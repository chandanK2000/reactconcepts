import React from 'react'

const Props = (props) => {
  return (
    // <div>Props{name.name}</div>
    <div>{props.brands.model},{props.brands.name}</div>
  )
}

export default Props;