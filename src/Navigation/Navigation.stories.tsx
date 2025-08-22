import type { Meta } from "@storybook/react-vite";

import Navigation from ".";
import { Placeholder } from "../Placeholder";
import Header from "../Header";
import ColorSchemeToggle from "../ColorSchemeToggle";

const meta = {
  title: "Molecules/Navigation",
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export default meta;

export const Default = () => (
  <>
    <div
      style={{
        height: "300px",
        width: "500px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <div>
        <div>
          <Navigation>
            <Navigation.Element>
              <Placeholder height="100%" label="Primary Element" />
            </Navigation.Element>

            <Navigation.Element>
              <Placeholder height="100%" label="Navigation Link" />
            </Navigation.Element>
          </Navigation>
        </div>
      </div>
    </div>
  </>
);

export const InHeader = () => (
  <>
    <Header>
      <Header.Logo>
        <Placeholder height="100%" label="DetSys Logo" />
      </Header.Logo>
      <Header.Element>
        <ColorSchemeToggle />
        <Navigation>
          <Navigation.Element>
            <Placeholder height="100%" label="Lorem" />
          </Navigation.Element>

          <Navigation.Element>
            <Placeholder height="100%" label="Ipsum" />
          </Navigation.Element>
        </Navigation>
      </Header.Element>
    </Header>
  </>
);
