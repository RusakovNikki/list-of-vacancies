import { typography } from '@scripts/gds';

type FormFieldProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const FormField = (props: FormFieldProps) => {
    return (
        <input
            {...props}
            css={{
                border: 'none',
                width: 'inherit',
                color: '#a3a6a9',
                marginTop: '7px',
                borderBottom: '1px solid black',
                ...typography('bodyMd'),
            }}
        />
    );
};

export default FormField;
