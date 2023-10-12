import { render, screen } from '@testing-library/react';
import Header from '@/components/header';

describe('Header-component', () => {
    it('renders header component', () => {
        render(<Header />);
    });
    it("render header", () => {
        render(<Header />);
        const headerElement = screen.getByRole('presentation');
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveClass("w-full h-96 grid grid-cols-1 md:grid-cols-2 items-center justify-center px-[1rem] md:p-20 bg-black text-white")
    })
    it("render title", () => {
        render(<Header />);
        const headerText1 = screen.getByText('Hi! I am Matías');
        const headerText2 = screen.getByTestId('title2');

        expect(headerText1).toBeInTheDocument();
        expect(headerText2).toBeInTheDocument();
    })
});