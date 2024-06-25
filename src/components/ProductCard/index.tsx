import React from "react";
import Image from "next/image";
import VTypography from "../VTypography";

export interface ProductCardProps {
  imageUrl: string;
  imageAlt: string;
  productName: string;
  productDetails: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  imageAlt,
  productName,
  productDetails,
}) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden m-1 lg:m-2 flex-shrink-0 w-64">
      <div className="relative w-full h-32">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-1">
        <VTypography variant="p">{productName}</VTypography>
        <VTypography variant="body4">{productDetails}</VTypography>
      </div>
    </div>
  );
};

export default ProductCard;
