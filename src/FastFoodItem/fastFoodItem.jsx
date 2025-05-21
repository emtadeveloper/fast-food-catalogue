/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { HiShoppingCart } from "react-icons/hi";

export const FastFoodItem = ({ name, price, ingredients, imageUrl, delay }) => {
  return (
    <div
      className="card product-card h-100 border-0 shadow-sm pd-1 fade-in-horiz "
      style={{ animationDelay: delay + "s" }}
    >
      <span className="badge bage-end badge-shadow bg-sucess fs-md fw-medium">قیمت : {price} تومان</span>

      <img src={imageUrl} alt="" className="card-img-top" />
      <div className="card-body text-center pt-3 pb-4 d-flex flex-column">
        <h5 className="mb-2">{name}</h5>
        <div className="fs-ms fw-bold text-muted mb-3">{ingredients}</div>
        <button className="btn btn-outline-success btn-sm  w-100  mt-auto fw-bold">
          <HiShoppingCart className="fs-5 ms-3" />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};
