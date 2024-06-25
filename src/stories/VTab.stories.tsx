import { StoryFn, Meta } from "@storybook/react";
import VTab, { VTabProps } from "@/components/VTab";
import VTabGroup from "@/components/VTabGroup";

export default {
  title: "UI Components/VTab",
  component: VTab,
} as Meta<typeof VTab>;

const Template: StoryFn<VTabProps> = (args) => <VTab {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
};

export const Hover = Template.bind({});
Hover.args = {
  label: "Label",
};

export const Focus = Template.bind({});
Focus.args = {
  label: "Label",
  disabled: false,
};

export const Active = Template.bind({});
Active.args = {
  label: "Label",
  active: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  disabled: true,
};

export const TabGroup: StoryFn = () => (
  <VTabGroup
    tabs={[
      { label: "Tab 1" },
      { label: "Tab 2" },
      { label: "Tab 3", disabled: true },
      { label: "Tab 4" },
    ]}
  />
);
