import React, { useState } from "react";

const Price = ({
  price,
  setPrice,
}: {
  price: number;
  setPrice: (value: number) => void;
}) => {
  const incrementNumber = () => {
    setPrice(price + 1);
  };

  const decrementNumber = () => {
    if (price > 0) {
      setPrice(price - 1);
    }
  };

  return (
    <div className="w-max text-black h-12 bg-white rounded mt-3 flex items-center">
      <button onClick={decrementNumber} className="w-12 h-full text-2xl">
        -
      </button>
      <div className="w-10 h-full flex items-center justify-center text-lg">
        ${price}
      </div>
      <button onClick={incrementNumber} className="w-12 h-full text-2xl">
        +
      </button>
    </div>
  );
};

export default Price;
