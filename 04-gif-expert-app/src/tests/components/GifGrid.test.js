import { shallow } from 'enzyme';
import '@testing-library/jest-dom'; // para el autocompletado
import { GifGrid } from '../../components/GifGrid';
import React from 'react';
import { useFectchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('pruebas en <GifGrid />', () => {
    const category = 'prueba';

    test('debe de mostrar el componente correctamente', () => {
        useFectchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                url: 'https://loquesea.gif',
                title: 'cualquier cosa'
            }
        ];

        useFectchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBeFalsy();
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
})
