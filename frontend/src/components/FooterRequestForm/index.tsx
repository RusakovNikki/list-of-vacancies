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
            <div className="form-item footer__form">
                <label htmlFor="name" className="form-item__title rubik-regular">
                    Your name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Please introduce yourself"
                    className="form-item__field rubik-regular"
                    required
                />
            </div>
            <div className="form-item footer__form">
                <label htmlFor="email" className="form-item__title rubik-regular">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ivanov@mail.ru"
                    className="form-item__field"
                    required
                />
            </div>
            <div className="form-item footer__form">
                <label htmlFor="phone" className="form-item__title rubik-regular">
                    Phone number
                </label>
                <input
                    className="form-item__field rubik-regular"
                    placeholder="+7(999) 999 9999"
                    id="phone"
                    name="phone"
                />
            </div>
            <div className="form-item footer__form">
                <label htmlFor="comment" className="form-item__title rubik-regular">
                    Comment
                </label>
                <input
                    id="comment"
                    type="text"
                    name="comment"
                    placeholder="Message text"
                    className="form-item__field rubik-regular"
                />
            </div>
            <button type="submit" className="button footer__buttom">
                Отправить
            </button>
        </form>
    );
};

export default FooterRequestForm;
