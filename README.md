# TaskFlow

Aplicação simples de lista de tarefas, desenvolvida como projeto colaborativo para a atividade "Desenvolvimento Colaborativo com GitHub".

## Funcionalidades
- Adicionar tarefas
- Exibir a lista de tarefas
- Marcar tarefas como concluídas
- Exibir mensagem quando não houver tarefas cadastradas

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript (ES6+, sem frameworks)

Não é utilizado banco de dados nem backend — todo o estado vive em memória no navegador durante a sessão.

## Como rodar o projeto
1. Clone o repositório.
2. Abra o arquivo `src/index.html` diretamente no navegador (ou use a extensão "Live Server" do VS Code).

Não há passo de instalação ou build: é HTML/CSS/JS puro.

## Estrutura do repositório
```
taskflow-equipe/
├── README.md
├── .gitignore
├── docs/
│   ├── requisitos.md
│   └── reflexao.md
├── src/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
└── assets/
    └── img/
```

## Equipe e participação

| Integrante | Responsabilidade |
|---|---|
| Integrante 1 | Criação do repositório, organização dos diretórios, README.md e .gitignore |
| Integrante 2 | Desenvolvimento da interface (HTML e CSS) |
| Integrante 3 | Lógica da aplicação (JavaScript) e documento de requisitos |

## Fluxo de trabalho
Cada integrante desenvolveu em uma branch própria e integrou as mudanças à `main` por meio de Pull Requests, revisados por outro integrante antes do merge. Um conflito de merge foi provocado e resolvido deliberadamente na seção de tecnologias deste README — detalhes em [`docs/reflexao.md`](docs/reflexao.md).
