import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
// import PropTypes from 'prop-types'

function GifExpertApp () {
    const [categories, setCategories] = useState([])

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr></hr>

            <AddCategory setCategories={setCategories}/>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
