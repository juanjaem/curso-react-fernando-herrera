import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';

describe('pruebas en <GifGridItem />', () => {
    const title = 'Un título';
    const url = 'https://www.loquesea.com';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe tener una imagen con url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.prop('className')).toContain('animate__fadeIn')
    });
})
