import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useFectchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFectchGifs(category);

    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            { loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid">
                {
                    images.map(img => (<GifGridItem key={ img.id } {...img} />))
                }
            </div>
        </Fragment>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
