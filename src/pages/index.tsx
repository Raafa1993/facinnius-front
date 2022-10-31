
import Blog from "../components/Blog";
import Categories from "../components/Categories";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Products from "../components/Products";
import Speciality from "../components/Speciality";

export default function Home() {
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
