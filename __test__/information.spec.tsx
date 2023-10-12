import { render, screen } from "@testing-library/react";
import { Information } from "@/components/information";

describe("information-component", () => {
    it("render component", () => {
       expect(render(<Information />));
    })
    it("renders information section", () => {
        render(<Information />);
        expect(screen.getByText("About Me")).toBeInTheDocument();
        
        expect(screen.getByTestId("GitHub")).toBeInTheDocument();
        
        expect(screen.getByTestId("LinkedIn")).toBeInTheDocument();
        
        expect(screen.getByTestId("Twitter")).toBeInTheDocument();
        
        expect(screen.getByTestId("description")).toBeInTheDocument();
        expect(screen.getByTestId("description")).toHaveClass("text-start");

    })
  
});