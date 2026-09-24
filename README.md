# Lista de Tarefas

Uma aplicação simples de lista de tarefas desenvolvida com **Next.js 15**, **React**, **TypeScript**, **Jest** e **Testing Library**.

## 🚀 Funcionalidades

- Exibir uma lista de tarefas simulada;
- Adicionar novas tarefas;
- Excluir tarefas;
- Contar a quantidade atual de tarefas;

## 🛠️ Tecnologias utilizadas

- Next.js 15
- React 19
- TypeScript
- Jest
- Testing Library
- CSS Modules

## 📂 Estrutura do projeto

```text
src/
├── app/
│   ├── page.tsx
│   └── page.module.css
│
├── components/
│   ├── ListaDeTarefas.tsx
│   ├── ListaDeTarefas.module.css
│   ├── NovaTarefa.tsx
│   └── NovaTarefa.module.css
│
├── data/
│   └── tarefas.ts
│
├── hooks/
│   └── useContadorTarefas.ts
│
└── tests/
    ├── ListaDeTarefas.test.tsx
    ├── NovaTarefa.test.tsx
    └── useContadorTarefas.test.ts
```

## 🧪 Testes Unitários

Os testes cobrem:

- Contagem de tarefas;
- Adição de uma nova tarefa;
- Validação para impedir tarefas vazias;
- Renderização das tarefas na tela;
- Exibição da quantidade correta de tarefas.    

## 💻 Executando os testes

Para executar a suíte de testes:

```bash
npm test
```

## 💻 Como executar o projeto

Clone o repositório:
```bash
git clone https://github.com/MatCas025/lista-de-tarefas
```

Instale as dependências:
```bash
npm install
```

Execute o projeto:
```bash
npm run dev
```

Abra no navegador:
```text
http://localhost:3000
```
## 🔄 CI/CD

O projeto utiliza **GitHub Actions** para automatizar a integração e o deploy da aplicação.

A cada `push` ou `pull request` na branch `main`, o pipeline:

1. Instala as dependências com `npm ci`;
2. Executa o **lint**;
3. Executa os **testes**;
4. Gera o **build** da aplicação.

Após todas essas etapas serem concluídas com sucesso, o projeto é automaticamente publicado na **Vercel**.

O deploy utiliza os secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID`, armazenados de forma segura no GitHub.

Fluxo :

`Push/PR → Lint → Testes → Build → Deploy na Vercel`


### Projeto publicado
Site: https://lista-de-tarefas-seven-lake.vercel.app

### 👨‍💻 Autor

* Projeto desenvolvido por Matheus de Castro, como atividade prática para estudo de Next.js, TypeScript e testes unitários.