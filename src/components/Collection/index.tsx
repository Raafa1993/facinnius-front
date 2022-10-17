import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

export default function Collection() {
  return (
    <section className="collection section" id="collection">
      <div className="collection__container container">
        <div className="collection__explore">
          <div className="collection__data-men">
            <h2 className="collection__title">
              Men <br />
              Collection
            </h2>
            <a href="#" className="button__link">
              Explore Clothes <i className="ri-arrow-right-line"><RiArrowRightLine /></i>
            </a>
          </div>

          <img src="../images/collection1.png" alt="collection image" />
        </div>

        <div className="collection__explore">
          <img src="../images/collection2.png" alt="collection image" />

          <div className="collection__data-women">
            <h2 className="collection__title">
              Women <br />
              Collection
            </h2>
            <a href="#" className="button__link">
              Explore Clothes <i className="ri-arrow-right-line"><RiArrowRightLine /></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
