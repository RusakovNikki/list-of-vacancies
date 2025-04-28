import FormItemControl from '@components/controls/FormItemControl';

import { useButton } from '@scripts/hooks/useButton';
import { useFormField } from '@scripts/hooks/useFormField';
import { useFormItem } from '@scripts/hooks/useFormItem';
import { useFormTitle } from '@scripts/hooks/useFormTitle';

const FooterRequestForm = () => {
    const footerFormStyles = useFormItem();
    const footerFormTitleStyles = useFormTitle();
    const footerFormFieldStyles = useFormField();
    const buttonStyles = useButton();

    function handleSubmit(formData: FormData) {
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const comment = formData.get('comment');

        console.log(`
      Ваше имя ${name}
      Ваша почта ${email}
      Ваш номер ${phone}
      Ваш коментарий ${comment}
    `);
    }

    return (
        <form action={handleSubmit}>
            <FormItemControl labelText="Your name" type="fullName" />
            <FormItemControl labelText="Email" type="email" />
            <div css={footerFormStyles}>
                <label htmlFor="phone" css={footerFormTitleStyles}>
                    Phone number
                </label>
                <input css={footerFormFieldStyles} placeholder="+7(999) 999 9999" id="phone" name="phone" />
            </div>
            <FormItemControl labelText="Comment" type="comment" />
            <button type="submit" style={buttonStyles}>
                Отправить
            </button>
        </form>
    );
};

export default FooterRequestForm;
