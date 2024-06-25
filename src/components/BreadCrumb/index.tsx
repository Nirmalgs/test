import React from "react";
import { useFormContext } from "react-hook-form";

interface BreadcrumbProps {
  name: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ name }) => {
  const breadCrumbLength = 7;
  const methods = useFormContext();
  const { setValue, watch } = methods;
  const value = watch(name);
  const handleClick = (i: number) => {
    // Only allow backward navigation
    if (i + 1 < value) {
      setValue("step", i + 1);
    }
  };
  
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: breadCrumbLength }, (_, i) => (
        <div key={i} className="relative flex items-center">
          <div
            className={`h-4 w-4 flex items-center justify-center rounded-full border-2 cursor-pointer ${
              value > i + 1
                ? "bg-black border-black text-white"
                : value === i + 1
                  ? "bg-black border-black text-white"
                  : "bg-white border-gray-300 text-gray-500"
            }`}
            onClick={() => handleClick(i)}
          >
            <span className="sr-only">{i + 1}</span>
          </div>
          {i < breadCrumbLength - 1 && (
            <div
              className={`h-0.5 w-6 sm:w-10 md:w-12 ${
                value > i + 1 ? "bg-black" : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
