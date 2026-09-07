import { buscarTarefas } from "@/data/tarefas";
import ListaDeTarefas from "@/components/ListaDeTarefas";
import styles from "./page.module.css";

export default async function Home() {
  const tarefas = await buscarTarefas();
  return (
    <div className={styles.container}>
      <div className={styles.conteudo}>
      <h1 className={styles.titulo}>Minhas Tarefas</h1>

      <ListaDeTarefas tarefasIniciais={tarefas} />
      </div>
    </div>
  )
}
