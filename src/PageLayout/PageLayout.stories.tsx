import { useEffect, useRef, useState, type FC } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import PageLayout from ".";
import { Placeholder } from "../Placeholder";
import Header from "../Header";
import DetSysIcon from "../DetSysIcon";
import ColorSchemeToggle from "../ColorSchemeToggle";
import Navigation from "../Navigation";

/**
 * Story-only: outlines the layout and its centered container, and reports the
 * size of the view and of the container, so it's clear where each one ends.
 */
const Bounds: FC<React.PropsWithChildren> = ({ children }) => {
  const frame = useRef<HTMLDivElement>(null);
  const [sizes, setSizes] = useState("");

  useEffect(() => {
    const main = frame.current?.querySelector("main");

    const measure = () => {
      const view = `view ${window.innerWidth} × ${window.innerHeight}`;
      const container = main
        ? ` · container ${Math.round(main.getBoundingClientRect().width)}`
        : "";
      setSizes(view + container);
    };

    measure();
    window.addEventListener("resize", measure);
    const observer = new ResizeObserver(measure);
    if (main) observer.observe(main);

    return () => {
      window.removeEventListener("resize", measure);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={frame} className="page-layout-bounds">
      <style>{`
        .page-layout-bounds { width: 100%; outline: 1px dashed #ec2c5b; }
        .page-layout-bounds main { outline: 1px dashed #1e9fd9; }
      `}</style>
      {children}
      <output
        style={{
          position: "fixed",
          right: 8,
          bottom: 8,
          zIndex: 20,
          padding: "2px 8px",
          borderRadius: 4,
          font: "12px ui-monospace, monospace",
          color: "#ffffff",
          background: "#231f20",
        }}
      >
        {sizes}
      </output>
    </div>
  );
};

const meta = {
  title: "Template/PageLayout",
  argTypes: {
    width: { options: ["full"] },

    // Marked these all as function instead of an "object" control due to:
    // https://github.com/storybookjs/storybook/issues/32202
    header: { type: "function" },
    footer: { type: "function" },
    panes: { type: "function" },
    content: { type: "function" },
  },
  component: PageLayout,
  decorators: [
    (Story) => (
      <Bounds>
        <Story />
      </Bounds>
    ),
  ],
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "full",
    header: <Placeholder height="2em" label="Header" />,
    footer: <Placeholder height="2em" label="Footer" />,
    panes: [
      <Placeholder key="pane-1" height="3em" label="Pane 1" />,
      <Placeholder key="pane-2" height="3em" label="Pane 2" />,
    ],
    content: <Placeholder height="15em" label="Content" />,
  },
};

/**
 * `Default` at one of the screen sizes from the viewport toolbar. These are
 * for browsing: the docs page can't show a viewport, and Chromatic already
 * snapshots every story at each size through its modes.
 */
const atViewport = (viewport: string): Story => ({
  ...Default,
  globals: { viewport: { value: viewport, isRotated: false } },
  tags: ["!autodocs"],
  parameters: { chromatic: { disableSnapshot: true } },
});

/** 360px wide: content and panes stack in one column. */
export const SmallMobile = atViewport("mobile1");

/** 414px wide. */
export const LargeMobile = atViewport("mobile2");

/** 834px wide: panes sit beside the content. */
export const Tablet = atViewport("tablet");

/** 1280px wide: the container stops growing. */
export const Desktop = atViewport("desktop");

export const FleshedOut: Story = {
  args: {
    header: (
      <Header
        logo={
          <>
            <DetSysIcon size="base" />
            <h1 style={{ margin: 0 }}>DetSys</h1>
          </>
        }
        elements={[
          <ColorSchemeToggle key="color-scheme-toggle" />,
          <Navigation
            key="nav"
            elements={[
              <Placeholder key="lorem" height="100%" label="Lorem" />,
              <Placeholder key="ipsum" height="100%" label="Ipsum" />,
            ]}
          />,
        ]}
      />
    ),
    content: <div style={{ height: "100em" }} />,
    panes: [<Placeholder height="3em" label="Pane 1" />],
  },
};
