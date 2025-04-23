import { Container, Flexbox, FormBuilder, Text } from "@/components"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: Index })

function Index() {
    const formBuilder = FormBuilder()

    return (
        <Container fullWidth>
            <Flexbox>
                <div></div>
                <div className="p-2">
                    <Text value='Contato' size={4} isTitle />
                    {
                        formBuilder
                            .addInput({
                                label: 'Nome',
                                name: 'name',
                            })
                            .addInput({
                                label: 'Email',
                                name: 'email'
                            })
                            .addTextarea({
                                label: 'Mensagem',
                                name: 'message'
                            })
                            .addButton({
                                label: 'Enviar',
                                name: 'submit'
                            })
                            .build()
                    }
                </div>
            </Flexbox>
        </Container>
    )
}