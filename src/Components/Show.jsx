import React from 'react'

const Show = () => {
    let date = new Date().toLocaleDateString()
  return (
    <h1>{date}</h1>
  )
}

export default Show;