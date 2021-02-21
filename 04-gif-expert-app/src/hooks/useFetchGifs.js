import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
;

export const useFectchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })
    console.log('11111');
    useEffect(() => {
        console.log('22222');
        getGifs(category).then(imgs =>
            setstate({ data: imgs, loading: false })
        );
    }, [category])

    return state;
}
