import { ProjectsComponent } from "@/components/projects-component"
import {render, screen} from "@testing-library/react"
import { repositories } from "@/resources/repositories"

const repository = repositories[0]

describe("proyects-component",()=>{
    it("render component", ()=> {
        render(<ProjectsComponent name={repository.name} description={repository.description} github={repository.github} route={repository.route}/>)
    })
    it("tag link (name)",() => {
        render(<ProjectsComponent name={repository.name} description={repository.description} github={repository.github} route={repository.route}/>)
        const linkTag = screen.getByText(repository.name)
        const text = linkTag.textContent
        expect(linkTag).toBeInTheDocument()
        expect(repository.name).toEqual(text)
    })
    it("tag link (github)",() => {
        render(<ProjectsComponent name={repository.name} description={repository.description} github={repository.github} route={repository.route}/>)
        const linkTag = screen.getByTestId(repository.github)
        expect(linkTag).toBeInTheDocument()
    })
    it("tag link (description)",() => {
        render(<ProjectsComponent name={repository.name} description={repository.description} github={repository.github} route={repository.route}/>)
        const linkTag = screen.getByText(repository.description)
        const text = linkTag.textContent
        expect(linkTag).toBeInTheDocument()
        expect(repository.description).toEqual(text)
    })
    it("tag link (route)",() => {
        render(<ProjectsComponent name={repository.name} description={repository.description} github={repository.github} route={repository.route}/>)
        const linkTag = screen.getByTestId(repository.route)
        expect(linkTag).toBeInTheDocument()
    })
})