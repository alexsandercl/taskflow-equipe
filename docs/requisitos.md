# Requisitos do Sistema — TaskFlow

## Objetivo
Aplicação web simples de gerenciamento de tarefas, construída com HTML, CSS e JavaScript puro, sem uso de banco de dados ou backend.

## Requisitos funcionais

| ID | Descrição |
|----|-----------|
| RF01 | O sistema deve permitir adicionar uma nova tarefa através de um campo de texto e um botão de envio. |
| RF02 | O sistema deve exibir a lista de tarefas cadastradas na tela. |
| RF03 | O sistema deve permitir marcar uma tarefa como concluída através de um checkbox. |
| RF04 | O sistema deve permitir remover uma tarefa da lista. |
| RF05 | O sistema deve exibir uma mensagem informando que não há tarefas cadastradas quando a lista estiver vazia. |
| RF06 | O sistema deve exibir um resumo com a quantidade de tarefas concluídas em relação ao total. |

## Requisitos não funcionais

| ID | Descrição |
|----|-----------|
| RNF01 | A aplicação deve funcionar inteiramente no navegador, sem necessidade de servidor. |
| RNF02 | A interface deve ser responsiva e legível em telas pequenas. |
| RNF03 | O código deve ser organizado em arquivos separados (HTML, CSS, JS). |

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript (ES6+, vanilla, sem frameworks)

## Fora do escopo
- Persistência de dados entre sessões (não há banco de dados nem localStorage).
- Autenticação de usuários.
- Backend/API.
