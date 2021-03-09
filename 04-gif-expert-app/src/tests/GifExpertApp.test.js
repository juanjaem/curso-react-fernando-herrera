import { shallow } from 'enzyme';
import React from 'react';
import GifExpertApp from '../GifExpertApp'

describe('pruebas en <GifExpertApp />', () => {
    test('debe de mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorías', () => {
        const categories = ['One Punch', 'Dragon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
});
