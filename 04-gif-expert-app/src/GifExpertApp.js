import React, { useState } from 'react'
// import PropTypes from 'prop-types'

function GifExpertApp () {
  // const categories = ['One punch', 'Samurai X', 'Dragon Ball']
  const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon Ball'])

  const handleAdd = (e) => {
    setCategories(cats => [...cats, 'nuevo valor'])
    // setCategories([...categories, 'nuevo valor'])
  }

  return (
    <>
      <p>GifExpertApp</p>
      <hr></hr>

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {
          categories.map(category => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>
    </>
  )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
