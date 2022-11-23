import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FiMinus, FiPlus } from "react-icons/fi";

export const Data = [
  {
    question: 'Não Sou profissional da beleza e quero adquirir os produtos como faço?',
    answer: 'Na aba locais você pode estar encontrando um salão mais próximo, ou nos procure em nossas redes sociais que indicaremos um de nossos representantes.'
  },
  {
    question: 'Vocês entregam para todo o Brasil?',
    answer: 'Entregamos, deixe sua mensagem na barra de contato que retornaremos explicando todo o processo.'
  },
  {
    question: 'Qual linha é mais indicada para cabelos oleosos?',
    answer: 'Indicamos as nossas linhas Detox Refresh e Hortelã com Malva.'
  },
  {
    question: 'Sou Profissional da beleza e quero adquirir os seus produtos, como faço?',
    answer: 'Nos envie sua região pela aba de contatos que indicaremos o representante sua área'
  },
  {
    question: 'Vocês possuem produtos para cronograma capilar?',
    answer: 'Sim, a Facinnius possui uma linha completa de cronograma capilar para você incluindo produtos para nutrição, hidratação, reconstrução e tratamento do couro cabeludo'
  },
  {
    question: 'Qual linha é mais indicada para cabelos oleosos?',
    answer: 'Indicamos as nossas linhas Detox Refresh e Hortelã com Malva.'
  },
  {
    question: 'Por que não encontro o produto da Facinnius em perfumaria?',
    answer: 'Porque a Facinnius tem como foco atender a profissionais da beleza, com uma equipe de representantes que atendem aos profissionais em seus estabelecimentos. Mas você consegue obter os produtos nos salões que revendem a linha home care Facinnius.'
  },
  {
    question: 'O que seria produtos da linha Home Care?',
    answer: 'É uma linha de produtos que você consegue utilizar em casa tendo a mesma qualidade e eficiência do salão, mas em embalagens menores para dar continuidade no tratamento capilar.'
  },
  {
    question: 'Sou morena, tenho mechas posso utilizar a linha Violeta Seda Protein Facinnius?',
    answer: 'Sim, pois o Kit Violeta Seda Protein Facinnius é indicado para todos os tipos de mechas.'
  },
  {
    question: 'Os shampoos Facinnius podem ser utilizados em crianças?',
    answer: 'Sim, mas recomendamos que leia nossa precaução de uso no contra rótulo da embalagem.'
  },
  {
    question: 'O uso de creme para pentear descarta o de condicionador?',
    answer: 'Geralmente, os cremes para pentear possuem características diferentes dos condicionadores e são produtos que dispensam enxague, como os leave-in, com propriedades suavizantes e de tratamento. Os condicionadores nunca devem ser substituídos, pois possuem ação específica de reequilibrar eletricamente os fios recém-lavados.'
  },
  {
    question: 'Como aplicar o leave-in Leite Siliconado Mar e Piscina Facinnius corretamente?',
    answer: 'O leite Siliconado e uma Leave-in Finalizador com alto poder de proteção Uva/UVB deixando seus cabelos protegidos e hidratados. Recomenda-se aplicá-lo em toda a extensão dos fios trinta minutos antes da exposição ao sol.'
  },
  {
    question: 'Para que servem as máscaras de tratamento Facinnius?',
    answer: 'Máscaras são produtos que visam a reposição de substâncias que os cabelos perderam ou por fatores climáticos, uso incorreto de produtos químicos, excesso de calor proveniente de chapinhas e secadores, além de outras ações mecânicas (escovação, amarração). Já os condicionadores são cosméticos que servem para reequilibrar os fios de cabelo que, no processo de lavagem com shampoo, ficam impregnados de cargas negativas. O uso de máscaras não descarta o de condicionadores.'
  },
  {
    question: 'Posso aplicar o Bifásico Infinity One Facinnius com os cabelos molhados?',
    answer: 'Sim, seco ou molhado os cabelos devem estar limpos. Aplique uma quantidade suficiente por todos os fios e finalize como de costume. Não é necessário enxaguar e agite antes de usar'
  },{
    question: 'Qual a diferença do Acezzo aerosol e do Acezzo líquido?',
    answer: 'Nenhuma, a formulação dos dois produtos são a mesma. O que diferencia os dois produtos é a aplicabilidade. O Acezzo líquido você espirra uma pequena quantidade nas mãos e espalha no comprimento dos fios já o Acezzo aerosol aplicamos o jato com uma distância diretamente nos fios.'
  },
  {
    question: 'Tenho progressiva a Facinnius possui alguma linha especifica?',
    answer: 'Sim, temos a linha effect liss que consta com shampoo, condicionador e leave-in que foi desenvolvida para cabelos quimicamente tratados ou seja um pós progressiva.'
  },
  {
    question: 'Qual a cor de fundo de clareamento da Kolore?',
    answer: 'A nossa coloração profissional Kolore Facinnius, tem como fundo de clareamento o violeta frio. Para informações sobre o assunto você encontrará em nossas redes sociais.'
  },
  {
    question: 'Os produtos Facinnius possuem nano tecnologia',
    answer: 'Temos algumas linhas com nano tecnologia, é o caso da linha Effect liss, Linha Infinity One, Linha Infinity One Gold, Linha Infinity Repair Protein e Todos nosso leave-in são alguns exemplos.'
  },
  {
    question: 'A Facinnius tem progressiva orgânica?',
    answer: 'Temos nosso redutor de volume Ilummini qué é indicado para realização de progressivas orgânicas, produto sem formol.'
  },

];

const AccordionPolitica = ({ question }: any) => {
  const [clicked, setClicked] = useState(0);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };
  
  return (
    <div className="AccordionSection">
      <div className="containerAccordion">
          {question.map((item, index) => {
            return (
              <>
                <div className="wrapperAccordion" onClick={() => toggle(index)} key={index}>
                  <h1 style={clicked === index ? { color: "hsl(36, 72%, 48%)" }: null}>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus color="hsl(36, 72%, 48%)" /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className="dropdown">
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default AccordionPolitica;