
import { Container, Hero } from '@/components'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
    component: () => (
        <Container fullWidth>
            <Hero
                title='Cesar M. Chauchuty'
                subtitle='Developer'
                color='info' />
            <Outlet />
            {
                import.meta.env.VITE_MODE == 'development' && (
                    <TanStackRouterDevtools />
                )
            }
        </Container>
    ),
})