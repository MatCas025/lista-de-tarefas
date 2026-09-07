import type { Tarefa } from "@/data/tarefas";

export function useContadorTarefas(tarefas: Tarefa[]){
    return (
        tarefas.length
    )
}