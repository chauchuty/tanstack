import { AnyFieldApi, useForm } from "@tanstack/react-form"
import { JSX } from "react"
import { Button } from "../Button"

type Field = {
    label: string
    name: string
}

type InputProps = {
    type?: HTMLInputElement['type']
    placeholder?: HTMLInputElement['placeholder']
} & Field

type ButtonProps = {
    type?: HTMLButtonElement['type']
} & Field

export function FormBuilder() {
    const form = useForm({
        defaultValues: {
            name: ''
        },
        onSubmit: ({ value }) => {
            console.log(value)
        }
    })
    const fields: JSX.Element[] = []
    const buttons: JSX.Element[] = []

    return {
        addInput(input: InputProps) {
            fields.push(
                <form.Field
                    key={input.name}
                    name="name"
                    children={(field) => (
                        <div className="field">
                            <label className="label">{input.label}</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    autoComplete="off"
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                            </div>
                            <FieldInfo field={field} />
                        </div>

                    )}
                />
            )
            return this
        },
        addButton(button: ButtonProps) {
            buttons.push(
                <div key={button.name} className="control">
                    <Button label={button.label} name={button.name} type={button.type} />
                </div>
            )
            return this
        },
        build() {
            return (
                <form
                    key={'form'}
                    onSubmit={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        form.handleSubmit()
                    }}
                >
                    {fields}
                    <div className="field is-grouped">
                        {buttons}
                    </div>
                </form>
            )
        }

    }
}

function FieldInfo({ field }: { field: AnyFieldApi }) {
    return (
        <p className="help">
            {field.state.meta.isTouched && field.state.meta.errors.length ? (
                <em>{field.state.meta.errors.join(', ')}</em>
            ) : null}
            {field.state.meta.isValidating ? 'Validating...' : 'Texto de ajuda'}
        </p>
    )
}