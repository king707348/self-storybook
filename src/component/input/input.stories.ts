import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { styleMap } from 'lit/directives/style-map.js';
import { fn } from "storybook/test";
import { html, LitElement } from "lit";

import type { UseInputProps, PlaceHolderMap } from "./types";
import { UseInput } from "./index";
import { pattern_limit } from "./mail_pattern";

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
  search: "find something...",
  tel: "09xxxxxxxx",
  url: "Enter URL here",
};

class StatefulInputWraper extends LitElement {
    static properties = {
        args: { type: Object},
        dynamicErr: { type: String}
    }
    args: any
    dynamicErr: boolean | undefined

    constructor() {
        super();
        this.args = {};
        this.dynamicErr = undefined;
    }

    protected createRenderRoot() {
        return this;
    }

    render() {
        const { type, className, placeHolder, showFeedback, pass, fail, ...resArgs } = this.args
        const currentPlaceHolder = placeHolder
            ? placeHolder
            : placeHolderMap[type] || "";

        const useClass = ["text", "password", "email", "number","search", "tel", "url"].includes(type) ? " border-b-1" : "";
        const needsFeedback = ["email"].includes(type)

        return UseInput({
            type, 
            placeHolder: currentPlaceHolder,
            className: [className, useClass].join(''),
            showFeedback: needsFeedback,
            pass,
            fail,
            ...resArgs,
            onInput: (e) => {
                if(type === 'email') {
                    const result = pattern_limit(e)
                    this.dynamicErr = result.success
                }
            },
            errorMessage: this.dynamicErr
        })
    }
}

if (!customElements.get("stateful-input-wrapper")) {
    customElements.define("stateful-input-wrapper", StatefulInputWraper);
}
    
const meta = {
  title: "component/Input",
  tags: ["autodocs"],
  argTypes: {
    // 在面板上徹底隱藏，不讓使用者看到
    showFeedback: {
        table: { disable: false }
    },
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
    pass: {
        control: "text",
        if: { arg: 'showFeedback', eq: true }
    },
    fail: {
        control: "text" ,
        if: { arg: 'showFeedback', eq: true }
    }
  },
  render: (args) => {
    return html`<stateful-input-wrapper 
        .args=${args} 
        type=${args.type} 
        className=${args.className}
        style=${styleMap(args.style || {})}
        size=${args.size}
        placeHolder=${args.placeHolder}
        pass=${args.pass}
        fail=${args.fail}
    />`
  },
  args: { onInput: fn() },
} satisfies Meta<UseInputProps>;

type Story = StoryObj<UseInputProps>;

export const Text: Story = {
  args: {
    type: "text",
    className: "font-bold",
    style: {},
    size: "medium",
    placeHolder: placeHolderMap.text
  }
};

export const Password: Story = {
  args: {
    type: "password",
    className: "",
    style: {},
    size: "medium",
    placeHolder: placeHolderMap.password,
  },
};
export const Email: Story = {
  args: {
    type: "email",
    className: "",
    style: {},
    size: "medium",
    placeHolder: placeHolderMap.email,
    errorMessage: "",
    pass: "Valid email address",
    fail: "Please enter a valid email address"
  },
};
export const Number: Story = {
  args: {
    type: "number",
    className: "",
    style: {},
    size: "medium",
    placeHolder: placeHolderMap.number,
  },
};
export const File: Story = {
  args: {
    type: "file",
    className: "",
    style: {},
    size: "medium",
  },
};
export const Date: Story = {
  args: {
    type: "date",
    className: "",
    style: {},
    size: "medium",
  },
};
export const Color: Story = {
  args: {
    type: "color",
    className: "",
    style: {},
    size: "medium",
  },
};
export const Checkbox: Story = {
  args: {
    type: "checkbox",
    className: "",
    style: {},
    size: "medium",
  },
};
export const Radio: Story = {
  args: {
    type: "radio",
    className: "",
    style: {},
    size: "medium",
  },
};
export const Range: Story = {
  args: {
    type: "range",
    className: "",
    style: {},
    size: "medium",
  },
};
export const Search: Story = {
  args: {
    type: "search",
    className: "",
    style: {},
    size: "medium",
  },
};
export const Tel: Story = {
  args: {
    type: "tel",
    className: "",
    style: {},
    size: "medium",
    placeHolder: placeHolderMap.tel,
  },
};
export const Url: Story = {
  args: {
    type: "url",
    className: "",
    style: {},
    size: "medium",
    placeHolder: placeHolderMap.url,
  },
};

export default meta;
