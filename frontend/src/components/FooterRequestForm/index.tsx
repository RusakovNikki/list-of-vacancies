import FormItemControl from '@components/controls/FormItemControl';

import { useFooterForm } from '@scripts/hooks/useFooterForm';
import { useFormField } from '@scripts/hooks/useFormField';
import { useFormTitle } from '@scripts/hooks/useFormTitle';

const FooterRequestForm = () => {
    const footerFormStyles = useFooterForm();
    const footerFormTitleStyles = useFormTitle();
    const footerFormFieldStyles = useFormField();

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
            <button type="submit" className="button footer__buttom">
                Отправить
            </button>
        </form>
    );
};

export default FooterRequestForm;
