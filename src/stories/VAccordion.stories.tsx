import { StoryFn, Meta } from "@storybook/react";
import VAccordion, { VAccordionProps } from "../components/VAccordion";
import VAccordionGroup from "../components/VAccordion/VAccordionGroup";

export default {
  title: "UI Components/VAccordion",
  component: VAccordion,
} as Meta<typeof VAccordion>;

const Template: StoryFn<VAccordionProps> = (args) => <VAccordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: "Fuel Type",
  content: (
    <div>
      <div className="flex items-center space-x-2">
        <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
        <span>EV</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
        <span>CNG</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
        <span>Diesel</span>
      </div>
    </div>
  ),
};

export const Open = Template.bind({});
Open.args = {
  header: (
    <div
      className="w-9/12 flex justify-between"
      onClick={(e) => e.stopPropagation()}
    >
      <span>Price & Taxes</span>
      <button className="underline text-xs">edit</button>
    </div>
  ),
  content: (
    <div>
      <div className="flex items-center space-x-2">
        <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
        <span>EV</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
        <span>CNG</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
        <span>Diesel</span>
      </div>
    </div>
  ),
  isOpen: true,
};

export const AccordionGroup: StoryFn = () => (
  <VAccordionGroup
    items={[
      {
        title: "Fuel Type",
        content: (
          <div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
              <span>EV</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
              <span>CNG</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
              <span>Diesel</span>
            </div>
          </div>
        ),
      },
      {
        title: "Transmission",
        content: (
          <div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
              <span>Automatic</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 bg-gray-400 rounded-full"></span>
              <span>Manual</span>
            </div>
          </div>
        ),
        isOpen: true,
      },
    ]}
  />
);
