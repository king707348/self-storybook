import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { fn } from 'storybook/test';

import type { UseInputProps } from '../component/input/index.js';
import { UseInput } from '../component/input/index.js';

const meta = {
    title: 'component/Input',
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
        style: {
            control: 'object'
        },
        size: { 
            control: { type: 'select' }, 
            options: ['small', 'medium', 'large'] 
        },
        placeHolder: {
            control: 'text'
        }
    },
    args: { onInput: fn() },
} satisfies Meta<UseInputProps>;

type Story = StoryObj<UseInputProps>

export const Text: Story = {
    args: {
        type: 'text',
        className: 'border-0 border-b-1',
        style: {'z-index': 1},
        size: 'medium',
        placeHolder: 'Enter text here',
        onInput: (e) => console.log('Input event:', e)
    }
}

export const Password: Story = {
    args: {
        type: 'password',
        className: '',
        style: {'z-index': 1},
        size: 'medium',
        placeHolder: 'Enter password here'
    }
}
export const Email: Story = {
    args: {
        type: 'email',
        className: '',
        style: {'z-index': 1},
        size: 'medium',
        placeHolder: 'user@example.xx'
    }
}
export const Number: Story = {
    args: {
        type: 'number',
        className: '',
        style: {'z-index': 1},
        size: 'medium',
        placeHolder: 'Enter number here',
    }
}
export const File: Story = {
    args: {
        type: 'file',
        className: '',
        style: {'z-index': 1},
        size: 'medium',
    }
}

export default meta