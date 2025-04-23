type TextProps = {
    value?: any
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    responsive?: 'mobile' | 'touch' | 'tablet' | 'desktop' | 'widescreen' | 'fullhd'
    alignment?: 'centered' | 'justified' | 'left' | 'right'
    transform?: 'capitalized' | 'lowercase' | 'uppercase' | 'italic' | 'underlined'
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
    family?: 'sans-serif' | 'monospace' | 'primary' | 'secondary' | 'code'
}

export function Text(props: TextProps) {
    return (
        <span className={`
        is-size-${props.size} ${props.responsive && `-${props.responsive}`}
        has-text-${props.alignment} 
        text-${props.transform} 
        text-${props.weight} 
        text-${props.family}`
        }>
            {props.value}
        </span>
    )
}