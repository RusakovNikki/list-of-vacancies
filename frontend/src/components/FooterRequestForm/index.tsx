import Button from '@components/controls/Button';
import FormField from '@components/controls/FormField';
import FormItem from '@components/controls/FormItem';
import FormItemControl from '@components/controls/FormItemControl';

const FooterRequestForm = () => {
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
            <FormItem>
                <label htmlFor="phone">Phone number</label>
                <FormField placeholder="+7(999) 999 9999" id="phone" name="phone" />
            </FormItem>
            <FormItemControl labelText="Comment" type="comment" />
            <Button type="submit">Отправить</Button>
        </form>
    );
};

export default FooterRequestForm;
