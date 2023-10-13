import { Project } from '@/components/projects';
import { render, screen } from '@testing-library/react';
import { repositories } from '@/resources/repositories';
import { IRepository } from '@/interfaces/repository.interface';

describe('Project', () => {

    it('renders Project component', () => {
        render(<Project repositories={repositories} />);

        const projectComponent = screen.getByTestId('project-component');

        expect(projectComponent).toBeInTheDocument();
    });

    it('renders project name, route, description and github for each repository', () => {
        render(<Project repositories={repositories} />);

        repositories.forEach((repo: IRepository) => {
            const linkElement = screen.getByTestId(repo.route);
            const descriptionElement = screen.getByTestId(repo.description);
            const textName = linkElement.textContent
            const textdescription = descriptionElement.textContent
            const linkTag = screen.getByTestId(repo.github)
            
            expect(textName).toEqual(repo.name)
            expect(textdescription).toEqual(repo.description)
            expect(linkElement).toBeInTheDocument();
            expect(linkTag).toBeInTheDocument()
            expect(descriptionElement).toBeInTheDocument()
        });
    });

})
