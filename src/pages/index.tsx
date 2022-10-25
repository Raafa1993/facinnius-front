import { reveal } from "scrollreveal";

import Blog from "../components/Blog";
import Categories from "../components/Categories";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Products from "../components/Products";
import Speciality from "../components/Speciality";

export default function Home() {
  // const sr = ScrollReveal({
  //   origin: "top",
  //   distance: "60px",
  //   duration: 2500,
  //   delay: 400,
  //   // reset: true
  // });

  // sr.reveal(`.home__data, .products__container, .footer__container, .footer__info`);
  // sr.reveal(`.home__images`, { delay: 600, origin: "bottom" });
  // sr.reveal(`.new__card, .brand__img`, { interval: 100 });
  // sr.reveal(`.collection__explore:nth-child(1)`, { origin: "right" });
  // sr.reveal(`.collection__explore:nth-child(2)`, { origin: "left" });

  return (
    <>
      <Header />
      <main className="main">
        <Main />
        <Speciality />
        <Categories />
        <Collection />
        <Products />
        <Blog />
        <Footer />
      </main>
    </>
  );
}
