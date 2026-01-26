import type { Meta, StoryObj } from "@storybook/react-vite";

import Markdown from ".";
import chattygeeps from "./samples/chatty-geeps.md?raw";

const meta = {
  title: "Atoms/Markdown",
  component: Markdown,
  argTypes: {
    source: { type: "string" },
  },
} satisfies Meta<typeof Markdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    source: chattygeeps,
  },
};

export const Italics: Story = {
  args: {
    source: `*Here's some italic text.*`,
  },
};

export const Bold: Story = {
  args: {
    source: `**Here's some bold text.**`,
  },
};

export const BoldItalic: Story = {
  args: {
    source: `***Here's some boldly italic text.***`,
  },
};

export const TwoParagraphs: Story = {
  args: {
    source: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et mi at ante suscipit molestie in id libero. Nam sodales metus nulla, at posuere libero condimentum a. Praesent sollicitudin enim vitae enim auctor finibus. Duis at risus ante. In hac habitasse platea dictumst. Morbi egestas velit magna, non sodales magna ultricies quis. Nunc cursus pretium luctus. Praesent convallis congue sapien, id posuere turpis sagittis at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur, dui a bibendum interdum, tellus ex auctor turpis, interdum tempus eros dui vitae orci. Duis sit amet ipsum id sem convallis laoreet. Morbi cursus hendrerit ligula, vel malesuada mauris rhoncus non. Pellentesque euismod justo metus. Pellentesque tellus est, convallis cursus tortor quis, pulvinar ullamcorper sem. Mauris et imperdiet justo. Praesent pretium aliquam ipsum quis mattis.

Fusce non tincidunt ligula, non faucibus leo. Donec dui urna, tincidunt id pretium eu, volutpat in lectus. Fusce vestibulum eros a nunc bibendum, quis varius urna sodales. Cras felis nibh, blandit vel neque vel, porttitor feugiat ante. Ut finibus tincidunt augue sit amet tristique. In ipsum dolor, porttitor vitae massa ac, posuere laoreet nisi. Nulla vel varius velit. Morbi pulvinar ut lorem vel sollicitudin. Vestibulum condimentum ultrices sapien, nec porttitor tortor vestibulum ut. Aenean lorem justo, maximus eu lorem at, volutpat pharetra lectus. Etiam sollicitudin laoreet dui a dictum.`,
  },
};

export const HorizontalRule: Story = {
  args: {
    source: `
Top

---

Bottom
`,
  },
};

export const HeadingOne: Story = {
  args: {
    source: `# Remember to use sentence case`,
  },
};

export const HeadingTwo: Story = {
  args: {
    source: `## Remember to use sentence case`,
  },
};

export const HeadingThree: Story = {
  args: {
    source: `### Remember to use sentence case`,
  },
};

export const HeadingFour: Story = {
  args: {
    source: `#### Remember to use sentence case`,
  },
};

export const HeadingFive: Story = {
  args: {
    source: `##### Remember to use sentence case`,
  },
};

export const HeadingSix: Story = {
  args: {
    source: `###### Remember to use sentence case`,
  },
};

export const ListUnordered: Story = {
  args: {
    source: `
* one thing
* another thing
  * something inside another thing
* finally
`,
  },
};

export const CodeInline: Story = {
  args: {
    source: `check it out, \`some code\` :)`,
  },
};

export const CodeFenced: Story = {
  args: {
    source: `
\`\`\`nix
check it out, some code :)
\`\`\`
`,
  },
};

export const Blockquote: Story = {
  args: {
    source: `
> A new take on the classic quote:
>> We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard.

> Which instead goes:
>> We do these things **not because they are easy**, but because we *thought* they were going to be easy.

`,
  },
};

export const Link: Story = {
  args: {
    source: `here comes a link [this is a link](https://example.com) there goes a link`,
  },
};

export const Image: Story = {
  args: {
    source: `![alt text](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAUCAAAAAAVAxSkAAABrUlEQVQ4y+3TPUvDQBgH8OdDOGa+oUMgk2MpdHIIgpSUiqC0OKirgxYX8QVFRQRpBRF8KShqLbgIYkUEteCgFVuqUEVxEIkvJFhae3m8S2KbSkcFBw9yHP88+eXucgH8kQZ/jSm4VDaIy9RKCpKac9NKgU4uEJNwhHhK3qvPBVO8rxRWmFXPF+NSM1KVMbwriAMwhDgVcrxeMZm85GR0PhvGJAAmyozJsbsxgNEir4iEjIK0SYqGd8sOR3rJAGN2BCEkOxhxMhpd8Mk0CXtZacxi1hr20mI/rzgnxayoidevcGuHXTC/q6QuYSMt1jC+gBIiMg12v2vb5NlklChiWnhmFZpwvxDGzuUzV8kOg+N8UUvNBp64vy9q3UN7gDXhwWLY2nMC3zRDibfsY7wjEkY79CdMZhrxSqqzxf4ZRPXwzWJirMicDa5KwiPeARygHXKNMQHEy3rMopDR20XNZGbJzUtrwDC/KshlLDWyqdmhxZzCsdYmf2fWZPoxCEDyfIvdtNQH0PRkH6Q51g8rFO3Qzxh2LbItcDCOpmuOsV7ntNaERe3v/lP/zO8yn4N+yNPrekmPAAAAAElFTkSuQmCC)`,
  },
};

export const Table: Story = {
  args: {
    source: `
| Header 1 | Header 2 |
| -------- | -------- |
| cell 1   | cell 2   |
| cell 3   | cell 4   |
`,
  },
};

export const Strikethrough: Story = {
  args: {
    source: `~~nevermind~~`,
  },
};
