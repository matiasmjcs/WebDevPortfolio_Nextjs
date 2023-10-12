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
})