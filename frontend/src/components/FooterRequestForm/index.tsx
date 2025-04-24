import { css } from '@emotion/react';

import { useFooterForm } from '@scripts/hooks/useFooterForm';
import { useFooterFormField } from '@scripts/hooks/useFooterFormField';
import { useFooterFormTitle } from '@scripts/hooks/useFooterFormTitle';

const FooterRequestForm = () => {
    const footerFormStyles = useFooterForm();
    const footerFormTitleStyles = useFooterFormTitle();
    const footerFormFieldStyles = useFooterFormField();
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
            <div css={footerFormStyles}>
                <label htmlFor="fullName" css={footerFormTitleStyles}>
                    Your name
                </label>
                <input
                    id="name"
                    name="fullName"
                    type="text"
                    placeholder="Please introduce yourself"
                    required
                    css={footerFormFieldStyles}
                />
            </div>
            <div css={footerFormStyles}>
                <label htmlFor="email" css={footerFormTitleStyles}>
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ivanov@mail.ru"
                    className="form-item__field"
                    css={footerFormFieldStyles}
                    required
                />
            </div>
            <div css={footerFormStyles}>
                <label htmlFor="phone" css={footerFormTitleStyles}>
                    Phone number
                </label>
                <input css={footerFormFieldStyles} placeholder="+7(999) 999 9999" id="phone" name="phone" />
            </div>
            <div css={footerFormStyles}>
                <label htmlFor="comment" css={footerFormTitleStyles}>
                    Comment
                </label>
                <input id="comment" type="text" name="comment" placeholder="Message text" css={footerFormFieldStyles} />
            </div>
            <button type="submit" className="button footer__buttom">
                Отправить
            </button>
        </form>
    );
};

export default FooterRequestForm;
