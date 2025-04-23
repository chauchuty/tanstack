import { AnyFieldApi, useForm } from '@tanstack/react-form';
import { Button } from '../Button';
import { JSX } from 'react';

type Field = {
  label: string;
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  validators?: {
    onChange?: (value: any) => string | undefined;
    onBlur?: (value: any) => string | undefined;
    onChangeAsyncDebounceMs?: number;
    onChangeAsync?: (value: any) => Promise<string | undefined>;
  };
};

type Input = {
  type?: HTMLInputElement["type"]
} & Field;

type Textarea = {} & Field

type FormBuilderReturn = {
  addInput: (input: Input) => FormBuilderReturn;
  addTextarea: (textarea: Textarea) => FormBuilderReturn
  build: () => JSX.Element;
};

export function FormBuilder(): FormBuilderReturn {
  const form = useForm();
  const fields: JSX.Element[] = [];
  const buttons: React.ComponentProps<typeof Button>[] = [];
  let onSubmit: ((data: Record<string, any>) => void) | undefined;

  const addInput = (input: Input): FormBuilderReturn => {
    fields.push(
      <form.Field
        key={input.name}
        name={input.name}
        validators={input.validators}
      >
        {(field) => (
          <>
            <label htmlFor={field.name} className="label">
              {input.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={input.type}
              autoComplete="off"
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className={`input ${
                field.state.meta.isTouched && field.state.meta.errors.length
                  ? 'is-danger'
                  : ''
              }`}
            />
            <FieldInfo field={field} />
          </>
        )}
      </form.Field>
    );
    return builder;
  };

  const addTextarea = (input: Field): FormBuilderReturn => {
    fields.push(
      <form.Field
        key={input.name}
        name={input.name}
        validators={input.validators}
      >
        {(field) => (
          <>
            <label htmlFor={field.name} className="label">
              {input.label}
            </label>
            <textarea
              id={field.name}
              name={field.name}
              autoComplete="off"
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className={`textarea ${
                field.state.meta.isTouched && field.state.meta.errors.length
                  ? 'is-danger'
                  : ''
              }`}
              placeholder={input.placeholder}
            />
            <FieldInfo field={field} />
          </>
        )}
      </form.Field>
    );
    return builder;
  };

  const build = (): JSX.Element => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit({
            // onSubmit: async ({ value }) => {
            //   if (onSubmit) {
            //     onSubmit(value);
            //   }
            // },
          });
        }}
      >
        <div>
          {fields}
          <div className="mt-4">
            {buttons.map((button, idx) => (
              <Button key={button.label || idx} {...button} />
            ))}
          </div>
        </div>
      </form>
    );
  };

  const builder: FormBuilderReturn = {
    addInput,
    addTextarea,
    build,
  };

  return builder;
}

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <p className="help is-danger">
          {field.state.meta.errors.join(', ')}
        </p>
      ) : null}
      {field.state.meta.isValidating ? 'Validando...' : null}
    </>
  );
}
