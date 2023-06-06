import React from "react";
import { Story, Meta } from "@storybook/react";

import Layout from "./Layout";

export default {
  title: "UI/Layout",
  component: Layout,
} as Meta;

const Header: React.FC = () => {
  return (
    <div>
      {/* Place your header content here */}
      <h1>Strava</h1>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div>
      {/* Place your footer content here */}
      <p>© 2023 Strava. All rights reserved.</p>
    </div>
  );
};

const Template: Story = (args) => (
  <Layout {...args}>
    <h2>Welcome to Strava</h2>
    <p>Track and analyze your workouts with ease.</p>
  </Layout>
);

export const Default = Template.bind({});
Default.args = {
  header: <Header />,
  footer: <Footer />,
};
