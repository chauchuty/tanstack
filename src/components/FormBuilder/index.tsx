import { AnyFieldApi, useForm } from '@tanstack/react-form'
import { Button } from '../Button';

type Field = {
    label: string;
    name: string;
    value?: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    validators?: {
        onChange?: (value: any) => string | undefined;
        onChangeAsyncDebounceMs?: number;
        onChangeAsync?: (value: any) => Promise<string | undefined>;
    }
}

type FormBuilderProps = {
    fields: Field[]
    buttons?: React.ComponentProps<typeof Button>[]
    onSubmit: (data: Record<string, any>) => void
}

function FieldInfo({ field }: { field: AnyFieldApi }) {
    return (
        <>
            {field.state.meta.isTouched && field.state.meta.errors.length ? (
                <em>{field.state.meta.errors.join(', ')}</em>
            ) : null}
            {field.state.meta.isValidating ? 'Validando...' : null}
        </>
    )
}

export function FormBuilder(props: FormBuilderProps) {
    const form = useForm({
        defaultValues: props.fields.reduce((acc, field) => {
            acc[field.name] = field.value || ''
            return acc
        }, {} as Record<string, any>),
        onSubmit: async ({ value }) => {
            props.onSubmit(value)
        }
    })

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
            }}
        >
            <div>
                {props.fields.map((_field) => (
                    <form.Field
                        key={_field.name}
                        name={_field.name}
                        validators={_field.validators}
                        children={(field) => {
                            return (
                                <>
                                    <label
                                        htmlFor={field.name}
                                        className='label'
                                    >{_field.label}
                                    </label>
                                    <input
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        autoComplete='off'
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        className='input'
                                    />
                                    <FieldInfo field={field} />
                                </>
                            )
                        }}
                    />
                ))}
                <div className='mt-4'>
                    {
                        props.buttons?.map((button) => (
                            <Button
                                key={button.label}
                                label={button.label}
                                color={button.color}
                                isFullWidth={button.isFullWidth}
                                onClick={button.onClick}
                            />
                        ))
                    }
                </div>
            </div>
        </form>
    )
}


