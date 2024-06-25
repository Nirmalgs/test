import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import VPagination, { VPaginationProps } from "@/components/VPagination";

export default {
  title: "UI Components/VPagination",
  component: VPagination,
} as Meta<typeof VPagination>;

const Template: StoryFn<VPaginationProps> = (args) => {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <VPagination
      {...args}
      currentPage={currentPage}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  totalPages: 17,
};
