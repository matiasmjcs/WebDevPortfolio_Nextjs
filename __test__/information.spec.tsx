import { render, screen } from "@testing-library/react";
import { Information } from "@/components/information";
import { socialMediaUrl } from '@/resources/socialMediaUrl';
describe("information-component", () => {
    it("render component", () => {
       expect(render(<Information />));
    })
    it("renders information section", () => {
        render(<Information />);
        const descriptionTag = screen.getByTestId("description")
        const aboutTag = screen.getByText("About Me")
        expect(aboutTag).toBeInTheDocument();
        expect(descriptionTag).toBeInTheDocument();
        expect(descriptionTag).toHaveClass("text-start");
    })

    it("link to social media", () => {
        render(<Information />);
        const twitterTag = screen.getByTestId("Twitter")
        const githubTag = screen.getByTestId("GitHub")
        const linkedinTag = screen.getByTestId("LinkedIn")
        expect(twitterTag).toHaveAttribute('href', socialMediaUrl.twitter)
        expect(githubTag).toHaveAttribute('href', socialMediaUrl.gitHub)
        expect(linkedinTag).toHaveAttribute('href', socialMediaUrl.linkedIn)
    })
  
});