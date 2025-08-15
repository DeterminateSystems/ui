import type { Meta, StoryObj } from "@storybook/react-vite";

import PageLayout from ".";
import { Placeholder } from "../Placeholder";
import Header from "../Header";
import DetSysIcon from "../DetSysIcon";
import ColorSchemeToggle from "../ColorSchemeToggle";
import Navigation from "../Navigation";

const meta = {
  title: "Template/PageLayout",
  component: PageLayout,
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => (
  <>
    <PageLayout width="full">
      <PageLayout.Header>
        <Placeholder height="2em" label="Header" />
      </PageLayout.Header>
      <PageLayout.Footer>
        <Placeholder height="2em" label="Footer" />
      </PageLayout.Footer>
      <PageLayout.Content>
        <Placeholder height="15em" label="Content" />
      </PageLayout.Content>
      <PageLayout.Pane>
        <Placeholder height="3em" label="Pane 1" />
      </PageLayout.Pane>
      <PageLayout.Pane>
        <Placeholder height="3em" label="Pane 2" />
      </PageLayout.Pane>
    </PageLayout>
  </>
);

export const FleshedOut = () => (
  <>
    <PageLayout width="full">
      <PageLayout.Header>
        <Header>
          <Header.Logo>
            <DetSysIcon size="base" />
            <h1 style={{ margin: 0 }}>DetSys</h1>
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
      </PageLayout.Header>

      <PageLayout.Content>
        <Placeholder label="hi" height="10em" />
      </PageLayout.Content>
      <PageLayout.Pane>
        <Placeholder height="3em" label="Pane 2" />
      </PageLayout.Pane>
    </PageLayout>
  </>
);
