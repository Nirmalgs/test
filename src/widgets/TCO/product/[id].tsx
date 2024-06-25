import React from "react";
import { useRouter } from "next/router";
import VContainer from "@/components/VContainer";
import VTypography from "@/components/VTypography";
import VBackButton from "@/components/BackButton";
import VDivider from "@/components/VDivider";
import VSlider from "@/components/VSlider";
import VButton from "@/components/VButton";
import IconButton from "@/components/IconButton/IconButton";

interface ProductDetailPageProps {
  id: string;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ id }) => {
  const router = useRouter();
  const { id: routerId } = router.query;

  const product = {
    name: `Name of the Vehicle with ID ${id || routerId}`,
    fertCode: "AS2345BVCF",
    images: [
      "/locales/demoImages/truck.png",
      "/locales/demoImages/truck.png",
      "/locales/demoImages/truck.png",
      "/locales/demoImages/truck.png",
    ],
    specifications: {
      type: "4",
      power: "70 hp",
      gvw: "2590 kg",
      mileage: "19.6 kmpl",
      engine: "1478 cc",
      fuelTank: "40 Ltr",
      payload: "1350 Kgs",
      chassisType: "Chassis with Cabin",
    },
    relatedProducts: [
      { name: "Product 1", description: "1284cc, Diesel, 2 tonnes" },
      { name: "Product 2", description: "1284cc, Diesel, 2 tonnes" },
    ],
  };

  return (
    <VContainer maxWidth="xl" fixed>
      <VBackButton />
      <nav className="my-2">
        <a href="#">Products</a> &gt; <a href="#">{product.name}</a>
      </nav>
      <VTypography variant="h2">{product.name}</VTypography>
      <VTypography variant="body2">{product.fertCode}</VTypography>
      <div className="my-4">
        <VSlider
          images={product.images}
          mainImageWidth={600}
          mainImageHeight={600}
          thumbnailWidth={100}
          thumbnailHeight={100}
        />
      </div>
      <VDivider className="my-4" />
      <VTypography variant="h3">KEY SPECIFICATIONS</VTypography>
      <ul>
        {Object.entries(product.specifications).map(([key, value], index) => (
          <li key={index}>
            <strong>{key.replace(/([A-Z])/g, " $1").toUpperCase()}: </strong>
            {value}
          </li>
        ))}
      </ul>
      <VDivider className="my-4" />
      <VTypography variant="h3">TOOLS</VTypography>
      <div className="flex flex-col space-y-2">
        <button className="p-2 border rounded">
          Calculate Total Cost of Ownership
        </button>
        <IconButton
          variant="secondary"
          label={product.name}
          iconColor="b_grey"
          icon="Right"
        ></IconButton>
        <button className="p-2 border rounded">Service Cost Calculator</button>
        <button className="p-2 border rounded">Finance Calculator</button>
        <button className="p-2 border rounded">Talk to EichMan</button>
      </div>
      <VDivider className="my-4" />
      <VTypography variant="h3">COMPARE</VTypography>
      <div className="flex flex-col space-y-2">
        {product.relatedProducts.map((relatedProduct, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input type="checkbox" />
            <div className="flex-1 p-4 border rounded">
              <div className="h-24 bg-gray-200">product image</div>
              <VTypography variant="h3">{relatedProduct.name}</VTypography>
              <VTypography variant="body2">
                {relatedProduct.description}
              </VTypography>
            </div>
          </div>
        ))}
        <button className="p-2 border rounded">COMPARE</button>
      </div>
    </VContainer>
  );
};

export default ProductDetailPage;
