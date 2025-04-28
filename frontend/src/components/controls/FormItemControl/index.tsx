import FormField from '@components/FormField';
import FormItem from '@components/FormItem';

import { useFormTitle } from '@scripts/hooks/useFormTitle';

interface FormItemControlProps {
    type: string;
    labelText: string;
}

const FormItemControl = ({ labelText, type }: FormItemControlProps) => {
    const formTitleStyles = useFormTitle();
    return (
        <FormItem>
            <label htmlFor={type} css={formTitleStyles}>
                {labelText}
            </label>
            <FormField id={type} type="text" placeholder="Не указано" name={type} />
        </FormItem>
    );
};

export default FormItemControl;
