import { BulmaColor } from "@/utils/styleUtils";

type ButtonProps = {
    label: string;
    type?: 'button' | 'submit';
    color?: BulmaColor
    isFullWidth?: boolean;
    onClick?: () => void;
    onSubmit?: () => void;
}

export function Button(props: ButtonProps) {
    return (
        <button
            className={`button is-${props.color} 
            ${props.isFullWidth ? 'is-fullwidth' : ''}
            `}
            type={props.type}
            onClick={props.onClick}
            onSubmit={props.onSubmit}
        >
            {props.label}
        </button>
    )
}