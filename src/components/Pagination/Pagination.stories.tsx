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
// Default.args = {
//   className: "pagination-bar",
//   currentPage: 2,
//   totalCount: 108,
//   pageSize: 10,
//   onPageChange: (page) => console.log({ page }),
// };
