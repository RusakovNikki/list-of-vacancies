import { useFormField } from '@scripts/hooks/useFormField';
import { useFormItem } from '@scripts/hooks/useFormItem';
import { useFormTitle } from '@scripts/hooks/useFormTitle';

interface FormItemControlProps {
    type: string;
    labelText: string;
}

const FormItemControl = ({ labelText, type }: FormItemControlProps) => {
    const formStyles = useFormItem();
    const formTitleStyles = useFormTitle();
    const formFieldStyles = useFormField();
    return (
        <div css={formStyles}>
            <label htmlFor={type} css={formTitleStyles}>
                {labelText}
            </label>
            <input id={type} type="text" placeholder="Не указано" css={formFieldStyles} name={type} />
        </div>
    );
};

export default FormItemControl;
