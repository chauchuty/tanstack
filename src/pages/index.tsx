import { Button, Container, Flexbox, Text } from "@/components"
import { FormBuilder } from "@/components/FormBuilder"
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
                                label: "Nome",
                                name: "name",
                            })
                            .addInput({
                                label: "Email",
                                name: "email"
                            })
                            .addInput({
                                label: "Assunto",
                                name: "subject"
                            })
                            .addTextarea({
                                label: "Mensagem",
                                name: "message"
                            })
                            .build()
                    }
                </div>
            </Flexbox>
        </Container>
    )
}