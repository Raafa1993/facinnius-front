import LinhaProfissional from "./../../public/images/linha_profissional.png";
import LinhainfinityGold from "./../../public/images/linha_infinity_gold.png";
import LinhainFinalizadores from "./../../public/images/linha_colecao.png";
import LinhainHomeCare from "./../../public/images/linha_homecare.png";

export const LinhasData = [
  {
    id: 1, // auto increment
    title: "LINHA PROFISSIONAL",
    imagem: LinhaProfissional,
    produtoId: [1, 3, 4, 5, 10, 9, 8, 28],
  },
  {
    id: 2, // auto increment
    title: "LINHA INFINITY ONE GOLD",
    imagem: LinhainfinityGold,
    produtoId: [6],
  },
  {
    id: 3, // auto increment
    title: "LINHA FINALIZADORES E LEAVE-IN",
    imagem: LinhainFinalizadores,
    produtoId: [1, 3, 4, 5],
  },
  {
    id: 4, // auto increment
    title: "HOME CARE E MANUTENÇÃO",
    imagem: LinhainHomeCare,
    produtoId: [1, 3, 4, 5],
  },
];