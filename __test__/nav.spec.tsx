import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from '@/components/nav';

describe('Nav-Component', () => {
    it('render component', () => {
        render(<Nav />);
    });
    it('renders the Home link', () => {
        render(<Nav />);
        const homeLink = screen.getByText('Home');
        expect(homeLink).toBeInTheDocument();
    });

    it('renders the Resources link', () => {
        render(<Nav />);
        const resourcesLink = screen.getByText('Resources');
        expect(resourcesLink).toBeInTheDocument();
    });
});