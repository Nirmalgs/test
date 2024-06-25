import React, { useState } from "react";
import { FormProvider, useFormContext } from "react-hook-form";
import HomePage from "./HomePage";
import ProductDetailPage from "@/widgets/TCO/product/[id]";
import useTCO from "@/hooks/useTCO";

const TCOCalculator: React.FC = () => {
  const methods = useFormContext();
  const [step, setStep] = useState(1);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    setStep(2);
  };

  return (
    <div>
      {step === 1 && <HomePage onProductClick={handleProductClick} />}
      {step === 2 && selectedProductId && (
        <ProductDetailPage id={selectedProductId} />
      )}
    </div>
  );
};

const TCOCalculatorWrapper: React.FC = () => {
  const { methods } = useTCO();

  return (
    <FormProvider {...methods}>
      <TCOCalculator />
    </FormProvider>
  );
};

export default TCOCalculatorWrapper;
