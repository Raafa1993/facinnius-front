import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiClock } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ModalDefault from "../../components/ModalDefault";
import { ItemsData } from "../../data/ItemsData";
import LocalImg from "../../../public/images/sp.webp";
import Image from "next/image";
import { InputDefault } from "../../components/InputDefault";

export default function Locails() {

  return (
    <>
      <Header />
      <main className="main">
        <section className="quality section" id="premium">
          <div className="quality__container container">
            <div
              className="specialty__box"
              style={{ gridTemplateColumns: "1fr" }}
            >
              <h2 className="section__titleSpecialty">
                Specialty coffees that make you happy and cheer you up!
              </h2>
            </div>

            <InputDefault
            label="Locais"
            name="name"
            placeholder="Digite o local"
            icon={IoLocationOutline}
            />
          </div>

          <div className="lojas container">
            <h2 className="font-1-xxl">
              lojas locais<span className="cor-p1">.</span>
            </h2>
            <div className="lojas-item">
              <Image
                src={LocalImg}
                width="1120"
                height="520"
                alt="mapa marcando o endereço em Rua Ali Perto, 35 - Rio de Janeiro - RJ"
              />
              <div className="lojas-conteudo">
                <h3 className="font-1-xl">Rio de Janeiro</h3>
                <div className="lojas-dados font-2-s cor-8">
                  <p>Rua Ali Perto, 35</p>
                  <p>Rio de Janeiro - RJ</p>
                </div>
                <div className="lojas-dados font-2-s cor-8">
                  <a href="rj@bikcraft.com">rj@bikcraft.com</a>
                  <a href="tel:+552199999999">+55 21 9999-9999</a>
                </div>
                <p className="lojas-tempo font-1-s">
                  <FiClock /> 08-18h de seg à dom
                </p>
              </div>
            </div>

            <div className="lojas-item">
              <Image
                src={LocalImg}
                width="1120"
                height="520"
                alt="mapa marcando o endereço em Rua Ali Perto, 35 - São Paulo - SP"
              />
              <div className="lojas-conteudo">
                <h3 className="font-1-xl">São Paulo</h3>
                <div className="lojas-dados font-2-s cor-8">
                  <p>Rua Ali Perto, 35</p>
                  <p>São Paulo - SP</p>
                </div>
                <div className="lojas-dados font-2-s cor-8">
                  <a href="sp@bikcraft.com">sp@bikcraft.com</a>
                  <a href="tel:+551199999999">+55 11 9999-9999</a>
                </div>
                <p className="lojas-tempo font-1-s">
                  <FiClock /> 08-18h de seg à dom
                </p>
              </div>
            </div>

            <div className="lojas-item">
              <Image
                src={LocalImg}
                width="1120"
                height="520"
                alt="mapa marcando o endereço em Rua Ali Perto, 35 - São Paulo - SP"
              />
              <div className="lojas-conteudo">
                <h3 className="font-1-xl">São Paulo</h3>
                <div className="lojas-dados font-2-s cor-8">
                  <p>Rua Ali Perto, 35</p>
                  <p>São Paulo - SP</p>
                </div>
                <div className="lojas-dados font-2-s cor-8">
                  <a href="sp@bikcraft.com">sp@bikcraft.com</a>
                  <a href="tel:+551199999999">+55 11 9999-9999</a>
                </div>
                <p className="lojas-tempo font-1-s">
                  <FiClock /> 08-18h de seg à dom
                </p>
              </div>
            </div>

            <div className="lojas-item">
              <Image
                src={LocalImg}
                width="1120"
                height="520"
                alt="mapa marcando o endereço em Rua Ali Perto, 35 - São Paulo - SP"
              />
              <div className="lojas-conteudo">
                <h3 className="font-1-xl">São Paulo</h3>
                <div className="lojas-dados font-2-s cor-8">
                  <p>Rua Ali Perto, 35</p>
                  <p>São Paulo - SP</p>
                </div>
                <div className="lojas-dados font-2-s cor-8">
                  <a href="sp@bikcraft.com">sp@bikcraft.com</a>
                  <a href="tel:+551199999999">+55 11 9999-9999</a>
                </div>
                <p className="lojas-tempo font-1-s">
                  <FiClock /> 08-18h de seg à dom
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
