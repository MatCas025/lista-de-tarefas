import { render, screen } from "@testing-library/react";
import ListaDeTarefas from "@/components/ListaDeTarefas";

test("Tarefas devem aparecer na tela", () => {
    const tarefas = [
    {id:1, title:"Tarefa1"},
    {id:2, title:"Tarefa2"},
    {id:3, title:"Tarefa3"}];

    render(<ListaDeTarefas tarefasIniciais={tarefas}/>);

    tarefas.forEach((tarefa) => {
        expect(screen.getByText(tarefa.title)).toBeInTheDocument();});
});

test("Deve mostrar a qntd de tarefas", () => {
    const tarefas = [
    {id:1, title:"Tarefa1"},
    {id:2, title:"Tarefa2"},
    {id:3, title:"Tarefa3"}];

    render(<ListaDeTarefas tarefasIniciais={tarefas}/>);

    expect(screen.getByText("Total de tarefas: 3")).toBeInTheDocument();
})