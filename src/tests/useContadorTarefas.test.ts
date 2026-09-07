import { renderHook } from "@testing-library/react";
import { useContadorTarefas } from "@/hooks/useContadorTarefas";

test("o hook vai contar as tarefas", () => {
    const tarefas = [
        {id:1, title:"Tarefa1"},
        {id:2, title:"Tarefa2"},
        {id:3, title:"Tarefa3"}];

    const { result } = renderHook(() => useContadorTarefas(tarefas));
    expect(result.current).toBe(3)
});