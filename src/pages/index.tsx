import { Button, Container, Flexbox, Text} from "@/components"
import { FormBuilder } from "@/components/FormBuilder"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: Index })

function Index() {
    return (
        <Container fullWidth>
            <Flexbox>
                <div></div>
                <div className="p-2">
                    <Text value='Contato' size={4} />
                    <FormBuilder
                        fields={[
                            {
                                name: "name",
                                label: "Nome",
                                type: "text",
                                value: "Cesar",
                                placeholder: "Digite seu nome",
                                required: true,
                                validators: {
                                    onChange: ({ value }) => {
                                        if(!value) {
                                            return "Nome é obrigatório"
                                        }
                                        if (value.length < 10) {
                                            return "Nome muito curto"
                                        }

                                    },
                                },
                            },
                            {
                                name: "email",
                                label: "Email",
                                type: "email",
                                placeholder: "Digite seu email",
                                required: true,
                            },
                        ]}
                        buttons={[
                            {
                                label: "Enviar",
                                type: "submit",
                                color: "info",
                                isFullWidth: true,
                                onClick: () => {
                                    console.log("Enviando")
                                },
                            },
                        ]}
                        onSubmit={(data) => {
                            console.log(data)
                        }}
                    />
                </div>
            </Flexbox>
        </Container>
    )
}