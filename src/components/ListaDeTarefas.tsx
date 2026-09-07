"use client";
import type { Tarefa } from "@/data/tarefas";
import { useState } from "react";
import NovaTarefa from "./NovaTarefa";
import { useContadorTarefas } from "@/hooks/useContadorTarefas";
import styles from "./ListaDeTarefas.module.css";

interface ListaDeTarefasProps {
    tarefasIniciais: Tarefa[];
}
export default function ListaDeTarefas({tarefasIniciais}: ListaDeTarefasProps) {

    const [tarefas, setTarefas] = useState(tarefasIniciais)
    const qtdTarefas = useContadorTarefas(tarefas)

    function adicionarTarefa(titulo: string) {

        const novaTarefa: Tarefa = {
            id: Date.now(),
            title: titulo,
        };

        setTarefas([...tarefas, novaTarefa]);
    }

    function excluirTarefa(id: number) {
        const tarefasAtaulizadas = tarefas.filter(
            (tarefa) => tarefa.id !== id);
            setTarefas(tarefasAtaulizadas);
    }

    return (
        <div className={styles.container}>
            <NovaTarefa onAdicionarTarefa={adicionarTarefa}/>
            <p className={styles.contador}>Total de tarefas: {qtdTarefas}</p>
            <ul className={styles.lista}>{tarefas.map((tarefa) => (
                <li 
                key={tarefa.id}
                className={styles.tarefa}
                >{tarefa.title}
                
                <button className={styles.botaoExcluir}
                onClick={() => excluirTarefa(tarefa.id)}>
                    Excluir
                </button>
                </li>))}
            </ul>
        </div>
  );
}