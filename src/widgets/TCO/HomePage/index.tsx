import React, { useState } from "react";
import VContainer from "@/components/VContainer";
import VAccordionGroup from "@/components/VAccordion/VAccordionGroup";
import VTypography from "@/components/VTypography";
import VTextField from "@/components/VTextField";
import ProductCard from "@/components/ProductCard";

interface HomePageProps {
  onProductClick: (productId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onProductClick }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const accordionItems = [
    { title: "Your Favorites", content: renderFavorites() },
    { title: "Frequently Selected", content: "Frequently Selected Content" },
    { title: "Recently Viewed", content: "Recently Viewed Content" },
  ];

  function renderFavorites() {
    const favoriteProducts = [
      {
        imageUrl: "/locales/demoImages/Truck.png",
        imageAlt: "Product 1",
        productName: "Product 1",
        productDetails: "1284cc, Diesel, 2 tonnes",
        productId: "1",
      },
      {
        imageUrl: "/locales/demoImages/Truck.png",
        imageAlt: "Product 2",
        productName: "Product 2",
        productDetails: "1284cc, Diesel, 2 tonnes",
        productId: "2",
      },
      {
        imageUrl: "/locales/demoImages/Truck.png",
        imageAlt: "Product 3",
        productName: "Product 3",
        productDetails: "1284cc, Diesel, 2 tonnes",
        productId: "3",
      },
      {
        imageUrl: "/locales/demoImages/Truck.png",
        imageAlt: "Product 4",
        productName: "Product 4",
        productDetails: "1284cc, Diesel, 2 tonnes",
        productId: "4",
      },
    ];

    return (
      <div className="flex overflow-x-scroll space-x-4">
        {favoriteProducts.map((product) => (
          <div
            key={product.productId}
            onClick={() => onProductClick(product.productId)}
            className="cursor-pointer"
          >
            <ProductCard
              imageUrl={product.imageUrl}
              imageAlt={product.imageAlt}
              productName={product.productName}
              productDetails={product.productDetails}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <VContainer maxWidth="xl" fixed>
      <VTypography variant="h1">TCO</VTypography>
      <div className="my-4">
        <VTextField
          name="search"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search by Vehicle Type, Fuel Type, FERT Code, Application etc."
          label="Search"
          iconPosition="right"
          icon="Search"
        />
      </div>
      <VAccordionGroup items={accordionItems} defaultOpenIndex={0} />
    </VContainer>
  );
};

export default HomePage;
