import { useRouter } from "next/router";
import React from "react";
import { BiXCircle } from "react-icons/bi";

interface Props {
  isOpen: boolean;
  handleCloseModal: () => void;
  handleInputChange: (event: any) => void;
  handleSelectChange: (event: any) => void;
  formValue: any;
}

export default function Filtered({ isOpen, handleInputChange, formValue, handleSelectChange, handleCloseModal }: Props) {
  const router = useRouter()
  const { sexo, cabelo, tipoCabelo, desejoCabelo, comprimento, aspecto } = router.query

  return (
    <div className={`cart ${isOpen && "show-cart"}`} id="cart">
      <i
        className="bx bx-x cart__close"
        id="cart-close"
        onClick={handleCloseModal}
      >
        <BiXCircle />
      </i>

      <h2 className="cart__title-center">Filtros</h2>

      <div className="cart__container">
        <div className="orcamento_filter">
          <div className="orcamento-produto_filter">
            <h2 className="font-1-xs cor-5" style={{ marginBottom: "12px" }}>
              Qual o seu sexo?
            </h2>
            <div
              className="orcamento-conteudo_filter field-group_filter"
              id="orcamento-bikcraft_filter"
            >
              <input type="radio" name="sexo" value="feminino" id="feminino" checked={sexo === 'feminino'} onChange={handleInputChange}/>
              <label htmlFor="feminino">Feminino</label>

              <input
                type="radio"
                name="sexo"
                value="masculino"
                checked={sexo === 'masculino'}
                id="masculino"
                onChange={handleInputChange}
              />
              <label htmlFor="masculino">Masculino</label>
            </div>
          </div>

          <div className="orcamento-dados_filter form">
            <h2 className="font-1-xs cor-5">Dados do cabelo</h2>
            <div className="col-2">
              <label htmlFor="cabelo">Você considera seu cabelo?</label>
              <select id="cabelo" name="cabelo" value={cabelo} onChange={handleSelectChange}>
                <option value="0">Selecione uma opção</option>
                <option value="liso">Liso</option>
                <option value="ondulado">Ondulado</option>
                <option value="cacheado">Cacheado</option>
                <option value="crespo">Crespo</option>
              </select>
            </div>

            <div className="col-2">
              <label htmlFor="tipoCabelo">Tipo de cabelo</label>
              <select id="tipoCabelo" name="tipoCabelo" value={cabelo} onChange={handleSelectChange}>
                <option value="0">Selecione uma opção</option>
                <option value="natural">Natural</option>
                <option value="comMechas">Com mechas</option>
                <option value="comAlisamento">Com alisamento</option>
                <option value="comColoração">Com coloração</option>
              </select>
            </div>

            {/* <div className="col-2">
              <label htmlFor="desejoCabelo">Desejo para o meu cabelo</label>
              <select id="desejoCabelo" name="desejoCabelo" onChange={handleSelectChange}>
                <option value="0">Selecione uma opção</option>
                <option value="natural">Natural</option>
                <option value="mechas">Com mechas</option>
                <option value="alisamento">Com alisamento</option>
                <option value="coloração">Com coloração</option>
              </select>
            </div> */}
            
          </div>
          <div className="orcamento-produto_filter">
            <h2 className="font-1-xs cor-5" style={{ marginBottom: "12px" }}>
              Comprimento do seu cabelo?
            </h2>
            <div
              className="orcamento-conteudo_filter field-group_filter"
              id="orcamento-bikcraft_filter"
            >
              <input type="radio" name="comprimento" value="longo" checked={comprimento === 'longo'} id="longo" onChange={handleInputChange}/>
              <label htmlFor="longo">Longo</label>

              <input type="radio" name="comprimento" value="medio" checked={comprimento === 'medio'} id="medio" onChange={handleInputChange}/>
              <label htmlFor="medio">Médio</label>

              <input type="radio" name="comprimento" value="curto" checked={comprimento === 'curto'} id="curto" onChange={handleInputChange}/>
              <label htmlFor="curto">Curto</label>
            </div>
          </div>

          <div className="orcamento-produto_filter">
            <h2 className="font-1-xs cor-5" style={{ marginBottom: "12px" }}>
              aspecto do seu cabelo?
            </h2>
            <div
              className="orcamento-conteudo_filter field-group_filter"
              id="orcamento-bikcraft_filter"
            >
              <input type="radio" name="aspecto" value="oleoso" checked={aspecto === 'curto'} id="oleoso" onChange={handleInputChange}/>
              <label htmlFor="oleoso">Oleoso</label>

              <input type="radio" name="aspecto" value="seco" checked={aspecto === 'seco'} id="seco" onChange={handleInputChange}/>
              <label htmlFor="seco">Seco</label>

              <input type="radio" name="aspecto" value="misto" checked={aspecto === 'misto'} id="misto" onChange={handleInputChange}/>
              <label htmlFor="misto">Misto</label>
            </div>
          </div>

          {/* <div className="orcamento-produto_filter">
            <h2 className="font-1-xs cor-5" style={{ marginBottom: "12px" }}>
              Com que frequencia lava o cabelo?
            </h2>
            <div
              className="orcamento-conteudo_filter field-group_filter"
              id="orcamento-bikcraft_filter"
            >
              <input type="radio" name="frequencia" value="uma" id="uma" onChange={handleInputChange}/>
              <label htmlFor="uma">Uma semana</label>

              <input type="radio" name="frequencia" value="duas" id="duas" onChange={handleInputChange}/>
              <label htmlFor="duas">Duas vezes semana</label>

              <input type="radio" name="frequencia" value="todos" id="todos" onChange={handleInputChange}/>
              <label htmlFor="todos">Todos os dias</label>
            </div>
          </div>

          <div className="orcamento-produto_filter">
            <h2 className="font-1-xs cor-5" style={{ marginBottom: "12px" }}>
              Usa produtos térmicos?
            </h2>
            <div
              className="orcamento-conteudo_filter field-group_filter"
              id="orcamento-bikcraft_filter"
            >
              <input type="radio" name="termicos" value="sim" id="sim" onChange={handleInputChange}/>
              <label htmlFor="sim">Sim</label>

              <input type="radio" name="termicos" value="nao" id="nao" onChange={handleInputChange}/>
              <label htmlFor="nao">Não</label>

              <input type="radio" name="termicos" value="asvezes" id="asvezes" onChange={handleInputChange}/>
              <label htmlFor="asvezes">Ás vezes</label>
            </div>
          </div>

          <div className="orcamento-produto_filter">
            <h2 className="font-1-xs cor-5" style={{ marginBottom: "12px" }}>
              Usa ferramentas de calor? Ex(secador, chapinhas...)
            </h2>
            <div
              className="orcamento-conteudo_filter field-group_filter"
              id="orcamento-bikcraft_filter"
            >
              <input type="radio" name="ferramentas" value="sim" id="ferramentasSim" onChange={handleInputChange}/>
              <label htmlFor="ferramentasSim">Sim</label>

              <input type="radio" name="ferramentas" value="nao" id="ferramentasNao" onChange={handleInputChange}/>
              <label htmlFor="ferramentasNao">Não</label>

            </div>
          </div> */}
      
        </div>
      </div>

      {/* <div className="cart__prices">
        <span className="cart__prices-item">3 items</span>
        <span className="cart__prices-total">$2880</span>
      </div> */}
    </div>
  );
}
