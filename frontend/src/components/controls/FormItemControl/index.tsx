import FormField from '@components/FormField';
import FormItem from '@components/FormItem';

interface FormItemControlProps {
    type: string;
    labelText: string;
}

const FormItemControl = ({ labelText, type }: FormItemControlProps) => {
    return (
        <FormItem>
            <label htmlFor={type}>{labelText}</label>
            <FormField id={type} type="text" placeholder="Не указано" name={type} />
        </FormItem>
    );
};

export default FormItemControl;
