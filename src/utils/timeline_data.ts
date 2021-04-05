interface Data {
  title: string;
  week: string;
  content: string;
  date: string;
  type: string;
  hasAssignment: boolean;
  itemAssignment?: string;
}

const data: Data[] = [
  {
    title: "Dia 01 do projeto",
    type: "Dia de planejamento",
    date: "05/04",
    content:
      "O primeiro dia deve ser o de brainstorming de ideias, visando encontrar um problema e mapear uma solução MVP para o mesmo. O grupo deve: Definir a solução, quais libs irão utilizar, e escolher as ferramentas que utilizarão (Kanban, Design, etc)",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "Dia 02 do projeto",
    type: "Dia de planejamento",
    date: "06/04",
    content:
      "O segundo dia do projeto deve continuar com o planejamento, tentando elencar uma melhor ideia e continuar o brainstorming do projeto.",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "Dia 03 do projeto",
    type: "Dia de planejamento",
    date: "07/04",
    content:
      "O terceiro dia será o de apresentação do projeto, e onde o time deverá entregar um documento contendo o que foi decidido, qual aplicação será construída, qual problema irá resolver e também quais ferramentas o grupo irá utilizar no dia a dia. Esse será também um bom dia para iniciar a construção do JSON Server.",
    week: "Primeira semana",
    hasAssignment: true,
    itemAssignment: 'https://alunos.kenzie.com.br/courses/28/assignments/3256?module_item_id=3658'
  },
  {
    title: "Dia 04 do projeto",
    type: "Dia de código",
    date: "08/04",
    content:
      "O dia 04 será o primeiro dia em que o grupo irá começar a codar. Após separar as tasks, mapear requisitos, entender o problema, e todos estarem entendendo a solução, é dada a largada para abrir o seu editor e botar a mão na massa.",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "Dia 05 do projeto",
    type: "Dia de código e gerenciamento!",
    date: "09/04",
    content: "O quinto dia de projeto será além de continuar as tarefas para construir a aplicação, também será necessário que o grupo realize uma retrospectiva e tenha um tempo para refletir e entender o que poderia ter sido melhor, e como o projeto progrediu como um todo.",
    week: "Primeira semana",
    hasAssignment: true,
    itemAssignment: 'https://alunos.kenzie.com.br/courses/28/assignments/3256?module_item_id=3658'
  },
];

export default data;
