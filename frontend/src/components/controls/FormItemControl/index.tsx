import { useFooterForm } from '@scripts/hooks/useFooterForm';
import { useFormField } from '@scripts/hooks/useFormField';
import { useFormTitle } from '@scripts/hooks/useFormTitle';

interface FormItemControlProps {
    type: string;
    labelText: string;
}

const FormItemControl = ({ labelText, type }: FormItemControlProps) => {
    const formStyles = useFooterForm();
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
