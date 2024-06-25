import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ProductCard, { ProductCardProps } from "../components/ProductCard";

export default {
  title: "Container/ProductCard",
  component: ProductCard,
} as Meta;

const Template: StoryFn<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "locales/demoImages/Truck.png",
  imageAlt: "Product Image",
  productName: "Name of Product",
  productDetails: "1284cc, 50 litres",
};
