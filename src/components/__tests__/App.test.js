import React from 'react';
import { render, screen } from "@testing-library/react"
import App from '../../App';

test('render without errors', () => {
    render(<App />)
})

test('when app mounts, Add new animal header exists on the screen', () => {
    render(<App />);
    //arrange

    const header = screen.getByText('Add New Animal');
    //act 

    expect(header).toBeTruthy()
    expect(header).toHaveTextContent(/Add New Animal/)
    //expect
})