import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";

import {setCookie, parseCookies} from 'nookies'
import nookies from 'nookies'

const ModalCookies = (props) => {
  const [modal, setModal] = useState(false);
  const [teste, setTeste] = useState(false);
  // const [cookie, setCookie] = useState(() => {
  //   const coke = localStorage.getItem('@Alpha:Cookie');
  //   if (coke) {
  //     return { coke };
  //   }
  //   return {};
  // });

  console.log('cookies', props)

  function handleCookie() {
    // localStorage.setItem('@Alpha:Cookie', 'true');
    setCookie(null, 'COKE', 'true', {
      maxAge: 86400 * 7,
      path: '/'
    })
    setTeste(!teste)
  }

  
  return (
    <div className={`containerCookie containerCookieDark `}>
      <div className="infoCookie">
        <span>
          Utilizamos cookies para melhorar sua experiência. Ao continuar
          navegando, você aceita a nossa política de monitoramento. Mais
          informações, consulte a seção "Utilização de cookies" em nossos
          <button className="buttonTerms" onClick={() => setModal(!modal)}>
            Nossos termos de uso.
          </button>
        </span>
      </div>

      <button 
        className="buttonAcceptCookies"
        onClick={handleCookie}
        >
            Aceitar
        </button>
        
    </div>
  );
};

export default ModalCookies;

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  console.log("TESTE", cookies)
  return {
    props: {
      cokies: cookies.COKE
    }, // will be passed to the page component as props
  }
}