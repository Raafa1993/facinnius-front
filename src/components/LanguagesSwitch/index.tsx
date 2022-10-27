import React from "react";
import { useTranslation } from "react-i18next";
import { FaFlagCheckered, FaFlagUsa } from "react-icons/fa";

const languageOptions = [
  {
    name: "Pt-br",
    value: "br",
    flag: FaFlagCheckered,
  },
  {
    name: "EN",
    value: "en",
    flag: FaFlagUsa,
  },
];

export default function LanguagesSwitch() {
  const { t, i18n } = useTranslation();

  return (
    <div className="language-switch" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div className="fieldLanguage" style={{ display: 'flex', gap: '10px' }}>
        {languageOptions.map((row) => (
          <button
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60px', gap: '4px', border: '2px solid #fff', background: '#dfdfdf', padding: '4px', marginLeft: '2rem'  }}
            key={row.value}
            onClick={() => {
              i18n.changeLanguage(row.value)
            }}
          >
            {<row.flag />}
            <span>{row.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
