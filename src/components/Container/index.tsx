type ContainerProps = {
    fullWidth?: boolean
    children: React.ReactNode
    rest?: string
}

export function Container(props: ContainerProps) {
    return (
        <div className={`container ${props.fullWidth ? 'is-fullhd' : ''} ${props.rest}`}>
            {props.children}
        </div>
    )
}