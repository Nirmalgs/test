import React from "react";
import { useRouter } from "next/router";
import VIcon from "../VIcon";
import VTypography from "../VTypography";

const VBackButton: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="flex items-center cursor-pointer" onClick={handleBackClick}>
      <VIcon iconColor="black" icon="Left" />
      <VTypography variant="body4" color="black">
        Back
      </VTypography>
    </div>
  );
};

export default VBackButton;
