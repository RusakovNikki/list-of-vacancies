import Button from '@components/Button';
import FormField from '@components/FormField';
import FormItemControl from '@components/controls/FormItemControl';

import { useFormItem } from '@scripts/hooks/useFormItem';
import { useFormTitle } from '@scripts/hooks/useFormTitle';

const FooterRequestForm = () => {
    const footerFormStyles = useFormItem();
    const footerFormTitleStyles = useFormTitle();

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
                <FormField placeholder="+7(999) 999 9999" id="phone" name="phone" />
            </div>
            <FormItemControl labelText="Comment" type="comment" />
            <Button type="submit">Отправить</Button>
        </form>
    );
};

export default FooterRequestForm;
