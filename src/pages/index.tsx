
import { GetStaticProps } from "next";
import Blog from "../components/Blog";
import Categories from "../components/Categories";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Products from "../components/Products";
import Speciality from "../components/Speciality";
import { getBlogBr } from "../lib/blogBr";
import { getBlogEn } from "../lib/blogEn";
import { getProdutcBr } from "../lib/produtosBr";
import { getProdutcEn } from "../lib/produtosEn";

export default function Home({ productEn, productBr, blogBr, blogEn }) {

  return (
    <>
      <Header />
      <main className="main">
        <Main />
        <Speciality />
        <Categories />
        <Collection />
        <Products productEn={productEn} productBr={productBr} />
        <Blog blogBr={blogBr} blogEn={blogEn}/>
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const productBr = getProdutcBr();
  const productEn = getProdutcEn();
  const blogBr = getBlogBr();
  const blogEn = getBlogEn();

  return {
    props: {
      productBr: productBr,
      productEn: productEn,
      blogBr,
      blogEn,
    }
  }
}