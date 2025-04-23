type FlexboxProps = {
    children: React.ReactNode | React.ReactNode[]
}

export function Flexbox(props: FlexboxProps) {
    return (
        <div className="columns">
            {
                Array.isArray(props.children)
                    ? props.children.map((child, index) => (
                        <div className="column" key={index}>
                            {child}
                        </div>
                    ))
                    : (
                        <div className="column">
                            {props.children}
                        </div>
                    )
            }
        </div>
    )
}