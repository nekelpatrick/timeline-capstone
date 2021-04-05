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
    date: "05/04 - Segunda feira",
    content:
      "O primeiro dia deve ser o de brainstorming de ideias, visando encontrar um problema e mapear uma solução MVP para o mesmo. O grupo deve: Definir a solução, quais libs irão utilizar, e escolher as ferramentas que utilizarão (Kanban, Design, etc)",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "Segundo dia de projeto",
    type: "Dia de planejamento",
    date: "06/04 - Terça feira",
    content:
      "O segundo dia do projeto deve continuar com o planejamento, tentando elencar uma melhor ideia e continuar o brainstorming do projeto.",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "Terceiro dia de projeto",
    type: "Dia de planejamento",
    date: "07/04 - Quarte feira",
    content:
      "O terceiro dia será o de apresentação do projeto, e onde o time deverá entregar um documento contendo o que foi decidido, qual aplicação será construída, qual problema irá resolver e também quais ferramentas o grupo irá utilizar no dia a dia. Esse será também um bom dia para iniciar a construção do JSON Server.",
    week: "Primeira semana",
    hasAssignment: true,
    itemAssignment: 'https://alunos.kenzie.com.br/courses/28/assignments/3256?module_item_id=3658'
  },
  {
    title: "Quarto dia de projeto",
    type: "Dia de código e gerenciamento",
    date: "08/04 - Quinta feira",
    content:
      "O quarto dia será o primeiro dia em que o grupo irá começar a codar. Após separar as tasks, mapear requisitos, entender o problema, e todos estarem entendendo a solução, é dada a largada para abrir o seu editor e botar a mão na massa.",
    week: "Primeira semana",
    hasAssignment: false,
  },
  {
    title: "Quinta dia de projeto",
    type: "Dia de código e gerenciamento",
    date: "09/04 - Sexta feira",
    content: "O quinto dia de projeto será além de continuar as tarefas para construir a aplicação, também será necessário que o grupo realize uma retrospectiva e tenha um tempo para refletir e entender o que poderia ter sido melhor, e como o projeto progrediu como um todo.",
    week: "Primeira semana",
    hasAssignment: true,
    itemAssignment: 'https://alunos.kenzie.com.br/courses/28/assignments/3256?module_item_id=3658'
  },
  {
    title: "Sexta dia de projeto",
    type: "Dia de código e gerenciamento",
    date: "12/04 - Segunda feira",
    content: "O sexto dia deverá ter um planejamento do que será feito na semana, e partir para o código, visando construir o cerne da aplicação de proposta.",
    week: "Segunda semana",
    hasAssignment: false,
  },
  {
    title: "Sétimo dia de projeto",
    type: "Dia de código e gerenciamento",
    date: "13/04 - Terça feira",
    content: "O sétimo dia será um dia além de continuar as features, terá um momento de apresentação do projeto para um cliente (Equipe de ensino). O que será verificado: A situação de como está indo em relação ao planejamento, como o código está estruturado, e a organização geral das ferramentas (Kanban, Figma, etc). No botão abaixo está o calendário de reuniões com os clientes",
    week: "Segunda semana",
    hasAssignment: true,
    itemAssignment: 'https://www.notion.so/kenzieacademybr/Calend-rio-de-pr-apresenta-es-e262683cf2084a029195ea4671feeee5'
  },
  {
    title: "Oitavo dia de projeto",
    type: "Dia de código e gerenciamento",
    date: "14/04 - Quarta feira",
    content: "O oitavo dia é mais um dia focado no código, lembrando sempre de seguir o planejamento, reportar dificuldades e focar no MVP",
    week: "Segunda semana",
    hasAssignment: false,
  },
  {
    title: "Nono dia de projeto",
    type: "Dia de código e gerenciamento",
    date: "15/04 - Quinta feira",
    content: "O nono dia é o dia final para a entrega do código, onde o grupo deverá entregar o repositório contendo a solução proposta.",
    week: "Segunda semana",
    hasAssignment: true,
    itemAssignment: 'https://alunos.kenzie.com.br/courses/28/assignments/3255?module_item_id=3661'
  },
  {
    title: "Décimo dia de projeto",
    type: "Dia de gerenciamento",
    date: "16/04 - Sexta feira",
    content: "O décimo dia, será o dia final do grupo trabalhando no Capstone, o grupo deverá realizar a ultima retrospectiva e se preparar para partir para um próximo desafio (Q3)! 🚀",
    week: "Segunda semana",
    hasAssignment: true,
    itemAssignment: 'https://alunos.kenzie.com.br/courses/28/assignments/3256?module_item_id=3658'
  },
];

export default data;
