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
  title: "My To Do List",
};
