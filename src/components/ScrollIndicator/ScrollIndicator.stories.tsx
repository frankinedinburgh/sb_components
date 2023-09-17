import { CSSProperties } from "react";
import { ScrollIndicator } from "./ScrollIndicator";

export default {
  title: "UI/ScrollIndicator",
  component: ScrollIndicator,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <ScrollIndicator {...args} />;

const DataItems = Array.from({ length: 55 }, (n, index) => {
  return {
    id: index,
    post: `Post ${index}. 
      Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
      definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
      quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
      laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
      molestiae voluptatibus.
    `,
  };
});

const styles = {
  post: {
    color: "#fff",
    fontSize: "22px",
    textAlign: "center",
    margin: "12px 20px",
    padding: "28px 28px",
    background: "#c3c3c3",
    borderBottom: "1px solid white",
  },
};

export const Default = Template.bind({});
Default.args = {
  title: "Workouts",
  children: (
    <>
      {DataItems.map((post) => (
        <div key={post.id} style={styles.post as CSSProperties}>
          <p>{post.post}</p>
        </div>
      ))}
    </>
  ),
};
