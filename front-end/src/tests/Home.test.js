import { screen, render } from '@testing-library/react';
import Home from '../pages/Home';

describe('Renderiza a página Home e...', () => {
    test('Testa se o Hello World está sendo renderizado corretamente', () => {
        render(<Home />)
        const helloWorld = screen.getByRole('heading', { name: 'Hello World'});
        expect(helloWorld).toBeInTheDocument()
    })
})