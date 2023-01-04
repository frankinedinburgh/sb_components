import { TodoList } from "./TodoList";

export default {
  title: "UI/TodoList",
  component: TodoList,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Things to do:",
  todos: [
    "Create a component for an accordion",
    "Fix strapi CMS on Heroku",
    "Do the tech test for Knead",
    "How to get strapi to work with Docker",
  ],
};
