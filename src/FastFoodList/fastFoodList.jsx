/* eslint-disable react/prop-types */

import { FastFoodItem } from "../FastFoodItem/fastFoodItem";

// eslint-disable-next-line react/prop-types

const FastFoodList = ({ fastFoodItems }) => {
  let delay = 0.1;

  return (
    <div className="row">
      {fastFoodItems.map((fastfood) => {
        delay += 0.03;
        return (
          <div className="col-md-4 col sm-6 mb-grid-gutter" key={fastfood.id}>
            <FastFoodItem delay={delay} {...fastfood} />
          </div>
        );
      })}
    </div>
  );
};
export default FastFoodList;
