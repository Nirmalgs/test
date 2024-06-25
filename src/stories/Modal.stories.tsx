import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal, { ModalProps } from "@/components/Modal";

export default {
  title: "UI Components/Modal",
  component: Modal,
} as Meta;

const Template: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  title: "Modal Title",
  children: (
    <p>
      This is the modal content. You can put any information here, including
      terms and conditions or policies.
    </p>
  ),
  height: "75vh", // Example height
};
