import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { fn } from 'storybook/test';

import type { UseInputProps } from '../component/use-input/index';
import { UseInput } from '../component/use-input/index';

const meta = {
    title: 'component/useInput',
    tags: ['autodocs'],
    render: (args) => UseInput(args),
    argTypes: {
        type: {
            control: {
                type: 'select',
            },
            options: ['text', 'password', 'email', 'number', 'file', 'date', 'color', 'checkbox', 'radio', 'range', 'search', 'tel', 'url'],
        },
        className: { 
            control: 'text' 
        },
        placeHolder: {
            control: 'text'
        },
        size: { 
            control: { type: 'select' }, 
            options: ['small', 'medium', 'large'] 
        },
    },
    args: { onInput: fn() },
} satisfies Meta<UseInputProps>;

type Story = StoryObj<UseInputProps>

export const Text: Story = {
    args: {
        type: 'text',
        className: '',
        size: 'medium',
        placeHolder: 'Enter text here'
    }
}

export const password: Story = {
    args: {
        type: 'password',
        className: '',
        size: 'medium',
        placeHolder: 'Enter password here'
    }
}
export const Email: Story = {
    args: {
        type: 'email',
        className: '',
        size: 'medium',
        placeHolder: 'xxxx@xxx.xx',
        pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
    }
}
export const number: Story = {
    args: {
        type: 'number',
        className: '',
        size: 'medium',
        placeHolder: 'Enter number here',
        pattern: "^[0-9]+$"
    }
}
export const File: Story = {
    args: {
        type: 'file',
        className: '',
        size: 'medium',
    }
}

export default meta