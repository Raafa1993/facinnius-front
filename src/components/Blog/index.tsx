import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

export default function Blog() {
  return (
    <section className="blog section" id="blog">
      <div className="blog__container container">
        <h2 className="section__titleSpecialty">
          Our Blogs Coffee with trending topic for this week
        </h2>

        <div className="blog__content grid">
          <article className="blog__card">
            <div className="blog__image">
              <img src="../images/blog1.png" alt="" className="blog__img" />
              <a href="#" className="blog__button">
                <i className="bx bx-right-arrow-alt"><BiRightArrowAlt /></i>
              </a>
            </div>

            <div className="blog__data">
              <h2 className="blog__title">10 Coffee Recommendations</h2>
              <p className="blog__description">
                The blogs about coffee will help you a lot about how it is
                prepared, its waiting time, for a good quality coffee.
              </p>

              <div className="blog__footer">
                <div className="blog__reaction">
                  <i className="bx bx-comment"></i>
                  <span>12</span>
                </div>
                <div className="blog__reaction">
                  <i className="bx bx-show"></i>
                  <span>76,5K</span>
                </div>
              </div>
            </div>
          </article>

          <article className="blog__card">
            <div className="blog__image">
              <img src="../images/blog2.png" alt="" className="blog__img" />
              <a href="#" className="blog__button">
                <i className="bx bx-right-arrow-alt"><BiRightArrowAlt /></i>
              </a>
            </div>

            <div className="blog__data">
              <h2 className="blog__title">12 Benefits Of Drinking Coffee</h2>
              <p className="blog__description">
                The blogs about coffee will help you a lot about how it is
                prepared, its waiting time, for a good quality coffee.
              </p>

              <div className="blog__footer">
                <div className="blog__reaction">
                  <i className="bx bx-comment"></i>
                  <span>45</span>
                </div>
                <div className="blog__reaction">
                  <i className="bx bx-show"></i>
                  <span>356,5K</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
