import React from "react";
import { Splide, SplideSlide, SplideProps } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import ProductCard from "../ProductCard";

interface Product {
  imageUrl: string;
  imageAlt: string;
  productName: string;
  productDetails: string;
}

interface ProductSliderProps {
  products: Product[];
  options?: SplideProps["options"];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products, options }) => {
  const defaultOptions: SplideProps["options"] = {
    type: "loop",
    perPage: 3,
    perMove: 1,
    pagination: true,
    arrows: false,
    breakpoints: {
      568: {
        perPage: 2,
      },
    },
    ...options,
  };

  return (
    <Splide options={defaultOptions}>
      {products.map((product, index) => (
        <SplideSlide key={index}>
          <ProductCard
            imageUrl={product.imageUrl}
            imageAlt={product.imageAlt}
            productName={product.productName}
            productDetails={product.productDetails}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default ProductSlider;
