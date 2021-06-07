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
    title: "Primeiro dia de projeto",
    type: "Dia de planejamento",
    date: "07/06 - segunda-feira",
    content:
      "O primeiro dia deve ser o de brainstorming de ideias, visando encontrar um problema e mapear uma solução MVP para o mesmo. O grupo deve: Definir a solução, quais libs irão utilizar, e escolher as ferramentas que utilizarão (Kanban, Design, etc)",
    week: "Primeira semana",
    hasAssignment: false,
  },

  {
    title: "Segundo dia de projeto",
    type: "Dia de planejamento",
    date: "08/06 - terça-feira",
    content:
      "O segundo dia do projeto deve continuar com o planejamento, tentando elencar uma melhor ideia e continuar o brainstorming do projeto.",
    week: "Primeira semana",
    hasAssignment: false,
  },

  {
    title: "Terceiro dia de projeto",
    type: "Dia de código e gerenciamento",
    date: "09/06 - quarta-feira",
    content:
      "O terceiro dia será o de apresentação do projeto, e onde o time deverá entregar um documento contendo o que foi decidido, qual aplicação será construída, qual problema irá resolver e também quais ferramentas o grupo irá utilizar no dia a dia.",
    week: "Primeira semana",
    hasAssignment: false,
    itemAssignment:
      "https://alunos.kenzie.com.br/courses/28/assignments/3256?module_item_id=3658",
  },

  {
    title: "Quarto dia de projeto",
    type: "Dia de código e gerenciamento",
    date: "10/06 - quinta-feira",
    content:
      "O quarto dia será o primeiro dia em que o grupo irá começar a codar. Após separar as tasks, mapear requisitos, entender o problema, e todos estarem entendendo a solução, é dada a largada para abrir o seu editor e botar a mão na massa.",
    week: "Primeira semana",
    hasAssignment: false,
  },

  {
    title: "Quinto dia de projeto",
    type: "Dia de código e gerenciamento",
    date: "11/06 - sexta-feira",
    content:
      "O quinto dia de projeto será além de continuar as tarefas para construir a aplicação, também será necessário que o grupo realize uma retrospectiva e tenha um tempo para refletir e entender o que poderia ter sido melhor, e como o projeto progrediu na totalidade.",
    week: "Primeira semana",
    hasAssignment: true,
    itemAssignment:
      "https://alunos.kenzie.com.br/courses/28/assignments/3256?module_item_id=3658",
  },

  {
    title: "Sexto dia de projeto",
    type: "Dia de código e gerenciamento",
    date: "14/06 - segunda-feira",
    content:
      "O sexto dia deverá ter um planejamento do que será feito na semana, e partir para o código, visando construir o cerne da aplicação de proposta.",
    week: "Segunda semana",
    hasAssignment: false,
  },

  {
    title: "Sétimo dia de projeto",
    type: "Dia de código e gerenciamento",
    date: "15/06 - terça-feira",
    content:
      "O sétimo dia será um dia para a finalização de features e ajustes finais no código",
    week: "Segunda semana",
    hasAssignment: false,
  },

  {
    title: "Oitavo dia de projeto",
    type: "Dia de código e gerenciamento",
    date: "16/06 - quarta-feira",
    content:
      "O oitavo dia é o dia final para a entrega do código, onde o grupo deverá entregar o repositório contendo a solução proposta.",
    week: "Segunda semana",
    hasAssignment: true,
    itemAssignment:
      "https://alunos.kenzie.com.br/courses/35/assignments/6246?module_item_id=7102",
  },

  {
    title: "Nono dia de projeto",
    type: "Dia de gerenciamento",
    date: "17/06 - quinta-feira",
    content:
      "O Nono dia, será o dia final do grupo trabalhando no Hábitos, o grupo deverá realizar a última retrospectiva e se preparar para partir para um próximo desafio! 🚀",
    week: "Segunda semana",
    hasAssignment: true,
    itemAssignment:
      "https://alunos.kenzie.com.br/courses/35/assignments/6246?module_item_id=7102",
  },
];

export default data;
