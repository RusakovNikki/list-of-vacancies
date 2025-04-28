import FormField from '@components/FormField';

import { useFormItem } from '@scripts/hooks/useFormItem';
import { useFormTitle } from '@scripts/hooks/useFormTitle';

interface FormItemControlProps {
    type: string;
    labelText: string;
}

const FormItemControl = ({ labelText, type }: FormItemControlProps) => {
    const formStyles = useFormItem();
    const formTitleStyles = useFormTitle();
    return (
        <div css={formStyles}>
            <label htmlFor={type} css={formTitleStyles}>
                {labelText}
            </label>
            <FormField id={type} type="text" placeholder="Не указано" name={type} />
        </div>
    );
};

export default FormItemControl;
