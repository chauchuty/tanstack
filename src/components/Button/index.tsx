import { BulmaColor } from "@/utils/styleUtils";
import { JSX } from "react";

export type ButtonProps = {
    name: string
    label?: string
    type?: HTMLButtonElement['type']
    disabled?: boolean
    color?: BulmaColor
    isFullWidth?: boolean;
    onClick?: () => void;
    onSubmit?: () => void;
    children?: JSX.Element | JSX.Element[]
}

export function Button(props: ButtonProps) {
    return (
        <button
            key={props.name}
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}
            onSubmit={props.onSubmit}
            className={`button is-${props.color} 
            ${props.isFullWidth ? 'is-fullwidth' : ''}
            `}
        >
            {props.label || props.children}
        </button>
    )
}