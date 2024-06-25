import React from "react";
import clsx from "clsx";
import VIcon from "@/components/VIcon";

export interface VPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const VPagination: React.FC<VPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={clsx("justify-center px-2 h-8 leading-tight", {
              "text-white bg-blue-600 border rounded": i === currentPage,
              "hover:bg-gray-100 border rounded ": i !== currentPage,
            })}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pageNumbers.push(
          <span key={i} className="justify-center px-2 h-8 leading-tight">
            ...
          </span>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className={clsx("justify-center px-2 h-8 leading-tight", {
          "text-gray-400": currentPage === 1,
        })}
        disabled={currentPage === 1}
      >
        <VIcon
          icon="Right"
          size={20}
          className={clsx("rotate-180", {
            "text-gray-400": currentPage === 1,
          })}
        />
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={clsx("justify-center px-2 h-8 leading-tight", {
          "text-gray-400": currentPage === totalPages,
        })}
        disabled={currentPage === totalPages}
      >
        <VIcon
          icon="Right"
          size={20}
          className={clsx({
            "text-gray-400": currentPage === totalPages,
          })}
        />
      </button>
    </div>
  );
};

export default VPagination;
