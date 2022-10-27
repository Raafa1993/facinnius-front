import React, { ChangeEvent, FormEvent, useState } from "react";
import api from "../../services/api";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

export default function Contato() {
  const router = useRouter()
  const [typeForm, setTypeForm] = useState('contato')
  const [formData, setFormData] = useState<any>({})

  function handleOnSelectForm(event: ChangeEvent<HTMLInputElement>) {
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      regiao: '',
      cabeleireiro: '',
      mensagem: '',
      endereco: '',
      numero: '',
      cidade: '',
      opiniao: ''
    })
    setTypeForm(event.target.value)
  }

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubimit(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.post(`send-email/${typeForm}`, formData);
      console.log('response', response.data)
      toast.success('Dados enviado com sucesso!')

      router.push('/');
    } catch(error: any) {
      toast.error(error.response.data.result)
    }

  }

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

          <div className="orcamento container">
            <div className="orcamento-produto">
              <div className="orcamento-conteudo" id="orcamento-bikcraft">
                <h2 className="font-1-xs cor-5">Tipo de contato</h2>

                <input type="radio" name="contato" value="contato" id="contato" checked={typeForm === 'contato'} onChange={(e) => handleOnSelectForm(e)} />
                <label htmlFor="contato">Contato</label>

                <input type="radio" name="distribuidor" value="distribuidor" checked={typeForm === 'distribuidor'} id="distribuidor" onChange={(e) => handleOnSelectForm(e)}/>
                <label htmlFor="distribuidor">Seja um distribuidor</label>

                <input type="radio" name="opiniao" value="opiniao" id="opiniao" checked={typeForm === 'opiniao'} onChange={(e) => handleOnSelectForm(e)}/>
                <label htmlFor="opiniao">Deixe sua opnião</label>
              </div>
            </div>

            <form onSubmit={handleSubimit}>
              <div className="orcamento-dados form">
                <h2 className="font-1-xs cor-9 col-2">Dados</h2>
                <div className="col-2">
                  <label htmlFor="nome">Nome</label>
                  <input value={formData.nome} type="text" id="nome" name="nome" onChange={handleInputChange}/>
                </div>

                <div>
                  <label htmlFor="telefone">Telefone</label>
                  <input value={formData.telefone} type="text" id="telefone" name="telefone" onChange={handleInputChange}/>
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input value={formData.email} type="email" id="email" name="email" onChange={handleInputChange}/>
                </div>

                {typeForm === 'contato' && (
                  <>
                    <div>
                      <label htmlFor="regiao">Qual sua região</label>
                      <input value={formData.regiao} type="text" id="regiao" name="regiao" onChange={handleInputChange}/>
                    </div>

                    <div>
                      <label htmlFor="cabeleireiro">Você é cabeleireiro?</label>
                      <select value={formData.cabeleireiro} id="cabeleireiro" name="cabeleireiro" onChange={handleSelectChange}>
                        <option value="0">Selecione uma opção</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                      </select>
                    </div>
                  </>
                )}

                {typeForm === 'opiniao' && (
                  <>
                    <div className="col-2">
                      <label htmlFor="categoria">Você é cabeleireiro?</label>
                      <select value={formData.categoria} id="categoria" name="categoria" onChange={handleSelectChange}>
                        <option value="0">Selecione uma opção</option>
                        <option value="site">site</option>
                        <option value="produtos">Produtos</option>
                        <option value="produtos">Produtos</option>
                        <option value="consultores">Consultores</option>
                        <option value="elogios">Elogios</option>
                        <option value="duvidas">Duvidas</option>
                        <option value="sugestoes">Sugestões</option>
                      </select>
                    </div>
                  </>
                )}
                
                {typeForm === 'distribuidor' && (
                  <>
                    <div className="col-2">
                      <label htmlFor="endereco">Endereco</label>
                      <input value={formData.endereco} type="text" id="endereco" name="endereco" onChange={handleInputChange}/>
                    </div>

                    <div>
                      <label htmlFor="numero">Numero</label>
                      <input value={formData.numero} type="text" id="numero" name="numero" onChange={handleInputChange}/>
                    </div>

                    <div>
                      <label htmlFor="cidade">Cidade</label>
                      <input value={formData.cidade} type="text" id="cidade" name="cidade" onChange={handleInputChange}/>
                    </div>
                  </>
                )}

                {typeForm !== 'distribuidor' && (
                  <div className="col-2">
                    <label htmlFor={typeForm === 'opiniao' ? 'opiniao' : 'mensagem'}>{typeForm === 'opiniao' ? 'Deixe sua opnião' : 'Deixe sua mensagem'}</label>
                    <textarea value={typeForm === 'opiniao' ? formData.opiniao : formData.mensagem} name={typeForm === 'opiniao' ? 'opiniao' : 'mensagem'} id={typeForm === 'opiniao' ? 'opiniao' : 'mensagem'} onChange={handleTextareaChange}/>
                  </div>
                )}

                <button className="botao col-2">Enviar</button>
              </div>
            </form>
          </div>

        </section>
        <Footer />
      </main>
    </>
  );
}
