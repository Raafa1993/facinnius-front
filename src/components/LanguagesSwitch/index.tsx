import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

import FlagBr from '../../../public/images/flag_br.png'
import FlagEua from '../../../public/images/flag_eua.png'

const languageOptions = [
  {
    name: "Pt-br",
    value: "ptbr",
    flag: FlagBr,
  },
  {
    name: "EN",
    value: "en",
    flag: FlagEua,
  },
];

const stylesButton = {
  display: 'grid',
  placeItems: 'center',
  border: 'none',
  background: 'transparent',
  width: '26px',
  height: '26px',
  borderRadius: '50%',
  flexShirink: '0',
  marginLeft: '1rem',
  cursor: 'pointer'
}

export default function LanguagesSwitch() {
  const { t, i18n } = useTranslation();

  return (
    <div className="language-switch">
      <div className="fieldLanguage" style={{ display: 'flex' }}>
        {languageOptions.map((row) => (
          <button
            style={stylesButton}
            key={row.value}
            onClick={() => {
              i18n.changeLanguage(row.value)
            }}
          >
            <Image 
              src={row.flag} 
              alt={row.name} 
              style={{ 
                filter: i18n.language === row.value ? 'grayscale(0)' : 'grayscale(1)' 
              }} />
          </button>
        ))}
      </div>
    </div>
  );
}
