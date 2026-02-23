import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { fn } from "storybook/test";

import type { UseInputProps, PlaceHolderMap } from "./types";
import { UseInput } from "./index";

const select_type: string[] = [
  "text",
  "password",
  "email",
  "number",
  "file",
  "date",
  "color",
  "checkbox",
  "radio",
  "range",
  "search",
  "tel",
  "url",
];

const placeHolderMap: PlaceHolderMap = {
  text: "Enter text here",
  password: "Enter password here",
  email: "user@example.xx",
  number: "Enter number here",
  file: "",
  date: "",
  color: "",
  checkbox: "",
  radio: "",
  range: "",
  search: "",
  tel: "09xxxxxxxx",
  url: "Enter URL here",
};

const meta = {
  title: "component/Input",
  tags: ["autodocs"],
  render: (args: UseInputProps) => {
    const currentPlaceHolder =
      placeHolderMap[args.type] !== undefined
        ? placeHolderMap[args.type]
        : args.placeHolder;

    const useClass = ["text", "password", "email", "number","search", "tel", "url"].includes(args.type) ? "border-b-1" : "";

    return UseInput({ ...args, placeHolder: currentPlaceHolder, className: useClass });
  },
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: select_type,
    },
    className: {
      control: "text",
    },
    style: {
      control: "object",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    placeHolder: {
      control: "text",
    },
  },
  args: { onInput: fn() },
} satisfies Meta<UseInputProps>;

type Story = StoryObj<UseInputProps>;

export const Text: Story = {
  args: {
    type: "text",
    className: "border-b-1",
    style: { "z-index": 1 },
    size: "medium",
    placeHolder: "Enter text here",
    onInput: (e) => console.log("Input event:", e),
  },
};

export const Password: Story = {
  args: {
    type: "password",
    className: "",
    style: { "z-index": 1 },
    size: "medium",
    placeHolder: "Enter password here",
  },
};
export const Email: Story = {
  args: {
    type: "email",
    className: "",
    style: { "z-index": 1 },
    size: "medium",
    placeHolder: "user@example.xx",
  },
};
export const Number: Story = {
  args: {
    type: "number",
    className: "",
    style: { "z-index": 1 },
    size: "medium",
    placeHolder: "Enter number here",
  },
};
export const File: Story = {
  args: {
    type: "file",
    className: "",
    style: { "z-index": 1 },
    size: "medium",
  },
};
export const Date: Story = {
  args: {
    type: "date",
    className: "",
    style: { "z-index": 1 },
    size: "medium",
  },
};
export const Color: Story = {
  args: {
    type: "color",
    className: "",
    style: { "z-index": 1 },
    size: "medium",
  },
};
export const Checkbox: Story = {
  args: {
    type: "checkbox",
    className: "",
    style: { "z-index": 1 },
    size: "medium",
  },
};
export const Radio: Story = {
  args: {
    type: "radio",
    className: "",
    style: { "z-index": 1 },
    size: "medium",
  },
};
export const Range: Story = {
  args: {
    type: "range",
    className: "",
    style: { "z-index": 1 },
    size: "medium",
  },
};
export const Search: Story = {
  args: {
    type: "search",
    className: "",
    style: { "z-index": 1 },
    size: "medium",
  },
};
export const Tel: Story = {
  args: {
    type: "tel",
    className: "",
    style: { "z-index": 1 },
    size: "medium",
    placeHolder: "",
  },
};
export const Url: Story = {
  args: {
    type: "url",
    className: "",
    style: { "z-index": 1 },
    size: "medium",
    placeHolder: "Enter URL here",
  },
};

export default meta;
