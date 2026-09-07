import { useState, type SubmitEvent } from "react";
import styles from "./NovaTarefa.module.css";

interface NovaTarefaProps {
    onAdicionarTarefa: (titulo: string) => void;
}
export default function NovaTarefa({onAdicionarTarefa}: NovaTarefaProps) {

    const [titulo, setTitulo] = useState("")

    function handleSubmit(evento: SubmitEvent<HTMLFormElement>) {
    evento.preventDefault();
        if(!titulo.trim()) {
            return;
        }
    onAdicionarTarefa(titulo);
    setTitulo("")
    }

    return (
        <form 
        className={styles.formulario}
        onSubmit={handleSubmit}>
            <input 
            className={styles.input}
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite uma nova tarefa"
            />
            <button className={styles.botaoAdicionar}>
                Adicionar
            </button>
        </form>
    );
}