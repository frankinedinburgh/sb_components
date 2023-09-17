import { Pagination } from "./Pagination";

export default {
  title: "UI/Pagination",
  component: Pagination,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10,
  onPageChange: (page) => {
    console.log(`Page changed to ${page}`);
  },
};
