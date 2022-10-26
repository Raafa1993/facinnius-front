import React from "react";
import { FiClock } from "react-icons/fi";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LocalImg from "../../../public/images/sp.webp";
import Image from "next/image";
import { InputRadio } from "../../components/InputRadio";
import { SelectDefault } from "../../components/SelectDefault";
import { InputDefault } from "../../components/InputDefault";

export default function Contato() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="quality section" id="premium">
          <div className="titulo-bg">
            <div className="titulo container">
              <p className="font-2-l-b cor-5">Estão com dúvidas ou tem alguma sugestão? Preencha os campos abaixo!</p>
              <h1 className="font-1-xxl cor-0">
                Fale com a Facinnius<span className="cor-p1">.</span>
              </h1>
            </div>
          </div>

          <form className="orcamento container" action="./orcamento.html">
            <div className="orcamento-produto">
              {/* <h2 className="font-1-xs cor-5">Bikcraft ou Seguro?</h2> */}
{/* 
              <input type="radio" name="tipo" value="bikcraft" id="bikcraft" />
              <label htmlFor="bikcraft">Bikcraft</label>

              <input type="radio" name="tipo" value="seguro" id="seguro" />
              <label htmlFor="seguro">Seguro</label> */}

              <div className="orcamento-conteudo" id="orcamento-bikcraft">
                <h2 className="font-1-xs cor-5">Tipo de contato</h2>

                <input type="radio" name="produto" value="nimbus" id="nimbus" />
                <label htmlFor="nimbus">Contato</label>

                <input type="radio" name="produto" value="magic" id="magic" />
                <label htmlFor="magic">Seja um distribuidor</label>

                <input type="radio" name="produto" value="nebula" id="nebula" />
                <label htmlFor="nebula">Deixe sua opnião</label>
              </div>
            </div>

            <div className="orcamento-dados form">
              <h2 className="font-1-xs cor-9 col-2">Dados</h2>
              <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" />
              </div>

              <div>
                <label htmlFor="sobrenome">Sobrenome</label>
                <input type="text" id="sobrenome" name="sobrenome" />
              </div>

              <div className="col-2">
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  placeholder="000.000.000-00"
                />
              </div>

              <div className="col-2">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>

              {/* <h2 className="font-1-xs cor-9 col-2">Entrega</h2> */}
              <div>
                <label htmlFor="cep">Telefone</label>
                <input type="text" id="tel" name="tel" />
              </div>

              <div>
                <label htmlFor="numero">Número</label>
                <input type="text" id="numero" name="numero" />
              </div>

              <div>
                <label htmlFor="logradouro">Logradouro</label>
                <input
                  type="text"
                  id="logradouro"
                  name="logradouro"
                  placeholder="rua, avenida.."
                />
              </div>

              <div>
                <label htmlFor="bairro">Bairro</label>
                <input type="text" id="bairro" name="bairro" />
              </div>

              <div>
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" name="cidade" />
              </div>

              <div>
                <label htmlFor="estado">Estado</label>
                <input type="text" id="estado" name="estado" />
              </div>

              <button className="botao col-2">Enviar</button>
            </div>
          </form>
        </section>
        <Footer />
      </main>
    </>
  );
}
