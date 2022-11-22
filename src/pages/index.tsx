
import { GetStaticProps } from "next";
import Blog from "../components/Blog";
import Categories from "../components/Categories";
import Collection from "../components/Collection";
import Duvidas from "../components/Duvidas";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Products from "../components/Products";
import Speciality from "../components/Speciality";
import { getBlogBr } from "../lib/blogBr";
import { getBlogEn } from "../lib/blogEn";
import { getLineBr } from "../lib/lineBr";
import { getLineEn } from "../lib/lineEn";
import { getProdutcBr } from "../lib/produtosBr";
import { getProdutcEn } from "../lib/produtosEn";
import { getQuestionBr } from "../lib/questionBr";
import { getQuestionEn } from "../lib/questionEn";

export default function Home({ productEn, productBr, blogBr, blogEn, questionBr, questionEn }) {

  return (
    <>
      <Header />
      <main className="main">
        <Main />
        <Speciality />
        {/* <Categories lineBr={lineBr} lineEn={lineEn} /> */}
        <Duvidas questionBr={questionBr} questionEn={questionEn} />
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
  const lineBr = getLineBr();
  const lineEn = getLineEn();
  const questionBr = getQuestionBr();
  const questionEn = getQuestionEn();

  return {
    props: {
      productBr: productBr,
      productEn: productEn,
      blogBr,
      blogEn,
      lineBr,
      lineEn,
      questionBr,
      questionEn
    },
  }
}