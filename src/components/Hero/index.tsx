import { BulmaColor } from "@/utils/styleUtils"

type HeroProps = {
    title?: string
    subtitle?: string
    color?: BulmaColor
}

export function Hero(props: HeroProps) {
    return (
        <section className={`hero is-${props.color}`}>
            <div className="hero-body">
                <p className="title">{props.title}</p>
                <p className="subtitle">{props.subtitle}</p>
            </div>
        </section>
    )
}