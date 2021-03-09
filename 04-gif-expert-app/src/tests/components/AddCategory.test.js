import React from 'react'
import '@testing-library/jest-dom'; // Para la ayuda de jest

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('pruebas en el <AddCategory />', () => {
    const setCategories = jest.fn() // mock a function. Podriamos haber usado () => {}
    let wrapper = shallow(<AddCategory setCategories={setCategories} />); // Lo inicializo aquí solo para no perder la ayuda

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo'
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('NO debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault () {} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe llamar al setCategories y limpiar la caja de texto ', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo'
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault () {} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); // Comprobar que se llama con una funcion
        expect(input.prop('value')).toBe('');
    });
})
