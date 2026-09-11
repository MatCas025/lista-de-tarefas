import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { buscarTarefas } from "./../data/tarefas";

jest.mock("./../data/tarefas", () => ({
    buscarTarefas: jest.fn(),
}))

test("deve gerar as tarefas", async () => {
    (buscarTarefas as jest.Mock).mockResolvedValue([
        { id: 1, title: "Tarefa1"},
        { id: 2, title: "Tarefa2"},
    ])

    const page = await Home();
    render(page);

    expect(screen.getByText("Tarefa1")).toBeInTheDocument();
    expect(screen.getByText("Tarefa2")).toBeInTheDocument();
}) 


