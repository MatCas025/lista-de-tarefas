export interface Tarefa {
    id: number;
    title: string;
}

export const tarefasIniciais: Tarefa[] = [
    {
        id: 1,
        title: "Estudar Next.js",
    },
    {
        id: 2,
        title: "Criar testes unitários",
    },
    {
        id: 3,
        title: "Finalizar a tarefa EBAC",
    },    
]

export function buscarTarefas() {
    return Promise.resolve(tarefasIniciais);
}