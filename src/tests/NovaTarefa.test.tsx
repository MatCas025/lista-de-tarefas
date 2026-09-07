import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

test("deve chamar a função quando clicado", () => {
    const onAdicionarTarefa = jest.fn();

    render(<NovaTarefa onAdicionarTarefa={onAdicionarTarefa} />);

    const input = screen.getByPlaceholderText("Digite uma nova tarefa");
    fireEvent.change(input,
        {target: { value: "Estudar"},
    })

    const botao = screen.getByRole("button", {name: "Adicionar"});
    fireEvent.click(botao)

    expect(onAdicionarTarefa).toHaveBeenCalledWith("Estudar");
});

test("Não deve ser usado input vazio", () => {
    const onAdicionarTarefa = jest.fn();

    render(<NovaTarefa onAdicionarTarefa={onAdicionarTarefa} />);

    const botao = screen.getByRole("button", { name: "Adicionar" });
    fireEvent.click(botao)

    expect(onAdicionarTarefa).not.toHaveBeenCalled();
})