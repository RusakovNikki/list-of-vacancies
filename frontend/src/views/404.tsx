import { typography } from '@scripts/gds';

const NotFoundPage = () => {
    return (
        <div css={{ textAlign: 'center' }}>
            <p css={{ ...typography('h1') }}>Такая страница не найдена</p>
            <span css={{ ...typography('h1') }}>🤧</span>
        </div>
    );
};

export default NotFoundPage;
