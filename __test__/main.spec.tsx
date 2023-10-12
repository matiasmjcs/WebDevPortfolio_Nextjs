import React from 'react';
import { render, screen } from '@testing-library/react';
import { Main } from '@/components/main';

describe('main-component', () => {

    it('renders Main component', () => {
        render(<Main />);
        const mainElement = screen.getByRole('main');

        expect(mainElement).toBeInTheDocument();
    });

    it('renders Information component', () => {
        render(<Main />);
        const informationElement = screen.getByTestId('information-component');

        expect(informationElement).toBeInTheDocument();
    });

    it('renders Animation component', () => {
        render(<Main />);
        const animationElement = screen.getByTestId('animation-component');

        expect(animationElement).toBeInTheDocument();
    });

    it('renders Project component', () => {
        render(<Main />);
        const projectElement = screen.getByTestId('project-component');

        expect(projectElement).toBeInTheDocument();
    });
})
