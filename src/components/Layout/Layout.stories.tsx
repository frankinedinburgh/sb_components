import { Default as Histogram } from "../Charts/Histogram/Histogram.stories";
import {
  Default as PieChart,
  Secondary,
} from "../Charts/PieChart/PieChart.stories";
import Stack from "../Containers/Stack";
import { Default as Footer } from "../Footer/Footer.stories";
import { LoggedIn } from "../Header/Header.stories";
import { Basic as Navbar } from "../Navbar/Navbar.stories";
import { Default as TodoList } from "../TodoList/TodoList.stories";
import { Layout } from "./Layout";

export default {
  title: "UI/Layout",
  component: Layout,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <Layout {...args} />;

export const HomePage = Template.bind({});
HomePage.args = {
  navbar: <Navbar {...Navbar.args} />,
  header: <LoggedIn {...LoggedIn.args} />,
  aside: (
    <Stack direction="column">
      <PieChart {...PieChart.args} />
      <PieChart {...Secondary.args} />
      <Histogram {...Histogram.args} />
    </Stack>
  ),
  children: (
    <Stack direction="column">
      <TodoList {...TodoList.args} />
    </Stack>
  ),
  footer: <Footer {...Footer.args} />,
};
