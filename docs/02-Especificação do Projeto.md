# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve apresentar, quando no primeiro login do usuário, um questionário sobre o estilo de vida do usuário, incluindo perguntas sobre hábitos de alimentação, transporte, consumo energético, renda, entre outros. | ALTA | 
|RF-002| O site deve apresentar na página inicial uma checklist personalizada de ações diárias para redução da pegada de carbono do usuário, baseada no questionário inicial.   | ALTA |
|RF-003| O site deve permitir que o usuário visualize seus dados inseridos na checklist em datas anteriores.   | ALTA |
|RF-004| O site deve permitir que o usuário refaça o questionário sobre estilo de vida sempre que achar necessário.  | MÉDIA |
|RF-005| O site deve permitir que o usuário visualize seus dados de consumo de carbono, calculados a partir do uso da checklist, em forma de gráficos.  | MÉDIA |
|RF-006| O site deve permitir que o usuário submeta sugestões de ações para redução do consumo de carbono.   | MÉDIA |
|RF-007| O site deve permitir que o usuário compare os seus dados de consumo de carbono e porcentagem de redução/aumento de consumo com a média de todos os usuários da aplicação.   | BAIXA |
|RF-008| O site deve permitir que o usuário envie convites para amigos utilizarem a aplicação.   | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |
|-------|-------------------------|
|RNF-001| O software deve ser implementado como uma aplicação Web.|
|RNF-002| Deve ter uma interface fácil e intuitiva para qualquer pessoa conseguir acessar e encontrar. |
|RNF-003| O software deve estar disponível pelo menos 99% das 24hs por dia, 7 dias por semana (24x7), com a possibilidade de paradas pré-programadas para manutenção no mesmo. |
|RNF-004| O software deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) |
|RNF-005| Se deve avisar ao usuário caso o software esteja offline e ter uma estimativa de volta. |
|RNF-006| O software deverá apresentar uma interface gráfica no idioma Português – Brasil. |
|RNF-007| O software deverá ter um meio(e-mail) para que os usuários enviem pedidos de ajuda ou de melhorias, entre outras mensagens.|
|RNF-008| Todas as informações deverão ser armazenadas em um banco de dados |
|RNF-009| O software deverá possuir um bom tempo de resposta para mostrar os dados para o usuário de maneira precisa e eficiente. |
|RNF-010| O software deverá ser fácil de manter e atualizar assim reduzindo o tempo das manutenções e a sua dificuldade. |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 05/12/2021. |
|RE-02| A equipe não pode subcontratar o desenvolvimento do trabalho.       |
|RE-03| O projeto não pode ser compartilhado com terceiros para fins lucrativos. |



> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)
